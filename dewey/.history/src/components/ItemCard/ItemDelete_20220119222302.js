import React, {useState} from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({deletedBook}) {

const [updateList, setUpdateList] = useState([]);
console.log(delete);
console.log(book.title);
     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
         delete book.title
     }}>
         Delete
         </Button>
     )

 };