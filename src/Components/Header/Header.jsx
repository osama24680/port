import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import me from "../../assets/girl.png"
import HeaderSocial from "./HeaderSocial"



export default function Header() {
  return (
    <header id="header">
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Osama Megahed</h1>
            <h5 className="text_light">Front-end Developer</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
              <img src={me} alt="me"/>
            </div>
            <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
    </header>
  )
}
