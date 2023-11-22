import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

import { mirage } from 'ldrs'
mirage.register('my-mirage');

import SearchBar from '../components/SearchBar';
import MetList from '../components/MetList';
import Header from '../components/Header'
import { useSearchContext } from '../components/SearchContext';

const Home = () => {
    const { input, setInput, searchResults, setSearchResults } = useSearchContext();
    // const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = async () => {
        try {
            setIsLoading(true)
            // Erster Fetch, um die IDs zu erhalten
            const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${input}`);
            const data = response.data;
            console.log(data);

            // Zweiter Fetch für jede ID
            const detailsPromises = data.objectIDs.slice(0, 50).map(async (id) => {
                try {
                    const detailResponse = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
                    const detailData = detailResponse.data;
                    return detailData
                } catch (detailError) {
                    console.error(`Error fetching details for object with ID ${id}`, detailError);
                    return null
                }
            });

            const details = await Promise.all(detailsPromises);

            // Callback an die übergeordnete Komponente senden
            setSearchResults(details.filter(detail => detail !== null && detail.primaryImage !== undefined && detail.primaryImage !== ""));
            console.log([searchResults]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section>
            <Header />
            <SearchBar
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onSearch={handleSearch}
            />
            <div className='loaderContainer'>
                {isLoading && <my-mirage
                    size="70"
                    speed="4.0"
                    color="var(--met-red-dark)"
                />}
            </div>
            <MetList searchResults={searchResults} />
        </section>
    );
};

export default Home;