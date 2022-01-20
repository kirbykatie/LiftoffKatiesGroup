import React, {useState} from 'react';

//pass in books from bookshelf
const BookForm = (props) => {
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
         id: enteredTitle +1
         title: enteredTitle,
         author: enteredAuthor,
     }

     props.addToBookShelf(manualBook)
          console.log(manualBook);
     setEnteredTitle('');
     setEnteredAuthor('');
 };

          
    return (
        
        <form onSubmit={submitHandler}>
            <div>
            <div>
            <label>Book Title</label>
            <input type='text' onChange={titleChangeHandler} value={enteredTitle}/> 
            </div>
            <div>
            <label>Author</label>
            <input type='text' onChange={authorChangeHandler} value={enteredAuthor}/>
            </div>
            <button type='submit'>Add to BookShelf</button>
        </div>
        </form>
    
    )
}

export default BookForm;
