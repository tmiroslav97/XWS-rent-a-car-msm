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
            // props.setFormData({
            //     ...props.formData,
            //     name: form.name.value,
            //     location: form.location.value,
            //     distanceLimitFlag: distanceLimitFlag,
            //     distanceLimit: distanceLimit,
            //     carManufacturer: form.carManufacturer.value,
            //     carModel: form.carModel.value,
            //     carType: form.carType.value,
            //     year: form.year.value,
            //     mileage: form.mileage.value
            // });
            // props.setActiveStep(3);
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
            // handleNext={props.handleNext}
            handleBack={props.handleBack}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}
        />
    );
}
export default Form3CreateAdContainer;