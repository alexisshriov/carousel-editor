import React, { useState, useEffect } from 'react'

import './CarouselSlot.scss';
import ImageContainer from '../common/ImageContainer'

const CarouselSlot = ({ img, imgSize, selectedImages, setSelectedImages, setSelectedCarouselImg, mode }) => {

  const [displayCaption, setDisplayCaption] = useState(false)

  useEffect(() => {
    if (mode === 'View') {
      setSelectedImages([])
    }
  }, [mode])

  const handleClick = () => {
    if (mode === 'Edit' && !selectedImages.map(image => image.imageName).includes(img.imageName))
      setSelectedImages([...selectedImages, img])
    else if (mode === 'View')
      setSelectedCarouselImg(img)
  }

  const handleMouseEnter = () => {
    setDisplayCaption(true)
  }

  const handleMouseLeave = () => {
    setDisplayCaption(false)
  }

  const isImageSelected = () => {
    return selectedImages.map(item => item.imageName).includes(img.imageName)
  }

  return (
    <div className="carousel-slot" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ImageContainer image={img} displayCaption={mode === 'View' && displayCaption} selectedOutline={isImageSelected()} imgSize={imgSize} />
    </div>
  )
}

export default CarouselSlot;