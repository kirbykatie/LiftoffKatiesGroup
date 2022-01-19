import React from 'react';
import './LandingPage.css';
import List from '../BookShelf/BookShelf';
import Search from '../Search/Search';



function LandingPage () {
    return (
        <div>
            <header className= 'Header'></header>
           <h1 classname= 'Banner'>Welcome To Dewey!</h1>
           <div className='Grid-container'>
            <div className='Grid-child-left'>
             <img src="Assests/FullLogo.png" alt='Dewey Logo'></img>
            </div> 
            <div className='Grid-child-right'>
             Dewey is the brain child of four beginning developers. This app lets you easily organize and manage your book collection. It even has the ability to diplay them on a "Bookshelf" so you can show off that awesome cover artwork. When you can't remember if you already have that book, Dewey does!
            </div>
           </div>
           <div>
               App Features
           </div>
           <Search/>

        </div>


           
           
    )
}

export default LandingPage;