import React from 'react'
import { Link } from 'react-router-dom'
import './WeeklyTrends.css'
import ClothesData from './ClothesData.tsx'
import { useCart } from './CartContext.tsx'
import { useFavorites } from './FavoritesContext.tsx'
import heartIcon from './assets/images/icon-favorites.png'
import heartRedIcon from './assets/images/icon-favorites-liked.png'

const WeeklyTrends: React.FC = () => {
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="trends-section">
      <h2>This Week's Trends</h2>
      <div className="trend-cards">
        {ClothesData.map((item) => (
          <div className="trend-card" key={item.id}>
            <div className="image-wrapper">
              <Link to={`/product/${item.id}`}>
                <img src={item.src[0]} alt={item.alt} />
              </Link>
              <div
                className="favorite-icon"
                onClick={() => toggleFavorite(item.id)}
              >
                <img
                  src={isFavorite(item.id) ? heartRedIcon : heartIcon}
                  alt="Favorite"
                />
              </div>
            </div>
            <div className="info">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
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
