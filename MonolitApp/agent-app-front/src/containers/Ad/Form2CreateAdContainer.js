import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form2CreateAd from '../../components/Ad/Form2CreateAd'
import { gearboxTypesSelector, fuelTypesSelector } from '../../store/codebook/selectors';
import { fetchAllGearboxTypes, fetchAllFuelTypes } from '../../store/codebook/actions';

const Form2CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);

    const gearboxTypes = useSelector(gearboxTypesSelector);
    const fuelTypes = useSelector(fuelTypesSelector);

    useEffect(() => {
        dispatch(
            fetchAllGearboxTypes()
        );
        dispatch(
            fetchAllFuelTypes()
        );
    }, []);

    const getGearboxTypes = () => {
        const listGearboxTypes = [];
        if (gearboxTypes.isFetch) {
            gearboxTypes.data.map((gearboxType) => {
                listGearboxTypes.push(<option key={gearboxType.id}>{gearboxType.name}</option>);
            })
        }
        return listGearboxTypes;
    }

    const getFuelTypes = () => {
        const listFuelType = [];
        if (fuelTypes.isFetch) {
            fuelTypes.data.map((fuelType) => {
                listFuelType.push(<option key={fuelType.id}>{fuelType.name}</option>);
            })
        }
        return listFuelType;
    }

    const handleForm2 = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {

            props.setFormData({
                ...props.formData,
                gearboxType: form.gearboxType.value,
                fuelType: form.fuelType.value,
                childrenSeatNum: form.childrenSeatNum.value,
                cdw: cdw,
                androidFlag: androidFlag
            });
            console.log(props.formData);
            setValidated(false);
            props.handleNext();
        }
    };

    const handleCDW = (event) => {
        setCdw(event.target.checked);
    };

    const handleAndroidFlag = (event) => {
        setAndroidFlag(event.target.checked);
    };

    return (
        <Form2CreateAd
            onSubmit={handleForm2}
            validated={validated}
            handleAndroidFlag={handleAndroidFlag}
            handleCDW={handleCDW}
            cdw={cdw}
            androidFlag={androidFlag}
            activeStep={props.activeStep}
            steps={props.steps}
            isStepOptional={props.isStepOptional}
            handleBack={props.handleBack}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}
            getGearboxTypes={getGearboxTypes}
            getFuelTypes={getFuelTypes}

        />
    );
}
export default Form2CreateAdContainer;