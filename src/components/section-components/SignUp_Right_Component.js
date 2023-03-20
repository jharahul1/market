import React from 'react'

const SignUp_Right_Component = (props) => {
  return (
    <>
        <div className='right-back p-5'>
            <h4 className='fw-bold'>SLE MARKETPLACE</h4>
            <div className='bottom-back'>
                <div className='bottom-text '>
                    <div className='d-flex align-items-center'>
                        <h1 className='fw-bold p-0 m-0'>{props.title}</h1>
                        <div className='bg-white next-aero mx-5 text-center'>
                            <i class="fa-solid m-0 fa-arrow-right-long text-dark "></i>
                        </div>
                    </div>
                    <h1 className='fw-bold p-0 m-0'>{props.title2}</h1>
                    <p className='fw-bold mt-3'> {props.text} <br /> {props.text2} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp_Right_Component