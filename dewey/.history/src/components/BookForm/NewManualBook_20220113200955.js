import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    const [books, setBooks] = useState(book);
     
   const addToBookShelf = () => {
       setBooks(prevBook => {
           return {...prevBook, books}
       })
  


    return (
        <div>
            <BookForm addToBookShelf=/>
        </div>
    )
}

export default NewManualBook
