import React from "react"
// import PropTypes from "prop-types"
import { NavLink } from "react-router-dom" 

export default function TopBar()
{
    return <nav className="topbar">
        <ul>
          
            <NavLink to="/"
                className={({ isActive }) => isActive ? "active" : "" }>
                <li>Search</li></NavLink>

            <NavLink to="/rated"
                className={({ isActive }) => isActive ? "active" : "" }>
                <li>Rated</li></NavLink>

            <NavLink to="/to-watch"
                className={({ isActive }) => isActive ? "active" : "" }>
                <li>To Watch</li></NavLink>
        </ul>
    </nav>
}