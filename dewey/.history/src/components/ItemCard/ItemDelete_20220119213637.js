import * as React from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({books}) {

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
         onClick={() => {
             console.log(books);
             const newListArray = [];
             const newList = newListArray.filter(book =>{
                
             })
            
            //  delete(book.filter(...book));
          }}>
         Delete 
         </Button>
     )

 };