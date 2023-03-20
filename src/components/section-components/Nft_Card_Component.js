import React from 'react'


import grediant from '../../assets/img/grediant.png';

const Nft_Card_Component = (props) => {
  return (
    <>
        <div>
            <img src={props.img} width={'100%'} className='nft-img'/>
            <div className='d-flex align-items-center border-bottom'>
                <div className='w-75 d-flex align-items-center my-3'>
                    <img src={props.img} width={'40'} className='rounded-circle'/>
                    <h5 className='ms-2 fw-bold theme-color p-0 m-0'>{props.name}</h5>
                </div>
                <div className='w-25 text-end'>
                    <img src={grediant} width={'20'} className=''/>
                </div>
            </div>
            <div className='d-flex mt-3  align-items-center'>
                <div className='w-50 '>
                    <h5 className='text-white p-0 m-0'>Current price</h5>
                    <h5 className='theme-color p-0 m-0 mt-1 font-family'>$856.56<small> USD</small> </h5>
                </div>
                <div className='w-50 border-start text-end'>
                    <h5 className='text-white p-0 m-0'>Buy now</h5>
                    <h5 className='theme-color p-0 m-0 mt-1 font-family'>$86.56<small> USD</small> </h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nft_Card_Component