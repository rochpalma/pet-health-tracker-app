import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import LandingButtons from '../LandingButtons/LandingButtons'

export default class Landing extends Component {
    render(){
        return(
            <>
                <Logo />
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                <LandingButtons />
            </>
        )
    }
}