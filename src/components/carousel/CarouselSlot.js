import React from 'react'

import CarouselImage from './CarouselImage';
import './CarouselSlot.scss';

const CarouselSlot = ({imgName, imgSize}) => {
  return(
    <div className="carousel-slot" onClick={() => alert('test')}>
      <img src={`/images/${imgName}`} style={{ minWidth: imgSize, height: imgSize}}/>
    </div>
  )
}

export default CarouselSlot;