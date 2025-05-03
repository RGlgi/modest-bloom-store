import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './components/CartContext.tsx'
import { FavoritesProvider } from './components/FavoritesContext.tsx'
import { UserProvider } from './components/UserContext.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
)
