import { useState } from 'react';
import './App.css';
import Images from './components/imageComponent';
// import {useState} from 'react'

function App() {
  const [width, setWidth] = useState(470);
  const [height, setHeight] = useState(520);

  // calculating 20% of width and height
  let scaleWidth = (width * 20)/100;
  let scaleHeight = (height * 20)/100

  const increaseSize = () => {
    setWidth(width + scaleWidth)
    setHeight(height + scaleHeight)
  }
  const decreaseSize = () => {
    setWidth(width - scaleWidth)
    setHeight(height - scaleHeight)
  }

  return (
    <>
      <Images  
        url="https://images.unsplash.com/photo-1623043738176-3d28f44f3076?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        imageSizeUp={increaseSize}
        imageSizeDown={decreaseSize}
        newHeight={height}
        newWidth={width}
      />
    </>
  );
}

export default App;
