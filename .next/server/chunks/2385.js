"use strict";
exports.id = 2385;
exports.ids = [2385];
exports.modules = {

/***/ 3025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const TableRow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Card)({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    '& > *': {
        flex: '1 1 0'
    },
    '& .pre': {
        whiteSpace: 'pre'
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRow);


/***/ }),

/***/ 2385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3025);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var _mui_icons_material_East__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6172);
/* harmony import */ var _mui_icons_material_East__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_East__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








 // component props interface
const OrderRow = ({ item  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const getColor = (status)=>{
        switch(status){
            case 1:
                return 'secondary';
            case 2:
                return 'secondary';
            case 3:
                return 'success';
            case 4:
                return 'error';
            default:
                return '';
        }
    };
    const total_price = (ref1 = item === null || item === void 0 ? void 0 : (ref = item.ordered_product) === null || ref === void 0 ? void 0 : ref.filter((pro)=>{
        return (item === null || item === void 0 ? void 0 : item.ordered_product_id) !== (pro === null || pro === void 0 ? void 0 : pro.product_id);
    })) === null || ref1 === void 0 ? void 0 : ref1.reduce((a, b)=>{
        return a + (b === null || b === void 0 ? void 0 : b.product_price);
    }, 0);
    const main_order = item === null || item === void 0 ? void 0 : (ref2 = item.ordered_product) === null || ref2 === void 0 ? void 0 : ref2.filter((pro)=>{
        return (item === null || item === void 0 ? void 0 : item.ordered_product_id) === (pro === null || pro === void 0 ? void 0 : pro.product_id);
    })[0];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        href: `/orders/${item === null || item === void 0 ? void 0 : item.order_id}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_TableRow__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                sx: {
                    my: '1rem',
                    padding: '6px 18px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__.H5, {
                        m: 0.75,
                        textAlign: "left",
                        children: item === null || item === void 0 ? void 0 : item.order_id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        m: 0.75,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Chip, {
                            size: "small",
                            label: item === null || item === void 0 ? void 0 : (ref3 = item.order_status) === null || ref3 === void 0 ? void 0 : ref3.status_name,
                            sx: {
                                p: '0.25rem 0.5rem',
                                fontSize: 12,
                                color: !!getColor(item.status) ? `${getColor(item.status)}.900` : 'inherit',
                                backgroundColor: !!getColor(item === null || item === void 0 ? void 0 : (ref4 = item.order_status) === null || ref4 === void 0 ? void 0 : ref4.status_id) ? `${getColor(item === null || item === void 0 ? void 0 : (ref5 = item.order_status) === null || ref5 === void 0 ? void 0 : ref5.status_id)}.100` : 'none'
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        className: "pre",
                        m: 0.75,
                        textAlign: "left",
                        children: item === null || item === void 0 ? void 0 : item.order_created_date
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        m: 0.75,
                        textAlign: "left",
                        children: [
                            (ref7 = (ref6 = total_price + (main_order === null || main_order === void 0 ? void 0 : main_order.product_price) * (item === null || item === void 0 ? void 0 : item.order_quantity)) === null || ref6 === void 0 ? void 0 : ref6.toString()) === null || ref7 === void 0 ? void 0 : ref7.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                            " so'm"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        textAlign: "center",
                        color: "grey.600",
                        sx: {
                            flex: '0 0 0 !important',
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_East__WEBPACK_IMPORTED_MODULE_3___default()), {
                                fontSize: "small",
                                color: "inherit"
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderRow);


/***/ })

};
;