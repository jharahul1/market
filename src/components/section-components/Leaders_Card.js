import React from 'react'
import '../../assets/css/style.css';
import card_line from '../../assets/img/line.png';

const Leaders_Card = (props) => {
  return (
    <>
        <div className='leaders_card p-3'>
            <div className='d-flex w-100 align-items-center'>
                <h5 className='w-75 p-0 m-0 theme-color font-family'>{props.title}</h5>
                <span className='w-25 text-end'>
                    <i className='material-icons text-white'>more_vert</i>
                </span>
            </div>
            <div className=' d-flex w-100 align-items-center'>
                <h2 className='w-50 p-0 m-0 text-white font-family'>{props.count}</h2>
                <span className='w-50 text-center'>
                    <img src={card_line} width={'80'}/>
                </span>
            </div>
            <p className='text-success p-0 m-0 fw-bold'>{props.ranking}</p>
        </div>
    </>
  )
}

export default Leaders_Card
