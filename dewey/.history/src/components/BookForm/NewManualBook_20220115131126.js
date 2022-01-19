import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {

    const [allBooks,setBooks] = useState(books);
    console.log(books);
    
    const addToCollection = (book) => {
        setBooks((prevBook) => {
   //consoles enterred data
            console.log(book);
            return {...prevBook, books}
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