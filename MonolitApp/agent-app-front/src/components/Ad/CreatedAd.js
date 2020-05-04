import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const CreatedAd = (props) => {
   
    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 4 }} xs={12}>
                    <h2 className="border-bottom">Dodavanje oglasa</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form id="createdAdFrom" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Label>Naziv oglasa</Form.Label>
                                    <Form.Control required name="name" type="text" id="txtName" placeholder="Naziv oglasa"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.File>
                                        {/* <Form.Label>Naziv oglasa</Form.Label>
                                        <Form.Control required name="coverPhoto" type="file" id="fileCoverPhoto" placeholder="Naziv oglasa"/> */}
                                        <Form.File.Label>Slika</Form.File.Label>
                                        <Form.File.Input name="coverPhoto" id="fileCoverPhoto" placeholder="Naziv oglasa"/>
                                    </Form.File>

                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Lokacija</Form.Label>
                                    <Form.Control required name="location" id="txtLocation" type="text" placeholder="Lokacija"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Check name="distanceLimitFlag" id="chbDistanceLimitFlag" type="checkbox" label="Da li je ogranicena kilometraza?"  
                                        onChange={props.handleDistanceLimitFlag} />
                                </Form.Group>
                                {props.distanceLimitFlag === "LIMITED" ?
                                    <Form.Group as={Col}>
                                        <Form.Label>Unesi kilometrazu</Form.Label>
                                        <Form.Control name="distanceLimit" id="txtDistanceLimit"  type="text" placeholder="kilometraza"/>
                                    </Form.Group>
                                    : null
                                }
                            </Col>

                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Label>Proizvodjac</Form.Label>
                                    <Form.Control required name="carManufacturer" id="txtCarManufacturer" type="text" placeholder="Proizvodjac"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control required name="carModel" id="txtCarModel" type="text" placeholder="Model"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Tip</Form.Label>
                                    <Form.Control required name="carType" id="txtCarType" type="text" placeholder="Tip"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Godina proizvodnje</Form.Label>
                                    <Form.Control required name="year" id="dateYear" type="date" placeholder="Godina proizvodnje"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Predjeni kilometri</Form.Label>
                                    <Form.Control required name="mileage" id="numMileage" type="number" placeholder="Predjeni kilometri"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Menjac</Form.Label>
                                    <Form.Control required name="gearboxType" id="txtGearboxType" type="text" placeholder="Menjac"/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Label>Tip goriva</Form.Label>
                                    <Form.Control required name="fuelType" id="txtFuelType" type="text" placeholder="Tip goriva"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Broj sedista za decu</Form.Label>
                                    <Form.Control required name="childrenSeatNum" id="numChildrenSeatNum" type="number" pattern=".{0,8}" placeholder="Broj sedista za decu" />
                                    <Form.Control.Feedback type="invalid"> 
                                        min 0 max 8 sedista
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Check name="cdw" id="chbCDW" type="checkbox" label="Da li poseduje CDW?" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Check name="androidFlag" id="chbAndroidFlag" type="checkbox" label="Da li poseduje android uredjaj?"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Check box za biranje vec postojeceg cenovnika</Form.Label>
                                    <Form.Control name="id" id="selectId" placeholder="Cena po danu" as="select" type="text">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Cena po kilometru</Form.Label>
                                    <Form.Control name="pricePerKm" id="numPricePerKm" type="number" placeholder="Cena po kilometru" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Cena po kilometru (CDW)</Form.Label>
                                    <Form.Control name="pricePerKmCDW" id="numPricePerKmCDW" type="number" placeholder="Cena po kilometru (CDW)" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Cena po danu</Form.Label>
                                    <Form.Control name="pricePerDay" id="numPricePerDay" type="number" placeholder="Cena po danu"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Button variant="primary" id="btnCreatedAd" type="submit">
                                        Dodaj
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}
export default CreatedAd;