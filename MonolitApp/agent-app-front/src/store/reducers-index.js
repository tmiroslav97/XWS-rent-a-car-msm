import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import commonReducer from './common/reducer';
import adReducer from './ad/reducer';

const rootReducer = combineReducers({
    userReducer,
    commonReducer,
    adReducer
});


export default (state, action) => {
    return rootReducer(state, action);
};