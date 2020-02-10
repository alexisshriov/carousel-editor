import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'

import ImageContainer from "../common/ImageContainer";
import { compare } from "../common/CommonFunctions";
import { setSelectorImages } from '../../actions/imageSelectorActions'
import { setCarouselImages } from '../../actions/carouselActions'

import './ImageSelector.scss';

const ImageSelector = () => {
  const dispatch = useDispatch()
  const [selectedImages, setSelectedImages] = useState([])
  const selectorImages = useSelector(state => state.selectorImages)
  const carouselImages = useSelector(state => state.carouselImages)

  const handleImgClick = (img) => {
    if(!selectedImages.map(image => image.imageName).includes(img.imageName)){
      const newSelectedImages = [...selectedImages, img].sort(compare);

      setSelectedImages(newSelectedImages)
    }
  }

  const handleAddBtnClick = () => {
    const newCarouselImages = [...carouselImages, ...selectedImages].sort(compare)
    const newSelectorImages = selectorImages.filter(item => !selectedImages.includes(item)).sort(compare)

    dispatch(setCarouselImages(newCarouselImages))
    dispatch(setSelectorImages(newSelectorImages))
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
        })}
      </div>
      <button onClick={handleAddBtnClick}>Add</button>
    </div>
  )
}
export default ImageSelector;
