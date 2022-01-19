import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    
    const [books, setBooks] =useState();
 
    const addToCollection = () => {
        setBooks(prevbook => {
            console.log(prevbook);
        })
    }
    

    return (
        <div>
           {book.map(books=> (<BookForm keyallBooks={book}/>
            })}
        </div>
    )
}

export default NewManualBook
<div>              
                {vacations.map(vacation => (<Vacations key={vacation.id} vacations={vacation}
         />
         ))}
         </div>
        )
