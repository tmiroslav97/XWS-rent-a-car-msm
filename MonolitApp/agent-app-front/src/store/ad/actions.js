import{
    CREATED_AD
} from './constants';

export const createdAd = payload => ({
    type: CREATED_AD,
    payload
});