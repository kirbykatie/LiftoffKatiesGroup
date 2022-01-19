import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook() {

    
    
    const addToCollection = (book) => {
        setbook(prevBook => {
            console.log(book);
            console.log(prevBook);
            //console.log(...prevBook);
        })
    }
    
   

    return (
        <div>
           <BookForm addToCollection={addToCollection} 
           />
        </div>
    )
}

export default NewManualBook;