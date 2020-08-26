import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from '../ProfileNav/ProfileNav';
import List from '../List/List';
import Footer from '../Footer/Footer';

export default class Reminders extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <main className='container-center'> 
                    <div className='center welcome-container'> 
                        <h2>Reminders</h2> 
                        <div className='act-border event-container'>
                            <List /> 
                            <Link to='/addreminder'  className='btn'>Add Reminder</Link>
                        </div>
                    </div>
                </main> 
                <Footer />
            </>
        )
    }
}