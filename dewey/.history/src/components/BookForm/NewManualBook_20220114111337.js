import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(props) {
     console.log(book);
    
    const [books, setBooks] =useState(props.book);
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
