import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Avish Singh Negi</h1>
          <h5>FullStack Developer</h5>
          <CTA />
          <HeaderSocial />
      </div>
      <div className="me">
        <img src={ME} alt="" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </header>
  )
}

export default Header