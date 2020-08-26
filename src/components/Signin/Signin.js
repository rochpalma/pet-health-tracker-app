import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SigninForm from '../SigninForm/SigninForm';
import Footer from '../Footer/Footer';

export default class Signin extends Component {
    render(){
        return(
            <>
                <Logo />
                <SigninForm />
                <Footer />
            </>
        )
    }
}