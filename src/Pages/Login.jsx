import React from 'react'
import clickuplogo from '../assets/clickuplogo.png'
import { Link } from 'react-router-dom'

export const Login = () => {
  const signUp = () => {
    console.log('sign up')
  }

  const Navbar = () => {
    return (
      <>
        <div className="navbar">
          <div className='nav-item'>
            <img src={clickuplogo} className='logo' alt="clickup logo" />
          </div>
          <div className='nav-item2'>
            <div style={{fontWeight: "600", fontSize: "0.8em"}}>Don't have an account?</div>
            <button>
            <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className='container'>
          <form>
            <div className='welcome-text'>Welcome back!</div>
            <div className='input-group'>
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Email Address' />
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Password' />
            </div>
            <button style={{width: "100%", padding: "1.2rem 0rem", marginBottom: "2em", fontWeight: "bolder"}}>Login</button>
            <div style={{color: "#7b69ee", fontSize: "0.8rem"}}>Or log In with SSO</div>
          </form>
          <div style={{fontSize: "0.8em", color: "white"}}>Don't have an account? <a href="" >Signup</a></div>
        </div>
      </div>
    </>
  )
}
