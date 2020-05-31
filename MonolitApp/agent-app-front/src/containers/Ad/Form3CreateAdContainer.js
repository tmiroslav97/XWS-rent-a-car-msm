import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form3CreateAd from '../../components/Ad/Form3CreateAd'

const Form3CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);



    const handleForm3 = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            props.setFormData({
                ...props.formData,
                id: form.id.value,
                pricePerDay: form.pricePerDay.value,
                pricePerKm: form.pricePerKm.value,
                pricePerKmCDW: form.pricePerKmCDW.value,
            });
            console.log(props.formData);
            setValidated(false);
            props.handleNext();
        }
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
        />
    );
}
export default Form3CreateAdContainer;