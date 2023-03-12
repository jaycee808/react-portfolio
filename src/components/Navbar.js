import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {

    return (
        // <div id="navbar">
            <ul id="navbar" className="nav-header">
                <li id="logo">
                    <Link
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ?  'nav-link active' : 'nav-link'
                    }
                    >
                    <h1>Jamie Clark</h1>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                    to="about"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    about 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="projects"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="contact"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    contact
                    </Link>
                </li>
            </ul>
    );
}


export default Navbar;
