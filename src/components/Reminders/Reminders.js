import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import List from '../List/List';

export default class Reminders extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <List /> 
                <Link to='/addreminder'  className='btn'>Add Reminder</Link> 
            </>
        )
    }
}