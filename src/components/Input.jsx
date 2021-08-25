import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
// import books from '../data/books.json'

function Input() {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
       // value={this.target.value}
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
        }}
      />
      <Button variant="outline-secondary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
}
export default Input;
