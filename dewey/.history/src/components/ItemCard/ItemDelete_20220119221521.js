import React, {useState} from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({book}) {

const [updateList, setUpdateList] = useState([]);
console.log(book);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
         delete object.book
     }}>
         Delete
         </Button>
     )

 };