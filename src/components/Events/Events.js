import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import List from '../List/List';

export default class Events extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <List />
                <Link to='/eventselection'  className='btn'>Add Event</Link> 
            </>
        )
    }
}