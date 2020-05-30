import React from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Form1CreateAd = (props) => {
    return (
        <Container>
            <Form id="step1" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                <Form.Row>
                    <Col>
                        <Form.Group as={Col}>
                            <Form.Label>Naziv oglasa</Form.Label>
                            <Form.Control required name="name" type="text" id="txtName" placeholder="Naziv oglasa"/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Proizvodjac</Form.Label>
                            <Form.Control as="select" required name="carManufacturer" id="txtCarManufacturer" placeholder="Proizvodjac" >   
                               {props.getCarManufacturers()}
                            </Form.Control>
                            
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
                            <Form.Control as="select" required name="carType" id="txtCarType" placeholder="Tip" >
                                {props.getCarTypes()}
                            </Form.Control>
                           
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
                            {props.activeStep === props.steps.length ? (
                                <div>
                                    <Typography
                                    // className={classes.instructions}
                                    >
                                        Svi koraci su zavrseni. Uspesno ste dodadali oglas!
                                    </Typography>

                                    <Button onClick={props.handleReset}
                                    //  className={classes.button} 
                                    >
                                        Reset
                                    </Button>
                                </div>
                            ) : (
                                    <div>
                                        <div>
                                            {/* <Button disabled={props.activeStep === 0} onClick={props.handleBack} className="float-left" >
                                                Nazad
                                            </Button> */}

                                            {props.isStepOptional(props.activeStep) && (
                                                <Button
                                                    variant="contained"
                                                    // color="primary"
                                                    onClick={props.handleSkip}
                                                    // className={classes.button}
                                                    className="float-right"
                                                >
                                                    Preskoci
                                                </Button>
                                            )}

                                            <Button
                                                // variant="contained"
                                                // color="primary"
                                                // onClick={props.handleNext}
                                                // className={classes.button}
                                                type="submit"
                                                className="float-right"
                                            >
                                                Dalje
                                                {/* {props.activeStep === props.steps.length - 1 ? 'Dodaj' : 'Dalje'} */}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                        </Form.Group>
                    </Col>
                </Form.Row>


            </Form>
        </Container>
    );
}
export default Form1CreateAd;
