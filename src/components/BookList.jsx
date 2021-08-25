import React from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
class BookList extends Component {
  state = {
    searchInput: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <InputGroup className="mb-3 w-50 form">
            <FormControl
              placeholder="Search Book by title..."
              aria-describedby="basic-addon2"
              value={this.state.searchInput}
              onChange={(e) => this.setState({ searchInput: e.target.value })}
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Row>
        <Row className="main">
          {this.props.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
            )
            .map((book) => (
              <Col sm={6} md={4} lg={3} className="mt-3">
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
