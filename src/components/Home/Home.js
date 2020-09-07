import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import HomePageButtons from '../HomePageButtons/HomePageButtons';
import List from '../List/List';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render(){
        return(
            <>
                <ProfileNav />
                <div>
                    <main>
                        <div className='profile-container'>
                            <br />
                            <br />
                            <img src='https://emborapets.com/wp-content/uploads/2019/05/120860870_m-1.jpg' alt='dp' className='dp-img' />
                            <h2>Botchog</h2>
                            <HomePageButtons />
                            <div className='act-border'>
                                <h3>Activity List</h3>
                                <List />
                            </div>  
                        </div>
                    </main>
                </div>
                {/* <Footer /> */}
               
            </>
        )
    }
}