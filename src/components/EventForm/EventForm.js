import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EventForm extends Component {
    render() {
        return (  
            <div className='main-display signup-bg'>
                <main>
                    <div className='userform-container'>
                        <h2>Add Event</h2>
                        <form 
                            className='form-border'
                        >                
                            <div className='form-fields'>
                                <h3>Botchog</h3>
                                <textarea id='about_me' name='about_me'
                                                rows='5' cols='33'>What's the update for today?
                                </textarea>
                                <label htmlFor='event-date'>Date</label>
                                <input type='date' name='event-date' id='event-date' required/>
                                <Link to='/home' className='btn'>Save</Link>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
 