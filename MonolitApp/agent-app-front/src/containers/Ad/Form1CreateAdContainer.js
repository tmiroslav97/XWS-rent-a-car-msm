import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form1CreateAd from '../../components/Ad/Form1CreateAd';
import { carManufacturersSelector, carTypesSelector, carModelsSelector } from '../../store/codebook/selectors';
import { fetchAllCarManufacturers, fetchAllCarTypes, fetchAllCarModels } from '../../store/codebook/actions';
import SpinnerContainer from '../Common/SpinnerContainer';

const Form1CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);

    const carManufacturers = useSelector(carManufacturersSelector);
    const carTypes = useSelector(carTypesSelector);
    const carModels = useSelector(carModelsSelector);

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
                distanceLimit: form.distanceLimit.value,
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
        if (carManufacturers.isFetch) {
            carManufacturers.data.map((carManufacturer) => {
                listCarMan.push(<option key={carManufacturer.id}>{carManufacturer.name}</option>);
            })
        }
        return listCarMan;
    }

    const getCarModels = () => {
        const listCarModel = [];
        if (carModels.isFetch) {
            let i = 0;
            carModels.data.map((carModel)=> {
                listCarModel.push(<option key={i}>{carModel}</option>);
                i++
            })
        }

        return listCarModel;
    }

    const handleCarManufacturers = (event) => {
        let index = event.target.options.selectedIndex;
        dispatch(
            fetchAllCarModels({
                "id" : carManufacturers.data[index].id
            })
        );
    };

    const getCarTypes = () => {
        const listCarType = [];
        if (carTypes.isFetch) {
            carTypes.data.map((carType) => {
                listCarType.push(<option key={carType.id}>{carType.name}</option>);
            })
        }
        return listCarType;
    }

    const getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let rez = "";
        if (month < 10) {
            rez = year + "-0" + month + "-" + date;
        } else {
            rez = year + "-" + month + "-" + date;
        }
        return rez;
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
            getCarManufacturers={getCarManufacturers}
            handleCarManufacturers={handleCarManufacturers}
            getCarModels={getCarModels}
            getCarTypes={getCarTypes}
            getCurrentDate={getCurrentDate}
        />

    );
}
export default Form1CreateAdContainer;