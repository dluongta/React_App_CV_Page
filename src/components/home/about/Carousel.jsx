import React, { useEffect, useState } from 'react';
import heroImage1 from '../../../assets/luen.jpg';
import heroImage2 from '../../../assets/luen_logo.png';
import heroImage3 from '../../../assets/hexagon-main.png';
import './Carousel.css';

const Carousel = () => {
    const images = [heroImage1, heroImage2, heroImage3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => setCurrentIndex(index);
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
                {images.map((img, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={img} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <button className="carousel-button prev" onClick={prevSlide}>
                ❮
            </button>
            <button className="carousel-button next" onClick={nextSlide}>
                ❯
            </button>

            {/* Dots */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
