import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book, Add) {
     console.log(book);

    

    return (
        <div>
            <BookForm allBooks={book} />
        </div>
    )
}

export default NewManualBook
