import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Welcome from './components/Welcome/Welcome';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import AddEvent from './components/AddEvent/AddEvent';
import EventSelection from './components/EventSelection/EventSelection';
import Reminders from './components/Reminders/Reminders';
import AddReminder from './components/AddReminder/AddReminder';
import Note from './components/Note/Note';
import AddMedication from './components/Profile/Profile';
import Records from './components/Records/Records';
import AddVaccine from './components/AddVaccine/AddVaccine';
import Profile from './components/Profile/Profile';
import OwnerProfileUpdate from './components/OwnerProfileUpdate/OwnerProfileUpdate';
import DogProfileUpdate from './components/DogProfileUpdate/DogProfileUpdate';


export default class App extends Component {
  render(){
    return (
      <div className='App'>
        <Route exact path = '/' component={Landing}/>
        <Route exact path = '/signin' component={Signin}/>
        <Route exact path = '/signup' component={Signup}/>
        <Route exact path = '/welcome' component={Welcome}/>
        <Route exact path = '/profilesetup' component={ProfileSetup}/>
        <Route exact path = '/home' component={Home}/>
        <Route exact path = '/events' component={Events}/>
        <Route exact path = '/addevent' component={AddEvent}/>
        <Route exact path = '/eventselection' component={EventSelection}/>
        <Route exact path = '/reminders' component={Reminders}/>
        <Route exact path = '/addreminder' component={AddReminder}/>
        <Route exact path = '/note' component={Note}/>
        <Route exact path = '/addmedication' component={AddMedication}/>
        <Route exact path = '/records' component={Records}/>
        <Route exact path = '/addvaccine' component={AddVaccine}/>
        <Route exact path = '/profile' component={Profile}/>
        <Route exact path = '/ownerprofileupdate' component={OwnerProfileUpdate}/>
        <Route exact path = '/dogprofileupdate' component={DogProfileUpdate}/>
      </div>
    );
  }
}
