import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingButtons extends Component {
    render(){
        return(
            <ul className='userBtn'>
                    <li>
                        <Link to='/signup' className='btn'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/signin' className='btn'>Login</Link>
                    </li>
                             
            </ul>
        )
    }
}