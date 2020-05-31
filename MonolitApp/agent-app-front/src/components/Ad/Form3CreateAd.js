import React from 'react';
import { Form, Col, Container, Button, InputGroup, Accordion, Card, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Form3CreateAd = (props) => {
    return (
        <Container>
            <Form id="step3" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                <Form.Row>
                    <Col>
                        <ButtonGroup variant="outline-primary" >
                            <Button onClick={props.handleActiveToggle0}>Izaberi cenovnik</Button>
                            <Button onClick={props.handleActiveToggle1}>Dodaj cenovnik</Button>
                        </ButtonGroup>

                        {props.activeToggle === 0 ?
                            <Card>
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
                            </Card>
                            : null
                        }
                        {props.activeToggle === 1 ?
                            <Card>
                                <Card.Body>
                                    <Form.Group as={Col}>
                                        <Form.Label>Cena po danu</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>RSD</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control name="pricePerDay" required id="numPricePerDay" type="number" placeholder="Cena po danu" />
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
                                                    <InputGroup.Text>RSD</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control name="pricePerKm" required id="numPricePerKm"
                                                    type="number" placeholder="Cena po kilometru" onChange={props.handlePricePerKm} />
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
                                                    <InputGroup.Text>RSD</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control name="pricePerKmCDW" required id="numPricePerKmCDW"
                                                    type="number" placeholder="Cena po kilometru (CDW)" onChange={props.handlePricePerKmCDW} />
                                                <InputGroup.Append>
                                                    <InputGroup.Text>.00</InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Form.Group>
                                        : null
                                    }
                                </Card.Body>
                            </Card>
                            : null
                        }

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
