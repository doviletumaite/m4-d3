import React from "react";
import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={(e) => this.setState({ selected: !this.state.selected })}
        style={{
          background: this.state.selected ? "black" : "white",
          color: this.state.selected ? "white" : "black",
          border: this.state.selected ? "red solid 2px" : "none",
        }}
        className="book-cover"
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title.substring(0, 25)}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
