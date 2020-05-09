import {
    FETCH_CAR_MANUFACTURERS,
    PUT_CAR_MANUFACTURERS,
    ADD_CAR_MANUFACTURER
} from './constants';

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