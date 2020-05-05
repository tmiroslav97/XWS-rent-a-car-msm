import {
    FETCH_CAR_MANUFACTURERS,
    PUT_CAR_MANUFACTURERS,
    PUT_IS_FETCH_CODEBOOK
} from './constants';

export const fetchCarManufacturers = payload => ({
    type: FETCH_CAR_MANUFACTURERS,
    payload
});

export const putCarManufacturers = payload => ({
    type: PUT_CAR_MANUFACTURERS,
    payload
});

export const putIsFetchCodebook = payload => ({
    type: PUT_IS_FETCH_CODEBOOK,
    payload
});