import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import DogForm from '../DogForm/DogForm';

export default class DogProfileUpdate extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <div className='PagWrapper'>
                    <div className='MainContent'>
                        <DogForm />
                    </div>
                </div>
            </>
        )
    }
}