import BookForm from './BookForm'
import React, {useState} from 'react'


function NewManualBook(setBooks) {

    // const [allBooks,setBooks] = useState(books);
    // //prints previous list 
    // console.log(books);
    // console.log(allBooks);
    
    const addToCollection = (book) => {
        setBooks((prevBook) => {
   //consoles enterred data
            console.log(book);
            const collection = []
            collection.push(...prevBook, book)
            console.log(collection);
            return collection;
            //console.log(...prevBook);
        })
         
    }
    
   

    return (
        <div>
           <BookForm key={book.id} addToCollection={addToCollection} 
           />
        </div>
    )
}

export default NewManualBook;