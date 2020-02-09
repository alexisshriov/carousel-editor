import React, { useState, useEffect } from 'react'

import CarouselImage from './CarouselImage';
import './CarouselSlot.scss';

const CarouselSlot = ({ img, imgSize, selectedImages, setSelectedImages, mode }) => {

  const [displayCaption, setDisplayCaption] = useState(false)

  useEffect(() => {
   debugger
    if (mode === 'View') {
      setSelectedImages([])
    }
  }, [mode])

  const handleClick = () => {
    if (mode === 'Edit' && !selectedImages.map(image => image.imageName).includes(img.imageName))
      setSelectedImages([...selectedImages, img])
  }

  const handleMouseEnter = () => {
    setDisplayCaption(true)
  }

  const handleMouseLeave = () => {
    setDisplayCaption(false)
  }

  const getImageClasses = () => {
    let classes = "image"
    const isImageSelected = selectedImages.map(item => item.imageName).includes(img.imageName)
    classes = isImageSelected ? `${classes} selected-image` : classes
    return classes;
  }

  return (
    <div className="carousel-slot" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className={getImageClasses()} src={`/images/${img.imageName}`} style={{ minWidth: imgSize, height: imgSize }} />
      <p className="image-caption">{mode === 'View' && displayCaption && img.imageCaption}</p>
    </div>
  )
}

export default CarouselSlot;