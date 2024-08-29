import React from 'react'
import logo from '../../assets/Luen.jpg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className="container grid1">
            <div className="box">
            <img width="95" height="60" src= {logo} alt=''/>
            <p>"I am trying my best to become a good programmer"</p>
            <div className="socialIcon">
            <Link className='white' to={{ pathname: 'https://www.facebook.com/luen2003' }} target="_blank"><i className='fab fa-facebook-f '></i></Link>
                    <i className='fab fa-instagram '></i>
                    <i className='fab fa-twitter '></i>
                    <Link className='white' to={{ pathname: 'https://www.youtube.com/@luen_2003' }} target="_blank"><i className='fab fa-youtube '></i></Link>
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
                    <p>Latest News</p>
                    <span>30 April 2023</span>
                </div>
                <div className='text'>
                    <p>Lastest News</p>
                    <span>30 April 2023</span>
                </div>
                <div className='text'>
                    <p>Lastest News</p>
                    <span>30 April 2023</span>
                </div>
            </div>
            <div className="box">
                <h2>Get in Touch</h2>
                <p>"I am trying my best to become a good programmer"</p>
                <div className="icon">
                    <i className='fa fa-map-marker-alt'></i>
                    <label htmlFor=''>Location: Hanoi, Vietnam</label>
                </div>
                <div className="icon">
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>Phone: +123456789</label>                   
                </div>
                <div className="icon">
                    <i className='fa fa-envelope'></i>
                    <label htmlFor=''>Email: luen2k3@gmail.com</label>                   
                </div>
            </div>
        </div>
        <div className="legal container">
            <p>Copyright @2023. All rights reserved.</p>
            <label htmlFor=''>Made with ❤️‍🔥 by <span>Luen</span></label> 
        </div>
    </footer>
  )
}
