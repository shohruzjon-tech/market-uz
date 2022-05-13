"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ic": () => (/* binding */ getTopProductsStart),
/* harmony export */   "VC": () => (/* binding */ getTopProductsSuccess),
/* harmony export */   "kB": () => (/* binding */ getTopProductsFail),
/* harmony export */   "W0": () => (/* binding */ getSingleProductStart),
/* harmony export */   "RZ": () => (/* binding */ getSingleProductSuccess),
/* harmony export */   "gT": () => (/* binding */ getSingleProductFail),
/* harmony export */   "vg": () => (/* binding */ getCategoryListStart),
/* harmony export */   "AT": () => (/* binding */ getCategoryList),
/* harmony export */   "HT": () => (/* binding */ getCitiesListStart),
/* harmony export */   "mV": () => (/* binding */ getCitiesList),
/* harmony export */   "g6": () => (/* binding */ setOrderSuccess),
/* harmony export */   "$j": () => (/* binding */ setOrderFail),
/* harmony export */   "ml": () => (/* binding */ getNewProductsListStart),
/* harmony export */   "gL": () => (/* binding */ getNewProductsListSuccess),
/* harmony export */   "Qj": () => (/* binding */ getDiscountedProductsListStart),
/* harmony export */   "MW": () => (/* binding */ getDiscountedProductsListSuccess),
/* harmony export */   "yn": () => (/* binding */ getOrdersListStart),
/* harmony export */   "nJ": () => (/* binding */ getOrderedProductsListSuccess)
/* harmony export */ });
/* unused harmony export setOrderStart */
/* harmony import */ var _product_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(578);

//group of products sorted by high rating
const getTopProductsStart = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_TOP_PRODUCTS_START */ .Z.GET_TOP_PRODUCTS_START
    })
;
const getTopProductsSuccess = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_TOP_PRODUCTS_SUCCESS */ .Z.GET_TOP_PRODUCTS_SUCCESS,
        payload: payload
    })
;
const getTopProductsFail = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_TOP_PRODUCTS_FAIL */ .Z.GET_TOP_PRODUCTS_FAIL,
        payload: payload
    })
;
//single product by id
const getSingleProductStart = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_SINGLE_PRODUCT_START */ .Z.GET_SINGLE_PRODUCT_START,
        payload: payload
    })
;
const getSingleProductSuccess = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_SINGLE_PRODUCT_SUCCESS */ .Z.GET_SINGLE_PRODUCT_SUCCESS,
        payload: payload
    })
;
const getSingleProductFail = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_SINGLE_PRODUCT_FAIL */ .Z.GET_SINGLE_PRODUCT_FAIL,
        payload: payload
    })
;
//GET PRODUCTS CATEGORY LIST
const getCategoryListStart = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_PRODUCT_CATEGORIES_START */ .Z.GET_PRODUCT_CATEGORIES_START
    })
;
const getCategoryList = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_PRODUCT_CATEGORIES */ .Z.GET_PRODUCT_CATEGORIES,
        payload: payload
    })
;
//GET locations
const getCitiesListStart = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_CITIES_START */ .Z.GET_CITIES_START
    })
;
const getCitiesList = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_CITIES_LIST */ .Z.GET_CITIES_LIST,
        payload: payload
    })
;
//set order 
const setOrderStart = (payload)=>({
        type: PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_START,
        payload: payload
    })
;
const setOrderSuccess = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SET_ORDERED_PRODUCT_SUCCESS */ .Z.SET_ORDERED_PRODUCT_SUCCESS
    })
;
const setOrderFail = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SET_ORDERED_PRODUCT_FAIL */ .Z.SET_ORDERED_PRODUCT_FAIL
    })
;
//get new products list
const getNewProductsListStart = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_NEW_PRODUCTS_START */ .Z.GET_NEW_PRODUCTS_START
    })
;
const getNewProductsListSuccess = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_NEW_PRODUCTS_SUCCESS */ .Z.GET_NEW_PRODUCTS_SUCCESS,
        payload: payload
    })
;
//get new products list
const getDiscountedProductsListStart = ()=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_DISCOUNTED_PRODUCTS_START */ .Z.GET_DISCOUNTED_PRODUCTS_START
    })
;
const getDiscountedProductsListSuccess = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_DISCOUNTED_PRODUCTS_SUCCESS */ .Z.GET_DISCOUNTED_PRODUCTS_SUCCESS,
        payload: payload
    })
;
//get list of ordered products list
const getOrdersListStart = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_ORDERED_PRODUCTS_START */ .Z.GET_ORDERED_PRODUCTS_START,
        payload: payload
    })
;
const getOrderedProductsListSuccess = (payload)=>({
        type: _product_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_ORDERED_PRODUCTS_SUCCESS */ .Z.GET_ORDERED_PRODUCTS_SUCCESS,
        payload: payload
    })
;


/***/ }),

/***/ 578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PRODUCT_ACTION_TYPES = {
    GET_TOP_PRODUCTS_START: 'GET_TOP_PRODUCTS_START',
    GET_TOP_PRODUCTS_SUCCESS: 'GET_TOP_PRODUCTS_SUCCESS',
    GET_TOP_PRODUCTS_FAIL: 'GET_TOP_PRODUCTS_FAIL',
    GET_SINGLE_PRODUCT_START: 'GET_SINGLE_PRODUCT_START',
    GET_SINGLE_PRODUCT_SUCCESS: 'GET_SINGLE_PRODUCT_SUCCESS',
    GET_SINGLE_PRODUCT_FAIL: 'GET_SINGLE_PRODUCT_FAIL',
    GET_PRODUCT_CATEGORIES_START: 'GET_PRODUCT_CATEGORIES_START',
    GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
    GET_CITIES_START: 'GET_CITIES_START',
    GET_CITIES_LIST: 'GET_CITIES_LIST',
    SET_ORDERED_PRODUCT_START: 'SET_ORDERED_PRODUCT_START',
    SET_ORDERED_PRODUCT_SUCCESS: 'SET_ORDERED_PRODUCT_SUCCESS',
    SET_ORDERED_PRODUCT_FAIL: 'SET_ORDERED_PRODUCT_FAIL',
    GET_NEW_PRODUCTS_START: 'GET_NEW_PRODUCTS_START',
    GET_NEW_PRODUCTS_SUCCESS: 'GET_NEW_PRODUCTS_SUCCESS',
    GET_DISCOUNTED_PRODUCTS_START: 'GET_DISCOUNTED_PRODUCTS_START',
    GET_DISCOUNTED_PRODUCTS_SUCCESS: 'GET_DISCOUNTED_PRODUCTS_SUCCESS',
    GET_ORDERED_PRODUCTS_START: 'GET_ORDERED_PRODUCTS_START',
    GET_ORDERED_PRODUCTS_SUCCESS: 'GET_ORDERED_PRODUCTS_SUCCESS'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PRODUCT_ACTION_TYPES);


/***/ })

};
;