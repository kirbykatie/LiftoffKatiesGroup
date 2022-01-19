import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBelf';


function App() {
  return (
      <Router>
        <header>
        <LandingPage/>
        </header>
        <main>
          <Switch>
            <Route path='/' exact>
              <LandingPage/>
            </Route>
            <Route path="/bookshelf">
              <BookShelf/>
            </Route>
            <Route path="/userLogin">
              <UserLogIn/>
            </Route>
          </Switch>
          {/* <Route path="/" component={BookShelf}>
          </Route> */}

        </main>
      </Router>
  );
}

export default App;
