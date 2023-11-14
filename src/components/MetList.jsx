import MetItem from "./MetItem"

const MetList = ({ searchResults }) => {
    return (
        <div>
            <h2>Search Results</h2>

            {searchResults.map((result, i) => (
                <MetItem
                    key={i}
                    result={result}
                />
            ))}

        </div>
    );
};

export default MetList;