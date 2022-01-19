import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    
    const [books, setBooks] =useState();
 
    const addToCollection = () => {
        setBooks(prevbook => {
            console.log(prev)
        })
    }
    

    return (
        <div>
            <BookForm allBooks={book} addToCollection={addToCollection}/>
        </div>
    )
}

export default NewManualBook
