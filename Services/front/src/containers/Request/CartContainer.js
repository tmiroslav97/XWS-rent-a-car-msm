import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import SpinnerContainer from '../Common/SpinnerContainer';
import CartComponent from '../../components/Request/CartComponent';

const CartContainer = () => {
    

    return (
        <Container fluid>
            <Row>
                <Col md={12} xs={12}>
                    <CartComponent />
                </Col>
            </Row>
        </Container >
    );
}

export default CartContainer;
