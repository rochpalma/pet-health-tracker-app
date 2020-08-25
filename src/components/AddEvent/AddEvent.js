import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import EventForm from '../EventForm/EventForm';

export default class AddEvent extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <EventForm />
            </>
        )
    }
}