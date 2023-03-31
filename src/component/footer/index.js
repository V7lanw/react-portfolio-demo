import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Weilong</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in//" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/V7lanw/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; WW 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer