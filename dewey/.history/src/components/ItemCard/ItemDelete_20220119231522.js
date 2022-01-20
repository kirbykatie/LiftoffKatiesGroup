import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from '../BookShelf/BookShelf';

export default function ItemDelete({deletedBook, setBooks}) {

const [updateList, setUpdateList] = useState([]);
console.log(deletedBook);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
         console.log(deletedBook.id);
         const newList = delete(deletedBook.id);
            setBooks(newList);
         return List;
     }}>
         Delete
         </Button>
     )

 };