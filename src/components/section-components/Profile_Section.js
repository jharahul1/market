import React from 'react'
import Banner from '../../assets/img/banner.jpeg';
import { Link, Outlet } from 'react-router-dom';

const Profile_Section = (props) => {
  return (
    <>
        <div id='profile_banner' >
            <img src={Banner} className='w-100' height={'250px'}/>
            <div className='container' style={{marginTop: '-130px'}}>
                <div>
                    <img src={props.img} className='rounded-circle profile_pic' height={'180px'} width={'180x'}/>
                </div>
                <div className='row'>
                    <div className='col-md-6 my-3'>
                        <div className='mt-3'>
                            <div className=' d-flex aligm-items-center '>
                                <h1 className='text-white w-75 p-0 m-0'>Tatiana Culane </h1>
                                <div className='d-flex justify-content-end aligm-items-center w-25'>
                                    <button  className='btn btn-outline-light d-flex justify-content-center align-items-center '>Follow
                                        <i className='material-icons fs-3 ms-1'>add</i>
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-2'>
                                <h5 className='theme-color p-0 m-0'>@nocel</h5>
                                <div className='coins-tag p-2 px-3 mx-3 d-flex align-items-center'>0x1e86...533B 
                                    <i className="material-icons text-dark mx-1 fs-5">check_circle</i>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex my-3 align-items-center justify-content-between mt-1'>
                            <div className='my-3'>
                                <h3 className='p-0 m-0 text-white my-1 fw-bold'>$17.3k</h3>
                                <p className='p-0 m-0 theme-color d-flex align-items-center fw-bold'>
                                <i className='material-icons theme-color'>person</i> 
                                    <span className='mx-1'>Total Sales</span>
                                </p>
                            </div>
                            <div className='my-3'>
                                <h3 className='p-0 m-0 text-white my-1 fw-bold'>1,920</h3>
                                <p className='p-0 m-0 theme-color d-flex align-items-center fw-bold'>
                                    <i className='material-icons theme-color'>person</i> 
                                    <span className='mx-1'>Following</span>
                                </p>
                            </div>
                            <div className='my-3'>
                                <h3 className='p-0 m-0 text-white my-1 fw-bold'>2,880</h3>
                                <p className='p-0 m-0 theme-color d-flex align-items-center fw-bold'>
                                    <i className='material-icons theme-color'>person</i> 
                                    <span className='mx-1'>Total Sales</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 user-bio d-flex px-4 align-items-center'>
                        <div>
                            <h6 className='text-white mb-3'>BIO</h6>
                            <p className='text-white para'>We are laying the groundWork for web3 - the next generation of the internet full of limitless posibilities. Joint the millions creators , collectors and curators who are on this journey. </p>
                            {/* social media links */}
                            <div className='mt-4'>
                                <h6 className='text-white'>LINKS</h6>
                                <div className='d-flex align-items-center mt-3'>
                                    <div className='d-flex align-items-center '>
                                        <i className='material-icons theme-color fs-3'>language</i>
                                        <a href='/' className='theme-color fs-5 text-decoration-none mx-2'>www.iamtatiana.com</a>
                                    </div> 
                                    <div className='d-flex align-items-center  mx-auto'>
                                        <i className='material-icons theme-color fs-3'>link</i>
                                        <a href='/' className='theme-color fs-5 text-decoration-none mx-2'>mirror.xyz/ui8</a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='social-logo-main'>
                            <ul className='social-logo'>
                                <li><i className="fa-brands fa-facebook text-white fs-3"></i></li>
                                <li>
                                    <i className="fa-brands fa-linkedin text-white fs-3"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-twitter text-white fs-3"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-instagram text-white fs-3"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-between my-5'>
                    <div className='col-md-4 position-relative link-back d-flex link-active  justify-content-center'>
                        <Link to='' className='my-3 text-white profile-created-link d-flex align-items-center text-decoration-none'>Created 
                            <span className='counted-tag py-0 text-dark mx-2 fw-bold p-2 rounded-3 '>256</span>
                        </Link>
                    </div>
                    <div className='col-md-4 position-relative link-back d-flex  justify-content-center'>
                        <Link to='Collection' className='my-3 profile-created-link text-secondary d-flex align-items-center text-decoration-none'>Collection 
                            <span className='counted-tag-2 py-0 text-dark mx-2 fw-bold p-2 rounded-3 '>5</span>
                        </Link>
                    </div>
                    <div className='col-md-4 position-relative link-back d-flex  justify-content-center'>
                        <Link to='' className='my-3 profile-created-link text-secondary d-flex align-items-center text-decoration-none'>Owned
                            <span className='counted-tag-3 py-0 text-dark mx-2 fw-bold p-2 rounded-3 '>16</span>
                        </Link>
                    </div>
                </div>
                {/* <Profile_Collection_Cards/> */}
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Profile_Section