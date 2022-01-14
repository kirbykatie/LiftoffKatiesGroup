import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);

     for()
    const [books, setBooks] = useState(book);
     
   const addToBookShelf = () => {
       setBooks(prevBooks => {
           return {...prevBooks}
       })
    }

    return (
        <div>
            <BookForm addToBookShelf={addToBookShelf}/>
        </div>
    )
}

export default NewManualBook
