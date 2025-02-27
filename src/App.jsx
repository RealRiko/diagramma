import React, { useState, useEffect } from 'react';
import TitleSlide from './components/TitleSlide';
import WhatIsIt from './components/WhatIsIt';
import WhenToUse from './components/WhenToUse';
import UmlElements from './components/UMLElements';
import Example from './components/Example';
import BlogExample from './components/BlogExample';
import Task from './components/Task';
import Navigation from './components/Navigation'; 
import './App.css';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const slides = [
    { id: 'title', title: 'Title', component: <TitleSlide /> },
    { id: 'what-is-it', title: 'What Is It', component: <WhatIsIt /> },
    { id: 'when-to-use', title: 'When To Use', component: <WhenToUse /> },
    { id: 'uml-elements', title: 'UML Elements', component: <UmlElements /> },
    { id: 'example', title: 'Example', component: <Example /> },
    { id: 'blog-example', title: 'Blog Example', component: <BlogExample /> },
    { id: 'task', title: 'Task', component: <Task /> },
  ];

  const totalSlides = slides.length;

  const handleScroll = (event) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800);

    setActiveSlide((prev) => 
      event.deltaY > 0 && prev < totalSlides - 1 
        ? prev + 1 
        : event.deltaY < 0 && prev > 0 
        ? prev - 1 
        : prev
    );
  };

  const handleKeyDown = (event) => {
    setActiveSlide((prev) => 
      event.key === 'ArrowDown' && prev < totalSlides - 1
        ? prev + 1
        : event.key === 'ArrowUp' && prev > 0
        ? prev - 1
        : prev
    );
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <main className="presentation">
        <div className="slide-container" style={{ transform: `translateY(-${activeSlide * 100}vh)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide">
              {slide.component}
            </div>
          ))}
        </div>
      </main>
      <Navigation 
        slides={slides}
        activeSlide={activeSlide} 
        setActiveSlide={setActiveSlide} 
      />
    </>
  );
}

export default App;