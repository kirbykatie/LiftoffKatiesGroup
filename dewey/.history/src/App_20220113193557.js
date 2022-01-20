import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogIn from './components/UserLogIn/UserLogIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookShelf from './components/BookShelf/BookShelf';
import NavBar from './components/NavBar/NavBar';
import List from './components/BookShelf/BookShelf';

function App() {
  const [books, setBooks] = useState([]);
  const addToBookShelf = () => {
  
    }

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
