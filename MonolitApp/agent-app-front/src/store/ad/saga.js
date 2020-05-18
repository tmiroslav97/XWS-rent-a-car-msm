import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import AdServices from '../../services/AdServices';

import {
    CREATED_AD
} from './constants';

import {
    putSuccessMsg
} from '../common/actions';


export function* createdAd(){
    const { payload } = yield take(CREATED_AD);
    const data = yield call(AdServices.createdAd, payload); 
    yield put(putSuccessMsg(data));
    history.push('/');
    
}

