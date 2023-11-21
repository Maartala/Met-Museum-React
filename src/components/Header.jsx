import './Header.css'
import logo from '../assets/img/MetLogo.png'

const Header = () => {
    return (
        <header className='HeaderContainer'>
            <div className='metLogoContainer'>
                <img src={logo} alt="Logo" />
            </div>
            <h1>The Metropolitan Museum of Modern Art</h1>
            <div className="HeaderImgContainer" style={{ backgroundImage: `url(https://images.metmuseum.org/CRDImages/as/original/DP-15583-014.jpg)` }}>
                {/* <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg" alt="Wheat Field with Cypresses" /> */}
                <p>Explore <br /> the Collection <br /> virtually</p>
            </div>
        </header>
    );
}

export default Header;

/*style={{ backgroundImage: 'url(https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg)' }}*/
// style={{ backgroundImage: `url(https://images.metmuseum.org/CRDImages/ad/original/ap66.142.jpg)` }}