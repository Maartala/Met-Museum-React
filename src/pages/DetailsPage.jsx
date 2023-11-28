import { useLocation, Link } from 'react-router-dom';

import './DetailsPage.css';



const DetailsPage = () => {

    const location = useLocation()
    console.log(location);

    const artwork = location.state;

    return (
        <div>
            <h1>Title: {artwork.title ? artwork.title : 'Title unknown'}</h1>
            <h2>Artist: {artwork.artistDisplayName ? artwork.artistDisplayName : 'Artist unknown'}</h2>
            <p>{artwork.objectName}</p>
            <p>Medium: {artwork.medium}</p>
            <p>Measurements (h/w): {artwork.measurements[0].elementMeasurements.Height} cm/ {artwork.measurements[0].elementMeasurements.Width} cm</p>
            <p>Date: {artwork.objectDate}</p>
            <p>Culture: {artwork.culture}</p>
            <p>{artwork.creditLine}</p>
            <p>Department: {artwork.department}</p>

            <Link to={artwork.objectURL} target="_blank">Learn more at MET</Link><br />

            <Link to={artwork.primaryImage}><img src={artwork.primaryImageSmall} alt={artwork.title ? artwork.title : 'Title unknown'} /></Link>

        </div>
    );
}

export default DetailsPage;