import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import BookShelf from './components/BookShelf/BookShelf';
import NewManualBook from './components/BookForm/NewManualBook';

function App() {
  return (
      <Router>
        <header>
        <NavBar/>
        </header>
        <Main>
          <Route path="/landingPage">
          <LandingPage/>
          </Route>
          
          </Main>
      </Router>
  );
}

export default App;
