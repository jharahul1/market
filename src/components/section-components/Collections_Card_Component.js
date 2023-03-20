import React from 'react'

const Collections_Card_Component = (props) => {
  return (
    <>
        <div>
            <img src={props.Img} className="collection-card-img" width={'100%'}/>
            <div className='row '>
                <div className='col-md-4 my-3'>
                    <img src={props.Img2} className="collection-card-img" width={'100%'}/>
                </div>
                <div className='col-md-4 my-3'>
                    <img src={props.Img3} className="collection-card-img" width={'100%'}/>
                </div>
                <div className='col-md-4 my-3  justify-content-center d-flex align-items-center'>
                    <div style={{height: '100%'}} className='bg-white text-dark justify-content-center w-100  rounded-3 d-flex align-items-center'>
                        <h4 className='p-0 m-0'>+4</h4>
                    </div>
                </div>
            </div>
            <div className='d-flex px-2 align-items-center'>
                <div className='w-50'>
                    <h6 className='m-0 m-0 theme-color'>I Am The Men </h6>
                    <div className='d-flex align-items-center mt-2'>
                        <img src={props.Img2} className='rounded-circle' width={'40'}/>
                        <p className='fw-bold text-white p-0 m-0 mx-2'>@trantimuin</p> 
                    </div>
                </div>
                <div className='w-50 text-end'>
                    <h5 className='m-0 m-0 text-white mb-2'>Current Price</h5>
                    <p className='fw-bold  p-0 m-0 theme-color'>$246.96 USD</p> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Collections_Card_Component