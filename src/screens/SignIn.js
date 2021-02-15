import React from 'react'
import { useRef } from 'react'
import { auth } from '../firebase'
import './SignIn.css'
function Signin(className = 'Signin') {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        alert(error.message)
      })
  }
  const signin = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className='signin'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className='span_grey'>New to Netflix?</span>{' '}
          <span className='signup_link' onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  )
}

export default Signin
