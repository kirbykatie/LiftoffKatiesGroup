import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(setBook) {

    // const [books,setBooks] = useState(book);
    // console.log(books);
    
    const addToCollection = (book) => {
        setBook(prevBook => {
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