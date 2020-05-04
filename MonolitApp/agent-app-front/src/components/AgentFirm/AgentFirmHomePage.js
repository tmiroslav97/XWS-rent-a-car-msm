import React from 'react';
import { Row, Col, Container, Button} from 'react-bootstrap';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

const AgentFirmHomePage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <center><h1>AgentFirm Homepage</h1></center>
                    <Link to="/createAd">Dodaj oglas</Link>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default AgentFirmHomePage;