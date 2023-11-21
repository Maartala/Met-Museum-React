import { useState } from 'react';
import lupe from '../assets/img/lupe-grau.png';

import { mirage } from 'ldrs'
mirage.register('my-mirage');


import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');
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
            const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${input}`);
            const data = await response.json();
            console.log(data);

            // Zweiter Fetch für jede ID
            const detailsPromises = data.objectIDs.slice(0, 50).map(async (id) => {
                try {
                    const detailResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
                    if (!detailResponse.ok) {
                        throw new Error(`Error fetching details for object with ID ${id}: ${detailResponse.status} - ${detailResponse.statusText}`)
                    }
                    return await detailResponse.json();
                } catch (detailError) {
                    console.error(detailError);
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
                <button className='searchButton' onClick={handleSearch}><img className='lensImg' src={lupe} />
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