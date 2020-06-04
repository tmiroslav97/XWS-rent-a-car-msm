import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateAd from '../../components/Ad/CreateAd';
import { createdAd, uploadImage } from '../../store/ad/actions';
import Form1CreateAdContainer from './Form1CreateAdContainer';
import Form2CreateAdContainer from './Form2CreateAdContainer';
import Form3CreateAdContainer from './Form3CreateAdContainer';
import Form4CreateAdContainer from './Form4CreateAdContainer';
import Form5CreateAdContainer from './Form5CreateAdContainer';
import Form6CreateAdContainer from './Form6CreateAdContainer';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CreateAdContainer = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    // const [name, setName] = useState();
    // const [location, setLocation] = useState();
    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState(null);
    const [carModel, setCarModel] = useState(null);
    // const [carManufacturer, setCarManufacturer] = useState();
    // const [carType, setCarType] = useState();
    // const [year, setYear] = useState();
    // const [mileage, setMileage] = useState();

    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);
    const [pricePerDay, setPricePerDay] = useState(null);
    const [pricePerKm, setPricePerKm] = useState(null);
    const [pricePerKmCDW, setPricePerKmCDW] = useState(null);
    const [id, setId] = useState(null);
    const [carCalendarTermList, setCarCalendarTermList] = useState([]);

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = ['Osnovne informacije', 'Dodatne informacije', 'Cena', 'Dostupnost', 'Slike'];

    const [coverPhoto, setCoverPhoto] = useState();
    // const [imagesDTO, setImagesDTO] = useState([]);

    const [photos, setPhotos] = useState([]);
    const [brPhotos, setBrPhotos] = useState(0);

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
        carCalendarTermCreateDTOList: null,
        imagesDTO: null

    });


    const handleCreatedAd = () => {
        console.log(formData);
       
        // dispatch(createdAd(JSON.stringify(formData)));


        // event.preventDefault();
        // console.log(event.target);
        // const form = event.target;

        // if (form.checkValidity() === false) {
        //     event.stopPropagation();
        //     setValidated(true);
        // } else {
        // let data = {
        //     'name': form.name.value,
        //     'coverPhoto': coverPhoto,
        //     'location': form.location.value,
        //     'distanceLimitFlag': distanceLimitFlag,
        //     'distanceLimit': distanceLimit,
        //     'carCreateDTO': {
        //         'carManufacturer': form.carManufacturer.value,
        //         'carModel': form.carModel.value,
        //         'carType': form.carType.value,
        //         'year': form.year.value,
        //         'mileage': form.mileage.value,
        //         'gearboxType': form.gearboxType.value,
        //         'fuelType': form.fuelType.value,
        //         'childrenSeatNum': form.childrenSeatNum.value,
        //         'cdw': cdw,
        //         'androidFlag': androidFlag,
        //     },
        //     'priceListCreateDTO': {
        //         'pricePerKm': pricePerKm,
        //         'pricePerKmCDW': pricePerKmCDW,
        //         'pricePerDay': form.pricePerDay.value,
        //         'id': form.id.value,
        //     },
        //     'carCalendarTermCreateDTOList': carCalendarTermList,
        //     'imagesDTO': imagesDTO
        // }
        // let formData = new FormData(form);
        //     formData.append('data', JSON.stringify(data));
            // dispatch(createdAd(formData));
            
        //     setValidated(false);
        // }
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
            <CreateAd
                // onSubmit={handleCreatedAd}
                validated={validated}
                distanceLimitFlag={distanceLimitFlag}
                cdw={cdw}
                androidFlag={androidFlag}
                handleDistanceLimitFlag={handleDistanceLimitFlag}
                handleAndroidFlag={handleAndroidFlag}
                handleCDW={handleCDW}
                skipped={skipped}
                setSkipped={setSkipped}
                isStepOptional={isStepOptional}
                isStepSkipped={isStepSkipped}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSkip={handleSkip}
                handleReset={handleReset}
                formData={formData} setFormData={setFormData}
                activeStep={activeStep} setActiveStep={setActiveStep}

            />

            {activeStep === 0 ?
                <Form1CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    carModel={carModel} setCarModel={setCarModel}
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
                    pricePerDay={pricePerDay} setPricePerDay={setPricePerDay}
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
                    coverPhoto={coverPhoto} setCoverPhoto={setCoverPhoto}
                    // imagesDTO={imagesDTO} setImagesDTO={setImagesDTO}
                    photos={photos} setPhotos={setPhotos} 
                    brPhotos={brPhotos} setBrPhotos={setBrPhotos}
                ></Form5CreateAdContainer>
                : null
            }
            {activeStep === 5 ?
                <Form6CreateAdContainer
                    formData={formData} setFormData={setFormData}
                    activeStep={activeStep} setActiveStep={setActiveStep}
                    steps={steps}
                    isStepOptional={isStepOptional}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    handleReset={handleReset}
                    handleCreatedAd={handleCreatedAd}
                    // imagesDTO={imagesDTO} setImagesDTO={setImagesDTO}
                    >
                </Form6CreateAdContainer>

                : null
            }

        </Container>


    )
}

export default CreateAdContainer;