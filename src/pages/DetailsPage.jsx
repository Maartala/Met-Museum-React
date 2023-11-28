import { useLocation, Link } from 'react-router-dom';

import './DetailsPage.css';



const DetailsPage = () => {

    const location = useLocation()
    console.log(location);

    const artwork = location.state;

    return (
        <div>
            <h1>Title: {artwork.title}</h1>
            <h2>Artist: {artwork.artistDisplayName}</h2>
            <p>Medium: {artwork.medium}</p>
            <p>Measurements (h/w): {artwork.measurements[0].elementMeasurements.Height} cm/ {artwork.measurements[0].elementMeasurements.Width} cm</p>
            <p>Date: {artwork.objectDate}</p>
            <Link to={artwork.primaryImage}><img src={artwork.primaryImageSmall} alt="" /></Link>

        </div>
    );
}

export default DetailsPage;