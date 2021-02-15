import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)
  const history = useHistory()
  function transNavbar() {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', transNavbar)
    return () => window.removeEventListener('scroll', transNavbar)
  }, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_contents'>
        <img
          onClick={() => history.push('/')}
          className='nav_logo'
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='nav_logo'
        />
        <img
          onClick={() => history.push('./profile')}
          className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='nav_avatar'
        />
      </div>
    </div>
  )
}

export default Nav
