import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const RatingComponent = (props) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <Form noValidate validated={props.validated} onSubmit={props.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Ocena</Form.Label>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={50}
                                    half={false}
                                    color2={"#ffd700"}
                                />
                              
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="primary" type="submit">
                                    Dodaj
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RatingComponent;
