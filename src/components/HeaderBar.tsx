import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderBar.css'

const HeaderBar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedOption, setSelectedOption] = useState('USD | TR')

  const handleSelect = (option) => {
    setSelectedOption(option)
    setShowDropdown(false)
  }

  return (
    <div className="header-bar">
      <div className="company-name">
        <Link to="/main">MODEST BLOOM</Link>
      </div>
      <div className="selector" onClick={() => setShowDropdown(!showDropdown)}>
        {selectedOption} ▾
        {showDropdown && (
          <div className="dropdown">
            <div onClick={() => handleSelect('USD - English')}>
              🇺🇸 USD - English
            </div>
            <div onClick={() => handleSelect('TRY - Türkçe')}>
              🇹🇷 TRY - Türkçe
            </div>
            <div onClick={() => handleSelect('EUR - Deutsch')}>
              🇪🇺 EUR - Deutsch
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderBar
