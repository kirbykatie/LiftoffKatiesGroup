import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import BookForm from './BookForm/BookForm';
import BookShelf from './components/BookShelf/'

function App() {
  return (
      <div>
        <BookShelf/>
      <BookForm/>
      </div>
  );
}

export default App;
