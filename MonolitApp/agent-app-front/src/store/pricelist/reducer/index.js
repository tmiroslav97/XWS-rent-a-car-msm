import * as computationFunctions from './computation-functions';

import {
    PUT_PRICE_LIST
} from '../constants';

const initialState = {
   pricelists: {
       data: [],
       isFetch: false
   }
};

const pricelistReducer = (state = initialState,{ type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_PRICE_LIST]: computationFunctions.putPriceList
};

export default adReducer;