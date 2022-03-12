import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const HamNav = () => {
    return(
//         <div>
//   <Navbar
//     color="faded"
//     light
//   >
//     <NavbarBrand
//       className="me-auto"
//       href="/"
//     >
//       reactstrap
//     </NavbarBrand>
//     <NavbarToggler
//       className="me-2"
//       onClick={function noRefCheck(){}}
//     />
//     <Collapse navbar>
//       <Nav navbar>
//         <NavItem>
//           <NavLink href="/components/">
//             Components
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="https://github.com/reactstrap/reactstrap">
//             GitHub
//           </NavLink>
//         </NavItem>
//       </Nav>
//     </Collapse>
//   </Navbar>
// </div>
        <NavLinks />
    )
}

export default HamNav