import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import ReminderForm from '../ReminderForm/ReminderForm';

export default class AddReminder extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <ReminderForm />  
            </>
        )
    }
}