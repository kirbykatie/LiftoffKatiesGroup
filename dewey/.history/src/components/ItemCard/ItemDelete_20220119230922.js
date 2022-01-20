import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from './components/BookShelf/BookShelf';

export default function ItemDelete({deletedBook}) {

const [updateList, setUpdateList] = useState([]);
console.log(deletedBook);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
         console.log(deletedBook.id);
         delete(deletedBook.id);
         return List;
     }}>
         Delete
         </Button>
     )

 };