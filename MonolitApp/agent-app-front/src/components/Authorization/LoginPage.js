import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/user/actions';


const LoginPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [validated, setValidated] = useState(false);

    const handleLogin = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                loginUser({
                    username,
                    password
                })
            );
            setValidated(false);
        }
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 3, offset: 3 }} xs={12}>
                    <h2 className="border-bottom">Prijava</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 3 }} xs={12}>
                    <Form noValidate validated={validated} id="logForm" onSubmit={handleLogin}>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control required type="email" id="txtEmail" placeholder="E-mail"
                                    onChange={({ currentTarget }) => {
                                        setUsername(currentTarget.value);
                                    }} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Lozinka</Form.Label>
                                <Form.Control required type="password" id="txtPass" pattern=".{5,25}" placeholder="Password"
                                    onChange={({ currentTarget }) => {
                                        setPassword(currentTarget.value);
                                    }} />
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
