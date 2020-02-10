import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

import Carousel from '../carousel/Carousel'
import ImageSelector from '../imageSelector/ImageSelector';
import allImages from '../../carouselImages.json';
import ImageViewer from '../ImageViewer/ImageViewer'
import { compare } from '../common/CommonFunctions'
import { setSelectorImages as setSelectorImagesAct } from '../../actions/imageSelectorActions'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSelectorImagesAct(allImages.carouselImages.sort(compare)));
  }, [])

  return (
    <div className="main-container">
      <h1>Carousel Component Editor</h1>
      <ImageSelector />
      <Carousel />
      <ImageViewer />
    </div>
  )
}

export default Main;