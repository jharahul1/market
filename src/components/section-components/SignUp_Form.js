import React from 'react'
import { Link } from 'react-router-dom';


const SignUp_Form = () => {
  return (
    <>
         <div class="row mx-0">
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
                <div class="col-md-12 px-4 my-3">
                    <textarea class="form-control" placeholder="Enter Bio*"></textarea>
                </div>
                <div className='text-center my-3 '>
                    <Link to='/step4' className='btn btn-primary w-75 fw-bold my-3 fs-3'>Continue</Link>
                </div>
        </div>
    </>
  )
}

export default SignUp_Form