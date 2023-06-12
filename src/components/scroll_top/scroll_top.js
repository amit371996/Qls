import React, { useState, useEffect } from 'react';
import "../../stylee.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const ScrollToTopButton = () => {
  library.add(faAngleUp);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > window.innerHeight); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <>
    <div>
      <button
        id="scroll-to-top"
        className="top_arrow_wrap"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
    </>
  
  );
};

export default ScrollToTopButton;

