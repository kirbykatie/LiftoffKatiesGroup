import BookForm from './BookForm'
import React from 'react'

function NewManualBook() {
    const
  const addToBookShelf = () => {
      setbook((prevBook)=>{
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
