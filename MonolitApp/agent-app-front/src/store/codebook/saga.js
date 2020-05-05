import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import CodebookService from '../../services/CodebookService';

import {
    FETCH_CAR_MANUFACTURERS
} from './constants';

import {
    putIsFetchCodebook,
    putCarManufacturers
} from './actions';

import {
    putSuccessMsg,
    putTotalPageCnt,
    putNextPage
} from '../common/actions';

export function* fetchCarManufacturersPaginated() {
    const { payload } = yield take(FETCH_CAR_MANUFACTURERS);
    yield put(putIsFetchCodebook(false));
    const data = yield call(CodebookService.fetchCarManufacturersPaginated, payload);
    yield put(putCarManufacturers(data.carManufacturers));
    yield put(putNextPage(payload.nextPage));
    yield put(putTotalPageCnt(data.totalPageCnt));
    yield put(putIsFetchCodebook(true));
}
