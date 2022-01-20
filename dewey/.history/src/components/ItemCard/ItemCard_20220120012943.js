import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemDelete from './ItemDelete';

export default function MediaCard( {book, handleDelete}) {
  console.log(book);
  return (
     <div>
     <Card sx={{ maxWidth: 345 }}>
       <CardMedia
         component="img"
         height="140"
         img src={`Assests/${book.image}`} 
         alt="{book.title}"
       />
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
           {book.title} <br/>
           {book.author}
         </Typography>
       <Typography variant="body2" color="text.secondary">
           {book.summary}
       </Typography>
       </CardContent>
       <CardActions>
         <Button size="small">Review</Button>
         <ItemDelete deletedBooks={book}/> 
       </CardActions>
     </Card>
     
    </div>
  )
  
}
