// src/components/FavoritesPage.tsx
import React from 'react'
import { useFavorites } from './FavoritesContext.tsx'
import ClothesData from './ClothesData.tsx'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext.tsx'
import './FavoritesPage.css'

const FavoritesPage: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites()
  const { addToCart } = useCart()

  const favoriteItems = ClothesData.filter((item) =>
    favorites.includes(item.id)
  )

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        <div className="favorite-items">
          {favoriteItems.map((item) => (
            <div className="favorite-card" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.src[0]} alt={item.name} />
                <h3>{item.name}</h3>
              </Link>
              <p>{item.price}</p>
              <button
                className="remove-fav-btn"
                onClick={() => toggleFavorite(item.id)}
              >
                Remove
              </button>
              <button
                className="add-to-cart-btn"
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
      )}
    </div>
  )
}

export default FavoritesPage
