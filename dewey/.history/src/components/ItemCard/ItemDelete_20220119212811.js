import * as React from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({book}) {

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
         onClick={() => {
             console.log(book)
             const books = [];
             const newList = books.filter(book)
             console.log(newList);
            //  delete(book.filter(...book));
          }}>
         {/* Delete */}
         </Button>
     )

 };