import React from 'react'
import { Link } from 'react-router-dom'
import SignUp_Right_Component from './SignUp_Right_Component'

const SignUp_Investor_Step3 = () => {
  return (
    <>
        <div className='row mx-0'>
            <div className='col-md-6 px-0'>
                <SignUp_Right_Component title='Who Are' title2='You?' text='We like to get to know you!'/>
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
                            <div className='bg-primary tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>1</div>
                            <p className='text-white stage-text mx-2 mt-2'>Demographics</p>
                        </div>
                        <div className='mx-5'>
                            <div className='bg-white tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>2</div>
                            <p className='text-white stage-text mx-2 mt-2'>Profile Picture</p>
                        </div>
                        <div className='mx-2'>
                            <div className='bg-white tags mx-auto d-flex  align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>3</div>
                            <p className='text-white stage-text mx-2 mt-2'>Done</p>
                        </div>
                    </div>
                    <div class="row mx-0 px-5">
                            <div class="col-md-6 my-3">
                                <input type="text" class="form-control" placeholder="Enter FirstName*" aria-label="First name" />
                            </div>
                            <div class="col-md-6 my-3">
                                <input type="text" class="form-control" placeholder="Enter LastName*" aria-label="Last name" />
                            </div>
                            <div class="col-md-6 my-3">
                                <input type="text" class="form-control" placeholder="Enter D-O-B*" aria-label="First name" />
                            </div>
                            <div class="col-md-6 my-3">
                                <input type="text" class="form-control" placeholder="EnterUsername*" aria-label="Last name" />
                            </div>
                            <div class="col-md-12 my-3 justify-content-center d-flex">
                                <input type="text" class="w-50 form-control text-center" placeholder="Organization" />
                            </div>
                            <div class="col-md-12 px-4 my-3">
                                <textarea class="form-control" placeholder="Enter Bio*"></textarea>
                            </div>
                            <div className='text-center my-3 px-4'>
                                <Link to='/investor_step4' className='btn btn-primary w-75 fw-bold my-3 fs-3'>Continue</Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp_Investor_Step3