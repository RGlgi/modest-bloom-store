import React from 'react'
import { useLocation } from 'react-router-dom'
import ClothesData from './ClothesData.tsx'
import { Link } from 'react-router-dom'
import './ClothesList.css'

const SearchResultsPage: React.FC = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get('q')?.toLowerCase() || ''

  const filteredItems = ClothesData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.alt.toLowerCase().includes(searchTerm)
  )

  const suggestions = ClothesData.filter(
    (item) =>
      !filteredItems.includes(item) &&
      (item.name.toLowerCase().startsWith(searchTerm.charAt(0)) ||
        item.category.toLowerCase().startsWith(searchTerm.charAt(0)))
  )

  return (
    <div className="min-page-height">
      <h2 className="category-title">Search Results for "{searchTerm}"</h2>

      {filteredItems.length > 0 ? (
        <div className="clothes-list">
          {filteredItems.map((item) => (
            <div className="clothes-card" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.src[0]} alt={item.alt} />
                <h3>{item.name}</h3>
              </Link>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="search-wrong">
          <p>No items found for "{searchTerm}".</p>
          {suggestions.length > 0 && (
            <>
              <p>Did you mean:</p>
              <ul style={{ listStyle: 'none' }}>
                {suggestions.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchResultsPage
