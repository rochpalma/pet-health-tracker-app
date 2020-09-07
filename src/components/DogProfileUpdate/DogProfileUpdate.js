import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import DogForm from '../DogForm/DogForm';
import Footer from '../Footer/Footer';

export default class DogProfileUpdate extends Component {
    render(){
        return(
            <div className='PagWrapper'>
                <ProfileNav />
                <main className='container'>
                    <div className='MainContent'>
                        <DogForm />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}