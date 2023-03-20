import React from 'react'
import '../assets/css/style.css';
import Navbar from './global-components/Navbar';
import Profile_Section from './section-components/Profile_Section';
import profile_pic from '../assets/img/nft_7.jpg';



const Creator_Profile = () => {
  return (
    <>
        <Navbar/>
        <Profile_Section img={profile_pic}/>
    </>
  )
}

export default Creator_Profile