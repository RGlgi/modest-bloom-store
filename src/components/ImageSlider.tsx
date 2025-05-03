import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import fi1 from './assets/images/f-image1.png'
import fi6 from './assets/images/fi6.png'

const images = [fi1, fi6, fi1]

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000) // change every 3 sec
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="image-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index}`} />
            {index === 1 && <div className="slide-text">Spring Collection</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
