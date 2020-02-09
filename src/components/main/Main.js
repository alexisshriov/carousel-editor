import React, { useContext, useState } from 'react';

import Carousel from '../carousel/Carousel'
import ImageSelector from '../ImageSelector/ImageSelector';
import CarouselSlot from '../carousel/CarouselSlot';
import { imgContext } from '../../context';
import allImages from '../../carouselImages.json';

// const itemsPerView = 2
// window.imgSize = 500/itemsPerView
// const imgSize = window.imgSize


const Main = () => {
  //const [imgSize, setImgSize] = useState(500)
  // const [activeImagesCount, setActiveImagesCount] = useState(1)
  const [carouselViewSize, setCarouselViewSize] = useState(500);
  const [visibleSlots, setVisibleSlots] = useState(2);
  const [imgSize, setImgSize] = useState(carouselViewSize / visibleSlots);
  // const [selectorImages, setSelectorImages] = useState(['letterBoardIc.jpg', 'listen-hat.jpg', 'listen-v02.jpg', 'listeningBell.jpg', 'listeningCap.jpg'])
  const [carouselImages, setCarouselImages] = useState([])
  debugger
  const [selectorImages, setSelectorImages] = useState(allImages.carouselImages) //useState(['letterBoardIc.jpg', 'listen-hat.jpg', 'listen-v02.jpg', 'listeningBell.jpg', 'listeningCap.jpg'])

  return (
    
    // <imgContext.Provider value = {[imgSize, setImgSize]}>  
    <div className="main-container">
      <h1>Carousel Component Editor</h1>
      <ImageSelector selectorImages={selectorImages} setSelectorImages={setSelectorImages} carouselImages = {carouselImages} setCarouselImages={setCarouselImages} />
      <Carousel visibleSlots={visibleSlots} setVisibleSlots={setVisibleSlots} carouselViewSize={carouselViewSize} selectorImages={selectorImages} setSelectorImages={setSelectorImages} carouselImages={carouselImages} setCarouselImages={setCarouselImages}>
        {carouselImages.map((img, index) => <CarouselSlot img={img} imgSize={imgSize} key={index} />)}
      </Carousel>
    </div>
    // </imgContext.Provider>

  )
}

export default Main;