import React from 'react';
import './ImageContainer.scss'

const ImageContainer = ({ image, displayCaption, imgSize, selectedOutline }) => {
  return (
    imgSize && <div className="image-container">
      <img className={selectedOutline ? "selected-image" : null} src={`/images/${image.imageName}`} style={{ minWidth: imgSize, height: imgSize }} />
      <p className="image-caption">{displayCaption && image.imageCaption}</p>
    </div>
  )
}

export default ImageContainer