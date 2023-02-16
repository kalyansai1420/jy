import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>

            <nav className="navbar">
                <div className="nav-container">
                    <Link exact to="/" className="nav-linksmain">
                        vennelaworks
                    </Link>
                    <div className="nav-space">

                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                exact
                                to="/portfolio"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ?
                            "fas fa-times"
                            :
                            "fas fa-bars"
                        }></i>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default NavBar;