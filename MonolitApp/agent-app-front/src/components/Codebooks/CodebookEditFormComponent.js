import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const CodebookAdFormComponent = (props) => {

    return (
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <Form noValidate validated={props.validated} id="editCMForm" onSubmit={props.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control required type="hidden" name="id" id="txtID" defaultValue={props.selectedItem.id} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Naziv</Form.Label>
                                <Form.Control required type="text" name="name" id="txtName" defaultValue={props.selectedItem.name} placeholder="Naziv" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="success" id="btnEdit" type="submit">
                                    Izmjeni
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