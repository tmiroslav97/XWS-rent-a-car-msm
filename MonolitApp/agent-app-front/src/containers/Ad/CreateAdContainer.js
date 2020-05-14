import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateAd from '../../components/Ad/CreateAd';
import { createdAd } from '../../store/ad/actions';
import Form1CreateAdContainer from './Form1CreateAdContainer';
import { Container, Row, Col, Button } from 'react-bootstrap'

const CreateAdContainer = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();
    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState();
    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);
    const [coverPhotoName, setCoverPhotoName] = useState("");
    const [photos, setPhotos] = useState([]);
    const [buttonLabel, setButtonLabel] = useState(1);


    const[formData, setFormData] = useState(null);

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
                    'id': 0,
                    // 'id': form.id.value,
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

    const onButton1 = (event) =>{
        setButtonLabel(1);
    };
    const onButton2 = (event) =>{
        setButtonLabel(2);
    };
    const onButton3 = (event) =>{
        setButtonLabel(3);
    };
    const onButton4 = (event) =>{
        setButtonLabel(4);
    };
    const onButton5 = (event) =>{
        setButtonLabel(5);
    };
    const onButton6 = (event) =>{
        setButtonLabel(6);
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
            buttonLabel={buttonLabel}
            onButton1={onButton1}
            onButton2={onButton2}
            onButton3={onButton3}
            onButton4={onButton4}
            onButton5={onButton5}
            onButton6={onButton6}
            />
            {buttonLabel === 6 ?
            <Form1CreateAdContainer formData={formData} setFormData={setFormData}></Form1CreateAdContainer>
            :null
            }
        </Container>
        

    )
}

export default CreateAdContainer;