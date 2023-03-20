import React from 'react';
import  '../../assets/css/style.css';
import { Link } from 'react-router-dom';


const Discover_Banner = () => {
  return (
    <>
      <div id='banner'>
          <div className='container d-flex align-items-center justify-content-center'>
            <div id='banner_text'>
              <h1 className='text-white font-family'>
                WITH <span className='theme-color'> SLE </span>, SAY BYE <br/> TO STUDENT <span className='theme-color'> LOANS </span>
              </h1>
              <h4 className='text-white text-center'>We are the best way to pay off your loans</h4>
              <div className='text-center my-4'>
                <Link to='/register' className='my-2 btn px-4 btn-primary mx-2'>CONNECT WALLET</Link>
                <Link to='/register' className='my-2 btn btn-outline-primary mx-2 px-4 text-white'>GET STARTED</Link>
              </div>
            </div>
          </div>
      </div>
      <div id='banner_bottom_text' className='py-2 px-4 d-flex align-items-center justify-content-between'>
        <h5 className='p-0 m-0'>WELCOME TO SLE MARKET PLACE</h5>
        <h5 className='p-0 m-0'>BETA VERSION RELEASING SOON!</h5>
        <h5 className='p-0 m-0'>NEW FEATURE COMING</h5>
      </div>
    </>
  );
}


export default Discover_Banner;
