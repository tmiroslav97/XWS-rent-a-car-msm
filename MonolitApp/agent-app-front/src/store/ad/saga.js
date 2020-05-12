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
    console.log(payload);
    console.log("nestoooooo");
    const data = yield call(AdServices.createdAd, payload); 
    console.log("nestoooooo");
    yield put(putSuccessMsg(data));
    history.push('/');
    
}

