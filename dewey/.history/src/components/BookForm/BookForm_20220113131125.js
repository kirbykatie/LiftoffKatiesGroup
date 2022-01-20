import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm() {

const [enteredTitle, setTitle] = useState('');
const [enteredAuthor, setAuthor] = useState('');

 const titleChangeHandler = (event) =>{
    
     setTitle(event.target.value);
 }

 const authorChangeHandler = (event) =>{
     setAuthor
 }

    return (
        
        <form>
            <div>
            <div>
            <label>Book Title</label>
            <input type='text' onChange={titleChangeHandler()}></input>
            </div>
            <div>
            <label>Author</label>
            <input type='text' onChange={authorChangeHandler()}></input>
            </div>
            <button type='submit'>Add to BookShelf</button>
        </div>
        </form>
    
    )
}

export default BookForm;
