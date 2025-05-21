import React from 'react'
import './NavbarTop.css'
import NavbarMiddle from '../NavbarMiddle/NavbarMiddle'
import NavbarBottom from '../NavbarBottom/NavbarBottom'
function NavbarTop() {
  return (
    <>
    <div className='navbar-top-container'>
        <div className='navbar-top-phone-number'>
            <i class="bi bi-telephone"></i>
            <p>9876543210</p>
        </div>

        <div className='navbar-top-offer'>
            <p>Sign up and <span style={{color:"orange"}}>GET 25% OFF</span> for your first order</p>
        </div>

        <div className='navbar-top-facebook-insta-icon-div'>
            
        <div className='navbar-top-mail-id'>
            <i class="bi bi-envelope"></i>
            <p>yourmail@gmail.com</p>
        </div>
            <div className='navbar-top-facebook-insta-icon'>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
            </div>
        </div>
    </div>
    <NavbarMiddle/>
    <NavbarBottom/>
    </>
  )
}

export default NavbarTop
