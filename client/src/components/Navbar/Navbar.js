import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
    <div className="navbar">
    <Link to="/">
        <h1>Workout Trackr</h1>
    </Link>
    </div>
    </header>
  )
}

export default Navbar