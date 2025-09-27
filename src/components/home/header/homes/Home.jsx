import React, { useState, useEffect, useRef } from 'react';
import headerImg from '../../../../assets/main.png';
import introBackground from '../../../../assets/IntroBackground.mp4';
import { Link } from 'react-router-dom';

export const Home = ({ className }) => {
  const originalToRotate = ["Proficient Programmer", "Software Developer", "Hardware Engineer"];
  const [toRotate, setToRotate] = useState([...originalToRotate, originalToRotate[0]]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLineIndex === toRotate.length - 1) {
        // Tắt hiệu ứng chuyển động và reset về phần tử đầu tiên
        setIsTransitioning(false); // Tắt hiệu ứng
        setCurrentLineIndex(0); // Reset về phần tử đầu tiên

        // Bật lại hiệu ứng sau 1 chu kỳ render (bằng cách dùng setTimeout với thời gian ngắn)
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      } else {
        // Chuyển sang phần tử tiếp theo với hiệu ứng bình thường
        setIsTransitioning(true);
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentLineIndex, toRotate]);




  const colors = [
    '#FF8800',
    '#A033FF',
    '#0088FF'
  ];


  const gradientTransitonTextStyle = {
    color: colors[currentLineIndex % colors.length],
  };

  return (
    <>
      <div className="container mx-auto position-relative ">
        <div className="swiper mySwiper h-100 w-100">
          <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active w-100">
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
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
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

      <section className={`home ${className}`} >
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={headerImg} alt="" />
            </div>
          </div>
          <div className="right topMargin" style={{ marginTop: '-22px' }}>
            <div className="direction">
<div className="headline">

              <h1 className="gradientTextStyle">
              I AM A
              </h1>
              <h1>
                <div className="carousel_carousel_container">
                  <div
                    className="carousel_carousel"
                    style={{
                      transform: `translateY(-${currentLineIndex * 25 }%)`,
                      transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',

                    }}
                  >
                    {toRotate.map((text, index) => (
                      <div key={index} className="carousel_carousel_item" style={gradientTransitonTextStyle}>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </h1>
              </div>
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
              I am Dinh Luong Ta. I am a programmer skilled at Web Development, Android Development, and I am also learning Artificial Intelligence and Hardware. I am also fascinated by science and technology.
            </p>
            <p>
              My CV: <Link to={{ pathname: '/CV.pdf' }} target="_blank" className="blue">
                CV Viewer Page
              </Link>
            </p>
            <button className="primary-btn btn-led">
              Contact Me
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
