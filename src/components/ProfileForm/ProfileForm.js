import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfileForm extends Component {
    render() { 
        return (  
            <main>
                <div className='event-form-container'>
                    <form>
                        <div className='event-form-fields event-form-border'>
                            <input type="file"/>                                 
                            <label htmlFor='full_name'>Name</label>
                            <input type='text' name='full_name' id='full_name' required/>
                            <label htmlFor="birthdate">Birthdate</label>
                            <input type="date" name="birthdate" id="birthdate" required/>
                            <div className='gender-box'>
                                <label>Gender</label>
                                <input type='radio' id='female' name='gender' value='female'
                                checked />
                                <label htmlFor='female'>Female</label>
                                <input type='radio' id='male' name='gender' value='male' />
                                <label htmlFor='male'>Male</label>
                            </div>
                            <div className='gender-box'>
                                <label>Spayed or Neutered</label>
                                <input type='radio' id='yes' name='spayed' value='yes'
                                checked />
                                <label htmlFor='yes'>Yes</label>
                                <input type='radio' id='no' name='spayed' value='no' />
                                <label htmlFor='no'>No</label>
                            </div>
                            <label>Breed</label>
                            <select name='breed' id='breed' required>
                            <option value='Poodle (Toy)' selected>Poodle (Toy)</option>
                            </select>
                            <br />
                            <Link to='/home' className='btn'>Save</Link>      
                        </div>                           
                    </form>
                </div>
            </main>
        );
    }
}
 