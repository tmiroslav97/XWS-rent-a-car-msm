import React from 'react';
import { history } from '../../index';
import { Row, Col, OverlayTrigger, Tooltip, ListGroup, Card, Container } from 'react-bootstrap'

const CartComponent = (props) => {

    return (
        <Container fluid>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="border-bottom mt-5">Korpa</h3>
                </Col>
            </Row>
        </Container >
    );
}

export default CartComponent;
