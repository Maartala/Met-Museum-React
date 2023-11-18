import React, { useState } from 'react';
import './Home.css';

import SearchBar from '../components/SearchBar';
import MetList from '../components/MetList';
import Header from '../components/Header'

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (results) => {
        setSearchResults(results);
        console.log(results);
    };

    return (
        <section>
            <h1>The Metropolitan Museum of Art</h1>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <MetList searchResults={searchResults} />
        </section>
    );
};

export default Home;