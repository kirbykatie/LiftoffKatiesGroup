import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState('');

 const titleChangeHandler = () =>{
     console.log(titleChangeHandler);
 }

    console.log(title)

    return (
        
        <form>
            <div>
            <label>
            <input type="text" onChange={titleChangeHandler()}></input>
            </label>
            </div>

            <div>
            <label>
            <input type='text' placeholder='Author' value={props.author}></input>
            </label>
            
            <input type='text' placeholder='ISBN'></input>
            <button type='submit'>Add Book to Shelf</button> 
            </label>
            </div>
        </form>
    
    )
}

export default BookForm;
