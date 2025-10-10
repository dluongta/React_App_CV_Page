import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollToTopButton;
