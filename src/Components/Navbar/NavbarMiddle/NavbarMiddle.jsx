import React from 'react'
import './NavbarMiddle.css'
import logoImage from '../../../Assets/logo.png'
function NavbarMiddle() {
  return (
    <>
    <div className='navbar-middle-container'>
      <img src={logoImage} className='navbar-middle-logo'/>
      <div className='navbar-middle-search-box-icon'>
        <input type='search' placeholder='Search'/><i class="bi bi-search"></i>
      </div>
      <div className='heart-cart-person-signIn-icon'>
        <i class="bi bi-heart"></i>
        <i class="bi bi-cart2"></i>
        <i class="bi bi-person"></i>
        </div>
      </div>
      <hr/>
      </>
  )
}

export default NavbarMiddle
