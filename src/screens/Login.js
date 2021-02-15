import React from 'react'
import { useState } from 'react'
import './Login.css'
import SignIn from './SignIn'
function Login(className = 'login') {
  const [signIn, setsignIn] = useState(false)
  return (
    <div>
      <div className='loginbg'>
        <img
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='login_logo'
          className='loginlogo'
        />
        <button className='signin_bt' onClick={() => setsignIn(true)}>
          Sign In
        </button>
        <div className='login_gradient' />
        <div className='loginbody'>
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV programs and More.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className='input'>
                <form>
                  <input type='email' placeholder='Email Address' />
                  <button className='start_bt' onClick={() => setsignIn(true)}>
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
