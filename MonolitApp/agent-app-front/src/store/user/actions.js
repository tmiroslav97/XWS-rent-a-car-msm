import {
    LOGIN,
    PUT_TOKEN,
    REGISTER_USER
} from './constants';

export const registerUser = payload => ({
    type: REGISTER_USER,
    payload
});

export const putToken = payload => ({
    type: PUT_TOKEN,
    payload
});

export const loginUser = payload => ({
    type: LOGIN,
    payload
});