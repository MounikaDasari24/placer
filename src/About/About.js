import React from 'react';
import "./about.css";

const About = () => {
  return (
    <>
    <div className='about-container'>
        <div className='about-text-container'>
            <img src="../assests/Aboutimg.png" alt="" className='about-img'/>
        <div className='about-text'> 
            <p>About Us</p>
            <h2>Placer</h2>
        </div>
        </div>
        <h2 className='h2'>“Elevate your Future <br/>to New heights.”</h2>
    </div>
    </>
    
  )
}

export default About;