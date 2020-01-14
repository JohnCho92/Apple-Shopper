import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <h1 className="main-logo">🍎 Apple</h1>
    <nav className="login-form">
      {isLoggedIn ? (
        <div>
          <NavLink
            activeClassName="active"
            className="main-links"
            to="/allProducts"
          >
            Shop
          </NavLink>
          <NavLink activeClassName="active" className="main-links" to="/">
            Home Page
          </NavLink>
          <NavLink activeClassName="active" className="main-links" to="/cart">
            My Cart
          </NavLink>
          {/* The navbar will show these links after you log in */}
          <NavLink activeClassName="active" className="main-links" to="/home">
            Home
          </NavLink>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <NavLink activeClassName="active" className="main-links" to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="active" className="main-links" to="/signup">
            Sign Up
          </NavLink>
          <NavLink
            activeClassName="active"
            className="main-links"
            to="/allProducts"
          >
            Shop All
          </NavLink>
          <NavLink activeClassName="active" className="main-links" to="/cart">
            My Cart
          </NavLink>
          <NavLink activeClassName="active" className="main-links" to="/home">
            Home
          </NavLink>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
