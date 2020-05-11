import {
    PUT_CAR_MANUFACTURERS,
    PUT_CAR_TYPES
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    carManufacturers: {
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
        size: 10,
        isFetch: false
    },
    carTypes: {
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
        size: 10,
        isFetch: false
    },
    fuelTypes: []
};

const codebookReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CAR_MANUFACTURERS]: computationFunctions.putCarManufacturers,    
    [PUT_CAR_TYPES]: computationFunctions.putCarTypes
};

export default codebookReducer;