import React from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Form3CreateAd = (props) => {
    return (
        <Container>
            <Form id="step3" onSubmit={props.onSubmit} noValidate validated={props.validated}>
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
                    <Col>

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
                                            <Button disabled={props.activeStep === 0} onClick={props.handleBack} className="float-left" >
                                                Nazad
                                            </Button>

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
export default Form3CreateAd;
