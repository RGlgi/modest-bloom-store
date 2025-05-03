import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesData from './ClothesData.tsx'
import { useCart } from './CartContext.tsx'
import './ProductDetailPage.css'

const ProductDetailPage: React.FC = () => {
  const { id } = useParams()
  const product = ClothesData.find((item) => item.id === Number(id))
  const [currentImage, setCurrentImage] = useState(0)
  const { addToCart } = useCart()

  if (!product) return <p>Product not found.</p>

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.src.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? product.src.length - 1 : prev - 1))
  }

  return (
    <div className="product-detail">
      <div className="slider-container">
        <button className="nav-button left" onClick={prevImage}>
          ‹
        </button>
        <img
          src={product.src[currentImage]}
          alt={`${product.name} ${currentImage + 1}`}
        />
        <button className="nav-button right" onClick={nextImage}>
          ›
        </button>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.alt}</p>
        <strong>{product.price}</strong>
        <button
          className="button"
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              src: product.src[0], // only the first image for cart
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage
