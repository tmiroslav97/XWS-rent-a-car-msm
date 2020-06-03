import{
    CREATED_AD,
    FETCH_ADS,
    FETCH_AD,
    PUT_ADS,
    UPLOAD_IMAGE,
    PUT_IMAGE_NAME,
    PUT_AD,
    SEARCH_AD
} from './constants';

export const createdAd = payload => ({
    type: CREATED_AD,
    payload
});

export const fetchAds = payload => ({
    type: FETCH_ADS,
    payload
});

export const fetchAd = payload => ({
    type: FETCH_AD,
    payload
});

export const putAds = payload => ({
    type: PUT_ADS,
    payload
});

export const uploadImage = payload => ({
    type: UPLOAD_IMAGE,
    payload
});

export const putImageName = payload => ({
    type: PUT_IMAGE_NAME,
    payload
});
export const putAd = payload => ({
    type: PUT_AD,
    payload
});

export const searchAd = payload => ({
    type: SEARCH_AD,
    payload
});
