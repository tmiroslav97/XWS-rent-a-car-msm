import { all, spawn, call, put } from 'redux-saga/effects';
import flatten from 'lodash/flatten';

import * as userSaga from './user/saga';
import * as adSaga from './ad/saga';

import {
  putErrorMsg
} from './common/actions';

export default function* rootSaga() {
  let sagas = flatten(
    [
      userSaga,
      adSaga
    ].map(saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName]))
  );


  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (e) {
            yield put(putErrorMsg(e.response.data));
            yield put(putErrorMsg(null));
            //console.log(e.response.data);
          }
        }
      })
    )
  );

}