import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DogProfile extends Component {
    render() {
        return ( 
            <section className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-title">Dog Profile</h2>
                    <div className='update-btn-container'>
                        <Link to='/dogprofileupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                    </div>
                    <br/>
                </div>         
                <div className="panel-body">
                    <div className="row">
                        <div className='center'>
                            <img src='https://emborapets.com/wp-content/uploads/2019/05/120860870_m-1.jpg' alt='dp' className='dp-img' />
                        </div> 
                    </div>            
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Name:</label>
                        </div>
                        <div className="col-xs-9">Botchog</div>
                    </div>
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Birthdate:</label>
                        </div>
                        <div className="col-xs-9">07/20/2013</div>
                    </div>
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Gender</label>
                        </div>
                        <div className="col-xs-9">Male</div>
                    </div> 
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Spayed:</label>
                        </div>
                        <div className="col-xs-9">No</div>
                    </div>  
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Breed:</label>
                        </div>
                        <div className="col-xs-9">Poodle</div>
                    </div>   
                </div>
            </section>                
        );
    }
}
 






                