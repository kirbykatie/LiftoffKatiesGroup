import BookForm from './BookForm'
import React, {useState} from 'react'

function NewManualBook() {
    const [books,setbook] = useState();
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
