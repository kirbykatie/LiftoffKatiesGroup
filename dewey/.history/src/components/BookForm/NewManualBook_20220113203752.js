import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);

     const allBooks = book

    return (
        <div>
            <BookForm allBooks={} />
        </div>
    )
}

export default NewManualBook
