import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form1CreateAd from '../../components/Ad/Form1CreateAd';
import { carManufacturersSelector } from '../../store/codebook/selectors';
import { fetchAllCarManufacturers } from '../../store/codebook/actions';

const Form1CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState();

    const carManufacturers = useSelector(carManufacturersSelector);

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
            props.handleNext();
            console.log(props.formData);
            setValidated(false);
            
        }
    };

    const handleDistanceLimitFlag = (event) => {
        setDistanceLimitFlag(event.target.checked);
        setDistanceLimit(null);
    };

    useEffect(() => {
        dispatch(
            fetchAllCarManufacturers()
        );
    });

    return (
        <div>
        {
         carManufacturers.isFatch ?  
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
                carManufacturers={carManufacturers.data}
            /> 
             : null 
        } 
        </div>
        
        
    );
}
export default Form1CreateAdContainer;