import * as computationFunctions from './computation-functions';

import {
    PUT_ADS,
    PUT_IMAGE_NAME,
    PUT_AD,
    PUT_IMAGE_SRC
} from '../constants';

const initialState = {
    ads: {
        id: 0,
        data: [],
        totalPageCnt: 0,
        nextPage: 0,
        size: 10,
        isFetch: false
    },
    imageName: {
        data: [],
        isFetch: false
    },
    ad: {
        data: [],
        isFetch: false
    },
    imagesSrc: {
        src: null,
        ad_id: 0,
        name: null,
        isFetch: false
    }

};

const adReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_ADS]: computationFunctions.putAds,
    [PUT_IMAGE_NAME]: computationFunctions.putImageName,
    [PUT_AD]: computationFunctions.putAd,
    [PUT_IMAGE_SRC]: computationFunctions.putImageSrc


};

export default adReducer;