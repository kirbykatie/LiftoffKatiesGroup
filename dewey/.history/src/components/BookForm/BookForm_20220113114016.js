import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState(props.title);

const titleChange = event => {
    setTitle(event.target.value);
}

    console.log(title)

    return (
        <form>
            <input type='text' placeholder='Book Name' value={props.title} onChange={titleChange}></input>
            <input type='text' placeholder='Author' value={props.author}></input>
            <input type='text' placeholder='ISBN'></input>
            <button type='submit'>Add Book to Shelf</button>
        </form>
    )
}

export default BookForm
