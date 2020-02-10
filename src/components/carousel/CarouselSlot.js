import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './CarouselSlot.scss';
import ImageContainer from '../common/ImageContainer'
import { setCurrentViewerImage } from '../../actions/imageViewerActions'

const CarouselSlot = ({ img, imgSize, selectedImages, setSelectedImages, mode }) => {
debugger
  const dispatch = useDispatch()
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
      dispatch(setCurrentViewerImage(img))
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