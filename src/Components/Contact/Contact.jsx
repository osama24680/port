import React,{ useRef } from 'react';
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from 'emailjs-com';


export default function Contact() {

  
    const form = useRef();

    const sendEmail = (e) => {
      

      emailjs.sendForm('service_z1y4so8', 'template_80pw2xi', form.current, '1o7X5mK6MhxogzwGi')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
 
    return (
      <section id="contact">
        <h2>Contact Me</h2>
        <h5 className="text_light">Get In Touch</h5>

        <div className="container contact_container">
          <div className="contact_options">

            <article className="contact_option">
              <MdOutlineEmail className='contact_option_icon' />
              <h4>Email</h4>
              <h5>osamamegahed2468@gmail.com</h5>
              <a href="mailto:osamamegahed2468@gmail.com" rel="noreferrer" target="_blank">send message</a>
            </article>

            <article className="contact_option">
              <RiMessengerLine className='contact_option_icon' />
              <h4>facebook</h4>
              <h5>osamamegahed2468@gmail.com</h5>
              <a href="mailto:osamamegahed2468@gmail.com" rel="noreferrer" target="_blank">send message</a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className='contact_option_icon' />
              <h4>whatsapp</h4>
              <h5>osamamegahed2468@gmail.com</h5>
              <a href="https://wa.me/01127796848" rel="noreferrer" target="_blank">send message</a>
            </article>


          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" />
            <input type="email" name="email" placeholder="Your Eamil" />
            <textarea name="message" rows="7" placeholder="write your message" required></textarea>
            <button type="submit" className="btn btn_primary">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
