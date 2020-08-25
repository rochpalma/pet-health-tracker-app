import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import List from '../List/List';

export default class Records extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <h2>Records</h2>
                <List />
                <Link to='/addvaccine' className='btn'>Add Vaccine</Link>
            </>
        )
    }
}