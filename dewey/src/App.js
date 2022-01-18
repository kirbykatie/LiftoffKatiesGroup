import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
      <Router>
      <div>
      <NavBar/>
      <LandingPage/>
      <UserLogIn />
      </div>
      </Router>
  );
}

export default App;
