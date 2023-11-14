import MetItem from "./MetItem"

const MetList = ({ searchResults }) => {
    return (
        <div>
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