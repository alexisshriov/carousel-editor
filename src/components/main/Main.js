import React, { useEffect, useState } from 'react';

import Carousel from '../carousel/Carousel'
import ImageSelector from '../imageSelector/ImageSelector';
import CarouselSlot from '../carousel/CarouselSlot';
import allImages from '../../carouselImages.json';
import ImageContainer from '../common/ImageContainer'
import { compare } from '../common/CommonFunctions'


const Main = () => {
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
    <div className="main-container">
      <h1>Carousel Component Editor</h1>
      <ImageSelector selectorImages={selectorImages} setSelectorImages={setSelectorImages} carouselImages={carouselImages} setCarouselImages={setCarouselImages} />
      <Carousel visibleSlots={visibleSlots} setVisibleSlots={setVisibleSlots} selectedCarouselImg={selectedCarouselImg} setSelectedCarouselImg={setSelectedCarouselImg} carouselViewSize={carouselViewSize} selectorImages={selectorImages} setSelectorImages={setSelectorImages} carouselImages={carouselImages} setCarouselImages={setCarouselImages}>
        {carouselImages.map((img, index) => <CarouselSlot img={img} imgSize={imgSize} key={index} />)}
      </Carousel>
      <ImageContainer image={selectedCarouselImg} displayCaption={true} imgSize={500} />
    </div>
  )
}

export default Main;