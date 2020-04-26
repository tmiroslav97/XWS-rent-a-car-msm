import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import commonReducer from './common/reducer';

const rootReducer = combineReducers({
    userReducer,
    commonReducer
});


export default (state, action) => {
    return rootReducer(state, action);
};