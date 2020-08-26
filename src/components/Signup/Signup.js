import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SignupForm from '../SignupForm/SignupForm'
import Footer from '../Footer/Footer';

export default class Signup extends Component {
    render(){
        return(
            <>
                <Logo />
                <SignupForm />
                <Footer />
            </>
        )
    }
}