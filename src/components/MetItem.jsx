import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MetItem.css'

const MetItem = ({ result }) => {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true)
    };

    const handleMouseLeave = () => {
        setHovered(false)
    };

    const listItemStyle = {
        // height: hovered ? 'auto' : '370px'
    }

    const cardArtistStyle = {
        whiteSpace: hovered ? 'auto' : 'nowrap',
        // height: hovered ? 'auto' : 'inherit'
    }


    const cardTitleStyle = {
        whiteSpace: hovered ? 'normal' : 'nowrap',
        // height: hovered ? 'auto' : 'inherit'
    }


    return (
        <Link className='detailsLink' to={`/${result.objectID}`} state={result}>
            <article
                className='listItem'
                style={listItemStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='imageWrapper' >
                    <img
                        className='imgSmall'
                        src={result.primaryImageSmall} alt={result.title ? result.title : 'Title unknown'}
                    />
                </div>
                <div className='infoWrapper'>
                    <p
                        className='cardArtist'
                        style={cardArtistStyle}
                    >
                        {result.artistDisplayName ? result.artistDisplayName : 'Artist unknown'}
                    </p>
                    <p
                        className='cardTitle'
                        style={cardTitleStyle}
                    >
                        {result.title ? result.title : 'Title unknown'}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default MetItem;