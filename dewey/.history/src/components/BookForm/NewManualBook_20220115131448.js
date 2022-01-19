import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(books) {

    const [allBooks,setBooks] = useState(books);
    //prints previous list 
    console.log(books);
    
    const addToCollection = (book) => {
        setBooks((prevBook) => {
   //consoles enterred data
            console.log(book);
            const collection = []
            collection.push(books, book)
            return collection;
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