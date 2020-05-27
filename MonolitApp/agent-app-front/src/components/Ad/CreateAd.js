import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image } from 'react-bootstrap';
import { Stepper, Step, StepLabel, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

// function getStepContent(step) {
//     switch (step) {
//         case 0:
//             return 'Select campaign settings...';
//         case 1:
//             return 'What is an ad group anyways?';
//         case 2:
//             return 'This is the bit I really care about!';
//         default:
//             return 'Unknown step';
//     }
// }

const CreateAd = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = ['Osnovne informacije', 'Dodatne informacije', 'Cena', 'Dostupnost', 'Slike'];

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container>
            <Row>
                <Col className={classes.root}>

                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                            }
                            if (isStepSkipped(index)) {
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
                        {activeStep === 2 ?
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
                        }
                        {activeStep === 3 ?
                            <Form.Row>
                                <Col>

                                    <Form.Group as={Col}>
                                        <Form.Label>Dostupnost</Form.Label>



                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            : null
                        }
                        {activeStep === 4 ?
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
                        }
                        {activeStep=== 5 ?
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
                        }
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className={classes.root}>

                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                Svi koraci su zavrseni. Uspesno ste dodadali oglas!
                            </Typography>

                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                                </Button>
                        </div>
                    ) : (
                            <div>
                                {/* <Typography className={classes.instructions}></Typography> */}
                                <div>
                                    {props.getStepContent(activeStep)}
                                </div>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Nazad
                                        </Button>
                                    {isStepOptional(activeStep) && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSkip}
                                            className={classes.button}
                                        >
                                            Preskoci
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Dodaj' : 'Dalje'}
                                    </Button>
                                </div>
                            </div>
                        )}

                </Col>
            </Row>
        </Container>
    );

}
export default CreateAd;