import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import commonReducer from './common/reducer';
import adReducer from './ad/reducer';
import codebookReducer from './codebook/reducer';

const rootReducer = combineReducers({
    userReducer,
    commonReducer,
    adReducer,
    codebookReducer
});


export default (state, action) => {
    return rootReducer(state, action);
};