import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Col sm={6} md={4} lg={3} className="mt-3">
      {props.books}
    </Col>
  );
};

export default BookList;
