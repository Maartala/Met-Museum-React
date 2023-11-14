import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearch = async () => {
        try {
            // Erster Fetch, um die IDs zu erhalten
            const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${input}`);
            const data = await response.json();

            // Zweiter Fetch für jede ID
            const detailsPromises = data.objectIDs.map(async (id) => {
                try {
                    const detailResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
                    if (!detailResponse.ok) {
                        throw new Error(`Error fetching details for object with ID ${id}: ${detailResponse.status} - ${detailResponse.statusText}`)
                    }
                    return await detailResponse.json();
                } catch (detailError) {
                    console.error(detailError);
                    console.error(detailError);
                    return null

                }
            });

            const details = await Promise.all(detailsPromises);

            // Callback an die übergeordnete Komponente senden
            onSearch(details.filter(detail => detail !== null));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;