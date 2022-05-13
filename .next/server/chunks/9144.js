"use strict";
exports.id = 9144;
exports.ids = [9144];
exports.modules = {

/***/ 5932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const BazarRating = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Rating)((0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.compose)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.spacing, _mui_system__WEBPACK_IMPORTED_MODULE_1__.typography));
BazarRating.defaultProps = {
    fontSize: '1.25rem'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BazarRating);


/***/ }),

/***/ 2348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const HoverBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box)({
    position: 'relative',
    '&:after': {
        position: 'absolute',
        content: '" "',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        transition: 'all 250ms ease-in-out'
    },
    '&:hover:after': {
        background: 'rgba(0, 0, 0, 0.3)'
    }
});
HoverBox.defaultProps = {
    overflow: 'hidden'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverBox);


/***/ }),

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_BazarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5932);
/* harmony import */ var components_HoverBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2348);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4588);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(403);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2279);








const ProductCard4 = ({ product_price , product_media , product_name , product_rating , product_reviewed_by ,  })=>{
    var ref, ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_HoverBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                mb: 2,
                mx: "auto",
                borderRadius: "8px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LazyImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    src: (ref = product_media[0]) === null || ref === void 0 ? void 0 : ref.media_link,
                    width: "100%",
                    height: 170,
                    layout: "responsive",
                    alt: product_name,
                    mx: "auto"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                justifyContent: "center",
                alignItems: "center",
                mb: 0.5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazarRating__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        value: product_rating,
                        color: "warn",
                        readOnly: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Small */ .x4, {
                        fontWeight: "600",
                        pl: 0.5,
                        children: [
                            "(",
                            product_reviewed_by,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H4, {
                fontWeight: "600",
                fontSize: "14px",
                textAlign: "center",
                mb: 0.5,
                title: product_name,
                ellipsis: true,
                children: product_name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_4__.H4, {
                fontWeight: "600",
                fontSize: "14px",
                textAlign: "center",
                color: "primary.main",
                children: [
                    (ref1 = product_price === null || product_price === void 0 ? void 0 : product_price.toString()) === null || ref1 === void 0 ? void 0 : ref1.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    " so'm"
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard4);


/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qx": () => (/* binding */ selectSingleLoading),
/* harmony export */   "yF": () => (/* binding */ selectSingleProduct),
/* harmony export */   "To": () => (/* binding */ getListOfTopRatedProducts),
/* harmony export */   "$P": () => (/* binding */ getListOfNewProducts),
/* harmony export */   "Cc": () => (/* binding */ getListOfDiscountedProductsList),
/* harmony export */   "$": () => (/* binding */ getListOfCategories),
/* harmony export */   "Lz": () => (/* binding */ getListOfOrderedProducts)
/* harmony export */ });
const selectSingleLoading = (state)=>{
    return state.products.isSingleLoading;
};
const selectSingleProduct = (state)=>{
    return state.products.singleProduct;
};
const getListOfTopRatedProducts = (state)=>{
    return state.products.topProductsList;
};
const getListOfNewProducts = (state)=>{
    return state.products.new_products_list;
};
const getListOfDiscountedProductsList = (state)=>{
    return state.products.discounted_products_list;
};
const getListOfCategories = (state)=>{
    return state.products.product_categories;
};
const getListOfOrderedProducts = (state)=>{
    return state.products.orders_list;
};


/***/ })

};
;