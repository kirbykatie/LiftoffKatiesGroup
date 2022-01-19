import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    const [books, setBooks] = useState(book);
     
   const addToBookShelf = (book) => {
       setBooks(prevBook => {
           return {...prevBook}
       })
    }

    return (
        <div>
            <BookForm addToBookShelf={addToBookShelf}/>
        </div>
    )
}

export default NewManualBook
