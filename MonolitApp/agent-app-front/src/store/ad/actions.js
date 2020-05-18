import{
    CREATED_AD,
    FETCH_ADS,
    PUT_ADS
} from './constants';

export const createdAd = payload => ({
    type: CREATED_AD,
    payload
});

export const fetchAds = payload => ({
    type: FETCH_ADS,
    payload
});

export const putAds = payload => ({
    type: PUT_ADS,
    payload
});