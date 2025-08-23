import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1" style={{ paddingTop: "76px" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}


export default Layout