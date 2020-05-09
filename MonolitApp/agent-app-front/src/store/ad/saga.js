import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import AdServices from '../../services/AdServices';

import {
    CREATED_AD,
    FETCH_ADS
} from './constants';

import {
    putAds
} from './actions';

import {
    putSuccessMsg
} from '../common/actions';


export function* createdAd(){
    const { payload } = yield take(CREATED_AD);
    console.log(payload);
    console.log("nestoooooo");
    const data = yield call(AdServices.createdAd, payload); 
    console.log("nestoooooo");
    yield put(putSuccessMsg(data));
    yield put(putSuccessMsg(null));
    history.push('/');
    
}

export function* fetchAds() {
    const { payload } = yield take(FETCH_ADS);
    yield put(putAds({ 'isFetch': false }));
    const data = yield call(AdServices.fetchAds, payload);
    yield put(putAds({
        'data': data.ads,
        'totalPageCnt': data.totalPageCnt,
        'nextPage': payload.nextPage,
        'isFetch': true
    }));
}

