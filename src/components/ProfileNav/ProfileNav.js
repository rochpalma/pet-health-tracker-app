import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default class ProfileNav extends Component {
    render() { 
        return (  
            <nav>
                <Logo />
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/'>Logout</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
 