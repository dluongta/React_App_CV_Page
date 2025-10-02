import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import DevicesIcon from '@mui/icons-material/Devices';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/luen-1.jpg';

export const Header = () => {
    const [sideBar, setSidebar] = useState(false);
    const location = useLocation();
    const navRef = useRef();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            header.classList.toggle("active", window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close sidebar if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setSidebar(false);
            }
        };
        if (sideBar) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [sideBar]);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="marquee-container">
                <marquee behavior="scroll" direction="left" scrollamount="10">
                    Welcome to React App CV Page
                </marquee>
            </div>
            <header className='header'>
                <div className='container flex' style={{ position: 'relative' }}>
                    <div className='logo'>
                        <Link to='/'>
                            <img width="95" height="60" src={logo} alt='' />
                        </Link>
                    </div>
                    <div className='nav' ref={navRef}>
                        <ul className={sideBar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                            <li className={isActive('/') ? 'active-link' : ''}>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className={isActive('/pages') ? 'active-link' : ''}>
                                <Link to='/pages'>Pages</Link>
                            </li>
                            <li className={isActive('/blog') ? 'active-link' : ''}>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className={isActive('/portfolio') ? 'active-link' : ''}>
                                <Link to='/portfolio'>Portfolio</Link>
                            </li>
                            <li className={isActive('/contact') ? 'active-link' : ''}>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='icon'>
                                <SearchIcon className="HeaderIcon" />
                                <DevicesIcon className="HeaderIcon" />
                                <GridViewIcon className="HeaderIcon" />
                            </li>
                        </ul>
                    </div>
                    <button className='nav-items-icon' onClick={() => setSidebar(!sideBar)}>
                        {sideBar ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </header>
        </>
    );
};
