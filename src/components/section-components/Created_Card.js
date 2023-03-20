import React from 'react'
import '../../assets/css/style.css';




const Created_Card = (props) => {
  return (
    <>
        <div>
            <img src={props.Img} className='created-card-img' width={'100%'}  />
            <div className=''>
                <div className='d-flex align-items-center'>
                    <div className='mt-3'>
                        <h4 className='text-white p-0 m-0'>Escape</h4>
                        <h6 className='text-secondary p-0 m-0 my-1'>Buy now</h6>
                    </div>
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <h6 className='text-success-2 p-0 m-0 w-50'>12.29 SLE</h6>
                    <div className='w-50 text-end'>
                        <img src={props.Img} className='rounded-circle' width={'30'} height={'30'}  />
                        <img src={props.Img2} className='rounded-circle' style={{margin: '-8px'}} width={'30'} height={'30'} />
                        <img src={props.Img3} className='rounded-circle' width={'30'} height={'30'} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Created_Card