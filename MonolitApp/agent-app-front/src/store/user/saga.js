import { take, put, call, select } from 'redux-saga/effects';
import { history } from '../../index';

import {
    LOGIN
} from './constants';

import {
    putToken
} from './actions';

export function* loginUser(){
    const { payload } = yield take(LOGIN);
    //data = yield call(ime_servisa.funkcija);
    yield put(putToken(data));
}