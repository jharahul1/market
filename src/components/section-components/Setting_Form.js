import React from 'react'

const Setting_Form = () => {
  return (
    <>
        <div className='my-5'>
            <form>
            <h6 className='text-white '>INFORMATION</h6>
                <div class="mb-3">
                    <input type="text" class="form-control setting-form" placeholder='Email Address' />
                    <div id="emailHelp" class="px-0 p-0 form-text text-white">Email</div>
                </div>
                <div class="mb-3 position-relative">
                    <input type="text" class="form-control setting-form" placeholder='Fullname' />
                    <div id="emailHelp" class="px-0 p-0 form-text text-white">Display Name</div>
                    <i class="fa-solid input-ico fa-user text-white position-absolute"></i>
                </div>
                <h5 className='text-white my-4'>About You </h5>
                <div class="mb-3 position-relative">
                    <input type="text" class="form-control setting-form"  />
                    <div id="emailHelp" class="px-0 p-0 form-text text-white">Short Less</div>
                    <i class="fa-solid input-ico fa-square-check text-white position-absolute"></i>
                </div>
                <h6 className='text-white my-4 mt-5 '>Links</h6>
                <div class="mb-3 position-relative">
                    <input type="text" class="form-control setting-form" placeholder='Your Website' />
                    <div id="emailHelp" class="px-0 p-0 form-text text-white">Website</div>
                    <i class="fa-solid fa-paperclip input-ico text-white position-absolute"></i>
                </div>
                <div class="mb-3 position-relative">
                    <input type="text" class="form-control setting-form" placeholder='Your Twitter Handle' />
                    <div id="emailHelp" class="px-0 p-0 form-text text-white">Twitter</div>
                    <i class="fa-brands fa-twitter input-ico text-white position-absolute"></i>
                </div>
                <div class="position-relative">
                    <input type="text" class="form-control setting-form" placeholder='Your Facebook Page' />
                    <div id="emailHelp" class="px-0 p-0 form-text text-white">Facebook</div>
                    <i class="fa-brands fa-facebook input-ico text-white position-absolute"></i>
                </div>
                
            </form>
        </div>
    </>
  )
}

export default Setting_Form