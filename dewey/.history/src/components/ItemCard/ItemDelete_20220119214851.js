import React, {useState} from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({books}) {

const [updateList, setUpdateList] = useState([]);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
         onClick={() => {updateList.filter(books => {

         })
        
            //  delete(book.filter(...book));
          }}>
         Delete 
         </Button>
     )

 };