"use strict";
exports.id = 1382;
exports.ids = [1382];
exports.modules = {

/***/ 1382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3624);
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5336);
/* harmony import */ var _VendorDashboardNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1189);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppLayout__WEBPACK_IMPORTED_MODULE_4__]);
_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const VendorDashboardLayout = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        navbar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            sx: {
                my: '2rem'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 3,
                        xs: 12,
                        sx: {
                            display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'block'
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VendorDashboardNavigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        lg: 9,
                        xs: 12,
                        children: children
                    })
                ]
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendorDashboardLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_FlexBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2279);
/* harmony import */ var _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4729);
/* harmony import */ var _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7235);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_NoteAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8694);
/* harmony import */ var _mui_icons_material_NoteAdd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NoteAdd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DashboardStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9138);










const VendorDashboardNavigation = ()=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DashboardStyle__WEBPACK_IMPORTED_MODULE_9__/* .DashboardNavigationWrapper */ .n, {
        sx: {
            px: '0px',
            py: '1.5rem',
            color: 'grey.900'
        },
        children: linkList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_DashboardStyle__WEBPACK_IMPORTED_MODULE_9__/* .StyledDashboardNav */ .W, {
                isCurrentPath: pathname.includes(item.href),
                href: item.href,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_FlexBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                className: "nav-icon",
                                fontSize: "small",
                                color: "inherit",
                                sx: {
                                    mr: '10px'
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: item.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: item.count
                    })
                ]
            }, item.title)
        )
    }));
};
const linkList = [
    {
        href: '/vendor/dashboard',
        title: 'Dashboard',
        icon: (_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_3___default())
    },
    {
        href: '/vendor/products',
        title: 'Products',
        icon: (_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_2___default()),
        count: 300
    },
    {
        href: '/vendor/add-product',
        title: 'Add New Product',
        icon: (_mui_icons_material_NoteAdd__WEBPACK_IMPORTED_MODULE_4___default())
    },
    {
        href: '/vendor/orders',
        title: 'Orders',
        icon: (_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_6___default()),
        count: 40
    },
    {
        href: '/vendor/account-settings',
        title: 'Account Settings',
        icon: (_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5___default())
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendorDashboardNavigation);


/***/ })

};
;