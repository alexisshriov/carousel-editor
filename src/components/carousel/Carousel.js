import React from 'react';

import CarouselSlot from './CarouselSlot';
import './Carousel.scss';

const Carousel = () => {
  return(
    <div className="carousel">
      <h1>this is the carousel component</h1>
      <CarouselSlot />
    </div>
    
  )
}
export default Carousel;
