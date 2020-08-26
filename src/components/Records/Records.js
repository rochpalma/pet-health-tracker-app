import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from '../ProfileNav/ProfileNav';
import List from '../List/List';

export default class Records extends Component {
    render(){
        return(
            <>
            
                <ProfileNav />
                <main className='container-center'> 
                    <div className='center welcome-container'>  
                        <h2>Records</h2>  
                        <div className='act-border event-container'> 
                             <List />
                             <Link to='/addvaccine' className='btn'>Add Vaccine</Link>
                        </div>
                    </div>
                </main>
                
            </>
        )
    }
}