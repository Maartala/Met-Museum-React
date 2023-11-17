import MetItem from './MetItem';
import './MetList.css';

const MetList = ({ searchResults }) => {
    return (
        <section className='resultListGrid'>
            {searchResults.map((result, i) => (
                <MetItem
                    key={i}
                    result={result}
                />
            ))}

        </section>
    );
};

export default MetList;