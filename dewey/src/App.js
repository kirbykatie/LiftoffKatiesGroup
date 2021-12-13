import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar/>
        </header>
      < LandingPage />
      </Router>
    </div>
  );
}

export default App;
