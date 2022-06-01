import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div>
          <img className='header-logo' src='https://cdn.pixabay.com/photo/2017/09/19/13/54/animal-2765319_960_720.png' alt='Gergedan Logo' />
        </div>
        <div className='nav-bar'>
            <a href='#'>home</a>
            <a href='#'>menu</a>
            <a href='#'>categori</a>
            <a href='#'>about us</a>
            <a href='#'>contact</a>
        </div>
      
      </div>
    )
  }
}
