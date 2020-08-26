import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingButtons extends Component {
    render(){
        return(
            <div className='userBtn'>
                <ul>
                    <li>
                        <Link to='/signup' className='btn'>Sign up</Link>
                    </li>
                    <li>
                        <Link to='/signin' className='btn'>Login</Link>
                    </li>
                </ul>              
            </div>
        )
    }
}