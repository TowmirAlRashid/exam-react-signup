import React from 'react'
import SignUpTool from './SignUpTool'
import { BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';


const SignUpTools = () => {
  return (
    <div className='tools'>
        <SignUpTool
            text='Sign up with LinkedIn'
            icon={<BsLinkedin className='icon' />}
        />

        <SignUpTool
            text='Sign up with Twitter'
            icon={<BsTwitter className='icon' />}
        />

        <SignUpTool
            text='Sign up with Facebook'
            icon={<BsFacebook className='icon' />}
        />
    </div>
  )
}

export default SignUpTools