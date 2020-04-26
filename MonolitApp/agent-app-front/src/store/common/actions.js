import {
    PUT_SUCCESS_MSG,
    PUT_ERROR_MSG,
    PUT_WARN_MSG,
    PUT_INFO_MSG
} from './constants';

export const putInfoMsg = payload => ({
    type: PUT_INFO_MSG,
    payload
});

export const putWarnMsg = payload => ({
    type: PUT_WARN_MSG,
    payload
});

export const putSuccessMsg = payload => ({
    type: PUT_SUCCESS_MSG,
    payload
});

export const putErrorMsg = payload => ({
    type: PUT_ERROR_MSG,
    payload
});