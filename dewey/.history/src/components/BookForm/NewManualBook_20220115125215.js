import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {

    const [books,setBooks] = useState(book);
    console.log(books);
    
    const addToCollection = (book) => {
        setBooks(prevBook => {
   //consoles enterred data
            console.log(book);
            console.log(prevBook);
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