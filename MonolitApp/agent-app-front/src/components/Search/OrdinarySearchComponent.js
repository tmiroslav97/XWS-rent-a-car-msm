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
                <Accordion defaultActiveKey="2">
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
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default OrdinarySearchComponent;



 
