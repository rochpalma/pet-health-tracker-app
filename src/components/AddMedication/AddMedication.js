import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import MedicationForm from '../MedicationForm/MedicationForm';
import Footer from '../Footer/Footer';

export default class AddMedication extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <MedicationForm />
                <Footer />
            </>
        )
    }
}