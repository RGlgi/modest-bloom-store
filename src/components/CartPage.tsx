import React from 'react'
import { useCart } from './CartContext.tsx'
import { useNavigate } from 'react-router-dom'
import './CartPage.css'

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, clearCart } = useCart()

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return sum + price
  }, 0)

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.src} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <strong>Total:</strong> ${total.toFixed(2)}
            <div className="cart-buttons">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button
                className="pay-now-btn"
                onClick={() => navigate('/checkout')}
              >
                Pay Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
