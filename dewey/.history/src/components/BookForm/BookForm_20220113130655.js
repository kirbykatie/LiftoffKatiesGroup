import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');

 const titleChangeHandler = (event) =>{
    
     console.log('event.target.value);
 }

 const authorChangeHandler = () => {
     console.log('author changed');
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
