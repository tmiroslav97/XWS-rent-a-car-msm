import {
    FETCH_CAR_MANUFACTURERS,
    PUT_CAR_MANUFACTURERS,
    ADD_CAR_MANUFACTURER,
    EDIT_CAR_MANUFACTURER,
    FETCH_CAR_TYPES,
    PUT_CAR_TYPES,
    ADD_CAR_TYPE,
    EDIT_CAR_TYPE
} from './constants';

//for car types
export const editCarType = payload => ({
    type: EDIT_CAR_TYPE,
    payload
});

export const addCarType = payload => ({
    type: ADD_CAR_TYPE,
    payload
});

export const fetchCarTypes = payload => ({
    type: FETCH_CAR_TYPES,
    payload
});

export const putCarTypes = payload => ({
    type: PUT_CAR_TYPES,
    payload
});
//for car manufacturers
export const editCarManufacturer = payload => ({
    type: EDIT_CAR_MANUFACTURER,
    payload
});

export const addCarManufacturer = payload => ({
    type: ADD_CAR_MANUFACTURER,
    payload
});

export const fetchCarManufacturers = payload => ({
    type: FETCH_CAR_MANUFACTURERS,
    payload
});

export const putCarManufacturers = payload => ({
    type: PUT_CAR_MANUFACTURERS,
    payload
});