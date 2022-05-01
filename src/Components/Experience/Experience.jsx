import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs"
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <h5 className="text_light">the Skills I Have</h5>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Html</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className='text_light'>intermidate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text_light'>intermidate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>React</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience_Backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node js</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text_light'>intermidate</small>
              </div>

            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text_light'>intermidate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>python</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>python</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>Expressjs</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
