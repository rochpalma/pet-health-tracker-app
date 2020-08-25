import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileForm from '../ProfileForm/ProfileForm'

export default class ProfileSetup extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileForm />
            </>
        )
    }
}