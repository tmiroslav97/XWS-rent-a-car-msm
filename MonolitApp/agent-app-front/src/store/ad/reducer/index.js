

import * as computationFunctions from './computation-functions';

const initialState = {
   
};

const adReducer = (state = initialState,{ type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {

};

export default adReducer;