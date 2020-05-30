import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form1CreateAd from '../../components/Ad/Form1CreateAd';
import { carManufacturersSelector, carTypesSelector } from '../../store/codebook/selectors';
import { fetchAllCarManufacturers, fetchAllCarTypes } from '../../store/codebook/actions';
import SpinnerContainer from '../Common/SpinnerContainer';

const Form1CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState();

    const carManufacturers = useSelector(carManufacturersSelector);
    const carTypes = useSelector(carTypesSelector);


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
        dispatch(
            fetchAllCarTypes()
        );
    }, []);

    const getCarManufacturers = () => {
        const listCarMan = [];
        if(carManufacturers.isFetch){
            carManufacturers.data.map((carManufacturer)=> {
                listCarMan.push(<option key={carManufacturer.id}>{carManufacturer.name}</option>);
            })
        }
        return listCarMan;
    }

    const getCarModels = () => {
        const listCarModel = [];
        if(carManufacturers.isFetch){
            console.log(carManufacturers.data);
            // carManufacturers.data.carModels.map((carModel)=> {
            //     listCarModel.push(<option key={carModel.id}>{carModel.name}</option>);
            // })
        }
        return listCarModel;
    }

    const getCarTypes = () => {
        const listCarType = [];
        if(carTypes.isFetch){
            carTypes.data.map((carType)=> {
                listCarType.push(<option key={carType.id}>{carType.name}</option>);
            })
        }
        return listCarType;
    }

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
            getCarManufacturers = {getCarManufacturers}
            getCarModels = {getCarModels}
            getCarTypes ={getCarTypes}
        />   
                
    );
}
export default Form1CreateAdContainer;