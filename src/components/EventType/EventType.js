import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EventType extends Component {
    render() { 
        return (  
            <>
                <h2>What event are you logging?</h2>
                <ul className='event-type'>
                    <li>
                        <Link to='/addevent'  >
                            <h3>Medical</h3>
                        </Link>                       
                    </li>
                    <li>
                        <Link to='/addevent'  >
                            <h3>Grooming</h3>
                        </Link>      
                    </li>
                    <li>
                        <Link to='/addevent'  >
                            <h3>Food</h3>
                        </Link>                         
                    </li>
                    <li>
                        <Link to='/addevent'  >
                            <h3>Weight</h3>
                        </Link>                         
                    </li>
                    <li>
                        <Link to='/addevent'  >
                            <h3>Behavior</h3>
                        </Link>                        
                    </li>
                    <li>
                        <Link to='/addevent'  >
                            <h3>Other</h3>
                        </Link>                        
                    </li>
                </ul>  
            </>
        );
    }
}
