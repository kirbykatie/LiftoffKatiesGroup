import BookForm from './BookForm'
import React from 'react'

function NewManualBook(book, setbook) {
  const addToBookShelf = () => {
      setbook(prevBook=>{
          console.log(prevBook)
            return {...prevBook}
       } )
  }


    return (
        <div>
            <BookForm/>
        </div>
    )
}

export default NewManualBook
