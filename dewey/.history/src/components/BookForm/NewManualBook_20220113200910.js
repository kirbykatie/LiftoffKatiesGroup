import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    const [books, setBooks] = useState(book);
     
;
//   const addToBookShelf = () => {
//       setBooks(prevBook => {
//           return {...prevBook,manualBook}
//       })
  


    return (
        <div>
            <BookForm />
        </div>
    )
}

export default NewManualBook
