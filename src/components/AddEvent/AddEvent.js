import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import EventForm from '../EventForm/EventForm';

export default class AddEvent extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <EventForm />
            </>
        )
    }
}