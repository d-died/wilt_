import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

 const NavBar = () => {
     return(
         <nav className='navbar'>
            <NavLinks />
         </nav>
        
     )
 }


export default NavBar