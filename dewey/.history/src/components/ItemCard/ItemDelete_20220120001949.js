import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from '../BookShelf/BookShelf';

export default function ItemDelete({deletedBook, deleteBook0}) {
    

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
        console.log(deleteBook(deletedBook.title));

     }}>
         Delete
         </Button>
     )

 };