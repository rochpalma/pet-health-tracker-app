import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signin extends Component {
    render() { 
        return (  
            <div>
                <main>            
                    <div className='userform-container'>
                        <form 
                            className='form-border'
                        >    
                            <div className='form-fields'>                             
                                <legend>Sign in to your account</legend>  
                                <br />               
                                <label htmlFor='email'>Email Address</label>
                                <input type='text' name='email' id='email' required/>
                                <label htmlFor='password'>Password</label>
                                <input type='password' name='password' id='password' required/>
                                <Link to='/home' className='btn'>Login</Link>
                                <Link to='/signup' className='btn'>Signup</Link>
                            </div>                                                                                
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
 