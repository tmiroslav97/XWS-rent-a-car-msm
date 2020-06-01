import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';
import jwt_decode from 'jwt-decode';

import AuthSecurity from '../../services/AuthSecurity';
import UserService from '../../services/UserService';

import {
    LOGIN,
    REGISTER_USER,
    SIGN_OUT,
    BLOCK_OR_UNBLOCK,
    OBLIGATE_OR_UNOBLIGATE,
    LOG_DEL_OR_REVERT,
    FETCH_END_USERS_PAGINATED
} from './constants';

import {
    putToken,
    putEndUsers
} from './actions';

import {
    putSuccessMsg
} from '../common/actions';

//end users
export function* fetchEndUsersPaginated() {
    const { payload } = yield take(FETCH_END_USERS_PAGINATED);
    yield put(putEndUsers({ 'isFetch': false }));
    const data = yield call(UserService.fetchEndUsersPaginated, payload);
    yield put(putEndUsers({
        'data': data.endUsers,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
}

//users
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
    const roles = jwt_decode(data).roles;
    history.push('/panel');
}

export function* registerUser() {
    const { payload } = yield take(REGISTER_USER);
    const data = yield call(AuthSecurity.register, payload);
    yield put(putSuccessMsg(data));
}