import React from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';

const Form1CreateAd = (props) => {
    return (
        <Container>
            <Form id="step1" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                <Form.Row>
                    <Col>
                        <Form.Group as={Col}>
                            <Form.Label>Naziv oglasa</Form.Label>
                            <Form.Control required name="name" type="text" id="txtName" placeholder="Naziv oglasa" defaultValue="oglas" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Proizvodjac</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." required name="carManufacturer" id="txtCarManufacturer" placeholder="Proizvodjac" >
                                <option>Choose...</option>
                                <option>sd...</option>
                            </Form.Control>
                            {/* <Form.Control required name="carManufacturer" id="txtCarManufacturer" type="combobox" placeholder="Proizvodjac" /> */}
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Model</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." required name="carModel" id="txtCarModel" placeholder="Model">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            {/* <Form.Control required name="carModel" id="txtCarModel" type="text" placeholder="Model" /> */}
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Tip</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." required name="carType" id="txtCarType" placeholder="Tip" >
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            {/* <Form.Control required name="carType" id="txtCarType" type="text" placeholder="Tip" /> */}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col}>
                            <Form.Label>Mesto</Form.Label>
                            <Form.Control required name="location" id="txtLocation" type="text" placeholder="Lokacija" defaultValue="lokacija" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Godina proizvodnje</Form.Label>
                            <Form.Control required name="year" id="dateYear" type="date" placeholder="Godina proizvodnje" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Predjeni kilometri</Form.Label>
                            <Form.Control required name="mileage" id="numMileage" type="number" placeholder="Predjeni kilometri" defaultValue="34" />
                        </Form.Group>


                        <Form.Group as={Col} >
                            <Form.Check name="distanceLimitFlag" id="chbDistanceLimitFlag" type="checkbox" label="Da li je ogranicena kilometraza?"
                                onChange={props.handleDistanceLimitFlag} />
                        </Form.Group>
                        {props.distanceLimitFlag ?
                            <Form.Group as={Col}>
                                <Form.Label>Unesi kilometrazu</Form.Label>
                                <Form.Control name="distanceLimit" id="txtDistanceLimit" type="text" placeholder="kilometraza" defaultValue="123" />
                            </Form.Group>
                            : null
                        }
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group as={Col} >
                            <Button className="float-right" variant="primary" id="btnForm1CreateAd" type="submit">
                                Dalje
                            </Button>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    );
}
export default Form1CreateAd;
