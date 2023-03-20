import React from 'react'
import { Link } from 'react-router-dom'
import SignUp_Right_Component from './SignUp_Right_Component'

const SignUp_Investor_Step4 = () => {
  return (
    <>
         <div className='row mx-0'>
            <div className='col-md-6 px-0'>
                <SignUp_Right_Component title='Show your' title2='Smile!' text='Upload a photo for your profile Picture'/>
            </div>
            <div className='col-md-6 px-0 d-flex align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-center'>
                <Link to='/' className='close-tab border p-2 px-3 rounded-circle positio-relative'>
                    <i class="fa-solid fa-xmark text-white p-0 m-0"></i>
                </Link>
            </div>
                <div>
                    <h1 className='theme-color font-family text-center'>ONBOARDING</h1>
                    <div className='d-flex align-items-center justify-content-evenly my-4'>
                        <div className='mx-2'>
                            <div className='bg-white tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>1</div>
                            <p className='text-white stage-text mx-2 mt-2'>Demographics</p>
                        </div>
                        <div className='mx-5'>
                            <div className='bg-primary tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>2</div>
                            <p className='text-white stage-text mx-2 mt-2'>Profile Picture</p>
                        </div>
                        <div className='mx-2'>
                            <div className='bg-white tags mx-auto d-flex  align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>3</div>
                            <p className='text-white stage-text mx-2 mt-2'>Done</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4 align-items-center justify-content-center'>
                    <div>
                      <div className='cr-pointer signup-upload-img bg-primary'>
                        <i class="fa-solid fa-user-plus fs-1 text-dark"></i>
                      </div>
                      <p className='text-white text-center my-2 stage-text'>Upload Picture</p>
                    </div>
                  </div>
                  <div className='text-center my-3 '>
                    <Link to='/investor_step5' className='btn btn-primary w-50 fs-3 fw-bold my-3 fs-3'>Continue</Link>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp_Investor_Step4