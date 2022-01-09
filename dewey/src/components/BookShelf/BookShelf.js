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
    fetch('/Users/katy/Documents/LiftOff/LiftoffKatiesGroup/dewey/public/FakeData.json')
      .then((response) => response.json())
      .then((result) => setBook(result))
      .catch((err) => {
        console.error((err) => console.error(err));
      });
  }, []);

  return (
    <div>
      {" "}
      <h1>Your Library</h1>
      <ul>
        {books.map((book) => (
          <MediaCard/>
        ))}
      </ul>
    </div>
  );
}

export default List;
