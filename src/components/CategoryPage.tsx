import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ClothesData from './ClothesData.tsx'
import { useCart } from './CartContext.tsx'
import { useFavorites } from './FavoritesContext.tsx'
import heartIcon from './assets/images/icon-favorites.png'
import heartRedIcon from './assets/images/icon-favorites-liked.png'
import './ClothesList.css'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  const filtered = ClothesData.filter(
    (item) => item.category.toLowerCase() === categoryName?.toLowerCase()
  )

  return (
    <div className="min-page-height">
      <h2 className="category-title">{categoryName?.toUpperCase()}</h2>

      <div className="clothes-list">
        {filtered.map((item) => (
          <div className="clothes-card" key={item.id}>
            <div className="image-wrapper">
              <img src={item.src[0]} alt={item.alt} />
              <div
                className="favorite-icon"
                onClick={(e) => {
                  e.preventDefault()
                  toggleFavorite(item.id)
                }}
              >
                <img
                  src={isFavorite(item.id) ? heartRedIcon : heartIcon}
                  alt="Favorite"
                />
              </div>
            </div>
            <Link to={`/product/${item.id}`}>
              <h3>{item.name}</h3>
            </Link>
            <p>{item.price}</p>
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

export default CategoryPage
