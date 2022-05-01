import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'

export default function HeaderSocial() {
    return (
        <div className="header_social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"> <BsLinkedin /> </a>
            <a href="https://github.com" target="_blank" rel="noreferrer"> <FaGithub /> </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"> <AiFillFacebook /> </a>
        </div>
    )
}
