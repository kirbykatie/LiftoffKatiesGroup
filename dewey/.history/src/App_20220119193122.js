import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import UserSignUp from './components/UserSignUp/UserSignUp'


function App() {
  return (
      <div>
      <NavBar/>
      <LandingPage/>
      <UserSignUp />
      <UserLogIn />
      </div>
  );
}

export default App;
