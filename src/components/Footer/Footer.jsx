import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <h1>Tomoto</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim, dolor autem quis ad voluptatibus dolores, alias quod minus error, officia facilis aliquid vel totam labore nisi? Unde, illo quidem?</p>
<div className="footer-social-icon">
<FaFacebookSquare/>
<FaXTwitter/>
<FaLinkedin/>
</div>
        </div>
        <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className='footer-content-right'>
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+91-8086098453</li>
        <li>nivedtp6@gmail.com</li>
    </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright2024@Tomoto All Right Reserved</p>
    </div>
  )
}

export default Footer
