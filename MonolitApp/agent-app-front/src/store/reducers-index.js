import { combineReducers } from 'redux';

import userReducer from './user/reducer';
const rootReducer = combineReducers({
    userReducer
});


export default (state, action) => {
    return rootReducer(state, action);
};