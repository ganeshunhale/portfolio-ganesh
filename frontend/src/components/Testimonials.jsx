import React from 'react';
import TitleHeading from './TitleHeading';
import Carousel from './Carousel';


const Testimonials = () => {
  

  return (
    <div>
      <TitleHeading
        h2Text='Testimonials'
        pText="Discover how I've empowered my clients to achieve success. My projects feature highly customizable, creative, and modern web applications built with React, Python, Django, and a variety of DevOps tools."
      />
      <div className="mt-8 md:mt-14 overflow-x-hidden">
        <Carousel/>
      </div>
    </div>
  );
};

export default Testimonials;
