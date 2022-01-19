import BookForm from './BookForm'
import React, {useState} from 'react'
import MediaCard from '../ItemCard/ItemCard';

function NewManualBook(book) {
     console.log(book);
    
   

    return (
        <div>
           {book.map(books=> (<BookForm key= {books.id} allBooks={books}
           />
           ))}
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
