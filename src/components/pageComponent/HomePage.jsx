import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall'; // Importing the snowfall component
import { About } from '../home/about/About';
import { Branding } from '../home/header/homes/Branding';
import { Home } from '../home/header/homes/Home';
import { Skill } from '../home/header/homes/Skill';
import { WrapperOne } from '../home/header/homes/WrapperOne';
import { Service } from '../home/services/Service';
import { Wrapper } from '../home/Wrapper';
import { City } from '../home/header/homes/City';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
      revealElements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Snowfall covering the entire page */}
      <Snowfall 
        style={{
          position: 'fixed', // Fixed to the viewport
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10, // Ensure snowflakes appear above other elements
          pointerEvents: 'none', // Allow interaction with content
        }}
      />
      
      {/* Main content */}
      <div id="mySidenav" className="sidenav">
        <Link to='/pages' id="pages"> Pages </Link>
        <Link to='/blog' id="blog"> Blog </Link>
        <Link to='/portfolio' id="portfolio"> Portfolio </Link>
        <Link to='/contact' id="contact"> Contact </Link>
      </div>
      
      {/* The rest of your content */}
      <Home className="reveal"/>
      <Branding className="reveal" />
      <About className="reveal" />
      <Service className="reveal" />
      <Wrapper className="reveal" />
      <Skill className="reveal" />
      <City className="reveal" />
      <WrapperOne className="reveal" />
    </>
  );
};
