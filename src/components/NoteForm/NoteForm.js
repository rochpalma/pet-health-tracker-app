import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReminderForm extends Component {
    render() {
        return (  
            <>
                <div className='userform-container'>
                    <form >                
                        <div className='form-fields'>
                            <h3>Care Notes</h3>
                            <textarea id='care-note' name='care-note'
                                            rows='5' cols='33'>
                            </textarea>
                            <h3>Food Notes</h3>
                            <textarea id='food-note' name='food-note'
                                            rows='5' cols='33'>
                            </textarea>
                            <br/>
                            <Link to='/home' className='btn'>Save</Link>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
 