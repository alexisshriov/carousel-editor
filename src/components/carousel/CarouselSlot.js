import React from 'react'

import CarouselImage from './CarouselImage';
import './CarouselSlot.scss';

const CarouselSlot = ({img, imgSize, selectedImages, setSelectedImages}) => {
  const handleClick = () => {
    if(!selectedImages.map(image => image.imageName).includes(img.imageName))
      setSelectedImages([...selectedImages, img])
  }

  const isImageSelected = () => {
    debugger
    return selectedImages.map(item => item.imageName).includes(img.imageName)
  }
  debugger
  return(

    <div className="carousel-slot" onClick={handleClick}>
      <img className={isImageSelected()?"selected-image": null} src={`/images/${img.imageName}`} style={{ minWidth: imgSize, height: imgSize}}/>
    </div>
  )
}

export default CarouselSlot;