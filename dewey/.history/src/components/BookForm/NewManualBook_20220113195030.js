import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    const allBooks = book.map(books => 
        console.log(books.title);
        console.log(books.author)
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
