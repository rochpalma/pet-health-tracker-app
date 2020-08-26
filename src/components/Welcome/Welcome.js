import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

export default class Welcome extends Component {
    render(){
        return(
            <>
                <Logo />
                <main className='container-center'>
                    <div className='center welcome-container'>
                        <h2>Welcome to Pet Health Tracker</h2>
                        <div>
                            <h3>Add a pet to get started</h3>
                            <Link to='/profilesetup' className='btn'>Add</Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}