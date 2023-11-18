import './Header.css'

const Header = () => {
    return (
        <header className='HeaderContainer'>
            <h1>The Metropolitan Museum of Modern Art</h1>
            <div className="HeaderImgContainer" style={{ backgroundImage: 'url(https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg)' }}>
                {/* <img src="https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg" alt="Wheat Field with Cypresses" /> */}
                <p>Explore <br /> the Collection <br /> virtually</p>
            </div>
        </header>
    );
}

export default Header;