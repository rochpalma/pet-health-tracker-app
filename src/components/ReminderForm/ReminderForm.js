import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReminderForm extends Component {
    render() {
        return (  
            <div className='main-display signup-bg'>
                <main>
                    <div className='userform-container'>
                        <h2>Add Reminder</h2>
                        <form 
                            className='form-border'
                        >                
                            <div className='form-fields'>
                                <h3>Remind me to</h3>
                                <textarea id='remind' name='remind'
                                                rows='3' cols='33'>
                                </textarea>
                                <label htmlFor='reminder-date'>When</label>
                                <input type='date' name='reminder-date' id='reminder-date' required/>
                                <label htmlFor='rpt'>Repeat</label>
                                <input type='text' name='rpt' id='rpt' required/>
                                <label htmlFor='reminder-type'>When</label>
                                <input type='text' name='reminder-type' id='reminder-type' required/>
                                <label htmlFor='notes'>Note</label>
                                <textarea id='notes' name='notes'
                                                rows='3' cols='33'>
                                </textarea>
                                <br />
                                <Link to='/home' className='btn'>Save</Link>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
 