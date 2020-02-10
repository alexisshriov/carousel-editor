import React, { useState, useEffect, useContext } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { imgContext } from '../../context';
import CarouselSlot from './CarouselSlot';
import './Carousel.scss';
import {compare} from '../common/CommonFunctions';

const Carousel = ({ visibleSlots, setVisibleSlots, carouselViewSize, children, selectorImages, setSelectorImages, carouselImages, setCarouselImages, setSelectedCarouselImg }) => {
  // const [imgSize, setImgSize] = useContext(imgContext)
  // const [visibleSlots, setVisibleSlots] = useState(2);  //param modified by user

  //const offSet = children.length % 2 === 0 ? (imgSize/visibleSlots) / 2 : 0;

  const [position, setPosition] = useState(0);
  const [mode, setMode] = useState('View');
  const [selectedImages, setSelectedImages] = useState([]);

  // const [offset, setOffset] = useState(offSet);

  const handleClick = (direction) => {
    if (direction === 'right')
      setPosition(position + carouselViewSize); //setPosition(position + imgSize * visibleSlots);
    else
      setPosition(position - carouselViewSize);
  }

  useEffect(() => {
    setPosition(0)
  }, [selectorImages, carouselImages])

  const toggleMode = () => {
    const newMode = mode === 'View' ? 'Edit' : 'View';

    setMode(newMode)
  }

  const handleDeleteBtnClick = () => {
    const newSelectorImages = [...selectorImages, ...selectedImages].sort(compare)
    const newCarouselImages = carouselImages.filter(item => !selectedImages.includes(item)).sort(compare)

    setSelectorImages(newSelectorImages)
    setCarouselImages(newCarouselImages)
    setSelectedImages([])
  }

  const onSelectChange = (event) => {
    debugger
    setVisibleSlots(event.target.value);
  }

  return (
    <div className="carousel">
      <p>Carousel</p>
      <div className="carousel-controls">
        <div className="mode-selector">
          <Toggle defaultChecked={false} icons={false} onChange={toggleMode} /><span>{mode} Mode</span>
        </div>
        <div className="items-selector">
          <label>Items per Slide:</label>
          <select onChange={onSelectChange}>{[2, 3, 4, 5].map(item => <option value={item}>{item}</option>)}</select>
        </div>
      </div>

      <div className="view-container">
        <div className="carousel-images" style={{ left: position }}>
          {children.map(child => {
            return React.cloneElement(child, { selectedImages, setSelectedImages, mode, setSelectedCarouselImg })
          })}
        </div>
      </div>
      <button onClick={() => handleClick('right')}>left</button>
      <button onClick={() => handleClick('left')}>right</button>
      <div>
        {mode === 'Edit' ? <button onClick={handleDeleteBtnClick}>Delete</button> : null}
      </div>
      <div className="carousel-dots">
          {/* {[1, 2, 3, 4].map(dot => <div></div>)} */}
      </div>
    </div>
  )
}
export default Carousel;
