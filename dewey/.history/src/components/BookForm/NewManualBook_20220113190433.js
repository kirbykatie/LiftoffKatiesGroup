import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
    console.log(book);
    const [books, setBooks] = useState([]);
  const addToBookShelf = () => {
      setBooks(prevBooks => {
          return [...prevBooks,]
      })
  }


    return (
        <div>
            <BookForm/>
        </div>
    )
}

export default NewManualBook