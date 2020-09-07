import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePageButtons extends Component {
    render() { 
        return (  
            <ul className='userBtn'>              
                <li>
                    <Link to='/events'  className='profile-btn'>Events</Link>
                </li>
                <li>
                    <Link to='/reminders'  className='profile-btn'>Reminders</Link>
                </li>
                <li>
                    <Link to='/note'  className='profile-btn'>Notes</Link>
                </li>
                <li>
                    <Link to='/records'  className='profile-btn'>Records</Link>
                </li>                      
            </ul>
        );
    }
}
 