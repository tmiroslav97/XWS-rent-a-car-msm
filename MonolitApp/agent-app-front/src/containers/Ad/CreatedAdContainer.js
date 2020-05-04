import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreatedAd from '../../components/Ad/CreatedAd';
import { createdAd } from '../../store/ad/actions';

const CreatedAdContainer = ()=> {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [distanceLimitFlag, setDistanceLimitFlag] = useState("UNLIMITED");

    const handleCreatedAd = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        // if (form.checkValidity() === false) {
        //     event.stopPropagation();
        //     setValidated(true);
        // } else {
            dispatch(
                createdAd({
                    name, 
                    coverPhoto,
                    location,
                    distanceLimitFlag,
                    distanceLimit,
                    carManufacturer,
                    carModel,
                    carType,
                    year,
                    mileage,
                    gearboxType,
                    fuelType,
                    childrenSeatNum,
                    cdw,
                    androidFlag,
                    pricePerKm,
                    pricePerKmCDW,
                    pricePerDay,
                    id
                })
            );
            // setValidated(false);
        // }
    };

    const handleDistanceLimitFlag = (event) => {
        const check = event.target.checked;
        console.log(check);

        if(check === false){  
            setDistanceLimitFlag("UNLIMITED");
        }else if (check === true) {
            setDistanceLimitFlag("LIMITED");
        }
        console.log(distanceLimitFlag)
        


    };

    return(
        <CreatedAd onSubmit={handleCreatedAd} 
        validated={validated}
        handleDistanceLimitFlag={handleDistanceLimitFlag}
        distanceLimitFlag={distanceLimitFlag}/>
    )
}

export default CreatedAdContainer;