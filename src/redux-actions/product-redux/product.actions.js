import PRODUCT_ACTION_TYPES from "./product.types";

//group of products sorted by high rating

export const getTopProductsStart = ()=>({
   type: PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_START,
});

export const getTopProductsSuccess = (payload) =>({
   type: PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_SUCCESS,
   payload: payload,
});

export const getTopProductsFail = (payload) =>({
   type: PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_FAIL,
   payload: payload,
});


//single product by id


export const getSingleProductStart = (payload) => ({
  type: PRODUCT_ACTION_TYPES.GET_SINGLE_PRODUCT_START,
  payload: payload,
});

export const getSingleProductSuccess = (payload) => ({
  type: PRODUCT_ACTION_TYPES.GET_SINGLE_PRODUCT_SUCCESS,
  payload: payload,
});

export const getSingleProductFail = (payload) => ({
  type: PRODUCT_ACTION_TYPES.GET_SINGLE_PRODUCT_FAIL,
  payload: payload,
});

//GET PRODUCTS CATEGORY LIST
export const getCategoryListStart = () => ({
  type: PRODUCT_ACTION_TYPES.GET_PRODUCT_CATEGORIES_START,
});

export const getCategoryList = (payload) => ({
  type: PRODUCT_ACTION_TYPES.GET_PRODUCT_CATEGORIES,
  payload: payload,
});


//GET locations

export const getCitiesListStart = () => ({
  type: PRODUCT_ACTION_TYPES.GET_CITIES_START,
});

export const getCitiesList = (payload) => ({
  type: PRODUCT_ACTION_TYPES.GET_CITIES_LIST,
  payload: payload,
});



//set order 


export const setOrderStart = (payload) => ({
  type: PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_START,
  payload: payload,
});

export const setOrderSuccess = ()=>({
  type: PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_SUCCESS,
})

export const setOrderFail = ()=>({
  type: PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_FAIL,
})


//get new products list

export const getNewProductsListStart = () =>({
  type: PRODUCT_ACTION_TYPES.GET_NEW_PRODUCTS_START,
});

export const getNewProductsListSuccess = (payload) =>({
  type: PRODUCT_ACTION_TYPES.GET_NEW_PRODUCTS_SUCCESS,
  payload: payload,
});


//get new products list

export const getDiscountedProductsListStart = () =>({
  type: PRODUCT_ACTION_TYPES.GET_DISCOUNTED_PRODUCTS_START,
});

export const getDiscountedProductsListSuccess = (payload) =>({
  type: PRODUCT_ACTION_TYPES.GET_DISCOUNTED_PRODUCTS_SUCCESS,
  payload: payload,
});


//get list of ordered products list


export const getOrdersListStart = (payload) =>({
   type: PRODUCT_ACTION_TYPES.GET_ORDERED_PRODUCTS_START,
   payload: payload,
});

export const getOrderedProductsListSuccess = (payload) =>({
   type: PRODUCT_ACTION_TYPES.GET_ORDERED_PRODUCTS_SUCCESS,
   payload: payload,
});