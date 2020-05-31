import React from 'react';
import { Form, Col, Container, Button, Table } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

const Form4CreateAd = (props) => {
    return (
        <Container>
            <Form id="step4" onSubmit={props.addTerm} noValidate validated={props.validated}>
                <Form.Row>
                    <Col>
                        <Form.Label>Unesi zauzece:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control required name="startDate" id="startDate" type="datetime-local"
                            min={props.getCurrentDate()}
                            onChange={props.handleStartDate}
                            // defaultValue={props.getCurrentDate()}
                            placeholder="Datum pocetka"
                        />
                    </Col>
                    <Col>
                        <Form.Control required name="endDate" id="endDate" type="datetime-local"
                            min={props.startDate}
                            onChange={props.handleEndDate}
                            // defaultValue={props.getCurrentDate()}
                            placeholder="Datum kraja"
                        />
                    </Col>
                    <Col>
                        <Button type="submit" >Dodaj</Button>
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Col>
                        {props.flag ?
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Rbr.</th>
                                        <th className="text-right">Datum pocetka</th>
                                        <th className="text-right">Datum kraja</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.getCarCalentarTermList()}
                                    {/* {
                                props.carCalendarTermList.map((term) => {
                                    return (
                                        <tr>
                                            <td>1</td>
                                            <td>{term.startDate}</td>
                                            <td>{term.endDate}</td>
                                        </tr>
                                    )

                                })} */}
                                </tbody>
                            </Table>
                            : null}



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
                                                // type="submit"
                                                onClick={props.handleNext}
                                                className="float-right"
                                            >
                                                Dalje
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
export default Form4CreateAd;
