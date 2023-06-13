import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav className='nav_container'>
        <ul>
            <li className='nav_item'><Link to="/">Home</Link></li>
            <li className='nav_item'><Link to="/Human">Human</Link></li>
            <li className='nav_item'><Link to="/Alien">Alien</Link></li>
            <li className='nav_item'><Link to="/Male">Male</Link></li>
            <li className='nav_item'><Link to="/Female">Female</Link></li>




        </ul>
    </nav>
  )
}

export default NavBar