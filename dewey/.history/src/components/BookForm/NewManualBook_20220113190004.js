import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
    console.log(book);
  const addToBookShelf = () => {
      setbooks(prevBook=>{
          console.log(prevBook)
            return [...prevBook]
       } )
  }


    return (
        <div>
            <BookForm/>
        </div>
    )
}

export default NewManualBook