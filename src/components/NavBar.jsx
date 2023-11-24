import './NavBar.css';
import logo from '../assets/img/MetLogo.png'

const NavBar = () => {
    return (
        <nav className='navBarContainer'>
            <div className='metLogoContainer'>
                <img src={logo} alt="Logo" />
            </div>
            <h1 className='headline'>The Metropolitan Museum of Modern Art</h1>
        </nav>
    );
}

export default NavBar;