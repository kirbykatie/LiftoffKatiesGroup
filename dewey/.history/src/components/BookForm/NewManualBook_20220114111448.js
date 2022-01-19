import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {
     console.log(props);
    
    const [books, setBooks] =useState();
    console.log(books); 
    const addToCollection = () => {

    }
    

    return (
        <div>
            <BookForm allBooks={book} addToCollection={addToCollection}/>
        </div>
    )
}

export default NewManualBook
