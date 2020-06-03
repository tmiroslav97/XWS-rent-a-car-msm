import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form6CreateAd from '../../components/Ad/Form6CreateAd'
import { Form, Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Image, Card } from 'react-bootstrap';

const Form6CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const handleForm6 = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(props.formData);
        props.handleCreatedAd();
        setValidated(true);


    };


    return (
        <Form6CreateAd
            handleForm6={handleForm6}
            validated={validated}
            activeStep={props.activeStep}
            steps={props.steps}
            isStepOptional={props.isStepOptional}
            handleBack={props.handleBack}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}

        />
    );
}
export default Form6CreateAdContainer;