import { useState } from 'react';
import { useSearchContext } from './SearchContext';

import deleteIcon from '../assets/img/delete-icon.png';
import lupe from '../assets/img/lupe-grau.png';
import './SearchBar.css'


const SearchBar = ({ onKeyDown, onSearch }) => {
    const { input, setInput } = useSearchContext();


    const handleInputChange = (e) => {
        setInput(e.target.value);
        // onInputChange(e)
    };

    const handleClearClick = () => {
        setInput('');
    }

    return (
        <div>
            <section className='searchWrapper'>
                <input
                    className='input'
                    type="text"
                    placeholder='Type to explore the Collection'
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={onKeyDown}
                />
                {input && (
                    <button className='clearButton' onClick={handleClearClick}>
                        <img className='deleteItem' src={deleteIcon} alt='delete-button' />
                    </button>
                )}
                <button className='searchButton' onClick={onSearch}><img className='lensImg' src={lupe} alt='search-button' />
                </button>
            </section>
        </div>
    );
};

export default SearchBar;