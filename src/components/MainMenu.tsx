import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import searchIcon from './assets/images/search-icon.png'
import accountIcon from './assets/images/account-icon.png'
import cartIcon from './assets/images/cart-icon.png'
import favoritesIcon from './assets/images/icon-favorites.png'
import { useCart } from './CartContext.tsx'

const MainMenu = () => {
  const { cartItems } = useCart()
  return (
    <div className="main-menu">
      <div className="menu-left">
        <div className="menu-item hover-trigger">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="dropdown">
            <div className="dropdown-item">
              Clothing
              <div className="sub-dropdown">
                <Link to="/category/new-arrivals">New Arrivals</Link>
                <Link to="/category/pants">Pants</Link>
                <Link to="/category/tunics">Tunics</Link>
                <Link to="/category/coats">Coats</Link>
                <Link to="/category/jackets">Jackets</Link>
                <Link to="/category/scarves">Scarves</Link>
                <Link to="/category/dresses">Dresses</Link>
                <Link to="/category/skirts">Skirts</Link>
                <Link to="/category/activewear">Activewear</Link>
                <Link to="/category/jeans">Jeans</Link>
                <Link to="/category/pajamas">Pajamas</Link>
                <Link to="/category/tops">Tops</Link>
                <Link to="/category/shirts">Shirts</Link>
                <Link to="/category/bottoms">Bottoms</Link>
              </div>
            </div>

            <div className="dropdown-item">
              Accessories
              <div className="sub-dropdown">
                <Link to="/category/Accessories">Accessories</Link>
                <Link to="/category/Socks">Socks</Link>
              </div>
            </div>
            <div className="dropdown-item">
              <Link to="/category/Shoes">Shoes</Link>
            </div>
            <div className="dropdown-item">
              <Link to="/category/Clearence">Clearence</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="store-name">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="icon-button">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>

      <div className="menu-right">
        <Link to="/favorites" className="icon-button">
          <img src={favoritesIcon} alt="Favorites" />
        </Link>
        <Link to="/account" className="icon-button">
          <img src={accountIcon} alt="My Account" />
        </Link>
        <Link to="/cart" className="icon-button cart-icon-with-badge">
          <img src={cartIcon} alt="Cart" />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default MainMenu
