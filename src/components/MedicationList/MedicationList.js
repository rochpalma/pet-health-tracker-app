import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MedicationList extends Component {
    render() {
        return (  
            <div>
                <h4>Medication List</h4>
                <p>Sample Medication</p>
                <Link to='/addmedication' className='btn'>Add Medication</Link>
            </div>
        );
    }
}
 