import React from 'react';
import Navbar from '../components/Navbar';
import "./home.css";
import img from "../assests/world.png";


const Home = () => {
  return (
<>

<div className='home-container'>
        <Navbar/>
        <div className='home-text-container'>
          <div>
            <h1 className='home-text'>Discover Endless Opportunities with Placer: Where Students Thrive and Alumni Guide</h1>
            <button className='home-button'>Login now</button>
          </div>
          <div>
          <img src={img} alt="" className='home-hero'/>
          </div>
          
        </div>
</div>
</>
   
  )
}

export default Home;