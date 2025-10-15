import React, { useEffect } from 'react';
import logo_brand from '../../assets/luen.jpg';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  useEffect(() => {
    const year = new Date().getFullYear();
    const el = document.getElementById('currentYear');
    if (el) el.textContent = year;
  }, []);

  return (
    <footer>
      <svg viewBox="0 -5 120 28" preserveAspectRatio="none">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 13 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          <path id="wave" d="M 0,10 C 30,10 30,15 60,15 
              90,15 90,10 120,10 
              150,10 150,15 180,15 
              210,15 210,10 240,10 v 28 h -240 z" />
        </defs>

        <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2" />
        <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0" />
        <g className="gooeff">
        <circle className="drop drop1" cx="20" cy="2" r="1.8" />
        <circle className="drop drop2" cx="25" cy="2.5" r="1.5" />
        <circle className="drop drop3" cx="16" cy="2.8" r="1.2" />

        <circle className="drop drop4" cx="95" cy="2.2" r="1.5" />
        <circle className="drop drop5" cx="105" cy="3" r="1.8" />
        <circle className="drop drop6" cx="110" cy="2.5" r="1.2" />

        <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
        </g>

      </svg>

      <div className="container grid1">
        <div className="box centerBox">
          <img width="95" height="60" src={logo_brand} alt="logo" />
          <p>DLUONGTA - LUONG MIND</p>
          <div className="socialIcon">
            <a href="https://www.facebook.com/dluongta" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/dluongta/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/dinh-luong-ta-940ba2286/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.tiktok.com/@dluongta_" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            <a href="https://www.youtube.com/@dinhluongta" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://github.com/dluongta" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>

        <div className="box">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="box">
          <h2>Recent Post</h2>
          {[1,2,3].map((i) => (
            <div key={i} className="text">
              <p>Latest News</p>
              <span>30 April 2023</span>
            </div>
          ))}
        </div>

        <div className="box">
          <h2>Get in Touch</h2>
          <p>"Do everything in any way"</p>
          <div className="icon"><i className="fa fa-map-marker-alt"></i><span>Location: Hanoi, Vietnam</span></div>
          <div className="icon"><i className="fa fa-phone"></i><a href="tel:+84383402036">Phone: +84 383402036</a></div>
          <div className="icon"><i className="fa fa-envelope"></i><a href="mailto:dluongta@gmail.com">Email: dluongta@gmail.com</a></div>
        </div>
      </div>

      <div className="legal container">
        <p>Copyright <span className="blue">&copy;<span id="currentYear"></span></span>. All rights reserved.</p>
        <span className="author">Made with <span className="heartbeat">❤️‍🔥</span> by <span className="blue">Dinh Luong Ta</span></span>
      </div>
    </footer>
  );
};
