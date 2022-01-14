import React, {useState} from 'react';

//pass in books from bookshelf
const BookForm = (props) => {
const [enteredTitle, setEnteredTitle] = useState(props.title);
const [enteredAuthor, setEnteredAuthor] = useState('');
const [enteredISBN, setEnteredISBN] = useState('')

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

 const isbnChangeHandler = (event) => {
     setEnteredISBN(event.target.value);
     console.log(enteredISBN);
 }

 const submitHandler = (event) => {
     event.preventDefault();

     const manualBook = {
         id: enteredTitle + 1,
        title: enteredTitle,
        author: enteredAuthor,
        isbn: enteredISBN
     }

     //add manualBook to Book azray 
          console.log(manualBook);
        //   props.addToBookShelf(manualBook);

     setEnteredTitle('');
     setEnteredAuthor('');
     setEnteredISBN(
     )
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
            <div>
            <label>ISBN</label>
            <input type='text' onChange={isbnChangeHandler} value={enteredISBN}/>
            </div>
            <button type='submit'>Add to BookShelf</button>
        </div>
        </form>
    
    )
}

export default BookForm;
