import React from 'react'
import './WelcomeScreen.css'
import logo from './assets/images/clothes-logo.png'

const WelcomeScreen: React.FC = () => {
  return (
    <div className="welcome-overlay">
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default WelcomeScreen
