"use strict";
exports.id = 6562;
exports.ids = [6562];
exports.modules = {

/***/ 8519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wI": () => (/* binding */ AppProvider),
  "bp": () => (/* binding */ useAppContext)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/reducers/cartReducer.js
const CHANGE_CART_AMOUNT = "CHANGE_CART_AMOUNT";
const cartInitialState = {
    cartList: [
        {
            price: 250,
            name: "Ford 2019",
            imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
            id: "7222243834583537",
            qty: 1
        },
        {
            price: 250,
            name: "Porsche 2020",
            imgUrl: "/assets/images/products/Automotive/28.Porsche2020.png",
            id: "38553442244076086",
            qty: 1
        },
        {
            price: 250,
            name: "Heavy 20kt Gold Necklace",
            imgUrl: "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
            id: "9573201630529315",
            qty: 1
        }
    ]
};
const cartReducer = (state, action)=>{
    switch(action.type){
        case CHANGE_CART_AMOUNT:
            let cartList = state.cartList;
            let cartItem = action.payload;
            let exist = cartList.find((item)=>item.id === cartItem.id
            );
            if (cartItem.qty < 1) return {
                cartList: cartList.filter((item)=>item.id !== cartItem.id
                )
            };
            else if (exist) return {
                cartList: cartList.map((item)=>{
                    if (item.id === cartItem.id) return {
                        ...item,
                        qty: cartItem.qty
                    };
                    else return item;
                })
            };
            else return {
                cartList: [
                    ...cartList,
                    cartItem
                ]
            };
        default:
            {
                return state;
            }
    }
};

;// CONCATENATED MODULE: ./src/reducers/combineReducers.js
const combineReducers = (reducers)=>{
    return (state = {}, action)=>{
        const newState = {};
        for(let key in reducers){
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    };
};
/* harmony default export */ const reducers_combineReducers = (combineReducers);

;// CONCATENATED MODULE: ./src/reducers/layoutReducer.js
const layoutInitialState = {
    isHeaderFixed: false
};
const layoutReducer = (state, action)=>{
    switch(action.type){
        case 'TOGGLE_HEADER':
            return {
                ...state,
                isHeaderFixed: action.payload
            };
        default:
            {}
    }
};

;// CONCATENATED MODULE: ./src/reducers/rootReducer.js



const initialState = {
    layout: layoutInitialState,
    cart: cartInitialState
};
const rootReducer = reducers_combineReducers({
    layout: layoutReducer,
    cart: cartReducer
});

;// CONCATENATED MODULE: ./src/contexts/app/AppContext.jsx

 // import { ContextDevTool } from "react-context-devtool";

const AppContext = /*#__PURE__*/ (0,external_react_.createContext)({
    state: initialState,
    dispatch: ()=>{}
});
const AppProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(rootReducer, initialState);
    const contextValue = (0,external_react_.useMemo)(()=>{
        return {
            state,
            dispatch
        };
    }, [
        state,
        dispatch
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: contextValue,
        children: children
    }));
};
const useAppContext = ()=>(0,external_react_.useContext)(AppContext)
;
/* harmony default export */ const app_AppContext = ((/* unused pure expression or super */ null && (AppContext)));


/***/ }),

/***/ 7524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xe": () => (/* binding */ userAuthStart),
/* harmony export */   "QS": () => (/* binding */ userAuthSucces),
/* harmony export */   "oT": () => (/* binding */ userAuthFail),
/* harmony export */   "nc": () => (/* binding */ getuserAdressStart),
/* harmony export */   "P_": () => (/* binding */ getUserAddressSuccess)
/* harmony export */ });
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(829);

const userAuthStart = (payload)=>({
        type: _user_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].USER_AUTHENTICATE_START */ .Z.USER_AUTHENTICATE_START,
        payload: payload
    })
;
const userAuthSucces = (payload)=>({
        type: _user_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].USER_AUTHENTICATE_SUCCESS */ .Z.USER_AUTHENTICATE_SUCCESS,
        payload: payload
    })
;
const userAuthFail = (payload)=>({
        type: _user_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].USER_AUTHENTICATE_FAIL */ .Z.USER_AUTHENTICATE_FAIL,
        payload: payload
    })
;
//get user address
const getuserAdressStart = (payload)=>({
        type: _user_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_USER_ADDRESS_START */ .Z.GET_USER_ADDRESS_START,
        payload: payload
    })
;
const getUserAddressSuccess = (payload)=>({
        type: _user_types__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_USER_ADDRESS_SUCCESS */ .Z.GET_USER_ADDRESS_SUCCESS,
        payload: payload
    })
;


/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const USER_ACTION_TYPES = {
    USER_AUTHENTICATE_START: 'USER_AUTHENTICATE_START',
    USER_AUTHENTICATE_SUCCESS: 'USER_AUTHENTICATE_SUCCESS',
    USER_AUTHENTICATE_FAIL: 'USER_AUTHENTICATE_FAIL',
    CHECK_USER_SESSION_START: 'CHECK_USER_SESSION_START',
    CHECK_USER_SESSION_SUCCESS: 'CHECK_USER_SESSION_SUCCESS',
    CHECK_USER_SESSION_FAIL: 'CHECK_USER_SESSION_FAIL',
    GET_USER_ADDRESS_START: 'GET_USER_ADDRESS_START',
    GET_USER_ADDRESS_SUCCESS: 'GET_USER_ADDRESS_SUCCESS'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (USER_ACTION_TYPES);


/***/ }),

/***/ 5710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zw": () => (/* binding */ getProductsWithTopRating),
/* harmony export */   "u3": () => (/* binding */ getProductswithNewStatus),
/* harmony export */   "DQ": () => (/* binding */ getDiscountedProductsList),
/* harmony export */   "Zg": () => (/* binding */ getProductsWithCategoryId),
/* harmony export */   "gk": () => (/* binding */ getProductById),
/* harmony export */   "$": () => (/* binding */ getListOfCategories),
/* harmony export */   "of": () => (/* binding */ getListOfCities),
/* harmony export */   "r8": () => (/* binding */ getStreamInfo),
/* harmony export */   "iH": () => (/* binding */ setProductOrder),
/* harmony export */   "de": () => (/* binding */ createUserProfileDocument),
/* harmony export */   "Rq": () => (/* binding */ getUserDocument),
/* harmony export */   "cc": () => (/* binding */ getUserAddresses),
/* harmony export */   "lC": () => (/* binding */ getUserOrdersList),
/* harmony export */   "lU": () => (/* binding */ getLimitedProductsList),
/* harmony export */   "iG": () => (/* binding */ getListOfTotalProducts)
/* harmony export */ });
/* unused harmony exports getProductsIfstatusIsNew, getDiscountedProducts, getCurrentUser */
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7308);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([_firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getProductsWithTopRating = async ()=>{
    const productsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, 'uzstore_products');
    const topRatedProductsList = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(productsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("product_is_top", "==", true));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(topRatedProductsList);
    const topRatedProductsListArray = [];
    querySnapshot.forEach((doc1)=>{
        const data = doc1.data();
        topRatedProductsListArray.push(data);
    });
    return topRatedProductsListArray;
};
const getProductswithNewStatus = async ()=>{
    const productsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, 'uzstore_products');
    const newProductsList = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(productsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("product_is_new", "==", true));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(newProductsList);
    const newProductsListArray = [];
    querySnapshot.forEach((doc2)=>{
        const data = doc2.data();
        newProductsListArray.push(data);
    });
    return newProductsListArray;
};
const getDiscountedProductsList = async ()=>{
    const productsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, 'uzstore_products');
    const discountedProductsList = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(productsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("product_is_discounted", "==", true));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(discountedProductsList);
    const discountedProductsListArray = [];
    querySnapshot.forEach((doc3)=>{
        const data = doc3.data();
        discountedProductsListArray.push(data);
    });
    return discountedProductsListArray;
};
const getProductsIfstatusIsNew = async ()=>{
    const productsRef = collection(db, "uzstore_products");
    const newProductsList = query(productsRef, where("product_is_new", "==", true));
    const querySnapshot = await getDocs(newProductsList);
    const newProductsListArray = [];
    querySnapshot.forEach((doc4)=>{
        const data = doc4.data();
        newProductsListArray.push(data);
    });
    return newProductsListArray;
};
const getDiscountedProducts = async ()=>{
    const productsRef = collection(db, "uzstore_products");
    const discountedProductsList = query(productsRef, where("product_is_discounted", "==", true));
    const querySnapshot = await getDocs(discountedProductsList);
    const discountedProductsListArray = [];
    querySnapshot.forEach((doc5)=>{
        const data = doc5.data();
        discountedProductsListArray.push(data);
    });
    return discountedProductsListArray;
};
const getProductsWithCategoryId = async (category_id)=>{
    const productsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_products");
    const categorizedProductsList = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(productsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("product_category_id", "==", category_id));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(categorizedProductsList);
    const categorizedProductsListArray = [];
    querySnapshot.forEach((doc6)=>{
        const data = doc6.data();
        categorizedProductsListArray.push(data);
    });
    return categorizedProductsListArray;
};
const getProductById = async (product_id)=>{
    const productsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_products");
    const productsList = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(productsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("product_id", "==", parseInt(product_id.payload)));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(productsList);
    const productsListArray = [];
    querySnapshot.forEach((doc7)=>{
        const data = doc7.data();
        productsListArray.push(data);
    });
    return productsListArray[0];
};
const getListOfCategories = async ()=>{
    const categorySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_products_categories"));
    const productsCategoryList = [];
    categorySnapshot.forEach((doc8)=>{
        const data = doc8.data();
        productsCategoryList.push(data);
    });
    return productsCategoryList;
};
const getListOfCities = async ()=>{
    const citiesSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_cities"));
    const citiesCategoryList = [];
    citiesSnapshot.forEach((doc9)=>{
        const data = doc9.data();
        citiesCategoryList.push(data);
    });
    return citiesCategoryList;
};
const getStreamInfo = async (referalNumber)=>{
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_products_referals"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("referal_number", "==", parseInt(referalNumber)));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);
    const refNumberList = [];
    querySnapshot.forEach((doc10)=>{
        const data = doc10.data();
        refNumberList.push(data);
    });
    return refNumberList[0];
};
const setProductOrder = async (data)=>{
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_pending_orders", `${data === null || data === void 0 ? void 0 : data.order_id}`), data);
    } catch (error) {
        console.log(error);
    }
};
const createUserProfileDocument = async (userAuth)=>{
    console.log(userAuth.user_id, 'hello id');
    if (!userAuth) return;
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, 'uzstore_users', `${userAuth.user_id}`);
    const userSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(userRef);
    if (!userSnapshot.exists()) {
        const user_created_at = new Date();
        try {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(userRef, {
                ...userAuth,
                user_created_at
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
};
const getCurrentUser = ()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = onAuthStateChanged(auth, (userAuth)=>{
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};
const getUserDocument = async (uid)=>{
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_users", `${uid}`);
    const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
    return {
        status: docSnap.exists(),
        data: docSnap.data()
    };
};
const getUserAddresses = async (uid)=>{
    const addressSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, `uzstore_users/${uid}/user_adresses`));
    const addressListArray = [];
    addressSnapshot.forEach((doc11)=>{
        const data = doc11.data();
        addressListArray.push(data);
    });
    return addressListArray;
};
const getUserOrdersList = async (user_id)=>{
    const orderQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_pending_orders"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("client_id", "==", `${user_id}`));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(orderQuery);
    const orderList = [];
    querySnapshot.forEach((doc12)=>{
        const data = doc12.data();
        orderList.push(data);
    });
    return orderList;
};
const getLimitedProductsList = async ()=>{
    const limitSnapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_products"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)("product_price"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.limit)(12));
    const getProductsLimit = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(limitSnapshot);
    const prList = [];
    getProductsLimit.forEach((doc13)=>{
        const data = doc13.data();
        prList.push(data);
    });
    return prList;
};
const getListOfTotalProducts = async ()=>{
    const productsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.db, "uzstore_products"));
    const prodList = [];
    productsSnapshot.forEach((doc14)=>{
        const data = doc14.data();
        prodList.push(data);
    });
    return prodList;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;