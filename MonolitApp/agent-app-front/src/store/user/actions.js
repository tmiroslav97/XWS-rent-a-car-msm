import {
    LOGIN,
    PUT_TOKEN
} from './constants';

export const putToken = payload => ({
    type: PUT_TOKEN,
    payload
});

export const loginUser = payload => ({
    type: LOGIN,
    payload
});