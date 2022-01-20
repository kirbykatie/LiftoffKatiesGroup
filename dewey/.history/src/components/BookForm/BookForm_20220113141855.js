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
    setManualInput(event.target.value);
     console.log(manualInput);
 };

 const authorChangeHandler = (event) => {
     setManualInput((prevState) => {
         return {...prevState, enteredAuthor: event.target.value};
     })
     console.log(manualInput);
 };

            const submitHandler = () => {

            }

    return (
        
        <form onSubmit={submitHandler}>
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
