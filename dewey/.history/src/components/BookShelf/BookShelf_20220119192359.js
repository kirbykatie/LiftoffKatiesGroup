import React, {useEffect, useState} from "react";
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

  return (
    <div>
      
      <h1>Your Library</h1>
      <ul>
        {book.map(book => (
          <MediaCard book={book} key={book.}/>
        ))}
      </ul>
    </div>
  );
}

export default List;
