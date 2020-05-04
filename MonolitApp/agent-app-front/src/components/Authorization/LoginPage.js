import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const LoginPage = (props) => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 3, offset: 3 }} xs={12}>
                    <h2 className="border-bottom">Prijava</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 3 }} xs={12}>
                    <Form noValidate validated={props.validated} id="logForm" onSubmit={props.onSubmit}>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control required type="email" name="username" id="txtEmail" placeholder="E-mail" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Lozinka</Form.Label>
                                <Form.Control required type="password" name="password" id="txtPass" pattern=".{5,25}" placeholder="Lozinka" />
                                <Form.Control.Feedback type="invalid">
                                    min 5 max 25 karaktera
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Button variant="primary" id="btnLogin" type="submit">
                                    Prijavi se
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
