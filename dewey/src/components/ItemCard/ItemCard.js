import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard( {apiData}) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        img src={`imgs/${apiData.image}`} 
        alt="{book.title}"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {apiData.title} <br/>
          {apiData.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apiData.summary}
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
