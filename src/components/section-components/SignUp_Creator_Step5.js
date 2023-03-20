import React from 'react'
import { Link } from 'react-router-dom'
import SignUp_Right_Component from './SignUp_Right_Component'

const SignUp_Creator_Step5 = () => {
  return (
    <>
        <div className='row mx-0'>
            <div className='col-md-6 p-0'>
                <SignUp_Right_Component title='You got' title2='debt?' text='lets get some loan information'/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-center px-5'>
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
                        <div className='mx-2'>
                            <div className='bg-white tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>2</div>
                            <p className='text-white stage-text mx-2 mt-2'>Profile Picture</p>
                        </div>
                        <div className='mx-2'>
                            <div className='bg-primary tags mx-auto d-flex  align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>3</div>
                            <p className='text-white stage-text mx-2 mt-2'>Loan info</p>
                        </div>
                        <div className='mx-2'>
                            <div className='bg-white tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>4</div>
                            <p className='text-white stage-text mx-2 mt-2'>Done</p>
                        </div>
                    </div>
                
                    <div class="row mx-0">
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control" placeholder="Enter Collage*" aria-label="First name" />
                        </div>
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control" placeholder="Enter Loan Vendor*" aria-label="Last name" />
                        </div>
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control" placeholder="Enter Loan Amount*" aria-label="First name" />
                        </div>
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control text-center" placeholder="Enter Graduation Date*" aria-label="Last name" />
                        </div>
                        <div className='text-center my-3 '>
                            <Link to='/step6' className='btn btn-primary w-50 fs-3 fw-bold my-3 fs-3'>Continue</Link>
                        </div>
                    </div> 
                </div>
            </div>  
        </div>
    </>
  )
}

export default SignUp_Creator_Step5