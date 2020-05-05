import {
    PUT_CAR_MANUFACTURERS
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    carManufacturers: {
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
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
    [PUT_CAR_MANUFACTURERS]: computationFunctions.putCarManufacturers
};

export default codebookReducer;