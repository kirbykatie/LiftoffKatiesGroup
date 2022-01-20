import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {
     console.log(books);
    
   

    return (
        <div>
           {books.map(books=> (<BookForm key= {books.id} allBooks={books}
           />
           ))}
        </div>
    )
}

export default NewManualBook;