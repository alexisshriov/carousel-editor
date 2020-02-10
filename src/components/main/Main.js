import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './Main.scss'

import Carousel from '../carousel/Carousel'
import ImageSelector from '../imageSelector/ImageSelector';
import allImages from '../../carouselImages.json';
import ImageViewer from '../ImageViewer/ImageViewer'
import { compare } from '../common/CommonFunctions'
import { setSelectorImages } from '../../actions/imageSelectorActions'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSelectorImages(allImages.carouselImages.sort(compare)));
  }, [])

  return (
    <div className="main-container">
      <div className="main-header">
        <h1>Carousel Component Editor</h1>
      </div>
      <div className="main-body">
        <div className="left-pane">
          <ImageSelector />
        </div>
        <div className="right-pane">
          <Carousel />
          <ImageViewer />
        </div>
      </div>
    </div>
  )
}

export default Main;