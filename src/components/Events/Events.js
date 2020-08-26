import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import List from '../List/List';
import Footer from '../Footer/Footer';

export default class Events extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <main className='container-center'> 
                    <div className='center welcome-container'>  
                        <h2>Events</h2>   
                        <div className='act-border event-container'>         
                            <List />
                            <Link to='/eventselection'  className='btn'>Add Event</Link>
                        </div>
                    </div>
                </main> 
                <Footer />
            </>
        )
    }
}