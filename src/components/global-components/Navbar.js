import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';


const Navbar = () => {
  return (

    <>
        <header className="p-2">
          <div className="">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className='logo d-flex align-items-center'>
                <div className='' style={{minWidth: '310px'}}>
                  <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                      <img src={logo} alter='logo' width={'70'}/>
                      <h3 className='p-0 m-0 w-100 font-family text-logo'>
                          SLE Marketplace
                      </h3>
                  </Link>
                </div>
                <div className='w-25 text-end mx-2'>
                  <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" class="cr-pointer fa-solid manu-bar fa-bars fs-1"></i>
                </div>
              </div>

              <div className="col-md-3 mx-3  search-bar d-flex align-items-center position-relative">
                <input className="form-control" placeholder="Search..."  />
                <i class="material-icons search-icon">search</i>
              </div>

              <ul className="nav col-12 links mx-auto col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 mx-3 link-dark">Discover</Link></li>
                <li><Link to="/explore" className="nav-link px-2 mx-3 link-dark">Explore</Link></li>
                <li><Link to="/stats" className="nav-link px-2 mx-3 link-dark">Stats</Link></li>
              </ul>
            
              <div className='d-flex notification align-items-center position-relative'>
                      <span className='notification_count d-flex align-items-center justify-content-center'>5</span>
                  <i className='material-icons fs-3 mx-3'>notifications</i>
              </div>

                  {/*----------- Drob Down ----------- */}
              <div className="dropdown dp-dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="50" height="50" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu p-2" aria-labelledby="dropdownUser1">
                  <div className='d-flex mb-4 mt-2 align-items-center'>
                      <img src="https://github.com/mdo.png" alt="mdo" width="60" height="60" className="rounded-circle" />
                      <div className='text-white mx-3'>
                          <h5 className='p-0 m-0'>Fullname</h5>
                          <h6 className='p-0 m-0'>@username</h6>    
                      </div>
                  </div>
                  <div className='mb-3 '>
                      <div className='d-flex'>
                          <p className='p-0 m-0 w-50 text-white d-flex align-items-center'>
                          <i className='material-icons theme-color p-0 fs-5'>account_balance_wallet</i>
                          <span className='mx-1'> Wallet Address</span>
                          </p>
                          <p className='p-0 m-0 w-50 text-white d-flex align-items-center justify-content-end'>
                            <i className='material-icons theme-color p-0  fs-5'>contactless</i>
                            <span className='mx-1'>Connect</span> 
                          </p>
                      </div>
                  </div>
                  <div className='my-2 p-2 bg-gradiant rounded-3'>
                      <div className='d-flex'>
                          <h4 className='p-0 m-0 w-50'>$0</h4>
                          <h4 className='p-0 m-0 w-50 text-end'>SLE</h4>
                      </div>
                  </div>
                  <li className='d-flex align-items-center my-3'>
                      <Link className="dropdown-item theme-color font-family px-0" to="/Profile">My Profile</Link>
                      <i className='material-icons text-white fs-3'>arrow_forward</i>
                  </li>
                  <li className='d-flex align-items-center my-3'>
                      <Link className="dropdown-item theme-color font-family px-0" to="/setting">Settings</Link>
                      <i className='material-icons text-white fs-3'>arrow_forward</i>
                  </li>
                  <li className='d-flex align-items-center my-3'>
                      <Link className="dropdown-item theme-color font-family px-0" to="/register">Sign In/Up</Link>
                      <i className='material-icons text-white fs-3'>arrow_forward</i>
                  </li>     
                </ul>
              </div>
                  {/*----------- Drob Down  END ----------- */}
            </div>
          </div>
        </header>


      <div class="offcanvas bg-dark offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src={logo} alter='logo' width={'70'}/>
                <h3 className='p-0 m-0 font-family theme-color'>
                    SLE Marketplace
                </h3>
            </Link>
          </div>
            <div className='px-3'>
              <hr className='bg-white mt-0'/>
            </div>
          <div class="offcanvas-body">
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link text-dark active-link my-1 py-3" aria-current="page">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link to="/explore" class="nav-link text-white text-white my-1 py-3">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/stats" class="nav-link text-white text-white my-1 py-3">
                    Stats
                  </Link>
                </li>
              </ul>
             
              <div class="dropdown position-absolute" style={{bottom: '25px'}}>

                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width={'50'} height={'50'} class="rounded-circle me-2" />
                  <strong>Username</strong>
                </a>
                <ul className="dropdown-menu p-2" aria-labelledby="dropdownUser1">
                  <div className='d-flex mb-4 mt-2 align-items-center'>
                      <img src="https://github.com/mdo.png" alt="mdo" width="60" height="60" className="rounded-circle" />
                      <div className='text-white mx-3'>
                          <h5 className='p-0 m-0'>Fullname</h5>
                          <h6 className='p-0 m-0'>@username</h6>    
                      </div>
                  </div>
                  <div className='mb-3 '>
                      <div className='d-flex'>
                          <p className='p-0 m-0 w-50 text-white d-flex align-items-center'>
                          <i className='material-icons theme-color p-0 fs-5'>account_balance_wallet</i>
                          <span className='mx-1'> Wallet Address</span>
                          </p>
                          <p className='p-0 m-0 w-50 text-white d-flex align-items-center justify-content-end'>
                            <i className='material-icons theme-color p-0  fs-5'>contactless</i>
                            <span className='mx-1'>Connect</span> 
                          </p>
                      </div>
                  </div>
                  <div className='my-2 p-2 bg-gradiant rounded-3'>
                      <div className='d-flex'>
                          <h4 className='p-0 m-0 w-50'>$0</h4>
                          <h4 className='p-0 m-0 w-50 text-end'>SLE</h4>
                      </div>
                  </div>
                  <li className='d-flex align-items-center my-3'>
                      <Link className="dropdown-item theme-color font-family px-0" to="/Profile">My Profile</Link>
                      <i className='material-icons text-white fs-3'>arrow_forward</i>
                  </li>
                  <li className='d-flex align-items-center my-3'>
                      <Link className="dropdown-item theme-color font-family px-0" to="/setting">Settings</Link>
                      <i className='material-icons text-white fs-3'>arrow_forward</i>
                  </li>
                  <li className='d-flex align-items-center my-3'>
                      <Link className="dropdown-item theme-color font-family px-0" to="/register">Sign In/Up</Link>
                      <i className='material-icons text-white fs-3'>arrow_forward</i>
                  </li>     
                </ul>
              </div>
          </div>  
      </div>
  </>
  );
}

export default Navbar;
