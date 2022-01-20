import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from '../BookShelf/BookShelf';

export default function ItemDelete({deletedBook}) {

const [updateList, setUpdateList] = useState(deletedBook);
console.log(deletedBook);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
         deletedBook.filter(book =>{
             console.log(book);
         })
     }}>
         Delete
         </Button>
     )

 };