import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarLink } from '../util/Navbar'

const NavbarComponent = props => {
    return (
        <Navbar stickyTop={props.stickyTop}>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
        </Navbar>
    )
}

NavbarComponent.propTypes = {
    stickyTop: PropTypes.bool,
}

NavbarComponent.defaultProps = {
    stickyTop: true,
}

export default NavbarComponent
