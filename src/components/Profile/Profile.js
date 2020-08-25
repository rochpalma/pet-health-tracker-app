import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import DogProfile from '../DogProfile/DogProfile';
import OwnerProfile from '../OwnerProfile/OwnerProfile';

export default class Profile extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <div className='PagWrapper'>
                    <div className='MainContent'>
                        <h1>Profile Summary</h1> 
                        <DogProfile />
                        <OwnerProfile />
                    </div>
                </div>
            </>
        )
    }
}