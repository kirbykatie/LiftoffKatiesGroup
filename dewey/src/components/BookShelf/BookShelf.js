import React, {useEffect, useState} from 'react';
import MediaCard from "../ItemCard/ItemCard";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function List() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/61db29cb2675917a628d0fdd/1")
      .then(response => response.json())
      .then(result => setBook(result))
      .catch(err =>{ console.error(err => console.error(err))}); 
    }, []);

  return (
    <div>
      <Container maxwidth="sm">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid container item spacing={2}>
      
    
        {book.map(book => (
          <MediaCard book={book} />
        ))}
    
      </Grid>
      </Grid>
      </Container>

      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
          }
      };

      req.open("PUT", "https://api.jsonbin.io/v3/b/61db29cb2675917a628d0fdd/1>", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-Master-Key", "$2b$10$/XJZaP2..00.uopLhP97xeoEIvOv4ReDDGram2cdcML7i6Teyakoy");
      req.send("title": {new.title});
      req.send("author": {new.title});
      req.send("isbn": {new.isbn});

    </div>
  );
}

export default List;
