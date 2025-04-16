import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
function Home() {
    return (
        <>
            <div className="main_home">
                <div className="home">
                    <h1>Welcome</h1>
                    <button><Link to="/login">Login</Link></button>
                    <button ><Link to="/signin">Signup</Link></button>
                </div>
            </div>
        </>
    )
}

export default Home