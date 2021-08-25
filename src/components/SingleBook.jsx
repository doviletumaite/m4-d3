import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap'
import books from '../data/books.json'

 function SingleBook() {
    console.log(books)



    return  (
        <Container>
            <Row> {
                books.map(book => {
                    return     <Col sm={6} md={4} lg={3} xl={2} className="mt-3">
                    <Card className="book-cover">
                    < Card.Img variant="top" src={book.img}  />
                    <Card.Body>
                        <Card.Title>
                            {book.title.substring(0,20)}
                        </Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                }
                )}
            </Row>
        </Container>
    
    )
}
export default SingleBook