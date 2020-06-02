import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form3CreateAd from '../../components/Ad/Form3CreateAd'

const Form3CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [activeToggle, setActiveToggle] = useState(0);

    const handleForm3 = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            props.setFormData({
                ...props.formData,
                id: props.id,
                pricePerDay: form.pricePerDay.value,
                pricePerKm: props.pricePerKm,
                pricePerKmCDW: props.pricePerKmCDW,
            });
            console.log(props.formData);
            setValidated(false);
            props.handleNext();
        }
    };

    const handlePricePerKm = (event) => {
        props.setPricePerKm(event.target.value);
    };

    const handlePricePerKmCDW = (event) => {
        props.setPricePerKmCDW(event.target.value);
    };

    const handleId = (event) => {
        props.setId(event.target.value);
    };

    const handleActiveToggle0 = (event) => {
        setActiveToggle(0);
    };

    const handleActiveToggle1 = (event) => {
        setActiveToggle(1);
    };

    return (
        <Form3CreateAd
            onSubmit={handleForm3}
            validated={validated}
            activeStep={props.activeStep}
            steps={props.steps}
            isStepOptional={props.isStepOptional}
            handleBack={props.handleBack}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}
            cdw={props.cdw} 
            distanceLimitFlag={props.distanceLimitFlag} 
            pricePerKm={props.pricePerKm} 
            pricePerKmCDW={props.pricePerKmCDW} 
            id={props.id}
            handlePricePerKm={handlePricePerKm}
            handlePricePerKmCDW={handlePricePerKmCDW}
            handleId={handleId}
            activeToggle={activeToggle}
            handleActiveToggle0={handleActiveToggle0}
            handleActiveToggle1={handleActiveToggle1}
            
        />
    );
}
export default Form3CreateAdContainer;