import MetItem from './MetItem';
import './MetList.css';

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