import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from '../BookShelf/BookShelf';

export default function ItemDelete({deletedBooks, handleDelete}) {
    console.log(deletedBooks);
 const [deleteBook, setDeleteBook] = useState(deletedBooks);

//   deleteBook.push(deleteBook);

const deleteClickHandler = () =>{

//  const deleteObj = deletedBooks.filter(i => i.id !== deletedBooks.id)
//  console.log(deleteObj);
//  setDeleteBook(deleteObj);
//  console.log(deleteBook);
//  return deleteObj;
}

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() =>handleDelete}>
         Delete
         </Button>
     )

 };