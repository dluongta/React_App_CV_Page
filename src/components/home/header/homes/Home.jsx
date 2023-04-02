import React from 'react'
import headerImage from  '../../../../assets/header-img.png'

export const Home = () => {
  return (
    <section className='home'>
        <div className='container flex'>
            <div className='left'>
                <div className='img'>
                    <img src={headerImage} alt='' />
                </div>
            </div>
            <div className='right topMargin'>
                <h1> I AM A <br/>
                WEB PROGRAMMER
                </h1>
                <div className="socialIcon">
                    <i className='fab fa-facebook-f facebook'></i>
                    <i className='fab fa-instagram instagram'></i>
                    <i className='fab fa-twitter twitter'></i>
                    <i className='fab fa-youtube youtube'></i>
                    <i className='fab fa-pinterest pinterest'></i>
                </div>
                <p>I am studying and researching</p>
                <button className='primary-btn'>Contact Me</button>
            </div>
        </div>
    </section>
  )
}
