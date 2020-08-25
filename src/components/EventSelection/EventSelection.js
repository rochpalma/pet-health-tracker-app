import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import EventType from '../EventType/EventType';

export default class EventSelection extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <EventType /> 
            </>
        )
    }
}