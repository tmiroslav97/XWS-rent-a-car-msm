import {
    PUT_TOKEN
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    token: localStorage.getItem('token')
};

const userReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_TOKEN]: computationFunctions.putToken
};

export default userReducer;