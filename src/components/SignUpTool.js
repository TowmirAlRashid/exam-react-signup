import React from 'react'

const SignUpTool = ({ icon, text }) => {
  return (
    <div className='tool'>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default SignUpTool