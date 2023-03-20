import React from 'react'
import Navbar from './global-components/Navbar';
import Creators_Table from './section-components/Creators_Table';
import Leaders_Card from './section-components/Leaders_Card';


const Leader_Board_page = () => {
  return (
    <>
        <Navbar/>
            <div className='container mt-5 pt-4'>
                <div className='row mx-0'>
                    <div className='col-lg-4 my-3'>
                        <Leaders_Card title='Total Creator' ranking='0.8%' count='1,586'/>
                    </div>
                    <div className='col-lg-4 my-3'>
                        <Leaders_Card title='Total Investors' ranking='+12.5%' count='925'/>
                    </div>
                    <div className='col-lg-4 my-3'>
                        <Leaders_Card title='Students Loan Paid' ranking='95%' count='$356,869'/>
                    </div>
                </div>
            </div>
        <Creators_Table title="Creators Leaderboard"/>
        <Creators_Table title="Investors Leaderboard"/>
    </>
  )
}


export default Leader_Board_page