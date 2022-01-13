import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState('');

    console.log(title)

    return (
        <form>
            <label>
            <input type="text" placeholder="Book Name" value=onChange={(e) => setTitle(e.target.value)}></input>
            {/* <input type='text' placeholder='Author' value={props.author}></input>
            <input type='text' placeholder='ISBN'></input>
            <button type='submit'>Add Book to Shelf</button> */}
            </label>
        </form>
    )
}

export default BookForm
