import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import OwnerForm from '../OwnerForm/OwnerForm';
import Footer from '../Footer/Footer';

export default class OwnerProfileUpdate extends Component {
    render(){
        return(
            <div className='PagWrapper'>
                <ProfileNav />
                <main className='container'>
                    <div className='MainContent vertical-center center'>
                        <OwnerForm />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}