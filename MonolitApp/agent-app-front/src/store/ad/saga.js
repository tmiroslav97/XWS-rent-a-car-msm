import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';
import jwt_decode from 'jwt-decode';

import AuthSecurity from '../../services/AuthSecurity';

import {
    CREATED_AD
} from './constants';

import {
    putSuccessMsg
} from '../common/actions';


export function* createdAd(){
    const { payload } = yield take(CREATED_AD);
    console.log(payload);
    const role = jwt_decode(localStorage.getItem('token')).role;
    if (role === 'ROLE_AGENT') {
        console.log("nestoooooo");
        const data = yield call(AuthSecurity.createdAd, payload); 
        yield put(putSuccessMsg(data));
        yield put(putSuccessMsg(null));
        history.push('/');
    } 
}

