import {
    PUT_IS_FETCH_CODEBOOK,
    PUT_CAR_MANUFACTURERS
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    carManufacturers: [],
    isFetchCodebook: false,
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
    [PUT_IS_FETCH_CODEBOOK]: computationFunctions.putIsFetchCodebook
};

export default codebookReducer;