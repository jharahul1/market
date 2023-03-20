import React from 'react';
import sport_light_img from '../../assets/img/nft_17.png';
import sport_light_img2 from '../../assets/img/nft_15.jpeg';
import sport_light_img3 from '../../assets/img/nft_16.png'
import sport_light_img4 from '../../assets/img/nft_12.jpg'

const Artist_Spotlight_Sec = () => {
  return (
    <>
      <div className='container' style={{marginTop: '160px'}}>

            <div className='d-flex justify-content-start'>
                <div className='multi_heading p-3 px-5  rounded-3 text-center'>
                    <h4 className='font-family p-0 m-0'>Artist Spotlight</h4>
                </div>
            </div>


            <div className='row my-5'>
              <div className='col-lg-6 d-flex text-center justify-content-center'>
                      <div className='explore-banner-img '>
                            <img src={sport_light_img} width={'450px'}/>
                            <div className='py-3 text-center py-4 explor-img-text theme-color'>
                                <h1 className='font-family text-dark'>@CuteArtist</h1>
                            </div>
                        </div>
              </div>

              <div className='col-lg-6 text-center'>
                  <h2 className='theme-color font-family'>Women In Power</h2>
                  <p className='text-white'>@cuteArtist23's collection</p>
                  <div className='row artist-sight-pic'>
                    <div className='col-lg-6 my-5 position-relative'>
                      <img src={sport_light_img2} className='rounded-3 ' style={{position: 'relative'}} alt='NFT' width={'250px'} />
                      <img src={sport_light_img} className='rounded-circle ' style={{position: 'absolute', zIndex: '1', bottom: '-20px' , right: '10px' , border: '4px solid black'}} alt='NFT' width={'50px'} height={'50px'} />
                    </div>
                    <div className='col-lg-6  position-relative' style={{margin: '100px 0px 0 0', paddingRight: '100px'}}>
                      <img src={sport_light_img} className='rounded-3 ' style={{position: 'relative'}} alt='NFT' width={'180px'} />
                      <img src={sport_light_img} className='rounded-circle' style={{position: 'absolute', zIndex: '1', bottom: '50px' , left: '170px' , border: '4px solid black'}} alt='NFT' width={'50px'} height={'50px'} />
                    </div>
                    <div className='col-lg-6 ms-4 position-relative' style={{marginTop: '-20px'}}>
                      <img src={sport_light_img4} className='rounded-3 ' style={{position: 'relative'}} alt='NFT' width={'180px'} />
                      <img src={sport_light_img} className='rounded-circle ' style={{position: 'absolute', zIndex: '1', bottom: '-20px' , right: '30px' , border: '4px solid black'}} alt='NFT' width={'50px'} height={'50px'} />
                    </div>
                  </div>
              </div>

            </div>

      </div>
    </>
  )
}

export default Artist_Spotlight_Sec