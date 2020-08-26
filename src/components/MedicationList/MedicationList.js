import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MedicationList extends Component {
    render() {
        return (  
            <div className='med-list'>
                <h4>Medication List: <span>Sample Medication</span></h4>  
                <Link to='/addmedication' className='btn'>Add Medication</Link>
            </div>
        );
    }
}
 