import BookForm from './BookForm'
import React, {useState} from 'react'
import {book} from '../ItemCard/ItemCard';

function NewManualBook(book) {
    const [books,setbooks] = useState(book);
  const addToBookShelf = () => {
      setbooks(prevBook=>{
          console.log(prevBook)
            return [...prevBook]
       } )
  }


    return (
        <div>
            <BookForm addToBookShelf={addToBookShelf}/>
        </div>
    )
}

export default NewManualBook
