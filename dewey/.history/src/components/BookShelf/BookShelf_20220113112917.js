import React, {useEffect, useState} from "react";
import BookForm from "../BookForm/BookForm";
import MediaCard from "../ItemCard/ItemCard";

function List() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/61db29cb2675917a628d0fdd/1')
      .then((response) => response.json())
      .then((result) => setBook(result))
      .catch((err) => {
        console.error((err) => console.error(err));
      });
  }, []);
      console.log(book);
      book.map(book=>{
        console.log(book.title);
        console.log(book.author);
      })
      
  return (
    <div>
      <h1>Add a Book Manually to library</h1>
      {book.map(book =>(
        <BookForm
        title={book.title}
        author={book.author}
      ))}
      
      <h1>Your Library</h1>
      <BookForm books={book}/>
      <ul>
        {book.map(book => (
          <MediaCard book={book} />
        ))}
      </ul>
    </div>
  );
}

export default List;
