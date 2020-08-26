import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileForm from '../ProfileForm/ProfileForm'
import Footer from '../Footer/Footer';

export default class ProfileSetup extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileForm />
                <Footer />
            </>
        )
    }
}