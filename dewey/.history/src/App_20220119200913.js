import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookShelf from './components/BookShelf/BookShelf';
import NavBar from './components/NavBar/NavBar';
import UserSignUp from './components/UserSignUp/UserSignUp'
import List from './components/BookShelf/BookShelf';


function App() {
  

  return (
      <Router>
        <header>
        <NavBar/>
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <LandingPage/>
            </Route>
            <Route path="/bookshelf">
              <List/>
            </Route>
            <Route path="/userLogin">
              <UserLogIn/>
            </Route>
          </Switch>

        </main>
      </Router>
  );
}

export default App;
