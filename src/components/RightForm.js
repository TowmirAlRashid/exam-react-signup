import React from 'react'
import TopImg from '../assets/signUpTop.png'
import BottomImg from '../assets/signUpBottom.png'
import Form from './Form'

const RightForm = () => {
  return (
    <div className='right-container'>
        <div className='top-img'>
            <img
                src={TopImg}
                alt='top-design'
            />
        </div>

        <Form />

        <div className='bottom-img'>
            <img
                src={BottomImg}
                alt='top-design'
            />
        </div>
    </div>
  )
}

export default RightForm