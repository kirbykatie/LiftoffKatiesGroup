import BookForm from './BookForm'
import React from 'react'

function NewManualBook(setbook) {

    const addToBookShelf = () => {
    setbook = function (prevBook) {
        return { ...prevBook,B }
    }
}

    return (
        <div>
            <BookForm addToBookShelf={addToBookShelf}/>
        </div>
    )
}

export default NewManualBook
