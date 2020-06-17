import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import EndUserRequestsComponent from '../../components/Request/EndUserRequestsComponent';
import SpinnerContainer from '../Common/SpinnerContainer';

const EndUserRequestsContainer = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <EndUserRequestsComponent pendingRequests={[]} status="pending" />
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={12}>
                    <EndUserRequestsComponent pendingRequests={[]} status="paid" />
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={12}>
                    <EndUserRequestsComponent pendingRequests={[]} status="canceled" />
                </Col>
            </Row>
        </Container >
    );
}

export default EndUserRequestsContainer;
