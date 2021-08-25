import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import books from "./data/books.json";
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import { Container } from "react-bootstrap";

function App() {
  console.log("Singlebook: ", SingleBook);
  return (
    <div className="App">
      <Container>
        <WarningSign />
        <MyBadge />
        <SingleBook book={books[0]} />
      </Container>

      <BookList books={books} />
    </div>
  );
}

export default App;
