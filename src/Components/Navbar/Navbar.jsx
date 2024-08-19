import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import logo from '../../Assets/logo.png'; 

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    // Function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar');
    }

    // Function to remove navBar
    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <img src={logo} alt="Logo" className="logoImage" />
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="/" className="navLink">Home</Link> 
                        </li>
                        <li className="navItem">
                            <Link to="/about" className="navLink">About Us</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/services" className="navLink">Our Services</Link> 
                        </li>
                        <li className="navItem">
                            <Link to="/contact" className="navLink">Contact Us</Link> 
                        </li>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    );
}

export default Navbar;
