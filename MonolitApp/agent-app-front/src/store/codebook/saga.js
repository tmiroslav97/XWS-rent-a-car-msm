import { take, put, call, select } from 'redux-saga/effects';

import CodebookService from '../../services/CodebookService';

import {
    FETCH_CAR_MANUFACTURERS,
    ADD_CAR_MANUFACTURER,
    EDIT_CAR_MANUFACTURER,
    DELETE_CAR_MANUFACTURER,
    FETCH_CAR_TYPES,
    ADD_CAR_TYPE,
    EDIT_CAR_TYPE,
    DELETE_CAR_TYPE
} from './constants';

import {
    putCarManufacturers,
    putCarTypes
} from './actions';

import {
    carManufacturersSelector,
    carTypesSelector
} from './selectors';

import {
    putSuccessMsg
} from '../common/actions';

//for car types
export function* fetchCarTypessPaginated() {
    const { payload } = yield take(FETCH_CAR_TYPES);
    yield put(putCarTypes({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarTypesPaginated, payload);
    yield put(putCarTypes({
        'data': data.carTypes,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
}

export function* addCarType() {
    const { payload } = yield take(ADD_CAR_TYPE);
    const msg = yield call(CodebookService.addCarType, payload);
    yield put(putSuccessMsg(msg));
    yield put(putSuccessMsg(null));
    const temp = yield select(carTypesSelector);
    yield put(putCarTypes({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarTypesPaginated, { "nextPage": temp.nextPage, "size": temp.size });
    yield put(putCarTypes({
        'data': data.carTypes,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': temp.nextPage,
        'size': temp.size,
        'isFetch': true
    }));
}

export function* editCarType() {
    const { payload } = yield take(EDIT_CAR_TYPE);
    const msg = yield call(CodebookService.editCarType, payload);
    yield put(putSuccessMsg(msg));
    yield put(putSuccessMsg(null));
    const temp = yield select(carTypesSelector);
    yield put(putCarTypes({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarTypesPaginated, { "nextPage": temp.nextPage, "size": temp.size });
    yield put(putCarTypes({
        'data': data.carTypes,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': temp.nextPage,
        'size': temp.size,
        'isFetch': true
    }));
}

export function* deleteCarType() {
    const { payload } = yield take(DELETE_CAR_TYPE);
    const msg = yield call(CodebookService.deleteCarType, payload);
    yield put(putSuccessMsg(msg));
    yield put(putSuccessMsg(null));
    const temp = yield select(carTypesSelector);
    yield put(putCarTypes({ 'isFetch': false }));
    const data = yield call(CodebookService.fetchCarTypesPaginated, { "nextPage": temp.nextPage, "size": temp.size });
    yield put(putCarTypes({
        'data': data.carTypes,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': temp.nextPage,
        'size': temp.size,
        'isFetch': true
    }));
}
//for car manufacturers
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

export function* deleteCarManufacturer() {
    const { payload } = yield take(DELETE_CAR_MANUFACTURER);
    const msg = yield call(CodebookService.deleteCarManufacturer, payload);
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