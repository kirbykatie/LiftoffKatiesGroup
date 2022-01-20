import React, {useState} from 'react';

//pass in books from bookshelf
function BookForm(props) {

const [title, setTitle] = useState('');

 const titleChangeHandler = () =>{
     console.log('title');
 }

    console.log(title)

    return (
        
        <form>
            <div>
            <div>
            <label></label>
            <input type="text" onChange={titleChangeHandler()}></input>
            </div>
            

            

            <div>
            <button type='submit'>Add Book to Shelf</button> 
            </div>
        
        </div>
        </form>
    
    )
}

export default BookForm;
