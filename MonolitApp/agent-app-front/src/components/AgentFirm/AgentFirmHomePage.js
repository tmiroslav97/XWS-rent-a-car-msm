import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

const AgentFirmHomePage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <center><h1>AgentFirm Homepage</h1></center>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default AgentFirmHomePage;