import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OwnerForm extends Component {
    render() {
        return(  
            <section className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-title">OWNER PROFILE</h2>
                    <br/>
                </div>
                
                <form 
                    className="panel-body"
                >						   
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='first-name'>First Name:</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='text' name='first-name' id='first-name' required/>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='last-name'>Last Name:</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='text' name='last-name' id='last-name' required/>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='email'>Email Address:</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='text' name='email' id='email' required/>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='password'>Password:</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='text' name='password' id='password' required/>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='password-2'>Confirm Password:</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='text' name='password-2' id='password-2' required/>
                        </div>       							
                    </div>
                    <div className="center">
                        <Link to='/profile' className='btn'>Save</Link> 
                        <Link to='/profile' className='btn'>Cancel</Link>
                    </div>          							     								
                </form>
            </section>
        )
    }
}
 