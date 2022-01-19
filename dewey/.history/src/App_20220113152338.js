import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import BookForm from './components/BookForm/BookForm';
import BookShelf from './components/BookShelf/BookShelf';
import NewManualBook from './components/BookForm/NewManualBook';

function App() {
  return (
      <div>
        <Router>
        <Routes>
          <Route path="bookShelf"
          </Routes> path="/bookShelf">
          <BookShelf/>
        </Route>
        </Router>
    </div>
  );
}

export default App;
