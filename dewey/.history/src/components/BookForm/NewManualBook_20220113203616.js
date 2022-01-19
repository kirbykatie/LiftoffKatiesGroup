import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);

    return (
        <div>
            <BookForm />
        </div>
    )
}

export default NewManualBook
