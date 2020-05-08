import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

const AdminHomePage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <center><h1>Admin Homepage</h1></center>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default AdminHomePage;