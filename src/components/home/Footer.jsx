import React, { useEffect } from 'react';
import logo_brand from '../../assets/luen.jpg';
import { Link } from 'react-router-dom';

export const Footer = () => {
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    }, []);

    return (
        <footer>
            <div className="container grid1">
                <div className="box centerBox">
                    <img width="95" height="60" src={logo_brand} alt='' />
                    <p>LUMIND - LUONG MIND</p>
                    <div className="socialIcon">
                        <Link className='white' to={{ pathname: 'https://www.facebook.com/dluongta' }} target="_blank"><i className='fab fa-facebook-f'></i></Link>
                        <Link className='white' to={{ pathname: 'https://www.instagram.com/dluongta/' }} target="_blank"> <i className='fab fa-instagram '></i></Link>
                        <Link className='white' to={{ pathname: 'https://www.linkedin.com/in/dinh-luong-ta-940ba2286/' }} target="_blank"><i className='fab fa-brands fa-linkedin'></i></Link>
                        <Link className='white' to={{ pathname: 'https://www.tiktok.com/@dluongta_' }} target="_blank"><i className='fab fa-brands fa-tiktok'></i></Link>
                        <Link className='white' to={{ pathname: 'https://www.youtube.com/@dinhluongta' }} target="_blank"><i className='fab fa-youtube'></i></Link>
                        <Link className='white' to={{ pathname: 'https://github.com/dluongta' }} target="_blank"><i className='fab fa-brands fa-github'></i></Link>

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
                        <p>Latest News</p>
                        <span>30 April 2023</span>
                    </div>
                    <div className='text'>
                        <p>Latest News</p>
                        <span>30 April 2023</span>
                    </div>
                </div>
                <div className="box">
                    <h2>Get in Touch</h2>
                    <p>"I am trying my best to become a good programmer"</p>
                    <div className="icon">
                        <i className='fa fa-map-marker-alt'></i>
                        <span>Location: Hanoi, Vietnam</span>
                    </div>
                    <div className="icon">
                        <i className='fa fa-phone'></i>
                        <span>Phone: +84 383402036</span>
                    </div>
                    <div className="icon">
                        <i className='fa fa-envelope'></i>
                        <span>Email: dluongta@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="legal container">
                <p>Copyright <span className='blue'>&copy;<span id="currentYear"></span></span>. All rights reserved.</p>
                <span className='author'>Made with <span className="heartbeat">❤️‍🔥</span> by <span className='blue'>Dinh Luong Ta</span></span>
            </div>
        </footer>
    );
};
