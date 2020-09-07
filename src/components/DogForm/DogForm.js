import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DogForm extends Component {
    render() {
        return(  
            <section className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-title">DOG PROFILE</h2>
                    <br/>
                </div>
                
                <form 
                    className="panel-body"
                >	
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='name'>Picture</label>
                        </div>
                        <div className="col-xs-9">
                            <input type="file"/>
                        </div>       							
                    </div>					   
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='name'>Name</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='text' name='name' id='name' required/>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor="birthdate">Birthdate</label>
                        </div>
                        <div className="col-xs-9">
                            <input type="date" name="birthdate" id="birthdate" required/>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                        <label htmlFor="gender">Gender</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='radio' id='female' name='gender' value='female'
                            checked />
                            <label htmlFor='female'>Female</label>
                            <input type='radio' id='male' name='gender' value='male' />
                            <label htmlFor='male'>Male</label>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor="spayed"> Spayed</label>
                        </div>
                        <div className="col-xs-9">
                            <input type='radio' id='yes' name='spayed' value='yes'
                                checked />
                            <label htmlFor='yes'>Yes</label>
                            <input type='radio' id='no' name='spayed' value='no' />
                            <label htmlFor='no'>No</label>
                        </div>       							
                    </div>
                    <div className="row">								   
                        <div className="col-xs-3 text-right">
                            <label htmlFor='breed'>Breed</label>
                        </div>
                        <div className="col-xs-9">
                            <select name='breed' id='breed' required>
                                <option value='Poodle (Toy)' selected>Poodle (Toy)</option>
                            </select>
                        </div>       							
                    </div>
                    <div className='center'>
                        <br />
                        <Link to='/profile' className='btn'>Save</Link> 
                        <Link to='/profile' className='btn'>Cancel</Link> 
                   </div>         							     								
                </form>
            </section>
        )
    }
}
 