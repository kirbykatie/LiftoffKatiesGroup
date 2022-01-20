import * as React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({book}) {

     return (
         <Button variant="outlined"
          color="error" 
          startIcon={<DeleteIcon />}
         onClick={() => {
             const newList = book
             delete(book.filter(...book));
          }}>
         {/* Delete */}
         </Button>
     )

 };