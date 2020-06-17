
import { take, put, call, select } from 'redux-saga/effects';
import { history } from '../../index';

import AdServices from '../../services/AdServices';

import {
    CREATED_AD,
    CREATED_AD_PHOTOS,
    FETCH_ADS,
    FETCH_ADS_FROM_PUBLISHER,
    FETCH_AD,
    UPLOAD_IMAGE,
    SEARCH_AD,
    PUT_IMAGE_SRC,
    PUT_CALENDAR,
    FETCH_CALENDAR
} from './constants';

import {
    putAds,
    putImageName,
    putAd,
    putImageSrc,
    putCalendar
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
    history.push('/');
}

//pokusaj poziva metode sa slikom 
export function* createdAdPhotos(){
    const { payload } = yield take(CREATED_AD_PHOTOS);
    const data = yield call(AdServices.createdAdPhotos, payload); 
    console.log("sagicaaa");
    console.log(data);
    // yield put(putSuccessMsg(data));
    // history.push('/');
}

export function* fetchAds() {
    const { payload } = yield take(FETCH_ADS);
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAdsPaginated, payload);
    yield put(putAds({
        'data': data.ads,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
}

export function* fetchAdsFromPublisher() {
    const { payload } = yield take(FETCH_ADS_FROM_PUBLISHER);
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAdsPaginatedfFromPublisher, payload);
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
    var id = payload.adId
    yield put(putAd({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAd, id);
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
    yield put(putImageName({
        'data': temp,
        'isFetch': true
    }));
    
}

export function* searchAd(){
    const { payload } = yield take(SEARCH_AD);
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAdsPaginatedSearch, payload.data);
    yield put(putAds({
        'data': data.ads,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'size': payload.size,
        'isFetch': true
    }));
    
}

export function* loadImage(){
    const { payload } = yield take(PUT_IMAGE_SRC);
    const data = yield call(AdServices.loadImage, payload); 

    // yield temp.push(data);
    // yield put(putImageName({
    //     'data': temp,
    //     'isFetch': true
    // }));
    
}

export function* fetchCalendar() {
    const { payload } = yield take(FETCH_CALENDAR);
    console.log("SAGA "+ payload.id)
    yield put(putCalendar({ 'isFetch': false }));
    const data = yield call(AdServices.fetchCalendar, payload.id);
    yield put(putCalendar({
        'data': data,
        'isFetch': true
    }));
}
