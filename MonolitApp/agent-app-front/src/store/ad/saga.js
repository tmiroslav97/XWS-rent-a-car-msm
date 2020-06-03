
import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import AdServices from '../../services/AdServices';

import {
    CREATED_AD,
    FETCH_ADS,
    FETCH_AD,
    UPLOAD_IMAGE
} from './constants';

import {
    putAds,
    putImageName
} from './actions';

import {
    putSuccessMsg
} from '../common/actions';


export function* createdAd(){
    const { payload } = yield take(CREATED_AD);
    const data = yield call(AdServices.createdAd, payload); 
    yield put(putSuccessMsg(data));
    history.push('/');
    
}

export function* fetchAds() {
    const { payload } = yield take(FETCH_ADS);
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAdsPaginated, payload);
    console.log(data);
    yield put(putAds({
        'data': data.ads,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
}

export function* fetchAd() {
    const { payload } = yield take(FETCH_AD);

    console.log("SAGA  ADDDD")
    console.log(payload.adId)
    var id = payload.adId
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAd, id);
    console.log(data);
    yield put(putAds({
        'data': data,
        'isFetch': true
    }));
}

export function* uploadImage(){
    const { payload } = yield take(UPLOAD_IMAGE);
    yield put(putImageName({ 'isFetch': false }));
    const data = yield call(AdServices.uploadImage, payload); 
    yield put(putImageName({
        'data': data,
        'isFetch': true
    }));
}

