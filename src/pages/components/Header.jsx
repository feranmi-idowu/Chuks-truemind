import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/header.css'

function Header() {
    return (
        <div className="header">
            <h2 className="brand-logo-header">Chuks Kitchen</h2>
            <nav className="navbar-header" >
                <NavLink className="navlink" to="/home">Home</NavLink>
                <NavLink className="navlink" to="/Explore" >Explore</NavLink>
                <NavLink className="navlink" to="/My-Order" >My Order</NavLink>
                <NavLink className="navlink" to="/Account" >Account</NavLink>
            </nav>
            <button className="login-header">login</button>
        </div>
    )
}

export default Header;
