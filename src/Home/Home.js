import React, { useState,useEffect } from 'react';
// import Navbar from '../components/Navbar';
import "./home.css";
import img from "../assests/world.png";
// import Login from "../Login/Login";


const Home = () => {

  // const [openModal, setOpenModal]=useState(false);
  // useEffect(()=>{
  //   const timeout=setTimeout(()=>{
  //   setOpenModal(true);
    
  //   },2000)
  //   return ()=>clearInterval(timeout)
  //     },[])
  return (
<>

<div className='home-container'>
        {/* <Navbar/> */}
        <div className='home-text-container'>
          <div>
          {/* {openModal && <Login setOpenModdal/>} */}
            <h1 className='home-text'>Discover Endless Opportunities with Placer: Where Students Thrive and Alumni Guide</h1>
            <button className='home-button'onClick={()=>setOpenModal(true)}>Login now</button>
            
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