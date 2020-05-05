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
    putSuccessMsg
} from '../common/actions';

export function* fetchCarManufacturersPaginated() {
    yield take(FETCH_CAR_MANUFACTURERS);
    yield put(putIsFetchCodebook(false));
    const data = call(CodebookService.fetchCarManufacturersPaginated);
    yield put(putCarManufacturers(data.putCarManufacturers));
    yield put(putIsFetchCodebook(true));
}
