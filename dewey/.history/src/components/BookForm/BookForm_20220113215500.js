import React, {useState} from 'react';

//pass in books from bookshelf
const BookForm = (props) => {
    console.log(props);
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAuthor, setEnteredAuthor] = useState('');
const [enteredISBN, setEnteredISBN] = useState('');

const [validTitle, setValidTitle]= useState(true);

.map(books =>{
    console.log(books);
})
const [books, setBooks] = useState(props);
console.log(books);
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
 
 if (enteredTitle.trim() === ''){
     setValidTitle(false);
     return;
 }
    setValidTitle(true);

     const manualBook = {
         id: enteredTitle + 1,
        title: enteredTitle,
        author: enteredAuthor,
        isbn: enteredISBN
     }

     //add manualBook to Book azray 
          console.log(manualBook);


     setEnteredTitle('');
     setEnteredAuthor('');
     setEnteredISBN('');
     
 };

          
    return (
        
        <form onSubmit={submitHandler}>
            <div>
            <div>
            <label>Book Title</label>
            <input type='text' onChange={titleChangeHandler} value={enteredTitle}/> 
            </div>
            {!validTitle && <p>Title Must Not Be Empty</p>}
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
