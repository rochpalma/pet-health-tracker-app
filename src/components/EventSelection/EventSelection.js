import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import EventType from '../EventType/EventType';
import Footer from '../Footer/Footer';

export default class EventSelection extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <main className='container-center'> 
                    <div className='center welcome-container'>  
                        <EventType /> 
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}