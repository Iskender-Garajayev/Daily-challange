import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
       <div className='footer'>
        <ul className='footer_c'>
          <li>Company</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
        </ul>

        <ul className='footer_d'>
          <li>Contacts</li>
          <li><a href="mailto:garajayev@mail.com">Send Email</a></li>
          <li>Lorem.</li>
        </ul>

       </div>
    </div>
  )
}

export default Footer