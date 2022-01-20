import BookForm from './BookForm'
import React from 'react'

function NewManualBook(setbook) {


    return (
        <div>
            <BookForm addToBookShelf={addToBookShelf}/>
        </div>
    )
}

export default NewManualBook
