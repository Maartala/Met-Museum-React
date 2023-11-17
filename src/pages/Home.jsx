import React, { useState } from 'react';
import './Home.css';

import SearchBar from '../components/SearchBar';
import MetList from '../components/MetList';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (results) => {
        setSearchResults(results);
        console.log(results);
    };

    return (
        <section>
            <h1>The Metropolitan Museum of Art</h1>
            <SearchBar onSearch={handleSearch} isLoading={isLoading} setIsLoading={setIsLoading} />
            <MetList searchResults={searchResults} isLoading={isLoading} />
        </section>
    );
};

export default Home;