import React from 'react';
import logo from '../../../../assets/logo.jpg';
import Hero from './Hero';
import CustomVideoPlayer from './CustomVideoPlayer';
import caption from '../../../../assets/caption.vtt';
import bgVideo from '../../../../assets/dluongta-animation.mp4';
import caption_logo from '../../../../assets/caption_logo.vtt';
import bgLogoVideo from '../../../../assets/lumind_logo.mp4';
import lumind_animation_text from '../../../../assets/lumind_animation.vtt';
import lumindAnimationVideo from '../../../../assets/lumind_animation.mp4';
export const Branding = ({ className }) => {
  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "I always want to create quality products.",
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "Working with team is also an important thing in programming.",
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "Creativity will be the core to develop programs.",
    },
  ];

  return (
    <>
      <section className={`branding ${className}`} style={{ marginTop: "100px" }}>
        <div className='container grid'>
          {data.map((value) => (
            <div key={value.id} className='box flex'>
              <div className="text">
                <h1>{value.id}</h1>
              </div>
              <div className="para">
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <img width={'100%'} src={logo} alt="Logo" />
      <iframe className="custom-iframe" src="/pages/particle-text.html" title="Particle Text Canvas"></iframe>
      <iframe className="custom-iframe" src="/pages/3d-model.html" title="3D Model"></iframe>
      <iframe className="custom-iframe" src="/pages/fireworks.html" title="Fireworks Lighting"></iframe>
      <iframe className="custom-iframe" src="/pages/globe.html" title="3D Globe"></iframe>
      <CustomVideoPlayer src={bgVideo} captionSrc={caption} />
      <CustomVideoPlayer src={bgLogoVideo} captionSrc={caption_logo} />
      <CustomVideoPlayer src={lumindAnimationVideo} captionSrc={lumind_animation_text} />
      <Hero />
    </>
  );
};
