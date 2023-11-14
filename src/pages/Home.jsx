import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MetList from '../components/MetList';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (results) => {
        setSearchResults(results);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <MetList searchResults={searchResults} />
        </div>
    );
};

export default Home;