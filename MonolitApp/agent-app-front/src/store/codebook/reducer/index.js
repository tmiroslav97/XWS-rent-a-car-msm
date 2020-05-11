import {
    PUT_CAR_MANUFACTURERS,
    PUT_CAR_TYPES,
    PUT_FUEL_TYPES,
    PUT_GEARBOX_TYPES,
    PUT_CAR_MODELS
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
    fuelTypes: {
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
        size: 10,
        isFetch: false
    },
    gearboxTypes: {
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
        size: 10,
        isFetch: false
    },
    carModels: {
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
        size: 10,
        isFetch: false
    }
};

const codebookReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CAR_MANUFACTURERS]: computationFunctions.putCarManufacturers,
    [PUT_CAR_TYPES]: computationFunctions.putCarTypes,
    [PUT_FUEL_TYPES]: computationFunctions.putFuelTypes,
    [PUT_GEARBOX_TYPES]: computationFunctions.putGearboxTypes,
    [PUT_CAR_MODELS]: computationFunctions.putCarModels
};

export default codebookReducer;