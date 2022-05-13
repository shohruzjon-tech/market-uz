"use strict";
exports.id = 7351;
exports.ids = [7351];
exports.modules = {

/***/ 7351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_FlexBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2279);
/* harmony import */ var components_sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7478);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(403);
/* harmony import */ var hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(420);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









const StyledBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_7__.Box)(({ theme  })=>({
        display: 'flex',
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(3),
        '& .headerHold': {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1
        },
        [theme.breakpoints.up('md')]: {
            '& .sidenav': {
                display: 'none'
            }
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            '& .headerHold': {}
        }
    })
);
const DashboardPageHeader = ({ title , button , navigation , ...props })=>{
    const width = (0,hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const isTablet = width < 1025;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBox, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                mt: 2,
                className: "headerHold",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: [
                            props.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(props.icon, {
                                color: "primary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_3__.H2, {
                                ml: 1.5,
                                my: "0px",
                                lineHeight: "1",
                                whiteSpace: "pre",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        className: "sidenav",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            position: "left",
                            handle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {
                                fontSize: "small"
                            }),
                            children: navigation
                        })
                    }),
                    !isTablet && button
                ]
            }),
            isTablet && !!button && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_7__.Box, {
                mt: 2,
                children: button
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPageHeader);


/***/ })

};
;