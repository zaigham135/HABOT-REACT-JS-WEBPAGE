import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from '../../img/LogoWeb.svg';

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    }

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="nav-wrapper">
                    {/* Logo */}
                    <div className="header__middle__logo">
                        <NavLink exact to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    {/* Navigation */}
                    <div className="header__middle__menus">
                        <nav className="main-nav">
                            {/* Responsive Menu Button */}
                            {isResponsiveclose ? 
                                <span className="menubar__button" onClick={toggleClass}>
                                    <FiXCircle />
                                </span>
                                : 
                                <span className="menubar__button" onClick={toggleClass}>
                                    <FiAlignRight />
                                </span>
                            }

                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item">
                                    <NavLink exact to="/">
                                        Find Suppliers
                                    </NavLink>
                                </li>
                                
                                <li className="menu-item sub__menus__arrows">
                                    <Link to="/" onClick={toggleSubmenu}>
                                        Find Service Tags 
                                        <FiChevronDown style={{ marginLeft: '2px' }} />
                                    </Link>
                                    <ul className={boxClassSubMenu.join(' ')}>
                                        <li>
                                            <NavLink to="/">
                                                Online Service Tags
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                Offline Service Tags
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Login/Signup Button */}
                    <div className="nav-auth">
                        <NavLink to="/" className="login-signup-btn">
                            Login / Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbarmenu;
