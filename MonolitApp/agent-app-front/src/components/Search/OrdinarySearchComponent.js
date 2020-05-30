import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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

const OrdinarySearchComponent = (props) => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [toggleAdvancedSearch, setToggled] = useState(false);

    return (
        
        <Container>
            <br />
            <Row>
                <Col>
                    <Card >    
                        <Card.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicLokacija">
                                        <Form.Label>Lokacija</Form.Label>
                                        <Form.Control type="text" placeholder="Unesite naziv lokacije..." />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicLokacija">
                                        <Form.Label>Datum od</Form.Label>
                                        <Form.Control type="date"  />
                                    </Form.Group>
                                    {/* <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Izaberite datum</Form.Label>
                                        <DateRangePicker
                                            startDate={startDate}
                                            endDate={endDate}
                                            onStartDateChange={setStartDate}
                                            onEndDateChange={setEndDate}
                                            minimumDate={new Date()}
                                            minimumLength={1}
                                            format='dd MMM yyyy'
                                            locale={enGB}
                                        
                                            >
                                            {({ startDateInputProps, endDateInputProps, focus }) => (
                                                <div className='date-range'>
                                                <input
                                                    className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                                    {...startDateInputProps}
                                                    placeholder='Pocetak datuma'
                                                />
                                                <span className='date-range_arrow' />
                                                <input
                                                    className={'input' + (focus === END_DATE ? ' -focused' : '')}
                                                    {...endDateInputProps}
                                                    placeholder='Kraj datuma'
                                                />
                                                </div>
                                            )}
                                        </DateRangePicker>
                                    </Form.Group> */}
                                </Col>
                            </Row>
                            <br />
                            <Button variant="outline-primary" onClick={() => setToggled(!toggleAdvancedSearch)}>
                                Napredna pretraga 
                            </Button>{' '}
                            <br />
                            <br />
                        { toggleAdvancedSearch &&
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Proizvodjac</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." required name="carManufacturer" id="txtCarManufacturer" placeholder="Proizvodjac" >
                                                <option>Choose...</option>
                                                <option>sd...</option>
                                            </Form.Control>
                                            {/* <Form.Control required name="carManufacturer" id="txtCarManufacturer" type="combobox" placeholder="Proizvodjac" /> */}
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Model</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." required name="carModel" id="txtCarModel" placeholder="Model">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                            {/* <Form.Control required name="carModel" id="txtCarModel" type="text" placeholder="Model" /> */}
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Tip</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." required name="carType" id="txtCarType" placeholder="Tip" >
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                            {/* <Form.Control required name="carType" id="txtCarType" type="text" placeholder="Tip" /> */}
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Menjac</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." required name="gearboxType" id="txtGearboxType" type="text" placeholder="Menjac" >
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Tip goriva</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose..." required name="fuelType" id="txtFuelType" type="text" placeholder="Tip goriva" >
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Predjeni kilometri</Form.Label>
                                            <Form.Control required name="mileage" id="numMileage" type="number" placeholder="Predjeni kilometri" defaultValue="34" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Planirana kilometraza</Form.Label>
                                            <Form.Control required name="mileageKM" id="numMileageKM" type="number" placeholder="Predjeni kilometri" defaultValue="34" />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Broj sedista za decu</Form.Label>
                                            <Form.Control required name="childrenSeatNum" id="numChildrenSeatNum" type="number" pattern=".{0,8}" placeholder="Broj sedista za decu" defaultValue="3" />
                                            {/* <Form.Control type="range" min="0" max="8" custom /> */}
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
                                            range={{min: 0, max: 1000}}
                                            start={[0, 100]}
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
                </Col>
            </Row>
            <br />
        </Container>
    );
}

export default OrdinarySearchComponent;



 
