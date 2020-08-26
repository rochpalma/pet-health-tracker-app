import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import ReminderForm from '../ReminderForm/ReminderForm';
import Footer from '../Footer/Footer';

export default class AddReminder extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <ReminderForm />  
                <Footer />
            </>
        )
    }
}