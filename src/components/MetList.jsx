import { useSearchContext } from './SearchContext';
import MetItem from './MetItem';
import './MetList.css';

const MetList = () => {
    const { searchResults } = useSearchContext()

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