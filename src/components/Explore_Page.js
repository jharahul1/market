import React from 'react'
import Navbar from './global-components/Navbar'
import explore_banner_img from '../assets/img/nft_13.webp';
import Nft_Card_Component from './section-components/Nft_Card_Component';

import card_img1 from '../assets/img/nft_12.jpeg';
import card_img2 from '../assets/img/nft_7.jpg';
import card_img3 from '../assets/img/nft_16.png';
import card_img4 from '../assets/img/nft_17.png';
import card_img5 from '../assets/img/nft_18.jpg';
import card_img6 from '../assets/img/nft_19.jpeg';
import card_img7 from '../assets/img/nft_20.jpg';
import Collections_Card_Component from './section-components/Collections_Card_Component';

const Explore_Page = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-5 pt-5 px-5'>            
            {/* Main banner */}
            <div id='explor-banner' className='mt-5 rounded-3 bg-primary py-5'>
                <div className='row mx-0 px-1'>
                    <div className='col-md-8 text-center explor-banner-text font-family'>
                        <h1>Authentic and truly</h1>
                        <h1>unique digital market place</h1>
                    </div>
                    <div className='col-md-4 explore-banner-img-col position-relative'>
                        <div className='explore-banner-img position-absolute'>
                            <img src={explore_banner_img} width={'350px'}/>
                            <div className='py-3 text-center explor-img-text theme-color'>
                                <h3 className='font-family'>Golden Gal</h3>
                                <div className='d-flex align-items-center'>
                                    <p className='w-50 text-dark fw-bold p-0 m-0'>@slesquad</p>
                                    <p className='w-50 text-dark fw-bold p-0 m-0'>$495 USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row mt-5 pt-5' id='Nft_s'>
                <h1 className='theme-color head-size font-family mt-5 mb-5'>NFTs</h1>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img1} name='Oswan'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img2} name='Newly'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img3} name='Moueez'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img4} name='Shayan'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img5} name='Rohan'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img6} name='Basit'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img7} name='Ehtisham'/>
                </div>
                <div className='col-lg-3 my-4'>
                    <Nft_Card_Component img={card_img1} name='Khalid'/>
                </div>
            </div>

            <div className='row gx-5 mx-0 mt-5 pt-5'>
                <h1 className='theme-color head-size text-end font-family mt-5 mb-5'>Collections</h1>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img1}  Img2={card_img4} Img3={card_img5}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img2}  Img2={card_img3} Img3={card_img4}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img3}  Img2={card_img2} Img3={card_img5}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img4}  Img2={card_img5} Img3={card_img3}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img5}  Img2={card_img2} Img3={card_img5}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img6}  Img2={card_img2} Img3={card_img5}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img7}  Img2={card_img2} Img3={card_img5}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img1}  Img2={card_img2} Img3={card_img5}/>
                </div>

                <div className='col-lg-4 my-4'>
                    <Collections_Card_Component Img={card_img2}  Img2={card_img2} Img3={card_img5}/>
                </div>

            </div>

        </div>
    </>
  )
}

export default Explore_Page