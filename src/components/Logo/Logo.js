import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render(){
        return(
            <div className='logo'>
                <Link to='/'>
                    <h1 >Pet Health Tracker</h1>
                </Link>
            </div>
        )
    }
}