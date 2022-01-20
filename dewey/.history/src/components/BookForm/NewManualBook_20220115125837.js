import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {

    const [books,setBooks] = useState(books);
    console.log(books);
    
    const addToCollection = () => {
        setBooks(prevBook => {
   //consoles enterred data
            //console.log(book);
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