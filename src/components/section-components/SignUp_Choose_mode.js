import React from 'react'
import { Link } from 'react-router-dom';
import creator from '../../assets/img/creator.jpg';
import investor_img from '../../assets/img/investor.webp';
import SignUp_Right_Component from './SignUp_Right_Component';

const SignUp_Choose_mode = () => {
  return (
    <>
        <div className='row mx-0'>
            <div className='col-md-6 p-0'>
                <SignUp_Right_Component title="Choose " title2='your mode?' text='choose which mode you want to exprience, You' text2='can always change it later down the road' />
            </div>
            <div className='col-md-6 d-flex  align-items-center justify-content-center px-5 p-0'>
            <div className='d-flex align-items-center justify-content-center'>
                <Link to='/' className='close-tab border p-2 px-3 rounded-circle positio-relative'>
                    <i class="fa-solid fa-xmark text-white p-0 m-0"></i>
                </Link>
            </div>
                <div>
                    <Link to='/step3' className='d-flex my-5  text-dark align-items-center select-cat-img justify-content-center'>
                        <img src={creator} className='w-75 ' alt='investor'/>
                    </Link>
                    <Link to='/investor_step3' className='d-flex my-5 text-dark  align-items-center select-cat-img2 justify-content-center'>
                        <img src={investor_img} className='w-75 ' alt='investor'/>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}


export default SignUp_Choose_mode