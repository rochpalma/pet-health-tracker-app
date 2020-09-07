import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default class ProfileNav extends Component {
    render() { 
        return (  
            <nav>
                
                <div id="ham-nav">
                <Logo />
                    <label htmlFor="hamburger">&#9776;</label>
                    <input type="checkbox" id="hamburger" />
                    <div id='ham-items'>
                        <Link to='/home'>Home</Link>                
                        <Link to='/profile'>Profile</Link>                 
                        <Link to='/'>Logout</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
 