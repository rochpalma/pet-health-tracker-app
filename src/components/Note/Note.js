import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ProfileNav from '../ProfileNav/ProfileNav';
import MedicationList from '../MedicationList/MedicationList';
import NoteForm from '../NoteForm/NoteForm';

export default class Note extends Component {
    render(){
        return(
            <>
                <Logo />
                <ProfileNav />
                <h2>Notes</h2>
                <h3>Botchog</h3>
                <MedicationList />
                <NoteForm />  
            </>
        )
    }
}