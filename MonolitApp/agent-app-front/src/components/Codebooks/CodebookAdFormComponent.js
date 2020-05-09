import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const CodebookAdFormComponent = (props) => {

    return (
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <Form noValidate validated={props.validated} id="adCMForm" onSubmit={props.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Naziv</Form.Label>
                                <Form.Control required type="text" name="name" id="txtName" placeholder="Proizvodjac" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="primary" id="btnAdd" type="submit">
                                    Dodaj
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CodebookAdFormComponent;
