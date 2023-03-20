import React from 'react'
import { Link } from 'react-router-dom';


const Settings_Component = () => {
   
    function checkIsActive(e) {
        if (e === 'link_1') {
            document.getElementById('profile-links-1').classList.add('profile-links')
            document.getElementById('profile-links-2').classList.remove('profile-links')
            document.getElementById('profile-links-3').classList.remove('profile-links')
        }else if(e === 'link_2'){
            document.getElementById('profile-links-2').classList.add('profile-links')
            document.getElementById('profile-links-1').classList.remove('profile-links')
            document.getElementById('profile-links-3').classList.remove('profile-links')

        }else{
            document.getElementById('profile-links-3').classList.add('profile-links')
            document.getElementById('profile-links-2').classList.remove('profile-links')
            document.getElementById('profile-links-1').classList.remove('profile-links')
        }
    }
  

  return (
    <>
        <div>
            <div className='my-4 mt-5 d-flex align-items-center px-4'>
                <h1 className='w-50 text-white p-0 m-0'>Settings</h1>
                <div className='w-50 text-end d-flex justify-content-end'>
                    <button className='bg-white d-flex align-items-center p-0 m-0  py-2 px-3 rounded-3 fw-bold'>Save
                        <i className='material-icons ms-1'>done</i>
                    </button>
                </div>
            </div>
            <div className='my-5'>
                <Link id='profile-links-1' to="" onClick={() => checkIsActive("link_1")} className='my-3 profile-links text-decoration-none text-white p-4  d-flex align-items-center'>
                    <h5 className='p-0 m-0 w-50'>Profile</h5>
                    <div className='w-50 text-end'>
                        <i className='material-icons fs-3'>arrow_forward</i>
                    </div>
                </Link>
                <Link id='profile-links-2' to='wallet' onClick={() => checkIsActive("link_2")} className='my-3 text-decoration-none text-white p-4 d-flex align-items-center'>
                    <h5 className='p-0 m-0 w-50'>Wallet</h5>
                    <div className='w-50 text-end'>
                        <i className='material-icons fs-3'>arrow_forward</i>
                    </div>
                </Link>
                <Link id='profile-links-3' to='notification' onClick={() => checkIsActive("link_3")} className='my-3 text-decoration-none text-white p-4 d-flex align-items-center'>
                    <h5 className='p-0 m-0 w-50'>Notification</h5>
                    <div className='w-50 text-end'>
                        <i className='material-icons fs-3'>arrow_forward</i>
                    </div>
                </Link>
            </div>
            <div className='profile-img-upload d-flex align-items-center '>
                <div className='p-0  cr-pointer upload-img'>
                    <i className='material-icons position-absolute m-1 text-white'>cancel</i>
                    <i className="fa-solid fa-user m-3 dp theme-color"></i>
                </div>
                <div className='mx-4'>
                    <h5 className='text-white p-0 m-0'>Profile Photo</h5>
                    <p className='text-white p-0 m-0 my-2' style={{fontSize: '12px'}}>We recommended an image of at least <br /> 800x800 Gits Work too.</p>
                    <button className='btn btn-sm btn-outline-light'>UPLOAD</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings_Component