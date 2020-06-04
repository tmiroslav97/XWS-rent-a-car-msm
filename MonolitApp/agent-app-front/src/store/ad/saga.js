
import { take, put, call, select } from 'redux-saga/effects';
import { history } from '../../index';

import AdServices from '../../services/AdServices';

import {
    CREATED_AD,
    FETCH_ADS,
    FETCH_ADS_FROM_PUBLISHER,
    FETCH_AD,
    UPLOAD_IMAGE,
    SEARCH_AD,
    PUT_IMAGE_SRC
} from './constants';

import {
    putAds,
    putImageName,
    putAd,
    putImageSrc
} from './actions';

import {
    putSuccessMsg
} from '../common/actions';

import {
    imageNameSelector
} from './selectors';


export function* createdAd(){
    const { payload } = yield take(CREATED_AD);
    const data = yield call(AdServices.createdAd, payload); 
    yield put(putSuccessMsg(data));
    // history.push('/');
}

export function* fetchAds() {
    console.log("Dobavaljenje oglasa sagaaa")
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

export function* fetchAdsFromPublisher() {
    console.log("Dobavaljenje oglasa sagaaa")
    const { payload } = yield take(FETCH_ADS_FROM_PUBLISHER);
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAdsPaginatedfFromPublisher, payload);
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
    var id = payload.adId
    yield put(putAd({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAd, id);
    console.log(data);
    yield put(putAd({
        'data': data,
        'isFetch': true
    }));
}

export function* uploadImage(){
    const { payload } = yield take(UPLOAD_IMAGE);
    const temp = yield select(imageNameSelector);
    yield put(putImageName({ 'isFetch': false }));
    const data = yield call(AdServices.uploadImage, payload); 
    yield temp.push(data);
    console.log("listaaaaa u sagiiii")
    console.log(temp);
    yield put(putImageName({
        'data': temp,
        'isFetch': true
    }));
    
}

export function* searchAd(){
    console.log("SAGA PRETRAGAAA")
    const { payload } = yield take(SEARCH_AD);
    yield put(putAds({ 'isFetch': false }));
    console.log("Payload objekat");
    console.log(payload.data)
    const data = yield call(AdServices.fetchAdsPaginatedSearch, payload.data);
    console.log(data);
    console.log("PODACII ISPISANI III");
    yield put(putAds({
        'data': data.ads,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
    
}

export function* loadImage(){
    console.log("SAGA LOAD")
    const { payload } = yield take(PUT_IMAGE_SRC);
    console.log(payload);
    const data = yield call(AdServices.loadImage, payload); 

    // yield temp.push(data);
    // console.log("listaaaaa u sagiiii")
    // console.log(temp);
    // yield put(putImageName({
    //     'data': temp,
    //     'isFetch': true
    // }));
    
}
