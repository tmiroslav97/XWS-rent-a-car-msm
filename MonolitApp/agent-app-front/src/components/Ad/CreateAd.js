import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image } from 'react-bootstrap';
import { Stepper, Step, StepLabel, makeStyles, Typography } from '@material-ui/core';
import Form1CreateAdContainer from '../../containers/Ad/Form1CreateAdContainer';
import Form2CreateAdContainer from '../../containers/Ad/Form2CreateAdContainer';

const CreateAd = (props) => {
    
    

    return (
        <Container>
            <Row>
                <Col 
                // className={props.classes.root}
                >

                    <Stepper activeStep={props.activeStep}>
                        {props.steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (props.isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Opciono</Typography>
                            }
                            if (props.isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                </Col>
            </Row>

            <Row>
                <Col>
                    
                    <Form id="createAdFrom" onSubmit={props.onSubmit} noValidate validated={props.validated}>

                        {/* {props.activeStep === 2 ?
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
                            </Form.Row>


                            : null
                        } */}
                        {/* {props.activeStep === 3 ?
                            <Form.Row>
                                <Col>

                                    <Form.Group as={Col}>
                                        <Form.Label>Dostupnost</Form.Label>



                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        } */}


                        {/* {props.activeStep === 4 ?
                            <Form.Row>
                                <Col>

                                    <Form.Group as={Col}>
                                        <Form.Label>Dodaj sliku</Form.Label>

                                        <Form.File name="coverPhoto" id="fileCoverPhoto" placeholder="Slike" label={props.coverPhotoName}
                                            onChange={props.onPhotoChange} custom
                                        >
                                        </Form.File>


                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        } */}
                        
                        {/* {props.activeStep === 5 ?
                            <Form.Row>
                                <Col>


                                    <Form.Group as={Col}>
                                        <Button variant="primary" id="btnCreatedAd" type="submit">
                                            Dodaj
                                        </Button>
                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        } */}
                    </Form>
                </Col>
            </Row>

            
        </Container>
    );

}
export default CreateAd;