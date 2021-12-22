import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MediaCard from "@mui/material/MediaCard";

function List() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/617c50e79548541c29ca6cff/6")
      .then((response) => response.json())
      .then((result) => setAlbum(result))
      .catch((err) => {
        console.error((err) => console.error(err));
      });
  }, []);

  return (
    <div>
      {" "}
      <h1>Your Library</h1>
      <ul>
        {book.map((book) => (
          <div className="listContainer" key={book}>
            <h1>{book.title} </h1>
            <h2>Author: {book.author}</h2>
            <h2>ISBN: {book.isbn}</h2>

            {/* <div className="imageContainer">
              <img src={`imgs/${book.image}`} alt={book.title} />
              <div className="centered">
                {" "}
                <p>Edition: {book.edition} </p>{" "}
              </div>
            </div> */}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
