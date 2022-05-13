"use strict";
exports.id = 7478;
exports.ids = [7478];
exports.modules = {

/***/ 7478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Wrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(()=>({
        '& .handle': {
            cursor: 'pointer'
        }
    })
);
const Sidenav = ({ position , open , width , handle , children , toggleSidenav  })=>{
    var ref;
    const { 0: sidenavOpen , 1: setSidenavOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(open);
    const handleToggleSidenav = ()=>{
        setSidenavOpen(!sidenavOpen);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setSidenavOpen(open);
    }, [
        open
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
                open: sidenavOpen,
                anchor: position,
                onClose: toggleSidenav || handleToggleSidenav,
                SlideProps: {
                    style: {
                        width: width || 280
                    }
                },
                children: children
            }),
            handle && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(handle, {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((ref = handle.props) === null || ref === void 0 ? void 0 : ref.className, 'handle'),
                onClick: toggleSidenav || handleToggleSidenav
            })
        ]
    }));
};
Sidenav.defaultProps = {
    width: 280,
    position: 'left',
    open: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidenav);


/***/ })

};
;