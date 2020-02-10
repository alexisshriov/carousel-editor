import React from 'react';
import {useSelector} from 'react-redux'
import ImageContainer from '../common/ImageContainer.js';

const ImageViewer = () => {
  const currentViewerImage = useSelector(state => state.currentViewerImage) 
  
  return (
    <ImageContainer image={currentViewerImage} displayCaption={true} imgSize={500}/>
  )
}

export default ImageViewer