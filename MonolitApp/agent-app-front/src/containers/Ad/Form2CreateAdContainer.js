import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form2CreateAd from '../../components/Ad/Form2CreateAd'

const Form2CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);


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
            props.setStepLabel(3);
            console.log(props.formData);
            setValidated(false);
        }
    };

    const handleCDW = (event) => {
        setCdw(event.target.checked);
    };

    const handleAndroidFlag = (event) => {
        setAndroidFlag(event.target.checked);
    };

    const handleButtonBack = (event) => {
        props.setStepLabel(1);
    };


    return (
        <Form2CreateAd
            onSubmit={handleForm2}
            validated={validated}
            handleAndroidFlag={handleAndroidFlag}
            handleCDW={handleCDW}
            cdw={cdw}
            androidFlag={androidFlag}
            handleButtonBack={handleButtonBack}

        />
    );
}
export default Form2CreateAdContainer;