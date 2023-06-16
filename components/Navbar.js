import React, { useState } from 'react';
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcon,setShowMediaIcon]=useState(false);
  return (
    <>
    <nav className='main-nav'>
      <div className='logo'>
        <h2>Placer</h2>
      </div>
      <div className={showMediaIcon? "menu-link mobile-menu-link":'menu-link'}>
        <ul>
          <li><a href="./Home/Home">Home</a></li>
          <li><a href="./Courses/Courses">Courses</a></li>
          <li><a href="./About/About">About Us</a></li>
          <li><a href="./Contact/Contact">Contact</a></li>
        </ul>
      </div>
      <div className='hamburger-menu'>
        <GiHamburgerMenu onClick={()=>setShowMediaIcon(!showMediaIcon)}/>
      </div>
    </nav>
    </>
  )
}

export default Navbar;