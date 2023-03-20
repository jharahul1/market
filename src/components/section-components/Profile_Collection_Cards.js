import React from 'react'
import CollectionCard from './Collections_Card_Component';
import Img1 from '../../assets/img/nft_7.jpg';
import Img2 from '../../assets/img/nft_15.jpeg';
import Img3 from '../../assets/img/nft_12.jpeg';
import Img4 from '../../assets/img/nft_6.jpg';


const Profile_Collection_Cards = () => {
  return (
    <>
        <div className='row gx-5'>
            <div className='col-md-4 my-3'>
                <CollectionCard Img={Img1}  Img2={Img3} Img3={Img2}/>
            </div>
            <div className='col-md-4 my-3'>
                <CollectionCard Img={Img2}  Img2={Img3} Img3={Img2}/>
            </div>
            <div className='col-md-4 my-3'>
                <CollectionCard Img={Img3}  Img2={Img3} Img3={Img2}/>
            </div>
        </div>
    </>
  )
}

export default Profile_Collection_Cards