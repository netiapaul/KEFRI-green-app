import React from 'react';
import './header.css';
import Logo from '../../assets/images/Logo.png'

const Header = () => {
    return(
        <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <p className="navbar-brand p-2" href="#">
                        {/* <img src="https://www.kefri.org/images/trial-2.png" alt="logo" width="50" className="img-fluid"/> */}
                        <img src={Logo} alt="logo" width="100" className="img-fluid"/>
                        <span className="navbar-brand h1 text-light">Green App</span> 
                    </p>
                </div>
            </nav>
    )
};

export default Header;