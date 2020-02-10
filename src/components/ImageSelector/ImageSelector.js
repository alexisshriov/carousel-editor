import React, { useState, useEffect } from 'react';

import ImageContainer from "../common/ImageContainer";
import { compare } from "../common/CommonFunctions"

// import allImages from '../../carouselImages.json';
import './ImageSelector.scss'

// const images=[
//   letterBoardIc, listenHat, listenV02, listeningBell, listeningCap, listeningCup, listeningDoll, matchingAbc, matchingBears, matchingBirds,
//   matchingFriends, matchingZoo,orderItCake, orderItToyN, paintPotBlue, paintPotRed, petIc, princessIc, robotIc, spaceIc
// ]

const ImageSelector = ({carouselImages, selectorImages, setSelectorImages, setCarouselImages}) => {
  // const [images, setImages] = useState(allImages.carouselImages)
  const [selectedImages, setSelectedImages] = useState([])

  const handleImgClick = (img) => {
    if(!selectedImages.map(image => image.imageName).includes(img.imageName)){
      const newSelectedImages = [...selectedImages, img].sort(compare);

      setSelectedImages(newSelectedImages)
    }
  }

  const handleAddBtnClick = () => {
    const newCarouselImages = [...carouselImages, ...selectedImages].sort(compare)
    const newSelectorImages = selectorImages.filter(item => !selectedImages.includes(item)).sort(compare)

    setCarouselImages(newCarouselImages)
    setSelectorImages(newSelectorImages)
    setSelectedImages([])
  }

  return (
    <div className="image-selector">
      <div className="images-grid">
        {selectorImages.map((image, index) => {
          const isImgSelected = selectedImages.map(img => img.imageName).includes(image.imageName)

          return (<div onClick={() => handleImgClick(image)}>
            <ImageContainer key={index} image={image} displayCaption={true} selectedOutline={isImgSelected} imgSize={100} />
          </div>)

          // return  <img  className={isImgSelected?'selected-image': null} src={`/images/${image.imageName}`}  alt="selectable-image" />
        })}
      </div>
      <button onClick={handleAddBtnClick}>Add</button>
    </div>
  )
}
export default ImageSelector;
