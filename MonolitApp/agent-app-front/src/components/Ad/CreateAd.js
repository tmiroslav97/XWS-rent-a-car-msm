import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image } from 'react-bootstrap';
import { Stepper, Step, StepLabel, makeStyles, Typography } from '@material-ui/core';

const CreateAd = (props) => {

    return (
        <Container>
            <Row>
                <Col>
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
                    {props.imagePreviewUrl ?
                        <div className="imgPreview" >
                            <img style={{height:"100px", width:"100px"}} src={props.imagePreviewUrl} />
                        </div>

                        :
                        <div className="previewText">Please select an Image for Preview</div>
                    }
                    <input className="fileInput"
                        type="file"
                        onChange={props._handleImageChange} />
                    {/* {props.content()} */}
                    <Form id="createAdFrom" onSubmit={props.onSubmit} noValidate
                        validated={props.validated}>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}
export default CreateAd;