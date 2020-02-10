import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Toggle from 'react-toggle';
import CarouselSlot from '../carousel/CarouselSlot';
import { setSelectorImages } from '../../actions/imageSelectorActions';
import { setCarouselImages } from '../../actions/carouselActions';
import { compare } from '../common/CommonFunctions';
import { LEFT, RIGHT, VIEW, EDIT } from '../../constants/constants';

import "react-toggle/style.css";
import './Carousel.scss';

const Carousel = () => {
  const dispatch = useDispatch()

  const [position, setPosition] = useState(0);
  const [mode, setMode] = useState(VIEW);
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeDot, setActiveDot] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [visibleSlots, setVisibleSlots] = useState(2);

  const selectorImages = useSelector(state => state.selectorImages);
  const carouselImages = useSelector(state => state.carouselImages);

  const handlePageBtnClick = (direction) => {
    if (direction === RIGHT) {
      setPosition(position - getDistanceToMove(RIGHT));
      setActiveDot(activeDot + 1);
    }
    else if (direction === LEFT) {
      setPosition(position + getDistanceToMove(LEFT));
      setActiveDot(activeDot - 1);
    }
  }

  useEffect(() => {
    const numPages = Math.ceil(carouselImages.length / visibleSlots);

    setNumPages(numPages);
    setActiveDot(0);
    setPosition(0);
  }, [selectorImages, carouselImages, visibleSlots])

  const toggleMode = () => {
    const newMode = mode === VIEW ? EDIT : VIEW;

    setMode(newMode);
  }

  const handleDeleteBtnClick = () => {
    const newSelectorImages = [...selectorImages, ...selectedImages].sort(compare)
    const newCarouselImages = carouselImages.filter(item => !selectedImages.includes(item)).sort(compare)

    dispatch(setSelectorImages(newSelectorImages));
    dispatch(setCarouselImages(newCarouselImages));
    setSelectedImages([]);
  }

  const onSelectChange = (event) => {
    setVisibleSlots(event.target.value);
  }

  const getDistanceToMove = (direction) => {
    let distance = 500;

    if ((activeDot === (numPages - 1) && direction === LEFT) || (activeDot === (numPages - 2) && direction === RIGHT)) {
      const mod = carouselImages.length % visibleSlots;
      if (mod !== 0)
        distance = (distance / visibleSlots) * mod;
    }
    return distance;
  }

  return (
    <div className="carousel">
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
        {[...Array(numPages).keys()].map(dot => {return <div class={`dot ${activeDot === dot ? "active-dot" : null}`} />})}
      </div>
      {carouselImages.length > 0 &&
        <div className="pag-buttons">
          <button disabled={activeDot === 0} onClick={() => handlePageBtnClick(LEFT)}>Prev</button>
          <button disabled={activeDot === numPages - 1} onClick={() => handlePageBtnClick(RIGHT)}>Next</button>
        </div>}
      <div>
        {mode === EDIT &&
          <button onClick={handleDeleteBtnClick} className={`btn deleteBtn ${selectedImages.length === 0 ? "disabledBtn" : null}`} disabled={selectedImages.length === 0}>Delete</button>}
      </div>
    </div>
  )
}
export default Carousel;
