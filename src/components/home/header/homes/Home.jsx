import React, { useState, useEffect } from 'react';
import headerImg from '../../../../assets/main.png';
import introBackground from '../../../../assets/IntroBackground.mp4';
import { Link } from 'react-router-dom';
import math from '../../../../assets/math.gif';

export const Home = ({ className }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0); // Track the current line being displayed
  const toRotate = ["Proficient Programmer", "Software Developer", "Hardware Engineer"];

  useEffect(() => {
    // Change line every 3 seconds
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % toRotate.length); // Loop through lines
    }, 3000); // Change line every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const gradientTextStyle = {
    backgroundImage: 'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',  // This ensures the gradient shows on the text itself
    paddingRight: '12px',
  };
  const gradientTransitonTextStyle = {
    backgroundImage: 'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',  // This ensures the gradient shows on the text itself
  };

  return (
    <>
      <div className="container mx-auto position-relative ">
        <div className="swiper mySwiper h-100 w-100">
          <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active w-100" style={{ height: '700px' }}>
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item"
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  muted
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src={introBackground} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <section className={`home ${className}`} style={{ marginTop: '200px' }}>
        <div className="container flex" style={{ marginTop: '200px' }}>
          <div className="left">
            <div className="img">
              <img src={headerImg} alt="" style={{ marginTop: '120px' }} />
            </div>
          </div>
          <div className="right topMargin">
            <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>

              <h1 style={gradientTextStyle}>
                I AM A
              </h1>
              <h1>
                <div className="carousel_carousel_container__3M-yX" >
                  <div
                    className="carousel_carousel__3tVog carousel_transition__x8b1X"
                    style={{
                      transform: `translateY(-${currentLineIndex * 33.333333}%)`, // Moves the text up, one at a time
                    }}
                  >
                    {toRotate.map((text, index) => (
                      <div key={index} className="carousel_carousel_item__2O_Wn" style={gradientTransitonTextStyle}>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </h1>
            </div>


            <div className="socialIcon">
              <Link to={{ pathname: 'https://www.facebook.com/dluongta' }} target="_blank">
                <i className="fab fa-facebook-f facebook"></i>
              </Link>
              <Link to={{ pathname: 'https://www.instagram.com/dluongta/' }} target="_blank">
                <i className="fab fa-instagram instagram"></i>
              </Link>
              <Link to={{ pathname: 'https://www.linkedin.com/in/dinh-luong-ta-940ba2286/' }} target="_blank">
                <i className="fab fa-brands fa-linkedin likedin"></i>
              </Link>
              <Link to={{ pathname: 'https://www.youtube.com/@dinhluongta' }} target="_blank">
                <i className="fab fa-youtube youtube"></i>
              </Link>
              <Link to={{ pathname: 'https://www.tiktok.com/@dluongta_' }} target="_blank">
                <i className="fab fa-brands fa-tiktok tiktok"></i>
              </Link>
              <Link to={{ pathname: 'https://github.com/dluongta' }} target="_blank">
                <i className="fab fa-brands fa-github github"></i>
              </Link>
            </div>

            <p>
              I am Dinh Luong Ta. I am a programmer skilled at Web Development, Android Development, and I am also learning Artificial Intelligence and Hardware. My favorite subjects are Math, Physics, and Informatics.
            </p>
            <p>
              My CV: <Link to={{ pathname: 'https://www.topcv.vn/xem-cv/VlNRBgdQUwcHUAZUVQMOAQUCAlsCCwMHAwNXUA38ec' }} target="_blank" className="blue">
                CV Viewer Page
                <img src={math} alt="Math GIF" className="math-image" />
              </Link>
            </p>

            <button className="primary-btn">Contact Me</button>
          </div>
        </div>
      </section>
    </>
  );
};
