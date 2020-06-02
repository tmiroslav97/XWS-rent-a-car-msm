import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateAd from '../../components/Ad/CreateAd';
import { createdAd } from '../../store/ad/actions';
import Form1CreateAdContainer from './Form1CreateAdContainer';
import Form2CreateAdContainer from './Form2CreateAdContainer';
import Form3CreateAdContainer from './Form3CreateAdContainer';
import Form4CreateAdContainer from './Form4CreateAdContainer';
import Form5CreateAdContainer from './Form5CreateAdContainer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SpinnerImageContainer from './SpinnerImageContainer';
import ImagesContainer from './ImagesContainer';
import ButtonsImageContainer from './ButtonsImageContainer';

const CreateAdContainer = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState(null);
    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);
    const [pricePerKm, setPricePerKm] = useState(null);
    const [pricePerKmCDW, setPricePerKmCDW] = useState(null);
    const [id, setId] = useState(null);
    const [carCalendarTermList, setCarCalendarTermList] = useState([]);

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = ['Osnovne informacije', 'Dodatne informacije', 'Cena', 'Dostupnost', 'Slike'];


    const [uploading, setUploading] = useState(false);
    // const [images, setImages] = useState([]);
    const [imagesDTO, setImagesDTO] = useState([]);
    const [coverPhotoName, setCoverPhotoName] = useState("");
    const [photos, setPhotos] = useState([]);
    const [coverPhoto, setCoverPhoto] = useState();

    const content = () => {
        switch (true) {
            case uploading:
                return <SpinnerImageContainer />
            case imagesDTO.length > 0:
                return <ImagesContainer images={imagesDTO} removeImage={removeImage} />
            default:
                return <ButtonsImageContainer onChange={buttonImageChange} />
        }
    }

    const removeImage = (id) => {
        console.log("brisanje")
        // this.setState({
        //   images: this.state.images.filter(image => image.public_id !== id)
        // })
    }
    const buttonImageChange = (event) => {
        console.log("stisnuto dugme");
        if (event.target.files != null) {
            const files = Array.from(event.target.files)
            console.log(files[0]);
            
            let name = event.target.files[0].name;
            let flag = 0;

            photos.map((photo) => {
                if (photo.photoName === name) {
                    flag = 1;
                    console.log("Vec ste dodali ovu sliku");
                }
            })
            if (flag != 1) {
                let temp = {
                            photoName: event.target.files[0].name,
                            photo: event.target.files[0]
                        }
                setPhotos(...photos, temp);
                setUploading(true);



            }

        }
       
        // const podaci = new FormData();

        // files.forEach((file, i) => {
        //     podaci.append(i, file)
        // })

        // fetch(`${API_URL}/image-upload`, {
        //     method: 'POST',
        //     body: podaci
        // })
        // .then(res => res.json())
        // .then(images => {
        //     this.setState({
        //         uploading: false,
        //         images
        //     })
        // })

        
    }


    const [formData, setFormData] = useState({
        name: null,
        location: null,
        distanceLimitFlag: null,
        distanceLimit: null,
        carManufacturer: null,
        carModel: null,
        carType: null,
        year: null,
        mileage: null,
        gearboxType: null,
        fuelType: null,
        childrenSeatNum: null,
        cdw: null,
        androidFlag: null,
        pricePerKm: null,
        pricePerKmCDW: null,
        pricePerDay: null,
        id: null,
        carCalendarTermCreateDTOList: null
    });

    const handleCreatedAd = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            let data = {
                'name': form.name.value,
                'coverPhoto': coverPhotoName,
                'location': form.location.value,
                'distanceLimitFlag': distanceLimitFlag,
                'distanceLimit': distanceLimit,
                'carCreateDTO': {
                    'carManufacturer': form.carManufacturer.value,
                    'carModel': form.carModel.value,
                    'carType': form.carType.value,
                    'year': form.year.value,
                    'mileage': form.mileage.value,
                    'gearboxType': form.gearboxType.value,
                    'fuelType': form.fuelType.value,
                    'childrenSeatNum': form.childrenSeatNum.value,
                    'cdw': cdw,
                    'androidFlag': androidFlag,
                },
                'priceListCreateDTO': {
                    'pricePerKm': form.pricePerKm.value,
                    'pricePerKmCDW': form.pricePerKmCDW.value,
                    'pricePerDay': form.pricePerDay.value,
                    'id': form.id.value,
                },
                'carCalendarTermCreateDTOList': null
            }
            let formData = new FormData(form);
            formData.append('data', JSON.stringify(data));
            dispatch(createdAd(formData));
            setValidated(false);
        }
    };

    const handleDistanceLimitFlag = (event) => {
        setDistanceLimitFlag(event.target.checked);
        setDistanceLimit(null);
    };

    const handleCDW = (event) => {
        setCdw(event.target.checked);
    };

    const handleAndroidFlag = (event) => {
        setAndroidFlag(event.target.checked);
    };

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

    const isStepOptional = (step) => {
        // return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setSkipped(newSkipped);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <Container>
            <CreateAd onSubmit={handleCreatedAd}
                validated={validated}
                distanceLimitFlag={distanceLimitFlag}
                cdw={cdw}
                androidFlag={androidFlag}
                coverPhotoName={coverPhotoName}
                handleDistanceLimitFlag={handleDistanceLimitFlag}
                onPhotoChange={onPhotoChange}
                handleAndroidFlag={handleAndroidFlag}
                handleCDW={handleCDW}
                skipped={skipped}
                setSkipped={setSkipped}
                isStepOptional={isStepOptional}
                isStepSkipped={isStepSkipped}
                // classes={classes}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSkip={handleSkip}
                handleReset={handleReset}
                formData={formData} setFormData={setFormData}
                activeStep={activeStep} setActiveStep={setActiveStep}
                content={content}
            />

            {activeStep === 0 ?
                <Form1CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    isStepOptional={isStepOptional}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    handleReset={handleReset}
                    distanceLimitFlag={distanceLimitFlag} setDistanceLimitFlag={setDistanceLimitFlag}
                    distanceLimit={distanceLimit} setDistanceLimit={setDistanceLimit}
                ></Form1CreateAdContainer>
                : null
            }
            {activeStep === 1 ?
                <Form2CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    isStepOptional={isStepOptional}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    handleReset={handleReset}
                    cdw={cdw} setCdw={setCdw}
                    androidFlag={androidFlag} setAndroidFlag={setAndroidFlag}
                ></Form2CreateAdContainer>
                : null
            }
            {activeStep === 2 ?
                <Form3CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    isStepOptional={isStepOptional}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    handleReset={handleReset}
                    cdw={cdw} setCdw={setCdw}
                    distanceLimitFlag={distanceLimitFlag} setDistanceLimitFlag={setDistanceLimitFlag}
                    pricePerKm={pricePerKm} setPricePerKm={setPricePerKm}
                    pricePerKmCDW={pricePerKmCDW} setPricePerKmCDW={setPricePerKmCDW}
                    id={id} setId={setId}

                ></Form3CreateAdContainer>
                : null
            }
            {activeStep === 3 ?
                <Form4CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    isStepOptional={isStepOptional}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    handleReset={handleReset}
                    carCalendarTermList={carCalendarTermList}
                    setCarCalendarTermList={setCarCalendarTermList}
                ></Form4CreateAdContainer>
                : null
            }
            {activeStep === 4 ?
                <Form5CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    isStepOptional={isStepOptional}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    handleReset={handleReset}
                    handleCreatedAd={handleCreatedAd}
                ></Form5CreateAdContainer>
                : null
            }

        </Container>


    )
}

export default CreateAdContainer;