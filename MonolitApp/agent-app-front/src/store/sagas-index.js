import { all, spawn, call } from 'redux-saga/effects';
import flatten from 'lodash/flatten';

import * as userSaga from './user/saga';


export default function* rootSaga() {
    let sagas = flatten(
      [
        userSaga
      ].map(saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName]))
    );
  
    
    yield all(
      sagas.map(saga =>
        spawn(function* () {
          while (true) {
            try {
              yield call(saga);
            } catch (e) {
              //yield put(putErrorMsg(e.message));
              //yield put(putErrorMsg(null));
              console.log(e.data);
            }
          }
        })
      )
    );
    
  }