import React, { useEffect } from 'react';
import { About } from '../home/about/About';
import { Branding } from '../home/header/homes/Branding';
import { Home } from '../home/header/homes/Home';
import { Skill } from '../home/header/homes/Skill';
import { WrapperOne } from '../home/header/homes/WrapperOne';
import { Service } from '../home/services/Service';
import { Wrapper } from '../home/Wrapper';
import { City } from '../home/header/homes/City';
import { Link } from 'react-router-dom';
import hexagon from '../../assets/hexagon.png';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; 

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
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const particlesOptions = {
    fullScreen: {
      enable: true, 
      zIndex: 1000,  
    },
    interactivity: {
      events: {
        onClick: {
          enable: true, 
          mode: "push", 
        },
        onHover: {
          enable: true, 
          mode: "repulse", 
        },
      },
      modes: {
        push: {
          quantity: 10, 
        },
        repulse: {
          distance: 100, 
        },
      },
    },
    particles: {
      number: {
        value: 50, 
      },
      size: {
        value: 12, 
      },
      shape: {
        type: 'image',
        image: [
          {
            src: hexagon, 
            width: 20,    
            height: 20,  
          },
        ],
      },
      move: {
        enable: true,
        speed: 8, 
        direction: 'bottom',
        random: true, 
        straight: false, 
      },
      opacity: {
        value: 0.8, 
      },
    },
  };

  const particlesInit = (engine) => {
    loadSlim(engine); 
  };

  return (
    <>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000, 
        }}
      />

      <div id="mySidenav" className="sidenav">
        <Link to='/pages' id="pages"> Pages </Link>
        <Link to='/blog' id="blog"> Blog </Link>
        <Link to='/portfolio' id="portfolio"> Portfolio </Link>
        <Link to='/contact' id="contact"> Contact </Link>
      </div>

      <Home className="reveal" />
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
