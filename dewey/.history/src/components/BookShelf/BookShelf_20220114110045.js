import React, {useEffect, useState} from "react";
import NewManualBook from "../BookForm/NewManualBook";
import MediaCard from "../ItemCard/ItemCard";

function List() {
  const [book, setBook] = useState([]);
  console.log(book);

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
      
      const addToCollection = 
  return (
    <div>
      <h1>Add a Book Manually to library</h1>

        <NewManualBook
        book={book}        
        />
    
      
      <h1>Your Library</h1>
      <ul>
        {book.map(book => (
          <MediaCard book={book} key={book.title + 1} />
        ))}
      </ul>
    </div>
  );
}

export default List;
