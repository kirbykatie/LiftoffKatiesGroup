import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import BookShelf from './components/BookShelf/BookShelf';
import NewManualBook from './components/BookForm/NewManualBook';

function App() {
  return (
      <Router>
        <NavBar
        <Routes>
          <Route path="/landingPage" element={<LandingPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
