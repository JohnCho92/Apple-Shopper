import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {gotAllProducts} from '../store/product'
import {connect} from 'react-redux'
import {Login, Signup, UserHome} from './auth-form'

const LogInOrSignUp = () => {
  return (
    <div>
      <Login />
      <Link to="/newSignUp">Sign Up</Link>
    </div>
  )
}

export default LogInOrSignUp
