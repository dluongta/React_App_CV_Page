import React, { useState } from 'react'
import {Link  } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import DevicesIcon from '@mui/icons-material/Devices';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from  '../../../assets/Luen.jpg'

export const Header = () => {
    const [sideBar,setSidebar] = useState(false);
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY > 200)
    })
  return (
    <>
    <header className='header'>
        <div className='container flex'>
            <div className='logo'>
            <img width="95" height="60" src= {logo} alt=''/>
            </div>
            <div className='nav'>
                <ul className= {sideBar ? "nav-links-sidebar" : "nav-links"} onClick = {() => setSidebar(false)}>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/pages'> Pages </Link>
                    </li>
                    <li>
                        <Link to='/blog'> Blog </Link>
                    </li>
                    <li>
                        <Link to='/Portfolio'> Portfolio </Link>
                    </li>
                    <li>
                        <Link to='/contact'> Contact </Link>
                    </li>
                    <li className='icon'>
                        <SearchIcon className="HeaderIcon"/>                       
                        <DevicesIcon className="HeaderIcon"/>
                        <GridViewIcon className="HeaderIcon"/>

                    </li>
                </ul>
            </div>
            <button className='nav-items-icon' onClick={ () => setSidebar(!sideBar)}>
                {sideBar ? <CloseIcon/> : <MenuIcon/>}
            </button>
        </div>
            
    </header>
    </>
    
  )
}
