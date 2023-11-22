import { useState } from 'react';
import axios from 'axios';
import { useSearchContext } from './SearchContext.jsx'

import lupe from '../assets/img/lupe-grau.png';
import './SearchBar.css'

import { mirage } from 'ldrs'
mirage.register('my-mirage');


const SearchBar = ({ onSearch }) => {
    const { input, setInput } = useSearchContext();
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
            onSearch(details.filter(detail => detail !== null && detail.primaryImage !== undefined && detail.primaryImage !== ""));
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div>
            <section className='searchWrapper'>
                <input
                    className='input'
                    type="text"
                    placeholder='Type to explore the Collection'
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button className='searchButton' onClick={handleSearch}><img className='lensImg' src={lupe} alt='search-button' />
                </button>
            </section>
            <div className='loaderContainer'>
                {isLoading && <my-mirage
                    size="70"
                    speed="4.0"
                    color="var(--met-red-dark)"
                />}
            </div>
        </div>
    );
};

export default SearchBar;