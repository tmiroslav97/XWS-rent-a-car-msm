import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/user/actions';

const RegPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [validated, setValidated] = useState(false);

    const handleRegister = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                registerUser({
                    email,
                    password,
                    password2,
                    firstName,
                    lastName
                })
            );
            setValidated(false);
        }
    };



    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 3 }} xs={12}>
                    <h2 className="border-bottom">Registracija</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 3 }} xs={12}>
                    <Form noValidate validated={validated} id="logForm" onSubmit={handleRegister}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="formBasicEmail">
                                <Form.Label>E-mail adresa</Form.Label>
                                <Form.Control required type="email" placeholder="E-mail"
                                    onChange={({ currentTarget }) => {
                                        setEmail(currentTarget.value);
                                    }} />
                                <Form.Text className="text-muted">
                                    Nikad necemo prikazivati tvoj e-mail nekome
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Lozinka</Form.Label>
                                <Form.Control required type="password" pattern=".{5,25}" placeholder="Lozinka"
                                    onChange={({ currentTarget }) => {
                                        setPassword(currentTarget.value);
                                    }} />
                                <Form.Control.Feedback type="invalid">
                                    min 5 max 25 karaktera
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formConfirmPassword">
                                <Form.Label>Potvrdi lozinku</Form.Label>
                                <Form.Control required type="password" pattern=".{5,25}" placeholder="Potvrdi lozinku"
                                    onChange={({ currentTarget }) => {
                                        setPassword2(currentTarget.value);
                                    }} />
                                <Form.Control.Feedback type="invalid">
                                    min 5 max 25 karaktera
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label>Ime</Form.Label>
                                <Form.Control required type="text" placeholder="Ime"
                                    onChange={({ currentTarget }) => {
                                        setFirstName(currentTarget.value);
                                    }} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Prezime</Form.Label>
                                <Form.Control required type="text" placeholder="Prezime"
                                    onChange={({ currentTarget }) => {
                                        setLastName(currentTarget.value);
                                    }} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="btnSignUp">
                                <Button variant="primary" id="btnLogin" type="submit">
                                    Registruj se
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegPage;