import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { 
    getTopProductsSuccess,
    getTopProductsFail,
    getSingleProductSuccess,
    getSingleProductFail,
    getCategoryList,
    getCitiesList,
    setOrderFail,
    setOrderSuccess,
    getNewProductsListSuccess,
    getDiscountedProductsListSuccess,
    getOrderedProductsListSuccess,
} from "./product.actions";
import PRODUCT_ACTION_TYPES from './product.types';
import { 
  getProductsWithTopRating, 
  getProductById, 
  getListOfCategories, 
  getListOfCities, 
  setProductOrder ,
  getProductswithNewStatus,
  getDiscountedProductsList,
  getUserOrdersList,
} from 'services/firebase.utils';

// get by high rating

export function* getTopProducts({ payload }) {
    try {
      const topProductsList = yield call(getProductsWithTopRating, payload);
      yield put(getTopProductsSuccess(topProductsList));
    } catch (error) {
      yield put(getTopProductsFail(error.message));
    }
  }
  
  export function* onGetTopProductsStart() {
    yield takeLatest(PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_START, getTopProducts);
  }
  

//get by id

export function* getProductByIdSaga( payload ) {
  try {
    const singleProduct = yield call(getProductById, payload);
    yield put(getSingleProductSuccess(singleProduct));
  } catch (error) {
    yield put(getSingleProductFail(error.message));
  }
}

export function* onGetProductStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.GET_SINGLE_PRODUCT_START, getProductByIdSaga);
}

//get categories list

export function* getCategoryListOnLoad() {
  try {
    const categoryList = yield call(getListOfCategories, null);
    yield put(getCategoryList(categoryList));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetCategoryStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.GET_PRODUCT_CATEGORIES_START, getCategoryListOnLoad);
}
//get cities list

export function* getCitiesListOnLoad() {
  try {
    const citiesList = yield call(getListOfCities, null);
    yield put(getCitiesList(citiesList));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetCitiesStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.GET_CITIES_START, getCitiesListOnLoad);
}

//set product order

export function* setProductOrderOnLoad({ payload }) {
  try {
    const setOrderStatus = yield call(setProductOrder, payload);
    yield put(setOrderSuccess(setOrderStatus));
  } catch (error) {
    yield put(setOrderFail(null));
  }
}

export function* onSetProductOrderStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_START, setProductOrderOnLoad);
}

//get products with new status

export function* getNewProductsOnLoad() {
  try {
    const newProductsList = yield call(getProductswithNewStatus);
    yield put(getNewProductsListSuccess(newProductsList));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetNewProductsStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.GET_NEW_PRODUCTS_START, getNewProductsOnLoad);
}

//get products with new status

export function* getdiscountedProductsOnLoad() {
  try {
    const discountedProductsList = yield call(getDiscountedProductsList);
    yield put(getDiscountedProductsListSuccess(discountedProductsList));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetDiscountedProductsStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.GET_NEW_PRODUCTS_START, getdiscountedProductsOnLoad);
}

//get list of ordered products

export function* getOrderedProductsOnLoad({ payload }) {
  try {
    const orderProductsList = yield call(getUserOrdersList, payload);
    yield put(getOrderedProductsListSuccess(orderProductsList));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetOrdredProductsStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.GET_ORDERED_PRODUCTS_START, getOrderedProductsOnLoad);
}









//export all
  export function* productSagas() {
    yield all([
      call(onGetTopProductsStart), 
      call(onGetProductStart), 
      call(onGetCategoryStart), 
      call(onGetCitiesStart),
      call(onSetProductOrderStart),
      call(onGetNewProductsStart),
      call(onGetDiscountedProductsStart),
      call(onGetOrdredProductsStart),
      ]);
  }