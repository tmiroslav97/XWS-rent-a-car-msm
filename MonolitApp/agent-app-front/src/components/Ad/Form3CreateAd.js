import React from 'react';
import { Form, Col, Container, Button, InputGroup, Accordion, Card } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Form3CreateAd = (props) => {
    return (
        <Container>
            <Form id="step3" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                <Form.Row>
                    <Col >
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Izaberi cenovnik
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form.Group as={Col}>
                                            <Form.Label>Check box za biranje vec postojeceg cenovnika</Form.Label>
                                            <Form.Control name="id" id="selectId" placeholder="Cena po danu" as="select" type="text" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Dodaj novi cenovnik
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form.Group as={Col}>
                                            <Form.Label>Cena po danu</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>din</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control name="pricePerDay" id="numPricePerDay" type="number" placeholder="Cena po danu" defaultValue="12" />
                                                <InputGroup.Append>
                                                    <InputGroup.Text>.00</InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>

                                        </Form.Group>
                                        {props.distanceLimitFlag ?
                                            <Form.Group as={Col}>
                                                <Form.Label>Cena po kilometru</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>din</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control name="pricePerKm" id="numPricePerKm" type="number" placeholder="Cena po kilometru" defaultValue="12" />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Form.Group>
                                            : null
                                        }
                                        {props.cdw ?
                                            <Form.Group as={Col}>
                                                <Form.Label>Cena po kilometru (CDW)</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>din</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control name="pricePerKmCDW" id="numPricePerKmCDW" type="number" placeholder="Cena po kilometru (CDW)" defaultValue="12" />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Form.Group>
                                            : null
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group >
                            {props.activeStep === props.steps.length ? (
                                <div >
                                    <Typography>
                                        Svi koraci su zavrseni. Uspesno ste dodadali oglas!
                                    </Typography>

                                    <Button onClick={props.handleReset}>
                                        Reset
                                    </Button>
                                </div>
                            ) : (
                                    <div >

                                        <Button disabled={props.activeStep === 0} onClick={props.handleBack} 
                                        className="float-left">
                                            Nazad
                                        </Button>

                                        {props.isStepOptional(props.activeStep) && (
                                            <Button
                                                variant="contained"
                                                onClick={props.handleSkip}
                                                className="float-right"
                                            >
                                                Preskoci
                                            </Button>
                                        )}

                                        <Button type="submit" className="float-right">
                                            Dalje
                                        </Button>

                                    </div>
                                )}
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    );
}
export default Form3CreateAd;
