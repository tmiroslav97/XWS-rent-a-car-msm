import { take, put, call, select } from 'redux-saga/effects';

import CodebookService from '../../services/CodebookService';

import {
    FETCH_CAR_MANUFACTURERS, 
    ADD_CAR_MANUFACTURER, 
    EDIT_CAR_MANUFACTURER
} from './constants';

import {
    putCarManufacturers
} from './actions';

import { 
    carManufacturersSelector 
} from './selectors';

import {
    putSuccessMsg
} from '../common/actions';

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

export function* addCarManufacturer() {
    const { payload } = yield take(ADD_CAR_MANUFACTURER);
    const msg = yield call(CodebookService.addCarManufacturer, payload);
    yield put(putSuccessMsg(msg));
    yield put(putSuccessMsg(null));
    const temp = yield select(carManufacturersSelector);
    yield put(putCarManufacturers({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarManufacturersPaginated, { "nextPage": temp.nextPage, "size": temp.size });
    yield put(putCarManufacturers({
        'data': data.carManufacturers,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': temp.nextPage,
        'size': temp.size,
        'isFetch': true
    }));
}

export function* editCarManufacturer() {
    const { payload } = yield take(EDIT_CAR_MANUFACTURER);
    const msg = yield call(CodebookService.editCarManufacturer, payload);
    yield put(putSuccessMsg(msg));
    yield put(putSuccessMsg(null));
    const temp = yield select(carManufacturersSelector);
    yield put(putCarManufacturers({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarManufacturersPaginated, { "nextPage": temp.nextPage, "size": temp.size });
    yield put(putCarManufacturers({
        'data': data.carManufacturers,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': temp.nextPage,
        'size': temp.size,
        'isFetch': true
    }));
}