import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import RangeSlider from 'react-slider'
import Nouislider from 'react-nouislider';
import 'nouislider/nouislider.css';
import 'nouislider/src/nouislider.tooltips.less';
import 'nouislider/src/nouislider.pips.less';


import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const OrdinarySearchComponent = (props) => {
    console.log(props);

    return (


        <Card >
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicLokacija">
                                <Form.Label>Lokacija</Form.Label>
                                <Form.Control type="text" name="location" onChange={props.hanleLocation} placeholder="Unesite naziv lokacije..." />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Izaberite datum i vrijeme preuzimanja</Form.Label>
                                <Form.Control type="datetime-local"
                                    selected={props.startDate}
                                    onChange={props.handleChange1}
                                />


                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Izaberite datum i vrijeme povratka</Form.Label>
                                <Form.Control type="datetime-local"
                                    selected={props.endDate}
                                    onChange={props.handleChange2}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    <Button variant="outline-primary" onClick={() => props.setToggled(!props.toggleAdvancedSearch)}>
                        Napredna pretraga
                    </Button>{' '}
                    <br />
                    <br />
                    {props.toggleAdvancedSearch &&
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Proizvodjac</Form.Label>
                                        <Form.Control as="select" required name="carManufacturer" id="txtCarManufacturer" placeholder="Proizvodjac"
                                            onChange={props.handleCarManufacturers} >
                                            {props.getCarManufacturers()}
                                        </Form.Control>
                                        {/* <Form.Control required name="carManufacturer" id="txtCarManufacturer" type="combobox" placeholder="Proizvodjac" /> */}
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..." required name="carModel" id="txtCarModel" placeholder="Model">
                                            {props.getCarModels()}  
                                        </Form.Control>
                                        {/* <Form.Control required name="carModel" id="txtCarModel" type="text" placeholder="Model" /> */}
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Tip</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..." required name="carType" id="txtCarType" placeholder="Tip" >
                                            {props.getCarTypes()}
                                        </Form.Control>
                                        {/* <Form.Control required name="carType" id="txtCarType" type="text" placeholder="Tip" /> */}
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Menjac</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..." required name="gearboxType" id="txtGearboxType" type="text" placeholder="Menjac" >
                                            {props.getGearboxTypes()}   
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Tip goriva</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..." required name="fuelType" id="txtFuelType" type="text" placeholder="Tip goriva" >
                                            {props.getFuelTypes()}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Predjeni kilometri</Form.Label>
                                        <Form.Control required name="mileage" id="numMileage" type="number" onChange={props.handleKm1} placeholder="Predjeni kilometri" defaultValue="0" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Planirana kilometraza</Form.Label>
                                        <Form.Control required name="mileageKM" id="numMileageKM" type="number" onChange={props.handleKm2} placeholder="Predjeni kilometri" defaultValue="0" />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Broj sedista za decu</Form.Label>
                                        <Form.Control required name="childrenSeatNum" id="numChildrenSeatNum" type="number" onChange={props.handleSeat} pattern=".{0,8}" placeholder="Broj sedista za decu" defaultValue="3" />
                                        <Form.Control.Feedback type="invalid">
                                            min 0 max 8 sedista
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Unesi opseg cijene</Form.Label>
                                        <br />
                                        <br />
                                        <br />
                                        <Nouislider
                                            range={{ min: 0, max: 10000 }}
                                            start={[props.lowValue, props.highValue]}
                                            connect={true}
                                            onChange={props.handleChangePrice}
                                            tooltips />

                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Check name="cdw" id="chbCDW" type="checkbox" label="Da li postoji opcija kupovine Collision Damage Waiver protekcije?" onChange={props.handleCDW} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    }
                    <br />

                    <Button variant="primary" type="submit">
                        Pretrazi
                            </Button>
                </Form>
            </Card.Body>
        </Card>

    );
}

export default OrdinarySearchComponent;




