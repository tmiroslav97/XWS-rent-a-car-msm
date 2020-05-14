import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image } from 'react-bootstrap';

const CreateAd = (props) => {

    return (
        <Container>
            {/* <Row>
                <Col md={{ span: 5, offset: 4 }} xs={12}>
                    <h2 className="border-bottom">Dodavanje oglasa</h2>
                </Col>
            </Row> */}
            <Row>
                <Col md={{ offset: 1 }} xs={12} style={{ paddingBottom: '10px' }}>
                    <ButtonToolbar>
                        {/* <ButtonGroup className="mr-2">
                            <Button onClick={props.onButton6}>Nazad</Button>
                        </ButtonGroup> */}
                        <ButtonGroup aria-label="Basic example" className="mr-2">
                            <Button variant="secondary" onClick={props.onButton1}>1. Osnovne informacije </Button>
                            <Button variant="secondary" onClick={props.onButton2}>2. Dodatne informacije </Button>
                            <Button variant="secondary" onClick={props.onButton3}>3. Cena</Button>
                            <Button variant="secondary" onClick={props.onButton4}>4. Dostupnost</Button>
                            <Button variant="secondary" onClick={props.onButton5}>5. Slike</Button>

                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Button onClick={props.onButton6}>Dodaj</Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Form id="createAdFrom" onSubmit={props.onSubmit} noValidate validated={props.validated}>

                        {props.stepLabel === 3 ?
                            <Form.Row>
                                <Col>

                                    <Form.Group as={Col}>
                                        <Form.Label>Check box za biranje vec postojeceg cenovnika</Form.Label>
                                        <Form.Control name="id" id="selectId" placeholder="Cena po danu" as="select" type="text" >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    {props.cdw ?
                                        <Form.Group as={Col}>
                                            <Form.Label>Cena po kilometru (CDW)</Form.Label>
                                            <Form.Control name="pricePerKmCDW" id="numPricePerKmCDW" type="number" placeholder="Cena po kilometru (CDW)" defaultValue="12" />
                                        </Form.Group>
                                        :
                                        <Form.Group as={Col}>
                                            <Form.Label>Cena po kilometru</Form.Label>
                                            <Form.Control name="pricePerKm" id="numPricePerKm" type="number" placeholder="Cena po kilometru" defaultValue="12" />
                                        </Form.Group>
                                    }

                                    <Form.Group as={Col}>
                                        <Form.Label>Cena po danu</Form.Label>
                                        <Form.Control name="pricePerDay" id="numPricePerDay" type="number" placeholder="Cena po danu" defaultValue="12" />
                                    </Form.Group>

                                </Col>
                            </Form.Row>


                            : null
                        }
                        {props.stepLabel === 4 ?
                            <Form.Row>
                                <Col>

                                    <Form.Group as={Col}>
                                        <Form.Label>Dostupnost</Form.Label>



                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        }
                        {props.stepLabel === 5 ?
                            <Form.Row>
                                <Col>

                                    <Form.Group as={Col}>
                                        <Form.Label>Dodaj sliku</Form.Label>

                                        <Form.File name="coverPhoto" id="fileCoverPhoto" placeholder="Slike" label={props.coverPhotoName}
                                            onChange={props.onPhotoChange} custom
                                        >
                                        </Form.File>


                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        }
                        {props.stepLabel === 6 ?
                            <Form.Row>
                                <Col>


                                    <Form.Group as={Col}>
                                        <Button variant="primary" id="btnCreatedAd" type="submit">
                                            Dodaj
                                        </Button>
                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}
export default CreateAd;