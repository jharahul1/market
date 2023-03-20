import React from 'react'

const Setting_Wallet = () => {
  return (
    <>
        <div className='my-5 px-4'>
            <h6 className='text-white'>WALLET</h6>
            <div className='d-flex my-3 align-items-center'>
                <div className='w-75 d-flex align-items-center'>
                    <div className='rounded-circle wallet d-flex align-items-center justify-content-center'>
                        <i class="fa-solid fa-wallet text-white fs-5"></i>
                    </div>
                    <div className='mx-2'>
                        <p className='text-white p-0 m-0'>0x1e886Be555a6555a6Ea69...833B <i class="fa-solid fa-copy cr-pointer"></i></p>
                        <h6 className='text-white p-0 m-0 '>Marks <i class="text-success fa-solid fa-check"></i></h6>
                    </div>
                </div>
                <div className='w-25 d-flex align-items-center justify-content-end'>
                    <div className='border cr-pointer rounded-circle p-3 d-flex align-items-center justify-content-center'>
                        <i class="fa-solid fa-file-import text-white fs-5"></i>
                    </div>
                </div>
            </div>
            <button className='w-100 btn my-3 btn-outline-light'>LINK WALLET</button>
        </div>
    </>
  )
}

export default Setting_Wallet