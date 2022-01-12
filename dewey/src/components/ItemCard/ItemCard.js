import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard( {book}) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        img src={`imgs/${book.image}`} 
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
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    </div>
  );
}
