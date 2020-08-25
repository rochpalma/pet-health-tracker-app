import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import OwnerForm from '../OwnerForm/OwnerForm';

export default class OwnerProfileUpdate extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <div className='PagWrapper'>
                    <div className='MainContent'>
                        <OwnerForm />
                    </div>
                </div>
            </>
        )
    }
}