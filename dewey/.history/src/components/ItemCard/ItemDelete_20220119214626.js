import * as React from "react";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemDelete({books}) {

const [updateList, setUpdateList] = useState([]);

     return (
         <Button variant="outlined"
          color="error" 
        //   startIcon={<DeleteIcon />}
         onClick={() => {
             console.log(books);
             const newListArray = [];
             console.log(newListArray);
             const currentList = ((prevBooks) => {
                 console.log(prevBooks);
             })
             console.log(currentList);
             const newList = books.filter(book =>{
                console.log(book);
             })
            
            //  delete(book.filter(...book));
          }}>
         Delete 
         </Button>
     )

 };