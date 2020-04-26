import {
    PUT_ERROR_MSG,
    PUT_SUCCESS_MSG,
    PUT_WARN_MSG,
    PUT_INFO_MSG
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    error: null,
    success: null,
    warn: null,
    info: null
};

const commonReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_ERROR_MSG]: computationFunctions.putError,
    [PUT_SUCCESS_MSG]: computationFunctions.putSuccess,
    [PUT_WARN_MSG]: computationFunctions.putWarn,
    [PUT_INFO_MSG]: computationFunctions.putInfo
};

export default commonReducer;