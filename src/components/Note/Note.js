import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import MedicationList from '../MedicationList/MedicationList';
import NoteForm from '../NoteForm/NoteForm';
import Footer from '../Footer/Footer';

export default class Note extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <main className='container-center'> 
                    <div className='center welcome-container'> 
                        <h2>Notes</h2>
                        <div className=' event-container'>
                        <h3>Botchog</h3>
                        <MedicationList />
                        <NoteForm />   
                        </div>
                    </div>
                </main> 
                <Footer />
            </>
        )
    }
}