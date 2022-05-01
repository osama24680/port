import React from 'react'
import CV from "../../assets/cv.pdf"

export default function CTA() {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className="btn">Downlaod CV</a>
            <a href="#contact" className="btn btn_primary">let's talk</a>
        </div>
    </div>
  )
}
