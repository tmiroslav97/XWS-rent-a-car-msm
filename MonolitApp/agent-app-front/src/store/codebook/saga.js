import { take, put, call } from 'redux-saga/effects';

import CodebookService from '../../services/CodebookService';

import {
    FETCH_CAR_MANUFACTURERS
} from './constants';

import {
    putCarManufacturers
} from './actions';


export function* fetchCarManufacturersPaginated() {
    const { payload } = yield take(FETCH_CAR_MANUFACTURERS);
    yield put(putCarManufacturers({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarManufacturersPaginated, payload);
    yield put(putCarManufacturers({
        'data': data.carManufacturers,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
}
