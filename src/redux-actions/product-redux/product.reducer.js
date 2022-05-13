import PRODUCT_ACTION_TYPES from "./product.types";

const INITIAL_STATE = {
    //sorted by high rating
    topProductsList: [],
    isTopLoading: false,
    topProductsError: null,
    //single product by id
    singleProduct: {},
    isSingleLoading: false,
    isSingleFail: null,
    //product categories
    product_categories: [],
    //cities list
    cities_list: [],
    //order values
    order_payload: {},
    order_is_loading: false,
    //GET NEW PRODUCTS LIST
    new_products_list: [],
    new_products_loading: false,
    //GET DISCOUNTED PRODUCTS LIST
    discounted_products_list: [],
    discounted_products_loading: [],
    //get orders list
    orders_list: [],
};


const productReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        //high rating product reducers
        case PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_START:
            return {
                ...state,
                isTopLoading: true,
                topProductsError: null,
            }
        case PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                isTopLoading: false,
                topProductsError: null,
                topProductsList: action.payload,
            }
        case PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                isTopLoading: false,
                topProductsError: action.payload,
                topProductsList: [],
            }
        //single product reducer
        case PRODUCT_ACTION_TYPES.GET_SINGLE_PRODUCT_START:
            return {
                ...state,
                singleProduct: {},
                isSingleLoading: true,
                isSingleFail: null,
            }
        case PRODUCT_ACTION_TYPES.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProduct: action.payload,
                isSingleLoading: false,
                isSingleFail: null,
            }
        case PRODUCT_ACTION_TYPES.GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                singleProduct: {},
                isSingleLoading: false,
                isSingleFail: action.payload,
            }
        case PRODUCT_ACTION_TYPES.GET_PRODUCT_CATEGORIES:
            return {
                ...state,
                product_categories: action.payload
            }
        case PRODUCT_ACTION_TYPES.GET_PRODUCT_CATEGORIES_START:
            return state;
        case PRODUCT_ACTION_TYPES.GET_CITIES_LIST:
            return {
                ...state,
                cities_list: action.payload
            }
        case PRODUCT_ACTION_TYPES.GET_CITIES_START:
            return state;
        case PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_START:
            return {
                ...state,
                order_payload: action.payload,
                order_is_loading: true,
            };
        case PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_SUCCESS:
            return {
                ...state,
                order_is_loading: false,
            };
        case PRODUCT_ACTION_TYPES.SET_ORDERED_PRODUCT_FAIL:
            return {
                ...state,
                order_is_loading: false,
            };
        case PRODUCT_ACTION_TYPES.GET_NEW_PRODUCTS_START:
            return {
                ...state,
                new_products_loading: true,
            };
        case PRODUCT_ACTION_TYPES.GET_NEW_PRODUCTS_SUCCESS:
            return {
                ...state,
                new_products_list: action.payload,
                new_products_loading: false,
            };
        //GET DISCOUNTED PRODUCTS LIST
        case PRODUCT_ACTION_TYPES.GET_DISCOUNTED_PRODUCTS_START:
            return {
                ...state,
                discounted_products_loading: true,
            };
        case PRODUCT_ACTION_TYPES.GET_DISCOUNTED_PRODUCTS_SUCCESS:
            return {
                ...state,
                discounted_products_loading: false,
                discounted_products_list: action.payload,
            };
        case PRODUCT_ACTION_TYPES.GET_ORDERED_PRODUCTS_SUCCESS:
            return {
                ...state,
                orders_list: action.payload,
            };
        default:
            return state;
    }
}

export default productReducer;