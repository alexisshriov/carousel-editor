import React, { useState, useEffect } from 'react';

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

  const compare = ( a, b ) => {
    if ( a.imageName < b.imageName ){
      return -1;
    }
    if ( a.imageName > b.imageName ){
      return 1;
    }
    return 0;
  }

  return(
    <div className="image-selector">
      {selectorImages.map((image, index) =>  {
        const isImgSelected = selectedImages.map(img => img.imageName).includes(image.imageName)
        return  <img key={index} className={isImgSelected?'selected-image': null} src={`/images/${image.imageName}`} onClick={() => handleImgClick(image)} alt="selectable-image" />})
      }
      <button onClick={handleAddBtnClick}>Add</button>
    </div> 
  )
}
export default ImageSelector;
