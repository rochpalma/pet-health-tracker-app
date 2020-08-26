import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OwnerProfile extends Component {
    render() {
        return (
            <section className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-title">Owner Profile</h2>
                    <div className='update-btn-container'>
                        <Link to='/ownerprofileupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                    </div>
                    <br/>
                </div>         
                <div className="panel-body">            
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>First Name:</label>
                        </div>
                        <div className="col-xs-9">ROP</div>
                    </div>
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Last Name:</label>
                        </div>
                        <div className="col-xs-9">PAL</div>
                    </div>
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Email Address:</label>
                        </div>
                        <div className="col-xs-9">rgp@gmail.com</div>
                    </div> 
                    <div className="row"> 
                        <div className="col-xs-3 text-right">
                            <label>Password:</label>
                        </div>
                        <div className="col-xs-9">*******</div>
                    </div>   
                </div>
            </section>            
        );
    }
}
 


