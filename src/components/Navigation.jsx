import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation({ slides, activeSlide, setActiveSlide }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`main-navigation ${navVisible ? 'visible' : 'hidden'}`}>
        <div className="brand">
          <span className="logo">UML</span>
          <span className="brand-text">Lietošanas gadījumu diagramma</span>
        </div>
        
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {slides.map((slide, index) => (
            <li key={index} className={activeSlide === index ? 'active' : ''}>
              <a 
                href={`#${slide.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSlide(index);
                  setIsMenuOpen(false);
                }}
              >
                {slide.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="slide-indicators">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide-indicator ${activeSlide === index ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          >
            <span className="indicator-dot"></span>
            <span className="indicator-text">{slide.title}</span>
          </div>
        ))}
      </div>
      
      {activeSlide > 0 && (
        <button 
          className="nav-arrow prev"
          onClick={() => setActiveSlide(activeSlide - 1)}
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
      
      {activeSlide < slides.length - 1 && (
        <button 
          className="nav-arrow next"
          onClick={() => setActiveSlide(activeSlide + 1)}
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      )}
    </>
  );
}

export default Navigation;