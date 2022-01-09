import React from 'react';
import './LandingPage.css';
import List from '../BookShelf/BookShelf';


function LandingPage () {
    return (
        <div>
           {/* <h1 classname= 'Banner'>Welcome To Dewey!</h1>
           <body className='Container'>test</body> */}
           <List />
        </div>
    )
}

export default LandingPage;