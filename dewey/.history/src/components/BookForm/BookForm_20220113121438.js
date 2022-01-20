import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState('');

 const titleChangeHandler = () =>{
     console.log(title)
 }

    console.log(title)

    return (
        <div>
        <form>
            <label>
            <input type="text" placeholder="Book Name" value={title} onChange={titleChangeHandler}></input>
            {/* <input type='text' placeholder='Author' value={props.author}></input>
            <input type='text' placeholder='ISBN'></input>
            <button type='submit'>Add Book to Shelf</button> */}
            </label>
        </form>
        </div>
    )
}

export default BookForm;
