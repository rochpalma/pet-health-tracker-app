import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import DogProfile from '../DogProfile/DogProfile';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import Footer from '../Footer/Footer';

export default class Profile extends Component {
    render(){
        return(
                <div className='PagWrapper'>
                    <ProfileNav />
                    <main className='container'>
                        <div className='MainContent vertical-center center'>
                        <h1>Profile Summary</h1> 
                            <DogProfile />
                            <OwnerProfile />
                        </div>
                    </main>
                    <Footer />
                </div>
            
        )
    }
}