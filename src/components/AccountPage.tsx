import React, { useState } from 'react'
import './AccountPage.css'
import { useUser } from './UserContext.tsx'

const AccountPage: React.FC = () => {
  const { name, setName } = useUser()
  const [email, setEmail] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setName('')
    setEmail('')
  }

  return (
    <div className="account-page">
      <h2>My Account</h2>

      {!loggedIn ? (
        <form className="account-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      ) : (
        <div className="account-info">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  )
}

export default AccountPage
