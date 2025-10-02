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
                {/* Logo + Social */}
                <div className="box centerBox">
                    <img width="95" height="60" src={logo_brand} alt='logo' />
                    <p>LUMIND - LUONG MIND</p>
                    <div className="socialIcon">
                        <a className='white' href='https://www.facebook.com/dluongta' target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f'></i></a>
                        <a className='white' href='https://www.instagram.com/dluongta/' target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
                        <a className='white' href='https://www.linkedin.com/in/dinh-luong-ta-940ba2286/' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                        <a className='white' href='https://www.tiktok.com/@dluongta_' target="_blank" rel="noopener noreferrer"><i className='fab fa-tiktok'></i></a>
                        <a className='white' href='https://www.youtube.com/@dinhluongta' target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube'></i></a>
                        <a className='white' href='https://github.com/dluongta' target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                    </div>
                </div>

                {/* Quick Links */}
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

                {/* Recent Post */}
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

                {/* Contact Section */}
                <div className="box">
                    <h2>Get in Touch</h2>
                    <p>"I am trying my best to become a good programmer"</p>
                    <div className="icon">
                        <i className='fa fa-map-marker-alt'></i>
                        <span>Location: Hanoi, Vietnam</span>
                    </div>
                    <div className="icon">
                        <i className='fa fa-phone'></i>
                        <a href="tel:+84383402036">
                            <span>Phone: +84 383402036</span>
                        </a>
                    </div>
                    <div className="icon">
                        <i className='fa fa-envelope'></i>
                        <a href="mailto:dluongta@gmail.com">
                            <span>Email: dluongta@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="legal container">
                <p>Copyright <span className='blue'>&copy;<span id="currentYear"></span></span>. All rights reserved.</p>
                <span className='author'>Made with <span className="heartbeat">❤️‍🔥</span> by <span className='blue'>Dinh Luong Ta</span></span>
            </div>
        </footer>
    );
};
