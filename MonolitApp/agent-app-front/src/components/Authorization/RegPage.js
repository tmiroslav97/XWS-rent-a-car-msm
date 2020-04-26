import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../index';
import { registerUser } from '../../store/user/actions';
import { tokenSelector } from '../../store/user/selectors';

const RegPage = () => {
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    if (token != null) {
        history.push('/');
    }

    const handleRegister = () => {
        dispatch(
            registerUser({
                email,
                password,
                password2,
                firstName,
                lastName
            })
        );
    };


    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 3 }} xs={12}>
                    <h2 className="border-bottom">Registration</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 3 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="formBasicEmail">
                                <Form.Label>E-mail address</Form.Label>
                                <Form.Control type="email" placeholder="E-mail"
                                    onChange={({ currentTarget }) => {
                                        setEmail(currentTarget.value);
                                    }} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    onChange={({ currentTarget }) => {
                                        setPassword(currentTarget.value);
                                    }} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formConfirmPassword">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm your password"
                                    onChange={({ currentTarget }) => {
                                        setPassword2(currentTarget.value);
                                    }} />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name"
                                    onChange={({ currentTarget }) => {
                                        setFirstName(currentTarget.value);
                                    }} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name"
                                    onChange={({ currentTarget }) => {
                                        setLastName(currentTarget.value);
                                    }} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" className="mb-4" onClick={handleRegister}>
                            Sign-up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegPage;