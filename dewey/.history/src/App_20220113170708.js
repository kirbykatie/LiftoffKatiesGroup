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
            <Route path=
          </Switch>
          {/* <Route path="/" component={BookShelf}>
          </Route> */}

        </main>
      </Router>
  );
}

export default App;
