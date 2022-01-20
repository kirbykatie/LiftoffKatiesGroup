import React from 'react';

//pass in books from bookshelf
function BookForm(books) {
    return (
        <form>
            <input type='text' placeholder='Book'></input>
            <input type='text'></input>
            <input type='text'></input>
        </form>
    )
}

export default BookForm
