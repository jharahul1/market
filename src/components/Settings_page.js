import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './global-components/Navbar'
import Settings_Component from './section-components/Settings_Component'


const Settings_page = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 px-4'>
                    <Settings_Component/>
                </div>
                <div className='col-md-6 px-4'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings_page