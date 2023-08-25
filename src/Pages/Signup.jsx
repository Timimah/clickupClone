import React from 'react'
import clickuplogo from '../assets/clickuplogo.png'
import { Link } from 'react-router-dom'

export const Signup = () => {
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
                        <div style={{ fontWeight: "600", fontSize: "0.8em" }}>Already playing with ClickUp?</div>
                        <button onClick={signUp}>Log in</button>
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
                    <form style={{borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}}>
                        <div className='welcome-text'>Let's go!</div>
                        <div className='input-group'>
                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder='John Doe' />
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Email Address' />
                            <label htmlFor="">Choose Password</label>
                            <input type="password" placeholder='Password' />
                        </div>
                        <button style={{ width: "100%", padding: "1.2rem 0rem", marginBottom: "2em", fontWeight: "bolder" }}>Play with ClickUp</button>
                        <div style={{ color: "#7b69ee", fontSize: "0.8rem" }}>or sign up with SSO</div>
                    </form>
                    <div style={{color: "#af8da5", fontSize: "0.6em", marginTop: "-3.4em", borderTop: "1px solid grey", width: "40%", backgroundColor: "white", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", padding: "0.5em", textAlign: "center"}}>By clicking the button above, you agree to our <span><a  href="#" style={{color: "#af8da5", fontSize: "0.9em"}}>Terms of Service</a></span>and <span><a href="#" style={{color: "#af8da5", fontSize: "0.9em"}}>Privacy Policy</a></span>.</div>
                </div>
            </div>
        </>
    )
}
