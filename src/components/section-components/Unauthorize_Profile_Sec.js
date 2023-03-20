import React from 'react'
import Navbar from '../global-components/Navbar'

const Unauthorize_Profile_Sec = () => {
  return (
    <>
      <Navbar/>
        <div id='unauth-profile-banner' className='d-flex align-items-center justify-content-center'>
            <h1 className='text-white'>Cover</h1>
        </div>
        <div className='container' style={{marginTop: '-120px'}}>
          <div className='profile-pic-section'>
          <div className='d-flex align-items-center justify-content-cenetr'>
            <div className='pic  rounded-circle d-flex align-items-center justify-content-cenetr' >
                <i className='material-icons theme-color ms-2'>person</i>
            </div>
          </div>
              <div className='row' >
                <div className='col-md-6'>
                <div className='mt-3'>
                            <div className=' d-flex aligm-items-center '>
                                <h1 className='text-white w-75 p-0 m-0'>Fullname </h1>
                                <div className='d-flex justify-content-end aligm-items-center w-25'>
                                    <button  className='btn btn-outline-light d-flex justify-content-center align-items-center '>Follow
                                        <i className='material-icons fs-3 ms-1'>add</i>
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-2'>
                                <h5 className='theme-color p-0 m-0'>username</h5>
                                <div className='coins-tag p-2 px-3 mx-3 d-flex align-items-center'>Wallet Address 
                                    <i className="material-icons text-dark mx-1 fs-5">check_circle</i>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex my-3 align-items-center justify-content-between mt-1'>
                            <div className='my-3'>
                                <h3 className='p-0 m-0 text-white my-1 fw-bold'>$0</h3>
                                <p className='p-0 m-0 theme-color d-flex align-items-center fw-bold'>
                                <i className='material-icons theme-color'>person</i> 
                                    <span className='mx-1'>Total Sales</span>
                                </p>
                            </div>
                            <div className='my-3'>
                                <h3 className='p-0 m-0 text-white my-1 fw-bold'>0</h3>
                                <p className='p-0 m-0 theme-color d-flex align-items-center fw-bold'>
                                    <i className='material-icons theme-color'>person</i> 
                                    <span className='mx-1'>Following</span>
                                </p>
                            </div>
                            <div className='my-3'>
                                <h3 className='p-0 m-0 text-white my-1 fw-bold'>0</h3>
                                <p className='p-0 m-0 theme-color d-flex align-items-center fw-bold'>
                                    <i className='material-icons theme-color'>person</i> 
                                    <span className='mx-1'>Total Sales</span>
                                </p>
                            </div>
                        </div>
                </div>
                <div className='col-md-6 px-4 user-bio d-flex  justify-content-between'>
                <div>
                    <h6 className='text-white mb-3 mt-0'>BIO</h6>
                    <h5 className='text-white my-5 cr-pointer'>Add Bio</h5>
                    {/* social media links */}
                    <div className='mt-4'>
                        <h6 className='text-white'>LINKS</h6>
                        <div className='d-flex align-items-center mt-3'>
                            <div className='d-flex align-items-center '>
                                <i className='material-icons theme-color fs-3'>language</i>
                                <a href='/' className='theme-color fs-5 text-decoration-none mx-2'>Website</a>
                            </div> 
                            <div className='d-flex align-items-center ms-5 ps-5'>
                                <i className='material-icons theme-color fs-3'>link</i>
                                <a href='/' className='theme-color fs-5 text-decoration-none mx-2'>Link</a>
                            </div> 
                        </div>
                    </div>
                  </div>
                    <div className='social-logo-main '>
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
                      <a href='#' className='my-3 text-white profile-created-link d-flex align-items-center text-decoration-none'>Created 
                          <span className='counted-tag py-0 text-dark mx-2 fw-bold p-2 rounded-3 '>256</span>
                      </a>
                  </div>
                  <div className='col-md-4 position-relative link-back d-flex  justify-content-center'>
                      <a href='#' className='my-3 profile-created-link text-secondary d-flex align-items-center text-decoration-none'>Collection 
                          <span className='counted-tag-2 py-0 text-dark mx-2 fw-bold p-2 rounded-3 '>5</span>
                      </a>
                  </div>
                  <div className='col-md-4 position-relative link-back d-flex  justify-content-center'>
                      <a href='#' className='my-3 profile-created-link text-secondary d-flex align-items-center text-decoration-none'>Owned
                          <span className='counted-tag-3 py-0 text-dark mx-2 fw-bold p-2 rounded-3 '>16</span>
                      </a>
                  </div>
              </div>
              <div className='text-center text-white py-5 my-5'>
                <h1 className='mt-5'>Login To Create NFTs</h1>
              </div>

          </div>
        </div>
    </>
  )
}

export default Unauthorize_Profile_Sec