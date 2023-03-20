import React from 'react';
import  '../../assets/css/style.css';
import { Carousel } from '@trendyol-js/react-carousel';
import Crousal_Cards from './Crousal_Cards';


const Discover_Slider = () => {


  return (
    <>
      <div className='my-5 pt-5 '>
            {/* heading */}
            <div className='container'>
                <div className='d-flex justify-content-end'>
                    <div className='multi_heading p-3 px-5  rounded-3 text-center'>
                        <h4 className='font-family'>Signature Wall</h4>
                    </div>
                </div>
                <h1 className='theme-color font-family text-center my-5'>Say Goos-bye To Your Student Loans</h1>
            </div>
            <Carousel show={3.5} slide={4} swiping={true}>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
                <Crousal_Cards/>
            </Carousel>

                {/* ---------- form  ---------- */}

                    <div className='container my-5'>
                            <div className='row'>
                                <div className='col-md-5 my-3'>
                                    <input className="p-2 form-control" placeholder="@username"  />
                                </div>
                                <div className='col-md-5 my-3'>
                                    <input className="p-2 form-control" placeholder="What's on your mind ?"  />
                                </div>
                                <div className='col-md-2  my-3'>
                                    <button className='btn btn-primary font-family w-100 fs-4'>Submit</button>
                                </div>
                            </div>
                    </div>

                {/* ---------- form  END---------- */}

      </div>
    </>
  );
}

export default Discover_Slider;
