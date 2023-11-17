import MetItem from './MetItem';

import { ping } from 'ldrs'
ping.register('l-ping');

import './MetList.css';

const MetList = ({ searchResults, isLoading }) => {
    return (
        <section className='resultListGrid'>
            <div className='loaderContainer'>
                {isLoading && <l-ping
                    size="45"
                    speed="2"
                    color="black"
                ></l-ping>}
            </div>
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