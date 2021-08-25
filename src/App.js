import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SingleBook from "./components/SingleBook";
import Input from "./components/Input";
import books from "../src/data/books.json";
import BookList from "./components/BookList";
import { Row, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Input />
      <Container>
        <Row>
          {books.map((book) => {
            return <BookList books={<SingleBook book={book} />} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
