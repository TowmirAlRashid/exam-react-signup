import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <h1>Sign Up</h1>
        <h2>Get started absolutely free</h2>
        <form>
            <div className='inputs elem'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' placeholder='Enter email here' />
            </div>

            <div className='inputs elem'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' placeholder='Enter password here' />
            </div>

            <div className='elem check'>
                <input type='checkbox' id="agree" name="agree" />
                <label htmlFor="agree"><small>Creating an account means you're okay with our Terms of Service, Privacy Policy, and default Notification Settings</small></label>
            </div>

            <button type='submit' className='elem'>Sign Up</button>
        </form>
    </div>
  )
}

export default Form