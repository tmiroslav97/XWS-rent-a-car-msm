import * as computationFunctions from './computation-functions';

import {
    PUT_ADS,
    PUT_IMAGE
} from '../constants';

const initialState = {
   ads: {
       id: 0,
       data: [],
       totalPageCnt: 0,
       nextPage: 0,
       size: 10,
       isFetch: false
   }
};

const adReducer = (state = initialState,{ type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_ADS]: computationFunctions.putAds
};

export default adReducer;