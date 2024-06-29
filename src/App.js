import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProtectedPage } from './pages/ProtectedPage';
import { ControlledFormPage } from './pages/ControlledFormPage';
import { UncontrolledFormPage } from './pages/UncontrolledFormPage';
import { UserProfilePage } from './pages';
import { CongratulationsMessage } from './CongratulationMessage';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
} from './pages';
const appLinks = [
  { url: '/', label: 'Home' },
  { url: '/counter', label: 'Counter' },
  { url: '/people-list', label: 'People List' },
  { url: '/controlled', label: 'Controlled' },
  { url: '/uncontrolled', label: 'Uncontrolled' },
  { url: '/user', label: 'User Profile' },
];
function App() {  
  return (
    <div className="App">
       <Router>
       <NavBar links={appLinks}/>
        <div className='App-header'>     
        <Routes>

        <Route path="/" element=<HomePage/> />
        <Route path="/user" element = <UserProfilePage/> />
        <Route path="/uncontrolled"element = <UncontrolledFormPage/> />
        <Route path="/controlled" element = <ControlledFormPage/> />
        <Route path="/protected" element=<ProtectedPage/> />
        <Route path="/counter/" element = <CounterButtonPage/> />
        <Route path="/people-list" element = <PeopleListPage/> />
        <Route path = "*" element = <NotFoundPage/> />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
