import React, { Component } from 'react';

export default class MedicationForm extends Component {
    render() { 
        return (  
            <main>
                <div className='event-form-container'>
                    <form>
                        <div className='event-form-fields event-form-border'>                                
                            <label htmlFor='medicine'>Medicine</label>
                            <input type='text' name='medicine' id='medicine' required/>
                            <label htmlFor='amount'>Dosage Amount</label>
                            <input type='text' name='amount' id='amount' required/>
                            <label htmlFor='unit'>Dosage Unit</label>
                            <div className='gender-box'>
                                <label>Create Reminder</label>
                                <input type='radio' id='yes' name='reminder' value='yes'
                                checked />
                                <label htmlFor='yes'>Yes</label>
                                <input type='radio' id='no' name='reminder' value='no' />
                                <label htmlFor='no'>No</label>
                            </div>
                            <label htmlFor='notes'>Notes</label>
                            <textarea id='notes' name='notes'
                                            rows='5' cols='33'>
                            </textarea>
                            <Link to='/home' className='btn'>Save</Link>      
                        </div>                           
                    </form>
                </div>
            </main>
        );
    }
}
 
export default ProfileSetup;