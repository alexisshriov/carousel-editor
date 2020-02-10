import React, { useState, useEffect, useContext } from 'react';
import Toggle from 'react-toggle';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSelectorImages } from '../../actions/imageSelectorActions'
import { setCarouselImages } from '../../actions/carouselActions'
import CarouselSlot from '../carousel/CarouselSlot';

import "react-toggle/style.css";
import './Carousel.scss';
import { compare } from '../common/CommonFunctions';

const Carousel = () => {
  const dispatch = useDispatch()

  const [position, setPosition] = useState(0);
  const [mode, setMode] = useState('View');
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeDot, setActiveDot] = useState(0)
  const [numPages, setNumPages] = useState(0)
  const [visibleSlots, setVisibleSlots] = useState(2);

  const selectorImages = useSelector(state => state.selectorImages)
  const carouselImages = useSelector(state => state.carouselImages)

  const handleClick = (direction) => {
    if (direction === 'right') {
      setPosition(position - getDistanceToMove('right'));
      setActiveDot(activeDot + 1)
    }
    else if (direction === 'left') {
      setPosition(position + getDistanceToMove('left'));
      setActiveDot(activeDot - 1)
    }
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

    dispatch(setSelectorImages(newSelectorImages))
    dispatch(setCarouselImages(newCarouselImages))
    setSelectedImages([])
  }

  const onSelectChange = (event) => {
    setVisibleSlots(event.target.value);
  }

  const getDistanceToMove = (direction) => {
    let distance = 500;

    if ((activeDot === (numPages - 1) && direction == 'left') || (activeDot === (numPages - 2) && direction == 'right')) {
      const mod = carouselImages.length % visibleSlots;
      if (mod != 0)
        distance = (distance / visibleSlots) * mod;
    }
    return distance;
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
          {
            carouselImages.map((img, index) => <CarouselSlot img={img} imgSize={500 / visibleSlots} mode={mode} key={index} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />)
          }
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
