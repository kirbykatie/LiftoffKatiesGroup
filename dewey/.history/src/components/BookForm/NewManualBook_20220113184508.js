import BookForm from './BookForm'
import React, {useState} from 'react'

function NewManualBook() {
    const [book,setbook] =useState(props);
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
