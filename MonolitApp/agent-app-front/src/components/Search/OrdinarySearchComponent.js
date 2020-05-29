import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'


const OrdinarySearchComponent = (props) => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    return (
        <Container>
            <Row>
              
                <Col>
                <Accordion defaultActiveKey="0">
                    <Card   >
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0"  >
                           Obicna pretraga
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body style={{  height: '31rem'}}>
                        <Form>
                            <Form.Group controlId="formBasicLokacija">
                                <Form.Label>Lokacija</Form.Label>
                                <Form.Control type="text" placeholder="Unesite naziv lokacije..." />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                    
                            <Form.Group controlId="formBasicPassword">
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
                            </Form.Group>

                     
                            <Button variant="primary" type="submit">
                                Pretrazi
                            </Button>
                        </Form>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Napredna pretraga
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
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
                        <Form.Group as={Col}>
                            <Form.Label>Menjac</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." required name="gearboxType" id="txtGearboxType" type="text" placeholder="Menjac" >
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Tip goriva</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." required name="fuelType" id="txtFuelType" type="text" placeholder="Tip goriva" >
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Predjeni kilometri</Form.Label>
                            <Form.Control required name="mileage" id="numMileage" type="number" placeholder="Predjeni kilometri" defaultValue="34" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Planirana kilometraza</Form.Label>
                            <Form.Control required name="mileage" id="numMileage" type="number" placeholder="Predjeni kilometri" defaultValue="34" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Broj sedista za decu</Form.Label>
                            <Form.Control required name="childrenSeatNum" id="numChildrenSeatNum" type="number" pattern=".{0,8}" placeholder="Broj sedista za decu" defaultValue="3" />
                            {/* <Form.Control type="range" min="0" max="8" custom /> */}
                            <Form.Control.Feedback type="invalid">
                                min 0 max 8 sedista
                             </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Unesi opseg cijene</Form.Label>
                            <Form.Control name="pricerange" id="rangePrice" type="range"/>
                            <form class="multi-range-field my-5 pb-5">
                              <input id="multi5" class="multi-range" type="range" />
                            </form>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Check name="cdw" id="chbCDW" type="checkbox" label="Da li postoji opcija kupovine Collision Damage Waiver protekcije?" onChange={props.handleCDW} />
                        </Form.Group>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default OrdinarySearchComponent;



 
