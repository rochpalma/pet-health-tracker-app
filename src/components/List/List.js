import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePageButtons extends Component {
    render() { 
        return (  
            <div className=''>
                <ul>
                    <li>
                        <h3>Vaccine on 08/20/2020</h3>
                        <p>Posted by ROP on 08/17/2020, at 04:29pm</p>
                    </li>
                    <li>
                        <h3>Groom on 08/21/2020</h3>
                        <p>Posted by ROP on 08/17/2020, at 05:29pm</p>
                    </li>
                </ul>             
            </div>
        );
    }
}
 