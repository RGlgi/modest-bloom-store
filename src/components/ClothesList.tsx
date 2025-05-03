import React from 'react'
import ClothesData from './ClothesData'
import './ClothesList.css'

const ClothesList: React.FC = () => {
  return (
    <div className="clothes-list">
      {ClothesData.map((item) => (
        <div className="clothes-card" key={item.id}>
          <img src={item.src[0]} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button className="buy-button">Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ClothesList
