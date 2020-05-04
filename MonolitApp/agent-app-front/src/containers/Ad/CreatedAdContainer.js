import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreatedAd from '../../components/Ad/CreatedAd';
import { createdAd } from '../../store/ad/actions';

const CreatedAdContainer = ()=> {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [distanceLimitFlag, setDistanceLimitFlag] = useState(false);

    const handleCreatedAd = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(event.target);
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            dispatch(
                createdAd({
                    "name": data.get('name'), 
                    "coverPhoto": data.get('coverPhoto'),
                    "location": data.get('location'),
                    "distanceLimitFlag": data.get('distanceLimitFlag'),
                    "distanceLimit" : data.get('distanceLimit'),
                    "carManufacturer":data.get('carManufacturer'),
                    "carModel":data.get('carModel'),
                    "carType":data.get('carType'),
                    "year": data.get('year'),
                    "mileage":data.get('mileage'),
                    "gearboxType":data.get('gearboxType'),
                    "fuelType":data.get('fuelType'),
                    "childrenSeatNum":data.get('childrenSeatNum'),
                    "cdw":data.get('cdw'),
                    "androidFlag":data.get('androidFlag'),
                    "pricePerKm":data.get('pricePerKm'),
                    "pricePerKmCDW":data.get('pricePerKmCDW'),
                    "pricePerDay":data.get('pricePerDay'),
                    "id":data.get('id')
                })
            );
            setValidated(false);
        }
    };

    const handleDistanceLimitFlag = (event) => {
        const check = event.target.checked;
        setDistanceLimitFlag(event.target.checked);
    };

    return(
        <CreatedAd onSubmit={handleCreatedAd} 
        validated={validated}
        distanceLimitFlag={distanceLimitFlag}
        handleDistanceLimitFlag={handleDistanceLimitFlag}/>
    )
}

export default CreatedAdContainer;