import React from 'react'
import TopStrip from './TopStrip.tsx'
import HeaderBar from './HeaderBar.tsx'
import MainMenu from './MainMenu.tsx'
import Footer from './Footer.tsx'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
      <TopStrip />
      <HeaderBar />
      <MainMenu />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
