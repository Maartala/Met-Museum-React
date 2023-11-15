import './MetItem.css'

const MetItem = ({ result }) => {

    return (
        <article className='listItem'>
            <div className='imageWrapper' style={{ backgroundImage: `url(${result.primaryImageSmall})` }} >
                {/* <img src={result.primaryImageSmall} alt="" /> */}
            </div>
            <div className='infoWrapper'>
                <h4 className='cardArtist'>{result.artistDisplayName}</h4>
                <p className='cardTitle'>{result.title}</p>
            </div>

        </article>
    );
}

export default MetItem;