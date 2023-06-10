import React, { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import "../App.css";

const Navbar =()=> {
  const [showMediaIcons, setShowMediaIcons]=useState(false);
  return (
    <>
    <div>
    <nav className='nav-container'>
        <h1 className='logo'>Placer</h1>
        <div className={showMediaIcons?"mobile-menu-link":""}>
        
        <ul className='nav-list-items'>
            <li>Home</li>
            <li>Courses</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
        <div className='hamburger-menu' onClick={()=>setShowMediaIcons(!showMediaIcons)}>
          <a href="#">
            <GiHamburgerMenu/>
          </a>
        </div>
        </div>
    </nav>
    </div>
    </>
  )
}


export default Navbar;