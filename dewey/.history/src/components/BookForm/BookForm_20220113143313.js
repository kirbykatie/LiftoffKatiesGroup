import React, {useState} from 'react';

//pass in books from bookshelf
const BookForm = () => {
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAuthor, setEnteredAuthor] = useState('');

// const [manualInput, setManualInput] = useState({
//     enteredTitle : '',
//     enteredAuthor: '',
// });

 const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
 };

 const authorChangeHandler = (event) => {
     setEnteredAuthor(event.target.value);
     console.log(enteredAuthor);
 };

 const submitHandler = (event) => {
     event.preventDefault();

     const manualBook = {
         title: enteredTitle,
         author: enteredAuthor,
     }

     console.log(manualBook);
     setEnteredTitle('');
     setEnteredAuthor('');
 };

          
    return (
        
        <form onSubmit={submitHandler}>
            <div>
            <div>
            <label>Book Title</label>
            <input type='text' onChange={titleChangeHandler}> value={enteredTitle}</input>
            </div>
            <div>
            <label>Author</label>
            <input type='text' onChange={authorChangeHandler}> </input>
            </div>
            <button type='submit'>Add to BookShelf</button>
        </div>
        </form>
    
    )
}

export default BookForm;
