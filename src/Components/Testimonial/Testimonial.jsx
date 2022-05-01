import React from 'react'

import "./Testimonial.css"
import person1 from "../../assets/persone1.jpg"
import person2 from "../../assets/person2.jpg"
import person3 from "../../assets/person3.jpg"
// import person4 from "../../assets/person4.jpg"
import {Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



export default function Testimonial() {
  const data = [
    {
      avatar: person1,
      name: "Tina Snow",
      content: `Lorem Ipsum is simply dummy text  the printing
    and typesetting industry Lorem Ipsum has been the
    when an unknown printer took a galley  type and
    scrambled it to make a type specimen  It has`
    },
    {
      avatar: person2,
      name: "Tina Snow",
      content: `Lorem Ipsum is simply dummy text  the printing
    and typesetting industry Lorem Ipsum has been the
    when an unknown printer took a galley  type and
    scrambled it to make a type specimen  It has`
    },
    {
      avatar: person3,
      name: "Tina Snow",
      content: `Lorem Ipsum is simply dummy text  the printing
    and typesetting industry Lorem Ipsum has been the
    when an unknown printer took a galley  type and
    scrambled it to make a type specimen  It has`
    },
  ]
  return (
    <section id="testimonial">
      <h2>Testimonial</h2>
      <h5 className="text_light">Review from clients</h5>

      <Swiper className="container Testimonial_container" 
       modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, content }, index) => {
            return (
              <SwiperSlide key={index} className="Testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="Client_name"> {name}</h5>
                <small className="client_review">{content}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>





    </section>
  )
}
