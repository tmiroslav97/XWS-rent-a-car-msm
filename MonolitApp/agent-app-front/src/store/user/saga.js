import { take, put, call, select } from 'redux-saga/effects';
import { history } from '../../index';

import AuthSecurity from '../../services/AuthSecurity';

import {
    LOGIN
} from './constants';

import {
    putToken
} from './actions';

export function* loginUser(){
    const { payload } = yield take(LOGIN);
    const data = yield call(AuthSecurity.login, payload);    
    yield put(putToken(data));

    history.push('/');
}