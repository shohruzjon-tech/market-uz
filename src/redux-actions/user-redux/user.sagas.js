import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import USER_ACTION_TYPES from './user.types';
import { getDoc } from "firebase/firestore";
import { 
    userAuthSucces,
    userAuthFail,
    getUserAddressSuccess,
 } from './user.actions';
import { 
  createUserProfileDocument,  
  getUserAddresses ,
} from 'services/firebase.utils';

//auth and create user
export function* userAuthOnLoad({ payload }) {
    try {
      const userRef = yield call(createUserProfileDocument, payload);
      const userSnapshot = yield getDoc(userRef);
      yield put(userAuthSucces({user_id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        userAuthFail(error);
    }
  }
  
  export function* onUserAuthStart() {
    yield takeLatest(USER_ACTION_TYPES.USER_AUTHENTICATE_START, userAuthOnLoad);
  }

//get user address
export function* userAddressOnLoad({ payload }) {
    try {
      const addressRef = yield call(getUserAddresses, payload);
      yield put(getUserAddressSuccess(addressRef));
    } catch (error) {
        console.log(error);
    }
  }
  
  export function* onGetUserAddressStart() {
    yield takeLatest(USER_ACTION_TYPES.GET_USER_ADDRESS_START, userAddressOnLoad);
  }
  
  
  
  
  
  
  
  
  
  //export all
    export function* userSagas() {
      yield all([
         call(onUserAuthStart), 
         call(onGetUserAddressStart), 
        ]);
    }
