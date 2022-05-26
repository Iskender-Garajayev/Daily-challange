import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-detailes'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.linkedin.com/in/iskander-garajayev-799923182/'>
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href='https://github.com/Iskender-Garajayev'>
                <i className='fa fa-github-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-twitter-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
            </div>
          </div>
          <div className='prifile-details-name'>
            <span className='primary-text'>
              {""}
              Hello I'M <span className='highlighted-text'>Iskender</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Front end developer',2000,
                    'mary',2000,
                    'yoloten',2000,
                  ]}
                />
              </h1>
              <span className='profil-role-tagline'>
                Knack of building applications with front end operations.
              </span>
            </span>
          </div>
          <div className='profile-optins'>
            <button className='btn primary-btn'>
              {" "}
              Hire Me {""}
            </button>
            <a href='Iskender.pdf' download="Garajayev Iskender.pdf">
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
