import React from 'react';
import { history } from '../../index';
import { Row, Col, OverlayTrigger, Tooltip, ListGroup, Card, Container, Form, Button } from 'react-bootstrap'

const CartComponent = (props) => {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={6} xs={12}>
                    <h3 className="border-bottom mt-5">Korpa</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6} xs={12}>
                    {
                        [...props.cart.keys()].map((item, idx) => {
                            return (
                                <Card border="secondary" key={idx} className="mt-2">
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    {
                                                        props.cart.get(item).ads.length > 1 ?
                                                            <ListGroup.Item>
                                                                <Form.Group >
                                                                    <Form.Check type="checkbox" defaultChecked={props.cart.get(item).bundle} onClick={(e) => { props.handleBundle(e, item) }} label="Kreiraj zahtjev u bundle" />
                                                                </Form.Group>
                                                            </ListGroup.Item> : null
                                                    }
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Naziv oglasa:</ListGroup.Item>
                                                    {
                                                        props.cart.get(item).ads.map((ad, idx) => {
                                                            return (
                                                                <OverlayTrigger key={idx} overlay={<Tooltip id="tooltip-disabled">Klikni za detaljno</Tooltip>}>
                                                                    <span className="d-inline-block">
                                                                        <ListGroup.Item action onClick={() => { history.push('/ad-detail-view/' + ad.id); }}>{ad.adName}</ListGroup.Item>
                                                                    </span>
                                                                </OverlayTrigger>
                                                            );
                                                        })
                                                    }
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            );
                        })
                    }
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col md={6} xs={12}>
                    <Form noValidate validated={props.validated} id="cartForm" onSubmit={props.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Izaberite datum i vrijeme pocetka rentiranja</Form.Label>
                                <Form.Control type="datetime-local" required name="startDateTime"
                                    min={props.getCurrentDate()}
                                    onChange={props.handleChange1}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row >
                            <Form.Group as={Col}>
                                <Form.Label>Izaberite datum i vrijeme zavrsetka rentiranja</Form.Label>
                                <Form.Control type="datetime-local" required name="startDateTime"
                                    min={props.getCurrentDate()}
                                    onChange={props.handleChange1}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Button variant="primary" id="btnLogin" type="submit">
                                    Kreiraj zahtjev
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}

export default CartComponent;
