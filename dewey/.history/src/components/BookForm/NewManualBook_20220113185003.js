import BookForm from './BookForm'
import React, {useState} from 'react'

function NewManualBook(book) {
    const [books,setbooks] = useState();
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
