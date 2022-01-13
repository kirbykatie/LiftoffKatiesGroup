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
    </div>
  );
}

export default List;
