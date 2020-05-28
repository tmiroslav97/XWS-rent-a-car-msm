import React from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Form2CreateAd = (props) => {
    return (
        <Container>
            <Form id="step2" onSubmit={props.onSubmit} noValidate validated={props.validated}>
                <Form.Row>
                    <Col>
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


                    </Col>
                    <Col>
                        <Form.Group as={Col}>
                            <Form.Label>Broj sedista za decu</Form.Label>
                            <Form.Control required name="childrenSeatNum" id="numChildrenSeatNum" type="number" pattern=".{0,8}" placeholder="Broj sedista za decu" defaultValue="3" />
                            {/* <Form.Control type="range" min="0" max="8" custom /> */}
                            <Form.Control.Feedback type="invalid">
                                min 0 max 8 sedista
                                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Check name="cdw" id="chbCDW" type="checkbox" label="Da li poseduje CDW?" onChange={props.handleCDW} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Check name="androidFlag" id="chbAndroidFlag" type="checkbox" label="Da li poseduje android uredjaj?" onChange={props.handleAndroidFlag} />
                        </Form.Group>

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
                                            <Button disabled={props.activeStep === 0} onClick={props.handleBack(props.activeStep)} className="float-left" >
                                                Nazad
                                            </Button>

                                            {props.isStepOptional(props.activeStep) && (
                                                <Button
                                                    variant="contained"
                                                    // color="primary"
                                                    onClick={props.handleSkip(props.activeStep)}
                                                    // className={classes.button}
                                                    className="float-right"
                                                >
                                                    Preskoci
                                                </Button>
                                            )}

                                            <Button
                                                // variant="contained"
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
export default Form2CreateAd;
