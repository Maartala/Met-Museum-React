import React from 'react';

const MetList = ({ searchResults }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.objectID}>
                        {/* Hier kannst du die Details aus 'result' verwenden */}
                        {result.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MetList;