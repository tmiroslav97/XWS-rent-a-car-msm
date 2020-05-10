import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreatedAd from '../../components/Ad/CreatedAd';
import { createdAd } from '../../store/ad/actions';

const CreatedAdContainer = () => {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();
    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);
    const [distanceLimit, setDistanceLimit] = useState();
    const [cdw, setCdw] = useState(false);
    const [androidFlag, setAndroidFlag] = useState(false);
    const [coverPhotoName, setCoverPhotoName] = useState('Dodaj sliku');

    const handleCreatedAd = (event) => {
        event.preventDefault();
        const form = event.target;

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

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
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
        setCoverPhoto(event.target.files[0]);
        setCoverPhotoName(event.target.files[0].name);
    };

    return (
        <CreatedAd onSubmit={handleCreatedAd}
            validated={validated}
            distanceLimitFlag={distanceLimitFlag}
            cdw={cdw}
            androidFlag={androidFlag}
            coverPhotoName = {coverPhotoName}
            handleDistanceLimitFlag={handleDistanceLimitFlag}
            onPhotoChange={onPhotoChange}
            handleAndroidFlag={handleAndroidFlag}
            handleCDW={handleCDW} />
    )
}

export default CreatedAdContainer;