import NavBar from './NavBar';
import './Header.css'

const Header = () => {
    return (
        <header className='headerContainer'>
            <NavBar />
            <div className="headerImgContainer" style={{ backgroundImage: `url(https://images.metmuseum.org/CRDImages/as/original/DP-15583-014.jpg)` }}>
                {/* <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg" alt="Wheat Field with Cypresses" /> */}
                <p className="introText">Explore <br /> the Collection <br /> virtually</p>
            </div>
        </header>
    );
}

export default Header;

/*style={{ backgroundImage: 'url(https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg)' }}*/
// style={{ backgroundImage: `url(https://images.metmuseum.org/CRDImages/ad/original/ap66.142.jpg)` }}