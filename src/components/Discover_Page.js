import React from 'react'
import Navbar from './global-components/Navbar';
import Discover_Banner from './section-components/Discover_Banner';
import Discover_Slider from './section-components/Discover_Slider';
import Artist_Spotlight_Sec from './section-components/Artist_Spotlight_Sec';

import card_img4 from '../assets/img/nft_17.png';
import card_img5 from '../assets/img/nft_18.jpg';
import card_img6 from '../assets/img/nft_19.jpeg';
import card_img7 from '../assets/img/nft_20.jpg';

import Collections_Card_Component from './section-components/Collections_Card_Component';
import Investors_Card from './section-components/Investors_Card';
import Created_Card from './section-components/Created_Card';
import Easy_Steps_Card from './section-components/Easy_Steps_Card';
import Footer from './global-components/Footer';


const Discover_page = () => {
  return (
    <>
        <Navbar/>
        <Discover_Banner/>
        <Discover_Slider/>
        <Artist_Spotlight_Sec/>
        <div className='container mt-5 pt-5'>
            <div className='d-flex justify-content-end mt-5 pt-5'>
                <div className='multi_heading p-3 px-5  rounded-3 text-center'>
                    <h2 className='font-family p-0 m-0'>Top Collections</h2>
                </div>
            </div>
            <div className='row gx-5 my-5 pt-5'>
            <div className='col-lg-4 my-4'>
              <Collections_Card_Component Img={card_img4}  Img2={card_img4} Img3={card_img7}/>
            </div>
            <div className='col-lg-4 my-4'>
              <Collections_Card_Component Img={card_img6}  Img2={card_img5} Img3={card_img6}/>
            </div>
            <div className='col-lg-4 my-4'>
              <Collections_Card_Component Img={card_img5}  Img2={card_img4} Img3={card_img6}/>
            </div>
          </div>

                  {/* -------------------investors card------------------ */}
          <div className='pt-5'>
            <div className='d-flex justify-content-start mt-5 pt-5'>
                <div className='multi_heading p-3 px-5  rounded-3 text-center'>
                    <h2 className='font-family p-0 m-0'>Top Investor</h2>
                </div>
            </div>
            <div className='row gx-5 my-5 pt-5'>
              <div className='col-lg-4 my-3'>
                <Investors_Card Img={card_img5}/>
              </div>
              <div className='col-lg-4 my-3'>
                <Investors_Card Img={card_img4}/>
              </div>
              <div className='col-lg-4 my-3'>
                <Investors_Card Img={card_img6}/>
              </div>
            </div>
          </div>

                  {/* -------------------NFTs card------------------ */}
          <div className='mt-5 pt-5'>
            <div className='d-flex justify-content-end mt-5 pt-5'>
                <div className='multi_heading p-3 px-5  rounded-3 text-center'>
                    <h2 className='font-family p-0 m-0'>Top NFTs</h2>
                </div>
            </div>
            <div className='row gx-5 my-5 pt-5'>
              <div className='col-lg-4 my-3'>
                <Created_Card Img={card_img6}  Img2={card_img6} Img3={card_img4}/>
              </div>
              <div className='col-lg-4 my-3'>
                <Created_Card Img={card_img5}  Img2={card_img4} Img3={card_img6}/>
              </div>
              <div className='col-lg-4 my-3'>
                <Created_Card Img={card_img4}  Img2={card_img5} Img3={card_img6}/>
              </div>
            </div>
          </div>

                   {/* -------------------Artist card------------------ */}
          <div className='pt-5'>
            <div className='d-flex justify-content-start mt-5 pt-5'>
                <div className='multi_heading p-3 px-5  rounded-3 text-center'>
                    <h2 className='font-family p-0 m-0'>Top Artists</h2>
                </div>
            </div>
            <div className='row gx-5 my-5 pt-5'>
              <div className='col-lg-4 my-3'>
                <Investors_Card Img={card_img5}/>
              </div>
              <div className='col-lg-4 my-3'>
                <Investors_Card Img={card_img4}/>
              </div>
              <div className='col-lg-4 my-3'>
                <Investors_Card Img={card_img6}/>
              </div>
            </div>
          </div>
        </div>

          {/* --------------   few steps   -------------- */}
          <div className='pt-5'>
              <h1 className='container theme-color head-size font-family'>Four Easy Steps</h1>
              <div className='steps-back my-5'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-3 my-3'>
                          <Easy_Steps_Card icon='account_balance_wallet' title='Onboard'/>
                      </div>
                      <div className='col-lg-3 my-3'>
                          <Easy_Steps_Card icon='view_cozy' title='Create Your Collection'/>
                      </div>
                      <div className='col-lg-3 my-3'>
                          <Easy_Steps_Card icon='image' title='Add Your NFTs'/>
                      </div>
                      <div className='col-lg-3 my-3'>
                          <Easy_Steps_Card icon='account_balance_wallet' title='List theme For Sale'/>
                      </div>
                    </div>
                  </div>
              </div>
          </div>

          {/* --------------   Footer   -------------- */}
          <Footer/>


    </>
  )
}

export default Discover_page