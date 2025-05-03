import React, { useState } from 'react'
import './PaymentPage.css'

const PaymentPage: React.FC = () => {
  const [coupon, setCoupon] = useState('')
  const [card, setCard] = useState('')

  const handlePay = () => {
    alert('Payment submitted!')
  }

  return (
    <div className="payment-page">
      <h2>Checkout</h2>

      <form className="payment-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Card Number
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
        </label>

        <label>
          Coupon Code (optional)
          <input
            type="text"
            placeholder="SAVE10"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </label>

        <button className="submit-btn" onClick={handlePay}>
          Pay with Credit Card
        </button>

        <button
          className="paypal-btn"
          onClick={() => alert('Redirecting to PayPal...')}
        >
          Pay with PayPal
        </button>
      </form>
    </div>
  )
}

export default PaymentPage
