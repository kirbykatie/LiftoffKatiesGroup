import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {

    const [allBooks,setBooks] = useState(books);
    console.log(books);
    
    const addToCollection = () => {
        setBooks((book) => {
   //consoles enterred data
            console.log(book);
            return {book, books}
            //console.log(...prevBook);
        })
         console.log(allBooks);
    }
    
   

    return (
        <div>
           <BookForm addToCollection={addToCollection} 
           />
        </div>
    )
}

export default NewManualBook;