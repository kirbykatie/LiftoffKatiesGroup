import BookForm from './BookForm'
import React, {useState} from 'react'


function NewManualBook(books) {

    const [allBooks,setBooks] = useState(books);
    //prints previous list 
    console.log(books);
    console.log(allBooks)
    
    const addToCollection = (book) => {
        setBooks((prevBook) => {
   //consoles enterred data
            console.log(book);
            const collection = []
            collection.push(books, book)
            console.log(collection);
            return collection;
            //console.log(...prevBook);
        })
         
    }
    
   

    return (
        <div>
           <BookForm key={books.id} addToCollection={addToCollection} 
           />
        </div>
    )
}

export default NewManualBook;