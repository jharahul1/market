import React from 'react'
import investor_img from '../../assets/img/nft_7.jpg';

const Investors_Card = (props) => {
  return (
    <>
        <div className='bg-primary py-5 investors-card d-flex align-items-center justify-content-center'>
            <div className='text-center'>
                <div className='border p-3 rounded-circle'>
                    <img src={props.Img} className='rounded-circle' width={'150'} height={'150'}/>
                </div>
                <div className='mt-3'>
                    <h4 className='fw-bold p-0 m-0 '>@Kohaku</h4>
                    <h5 className='fw-bold text-white p-0 m-0 mt-2'>Total Sale <span className='text-dark'>$26.6k</span> </h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Investors_Card