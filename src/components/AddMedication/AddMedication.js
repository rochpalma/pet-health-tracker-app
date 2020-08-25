import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import MedicationForm from '../MedicationForm/MedicationForm';

export default class AddMedication extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <h2>Add Medication</h2>
                <MedicationForm />
            </>
        )
    }
}