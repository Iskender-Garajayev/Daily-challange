import React from 'react'
import './Header.css'
import Logo from '../img/logo.png'

function Header() {
  return (
    <div>


      <div className='header_logo'>
        <div className='logo'>
          <img className='navbar_logo' src={Logo} alt="logo" />
        </div>

        <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contacts</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>







    </div>
  )
}

export default Header