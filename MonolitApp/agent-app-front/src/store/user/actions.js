import {
    LOGIN,
    PUT_TOKEN,
    REGISTER_USER,
    SIGN_OUT
} from './constants';

export const signOut = payload => ({
    type: SIGN_OUT,
    payload
});

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