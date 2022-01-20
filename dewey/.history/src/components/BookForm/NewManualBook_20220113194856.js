import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
     book.map(books => {
        
     })
     
//     const [books, setBooks] = useState([]);
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
