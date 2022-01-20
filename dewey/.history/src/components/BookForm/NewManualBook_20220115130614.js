import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {

    const [allBooks,setBooks] = useState(books);
    console.log(books);
    console.log(allBooks);
    
    const addToCollection = (book) => {
        setBooks((book) => {
   //consoles enterred data
            //console.log(book);
            return {book, books}
            //console.log(...prevBook);
        })
    }
    
   

    return (
        <div>
           <BookForm addToCollection={addToCollection} 
           />
        </div>
    )
}

export default NewManualBook;