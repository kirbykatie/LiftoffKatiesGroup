import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState('');

 const titleChangeHandler = () =>{
     console.log('title changed');
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
            <button type='submit'></button>
        </div>
        </form>
    
    )
}

export default BookForm;
