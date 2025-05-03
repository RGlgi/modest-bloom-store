import React from 'react'
import { Link } from 'react-router-dom'
import CategoryData from './CategoryData.tsx'
import './CategoryBlocks.css'

const CategoryBlocks: React.FC = () => {
  return (
    <div className="category-blocks">
      {/* First row - full width image */}
      <div className="category-row full-width">
        <Link to="/category/skirts" className="category-card full">
          <img src={CategoryData[0].src} alt={CategoryData[0].name} />
          <div className="category-title">{CategoryData[0].name}</div>
        </Link>
      </div>

      {/* Second row - two images side by side */}
      <div className="category-row half-width">
        {CategoryData.slice(1, 3).map((cat) => (
          <Link
            to={`/category/${cat.category}`} // 🔁 dynamically link
            className="category-card half"
            key={cat.id}
          >
            <img src={cat.src} alt={cat.name} />
            <div className="category-title">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryBlocks
