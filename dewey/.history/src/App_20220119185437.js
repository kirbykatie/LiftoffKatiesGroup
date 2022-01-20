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
            <UserSignUp/>
            <UserLogIn
      
      <NavBar/>
      <LandingPage/>
{/* <<<<<<< HEAD
      <UserSignUp />
======= */}
      {/* <UserLogIn /> */}
{/* >>>>>>> a5249d6bb5a897cd294f7a8c934ab6225026e88f */}
      </div>
  );
}

export default App;
