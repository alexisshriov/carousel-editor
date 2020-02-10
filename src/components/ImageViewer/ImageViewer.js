import React from 'react';
import { useSelector } from 'react-redux'
import ImageContainer from '../common/ImageContainer.js';
import './ImageViewer.scss'

const ImageViewer = () => {
  const currentViewerImage = useSelector(state => state.currentViewerImage)

  return (
    <div className="image-viewer">
      {currentViewerImage && <ImageContainer image={currentViewerImage} displayCaption={true} imgSize={500} />}
    </div>

  )
}

export default ImageViewer