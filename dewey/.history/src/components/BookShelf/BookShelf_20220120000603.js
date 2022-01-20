import React, {useEffect, useState} from "react";
import NewManualBook from "../BookForm/NewManualBook";
import MediaCard from "../ItemCard/ItemCard";

function List() {
  const [book, setBook] = useState([]);
  console.log(book);

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/61db29cb2675917a628d0fdd/2')
      .then((response) => response.json())
      .then((result) => setBook(result))
      .catch((err) => {
       console.log((err) => console.error(err));
      });
  }, []);

  const deleteBook = () =>{
  book.filter(deletedBook =>{
    console.log(deletedBook);
  })
}
//   let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("PUT", "https://api.jsonbin.io/v3/b/61db29cb2675917a628d0fdd/2", true);
// req.setRequestHeader("Content-Type", "application/json");
// req.setRequestHeader("X-Master-Key", "$2b$10$/XJZaP2..00.uopLhP97xeoEIvOv4ReDDGram2cdcML7i6Teyakoy");
// req.send('{"title": {book.title}}');
// req.send('{"author": {book.author}}');
// req.send('{"isbn": {book.isbn}}');

      console.log(book);
      book.map(book=>{
        console.log(book.title);
        console.log(book.author);
      })
      
  return (
    <div>
      <h1>Add a Book Manually to library</h1>

        <NewManualBook
        books={book}   
        setBooks={setBook}     
        />
    
      
      <h1>Your Library</h1>
      <ul>
        {book.map(book => (
          <div>
          <MediaCard book={book} key={book.title + 1} deleteBook={deletedBook}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
