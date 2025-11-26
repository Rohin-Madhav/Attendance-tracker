import React from 'react'
import Navber from "./Navbar"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Layout
