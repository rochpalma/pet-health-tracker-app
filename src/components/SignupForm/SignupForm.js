import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
    render() {
        return (  
            <div className='main-display signup-bg'>
                <main>
                    <div className='userform-container'>
                        <form 
                            className='form-border'
                        >                
                            <div className='form-fields'>
                                <label htmlFor='first_name'>First Name</label>
                                <input type='text' name='first_name' id='first_name' required/>
                                <label htmlFor='last_name'>Last Name</label>
                                <input type='text' name='last_name' id='last_name' required/>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email' name='email' id='email' required/>
                                <label htmlFor='password'>Password</label>
                                <input type='password' name='password' id='password' required/>
                                <label htmlFor='password-2'>Confirm Password</label>
                                <input type='password' name='password-2' id='password-2' required className='red'/>
                                <Link to='/signup' className='btn'>Signup</Link>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
 