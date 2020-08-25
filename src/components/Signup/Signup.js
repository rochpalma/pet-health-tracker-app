import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SignupForm from '../SignupForm/SignupForm'

export default class Signup extends Component {
    render(){
        return(
            <>
                <Logo />
                <SignupForm />
            </>
        )
    }
}