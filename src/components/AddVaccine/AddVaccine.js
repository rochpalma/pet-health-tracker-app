import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import VaccineForm from '../VaccineForm/VaccineForm';

export default class AddVaccine extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <h2>Add Vaccine</h2>
                <VaccineForm />
            </>
        )
    }
}