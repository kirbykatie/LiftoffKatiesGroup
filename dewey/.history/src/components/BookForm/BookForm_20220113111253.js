import React from 'react';

//pass in books from bookshelf
function BookForm(books) {
    return (
        <form>
            <input type='text' placeholder='Book Name'></input>
            <input type='text' placeholder='Author'></input>
            <input type='text'></input>
        </form>
    )
}

export default BookForm
