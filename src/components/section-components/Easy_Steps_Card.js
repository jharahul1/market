import React from 'react'

const Easy_Steps_Card = (props) => {
  return (
    <>
        <div id='easy-step-card' className='d-flex align-items-center justify-content-center text-white'>
            <div className='text-center py-5'>
                <div className='d-flex my-2 align-items-center justify-content-center'>
                    <div className='step-icon text-center py-3'>
                        <i class="material-icons text-white fs-2">{props.icon}</i>
                    </div>
                </div>
                <h5 className='fw-bold'>{props.title}</h5>
                <p className='text-white'>Once you've set up your wallet  of choice,  connect it  to OpenSeaby clicking the NFT Marketplace the top right corner.</p>
            </div>
        </div>
    </>
  )
}

export default Easy_Steps_Card