import React, {useState, useContext} from 'react';
import { imgContext } from '../../context';

import CarouselSlot from './CarouselSlot';
import './Carousel.scss';

const Carousel = ({visibleSlots, carouselViewSize, imgSize, children}) => {
  // const [imgSize, setImgSize] = useContext(imgContext)
  // const [visibleSlots, setVisibleSlots] = useState(2);  //param modified by user

  //const offSet = children.length % 2 === 0 ? (imgSize/visibleSlots) / 2 : 0;

  const [position, setPosition] = useState(0);

  // const [offset, setOffset] = useState(offSet);

  const handleClick = (direction) => {
    if (direction === 'right')
      setPosition(position + imgSize * visibleSlots);
    else
      setPosition(position - imgSize * visibleSlots);
  }

  return(
    <div className="carousel">
      <p>Carousel</p>
      <div className="view-container">
        <div className="carousel-images" style={{left: position}}>
          {children}
        </div>   
      </div>
      <button onClick = {() => handleClick('right')}>left</button>
      <button onClick = {() => handleClick('left')}>right</button>
      
      {/* <CarouselSlot /> */}
      {/* <button onClick = {() => setImgSize(200)}>test button</button> */}
    </div>

    
  )
}
export default Carousel;
