import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='p-5'>
            <div className='bg-primary py-5 footer'>
                <div className='container py-5'>
                    <div className='text-center'>
                        <h1 className='font-family'>Get to know us</h1>
                        <p style={{fontSize: '21px'}}> Stay in the know with latest fetaure. NFT drops, and updates to <br/> the SLE Marketplace.</p>
                    </div>
                    <div className='row mx-0'>
                        <div className='col-md-9'>
                            <input type='text' className='form-control footer-input'/>
                        </div>
                        <div className='col-md-3 text-start'>
                            <button className='btn footer-btn btn-primary fs-5 py-2'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer