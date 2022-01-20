import React, {useState} from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({deletedBook}) {

const [updateList, setUpdateList] = useState([]);
console.log(deletedBook);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
     onClick={() => {
         delete deletedBook
     }}>
         Delete
         </Button>
     )

 };