import React from 'react'
import { Link } from 'react-router-dom'
import SignUp_Form from './SignUp_Form'
import SignUp_Right_Component from './SignUp_Right_Component'


const SignUp_Creator_Step3 = () => {
  return (
    <>
        <div className='row mx-0'>
            <div className='col-md-6 p-0'>
                <SignUp_Right_Component title='Who are' title2='you?' text='We like to get to know you!'/>
            </div>
            <div className='col-md-6 px-5 p-0 d-flex align-items-center justify-content-center '>
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
                  <div className='mx-2'>
                    <div className='bg-white tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>2</div>
                    <p className='text-white stage-text mx-2 mt-2'>Profile Picture</p>
                  </div>
                  <div className='mx-2'>
                    <div className='bg-white tags mx-auto d-flex  align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>3</div>
                    <p className='text-white stage-text mx-2 mt-2'>Loan info</p>
                  </div>
                  <div className='mx-2'>
                    <div className='bg-white tags mx-auto d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold font-family'>4</div>
                    <p className='text-white stage-text mx-2'>Done</p>
                  </div>
                </div>
                    <SignUp_Form/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp_Creator_Step3