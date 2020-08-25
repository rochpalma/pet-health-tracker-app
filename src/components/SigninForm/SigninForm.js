import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
    render() { 
        return (  
            <div className='main-display signin-bg'>
                <main>
                    <div className='userform-container'>
                        <form 
                            className='signin-border'
                        >
                            <fieldset> 
                                <div className='form-fields'>                             
                                    <legend>Sign in to your account</legend>                 
                                    <label htmlFor='email'>Email Address</label>
                                    <input type='text' name='email' id='email' required/>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' id='password' required/>
                                    <Link to='/home' className='btn'>Login</Link>
                                    <Link to='/signup' className='btn'>Sign up</Link>
                                </div>                                                
                            </fieldset>                                 
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
 
export default Signin;