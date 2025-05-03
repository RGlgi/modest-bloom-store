import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import MainContent from './components/MainContent.tsx'
import CategoryPage from './components/CategoryPage.tsx'
import CartPage from './components/CartPage.tsx'
import WelcomeScreen from './components/WelcomeScreen.tsx'
import PaymentPage from './components/PaymentPage.tsx'
import ProductDetailPage from './components/ProductDetailPage.tsx'
import FavoritesPage from './components/FavoritesPage.tsx'
import SearchResultsPage from './components/SearchResultsPage.tsx'
import AccountPage from './components/AccountPage.tsx'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route index element={<MainContent />} />
            <Route path="main" element={<MainContent />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="search" element={<SearchResultsPage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* 🔍 search route */}
          </Route>
        </Routes>
      )}
    </Router>
  )
}

export default App
