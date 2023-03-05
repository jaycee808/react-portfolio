import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar () {

    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };
    
    return (
        // <div id="navbar">
            <ul id="navbar" className="nav-header">
                <li className="nav-item">
                    <NavLink
                    to="/"
                    >
                    <h1>JC</h1>
                    </NavLink>
                </li>

                <div
                className={`links-container ${showLinks ? 'show-container' : ''}`}>

                <li className="nav-item">
                    <NavLink
                    to="about"
                    >
                    About
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                    to="projects"
                    >
                    Projects
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                    to="contact"
                    >
                    Contact
                    </NavLink>
                </li>
                </div>
                <button className="nav-toggle" onClick={handleToggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </ul>
        // </div>
    );
}


export default Navbar;
