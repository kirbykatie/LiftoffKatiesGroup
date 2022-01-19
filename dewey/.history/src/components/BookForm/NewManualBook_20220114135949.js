import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    
   

    return (
        <div>
           {book.map(books=> (<BookForm key= {book.id} allBooks={book}
           />
           ))}
        </div>
    )
}

export default NewManualBook
