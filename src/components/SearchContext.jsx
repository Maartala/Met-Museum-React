import { createContext, useContext, useState } from 'react';

// Context erstellen:
const SearchContext = createContext();

// Context-Provider verwenden, um den Input-Value bereitzustellen
export const SearchProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([])


    return (
        <SearchContext.Provider value={{ input, setInput, searchResults, setSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};

//benutzerdefinierter Hook, um auf den Context zugreifen zu können
export const useSearchContext = () => {
    return useContext(SearchContext)
}

