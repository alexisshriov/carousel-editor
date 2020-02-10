import React, { useEffect, useContext, useState } from 'react';

import Carousel from '../carousel/Carousel'
import ImageSelector from '../imageSelector/ImageSelector';
import CarouselSlot from '../carousel/CarouselSlot';
import { imgContext } from '../../context';
import allImages from '../../carouselImages.json';
import ImageContainer from '../common/ImageContainer'
import { compare } from '../common/CommonFunctions'

// const itemsPerView = 2
// window.imgSize = 500/itemsPerView
// const imgSize = window.imgSize


const Main = () => {
  //const [imgSize, setImgSize] = useState(500)
  // const [activeImagesCount, setActiveImagesCount] = useState(1)
  const [carouselViewSize, setCarouselViewSize] = useState(500);
  const [visibleSlots, setVisibleSlots] = useState(2);
  const [imgSize, setImgSize] = useState(carouselViewSize / visibleSlots);
  const [carouselImages, setCarouselImages] = useState([])
  const [selectorImages, setSelectorImages] = useState(allImages.carouselImages.sort(compare))
  const [selectedCarouselImg, setSelectedCarouselImg] = useState({})

  useEffect(() => {
    setImgSize(carouselViewSize / visibleSlots)
  }, [visibleSlots])

  return (

    // <imgContext.Provider value = {[imgSize, setImgSize]}>  
    <div className="main-container">
      <h1>Carousel Component Editor</h1>
      <ImageSelector selectorImages={selectorImages} setSelectorImages={setSelectorImages} carouselImages={carouselImages} setCarouselImages={setCarouselImages} />
      <Carousel visibleSlots={visibleSlots} setVisibleSlots={setVisibleSlots} selectedCarouselImg={selectedCarouselImg} setSelectedCarouselImg={setSelectedCarouselImg} carouselViewSize={carouselViewSize} selectorImages={selectorImages} setSelectorImages={setSelectorImages} carouselImages={carouselImages} setCarouselImages={setCarouselImages}>
        {carouselImages.map((img, index) => <CarouselSlot img={img} imgSize={imgSize} key={index} />)}
      </Carousel>
      <ImageContainer image={selectedCarouselImg} displayCaption={true} imgSize={500} />
    </div>
    // </imgContext.Provider>

  )
}

export default Main;