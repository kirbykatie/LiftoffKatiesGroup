import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from '../BookShelf/BookShelf';

export default function ItemDelete({deletedBooks}) {
    console.log(deletedBooks);
 const [deleteBook, setDeleteBook] = useState([]);

  deleteBook.push(deleteBook);

const deleteClickHandler = () =>{
 const deleteObj = deleteBook.filter(i => i.id !== deletedBooks.id)
 console.log(deleteObj);
 setDeleteBook(deleteObj);
 c
 return deleteObj;
}

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={deleteClickHandler}>
         Delete
         </Button>
     )

 };