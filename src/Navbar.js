import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar () {

    return (
        // <div id="navbar">
            <ul id="navbar" className="nav-header">
                <li id="logo">
                    <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ?  'nav-link active' : 'nav-link'
                    }
                    >
                    <h1>Jamie Clark</h1>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                    to="about"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    about 
                    </NavLink>
                </li>
                    <li>/</li>
                <li className="nav-item">
                    <NavLink
                    to="projects"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    projects
                    </NavLink>
                </li>
                <li>/</li>
                <li className="nav-item">
                    <NavLink
                    to="contact"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    contact
                    </NavLink>
                </li>
            </ul>
    );
}


export default Navbar;
