import React from 'react'
import "./Portofolio.css"
import img1 from "../../assets/img1.webp"
import img2 from "../../assets/img2.webp"
import img3 from "../../assets/img3.webp"
import img4 from "../../assets/img4.webp"
import img5 from "../../assets/img5.webp"
import img6 from "../../assets/img6.webp"



export default function Portofolio() {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 2,
      img: img2,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 3,
      img: img3,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 4,
      img: img4,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 5,
      img: img5,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 6,
      img: img6,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
    {
      id: 7,
      img: img2,
      title: "Crypto currency Dashboard and financial visualization",
      github: "https://hithub.com",
      demp: "https://dribbble.com/Alien_pixels"
    },
  ];

  return (
    <section id="portofolio">
      <h2>Portofolio</h2>
      <h5 className="text_light">My Recent Work</h5>
      <div className="portofolio_container container">

        {
          data.map(({ id, img, title, github, demp }) => {
            return (
              <article key={id} className="portofolio_item">
                <div className="portofolio_item_img">
                  <img src={img} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portofolio_item_cta">
                  <a href={github} rel="noreferrer" className='btn' target="_blank" >Github</a>
                  <a href={demp} rel="noreferrer" className='btn btn_primary' target="_blank" >Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}
