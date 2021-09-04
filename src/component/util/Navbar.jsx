import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/darkmode'
import Switch from './Switch'

export const Navbar = ({ children, stickyTop }) => {

    const darkMode = useContext(ThemeContext)
    const mode = darkMode.darkMode ? "dark" : "light"

    return (
        <nav className={`navbar navbar-expand-md navbar-${mode} bg-${mode} ${stickyTop && "sticky-top"}`} style={{ fontFamily: "'Roboto Slab', serif" }} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Text Utility</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {children}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <Switch anim id="darkmodeswitch" value={darkMode.darkMode} onChange={darkMode.setDarkMode} />
                </div>
            </div>
        </nav>
    )
}

export const NavbarDropdown = ({ name, id, children }) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id={id} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {name}
            </a>
            <ul className="dropdown-menu" aria-labelledby={id}>
                {children}
            </ul>
        </li>
    )
}

NavbarDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}




export const NavbarDropdownLink = ({ to, children }) => {
    return (
        <li><Link className="dropdown-item" to={to}>{children}</Link></li>
    )
}

NavbarDropdownLink.propTypes = {
    to: PropTypes.string.isRequired,
}

export const NavbarLink = ({ to, children }) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" exact to={to} activeClassName="active">{children}</NavLink>
        </li>
    )
}

NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
}

