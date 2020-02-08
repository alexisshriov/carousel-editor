import React, { useContext, useState } from 'react';

import Carousel from '../carousel/Carousel'
import { imgContext } from '../../context';

// const itemsPerView = 2
// window.imgSize = 500/itemsPerView
// const imgSize = window.imgSize


const Main = () => {
  //const [imgSize, setImgSize] = useState(500)
  // const [activeImagesCount, setActiveImagesCount] = useState(1)
  const [carouselViewSize, setCarouselViewSize] = useState(500);
  const [visibleSlots, setVisibleSlots] = useState(2);
  const [imgSize, setImgSize] = useState(carouselViewSize/visibleSlots);


  return (
    // <imgContext.Provider value = {[imgSize, setImgSize]}>  
      <div className="main-container">
        <h1>Carousel Component Editor</h1>
        <Carousel imgSize = {imgSize} visibleSlots={visibleSlots} carouselViewSize={carouselViewSize}>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'blue'}}>1</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'green'}}>2</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'yellow'}}>3</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'orange'}}>4</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'purple'}}>5</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'red'}}>6</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'gray'}}>7</div>
          <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'pink'}}>8</div>
          {/* <div style={{minWidth: imgSize, height:imgSize, backgroundColor: 'purple'}}>5</div> */}
        </Carousel>
      </div>
    // </imgContext.Provider>
  
  )
}

export default Main;