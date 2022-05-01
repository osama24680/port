import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"
import {FiFacebook} from "react-icons/fi"
import "./Footer.css"
export default function Footer() {
  return (
    <section id="footer">
      <a href="#home" className="footer_logo">Osama</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#servicese">Servicese</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_social">
        <a href="https://facebook.com"><FaFacebookF style={{color:"#fff"}}/></a>
        <a href="https://instagram.com"> <IoLogoTwitter style={{color:"#fff"}}/></a>
        <a href="https://facebook.com"> <FiFacebook style={{color:"#fff"}}/></a>
      </div>
      <div className="footer_copyright">
        <small >&copy; Osama, All rights reserved</small>
      </div>
    </section>
  )
}
