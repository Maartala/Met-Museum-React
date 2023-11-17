import './MetItem.css'

const MetItem = ({ result }) => {

    return (
        <article className='listItem'>
            <div className='imageWrapper' >
                <img className='imgSmall' src={result.primaryImageSmall} alt={result.title ? result.title : 'Title unknown'} />
            </div>
            <div className='infoWrapper'>
                <p className='cardArtist'>{result.artistDisplayName ? result.artistDisplayName : 'Artist unknown'}</p>
                <p className='cardTitle'>{result.title ? result.title : 'Title unknown'}</p>
            </div>

        </article>
    );
}

export default MetItem;