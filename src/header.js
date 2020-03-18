import React from 'react'
import './App.css';
import {
    Link
} from 'react-router-dom';


export default () =>{
    return(
        <div>
            <header className="d-flex justify-content-between align-items-center">
            <Link to="/">Home</Link>
                <nav>
                    <ul className="d-flex ">
                        <li><Link to="/details" >Details</Link></li>
                        <li><Link to="/signup" >Sign Up</Link></li>
                        <li>Log In</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}