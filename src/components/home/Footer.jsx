import React from 'react'
import logo from '../../assets/Luen.jpg'

export const Footer = () => {
  return (
    <footer>
        <div className="container grid1">
            <div className="box">
            <img width="95" height="60" src= {logo}  alt=''/>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero."</p>
            <div className="socialIcon">
                    <i className='fab fa-facebook-f '></i>
                    <i className='fab fa-instagram '></i>
                    <i className='fab fa-twitter '></i>
                    <i className='fab fa-youtube '></i>
                    <i className='fab fa-pinterest '></i>
            </div>
            </div>
            <div className="box">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className='text'>
                    <p>Boost Sale</p>
                    <span>28 Feb 2022</span>
                </div>
                <div className='text'>
                    <p>Boost Sale</p>
                    <span>28 Feb 2022</span>
                </div>
                <div className='text'>
                    <p>Boost Sale</p>
                    <span>28 Feb 2022</span>
                </div>
            </div>
            <div className="box">
                <h2>Get in Touch</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam</p>
                <div className="icon">
                    <i className='fa fa-location-dot'></i>
                    <label htmlFor=''>Location: Hanoi, Vietnam</label>
                </div>
                <div className="icon">
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>Phone: +123456789</label>                   
                </div>
                <div className="icon">
                    <i className='fa fa-envelope'></i>
                    <label htmlFor=''>Email: luen@example.com</label>                   
                </div>
            </div>
        </div>
        <div className="legal container">
            <p>Copyright @2023. All rights reserved.</p>
            <label htmlFor=''>Made with ❤️ by <span>Luen</span></label> 
        </div>
    </footer>
  )
}
