import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';
import jwt_decode from 'jwt-decode';

import AuthSecurity from '../../services/AuthSecurity';

import {
    LOGIN,
    REGISTER_USER,
    SIGN_OUT
} from './constants';

import {
    putToken
} from './actions';

import {
    putSuccessMsg
} from '../common/actions';

export function* signOut() {
    yield take(SIGN_OUT);
    yield put(putToken(null));
    localStorage.removeItem('token');
    history.push('/');
}

export function* loginUser() {
    const { payload } = yield take(LOGIN);
    const data = yield call(AuthSecurity.login, payload);
    yield put(putToken(data));
    const role = jwt_decode(data).role;
    if (role === 'ROLE_AGENT') {
        history.push('/agent-firm');
    } else if (role === 'ROLE_USER') {
        history.push('/enduser');
    } else {
        history.push('/');
    }
}

export function* registerUser() {
    const { payload } = yield take(REGISTER_USER);
    const data = yield call(AuthSecurity.register, payload);
    yield put(putSuccessMsg(data));
    yield put(putSuccessMsg(null));
}