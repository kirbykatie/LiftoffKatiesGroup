import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        img src={`imgs/${books.image}`} 
        alt="{books.title}"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {books.title} <br/>
          {books.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {books.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Review</Button>
        <Button size="small">Deletee</Button>
      </CardActions>
    </Card>
  );
}
