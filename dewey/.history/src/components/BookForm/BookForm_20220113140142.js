import React, {useState} from 'react';

//pass in books from bookshelf
const BookForm = () => {

const [manualInput, setManualInput] = useState({
    enteredTitle : '';
    enteredAuthor
});
const [enteredAuthor, setEnteredAuthor] = useState('');

 const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);     
 };

 const authorChangeHandler = (event) => {
     setEnteredAuthor(event.target.value);
     console.log(enteredAuthor);
 };

    return (
        
        <form>
            <div>
            <div>
            <label>Book Title</label>
            <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div>
            <label>Author</label>
            <input type='text' onChange={authorChangeHandler}></input>
            </div>
            <button type='submit'>Add to BookShelf</button>
        </div>
        </form>
    
    )
}

export default BookForm;
