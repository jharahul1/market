import React from 'react'
import NFTs_1 from '../../assets/img/nft_3.jpeg';
import NFTs_2 from '../../assets/img/nft_4.jpeg';
import NFTs_3 from '../../assets/img/nft_5.webp';
import NFTs_4 from '../../assets/img/nft_6.jpg';
import NFTs_5 from '../../assets/img/nft_7.jpg';
import NFTs_6 from '../../assets/img/nft_8.jpeg';



const Creators_Table = (props) => {
  return (
    <>
        <div className='container mt-5 '>
            <h1 className='table_heading theme-color font-family text-center'>{props.title}</h1>

            <div className='table-responsive'>
                <table class="table text-white mt-4">
                    <thead >
                        <tr>
                            <th style={{minWidth: '100px'}}>Rank</th>
                            <th style={{minWidth: '250px'}}>Creators</th>
                            <th style={{minWidth: '120px'}}>NFTs</th>
                            <th style={{minWidth: '120px'}}>Collections</th>
                            <th style={{minWidth: '120px'}}>Earnings</th>
                            <th style={{minWidth: '120px'}}>Followers</th>
                        </tr>
                    </thead>
                    <tbody className='border-0'>
                        <tr>
                            <th className=''>
                                <div className='rank_num text-dark mt-3'>1</div> 
                            </th>
                            <td className='d-flex align-items-center'>
                                <img src={NFTs_1} className='rounded-circle' height={'55'} width={'55'}/>
                                <div className='mx-3'>
                                    <h6 className='p-0 m-0'>Shadow Cubes</h6>
                                    <p className='p-0 m-0 text-secondary'>@cubicglass</p>
                                </div>
                            </td>
                            <th className="pt-4">50</th>
                            <th className="pt-4">5</th>
                            <th className="pt-4">$79.5</th>
                            <th className="pt-4">800</th>
                        </tr>
                        <tr>
                            <th className=''>
                                <div className='rank_num text-dark mt-3'>2</div> 
                            </th>
                            <td className='d-flex align-items-center'>
                                <img src={NFTs_2} className='rounded-circle' height={'55'} width={'55'}/>
                                <div className='mx-3'>
                                    <h6 className='p-0 m-0'>Shadow Cubes</h6>
                                    <p className='p-0 m-0 text-secondary'>@cubicglass</p>
                                </div>
                            </td>
                            <th className="pt-4">65</th>
                            <th className="pt-4">13</th>
                            <th className="pt-4">$58.5</th>
                            <th className="pt-4">1.6k</th>
                        </tr>
                        <tr>
                            <th className=''>
                                <div className='rank_num text-dark mt-3'>3</div> 
                            </th>
                            <td className='d-flex align-items-center'>
                                <img src={NFTs_3} className='rounded-circle' height={'55'} width={'55'}/>
                                <div className='mx-3'>
                                    <h6 className='p-0 m-0'>Shadow Cubes</h6>
                                    <p className='p-0 m-0 text-secondary'>@cubicglass</p>
                                </div>
                            </td>
                            <th className="pt-4">35</th>
                            <th className="pt-4">15</th>
                            <th className="pt-4">$89.5</th>
                            <th className="pt-4">1.5k</th>
                        </tr>
                        <tr>
                            <th className=''>
                                <div className='rank_num text-dark mt-3'>4</div> 
                            </th>
                            <td className='d-flex align-items-center'>
                                <img src={NFTs_4} className='rounded-circle' height={'55'} width={'55'}/>
                                <div className='mx-3'>
                                    <h6 className='p-0 m-0'>Shadow Cubes</h6>
                                    <p className='p-0 m-0 text-secondary'>@cubicglass</p>
                                </div>
                            </td>
                            <th className="pt-4">40</th>
                            <th className="pt-4">18</th>
                            <th className="pt-4">$120.5</th>
                            <th className="pt-4">17.5k</th>
                        </tr>
                        <tr>
                            <th className=''>
                                <div className='rank_num text-dark mt-3'>5</div> 
                            </th>
                            <td className='d-flex align-items-center'>
                                <img src={NFTs_5} className='rounded-circle' height={'55'} width={'55'}/>
                                <div className='mx-3'>
                                    <h6 className='p-0 m-0'>Shadow Cubes</h6>
                                    <p className='p-0 m-0 text-secondary'>@cubicglass</p>
                                </div>
                            </td>
                            <th className="pt-4">52</th>
                            <th className="pt-4">16</th>
                            <th className="pt-4">$125.5</th>
                            <th className="pt-4">700</th>
                        </tr>
                        <tr>
                            <th className=''>
                                <div className='rank_num text-dark mt-3'>6</div> 
                            </th>
                            <td className='d-flex align-items-center'>
                                <img src={NFTs_6} className='rounded-circle' height={'55'} width={'55'}/>
                                <div className='mx-3'>
                                    <h6 className='p-0 m-0'>Shadow Cubes</h6>
                                    <p className='p-0 m-0 text-secondary'>@cubicglass</p>
                                </div>
                            </td>
                            <th className="pt-4">15</th>
                            <th className="pt-4">14</th>
                            <th className="pt-4">$95.5</th>
                            <th className="pt-4">8.5k</th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
  )
}

export default Creators_Table