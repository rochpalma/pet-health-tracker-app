import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import VaccineForm from '../VaccineForm/VaccineForm';
import Footer from '../Footer/Footer';

export default class AddVaccine extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <VaccineForm />
                <Footer />
            </>
        )
    }
}