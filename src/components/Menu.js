import React from 'react'

import logo from '../assets/logo-waydev-dark.svg';
import '../components/Menu.css';

function Menu() {
  return (
    <div className='menu'>
      <div className="menu-logo">
        <img src={logo} alt=""/>
      </div>
      <div className="menu-work-log">
        Work-Log
      </div>
    </div>
  )
}

export default Menu
