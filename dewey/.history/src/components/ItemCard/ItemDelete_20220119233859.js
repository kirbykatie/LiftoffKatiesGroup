import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BookSharp } from "@material-ui/icons";
// import DeleteIcon from '@mui/icons-material/Delete';
import List from '../BookShelf/BookShelf';

export default function ItemDelete({deletedBook}) {

const [updateList, setUpdateList] = useState([]);
console.log(deletedBook);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
        const newList = delete(deletedBook.id);
         console.log(newList);
         setUpdateList
            return
     }}>
         Delete
         </Button>
     )

 };