import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import AuthSecurity from '../../services/AuthSecurity';

import {
    LOGIN,
    REGISTER_USER,
    SIGN_OUT
} from './constants';

import {
    putToken
} from './actions';

export function* signOut(){
    yield take(SIGN_OUT);
    yield put(putToken(null));
    localStorage.removeItem('token'); 
    history.push('/');
}

export function* loginUser(){
    const { payload } = yield take(LOGIN);
    const data = yield call(AuthSecurity.login, payload);    
    yield put(putToken(data));
    history.push('/');
}

export function* registerUser(){
    const { payload } = yield take(REGISTER_USER);
    const data = yield call(AuthSecurity.register, payload);    
    history.push('/');
}