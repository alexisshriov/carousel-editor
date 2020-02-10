import React, { useState, useEffect, useContext } from 'react';
import Toggle from 'react-toggle';

import "react-toggle/style.css";
import './Carousel.scss';
import { compare } from '../common/CommonFunctions';

const Carousel = ({ visibleSlots, setVisibleSlots, carouselViewSize, children, selectorImages, setSelectorImages, carouselImages, setCarouselImages, setSelectedCarouselImg }) => {

  const [position, setPosition] = useState(0);
  const [mode, setMode] = useState('View');
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeDot, setActiveDot] = useState(0)
  const [numPages, setNumPages] = useState(0)

  const handleClick = (direction) => {
    let distance = getDistanceToMove()

    if (direction === 'right') {
      setPosition(position - distance);
      setActiveDot(activeDot + 1)
    }
    else if (direction === 'left') {
      setPosition(position + distance);
      setActiveDot(activeDot - 1)
    }
  }

  const getDistanceToMove = (direction) => {
    let distance = carouselViewSize;

    if ((activeDot === numPages - 1) || (activeDot === numPages - 2)) {
      const mod = carouselImages.length % visibleSlots;
      if (mod != 0)
        distance = (distance / visibleSlots) * mod;
    }
    return distance;
  }

  useEffect(() => {
    const numPages = Math.ceil(carouselImages.length / visibleSlots)

    setNumPages(numPages)
    setActiveDot(0)
    setPosition(0)
  }, [selectorImages, carouselImages, visibleSlots])

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
      <div className="carousel-dots">
        {
          [...Array(numPages).keys()].map(dot => {
            return <div class={`dot ${activeDot === dot ? "active-dot" : null}`} />
          })}
      </div>
      <button disabled={activeDot === 0} onClick={() => handleClick('left')}>left</button>
      <button disabled={activeDot === numPages - 1} onClick={() => handleClick('right')}>right</button>
      <div>
        {mode === 'Edit' ? <button onClick={handleDeleteBtnClick}>Delete</button> : null}
      </div>
    </div>
  )
}
export default Carousel;
