import React from "react";
import { Link } from 'react-router-dom'

const NavLinks = () => {
    return(
        <>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#posts'>Posts</a>
                </li>
                <li>
                    <a href='#myposts'>My Posts</a>
                </li>
                <li>
                    <Link to='/graphs'>Graphs</Link>
                </li>
                <li>
                    <a href='#about'>About the Creator</a>
                </li>
            </ul>
            <div className="login">
                <h3>Login </h3>
            </div>
        </>
       
    )
}

export default NavLinks