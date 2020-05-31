import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form4CreateAd from '../../components/Ad/Form4CreateAd'

const Form4CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleForm4 = () => {
        // event.preventDefault();
        // const form = event.target;
        // if (form.checkValidity() === false) {
        //     event.stopPropagation();
        //     setValidated(true);
        // } else {
        //     // props.setFormData({
        //     //     ...props.formData,
        //     //     name: form.name.value,
        //     //     location: form.location.value,
        //     //     distanceLimitFlag: distanceLimitFlag,
        //     //     distanceLimit: distanceLimit,
        //     //     carManufacturer: form.carManufacturer.value,
        //     //     carModel: form.carModel.value,
        //     //     carType: form.carType.value,
        //     //     year: form.year.value,
        //     //     mileage: form.mileage.value
        //     // });

        //     console.log(props.formData);
        //     setValidated(false);
        //     props.handleNext();
        // }
        props.handleNext();
    };
    const addTerm = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            console.log("moze da se doda");
            console.log(form.startDate.value);
            console.log(form.endDate.value);
            console.log(props.carCalendarTermList);
            props.carCalendarTermList.push({
                'startDate': form.startDate.value,
                'endDate': form.endDate.valu
            })
            console.log(props.carCalendarTermList);
            setValidated(false);
        }
    }
    const getCurrentDate = () => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        let rez = "";
        if (month < 10) {
            month = "0" + month;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        rez = year + "-" + month + "-" + date + "T" + hours + ":" + minutes;
        return rez;
    }
    const handleStartDate = (event) => {
        setStartDate(event.target.value);
    }
    const handleEndDate = (event) => {
        setEndDate(event.target.value);
    }
    const getCarCalentarTermList = () => {
        let list = [];
        let i = 1;
        props.carCalendarTermList.map((term) => {
            list.push(
                <tr key={term.id}>
                    <td>{i}</td>
                    <td>{term.startDate}</td>
                    <td>{term.endDate}</td>
                    {/* <td align="right">
                        <Button variant="outline-success" onClick={() => { props.handleEdit(carManufacturer); }}>Izmjeni</Button>
                    </td>
                    <td align="right">
                        <Button variant="outline-danger" onClick={() => { props.handleDelete(carManufacturer.id); }}>Obriši</Button>
                    </td> */}
                </tr>
            );
            i++;
        })
        return list;
    }

    return (
        <Form4CreateAd
            onSubmit={handleForm4}
            addTerm={addTerm}
            validated={validated}
            activeStep={props.activeStep}
            steps={props.steps}
            isStepOptional={props.isStepOptional}
            handleBack={props.handleBack}
            handleSkip={props.handleSkip}
            handleReset={props.handleReset}
            carCalendarTermList={props.carCalendarTermList}
            setCarCalendarTermList={props.setCarCalendarTermList}
            getCurrentDate={getCurrentDate}
            startDate={startDate}
            endDate={endDate}
            handleStartDate={handleStartDate}
            handleEndDate={handleEndDate}
            getCarCalentarTermList={getCarCalentarTermList}

        />
    );
}
export default Form4CreateAdContainer;