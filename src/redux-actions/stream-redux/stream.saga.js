import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import STREAM_ACTION_TYPES from './stream.type';
import { getStreamInfoSuccess } from './stream.action';
import { getStreamInfo } from '../../services/firebase.utils';


export function* getStreamInfoOnLoad({ payload }) {
    try {
      const streamedProductInfo = yield call(getStreamInfo, payload);
      yield put(getStreamInfoSuccess(streamedProductInfo));
    } catch (error) {
      console.log(error);
    };
  }
  
  export function* onGetStreamInfoStart() {
    yield takeLatest(STREAM_ACTION_TYPES.GET_STREAM_PRODUCT_START, getStreamInfoOnLoad);
  }
  
  
  
  
  
  
  
  
  
  //export all
    export function* streamSagas() {
      yield all([call(onGetStreamInfoStart)]);
    }