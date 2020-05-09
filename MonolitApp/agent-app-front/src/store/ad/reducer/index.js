import * as computationFunctions from './computation-functions';

import {
    PUT_ADS
} from '../constants';

const initialState = {
   ads: {
       data: [],
       totalPageCnt: 0,
       nextPage: 0,
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