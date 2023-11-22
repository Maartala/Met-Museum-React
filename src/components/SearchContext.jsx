import { createContext, useContext, useState } from 'react';

// ein Context erstellen:
const SearchContext = createContext();

// einen Context-Provider verwenden, um den Input-Value bereitzustellen
export const SearchProvider = ({ children }) => {
    const [input, setInput] = useState('');


    return (
        <SearchContext.Provider value={{ input, setInput }}>
            {children}
        </SearchContext.Provider>
    );
};

//benutzerdefinierter Hook, um aus den Context zugreifen zu können
export const useSearchContext = () => {
    return useContext(SearchContext)
}

