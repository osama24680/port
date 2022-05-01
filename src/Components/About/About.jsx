import React from 'react'
import aboutGirl from "../../assets/aboutGirl.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import "./About.css"


export default function About() {
  return (
    <section id="about">
    <h2>About Me</h2>
      <h5 className="text_light">Get to Know </h5>
      

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={aboutGirl} alt="About" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small >+3 Years Working </small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>+200 Worldwide </small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Experience</h5>
              <small >+80 complete projects </small>
            </article>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic
          </p>
          <a href="#contact" className="btn btn_primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
