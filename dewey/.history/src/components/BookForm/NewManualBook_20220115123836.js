import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook() {
    
    
    
   

    return (
        <div>
           <BookForm key= {books.id} allBooks={books}
           />
        </div>
    )
}

export default NewManualBook;