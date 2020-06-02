import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form5CreateAd from '../../components/Ad/Form5CreateAd'

const Form5CreateAdContainer = (props) => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    

    const handleForm5 = (event) => {
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
            // props.setActiveStep(2);
            // props.setActiveStep(4);
            console.log(props.formData);
            setValidated(false);
            props.handleNext();
            //treba dodati oglas.... 
            // props.handleCreatedAd();
        }
    };

    const [coverPhotoName, setCoverPhotoName] = useState("");
    const [photos, setPhotos] = useState([]);
    const [coverPhoto, setCoverPhoto] = useState();
    const onPhotoChange = (event) => {

        if (event.target.files != null) {
            let p = photos;
            let name = event.target.files[0].name;
            console.log(event.target);
            console.log(event.target.files[0]);
            let flag = 0;

            p.map((photo) => {
                if (photo.photoName === name) {
                    flag = 1;
                    console.log("Isti fajl");
                }

            })
            if (flag != 1) {
                p.push(
                    {
                        photoName: event.target.files[0].name,
                        photo: event.target.files[0]
                    }
                )
                setPhotos(p);
            }
            let nazivi = "";
            let slike = [];
            p.map((photo) => {
                slike.push(photo.photo);
                nazivi += " " + photo.photoName;
            })
            console.log(nazivi);
            console.log(slike);


            setCoverPhoto(event.target.files[0]);
            setCoverPhotoName(event.target.files[0].name);
        }

    };

    return (
        <Form5CreateAd
            onSubmit={handleForm5}
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
export default Form5CreateAdContainer;