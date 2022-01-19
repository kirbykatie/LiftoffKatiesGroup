import BookForm from './BookForm'
import React from 'react'

function NewManualBook(setbook) {

    const addToBookShelf = () => {
    setbook((prevBook=>{
        return {...prevBook}
    })
}

    return (
        <div>
            <BookForm addToBookShelf={addToBookShelf}/>
        </div>
    )
}

export default NewManualBook
