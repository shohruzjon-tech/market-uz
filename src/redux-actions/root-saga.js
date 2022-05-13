import { all, call } from '@redux-saga/core/effects';
import { productSagas } from './product-redux/product.sagas';
import { streamSagas } from './stream-redux/stream.saga';
import { userSagas } from './user-redux/user.sagas';

export default function* rootSaga() {
  yield all([call(productSagas), call(streamSagas), call(userSagas)]);
}
