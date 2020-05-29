import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form1CreateAd from '../../components/Ad/Form1CreateAd'

const Form1CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState();

    const handleForm1 = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            props.setFormData({
                ...props.formData,
                name: form.name.value,
                location: form.location.value,
                distanceLimitFlag: distanceLimitFlag,
                distanceLimit: distanceLimit,
                carManufacturer: form.carManufacturer.value,
                carModel: form.carModel.value,
                carType: form.carType.value,
                year: form.year.value,
                mileage: form.mileage.value
            });
            // props.setActiveStep(1);
            props.handleNext();
            console.log(props.formData);
            setValidated(false);
            
        }
    };

    const handleDistanceLimitFlag = (event) => {
        setDistanceLimitFlag(event.target.checked);
        setDistanceLimit(null);
    };
    

    return (
        <Form1CreateAd
            onSubmit={handleForm1}
            validated={validated}
            distanceLimitFlag={distanceLimitFlag}
            handleDistanceLimitFlag={handleDistanceLimitFlag}
            activeStep={props.activeStep}
            steps={props.steps}
            isStepOptional={props.isStepOptional}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}
        />
    );
}
export default Form1CreateAdContainer;