import React from 'react'
import SignUp_Right_Component from './SignUp_Right_Component'
import { Link } from 'react-router-dom';


const Step1_SignUp = () => {
  return (
    <>
    <div className='row mx-0'>
        <div className='col-md-6 p-0'>
            <SignUp_Right_Component title="Connect" title2='Authenticated' text='choose how you want authenticate, There are' text2="a few methods to choose from."/>
        </div>
        <div className='col-md-6 p-0 px-3'>
            <div className='d-flex align-items-center justify-content-center'>
                <Link to='/' className='close-tab border p-2 px-3 rounded-circle positio-relative'>
                    <i class="fa-solid fa-xmark text-white p-0 m-0"></i>
                </Link>
            </div>
            <div className='d-flex step-1  text-white align-items-center justify-content-center'>
                <div className=''>
                    <h1 className='font-family mb-4'>How You Want To <br /> Authenticate ?</h1>
                    <div class="mb-3">
                        <input type="text" class="form-control p-0" />
                    </div>
                    <Link to='/step2' className='btn py-2 btn-primary registered-btn w-100 d-flex align-items-center text-start'>
                    <span className='w-50 fs-5'> Email Address</span>
                        <span className='w-50 text-end'>                             
                            <i class="fa-solid  m-0 fa-arrow-right-long text-white fs-4 "></i>
                        </span>
                    </Link>
                    <div style={{top:'230px', backgroundColor: 'rgb(126 126 126 / 20%)'}} className='position-relative text-white p-2 rounded-3 w-100 text-start px-5'>Log into sssity security accessbility prototype purpose</div>
                </div>
            </div>
        </div>
    </div>
     
    </>
  )
}

export default Step1_SignUp