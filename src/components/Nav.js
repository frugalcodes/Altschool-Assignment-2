import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

    <nav>
        <h3>Logo</h3>
       <ul className='nav-links'>
        
       <Link to='users'>
                <li>Users</li>
        </Link>
        <Link to='/'>
                 <li>Home</li>
        </Link>

        <Link to='/about'>
                <li>About</li>
        </Link>

        

        <Link to='/contact'>
                <li>Contact</li>
        </Link>

       </ul>

    </nav>
    
    
    </div>
  )
}

export default Nav