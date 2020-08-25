import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import HomePageButtons from '../HomePageButtons/HomePageButtons';
import List from '../List/List';

export default class Home extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <HomePageButtons />
                <List />
            </>
        )
    }
}