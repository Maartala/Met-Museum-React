import { useLocation } from 'react-router-dom';

import './DetailsPage.css'

const DetailsPage = () => {

    const location = useLocation()
    console.log(location);

    return (
        <div>
            <h1>hier ist Details zu {location.state.title}</h1>
            <img src={location.state.primaryImage} alt="" />
        </div>
    );
}

export default DetailsPage;