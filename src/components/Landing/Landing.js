import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import LandingButtons from '../LandingButtons/LandingButtons'
import Footer from '../Footer/Footer';

export default class Landing extends Component {
    render(){
        return(
            <>
                <Logo />
                <main className='container-center'>
                    <div className='center welcome-container'>
                        <h2>Track your pet health data.</h2>
                        <h3>Log your pet's vaccine records, behavior and notes</h3>
                        <LandingButtons />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}