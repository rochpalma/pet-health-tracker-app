import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VaccineForm extends Component {
    render() { 
        return (  
            <main>
                <div className='event-form-container'>
                    <form>
                        <div className='event-form-fields event-form-border'>                                
                            <label htmlFor='vaccine'>Vaccine Name</label>
                            <input type='text' name='vaccine' id='vaccine' required/>
                            <label htmlFor='expiry-date'>Expiry Date</label>
                            <input type='date' name='expiry-date' id='expiry-date' required/>
                            <label htmlFor='serial-no'>Serial Number</label>
                            <input type='text' name='serial-no' id='serial-no' required/>
                            <label htmlFor='vet'>Vet</label>
                            <input type='text' name='vet' id='vet' required/>
                            <Link to='/home' className='btn'>Save</Link>      
                        </div>                           
                    </form>
                </div>
            </main>
        );
    }
}