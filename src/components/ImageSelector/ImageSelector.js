import React, { useState, useEffect } from 'react';

import allImages from '../../carouselImages.json';
import './ImageSelector.scss'

// const images=[
//   letterBoardIc, listenHat, listenV02, listeningBell, listeningCap, listeningCup, listeningDoll, matchingAbc, matchingBears, matchingBirds,
//   matchingFriends, matchingZoo,orderItCake, orderItToyN, paintPotBlue, paintPotRed, petIc, princessIc, robotIc, spaceIc
// ]

const Carousel = ({carouselImages, setCarouselImages}) => {
  const [images, setImages] = useState(allImages.carouselImages)
  const [selectedImages, setSelectedImages] = useState([])

  const handleImgClick = (newImgName) => {
    if(!selectedImages.includes(newImgName)){
      const newSelectedImages = [...selectedImages, newImgName].sort()

      setSelectedImages(newSelectedImages)
    }
  }

  const handleAddBtnClick = () => {
    const newCarouselImages = [...carouselImages, ...selectedImages].sort()
    const newImages = images.filter(item => !selectedImages.includes(item.imageName)).sort()

    setCarouselImages(newCarouselImages)
    setImages(newImages)
    setSelectedImages([])
  }

  return(
    <div className="image-selector">
      {images.map((image, index) =>  {
        const isImgSelected = selectedImages.includes(image.imageName)
        return  <img key={index} className={isImgSelected?'selected-image': null} src={`/images/${image.imageName}`} onClick={() => handleImgClick(image.imageName)} alt="selectable-image" />})
      }
      <button onClick={handleAddBtnClick}>Add Images</button>
    </div> 
  )
}
export default Carousel;
