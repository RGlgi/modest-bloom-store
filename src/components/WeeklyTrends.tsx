import React from 'react'
import { Link } from 'react-router-dom'
import './WeeklyTrends.css'
import ClothesData from './ClothesData.tsx'
import { useCart } from './CartContext.tsx'

const WeeklyTrends: React.FC = () => {
  const { addToCart } = useCart()

  return (
    <div className="trends-section">
      <h2>This Week's Trends</h2>
      <div className="trend-cards">
        {ClothesData.map((item) => (
          <div className="trend-card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.src[0]} alt={item.alt} />
              <div className="info">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            </Link>
            <button
              className="buy-button"
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  src: item.src[0],
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeeklyTrends
