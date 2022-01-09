import * as React from "react";
import MediaCard from "../ItemCard/ItemCard";

function List() {
  //const [book, setBook] = useState([]);

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
        {book.map((book) => (
          <MediaCard/>
        ))}
      </ul>
    </div>
  );
}

export default List;
