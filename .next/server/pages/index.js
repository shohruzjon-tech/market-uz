"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,2197];
exports.modules = {

/***/ 1878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_actions_product_redux_product_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var _src_redux_actions_product_redux_product_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(981);
/* harmony import */ var services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5710);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_superstore_shop_Section10__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8477);
/* harmony import */ var components_superstore_shop_Section11__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2753);
/* harmony import */ var components_superstore_shop_Section12__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7376);
/* harmony import */ var components_superstore_shop_Section13__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7529);
/* harmony import */ var components_superstore_shop_Section4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7950);
/* harmony import */ var components_superstore_shop_Section5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2812);
/* harmony import */ var components_superstore_shop_Section8__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2038);
/* harmony import */ var components_grocery1_GrocerySection1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7286);
/* harmony import */ var components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5336);
/* harmony import */ var utils_api_superstore_shop_sections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__, components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_13__]);
([services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__, components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const IndexPage = (props)=>{
    const { serviceList  } = props;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { 0: moreItems , 1: setMore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,redux_actions_product_redux_product_actions__WEBPACK_IMPORTED_MODULE_2__/* .getTopProductsStart */ .ic)());
        dispatch((0,redux_actions_product_redux_product_actions__WEBPACK_IMPORTED_MODULE_2__/* .getNewProductsListStart */ .ml)());
        dispatch((0,redux_actions_product_redux_product_actions__WEBPACK_IMPORTED_MODULE_2__/* .getDiscountedProductsListStart */ .Qj)());
        dispatch((0,redux_actions_product_redux_product_actions__WEBPACK_IMPORTED_MODULE_2__/* .getCategoryListStart */ .vg)());
        (0,services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getLimitedProductsList */ .lU)().then((list)=>{
            setMore(list);
        });
    }, []);
    const productsList = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_src_redux_actions_product_redux_product_selectors__WEBPACK_IMPORTED_MODULE_15__/* .getListOfTopRatedProducts */ .To);
    const newProductsList = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_src_redux_actions_product_redux_product_selectors__WEBPACK_IMPORTED_MODULE_15__/* .getListOfNewProducts */ .$P);
    const discountedProductsList = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_src_redux_actions_product_redux_product_selectors__WEBPACK_IMPORTED_MODULE_15__/* .getListOfDiscountedProductsList */ .Cc);
    const categoriesList = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_src_redux_actions_product_redux_product_selectors__WEBPACK_IMPORTED_MODULE_15__/* .getListOfCategories */ .$);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_grocery1_GrocerySection1__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_superstore_shop_Section10__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                categories: categoriesList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_superstore_shop_Section4__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                topRatedList: productsList === null || productsList === void 0 ? void 0 : productsList.slice(0, 6)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_superstore_shop_Section5__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                newArrivalsList: newProductsList === null || newProductsList === void 0 ? void 0 : newProductsList.slice(0, 6)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_superstore_shop_Section13__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                bigDiscountList: discountedProductsList
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_superstore_shop_Section11__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                moreItems: moreItems
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_superstore_shop_Section12__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                serviceList: serviceList
            })
        ]
    }));
};
async function getStaticProps() {
    const serviceList = await (0,utils_api_superstore_shop_sections__WEBPACK_IMPORTED_MODULE_14__/* .getServiceList */ .qM)();
    return {
        props: {
            serviceList
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategorySectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7160);




const CategorySectionCreator = ({ icon , seeMoreLink , title , children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 7.5,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            sx: {
                pb: '1rem'
            },
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategorySectionHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    title: title,
                    seeMoreLink: seeMoreLink,
                    icon: icon
                }),
                children
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySectionCreator);


/***/ }),

/***/ 7160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7902);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2279);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(403);






const CategorySectionHeader = ({ title , seeMoreLink , icon  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                alignItems: "center",
                children: [
                    icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        mr: 1,
                        alignItems: "center",
                        children: icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__.H2, {
                        fontWeight: "bold",
                        lineHeight: "1",
                        children: title
                    })
                ]
            }),
            seeMoreLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: seeMoreLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FlexBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        alignItems: "center",
                        ml: 1,
                        color: "grey.600",
                        children: [
                            "Barchasini ko'rish",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_1___default()), {
                                fontSize: "small",
                                color: "inherit"
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySectionHeader);


/***/ }),

/***/ 7286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_BazarButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5469);
/* harmony import */ var components_search_box_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6074);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);








const leftImg = '/assets/images/banners/banner000.png';
const rightImg = '/assets/images/banners/banner001.png';
const Container = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box)(({ theme  })=>({
        width: '100%',
        height: 450,
        padding: 20,
        paddingTop: 160,
        backgroundColor: theme.palette.grey[100],
        backgroundImage: `url('${leftImg}'), url('${rightImg}')`,
        backgroundSize: '40%, 40%',
        backgroundPosition: 'left bottom, right bottom',
        backgroundRepeat: 'no-repeat, no-repeat',
        transition: 'all .3s',
        '& h1': {
            fontSize: 42,
            textAlign: 'center',
            marginBottom: 40,
            lineHeight: 1.3
        },
        '& .searchBox': {
            margin: 'auto',
            maxWidth: '600px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: theme.shadows[2]
        },
        [theme.breakpoints.up('md')]: {
            backgroundSize: '450px, 450px'
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: 130,
            height: 550,
            '& h1': {
                fontSize: 38,
                textAlign: 'center'
            }
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: 100,
            height: 480,
            '& h1': {
                fontSize: 30
            },
            '& .searchBox': {
                margin: 0
            }
        }
    })
);
const GrocerySection1 = ()=>{
    const { 0: searchValue , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!searchValue) return;
        router.push(`/product/search/${searchValue}`);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Typography__WEBPACK_IMPORTED_MODULE_2__.H1, {
                children: [
                    "Buyurtma qiling va 24 soat ichida",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " qabul qiling"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {
                className: "searchBox",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                        placeholder: "Qidirilyapti...",
                        value: searchValue,
                        onChange: (event)=>setValue(event.target.value)
                        ,
                        fullWidth: true,
                        InputProps: {
                            sx: {
                                height: 50,
                                paddingRight: 0,
                                color: 'grey.700',
                                background: '#fff',
                                '& fieldset': {
                                    border: 'none'
                                }
                            },
                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BazarButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                type: "submit",
                                color: "primary",
                                variant: "contained",
                                disableElevation: true,
                                sx: {
                                    px: '2rem',
                                    height: '100%',
                                    borderRadius: '0 8px 8px 0'
                                },
                                children: "Qidirish"
                            }),
                            startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_search_box_SearchBox__WEBPACK_IMPORTED_MODULE_6__/* .SearchOutlinedIcon */ .iu, {
                                fontSize: "small"
                            })
                        }
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GrocerySection1);


/***/ }),

/***/ 8477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_BazarCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5120);
/* harmony import */ var components_icons_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2871);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CategorySectionHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7160);







const StyledBazarCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(components_BazarCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        padding: "0.75rem",
        borderRadius: 8,
        transition: "all 250ms ease-in-out",
        "&:hover": {
            boxShadow: theme.shadows[3]
        }
    })
);
const Section10 = ({ categories  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
        sx: {
            mb: "70px",
            mt: '28px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategorySectionHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "Kategoriyalar",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons_Category__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    color: "primary"
                }),
                seeMoreLink: "/category/all-products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 3,
                children: categories.map((item, ind)=>{
                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        lg: 2,
                        md: 3,
                        sm: 4,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: `/category/${item === null || item === void 0 ? void 0 : item.category_id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBazarCard, {
                                    elevation: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item === null || item === void 0 ? void 0 : item.category_thumb,
                                            alt: item === null || item === void 0 ? void 0 : item.category_name,
                                            height: 52,
                                            width: 52,
                                            objectFit: "contain",
                                            borderRadius: "8px"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            fontWeight: "600",
                                            ml: 1.25,
                                            children: item === null || item === void 0 ? void 0 : item.category_name
                                        })
                                    ]
                                })
                            })
                        })
                    }, ind);
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section10);


/***/ }),

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategorySectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7160);
/* harmony import */ var _product_cards_ProductCard4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5502);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);






const Section11 = ({ moreItems  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        sx: {
            mb: '70px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategorySectionHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "Yanada ko'proq",
                seeMoreLink: "/category/all-products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                spacing: 3,
                children: moreItems.map((item)=>{
                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        item: true,
                        lg: 2,
                        md: 3,
                        sm: 4,
                        xs: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            href: `/product/${item === null || item === void 0 ? void 0 : item.product_id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_cards_ProductCard4__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    ...item
                                })
                            })
                        })
                    }, item.product_name);
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section11);


/***/ }),

/***/ 7376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ superstore_shop_Section12)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/BazarCard.jsx
var BazarCard = __webpack_require__(5120);
// EXTERNAL MODULE: ./src/components/BazarIconButton.jsx
var BazarIconButton = __webpack_require__(2138);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
;// CONCATENATED MODULE: ./src/components/icons/FeedbackThumbsUp.jsx



const FeedbackThumbsUp = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 50 50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M44.6289 7.8125H43.1641V4.39453C43.1641 1.97139 41.1927 0 38.7695 0C36.3464 0 34.375 1.97139 34.375 4.39453V5.59424C34.375 7.11221 33.3557 8.46367 31.896 8.88066L30.4688 9.28848V9.27734C30.4688 8.46836 29.8129 7.8125 29.0039 7.8125H23.1445C22.3355 7.8125 21.6797 8.46836 21.6797 9.27734V15.8203H4.39453C1.97139 15.8203 0 17.7917 0 20.2148V48.5352C0 49.0754 0.297363 49.5718 0.773633 49.8267C0.990234 49.9427 1.22773 50 1.46475 50C1.74893 50 2.03232 49.9174 2.27734 49.7539L7.76777 46.0938H35.6445C38.0677 46.0938 40.0391 44.1224 40.0391 41.6992V26.3672H44.6289C47.5905 26.3672 50 23.9577 50 20.9961V13.1836C50 10.222 47.5905 7.8125 44.6289 7.8125ZM24.6094 10.7422H27.5391V23.4375H24.6094V10.7422ZM37.1094 41.6992C37.1094 42.5069 36.4522 43.1641 35.6445 43.1641H7.32422C7.03506 43.1641 6.75234 43.2497 6.51172 43.4102L2.92969 45.7981V20.2148C2.92969 19.4071 3.58682 18.75 4.39453 18.75H21.6797V24.9023C21.6797 25.7113 22.3355 26.3672 23.1445 26.3672H29.0039C29.7564 26.3672 30.3758 25.7994 30.4586 25.069C31.7636 25.9013 33.298 26.3672 34.8937 26.3672H37.1094V41.6992ZM47.0703 20.9961C47.0703 22.3423 45.9751 23.4375 44.6289 23.4375H34.8937C33.1126 23.4375 31.4492 22.539 30.4688 21.0697V12.3354L32.7008 11.6978C35.4115 10.9232 37.3047 8.41338 37.3047 5.59424V4.39453C37.3047 3.58682 37.9618 2.92969 38.7695 2.92969C39.5772 2.92969 40.2344 3.58682 40.2344 4.39453V9.27734C40.2344 10.0863 40.8902 10.7422 41.6992 10.7422H44.6289C45.9751 10.7422 47.0703 11.8374 47.0703 13.1836V20.9961Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.32422 27.5391H17.0898C17.8988 27.5391 18.5547 26.8832 18.5547 26.0742C18.5547 25.2652 17.8988 24.6094 17.0898 24.6094H7.32422C6.51523 24.6094 5.85938 25.2652 5.85938 26.0742C5.85938 26.8832 6.51523 27.5391 7.32422 27.5391Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M32.7148 30.4688H7.32422C6.51523 30.4688 5.85938 31.1246 5.85938 31.9336C5.85938 32.7426 6.51523 33.3984 7.32422 33.3984H32.7148C33.5238 33.3984 34.1797 32.7426 34.1797 31.9336C34.1797 31.1246 33.5238 30.4688 32.7148 30.4688Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M32.7148 36.3281H7.32422C6.51523 36.3281 5.85938 36.984 5.85938 37.793C5.85938 38.602 6.51523 39.2578 7.32422 39.2578H32.7148C33.5238 39.2578 34.1797 38.602 34.1797 37.793C34.1797 36.984 33.5238 36.3281 32.7148 36.3281Z"
            })
        ]
    }));
};
/* harmony default export */ const icons_FeedbackThumbsUp = (FeedbackThumbsUp);

;// CONCATENATED MODULE: ./src/components/icons/Shield.jsx



const Shield = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 64 64",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M59.186 17.3648L59.184 17.315C59.1562 16.7003 59.1376 16.0499 59.1264 15.3263C59.0741 11.7975 56.269 8.87852 52.7397 8.68125C45.3813 8.27061 39.6889 5.8712 34.8252 1.13049L34.7837 1.09094C33.1973 -0.363646 30.8042 -0.363646 29.2173 1.09094L29.1758 1.13049C24.312 5.8712 18.6197 8.27061 11.2613 8.68174C7.73248 8.87852 4.92683 11.7975 4.87458 15.3267C4.86384 16.0455 4.8448 16.6959 4.81696 17.315L4.81403 17.4307C4.67097 24.9341 4.49323 34.2725 7.61725 42.7485C9.33502 47.4097 11.9366 51.4614 15.3492 54.792C19.2359 58.5849 24.3267 61.5961 30.48 63.7416C30.6802 63.8115 30.8882 63.8681 31.1001 63.9106C31.3989 63.9702 31.6997 63.9999 32.0005 63.9999C32.3013 63.9999 32.6025 63.9702 32.9009 63.9106C33.1128 63.8681 33.3223 63.811 33.5234 63.7407C39.6694 61.5913 44.7548 58.5786 48.6381 54.7861C52.0493 51.4546 54.6508 47.4018 56.37 42.7397C59.5058 34.2383 59.3285 24.8824 59.186 17.3648ZM52.8466 41.4404C49.5517 50.374 42.8256 56.5092 32.2842 60.1958C32.2466 60.2085 32.2065 60.2197 32.165 60.228C32.0561 60.2495 31.9453 60.2495 31.835 60.2275C31.7939 60.2192 31.7539 60.2085 31.7168 60.1958C21.1641 56.5161 14.4336 50.3843 11.1412 41.4502C8.26178 33.6372 8.42486 25.065 8.56891 17.5025L8.56988 17.4605C8.59918 16.8106 8.61871 16.13 8.62945 15.3819C8.65289 13.815 9.90093 12.5186 11.4708 12.4312C15.6348 12.1988 19.293 11.3941 22.6543 9.97129C26.0112 8.55039 28.9927 6.54747 31.7681 3.84826C31.9092 3.72912 32.0923 3.72863 32.2329 3.84826C35.0088 6.54747 37.9902 8.55039 41.3466 9.97129C44.708 11.3941 48.3662 12.1988 52.5307 12.4312C54.1005 12.5186 55.3486 13.815 55.3715 15.3824C55.3827 16.1344 55.4023 16.815 55.4316 17.4605C55.5751 25.0318 55.7343 33.6109 52.8466 41.4404Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M31.9996 16.0518C23.2047 16.0518 16.0499 23.207 16.0499 32.0015C16.0499 40.7964 23.2047 47.9517 31.9996 47.9517C40.794 47.9517 47.9493 40.7964 47.9493 32.0015C47.9493 23.207 40.794 16.0518 31.9996 16.0518ZM31.9996 44.1958C25.2755 44.1958 19.8052 38.7256 19.8052 32.0015C19.8052 25.2773 25.2755 19.8071 31.9996 19.8071C38.7232 19.8071 44.1934 25.2773 44.1934 32.0015C44.1934 38.7256 38.7232 44.1958 31.9996 44.1958Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M36.5836 27.0494L29.1754 34.4576L27.1646 32.4469C26.4312 31.7135 25.2423 31.7135 24.5089 32.4469C23.776 33.1803 23.776 34.3693 24.5089 35.1022L27.8477 38.441C28.2144 38.8077 28.6949 38.9908 29.1754 38.9908C29.6558 38.9908 30.1363 38.8077 30.503 38.441L39.2393 29.7047C39.9722 28.9713 39.9722 27.7823 39.2393 27.0494C38.5059 26.3156 37.317 26.3156 36.5836 27.0494Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Shield = (Shield);

;// CONCATENATED MODULE: ./src/components/icons/Truck.jsx



const Truck = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 64 64",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M48.3361 38.0503C43.8877 38.0503 40.2689 41.6692 40.2689 46.1175C40.2689 50.5659 43.8877 54.1848 48.3361 54.1848C52.7852 54.1848 56.4034 50.5659 56.4034 46.1175C56.4034 41.6692 52.7845 38.0503 48.3361 38.0503ZM48.3361 50.1512C46.1116 50.1512 44.3025 48.342 44.3025 46.1175C44.3025 43.893 46.1116 42.0839 48.3361 42.0839C50.5606 42.0839 52.3697 43.893 52.3697 46.1175C52.3697 48.3422 50.5606 50.1512 48.3361 50.1512Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M20.7731 38.0503C16.3247 38.0503 12.7059 41.6692 12.7059 46.1175C12.7059 50.5659 16.3247 54.1848 20.7731 54.1848C25.2215 54.1848 28.8404 50.5659 28.8404 46.1175C28.8404 41.6692 25.2215 38.0503 20.7731 38.0503ZM20.7731 50.1512C18.5486 50.1512 16.7395 48.342 16.7395 46.1175C16.7395 43.893 18.5486 42.0839 20.7731 42.0839C22.997 42.0839 24.8067 43.893 24.8067 46.1175C24.8067 48.3422 22.9976 50.1512 20.7731 50.1512Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M53.7687 14.9597C53.4259 14.2787 52.7287 13.8491 51.9664 13.8491H41.3445V17.8827H50.7226L56.2144 28.8058L59.8191 26.9933L53.7687 14.9597Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M42.2858 44.168H27.0253V48.2016H42.2858V44.168Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M14.7227 44.168H7.73117C6.61717 44.168 5.71442 45.0708 5.71442 46.1847C5.71442 47.2987 6.61729 48.2015 7.73117 48.2015H14.7228C15.8368 48.2015 16.7395 47.2986 16.7395 46.1847C16.7395 45.0707 15.8367 44.168 14.7227 44.168Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M63.5765 31.8384L59.6095 26.7292C59.2284 26.2371 58.6402 25.9493 58.0169 25.9493H43.3614V11.8317C43.3614 10.7177 42.4585 9.81494 41.3447 9.81494H7.73117C6.61717 9.81494 5.71442 10.7178 5.71442 11.8317C5.71442 12.9456 6.61729 13.8484 7.73117 13.8484H39.3278V27.9661C39.3278 29.0801 40.2307 29.9828 41.3445 29.9828H57.0293L59.9664 33.7663V44.1677H54.3865C53.2725 44.1677 52.3698 45.0706 52.3698 46.1844C52.3698 47.2984 53.2727 48.2012 54.3865 48.2012H61.9832C63.0972 48.2012 63.9999 47.2983 64 46.1844V33.0754C64 32.6277 63.8508 32.1921 63.5765 31.8384Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M14.5883 33.9497H5.31088C4.19688 33.9497 3.29413 34.8526 3.29413 35.9665C3.29413 37.0805 4.197 37.9832 5.31088 37.9832H14.5881C15.7021 37.9832 16.6049 37.0803 16.6049 35.9665C16.605 34.8526 15.7021 33.9497 14.5883 33.9497Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19.2269 26.0166H2.01675C0.902875 26.0166 0 26.9195 0 28.0335C0 29.1475 0.902875 30.0502 2.01675 30.0502H19.2269C20.3409 30.0502 21.2436 29.1474 21.2436 28.0335C21.2436 26.9196 20.3409 26.0166 19.2269 26.0166Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M22.521 18.084H5.31088C4.19688 18.084 3.29413 18.9869 3.29413 20.1007C3.29413 21.2147 4.197 22.1175 5.31088 22.1175H22.521C23.635 22.1175 24.5378 21.2146 24.5378 20.1007C24.5379 18.9869 23.635 18.084 22.521 18.084Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Truck = (Truck);

;// CONCATENATED MODULE: ./src/components/icons/Apple.jsx



const Apple = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M14.0148 16.3684C13.8489 16.3684 13.699 16.2595 13.6452 16.1032C13.5944 15.9555 13.6402 15.787 13.7573 15.6842C13.885 15.5719 14.0766 15.5561 14.221 15.6459C14.3553 15.7294 14.4278 15.8919 14.3993 16.0476C14.3656 16.2307 14.2013 16.3684 14.0148 16.3684Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17.1568 7.19879C16.4244 6.21946 15.4338 5.52806 14.3676 5.25193C13.6585 5.06841 12.8013 5.08384 11.8194 5.29794L11.8193 5.29771C11.8149 5.29876 11.8057 5.30087 11.7908 5.30419C11.7652 5.30935 11.7399 5.31525 11.7151 5.32103C11.6535 5.33544 11.5585 5.35818 11.4567 5.38466C11.3233 5.41923 11.1876 5.44935 11.0523 5.4745C11.0503 5.37337 11.0465 5.26943 11.0405 5.16314C11.1562 3.8753 11.6789 2.76839 12.5989 1.86656C13.3951 1.08606 14.2075 0.757229 14.2149 0.7543C14.4156 0.675394 14.5145 0.448637 14.4356 0.247858C14.3566 0.0470385 14.1299 -0.0517109 13.9292 0.0271558C13.891 0.0421948 12.9842 0.404536 12.0767 1.28457C11.596 1.75078 11.0625 2.41866 10.6939 3.31506C10.4971 2.75722 10.2008 2.22327 9.76152 1.78449C7.99095 0.0158668 4.67269 0.566566 4.47718 0.600902C4.47702 0.600941 4.47687 0.600941 4.47671 0.60098C4.33359 0.623871 4.21335 0.72387 4.17097 0.862463C4.16472 0.882893 4.15972 0.901955 4.15687 0.917853C4.13441 1.04402 3.67957 3.70592 4.8255 5.54845C3.23969 6.30891 1.56372 8.19038 1.56372 11.3173C1.56372 12.4265 1.90169 13.7822 2.51543 15.1346C3.11672 16.4597 3.92882 17.6706 4.80206 18.544C5.7535 19.4965 6.73111 20 7.62911 20C8.15501 20 8.6968 19.9204 9.19617 19.7698C9.68804 19.6211 10.2105 19.6116 10.7072 19.7424C10.7089 19.7428 10.7107 19.7433 10.7124 19.7437C10.7431 19.7519 10.7737 19.7605 10.8044 19.7698C11.3035 19.9204 11.8453 20 12.3712 20C13.2304 20 14.167 19.5367 15.0793 18.6604C16.9619 16.8546 18.4366 13.6292 18.4366 11.3173C18.4364 9.74217 17.994 8.318 17.1568 7.19879ZM9.20926 2.33726C9.95605 3.08327 10.1997 4.22147 10.2557 5.1783C10.2419 5.35396 10.2346 6.12137 10.2346 6.12137L7.27173 3.16167C7.11908 3.00921 6.87173 3.00928 6.71931 3.16198C6.56685 3.3146 6.56697 3.56194 6.71959 3.71444L9.70304 6.69469C8.68274 6.74934 6.91736 6.67184 5.89311 5.64868C4.66288 4.41978 4.79811 2.12667 4.88811 1.3332C5.68229 1.24328 7.97868 1.10797 9.20926 2.33726ZM14.5382 18.0968C13.774 18.8307 13.0245 19.2188 12.371 19.2188C11.927 19.2188 11.4507 19.1488 11.03 19.022C10.991 19.0102 10.9519 18.9991 10.9126 18.9887C10.912 18.9886 10.9114 18.9884 10.9108 18.9882C10.2729 18.8193 9.60176 18.831 8.97016 19.0219C8.5493 19.1488 8.07298 19.2188 7.62892 19.2188C6.94279 19.2188 6.15635 18.7945 5.35448 17.9917C3.66679 16.3036 2.34481 13.3718 2.34481 11.3173C2.34481 8.44636 3.90953 6.78082 5.32104 6.18134C5.32764 6.18805 5.33432 6.19477 5.341 6.20145C6.41174 7.27102 8.05645 7.49086 9.22809 7.49082C9.97125 7.49082 10.525 7.40668 10.6191 7.38613C10.931 7.31785 10.9234 7.17242 10.9428 7.08266C10.943 7.08152 10.9433 7.08039 10.9435 7.07926C10.9438 7.07801 10.9441 7.07672 10.9443 7.07547C10.9446 7.07387 10.945 7.07227 10.9453 7.07063C10.9454 7.06992 10.9455 7.06926 10.9457 7.06856C10.953 7.02778 11.0057 6.722 11.0349 6.26454C11.0578 6.26469 11.081 6.26286 11.1043 6.25887C11.2873 6.22747 11.4717 6.18782 11.6529 6.14091C11.7226 6.12274 11.79 6.10622 11.846 6.0929C13.4575 6.65485 15.0511 8.46726 15.0511 11.3174C15.0511 12.1522 14.8357 13.1478 14.4283 14.1966C14.3502 14.3976 14.4499 14.624 14.6509 14.7021C14.6974 14.7201 14.7453 14.7287 14.7923 14.7287C14.9488 14.7287 15.0964 14.6341 15.1565 14.4794C15.5986 13.3414 15.8323 12.248 15.8323 11.3174C15.8323 8.7212 14.6384 6.87364 13.1972 5.90677C13.5558 5.89931 13.8815 5.93313 14.1718 6.00825C15.8496 6.44274 17.6553 8.28945 17.6553 11.3173C17.6552 13.4069 16.257 16.4481 14.5382 18.0968Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Apple = (Apple);

;// CONCATENATED MODULE: ./src/components/icons/Beer.jsx



const Beer = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.8371 4.26238L15.87 2.47578C16.3382 2.2834 16.6688 1.82266 16.6688 1.28594C16.6688 0.576875 16.0919 0 15.3829 0H4.6172C3.90817 0 3.3313 0.576875 3.3313 1.28594C3.3313 1.82266 3.66192 2.2834 4.13009 2.47578L3.16298 4.26238C3.11493 4.34082 3.11493 4.38461 3.11493 4.45004V6.46808V17.3395C3.11493 17.4042 3.13173 17.4702 3.1629 17.527L4.39012 19.7952C4.45837 19.9214 4.59024 20 4.73368 20H15.2664C15.4098 20 15.5417 19.9214 15.6099 19.7952L16.8372 17.527C16.8683 17.4702 16.8851 17.4042 16.8851 17.3395V15.3214V4.45004C16.8851 4.38477 16.8616 4.30719 16.8371 4.26238ZM4.11255 1.28594C4.11255 1.00766 4.33891 0.78125 4.6172 0.78125H15.3829C15.6612 0.78125 15.8875 1.00766 15.8875 1.28594C15.8875 1.56422 15.6612 1.79062 15.3829 1.79062H11.7574C11.5417 1.79062 11.3668 1.96551 11.3668 2.18125C11.3668 2.39699 11.5417 2.57187 11.7574 2.57187H15.0337L15.8389 4.05945H5.62345H4.16122L4.96641 2.57187H8.2427C8.45841 2.57187 8.63333 2.39699 8.63333 2.18125C8.63333 1.96551 8.45841 1.79062 8.2427 1.79062H4.6172C4.33891 1.79062 4.11255 1.56422 4.11255 1.28594ZM3.89622 4.84066H5.46161L8.1011 7.48023C8.1011 7.48051 8.10106 7.48078 8.10102 7.48105C7.73618 8.08644 7.47149 8.86984 7.34868 9.75887L3.89622 6.30633V4.84066ZM8.69192 8.02594C9.05743 7.34973 9.53423 6.96191 10 6.96191C10.4659 6.96191 10.9427 7.34973 11.3082 8.02594C11.7201 8.78797 11.947 9.8068 11.947 10.8947C11.947 11.983 11.7201 13.002 11.3082 13.7639C10.9428 14.4399 10.4659 14.8276 10 14.8276C9.53415 14.8276 9.05731 14.4399 8.69188 13.7639C8.28001 13.002 8.05313 11.9831 8.05313 10.8947C8.05313 9.80684 8.28001 8.78801 8.69192 8.02594ZM3.89622 7.41117L7.27262 10.7877C7.27219 10.8233 7.27188 10.8589 7.27188 10.8948C7.27188 13.5382 8.47024 15.6089 10 15.6089C10.525 15.6089 11.0109 15.365 11.4227 14.9379L13.4336 16.9488H3.89622V7.41117ZM15.0336 19.2187H4.96649L4.1611 17.7301H14.3767H15.8391L15.0336 19.2187ZM16.1039 16.9489H14.5385L11.899 14.3093C11.899 14.3089 11.8991 14.3086 11.8992 14.3083C12.2638 13.7031 12.5284 12.92 12.6513 12.0315L16.1039 15.4832V16.9489H16.1039ZM16.1039 14.3785L12.7274 11.0029C12.7279 10.967 12.7282 10.9309 12.7282 10.8948C12.7282 8.25137 11.5299 6.18066 10 6.18066C9.47513 6.18066 8.98923 6.42453 8.57735 6.8516L6.56645 4.84066H16.1038V14.3785H16.1039Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.0001 2.57177H10.0023C10.218 2.57177 10.3918 2.39689 10.3918 2.18115C10.3918 1.96541 10.2158 1.79053 10.0001 1.79053C9.78442 1.79053 9.6095 1.96541 9.6095 2.18115C9.6095 2.39689 9.78438 2.57177 10.0001 2.57177Z"
            })
        ]
    }));
};
/* harmony default export */ const icons_Beer = (Beer);

;// CONCATENATED MODULE: ./src/components/icons/Bottle.jsx



const Bottle = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.1653 11.1972L13.3094 7.12293C13.2762 6.96457 13.1208 6.86309 12.9625 6.89645C12.8041 6.92973 12.7028 7.08504 12.736 7.2434L13.5919 11.3178C13.617 11.437 13.6335 11.5582 13.6432 11.68H6.35689C6.36657 11.5582 6.3831 11.437 6.40825 11.3177L8.26486 2.48008H11.7353L12.454 5.90164C12.4872 6.05996 12.6424 6.16137 12.8009 6.12813C12.9593 6.09484 13.0606 5.93953 13.0274 5.78117L12.3306 2.46371C12.6318 2.39684 12.8579 2.12781 12.8579 1.80664V0.673047C12.8579 0.301914 12.556 0 12.1848 0H9.67506C9.51326 0 9.38209 0.131133 9.38209 0.292969C9.38209 0.454805 9.51326 0.585938 9.67506 0.585938H12.1848C12.2328 0.585938 12.2719 0.625039 12.2719 0.673047V1.80664C12.2719 1.85488 12.2328 1.89414 12.1848 1.89414H7.81529C7.76728 1.89414 7.72818 1.85488 7.72818 1.80664V0.673047C7.72818 0.625039 7.76724 0.585938 7.81529 0.585938H8.30396C8.46576 0.585938 8.59693 0.454805 8.59693 0.292969C8.59693 0.131133 8.46576 0 8.30396 0H7.81529C7.44419 0 7.14224 0.301914 7.14224 0.673047V1.80664C7.14224 2.12785 7.36833 2.39687 7.66954 2.46375L5.83485 11.1971C5.78583 11.4298 5.76099 11.6684 5.76099 11.9062V13.6617C5.76099 13.8236 5.89216 13.9547 6.05396 13.9547C6.21575 13.9547 6.34692 13.8236 6.34692 13.6617V12.2659H13.6532V16.9676H6.34692V15.0328C6.34692 14.871 6.21575 14.7398 6.05396 14.7398C5.89216 14.7398 5.76099 14.871 5.76099 15.0328V18.1285C5.76099 19.1605 6.60052 20 7.63247 20H12.3676C13.3996 20 14.2391 19.1605 14.2391 18.1285V11.9062C14.2391 11.6682 14.2143 11.4296 14.1653 11.1972ZM12.3677 19.4141H7.63247C6.92364 19.4141 6.34692 18.8373 6.34692 18.1285V17.5535H13.6532V18.1285C13.6532 18.8373 13.0765 19.4141 12.3677 19.4141Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.6346 14.617C11.6346 13.7157 10.9014 12.9824 10 12.9824C9.0987 12.9824 8.36542 13.7157 8.36542 14.617C8.36542 15.5183 9.0987 16.2516 10 16.2516C10.9013 16.2516 11.6346 15.5184 11.6346 14.617ZM8.95139 14.617C8.95139 14.0388 9.42182 13.5684 10.0001 13.5684C10.5783 13.5684 11.0487 14.0388 11.0487 14.617C11.0487 15.1952 10.5783 15.6657 10.0001 15.6657C9.42182 15.6657 8.95139 15.1952 8.95139 14.617Z"
            })
        ]
    }));
};
/* harmony default export */ const icons_Bottle = (Bottle);

;// CONCATENATED MODULE: ./src/components/icons/Breakfast.jsx



const Breakfast = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M10 20C15.527 20 20 15.5274 20 9.99998C20 4.47295 15.5275 0 10 0C4.47299 0 0 4.47249 0 10C0 12.6711 1.04017 15.1823 2.92896 17.0711C4.81767 18.9598 7.3289 20 10 20ZM10 0.585987C15.2032 0.585987 19.4141 4.79646 19.4141 10C19.4141 15.2032 15.2036 19.4141 10 19.4141C4.79689 19.414 0.585987 15.2036 0.585987 10C0.585987 4.79689 4.79638 0.585987 10 0.585987Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M9.46606 12.1707C9.61439 12.2355 9.78706 12.1676 9.85175 12.0193C9.91645 11.8711 9.84871 11.6983 9.70037 11.6336C9.18279 11.4078 8.84831 10.8973 8.84831 10.3331C8.84831 9.5509 9.48465 8.91456 10.2669 8.91456C11.049 8.91456 11.6854 9.5509 11.6854 10.3331C11.6854 10.8973 11.3509 11.4078 10.8334 11.6336C10.685 11.6983 10.6173 11.8711 10.682 12.0194C10.7468 12.1679 10.9197 12.2354 11.0677 12.1708C11.7989 11.8517 12.2714 11.1304 12.2714 10.3331C12.2714 9.22783 11.3721 8.32861 10.2669 8.32861C9.16158 8.32861 8.26233 9.22783 8.26233 10.3331C8.26233 11.1304 8.73483 11.8517 9.46606 12.1707Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M10 17.7033C14.0043 17.7033 17.3108 14.6429 17.6706 10.7102C17.6853 10.549 17.5667 10.4065 17.4056 10.3917C17.2443 10.3768 17.1019 10.4957 17.0871 10.6568C16.7545 14.2918 13.6972 17.1174 10 17.1174C6.07541 17.1174 2.88253 13.9245 2.88253 9.99985C2.88253 9.78862 2.8921 9.57536 2.91108 9.36276C2.9189 9.36299 2.92671 9.36311 2.9346 9.36311H3.95625V10.4636C3.95625 10.9096 4.31917 11.2725 4.76526 11.2725H6.65136C6.83649 11.9829 7.22875 12.6312 7.78845 13.1276C8.00335 13.3182 8.16622 13.532 8.27259 13.763C8.7515 14.8034 9.96895 15.3162 11.0604 14.8911C11.3594 15.4635 11.95 15.8299 12.6171 15.8299C13.4648 15.8299 14.1743 15.2272 14.3396 14.4278C15.005 14.1663 15.455 13.5191 15.455 12.791C15.455 12.6716 15.4429 12.5549 15.4201 12.4422C15.8141 12.1098 16.044 11.6217 16.044 11.0988C16.044 10.7699 15.953 10.4618 15.7952 10.1982C16.1406 9.71459 16.1011 9.05535 15.6949 8.61785C15.6805 8.60238 15.6774 8.57726 15.6886 8.56617C16.3147 7.94131 16.0832 6.81755 15.2418 6.50908C15.22 6.50111 15.2065 6.4833 15.2075 6.47166C15.2827 5.61057 14.4449 4.94997 13.6428 5.16034C13.6177 5.16686 13.5855 5.16049 13.5738 5.131C13.2397 4.29351 12.0857 4.07724 11.4782 4.76515C11.4692 4.77531 11.4518 4.77933 11.4385 4.77409C10.735 4.49825 9.91554 4.92239 9.75936 5.68499C9.11294 5.83965 8.55738 6.2836 8.27252 6.90251C8.20638 7.04616 8.11832 7.18312 8.0096 7.312C7.86061 7.13699 7.63922 7.0253 7.39447 7.0253H6.37282V5.92489C6.37282 5.47892 6.01002 5.11588 5.56385 5.11588H4.82218C6.16484 3.6892 8.01941 2.88237 10 2.88237C13.6988 2.88237 16.7546 5.70941 17.0871 9.34291C17.1018 9.50406 17.2437 9.62274 17.4055 9.60802C17.5667 9.59329 17.6853 9.4507 17.6706 9.28955C17.3105 5.3541 14.0015 2.29639 9.99997 2.29639C7.6768 2.29639 5.51443 3.32245 4.04341 5.11588H2.93452C2.48847 5.11588 2.12555 5.4788 2.12555 5.92485V8.55414C2.12555 8.76935 2.21056 8.96468 2.34807 9.10977C2.31392 9.40593 2.29646 9.70463 2.29646 9.99985C2.29646 14.2475 5.75226 17.7033 10 17.7033ZM12.6171 15.2439C12.1764 15.2439 11.7735 14.991 11.5747 14.6086C12.074 14.2389 12.2483 13.7815 12.3037 13.6771C12.4091 13.4788 12.5573 13.2943 12.7453 13.1275C12.8084 13.0715 12.8817 13.0013 12.9388 12.9429C13.4586 13.0906 13.8379 13.6025 13.7848 14.1799V14.1803C13.7293 14.776 13.2269 15.2439 12.6171 15.2439ZM14.3489 13.7656C14.2495 13.2023 13.8648 12.7049 13.3338 12.4652C13.3533 12.4262 13.5896 12.1219 13.7745 11.6212C14.3936 11.6622 14.8689 12.1784 14.8689 12.791C14.8689 13.1897 14.6668 13.5521 14.3489 13.7656ZM15.1839 11.8524C14.8992 11.4003 14.4316 11.1157 13.9346 11.0481C14 10.7109 14.0218 10.3373 13.9853 9.96488C14.7296 9.76783 15.458 10.3319 15.458 11.0988C15.458 11.3788 15.3591 11.644 15.1839 11.8524ZM11.2245 5.31961C11.467 5.4147 11.7454 5.34774 11.9174 5.15303C12.2425 4.78468 12.8605 4.9245 13.0294 5.34805C13.1485 5.64678 13.4758 5.80977 13.7913 5.72718C14.2066 5.61831 14.6632 5.96869 14.6236 6.4206C14.5994 6.69793 14.7706 6.96057 15.04 7.05929C15.4884 7.22364 15.5916 7.83498 15.2746 8.15137C15.038 8.38737 15.034 8.76744 15.2654 9.0166C15.4488 9.21415 15.4904 9.49625 15.3906 9.73068C14.9553 9.37768 14.3915 9.26638 13.8819 9.38636C13.7014 8.69884 13.3123 8.04081 12.7453 7.538C12.547 7.36216 12.3745 7.14855 12.2612 6.90255C11.9238 6.16956 11.2028 5.67698 10.3963 5.62866C10.5516 5.33777 10.914 5.1978 11.2245 5.31961ZM8.80479 7.1475C9.37691 5.90474 11.1542 5.89931 11.7289 7.1475C11.8628 7.43826 12.0689 7.72118 12.3565 7.97628C12.8735 8.43487 13.2319 9.05902 13.3624 9.74889C13.3627 9.75014 13.3629 9.75135 13.3631 9.7526C13.5674 10.8387 13.1847 11.9547 12.3565 12.6891C12.0806 12.9339 11.8694 13.2127 11.7289 13.5179C11.1541 14.7663 9.37675 14.7604 8.80479 13.518C8.66431 13.2128 8.45319 12.9339 8.17723 12.6891C7.50292 12.091 7.11652 11.2308 7.11652 10.3327C7.11652 9.43273 7.50347 8.57398 8.17723 7.97624C8.45316 7.73153 8.66431 7.45268 8.80479 7.1475ZM7.58972 7.72778C6.90088 8.43632 6.53049 9.37725 6.53049 10.3327C6.53049 10.4452 6.53749 10.5843 6.54717 10.6865H4.76523C4.64229 10.6865 4.5422 10.5865 4.5422 10.4636C4.5422 10.2014 4.5422 8.08136 4.5422 7.83427C4.5422 7.71161 4.64201 7.61129 4.76523 7.61129H7.39451C7.47799 7.61121 7.55167 7.65852 7.58972 7.72778ZM2.71154 5.92482C2.71154 5.80188 2.81158 5.70183 2.93452 5.70183H5.56385C5.68679 5.70183 5.78684 5.80188 5.78684 5.92482V7.02522H4.76523C4.31913 7.02522 3.95621 7.38814 3.95621 7.83423V8.77709H2.93452C2.92476 8.77709 2.91507 8.7763 2.90542 8.77498C2.90409 8.77482 2.90276 8.77459 2.90144 8.77435C2.87151 8.76966 2.84248 8.7588 2.81615 8.74197C2.81346 8.74025 2.81057 8.739 2.80783 8.73736C2.74974 8.69708 2.71158 8.62996 2.71158 8.5541V5.92482H2.71154Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Breakfast = (Breakfast);

;// CONCATENATED MODULE: ./src/components/icons/Carrot.jsx



const Carrot = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M6.88558 7.90479C6.97805 7.90479 7.07097 7.87244 7.14559 7.80667L7.15276 7.80027C7.31405 7.65699 7.32854 7.4101 7.18526 7.24882C7.04183 7.08753 6.79494 7.07304 6.63381 7.21632L6.62602 7.22318C6.46428 7.36585 6.45009 7.61152 6.59291 7.77326C6.66982 7.86054 6.77739 7.90479 6.88558 7.90479Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19.019 4.17246C19.4069 3.27463 19.2177 2.1995 18.5091 1.49088C17.8004 0.782264 16.7253 0.592902 15.8275 0.980933C15.244 0.196021 14.2183 -0.177667 13.2501 0.0817327C12.2821 0.341132 11.5807 1.17762 11.4677 2.14899C10.4962 2.26191 9.65973 2.96335 9.40033 3.93152C9.2456 4.50892 9.41315 5.08936 9.5993 5.50043C8.94409 5.6666 8.26401 5.99268 7.56607 6.47974C7.38922 6.60318 7.34573 6.84671 7.46917 7.02356C7.59277 7.20057 7.83615 7.2439 8.01315 7.12046C9.8732 5.82255 11.4926 5.8404 12.8259 7.17386C14.3092 8.65717 14.1682 10.4835 12.4078 12.6032L11.4003 11.5957C11.2477 11.4433 11.0004 11.4433 10.8478 11.5957C10.6952 11.7483 10.6952 11.9956 10.8478 12.1482L11.8875 13.1878C10.3941 14.7611 8.13217 16.3653 5.56915 17.657C5.30685 17.7891 5.04623 17.9148 4.78912 18.0338L3.90869 17.1536C3.7561 17.001 3.50876 17.001 3.35617 17.1536C3.20373 17.306 3.20373 17.5535 3.35632 17.7059L4.02313 18.3729C3.40805 18.6317 2.83035 18.8415 2.3262 18.9871C1.37146 19.2629 0.938107 19.2346 0.811764 19.1892C0.772244 19.0779 0.741726 18.7229 0.933529 17.9653C1.12411 17.2123 1.47567 16.2712 1.95022 15.2436C2.78778 13.4303 3.85849 11.6503 4.98916 10.1713L5.88821 11.0703C5.96435 11.1466 6.06445 11.1848 6.1644 11.1848C6.26434 11.1848 6.36429 11.1466 6.44058 11.0703C6.59317 10.9178 6.59317 10.6704 6.44058 10.5178L5.4779 9.5553C5.65841 9.33664 5.83969 9.12622 6.02112 8.92542C6.16577 8.76535 6.15341 8.51847 5.99334 8.37366C5.83328 8.22901 5.58624 8.24152 5.44159 8.40143C3.87878 10.1301 2.33825 12.5251 1.21505 14.9723C0.719906 16.051 0.355221 17.0414 0.160366 17.8367C-0.0743142 18.7939 -0.0518838 19.394 0.230709 19.7254C0.244137 19.741 0.258785 19.7556 0.274502 19.7691C0.406185 19.8814 0.620113 19.9999 1.06353 19.9999C1.37466 19.9999 1.79855 19.9417 2.38601 19.7817C3.30246 19.5326 4.42199 19.0901 5.62362 18.5021C8.43002 17.1293 10.966 15.3387 12.5816 13.5896C13.5939 12.4938 14.2364 11.4269 14.4958 10.4135C14.7877 10.5435 15.1668 10.6631 15.5736 10.6631C15.7353 10.6631 15.9016 10.6442 16.0684 10.5995C17.0364 10.3401 17.7379 9.50357 17.8508 8.5322C18.8222 8.41929 19.6588 7.71769 19.9182 6.74982C20.1776 5.78165 19.8039 4.7558 19.019 4.17246ZM19.1635 6.54749C18.9641 7.29181 18.2614 7.8039 17.4934 7.76468C17.3828 7.75904 17.2754 7.80054 17.1973 7.87867C17.1191 7.95679 17.0778 8.06437 17.0834 8.17469C17.1225 8.94297 16.6106 9.64533 15.8662 9.84491C15.4645 9.95249 14.982 9.80082 14.6222 9.60505C14.6448 9.18818 14.5987 8.78489 14.4836 8.39625C14.9599 7.99051 15.6699 7.58631 16.2682 7.50574C16.4819 7.4769 16.6319 7.28022 16.6031 7.06644C16.5742 6.85251 16.3774 6.70267 16.1638 6.73136C15.4703 6.82489 14.7189 7.22574 14.1673 7.64856C14.0363 7.41312 13.877 7.18393 13.6902 6.96146C14.5747 6.26703 15.4127 5.38782 15.9639 4.56934C16.0843 4.39036 16.037 4.14759 15.858 4.02704C15.679 3.90665 15.4362 3.95395 15.3159 4.13294C14.794 4.90778 13.989 5.74503 13.1415 6.39826C12.8868 6.17273 12.623 5.98414 12.3509 5.83277C12.7739 5.28116 13.1749 4.52967 13.2684 3.836C13.2973 3.62223 13.1473 3.42554 12.9335 3.3967C12.7199 3.36802 12.523 3.51786 12.4942 3.73163C12.4135 4.33008 12.0091 5.04038 11.6032 5.51661C11.2183 5.40247 10.8195 5.35547 10.4092 5.37592C10.2017 5.003 10.0496 4.52692 10.155 4.13355C10.3545 3.38923 11.0568 2.87714 11.8253 2.91636C11.9351 2.92155 12.0432 2.88065 12.1213 2.80253C12.1994 2.72425 12.2408 2.61683 12.2353 2.50635C12.1962 1.73823 12.708 1.03571 13.4525 0.83628C14.1968 0.636847 14.9913 0.989173 15.3416 1.67399C15.392 1.77241 15.4816 1.84489 15.5884 1.87342C15.695 1.90211 15.8089 1.8841 15.9016 1.82413C16.5475 1.40604 17.4118 1.49821 17.9567 2.0431C18.5016 2.58814 18.5938 3.45225 18.1758 4.09815C18.1157 4.19092 18.0978 4.30475 18.1264 4.41141C18.1549 4.51822 18.2274 4.60779 18.3258 4.65815C19.0106 5.00864 19.3629 5.80317 19.1635 6.54749Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M7.82335 13.0057L8.89605 14.0784C8.97234 14.1547 9.07228 14.1927 9.17223 14.1927C9.27217 14.1927 9.37212 14.1545 9.44841 14.0784C9.601 13.9258 9.601 13.6784 9.44841 13.5258L8.37587 12.4533C8.22329 12.3007 7.97594 12.3007 7.82351 12.4533C7.67092 12.6059 7.67092 12.8532 7.82335 13.0057Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M11.9449 9.34592C12.0212 9.42221 12.1212 9.46036 12.2211 9.46036C12.321 9.46036 12.4211 9.42221 12.4973 9.34592C12.6499 9.19348 12.6499 8.94614 12.4973 8.79355L11.3681 7.66425C11.2155 7.51166 10.9682 7.51166 10.8156 7.66425C10.663 7.81683 10.663 8.06418 10.8156 8.21661L11.9449 9.34592Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.99384 10.1325C9.09378 10.1325 9.19388 10.0944 9.27002 10.0181C9.42261 9.86548 9.42261 9.61813 9.27002 9.46555L8.55515 8.75067C8.40256 8.59808 8.15521 8.59808 8.00262 8.75067C7.85004 8.90311 7.85004 9.15045 8.00262 9.30304L8.71765 10.0181C8.79395 10.0944 8.89389 10.1325 8.99384 10.1325Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.5329 3.11684C16.3582 2.99019 16.114 3.02925 15.9874 3.20412L15.9813 3.21251C15.8548 3.38722 15.8939 3.63152 16.0686 3.75801C16.1378 3.80821 16.218 3.83232 16.2973 3.83232C16.4183 3.83232 16.5376 3.77632 16.6141 3.67073L16.6202 3.66219C16.7467 3.48763 16.7076 3.24333 16.5329 3.11684Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.24347 13.5568C4.09088 13.7093 4.09088 13.9566 4.24347 14.1092L5.16113 15.027C5.23743 15.1033 5.33737 15.1414 5.43732 15.1414C5.53726 15.1414 5.63736 15.1031 5.7135 15.027C5.86609 14.8744 5.86609 14.6271 5.71365 14.4745L4.79584 13.5568C4.64325 13.4042 4.3959 13.4042 4.24347 13.5568Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M6.5076 15.2681C6.35516 15.1153 6.10782 15.115 5.95508 15.2675C5.80234 15.4197 5.80203 15.6671 5.95447 15.8198L5.96179 15.8273C6.03824 15.9038 6.13834 15.9421 6.23843 15.9421C6.33823 15.9421 6.43802 15.9041 6.51431 15.8279C6.66705 15.6756 6.66736 15.4283 6.51492 15.2755L6.5076 15.2681Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Carrot = (Carrot);

;// CONCATENATED MODULE: ./src/components/icons/Honey.jsx



const Honey = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.5658 14.2208C13.5549 14.0954 13.4814 13.9795 13.3723 13.9165L11.9798 13.1125V11.5033C11.9798 11.3636 11.9052 11.2346 11.7843 11.1649L10.1956 10.2481C10.0748 10.1784 9.92603 10.1783 9.80517 10.248L8.21607 11.165C8.09521 11.2347 8.02075 11.3637 8.02075 11.5033V13.1124L6.62739 13.9164C6.50642 13.9862 6.43188 14.1152 6.43188 14.2548V16.0896C6.43188 16.2292 6.50642 16.3582 6.62739 16.428L8.21607 17.3447C8.27649 17.3796 8.34392 17.397 8.41138 17.397C8.47884 17.397 8.54626 17.3796 8.60669 17.3447L10.0002 16.5406L11.394 17.3448C11.4544 17.3796 11.5218 17.397 11.5891 17.397C11.6566 17.397 11.724 17.3796 11.7844 17.3447L13.3722 16.4279C13.4915 16.359 13.5675 16.2272 13.5675 16.0896V14.2548C13.5676 14.2436 13.5668 14.2319 13.5658 14.2208ZM8.802 11.7288L10.0001 11.0374L11.1985 11.729V13.1124L10.0003 13.8038L8.80204 13.1125V11.7288H8.802ZM8.41138 16.5553L7.21314 15.8639V14.4805L8.41138 13.789L9.60966 14.4804V15.864L8.41138 16.5553ZM11.589 16.5554L10.3909 15.864V14.4803L11.589 13.789L12.7863 14.4803V15.864L11.589 16.5554Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18.8821 8.63844C19.2262 8.11367 19.1794 7.40207 18.76 6.78125L17.0575 4.26055V2.75859C17.6438 2.58883 18.0739 2.04742 18.0739 1.40711C18.0739 0.631211 17.4427 0 16.6669 0H3.33247C2.55661 0 1.9254 0.631211 1.9254 1.40707C1.9254 2.04738 2.35552 2.58883 2.94185 2.75855V4.26047L1.23927 6.78137C0.820285 7.40242 0.774035 8.11422 1.11845 8.63894C1.152 8.69008 1.18911 8.73773 1.22833 8.78297C1.00474 9.69633 0.891223 10.6404 0.891223 11.5927C0.891223 13.2516 1.22302 14.8371 1.87739 16.3053C2.50345 17.7098 3.41853 18.9548 4.52372 19.9055C4.59458 19.9664 4.68497 20 4.77845 20H15.2219C15.3154 20 15.4057 19.9664 15.4766 19.9055C16.5817 18.9549 17.4966 17.7099 18.1224 16.3052C18.7764 14.8373 19.108 13.2518 19.108 11.5927C19.108 10.6371 18.9946 9.69355 18.7714 8.78418C18.8111 8.73859 18.8482 8.69008 18.8821 8.63844ZM2.70665 1.40707C2.70665 1.06203 2.98739 0.78125 3.33247 0.78125H16.6668C17.0119 0.78125 17.2927 1.06203 17.2927 1.40707C17.2927 1.75211 17.0119 2.03289 16.6668 2.03289H11.7518C11.5361 2.03289 11.3612 2.20781 11.3612 2.42352C11.3612 2.63922 11.5361 2.81414 11.7518 2.81414H16.2762V3.98941H3.7231V2.81418H8.24415C8.45985 2.81418 8.63477 2.63926 8.63477 2.42355C8.63477 2.20785 8.45985 2.03293 8.24415 2.03293H3.33247C2.98739 2.03293 2.70665 1.75215 2.70665 1.40707ZM15.0753 19.2187H4.92521C2.8561 17.3803 1.67251 14.6099 1.67251 11.5928C1.67251 10.7867 1.75958 9.98746 1.93111 9.21031C2.13978 9.26215 2.36599 9.26945 2.59755 9.22621C2.94716 9.16039 3.21802 8.96199 3.44841 8.71648C3.82333 9.05156 4.27806 9.23715 4.7463 9.23711H4.747C5.22095 9.23691 5.68103 9.04652 6.0581 8.70344C6.43649 9.05344 6.89091 9.24191 7.37227 9.24211H7.37294C7.85481 9.24207 8.30989 9.05336 8.68892 8.70277C9.06501 9.04328 9.52509 9.23215 10.0002 9.23215C10.4753 9.23215 10.9353 9.04336 11.3114 8.70293C11.6899 9.0532 12.1445 9.24191 12.6261 9.24211H12.6267C13.1083 9.24207 13.5633 9.05355 13.9422 8.70328C14.3195 9.04664 14.7799 9.23711 15.2541 9.23711C15.7222 9.23711 16.177 9.05141 16.5515 8.71625C16.7824 8.96183 17.0534 9.16039 17.4025 9.22637C17.5047 9.24539 17.6057 9.25469 17.7048 9.25469C17.8302 9.25469 17.9521 9.23949 18.0686 9.21055C18.2398 9.98465 18.3268 10.7838 18.3268 11.5928C18.3268 14.6105 17.1437 17.3809 15.0753 19.2187ZM18.2288 8.21004C18.0913 8.41957 17.8362 8.51262 17.5465 8.45851C17.345 8.42043 17.1582 8.26051 16.8803 7.88797C16.8066 7.78914 16.6906 7.7309 16.5672 7.7309C16.5672 7.7309 16.5671 7.7309 16.567 7.7309C16.4436 7.73094 16.3275 7.7893 16.2539 7.88824C15.9813 8.25426 15.6262 8.45586 15.254 8.45586C14.8818 8.45586 14.5266 8.25426 14.2541 7.88824C14.1804 7.7893 14.0643 7.73098 13.941 7.7309C13.9409 7.7309 13.9408 7.7309 13.9407 7.7309C13.8175 7.7309 13.7014 7.7891 13.6277 7.88793C13.3519 8.25742 12.9965 8.4609 12.6266 8.4609C12.6265 8.4609 12.6264 8.4609 12.6263 8.4609C12.2567 8.46074 11.9016 8.25734 11.6265 7.88812C11.5527 7.78922 11.4366 7.73094 11.3132 7.73094C11.1899 7.73094 11.0737 7.78922 11 7.88816C10.7296 8.25105 10.3745 8.45094 10 8.45094C9.6256 8.45094 9.27048 8.25105 9.00009 7.88816C8.92641 7.78926 8.81036 7.73098 8.68696 7.73094C8.68696 7.73094 8.68688 7.73094 8.68684 7.73094C8.56356 7.73094 8.44751 7.7891 8.37376 7.88797C8.09798 8.25746 7.74251 8.46094 7.37267 8.46094C7.37255 8.46094 7.37243 8.46094 7.37231 8.46094C7.00271 8.46078 6.64767 8.25738 6.37255 7.88816C6.2988 7.78922 6.18267 7.73094 6.05923 7.73098C5.93579 7.73101 5.81966 7.78933 5.74595 7.88832C5.47353 8.25422 5.11853 8.45578 4.74638 8.45594C4.74622 8.45594 4.7461 8.45594 4.74599 8.45594C4.37353 8.45594 4.01806 8.25426 3.74497 7.88808C3.67122 7.78922 3.55517 7.73098 3.43181 7.73098C3.43169 7.73098 3.43161 7.73098 3.4315 7.73098C3.30806 7.73109 3.19193 7.78949 3.11829 7.88855C2.84173 8.26062 2.65513 8.42043 2.45333 8.45844C2.16384 8.5123 1.90876 8.41976 1.77126 8.21035C1.60025 7.9498 1.64337 7.57898 1.8865 7.21852L3.5397 4.77074H6.14571L5.24103 6.04898C5.11638 6.22512 5.1581 6.46887 5.33419 6.59348C5.40274 6.64199 5.48149 6.66531 5.55954 6.66531C5.682 6.66531 5.80263 6.60785 5.87872 6.50031L7.10286 4.77074H9.60927V6.27465C9.60927 6.49035 9.78419 6.66527 9.99989 6.66527C10.2156 6.66527 10.3905 6.49035 10.3905 6.27465V4.77074H12.8969L14.1211 6.50031C14.1972 6.60785 14.3178 6.66531 14.4402 6.66531C14.5182 6.66531 14.597 6.64199 14.6656 6.59348C14.8417 6.46887 14.8834 6.22508 14.7588 6.04898L13.8541 4.77074H16.459L18.1122 7.21859C18.3561 7.57894 18.3995 7.94965 18.2288 8.21004Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.998 2.81396H10.0002C10.2159 2.81396 10.3898 2.63904 10.3898 2.42334C10.3898 2.20764 10.2137 2.03271 9.99804 2.03271C9.78234 2.03271 9.60742 2.20764 9.60742 2.42334C9.60742 2.63904 9.7823 2.81396 9.998 2.81396Z"
            })
        ]
    }));
};
/* harmony default export */ const icons_Honey = (Honey);

;// CONCATENATED MODULE: ./src/components/icons/Milk.jsx



const Milk = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M3.43751 17.8125V10.3125C3.43636 9.32373 3.63725 8.34515 4.02786 7.4368L4.67149 5.93473C4.72645 5.80691 4.77848 5.67547 4.82739 5.54234C5.59613 5.40467 6.38452 5.42061 7.14708 5.58922C7.61003 5.69248 8.0829 5.74468 8.55723 5.74488C8.90396 5.74478 9.25012 5.71688 9.59239 5.66145C9.62755 5.75289 9.66462 5.84418 9.70333 5.93461L10.3471 7.43699L10.9216 7.1909L10.2779 5.68863C10.2094 5.52848 10.1464 5.36582 10.0904 5.20457C9.85779 4.53436 9.72434 3.83378 9.69422 3.125H10C10.0829 3.125 10.1624 3.09208 10.221 3.03347C10.2796 2.97487 10.3125 2.89538 10.3125 2.8125V1.5625C10.3122 1.31395 10.2134 1.07566 10.0376 0.899907C9.86185 0.724154 9.62356 0.625289 9.37501 0.625H5.00001C4.75145 0.625289 4.51317 0.724154 4.33741 0.899907C4.16166 1.07566 4.06279 1.31395 4.06251 1.5625V2.8125C4.06251 2.89538 4.09543 2.97487 4.15403 3.03347C4.21264 3.09208 4.29213 3.125 4.37501 3.125H4.68075C4.6512 3.82081 4.52206 4.5088 4.29727 5.16797C4.23684 5.34473 4.16958 5.51953 4.09715 5.68809L3.4534 7.19043C3.02935 8.17661 2.81126 9.23902 2.81251 10.3125V17.8125C2.81297 18.2268 2.97774 18.6239 3.27066 18.9168C3.56359 19.2098 3.96075 19.3745 4.37501 19.375H9.37501V18.75H4.37501C4.12645 18.7497 3.88817 18.6508 3.71241 18.4751C3.53666 18.2993 3.43779 18.0611 3.43751 17.8125ZM4.68751 1.5625C4.6876 1.47965 4.72055 1.40022 4.77914 1.34163C4.83772 1.28305 4.91715 1.25009 5.00001 1.25H9.37501C9.45786 1.25009 9.53729 1.28305 9.59587 1.34163C9.65446 1.40022 9.68741 1.47965 9.68751 1.5625V2.5H4.68751V1.5625ZM9.06864 3.125C9.09442 3.78069 9.20178 4.43062 9.38825 5.05977C8.68732 5.16063 7.9739 5.13323 7.28278 4.97891C6.54616 4.81605 5.78691 4.78189 5.03864 4.87793C5.19334 4.30551 5.28316 3.7175 5.30641 3.125H9.06864Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M5.20447 6.27786L4.86737 7.06445L5.44188 7.31066L5.77898 6.52407L5.20447 6.27786Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.0625 10.3124V11.5624H4.68751V10.3124C4.68655 9.49295 4.85302 8.68198 5.17669 7.9292L4.60247 7.68311C4.24528 8.5136 4.06153 9.40832 4.0625 10.3124Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17.1875 9.375C17.1875 8.34918 15.1438 7.8125 13.125 7.8125C11.1062 7.8125 9.0625 8.34918 9.0625 9.375C9.06258 9.41269 9.06551 9.45033 9.07125 9.48758L10.0016 19.0938C10.0093 19.1708 10.0454 19.2423 10.1029 19.2943C10.1603 19.3462 10.235 19.375 10.3125 19.375H15.9375C16.015 19.375 16.0897 19.3462 16.1471 19.2943C16.2046 19.2423 16.2407 19.1708 16.2484 19.0938L17.1788 9.48766C17.1845 9.45038 17.1874 9.41272 17.1875 9.375ZM16.3357 11.9336L16.1777 11.9863C15.2049 12.3123 14.1549 12.3282 13.1726 12.0319C12.1224 11.7164 11.0026 11.7164 9.95234 12.0319L9.92402 12.0404L9.77 10.2955C10.5413 10.7194 11.8381 10.9375 13.125 10.9375C14.4119 10.9375 15.7088 10.7193 16.4801 10.2955L16.3357 11.9336ZM13.125 8.4375C15.3351 8.4375 16.5465 9.04887 16.5618 9.36879L16.5582 9.40785C16.4805 9.73379 15.2751 10.3125 13.125 10.3125C10.9749 10.3125 9.76953 9.73379 9.69176 9.40781L9.68824 9.36875C9.70352 9.04887 10.9149 8.4375 13.125 8.4375ZM15.6548 18.75H10.5951L9.98324 12.6752L10.132 12.6306C11.0652 12.3515 12.0598 12.3515 12.993 12.6306C14.0624 12.9533 15.204 12.9473 16.2699 12.6133L15.6548 18.75Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M11.2963 13.3718L10.6738 13.4268L10.7323 14.0898L11.3548 14.0349L11.2963 13.3718Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M11.4098 14.6565L10.7878 14.7183L11.0359 17.2182L11.6579 17.1565L11.4098 14.6565Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Milk = (Milk);

;// CONCATENATED MODULE: ./src/components/icons/Snack.jsx



const Snack = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.6517 14.0915C16.8135 14.0915 16.9447 13.9603 16.9447 13.7985V4.82972C16.9447 4.60632 17.0226 4.38804 17.1641 4.21511L17.6927 3.56906C17.9196 3.29179 18.0445 2.94171 18.0445 2.58343V0.293002C18.0445 0.191283 17.9917 0.0968693 17.9051 0.043549C17.8185 -0.00981035 17.7104 -0.0143807 17.6197 0.0313615L16.201 0.746244L14.7823 0.0313615C14.6994 -0.0104354 14.6016 -0.0104354 14.5187 0.0313615L13.1002 0.746244L11.6817 0.0313615C11.5988 -0.0104354 11.501 -0.0104354 11.418 0.0313615L9.99959 0.746244L8.58123 0.0313615C8.4983 -0.0104354 8.40041 -0.0104354 8.31748 0.0313615L6.89932 0.746244L5.48096 0.0313615C5.39803 -0.0104354 5.30018 -0.0104354 5.21721 0.0313615L3.79881 0.746244L2.38045 0.0313615C2.28959 -0.0143807 2.18158 -0.00988848 2.09494 0.043549C2.0083 0.0968693 1.95557 0.191322 1.95557 0.293002V2.58347C1.95557 2.94175 2.08053 3.29183 2.3074 3.56909L2.836 4.21515C2.97744 4.38808 3.05537 4.60636 3.05537 4.82972V15.1703C3.05537 15.3937 2.97748 15.612 2.836 15.7849L2.3074 16.4309C2.08053 16.7082 1.95557 17.0583 1.95557 17.4165V19.707C1.95557 19.8087 2.0083 19.9031 2.09494 19.9565C2.14189 19.9854 2.19518 20 2.24857 20C2.29365 20 2.33885 19.9896 2.38041 19.9686L3.79877 19.2537L5.21717 19.9686C5.30014 20.0105 5.39799 20.0104 5.48092 19.9686L6.89928 19.2537L8.31744 19.9686C8.40041 20.0104 8.49822 20.0104 8.58119 19.9686L9.99955 19.2537L11.418 19.9686C11.501 20.0104 11.5988 20.0104 11.6817 19.9686L13.1002 19.2537L14.5186 19.9686C14.6015 20.0104 14.6994 20.0104 14.7823 19.9686L16.2009 19.2537L17.6196 19.9686C17.7104 20.0144 17.8184 20.0098 17.905 19.9564C17.9916 19.9031 18.0444 19.8087 18.0444 19.707V17.4165C18.0444 17.0582 17.9195 16.7082 17.6926 16.4309L17.164 15.7848C17.0225 15.6119 16.9446 15.3937 16.9446 15.1703C16.9446 15.0084 16.8134 14.8773 16.6516 14.8773C16.4897 14.8773 16.3586 15.0084 16.3586 15.1703C16.3586 15.5285 16.4835 15.8786 16.7104 16.1559L17.239 16.8019C17.3805 16.9748 17.4584 17.1931 17.4584 17.4165V17.5686H2.54158V17.4165C2.54158 17.1931 2.61947 16.9748 2.76096 16.8019L3.28955 16.1559C3.51643 15.8786 3.64139 15.5286 3.64139 15.1703V13.2066H16.3587V13.7984C16.3587 13.9603 16.4899 14.0915 16.6517 14.0915ZM17.4585 18.1548V19.2312L16.3328 18.664C16.2499 18.6222 16.1521 18.6222 16.0692 18.664L14.6505 19.3789L13.2321 18.664C13.1906 18.6431 13.1454 18.6326 13.1002 18.6326C13.055 18.6326 13.0098 18.6431 12.9684 18.664L11.5499 19.3789L10.1315 18.664C10.0485 18.6222 9.95069 18.6222 9.86772 18.664L8.44936 19.3789L7.03119 18.664C6.94822 18.6222 6.85041 18.6221 6.76744 18.664L5.34908 19.3789L3.93068 18.664C3.84775 18.6222 3.7499 18.6221 3.66693 18.664L2.54158 19.2312V18.1548H17.4585ZM2.54158 0.768783L3.66693 1.33597C3.74986 1.37777 3.84772 1.37777 3.93068 1.33597L5.34908 0.621088L6.76744 1.33597C6.85037 1.37777 6.94826 1.37777 7.03119 1.33597L8.4494 0.621088L9.86776 1.33597C9.95069 1.37777 10.0485 1.37777 10.1315 1.33597L11.5499 0.621088L12.9683 1.33597C13.0513 1.37777 13.1491 1.37777 13.232 1.33597L14.6505 0.621088L16.0691 1.33597C16.1521 1.37777 16.2499 1.37777 16.3328 1.33597L17.4584 0.768744V1.84519H2.54158V0.768783ZM3.64139 12.6206V7.3564H5.59557C5.7574 7.3564 5.88857 7.22522 5.88857 7.06339C5.88857 6.90155 5.7574 6.77038 5.59557 6.77038H3.64139V4.82968C3.64139 4.4714 3.51643 4.12136 3.28955 3.84405L2.76092 3.198C2.61947 3.02511 2.54154 2.80683 2.54154 2.58343V2.43132H17.4585V2.58343C17.4585 2.80683 17.3806 3.02511 17.2391 3.198L16.7105 3.84405C16.4836 4.1214 16.3587 4.47144 16.3587 4.82972V6.77042H6.95611C6.79432 6.77042 6.66311 6.90159 6.66311 7.06343C6.66311 7.22526 6.79428 7.35644 6.95611 7.35644H16.3587V12.6207H3.64139V12.6206Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.1711 8.96836C10.1704 8.96656 10.1697 8.96473 10.1689 8.96293C10.1318 8.8727 10.0447 8.81445 9.94715 8.81445C9.94707 8.81445 9.94696 8.81445 9.94684 8.81445C9.84914 8.81457 9.76211 8.87309 9.72516 8.96352C9.72453 8.96496 9.72399 8.96645 9.72344 8.96793L8.98605 10.904C8.94765 11.0048 8.99824 11.1177 9.09906 11.1561C9.19984 11.1944 9.31273 11.1439 9.35113 11.0431L9.48688 10.6867H10.402L10.5363 11.0425C10.5658 11.1207 10.6401 11.169 10.7191 11.1689C10.742 11.1689 10.7653 11.1649 10.788 11.1563C10.8889 11.1182 10.9399 11.0055 10.9018 10.9046L10.1711 8.96836ZM9.63563 10.296L9.94649 9.47981L10.2545 10.296H9.63563Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.31594 8.80811C8.20809 8.80917 8.12145 8.89745 8.1225 9.00534L8.13574 10.3716L7.1168 8.89616C7.06824 8.82581 6.97957 8.79522 6.89793 8.82065C6.81633 8.84608 6.76074 8.92163 6.76074 9.00713V10.973C6.76074 11.0809 6.8482 11.1683 6.95605 11.1683C7.06395 11.1683 7.15137 11.0809 7.15137 10.973V9.63374L8.12457 11.043C8.18399 11.1289 8.28231 11.1656 8.37504 11.1366C8.47012 11.1069 8.53152 11.0167 8.53152 10.9048L8.51313 9.00155C8.51211 8.8937 8.42543 8.80729 8.31594 8.80811Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.337 9.95117L15.1777 9.17836C15.2572 9.10535 15.2624 8.98176 15.1894 8.90234C15.1163 8.82289 14.9928 8.81773 14.9134 8.8907L14.1845 9.56066V9.00976C14.1845 8.90187 14.097 8.81445 13.9892 8.81445C13.8813 8.81445 13.7939 8.90191 13.7939 9.00976V10.9735C13.7939 11.0814 13.8813 11.1688 13.9892 11.1688C14.097 11.1688 14.1845 11.0814 14.1845 10.9735V10.3469L14.9796 11.1141C15.0176 11.1507 15.0664 11.1688 15.1152 11.1688C15.1664 11.1688 15.2175 11.1488 15.2558 11.1091C15.3307 11.0315 15.3285 10.9078 15.2509 10.8329L14.337 9.95117Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.8536 10.5708C12.835 10.5931 12.8148 10.6139 12.7937 10.6327C12.6852 10.7293 12.5476 10.7783 12.3847 10.7783C11.951 10.7783 11.5981 10.4254 11.5981 9.99169C11.5981 9.55797 11.951 9.20512 12.3847 9.20512C12.5423 9.20512 12.6944 9.25153 12.8243 9.3393C12.9136 9.39973 13.0351 9.37618 13.0955 9.2868C13.1559 9.19742 13.1324 9.07602 13.043 9.01563C12.8482 8.88402 12.6206 8.81445 12.3847 8.81445C11.7355 8.81445 11.2075 9.34254 11.2075 9.99169C11.2075 10.6408 11.7355 11.1689 12.3847 11.1689C12.6427 11.1689 12.874 11.0844 13.0536 10.9244C13.0888 10.8931 13.1222 10.8586 13.1529 10.822C13.2223 10.7393 13.2115 10.6161 13.1288 10.5468C13.0462 10.4774 12.923 10.4882 12.8536 10.5708Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.80719 9.82356C5.55786 9.73161 5.32633 9.6313 5.26415 9.60396C5.20872 9.56243 5.18196 9.49669 5.19215 9.4256C5.20536 9.33356 5.27692 9.25946 5.38352 9.22731C5.68805 9.13567 5.9652 9.35747 5.97024 9.36153C6.05281 9.43024 6.17543 9.41935 6.24465 9.337C6.31406 9.25446 6.3034 9.13122 6.22082 9.06181C6.20313 9.04692 5.78172 8.69919 5.27086 8.85325C5.01864 8.92923 4.84036 9.12724 4.80547 9.37005C4.77864 9.55692 4.84352 9.79778 5.00965 9.90321C5.20993 10.0303 5.45032 10.1083 5.67203 10.1901C5.87903 10.2664 5.98457 10.3843 5.96153 10.5133C5.93828 10.6434 5.78516 10.7779 5.56914 10.7779C5.36004 10.7779 5.15833 10.6931 5.02958 10.5509C4.95715 10.471 4.83364 10.4649 4.75368 10.5374C4.67376 10.6098 4.66766 10.7333 4.74008 10.8133C4.94165 11.0357 5.25161 11.1686 5.56914 11.1686C5.95239 11.1686 6.28641 10.9164 6.34613 10.582C6.39141 10.3282 6.27367 9.99564 5.80719 9.82356Z"
            })
        ]
    }));
};
/* harmony default export */ const icons_Snack = (Snack);

;// CONCATENATED MODULE: ./src/components/icons/Yogurt.jsx



const Yogurt = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.9166 11.4462C16.8533 11.3745 16.7623 11.3335 16.6666 11.3335H3.33334C3.23767 11.3335 3.14666 11.3745 3.08369 11.4462C3.02037 11.5178 2.99068 11.6131 3.00267 11.7081L4.00267 19.7081C4.02333 19.8751 4.16532 20.0001 4.33333 20.0001H15.6666C15.8346 20.0001 15.9766 19.8751 15.9976 19.7081L16.9976 11.7081C17.0093 11.6131 16.98 11.5178 16.9166 11.4462ZM15.3723 19.3335H4.62767L3.71099 12.0001H16.2889L15.3723 19.3335Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17.3333 10H2.66663C2.48265 10 2.33331 10.1493 2.33331 10.3333V11.6666C2.33331 11.8506 2.48265 12 2.66663 12H17.3333C17.5172 12 17.6666 11.8506 17.6666 11.6666V10.3333C17.6666 10.1493 17.5172 10 17.3333 10ZM16.9999 11.3334H2.99999V10.6667H16.9999V11.3334Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M18 8H2.00007C1.81608 8 1.66675 8.14934 1.66675 8.33332V10.3333C1.66675 10.5173 1.81608 10.6666 2.00007 10.6666H18C18.184 10.6666 18.3333 10.5173 18.3333 10.3333V8.33332C18.3333 8.14934 18.184 8 18 8ZM17.6666 9.99999H2.33339V8.66668H17.6666V9.99999Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M5.66668 15.3335H5.00001C4.81602 15.3335 4.66669 15.4828 4.66669 15.6668C4.66669 15.8508 4.81602 16.0001 5.00001 16.0001H5.66668C5.85067 16.0001 6 15.8508 6 15.6668C6 15.4828 5.8507 15.3335 5.66668 15.3335Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M7.66668 15.3335H7.00001C6.81602 15.3335 6.66669 15.4828 6.66669 15.6668C6.66669 15.8508 6.81602 16.0001 7.00001 16.0001H7.66668C7.85067 16.0001 8 15.8508 8 15.6668C8 15.4828 7.8507 15.3335 7.66668 15.3335Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.8893 5.09141C16.9637 4.88809 16.955 4.70876 16.9227 4.57177C16.8093 4.09278 16.3097 3.75243 15.9183 3.55411C16.168 3.24177 16.305 2.88677 16.3267 2.49412C16.3947 1.27147 15.283 0.145142 15.2356 0.0977983C15.1403 0.00213466 14.9967 -0.0261855 14.8723 0.0254549C14.748 0.0771344 14.6667 0.198775 14.6667 0.333461C14.6667 0.549789 14.5923 0.717796 14.4327 0.862444C13.826 1.41209 12.2547 1.38943 11.6667 1.33346C8.50168 1.33346 7.64633 2.1781 7.41699 2.67044C5.11965 2.74177 4.53368 3.79478 4.38434 4.34309C3.67669 4.39208 3.13669 4.63177 2.77669 5.05676C2.23634 5.69442 2.31134 6.52242 2.33337 6.69176C2.35373 7.86941 3.78939 8.60073 3.85103 8.63175C3.89704 8.65476 3.94837 8.66675 4.00001 8.66675H16C17.582 8.66675 18 7.35843 18 6.66676C18 5.70938 17.425 5.26372 16.8893 5.09141ZM16 8.00003H4.08505C3.84337 7.86203 3.00005 7.33172 3.00005 6.66672C3.00005 6.6484 2.99872 6.63004 2.9954 6.61207C2.99439 6.60539 2.8974 5.94574 3.2854 5.48774C3.55939 5.16407 4.02438 5.00008 4.66673 5.00008C4.85071 5.00008 5.00005 4.85075 5.00005 4.66677C5.00005 4.65345 5.0304 3.33345 7.66672 3.33345C7.8507 3.33345 7.99937 3.20314 7.99937 3.01912C8.03504 2.7358 8.76406 2.00013 11.6337 1.9981C11.8674 2.02142 13.9454 2.20209 14.8797 1.35678C14.9864 1.2601 15.0751 1.15279 15.1447 1.03576C15.4024 1.40244 15.6907 1.93611 15.661 2.45908C15.64 2.82439 15.465 3.13443 15.125 3.40642C15.0297 3.48275 14.984 3.60509 15.0054 3.72509C15.0267 3.84474 15.112 3.94376 15.2277 3.98274C15.6094 4.11106 16.206 4.43575 16.274 4.72509C16.2834 4.76442 16.3114 4.88407 16.0977 5.09774C16.0031 5.19239 15.9751 5.33473 16.0257 5.45907C16.0764 5.5834 16.1977 5.66539 16.3317 5.66672C16.4991 5.66871 17.3334 5.72571 17.3334 6.66672C17.3333 6.72105 17.3183 8.00003 16 8.00003Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M6.41397 5.3433C5.29065 5.06229 4.97398 4.53296 4.96198 4.51229C4.87831 4.35163 4.68097 4.28663 4.51734 4.36831C4.35269 4.45065 4.28601 4.65096 4.36835 4.81565C4.40968 4.89799 4.81202 5.62962 6.25233 5.98997C6.27967 5.99696 6.30666 5.99997 6.33365 5.99997C6.48299 5.99997 6.61865 5.89896 6.65666 5.74763C6.70096 5.56896 6.59264 5.38795 6.41397 5.3433Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M9.33328 3.66673C8.52829 3.66673 7.9493 2.82275 7.94329 2.81439C7.8413 2.66173 7.6343 2.62041 7.48161 2.72271C7.3286 2.8247 7.28727 3.03204 7.38927 3.18505C7.42059 3.23173 8.16825 4.33337 9.33325 4.33337C9.51723 4.33337 9.66656 4.18403 9.66656 4.00005C9.6666 3.81606 9.51727 3.66673 9.33328 3.66673Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.5687 5.09773C16.4383 4.96742 16.2276 4.96742 16.0973 5.09773C15.899 5.29605 15.496 5.49273 14.8986 5.68238C14.7233 5.7384 14.6263 5.9257 14.682 6.10105C14.7273 6.24304 14.8583 6.33371 14.9996 6.33371C15.0333 6.33371 15.0673 6.32839 15.1003 6.31769C15.8199 6.08902 16.2866 5.85136 16.5686 5.56902C16.699 5.43871 16.699 5.22805 16.5687 5.09773Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.569 3.43126C15.4386 3.30091 15.228 3.30091 15.0976 3.43126C15.092 3.43692 14.5187 4.00024 13.6666 4.00024C13.4826 4.00024 13.3333 4.14957 13.3333 4.33356C13.3333 4.51754 13.4826 4.66688 13.6666 4.66688C14.7916 4.66688 15.5376 3.93387 15.569 3.90255C15.6993 3.77227 15.6993 3.56161 15.569 3.43126Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.6666 13.4462C16.6033 13.3745 16.5123 13.3335 16.4166 13.3335H13.6666C13.4826 13.3335 13.3333 13.4828 13.3333 13.6668V17.6668C13.3333 17.8508 13.4826 18.0001 13.6666 18.0001H15.9166C16.0846 18.0001 16.2266 17.8751 16.2477 17.7081L16.7477 13.7081C16.7593 13.6131 16.73 13.5178 16.6666 13.4462ZM15.6223 17.3335H14V14.0002H16.039L15.6223 17.3335Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.66664 13.3335H3.58334C3.48768 13.3335 3.39666 13.3745 3.33334 13.4462C3.27033 13.5178 3.24068 13.6131 3.25268 13.7081L3.75267 17.7081C3.77334 17.8751 3.91533 18.0001 4.08334 18.0001H8.66664C8.85062 18.0001 8.99996 17.8508 8.99996 17.6668V13.6668C9 13.4828 8.85066 13.3335 8.66664 13.3335ZM8.33332 17.3335H4.37767L3.96099 14.0002H8.33332V17.3335Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Yogurt = (Yogurt);

;// CONCATENATED MODULE: ./src/components/icons/CreditCardVerified.jsx



const CreditCardVerified = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 64 64",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M62 40C60.896 40 60 40.896 60 42V56H4V32H26C27.104 32 28 31.104 28 30C28 28.896 27.104 28 26 28H4V20H26C27.104 20 28 19.104 28 18C28 16.896 27.104 16 26 16H4C1.792 16 0 17.792 0 20V56C0 58.208 1.792 60 4 60H60C62.208 60 64 58.208 64 56V42C64 40.896 63.104 40 62 40Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M18 40H10C8.896 40 8 40.896 8 42C8 43.104 8.896 44 10 44H18C19.104 44 20 43.104 20 42C20 40.896 19.104 40 18 40Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M62.788 10.1595L48.788 4.15949C48.28 3.94749 47.716 3.94749 47.208 4.15949L33.208 10.1595C32.476 10.4755 32 11.1995 32 11.9995V19.9995C32 31.0035 36.068 37.4355 47.004 43.7355C47.312 43.9115 47.656 43.9995 48 43.9995C48.344 43.9995 48.688 43.9115 48.996 43.7355C59.932 37.4515 64 31.0195 64 19.9995V11.9995C64 11.1995 63.524 10.4755 62.788 10.1595ZM60 19.9995C60 29.2355 56.944 34.3195 48 39.6795C39.056 34.3075 36 29.2235 36 19.9995V13.3195L48 8.17549L60 13.3195V19.9995Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M55.2521 16.4354C54.3921 15.7554 53.1361 15.8874 52.4401 16.7474L46.1521 24.6114L43.6641 20.8914C43.0441 19.9714 41.8001 19.7274 40.8921 20.3354C39.9761 20.9474 39.7241 22.1914 40.3361 23.1074L44.3361 29.1074C44.6921 29.6394 45.2761 29.9674 45.9161 29.9994C45.9441 29.9994 45.9761 29.9994 46.0001 29.9994C46.6041 29.9994 47.1801 29.7274 47.5641 29.2474L55.5641 19.2474C56.2521 18.3834 56.1161 17.1274 55.2521 16.4354Z"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_CreditCardVerified = (CreditCardVerified);

// EXTERNAL MODULE: ./src/components/icons/CustomerService.jsx
var CustomerService = __webpack_require__(4273);
;// CONCATENATED MODULE: ./src/components/icons/AlarmClock.jsx



const AlarmClock = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 42 41",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M41.6056 22.2221C41.2314 18.4574 39.5495 14.9083 36.8697 12.2284C34.5795 9.9383 31.7764 8.46665 28.8269 7.81228V5.74358C30.0316 5.44388 30.927 4.35343 30.927 3.05732C30.927 1.53087 29.6852 0.289062 28.1588 0.289062H22.2966C20.7701 0.289062 19.5283 1.53087 19.5283 3.05732C19.5283 4.35335 20.4238 5.4438 21.6284 5.74358V7.81806C18.6879 8.4752 15.8941 9.94482 13.6104 12.2285C13.1107 12.7282 12.6499 13.2525 12.228 13.7973C12.2076 13.7958 12.1872 13.7942 12.1663 13.7942H6.3643C5.9147 13.7942 5.55011 14.1588 5.55011 14.6084C5.55011 15.0581 5.9147 15.4226 6.3643 15.4226H11.1202C10.5232 16.422 10.0418 17.4716 9.67546 18.5521H0.814193C0.364595 18.5521 0 18.9166 0 19.3662C0 19.8159 0.364595 20.1804 0.814193 20.1804H9.21536C8.98071 21.2105 8.84604 22.2587 8.81127 23.3099H5.21083C4.76124 23.3099 4.39664 23.6745 4.39664 24.1241C4.39664 24.5738 4.76124 24.9383 5.21083 24.9383H8.83725C8.90596 25.9922 9.0754 27.0406 9.34563 28.0678H4.07096C3.62137 28.0678 3.25677 28.4324 3.25677 28.882C3.25677 29.3317 3.62137 29.6962 4.07096 29.6962H9.86524C10.664 31.8091 11.9122 33.7895 13.6104 35.4877C16.2929 38.1702 19.8457 39.8525 23.6143 40.2248C24.1521 40.2779 24.6904 40.3042 25.2279 40.3042C28.4051 40.3042 31.5418 39.3847 34.2034 37.6515C34.5802 37.4061 34.6868 36.9017 34.4414 36.5249C34.196 36.1481 33.6916 36.0415 33.3148 36.2869C27.4887 40.0808 19.686 39.2605 14.7619 34.3363C8.98421 28.5586 8.98421 19.1577 14.7619 13.38C20.5395 7.60238 29.9404 7.60238 35.7181 13.38C40.6358 18.2977 41.4606 26.0937 37.6792 31.9169C37.4343 32.2941 37.5415 32.7984 37.9186 33.0432C38.2959 33.2881 38.8 33.1809 39.0448 32.8038C41.0652 29.6923 41.9746 25.9344 41.6056 22.2221ZM21.1567 3.0574C21.1567 2.42884 21.668 1.91753 22.2966 1.91753H28.1588C28.7873 1.91753 29.2986 2.42884 29.2986 3.0574C29.2986 3.68595 28.7873 4.19727 28.1588 4.19727H28.0127H22.4426H22.2966C21.668 4.19727 21.1567 3.68587 21.1567 3.0574ZM23.2568 7.53814V5.82565H27.1985V7.53521C25.8896 7.37954 24.5654 7.38052 23.2568 7.53814Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M36.2942 34.0977C36.0793 34.0977 35.87 34.1848 35.7187 34.3362C35.5664 34.4876 35.48 34.6977 35.48 34.9118C35.48 35.126 35.5664 35.336 35.7187 35.4875C35.87 35.6397 36.0794 35.726 36.2942 35.726C36.5084 35.726 36.7176 35.6397 36.8698 35.4875C37.0213 35.336 37.1084 35.126 37.1084 34.9118C37.1084 34.6977 37.0214 34.4876 36.8698 34.3362C36.7176 34.1848 36.5083 34.0977 36.2942 34.0977Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M25.24 11.2266C18.2756 11.2266 12.6096 16.8925 12.6096 23.857C12.6096 30.8216 18.2756 36.4875 25.24 36.4875C32.2045 36.4875 37.8705 30.8216 37.8705 23.857C37.8705 16.8925 32.2045 11.2266 25.24 11.2266ZM25.24 34.8591C19.1734 34.8591 14.2379 29.9236 14.2379 23.857C14.2379 17.7905 19.1734 12.8549 25.24 12.8549C31.3067 12.8549 36.2421 17.7905 36.2421 23.857C36.2421 29.9236 31.3067 34.8591 25.24 34.8591Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M30.3903 17.5568L26.3576 21.5894C26.0203 21.4227 25.641 21.3285 25.24 21.3285C24.839 21.3285 24.4597 21.4227 24.1225 21.5894L22.3176 19.7846C21.9996 19.4667 21.4842 19.4667 21.1661 19.7846C20.8482 20.1026 20.8482 20.6181 21.1661 20.936L22.9709 22.7409C22.8041 23.0781 22.71 23.4574 22.71 23.8584C22.71 25.2535 23.8449 26.3884 25.24 26.3884C26.6351 26.3884 27.77 25.2535 27.77 23.8584C27.77 23.4574 27.6758 23.0781 27.5091 22.7409L31.4234 18.8265L31.5417 18.7082C31.8596 18.3903 31.8596 17.8748 31.5417 17.5568C31.2238 17.2389 30.7084 17.2389 30.3903 17.5568ZM25.24 24.7601C24.7429 24.7601 24.3384 24.3557 24.3384 23.8585C24.3384 23.3614 24.7429 22.9569 25.24 22.9569C25.7372 22.9569 26.1417 23.3614 26.1417 23.8585C26.1417 24.3557 25.7372 24.7601 25.24 24.7601Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M33.9453 23.0527H33.1909C32.7414 23.0527 32.3768 23.4172 32.3768 23.8669C32.3768 24.3166 32.7414 24.6811 33.1909 24.6811H33.9453C34.3949 24.6811 34.7595 24.3166 34.7595 23.8669C34.7595 23.4172 34.3949 23.0527 33.9453 23.0527Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17.289 23.0332H16.5348C16.0852 23.0332 15.7206 23.3977 15.7206 23.8474C15.7206 24.2971 16.0852 24.6616 16.5348 24.6616H17.289C17.7386 24.6616 18.1032 24.2971 18.1032 23.8474C18.1032 23.3977 17.7386 23.0332 17.289 23.0332Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M25.25 16.7205C25.6996 16.7205 26.0642 16.356 26.0642 15.9063V15.1521C26.0642 14.7024 25.6996 14.3379 25.25 14.3379C24.8004 14.3379 24.4358 14.7024 24.4358 15.1521V15.9063C24.4358 16.356 24.8004 16.7205 25.25 16.7205Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M25.2301 30.9941C24.7805 30.9941 24.4159 31.3586 24.4159 31.8083V32.5626C24.4159 33.0122 24.7805 33.3768 25.2301 33.3768C25.6797 33.3768 26.0443 33.0122 26.0443 32.5626V31.8083C26.0443 31.3586 25.6797 30.9941 25.2301 30.9941Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M0.81418 28.0684C0.60005 28.0684 0.389992 28.1555 0.238555 28.3069C0.0871172 28.4584 0 28.6684 0 28.8825C0 29.0975 0.0870358 29.3067 0.238555 29.4582C0.390074 29.6096 0.60005 29.6967 0.81418 29.6967C1.02831 29.6967 1.23837 29.6096 1.38972 29.4582C1.54116 29.3067 1.62836 29.0967 1.62836 28.8825C1.62836 28.6684 1.54124 28.4584 1.38972 28.3069C1.23837 28.1555 1.02831 28.0684 0.81418 28.0684Z",
                    fill: "#2B3445"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_AlarmClock = (AlarmClock);

;// CONCATENATED MODULE: ./src/components/icons/MoneyGurantee.jsx



const MoneyGuarantee = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 42 43",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M36.4318 15.6609C35.8205 15.0813 34.9956 14.813 34.1677 14.9258C34.0235 14.9454 33.8733 14.968 33.7186 14.9933C31.0268 11.6758 27.106 9.63382 22.9037 9.37502C22.7344 9.36461 22.5709 9.42581 22.4483 9.54372C22.3258 9.66171 22.2563 9.82625 22.2563 9.99837V12.8387C22.2563 13.1463 22.012 13.3966 21.7116 13.3966H19.9742C19.6738 13.3966 19.4295 13.1463 19.4295 12.8387V11.0274C20.1847 9.92443 20.6296 8.58379 20.6296 7.13808C20.6296 3.39005 17.6478 0.34082 13.9826 0.34082C10.3178 0.34082 7.33636 3.39005 7.33636 7.13808C7.33636 7.47815 7.36087 7.81655 7.40915 8.14388C7.45938 8.48495 7.77008 8.71944 8.10406 8.66823C8.43755 8.61677 8.66707 8.2986 8.61675 7.95753C8.57759 7.69173 8.55764 7.41603 8.55764 7.13808C8.55764 4.07877 10.9912 1.58986 13.9826 1.58986C16.9743 1.58986 19.4083 4.07877 19.4083 7.13808C19.4083 10.1979 16.9743 12.6871 13.9826 12.6871C12.0797 12.6871 10.3492 11.6951 9.35351 10.0334C9.17724 9.7394 8.80141 9.64697 8.51384 9.82725C8.22635 10.0074 8.13606 10.392 8.31225 10.686C8.81085 11.518 9.46 12.2128 10.2126 12.7437C9.3921 13.4122 8.64101 14.1655 7.96923 14.9935C7.8138 14.9681 7.66293 14.9454 7.51809 14.9257C6.69055 14.8132 5.86521 15.0812 5.254 15.6608C4.64197 16.2411 4.31817 17.0637 4.36548 17.9175C4.43786 19.2226 4.616 20.4003 4.84414 21.4371C4.58018 22.6091 4.44779 23.8152 4.45333 25.0253C4.45894 26.3339 4.4876 27.6697 4.53849 28.9959C4.64572 31.7684 5.76433 34.3765 7.68825 36.3396C8.03469 36.6932 8.40189 37.0196 8.78651 37.3185V40.5378C8.78651 41.8813 9.8548 42.9743 11.168 42.9743H15.4734C16.4493 42.9743 17.3158 42.3767 17.6807 41.4527L18.3952 39.649C19.2105 39.6624 20.0265 39.6708 20.8429 39.6708C21.6591 39.6708 22.4752 39.6624 23.2906 39.649L24.0049 41.4521C24.37 42.3768 25.2365 42.9743 26.2124 42.9743H30.5178C31.831 42.9743 32.8993 41.8814 32.8993 40.5379V37.3216C33.4229 36.9134 33.9144 36.4534 34.3669 35.9433C34.5935 35.6879 34.5747 35.2929 34.3249 35.0611C34.0751 34.8293 33.6888 34.8485 33.4623 35.1041C31.7244 37.0632 29.3448 38.1993 26.7615 38.3029C22.8343 38.4614 18.8517 38.4614 14.9239 38.3029C12.5189 38.2063 10.2555 37.1951 8.55064 35.4555C6.84533 33.7153 5.85373 31.4037 5.75871 28.9468C5.7084 27.6353 5.68006 26.3141 5.67452 25.0196C5.67339 24.7741 5.67965 24.5287 5.69073 24.2838C6.22923 25.693 6.73191 26.4891 6.77392 26.5544C6.89116 26.7366 7.08559 26.8355 7.28409 26.8355C7.39897 26.8355 7.51532 26.8023 7.61856 26.733C7.90027 26.5441 7.979 26.1572 7.79475 25.8688C7.77545 25.8386 5.85869 22.7853 5.58472 17.847C5.5581 17.3662 5.74007 16.9033 6.08422 16.577C6.42773 16.2513 6.89157 16.1007 7.35704 16.1641C9.24221 16.4203 12.1193 17.1625 15.1198 19.2432C15.3988 19.4368 15.7786 19.3622 15.968 19.0768C16.1572 18.7913 16.0844 18.403 15.8052 18.2094C13.463 16.5851 11.188 15.7263 9.34586 15.275C9.96325 14.5832 10.6455 13.9563 11.3821 13.3998C12.189 13.749 13.0694 13.9362 13.9826 13.9362C15.586 13.9362 17.0587 13.3524 18.2081 12.3819V12.8387C18.2081 13.835 19.0003 14.6456 19.9741 14.6456H21.7116C22.6853 14.6456 23.4775 13.835 23.4775 12.8387V10.6772C26.8751 11.05 30.0313 12.6911 32.3394 15.275C30.4974 15.7264 28.2225 16.5853 25.8804 18.2094C25.6013 18.403 25.5285 18.7913 25.7177 19.0768C25.9071 19.3622 26.2868 19.4368 26.5658 19.2432C29.5663 17.1625 32.4434 16.4203 34.3286 16.1641C34.7941 16.1008 35.2581 16.2514 35.6014 16.577C35.9456 16.9032 36.1276 17.3662 36.1009 17.8469C35.827 22.7853 33.9103 25.8386 33.8909 25.8688C33.7062 26.1568 33.7845 26.5435 34.0659 26.7329C34.1694 26.8025 34.2858 26.8358 34.401 26.8358C34.5995 26.8358 34.7943 26.7369 34.9116 26.5545C34.9537 26.4893 35.4563 25.6932 35.9948 24.284C36.0059 24.529 36.0122 24.7743 36.011 25.02C36.0055 26.3142 35.9772 27.6354 35.9269 28.9469C35.8692 30.4483 35.4861 31.8774 34.7879 33.1944C34.6272 33.4977 34.7372 33.8767 35.0338 34.0411C35.1263 34.0924 35.2259 34.1167 35.3242 34.1167C35.541 34.1167 35.751 33.9984 35.8616 33.7897C36.6497 32.303 37.0822 30.6901 37.1472 28.9959C37.1981 27.67 37.2268 26.3342 37.2324 25.0258C37.2379 23.8154 37.1056 22.6093 36.8416 21.4374C37.0697 20.4006 37.2479 19.2228 37.3203 17.9178C37.3676 17.0638 37.0438 16.2413 36.4318 15.6609ZM26.8096 39.5509C28.5494 39.4811 30.2072 38.9958 31.678 38.1458V40.5378C31.678 41.1926 31.1575 41.7252 30.5178 41.7252H26.2124C25.737 41.7252 25.3151 41.4344 25.137 40.9836L24.5974 39.6216C25.3362 39.6029 26.0741 39.5806 26.8096 39.5509ZM17.0884 39.6216L16.5486 40.9843C16.3707 41.4344 15.9488 41.7252 15.4734 41.7252H11.168C10.5283 41.7252 10.0078 41.1926 10.0078 40.5378V38.1401C11.4847 38.9927 13.1478 39.4815 14.8761 39.5509C15.6118 39.5806 16.3497 39.6029 17.0884 39.6216Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M33.0979 22.4748C33.2014 22.5444 33.3178 22.5777 33.433 22.5777C33.6315 22.5777 33.8264 22.4788 33.9437 22.2964C33.9737 22.2497 34.6806 21.1321 34.7807 19.3282C34.8027 18.9286 34.651 18.5436 34.3645 18.2718C34.0781 18.0003 33.6915 17.8746 33.3041 17.9273C32.6159 18.0209 31.5672 18.2909 30.4788 19.0456C30.1996 19.2392 30.1268 19.6275 30.316 19.913C30.5054 20.1985 30.8851 20.2731 31.1642 20.0795C32.0553 19.4616 32.9072 19.2414 33.4649 19.1655C33.4916 19.1622 33.5148 19.1694 33.5342 19.1878C33.5538 19.2063 33.563 19.2298 33.5614 19.2576C33.4815 20.6985 32.9338 21.5932 32.922 21.6124C32.7385 21.9003 32.817 22.2857 33.0979 22.4748Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.22053 19.1653C8.77832 19.2412 9.63019 19.4612 10.5214 20.0793C10.8004 20.2729 11.1801 20.1982 11.3695 19.9128C11.5587 19.6274 11.4859 19.239 11.2068 19.0454C10.1184 18.2907 9.06963 18.0207 8.38141 17.9271C7.99353 17.8743 7.60729 18 7.32102 18.2716C7.03443 18.5434 6.88275 18.9284 6.9049 19.3281C7.00496 21.1319 7.71183 22.2495 7.74187 22.2962C7.8592 22.4786 8.05395 22.5775 8.25252 22.5775C8.36773 22.5775 8.48424 22.5442 8.58764 22.4746C8.86934 22.285 8.94743 21.8978 8.76212 21.6096C8.75658 21.6009 8.20449 20.7059 8.12421 19.2573C8.12258 19.2295 8.13178 19.2059 8.1514 19.1874C8.17062 19.1692 8.19415 19.1618 8.22053 19.1653Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M22.9578 24.9226C21.5543 24.8756 20.1312 24.8756 18.7277 24.9226C16.3701 25.0017 14.4771 26.9611 14.4178 29.3836C14.4048 29.9189 14.4048 30.4617 14.4178 30.9969C14.4771 33.4193 16.3701 35.3788 18.7277 35.4579C19.4294 35.4815 20.1361 35.4932 20.8428 35.4932C21.5495 35.4932 22.256 35.4815 22.9579 35.4579C25.3154 35.3788 27.2085 33.4194 27.2677 30.9969C27.2808 30.4617 27.2808 29.9189 27.2677 29.3836C27.2084 26.9612 25.3153 25.0017 22.9578 24.9226ZM26.0466 30.9657C26.0036 32.7273 24.6292 34.1522 22.9176 34.2095C21.5409 34.2558 20.1444 34.2558 18.7677 34.2095C17.0562 34.1522 15.6817 32.7274 15.6387 30.9657C15.6261 30.4512 15.6261 29.9294 15.6387 29.4148C15.6816 27.6533 17.0561 26.2284 18.7677 26.171C19.456 26.1479 20.1494 26.1363 20.8426 26.1363C21.5358 26.1363 22.2292 26.1479 22.9176 26.171C24.6291 26.2284 26.0035 27.6532 26.0465 29.4148C26.0592 29.9293 26.0592 30.4512 26.0466 30.9657Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19.3088 28.9659C18.9715 28.9659 18.6982 29.2456 18.6982 29.5905V30.918C18.6982 31.2629 18.9715 31.5425 19.3088 31.5425C19.6462 31.5425 19.9195 31.2629 19.9195 30.918V29.5905C19.9195 29.2456 19.6462 28.9659 19.3088 28.9659Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M22.3773 28.9659C22.04 28.9659 21.7666 29.2456 21.7666 29.5905V30.918C21.7666 31.2629 22.04 31.5425 22.3773 31.5425C22.7146 31.5425 22.9879 31.2629 22.9879 30.918V29.5905C22.9879 29.2456 22.7145 28.9659 22.3773 28.9659Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12.3841 29.268C12.9558 29.268 13.4207 28.4785 13.4207 27.508C13.4207 26.5375 12.9557 25.748 12.3841 25.748C11.8126 25.748 11.3476 26.5375 11.3476 27.508C11.3476 28.4785 11.8126 29.268 12.3841 29.268Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M29.3018 25.748C28.7301 25.748 28.2652 26.5375 28.2652 27.508C28.2652 28.4785 28.7302 29.268 29.3018 29.268C29.8733 29.268 30.3383 28.4785 30.3383 27.508C30.3383 26.5375 29.8733 25.748 29.3018 25.748Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M13.9277 9.90622C13.1021 9.91071 12.7762 9.87999 12.0777 9.49504C11.7807 9.33133 11.4104 9.44491 11.2504 9.74859C11.0905 10.0523 11.2014 10.431 11.4984 10.5946C12.2105 10.987 12.7011 11.11 13.3205 11.1438V11.5289C13.3205 11.8738 13.5938 12.1534 13.9311 12.1534C14.2685 12.1534 14.5418 11.8738 14.5418 11.5289V11.0991C15.8439 10.8598 16.6369 9.89023 16.7676 8.93431C16.9197 7.82143 16.2227 6.86559 14.992 6.49921C14.2144 6.26764 13.3523 5.98661 12.8545 5.65779C12.6226 5.50457 12.6244 5.25851 12.646 5.12554C12.6916 4.84617 12.9159 4.50302 13.4092 4.37787C13.6084 4.32733 13.7943 4.30318 13.9657 4.29693C13.9704 4.29668 13.9751 4.2966 13.9797 4.29618C14.7331 4.27312 15.1987 4.60328 15.231 4.62684C15.4992 4.8311 15.879 4.77656 16.0818 4.5036C16.2857 4.22899 16.2334 3.83721 15.9649 3.62854C15.9329 3.60372 15.4038 3.2027 14.5417 3.08138V2.74756C14.5417 2.40266 14.2684 2.12305 13.9311 2.12305C13.5937 2.12305 13.3204 2.40266 13.3204 2.74756V3.11977C13.2528 3.13317 13.1847 3.14783 13.1152 3.16548C12.2357 3.38864 11.5787 4.07735 11.4413 4.92003C11.3241 5.63888 11.6117 6.3236 12.1918 6.7068C12.6994 7.0422 13.4119 7.32956 14.6505 7.69836C15.2933 7.88971 15.6241 8.27716 15.558 8.76128C15.4572 9.4997 14.6428 9.9023 13.9277 9.90622Z",
                    fill: "#2B3445"
                })
            ]
        })
    }));
};
/* harmony default export */ const MoneyGurantee = (MoneyGuarantee);

;// CONCATENATED MODULE: ./src/components/icons/OnlineSupport.jsx



const OnlineSupport = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 42 43",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M38.4294 1.64392H20.1917C19.6739 1.64547 19.1778 1.85183 18.8117 2.21795C18.4456 2.58407 18.2392 3.08019 18.2377 3.59795V13.062C16.7061 11.8307 14.8575 11.0575 12.9054 10.8318C10.9532 10.606 8.97698 10.9368 7.20474 11.7859C5.43251 12.6351 3.93649 13.9681 2.88932 15.631C1.84214 17.2939 1.2865 19.2191 1.2865 21.1842C1.2865 23.1494 1.84214 25.0746 2.88932 26.7375C3.93649 28.4004 5.43251 29.7334 7.20474 30.5826C8.97698 31.4317 10.9532 31.7625 12.9054 31.5367C14.8575 31.311 16.7061 30.5378 18.2377 29.3065V38.7705C18.2392 39.2883 18.4456 39.7844 18.8117 40.1505C19.1778 40.5167 19.6739 40.723 20.1917 40.7246H38.4294C38.9471 40.723 39.4432 40.5167 39.8094 40.1505C40.1755 39.7844 40.3818 39.2883 40.3834 38.7705V3.59795C40.3818 3.08019 40.1755 2.58407 39.8094 2.21795C39.4432 1.85183 38.9471 1.64547 38.4294 1.64392ZM35.6416 2.94661L35.3159 4.2493H23.3051L22.9795 2.94661H35.6416ZM11.7242 30.3031C9.92071 30.3031 8.15768 29.7683 6.6581 28.7663C5.15851 27.7643 3.98973 26.3401 3.29955 24.6739C2.60937 23.0076 2.42879 21.1741 2.78064 19.4053C3.13249 17.6364 4.00097 16.0116 5.27626 14.7363C6.55155 13.461 8.17637 12.5925 9.94525 12.2406C11.7141 11.8888 13.5476 12.0694 15.2139 12.7596C16.8801 13.4497 18.3043 14.6185 19.3063 16.1181C20.3082 17.6177 20.8431 19.3807 20.8431 21.1842C20.8405 23.6019 19.8789 25.9198 18.1694 27.6294C16.4598 29.3389 14.1419 30.3005 11.7242 30.3031ZM39.0807 38.7705C39.0807 38.9433 39.0121 39.109 38.8899 39.2311C38.7678 39.3533 38.6021 39.4219 38.4294 39.4219H20.1917C20.019 39.4219 19.8533 39.3533 19.7311 39.2311C19.609 39.109 19.5404 38.9433 19.5404 38.7705V28.0559C21.219 26.1605 22.1457 23.7161 22.1457 21.1842C22.1457 18.6524 21.219 16.208 19.5404 14.3126V3.59795C19.5404 3.42521 19.609 3.25953 19.7311 3.13738C19.8533 3.01523 20.019 2.94661 20.1917 2.94661H21.6377L22.1653 5.05696C22.2002 5.19818 22.2814 5.32364 22.3959 5.41336C22.5104 5.50307 22.6516 5.55187 22.7971 5.55199H35.824C35.9694 5.55187 36.1107 5.50307 36.2252 5.41336C36.3397 5.32364 36.4209 5.19818 36.4558 5.05696L36.9834 2.94661H38.4294C38.6021 2.94661 38.7678 3.01523 38.8899 3.13738C39.0121 3.25953 39.0807 3.42521 39.0807 3.59795V38.7705Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.2836 3.59755H7.81615V2.29486C7.81635 2.17098 7.78123 2.04962 7.71489 1.945C7.64856 1.84039 7.55376 1.75686 7.44163 1.70421C7.3295 1.65156 7.20468 1.63198 7.08181 1.64777C6.95895 1.66355 6.84313 1.71404 6.74795 1.79332L2.83988 5.05005C2.76613 5.11116 2.70676 5.1878 2.666 5.27449C2.62525 5.36118 2.60413 5.45579 2.60413 5.55158C2.60413 5.64737 2.62525 5.74198 2.666 5.82867C2.70676 5.91536 2.76613 5.992 2.83988 6.05312L6.74795 9.30984C6.86513 9.40694 7.01262 9.45994 7.16481 9.45965C7.25912 9.45969 7.35236 9.43971 7.43837 9.40103C7.55143 9.3487 7.64712 9.26505 7.71408 9.16C7.78104 9.05494 7.81646 8.93288 7.81615 8.8083V7.50561H16.2836C16.4564 7.50561 16.622 7.43699 16.7442 7.31484C16.8663 7.19269 16.935 7.02702 16.935 6.85427V4.24889C16.935 4.07615 16.8663 3.91047 16.7442 3.78832C16.622 3.66617 16.4564 3.59755 16.2836 3.59755ZM15.6323 6.20293H7.16481C6.99206 6.20293 6.82639 6.27155 6.70424 6.3937C6.58209 6.51585 6.51347 6.68152 6.51347 6.85427V7.42094L4.27284 5.55158L6.51347 3.68222V4.24889C6.51347 4.42164 6.58209 4.58731 6.70424 4.70946C6.82639 4.83161 6.99206 4.90024 7.16481 4.90024H15.6323V6.20293Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.7004 36.3146L12.7924 33.0578C12.6972 32.9786 12.5814 32.9281 12.4585 32.9123C12.3356 32.8965 12.2108 32.9161 12.0987 32.9687C11.9866 33.0214 11.8918 33.1049 11.8254 33.2095C11.7591 33.3141 11.724 33.4355 11.7242 33.5594V34.8621H3.25669C3.08394 34.8621 2.91827 34.9307 2.79612 35.0528C2.67397 35.175 2.60535 35.3407 2.60535 35.5134V38.1188C2.60535 38.2915 2.67397 38.4572 2.79612 38.5794C2.91827 38.7015 3.08394 38.7701 3.25669 38.7701H11.7242V40.0728C11.7239 40.1974 11.7593 40.3195 11.8262 40.4245C11.8932 40.5296 11.9889 40.6132 12.1019 40.6656C12.188 40.7042 12.2812 40.7242 12.3755 40.7242C12.5277 40.7245 12.6752 40.6715 12.7924 40.5744L16.7004 37.3176C16.7742 37.2565 16.8336 37.1799 16.8743 37.0932C16.9151 37.0065 16.9362 36.9119 16.9362 36.8161C16.9362 36.7203 16.9151 36.6257 16.8743 36.539C16.8336 36.4523 16.7742 36.3757 16.7004 36.3146ZM13.0269 38.6855V38.1188C13.0269 37.9461 12.9582 37.7804 12.8361 37.6582C12.7139 37.5361 12.5483 37.4675 12.3755 37.4675H3.90804V36.1648H12.3755C12.5483 36.1648 12.7139 36.0961 12.8361 35.974C12.9582 35.8518 13.0269 35.6862 13.0269 35.5134V34.9468L15.2675 36.8161L13.0269 38.6855Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.7242 17.9272C12.0696 17.9272 12.401 18.0644 12.6453 18.3087C12.8896 18.553 13.0268 18.8843 13.0268 19.2298H14.3295C14.3274 18.6539 14.1344 18.0949 13.7809 17.6403C13.4274 17.1856 12.9331 16.8609 12.3755 16.717V15.3218H11.0728V16.717C10.4595 16.8748 9.92485 17.2511 9.56927 17.7752C9.21369 18.2992 9.0616 18.9351 9.14155 19.5633C9.2215 20.1915 9.52799 20.769 10.0035 21.1873C10.479 21.6056 11.0908 21.836 11.7242 21.8352C11.9818 21.8352 12.2337 21.9116 12.4479 22.0548C12.6621 22.1979 12.8291 22.4014 12.9277 22.6394C13.0263 22.8774 13.0521 23.1394 13.0018 23.392C12.9515 23.6447 12.8275 23.8769 12.6453 24.059C12.4631 24.2412 12.231 24.3653 11.9783 24.4156C11.7256 24.4658 11.4637 24.44 11.2256 24.3414C10.9876 24.2428 10.7841 24.0759 10.641 23.8616C10.4979 23.6474 10.4215 23.3956 10.4215 23.1379H9.11877C9.12093 23.7138 9.31386 24.2728 9.6674 24.7275C10.0209 25.1821 10.5152 25.5068 11.0728 25.6508V27.046H12.3755V25.6508C12.9888 25.4929 13.5234 25.1167 13.879 24.5926C14.2346 24.0685 14.3867 23.4327 14.3068 22.8044C14.2268 22.1762 13.9203 21.5987 13.4448 21.1804C12.9693 20.7621 12.3575 20.5317 11.7242 20.5325C11.3787 20.5325 11.0473 20.3953 10.803 20.151C10.5587 19.9067 10.4215 19.5753 10.4215 19.2298C10.4215 18.8843 10.5587 18.553 10.803 18.3087C11.0473 18.0644 11.3787 17.9272 11.7242 17.9272Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6.19759 15.6572C4.73397 17.1241 3.91199 19.1117 3.91199 21.1839C3.91199 23.2561 4.73397 25.2436 6.19759 26.7105L7.11859 25.7895C5.89887 24.5671 5.21386 22.9108 5.21386 21.1839C5.21386 19.457 5.89887 17.8007 7.11859 16.5782L6.19759 15.6572Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.251 15.6572L16.33 16.5782C17.5497 17.8007 18.2347 19.457 18.2347 21.1839C18.2347 22.9108 17.5497 24.5671 16.33 25.7895L17.251 26.7105C18.7146 25.2436 19.5366 23.2561 19.5366 21.1839C19.5366 19.1117 18.7146 17.1241 17.251 15.6572Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M34.1265 17.3286L29.5671 15.3746C29.486 15.34 29.3987 15.3223 29.3105 15.3223C29.2223 15.3223 29.135 15.34 29.0539 15.3746L24.4945 17.3286C24.3773 17.3788 24.2775 17.4623 24.2073 17.5687C24.1372 17.6751 24.0998 17.7997 24.0997 17.9272V20.2166C24.0982 20.8156 24.2154 21.409 24.4446 21.9624C24.6738 22.5158 25.0104 23.0183 25.435 23.4408L28.85 26.8552C28.9721 26.9773 29.1378 27.0459 29.3105 27.0459C29.4832 27.0459 29.6489 26.9773 29.771 26.8552L33.186 23.4408C33.6106 23.0183 33.9472 22.5158 34.1764 21.9624C34.4056 21.409 34.5228 20.8156 34.5213 20.2166V17.9272C34.5212 17.7997 34.4838 17.6751 34.4137 17.5687C34.3435 17.4623 34.2437 17.3788 34.1265 17.3286ZM33.2186 20.2166C33.2196 20.6445 33.1359 21.0683 32.9722 21.4636C32.8085 21.8589 32.5682 22.2179 32.265 22.5198L29.3105 25.4736L26.3567 22.5198C26.0533 22.218 25.8127 21.8591 25.6489 21.4638C25.4852 21.0684 25.4014 20.6446 25.4024 20.2166V18.3564L29.3105 16.6818L33.2186 18.3564V20.2166Z",
                fill: "#2B3445"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M28.4682 20.072L27.5472 20.993L28.8499 22.2957C28.9721 22.4178 29.1377 22.4864 29.3104 22.4864C29.4831 22.4864 29.6488 22.4178 29.7709 22.2957L32.3763 19.6903L31.4553 18.7693L29.3104 20.9142L28.4682 20.072Z",
                fill: "#2B3445"
            })
        ]
    }));
};
/* harmony default export */ const icons_OnlineSupport = (OnlineSupport);

;// CONCATENATED MODULE: ./src/components/icons/Payment.jsx



const Payment = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 42 43",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M41.3952 15.3162L36.738 3.20735C35.8555 0.9183 33.2844 -0.221888 30.9953 0.660625C30.9621 0.673466 30.929 0.686653 30.896 0.700274L7.62232 10.3479C5.40623 11.257 4.31705 13.7654 5.16599 16.0053L5.80593 17.7134H4.33796C1.94332 17.7161 0.00268954 19.6567 0 22.0513V37.668C0.00268954 40.0626 1.94332 42.0033 4.33796 42.006H33.8361C36.2307 42.0033 38.1714 40.0626 38.174 37.668V22.0513C38.1727 21.8159 38.1517 21.5809 38.1116 21.3489L38.9174 21.0227C41.1533 20.1063 42.2522 17.5755 41.3952 15.3162ZM4.33796 19.1016H33.8361C35.3939 19.1061 36.679 20.3227 36.7685 21.8779H1.4055C1.49503 20.3226 2.78011 19.106 4.33796 19.1016ZM11.3141 14.9205L15.9533 12.6002L16.9069 14.9858L12.2677 17.3054L11.3141 14.9205ZM36.7859 37.6681C36.784 39.2965 35.4645 40.616 33.8361 40.6179H4.33796C2.70958 40.616 1.39006 39.2965 1.38815 37.6681V28.8186H36.7859V37.6681ZM36.7859 27.4305H1.38815V23.2661H36.7859V27.4305ZM38.3968 19.7402L37.6715 20.0338C36.9224 18.6088 35.446 17.7157 33.8361 17.7135H14.5561L18.0994 15.9415C18.4224 15.7802 18.5679 15.3981 18.4339 15.0628L16.9618 11.3842C16.8194 11.0283 16.4155 10.8552 16.0596 10.9975C16.0417 11.0047 16.0241 11.0126 16.0068 11.0212L10.1218 13.9655C9.79893 14.127 9.65378 14.509 9.78791 14.8442L10.9359 17.7135H7.28777L6.46599 15.5216C5.8834 13.9827 6.6317 12.2596 8.15398 11.6348L31.427 1.98717C32.9828 1.34203 34.7671 2.08027 35.4123 3.63612C35.4224 3.66032 35.4321 3.6847 35.4415 3.70917L40.0987 15.818C40.6879 17.3705 39.9332 19.1099 38.3968 19.7402Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M24.967 38.666C26.2604 39.4174 27.8576 39.4174 29.151 38.666C31.1397 39.8214 33.6885 39.1458 34.8439 37.1571C35.9992 35.1684 35.3236 32.6196 33.3349 31.4642C32.6967 31.0934 31.9714 30.8989 31.2332 30.9006C30.5015 30.9009 29.7829 31.0954 29.151 31.4642C27.1623 30.3088 24.6135 30.9843 23.4581 32.973C22.3027 34.9618 22.9783 37.5105 24.967 38.666ZM30.3115 32.4582C30.6067 32.3494 30.9185 32.2921 31.2332 32.2888C32.7665 32.2888 34.0095 33.5318 34.0095 35.0651C34.0095 36.5984 32.7665 37.8414 31.2332 37.8414C30.9185 37.8381 30.6067 37.7809 30.3115 37.6721C31.5403 36.1513 31.5403 33.9789 30.3115 32.4582ZM29.151 33.248C30.0765 34.2827 30.0765 35.8475 29.151 36.8822C28.2255 35.8475 28.2255 34.2826 29.151 33.248ZM27.0688 32.2888C27.3834 32.292 27.6953 32.3494 27.9905 32.4582C26.7616 33.9789 26.7616 36.1514 27.9905 37.6721C27.6953 37.7809 27.3834 37.8381 27.0688 37.8414C25.5355 37.8414 24.2925 36.5984 24.2925 35.0651C24.2925 33.5317 25.5355 32.2888 27.0688 32.2888Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M29.2776 14.6859L29.8415 15.9543L36.463 13.011L35.8991 11.7425L29.2776 14.6859Z",
                    fill: "#2B3445"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M34.4214 8.80402L24.8572 13.2185L25.4387 14.4783L35.0028 10.0638L34.4214 8.80402Z",
                    fill: "#2B3445"
                })
            ]
        })
    }));
};
/* harmony default export */ const icons_Payment = (Payment);

;// CONCATENATED MODULE: ./src/components/icons/PickUpBox.jsx



const PickUpBox = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 20 15",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M2.806 0.776367C1.80023 0.776367 0.945312 1.56617 0.945312 2.56539C0.945312 3.26741 1.37869 3.84918 1.97859 4.14327V11.5332C1.97859 13.014 3.18465 14.2258 4.66669 14.2258H16.3309C17.8097 14.2258 19.019 13.0153 19.019 11.5332V4.141C19.6168 3.84622 20.0485 3.26585 20.0485 2.56539C20.0485 1.56617 19.1936 0.776367 18.1878 0.776367H2.806ZM2.806 1.83153H18.1878C18.659 1.83153 18.9941 2.16358 18.9941 2.56539C18.9941 2.96721 18.659 3.30005 18.1878 3.30005H2.806C2.33475 3.30005 1.99973 2.96721 1.99973 2.56539C1.99973 2.16358 2.33475 1.83153 2.806 1.83153ZM3.03377 4.43061H17.9638V11.5332C17.9638 12.4481 17.2406 13.1707 16.3309 13.1707H4.66669C3.75178 13.1707 3.03377 12.4494 3.03377 11.5332V4.43061ZM13.3539 6.68503C13.2531 6.68774 13.1551 6.72 13.0718 6.77706L9.93876 8.86173L9.19283 7.60899C8.83876 6.98362 7.9057 7.53864 8.28625 8.14826L9.31578 9.87847C9.46999 10.1376 9.80971 10.215 10.061 10.0482L13.6564 7.65499C14.104 7.36473 13.8872 6.66946 13.3539 6.68503V6.68503Z"
        })
    }));
};
/* harmony default export */ const icons_PickUpBox = (PickUpBox);

;// CONCATENATED MODULE: ./src/components/icons/OnlineService.jsx



const OnlineService = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 22 20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M22.2578 11.5C22.2578 9.76082 21.0117 8.30403 19.3622 7.9813C19.0305 3.93367 15.6328 0.742188 11.5 0.742188C7.36721 0.742188 3.96953 3.93367 3.63783 7.9813C1.9883 8.30403 0.742188 9.76082 0.742188 11.5C0.742188 13.4767 2.35138 15.0859 4.32813 15.0859H5.04531C6.23315 15.0859 7.19688 14.1222 7.19688 12.9344V10.0656C7.19688 8.89123 6.25108 7.93647 5.08565 7.91406C5.44425 4.6912 8.18301 2.17656 11.5 2.17656C14.817 2.17656 17.5558 4.6912 17.9143 7.91406C16.7444 7.93647 15.8031 8.89123 15.8031 10.0656V12.9344C15.8031 14.0953 16.731 15.0456 17.883 15.0859C17.5513 16.722 16.1034 17.9547 14.3688 17.9547H13.5261C13.2302 17.121 12.4323 16.5203 11.5 16.5203C10.3122 16.5203 9.34844 17.484 9.34844 18.6719C9.34844 19.8597 10.3122 20.8234 11.5 20.8234C12.4368 20.8234 13.2302 20.2228 13.5261 19.3891H14.3688C16.9148 19.3891 19.026 17.484 19.3487 15.0232C21.0027 14.7049 22.2578 13.2481 22.2578 11.5V11.5ZM2.17656 11.5C2.17656 10.5632 2.77721 9.76979 3.61094 9.47395V13.5305C2.77721 13.2302 2.17656 12.4368 2.17656 11.5ZM5.7625 10.0656V12.9344C5.7625 13.3288 5.43977 13.6516 5.04531 13.6516V9.34844C5.43977 9.34844 5.7625 9.67117 5.7625 10.0656ZM11.5 19.3891C11.1055 19.3891 10.7828 19.0663 10.7828 18.6719C10.7828 18.2774 11.1055 17.9547 11.5 17.9547C11.8945 17.9547 12.2172 18.2774 12.2172 18.6719C12.2172 19.0663 11.8945 19.3891 11.5 19.3891ZM17.2375 12.9344V10.0656C17.2375 9.67117 17.5602 9.34844 17.9547 9.34844V13.6516C17.5602 13.6516 17.2375 13.3288 17.2375 12.9344ZM19.3891 13.5261V9.46946C20.2228 9.7653 20.8234 10.5632 20.8234 11.4955C20.8234 12.4279 20.2228 13.2302 19.3891 13.5261Z"
        })
    }));
};
/* harmony default export */ const icons_OnlineService = (OnlineService);

// EXTERNAL MODULE: ./src/components/icons/Home.jsx
var Home = __webpack_require__(7730);
;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Popular.jsx



const Popular = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50723)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.9766 18.1045H2.72656C1.69306 18.1045 0.851562 17.2637 0.851562 16.2295V3.47949C0.851562 2.44524 1.69306 1.60449 2.72656 1.60449H16.9766C18.0101 1.60449 18.8516 2.44524 18.8516 3.47949V16.2295C18.8516 17.2637 18.0101 18.1045 16.9766 18.1045ZM2.72656 2.35449C2.10631 2.35449 1.60156 2.85924 1.60156 3.47949V16.2295C1.60156 16.8497 2.10631 17.3545 2.72656 17.3545H16.9766C17.5968 17.3545 18.1016 16.8497 18.1016 16.2295V3.47949C18.1016 2.85924 17.5968 2.35449 16.9766 2.35449H2.72656Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.4766 5.35449H1.22656C1.01956 5.35449 0.851562 5.18649 0.851562 4.97949C0.851562 4.77249 1.01956 4.60449 1.22656 4.60449H18.4766C18.6836 4.60449 18.8516 4.77249 18.8516 4.97949C18.8516 5.18649 18.6836 5.35449 18.4766 5.35449ZM9.85156 13.6045C8.19706 13.6045 6.85156 12.259 6.85156 10.6045V7.22949C6.85156 7.02249 7.01956 6.85449 7.22656 6.85449H12.4766C12.6836 6.85449 12.8516 7.02249 12.8516 7.22949V10.6045C12.8516 12.259 11.5061 13.6045 9.85156 13.6045ZM7.60156 7.60449V10.6045C7.60156 11.845 8.61106 12.8545 9.85156 12.8545C11.0921 12.8545 12.1016 11.845 12.1016 10.6045V7.60449H7.60156Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.85156 15.8545C9.64456 15.8545 9.47656 15.6865 9.47656 15.4795V13.2295C9.47656 13.0225 9.64456 12.8545 9.85156 12.8545C10.0586 12.8545 10.2266 13.0225 10.2266 13.2295V15.4795C10.2266 15.6865 10.0586 15.8545 9.85156 15.8545Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.7266 15.8545H7.97656C7.76956 15.8545 7.60156 15.6865 7.60156 15.4795C7.60156 15.2725 7.76956 15.1045 7.97656 15.1045H11.7266C11.9336 15.1045 12.1016 15.2725 12.1016 15.4795C12.1016 15.6865 11.9336 15.8545 11.7266 15.8545ZM12.4766 11.7295C12.4151 11.7295 12.3536 11.7272 12.2921 11.7145C12.0888 11.6747 11.9561 11.4782 11.9958 11.2742C12.0356 11.071 12.2283 10.9337 12.4361 10.9787C12.4361 10.9787 12.4361 10.9787 12.4368 10.9787C13.0976 10.9795 13.6016 10.4747 13.6016 9.85449C13.6016 9.23424 13.0968 8.72949 12.4766 8.72949C12.2696 8.72949 12.1016 8.56149 12.1016 8.35449C12.1016 8.14749 12.2696 7.97949 12.4766 7.97949C13.5101 7.97949 14.3516 8.82024 14.3516 9.85449C14.3516 10.8887 13.5101 11.7295 12.4766 11.7295ZM7.22656 11.7295C6.19306 11.7295 5.35156 10.8887 5.35156 9.85449C5.35156 8.82024 6.19306 7.97949 7.22656 7.97949C7.43356 7.97949 7.60156 8.14749 7.60156 8.35449C7.60156 8.56149 7.43356 8.72949 7.22656 8.72949C6.60631 8.72949 6.10156 9.23424 6.10156 9.85449C6.10156 10.4747 6.60631 10.9795 7.22656 10.9795C7.43431 10.936 7.64731 11.0717 7.68706 11.2757C7.72681 11.479 7.61431 11.6755 7.41106 11.7152C7.34956 11.7272 7.28806 11.7295 7.22656 11.7295Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50723",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.851562 0.854492)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Popular = (Popular);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Trending.jsx



const Trending = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.6029 6.10449C16.61 6.05223 16.61 5.99925 16.6029 5.94699C16.5964 5.90296 16.5837 5.86005 16.5654 5.81949C16.5456 5.78284 16.523 5.74774 16.4979 5.71449C16.4693 5.66706 16.434 5.62409 16.3929 5.58699L16.3029 5.53449C16.2596 5.50221 16.2115 5.4769 16.1604 5.45949H16.0104C15.9647 5.41524 15.9113 5.37966 15.8529 5.35449H12.1029C11.904 5.35449 11.7132 5.43351 11.5726 5.57416C11.4319 5.71481 11.3529 5.90558 11.3529 6.10449C11.3529 6.3034 11.4319 6.49417 11.5726 6.63482C11.7132 6.77547 11.904 6.85449 12.1029 6.85449H14.2254L11.2254 10.387L7.98538 8.45949C7.83192 8.36822 7.65093 8.33469 7.47495 8.36493C7.29898 8.39518 7.13956 8.48722 7.02538 8.62449L3.27538 13.1245C3.21223 13.2003 3.16465 13.2878 3.13537 13.382C3.10608 13.4762 3.09567 13.5752 3.10473 13.6735C3.11379 13.7717 3.14213 13.8672 3.18815 13.9544C3.23416 14.0417 3.29694 14.119 3.37288 14.182C3.50782 14.2938 3.67764 14.3548 3.85288 14.3545C3.96307 14.3547 4.07193 14.3306 4.17175 14.2839C4.27156 14.2372 4.35987 14.1692 4.43038 14.0845L7.76788 10.0795L10.9704 11.9995C11.1223 12.0896 11.3011 12.1232 11.4753 12.0944C11.6496 12.0656 11.8081 11.9762 11.9229 11.842L15.1029 8.12949V9.85449C15.1029 10.0534 15.1819 10.2442 15.3226 10.3848C15.4632 10.5255 15.654 10.6045 15.8529 10.6045C16.0518 10.6045 16.2426 10.5255 16.3832 10.3848C16.5239 10.2442 16.6029 10.0534 16.6029 9.85449V6.10449Z",
            fill: "currentColor"
        })
    }));
};
/* harmony default export */ const furniture_shop_Trending = (Trending);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Products.jsx



const Products = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50540)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.38281 1.97949H1.13281V4.22949H3.38281V1.97949Z",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.38281 6.47949H1.13281V8.72949H3.38281V6.47949Z",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.38281 10.9795H1.13281V13.2295H3.38281V10.9795Z",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.38281 15.4795H1.13281V17.7295H3.38281V15.4795Z",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.19531 3.10449H18.5703",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.19531 7.60449H16.3203",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.19531 12.1045H14.0703",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.19531 16.6045H16.3203",
                        stroke: "#7D879C",
                        strokeMiterlimit: "10"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50540",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.851562 0.854492)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Products = (Products);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Chair.jsx



const Chair = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 17 19",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.7383 7.79857C16.7383 7.2314 16.2769 6.76997 15.7099 6.76997H14.9514C14.3842 6.76997 13.9228 7.2314 13.9228 7.79857V9.06584L13.9227 11.3275C13.9227 11.3569 13.8989 11.3807 13.8695 11.3807H13.5679C13.4266 11.1063 13.1404 10.9181 12.811 10.9181H9.25058V10.1017H10.8687C11.44 10.1017 11.9863 9.85754 12.3673 9.43182C12.7482 9.0061 12.9305 8.43633 12.8674 7.86847L12.2511 2.32861C12.1375 1.30894 11.2784 0.540039 10.2525 0.540039H6.72029C5.69431 0.540039 4.83517 1.30894 4.72174 2.32861L4.62781 3.17278C4.61174 3.31752 4.71597 3.44785 4.86072 3.46405C5.00546 3.48012 5.13593 3.37575 5.15199 3.23114L5.24579 2.38684C5.32956 1.63469 5.96333 1.06738 6.72029 1.06738H10.2525C11.0094 1.06738 11.6433 1.63469 11.7269 2.38684L12.3432 7.92683C12.3898 8.34569 12.2553 8.76605 11.9742 9.08012C11.6933 9.3942 11.2903 9.57437 10.8687 9.57437H6.10396C5.6825 9.57437 5.27957 9.3942 4.99846 9.08012C4.71735 8.76605 4.5829 8.34569 4.62946 7.92683L5.03526 4.27924C5.05133 4.13463 4.9471 4.00417 4.80235 3.9881C4.65788 3.97203 4.52728 4.07626 4.51122 4.22101L4.10541 7.86847C4.04224 8.43633 4.22447 9.0061 4.60556 9.43182C4.98651 9.85754 5.53267 10.1017 6.10396 10.1017H7.72224V10.9181H4.16171C3.8324 10.9181 3.54607 11.1063 3.40475 11.3807H3.10318C3.07393 11.3807 3.05003 11.3569 3.05003 11.3275L3.0499 9.06584V7.79857C3.0499 7.2314 2.58847 6.76997 2.0213 6.76997H1.26297C0.695801 6.76997 0.234375 7.2314 0.234375 7.79857C0.234375 8.56075 0.794403 9.19466 1.52458 9.31056V11.3275C1.52458 12.198 2.23279 12.9061 3.10318 12.9061H3.83377C4.09662 13.1324 4.43829 13.2693 4.81142 13.2693H7.72224V15.5831H5.25252C4.04333 15.5831 3.05965 16.5668 3.05965 17.7759C3.05965 18.1973 3.40242 18.54 3.82375 18.54C4.24521 18.54 4.58798 18.1973 4.58798 17.7759C4.58798 17.4094 4.88599 17.1113 5.25252 17.1113H7.72224V17.7759C7.72224 18.1973 8.06502 18.54 8.48634 18.54C8.90781 18.54 9.25058 18.1973 9.25058 17.7759V17.1113H11.7203C12.0867 17.1113 12.3848 17.4094 12.3848 17.7758C12.3848 18.1971 12.7276 18.54 13.1489 18.54C13.5704 18.54 13.9132 18.1971 13.9132 17.7758C13.9132 16.5666 12.9294 15.5829 11.7203 15.5829H9.25058V13.2692H9.76488C9.91058 13.2692 10.0285 13.1512 10.0285 13.0055C10.0285 12.86 9.91058 12.7419 9.76488 12.7419H4.81142C4.27487 12.7419 3.8383 12.3053 3.8383 11.7688C3.8383 11.5905 3.98346 11.4453 4.16171 11.4453H12.811C12.9894 11.4453 13.1344 11.5905 13.1344 11.7688C13.1344 12.3053 12.698 12.7419 12.1613 12.7419H10.8205C10.675 12.7419 10.5569 12.86 10.5569 13.0055C10.5569 13.1512 10.675 13.2692 10.8205 13.2692H12.1613C12.5344 13.2692 12.8762 13.1323 13.1389 12.9061H13.8695C14.74 12.9061 15.4481 12.1979 15.4481 11.3275V9.31042C16.1784 9.19466 16.7383 8.56075 16.7383 7.79857V7.79857ZM8.98691 16.1104H11.7203C12.6386 16.1104 13.3858 16.8575 13.3858 17.7759C13.3858 17.9065 13.2795 18.0127 13.1489 18.0127C13.0183 18.0127 12.9122 17.9065 12.9122 17.7759C12.9122 17.1187 12.3774 16.5839 11.7203 16.5839H8.98691C8.8412 16.5839 8.72324 16.702 8.72324 16.8476V17.7759C8.72324 17.9065 8.61694 18.0127 8.48634 18.0127C8.35574 18.0127 8.24959 17.9065 8.24959 17.7759V16.8476C8.24959 16.702 8.13148 16.5839 7.98592 16.5839H5.25252C4.59526 16.5839 4.06064 17.1187 4.06064 17.7758C4.06064 17.9064 3.95435 18.0127 3.82375 18.0127C3.69315 18.0127 3.58699 17.9064 3.58699 17.7758C3.58699 16.8575 4.33406 16.1103 5.25252 16.1103H7.98592C8.13148 16.1103 8.24959 15.9923 8.24959 15.8466V13.2692H8.72324V15.8466C8.72324 15.9923 8.8412 16.1104 8.98691 16.1104V16.1104ZM0.761719 7.79857C0.761719 7.52213 0.986527 7.29732 1.26297 7.29732H2.0213C2.29774 7.29732 2.52255 7.52213 2.52255 7.79857V8.80217H1.76532C1.21188 8.80217 0.761719 8.35187 0.761719 7.79857ZM2.05193 11.3275V9.32951H2.52269V11.3275C2.52269 11.6476 2.78307 11.908 3.10318 11.908H3.31741C3.33279 12.0743 3.37537 12.2327 3.4406 12.3789H3.10318C2.52351 12.3788 2.05193 11.9072 2.05193 11.3275ZM8.24959 10.1017H8.72324V10.9181H8.24959V10.1017ZM13.8695 12.3788H13.5321C13.5973 12.2327 13.64 12.0742 13.6554 11.908H13.8695C14.1896 11.908 14.45 11.6476 14.45 11.3275L14.4501 9.32938H14.9208V11.3275C14.9208 11.9072 14.4492 12.3788 13.8695 12.3788ZM15.2074 8.80217H14.4501V7.79857C14.4501 7.52213 14.6749 7.29732 14.9512 7.29732H15.7097C15.9862 7.29732 16.211 7.52213 16.211 7.79857C16.211 8.35187 15.7608 8.80217 15.2074 8.80217Z",
            fill: "currentColor"
        })
    }));
};
/* harmony default export */ const furniture_shop_Chair = (Chair);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Decoration.jsx



const Decoration = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50475)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.81836 2.98024C3.96407 2.98024 4.08203 2.86214 4.08203 2.71657V1.08496C4.08203 1.07535 4.09 1.06738 4.09961 1.06738H11.6692C11.6788 1.06738 11.6868 1.07535 11.6868 1.08496V6.42336C11.6868 6.56906 11.8047 6.68703 11.9504 6.68703C12.096 6.68703 12.2141 6.56906 12.2141 6.42336V1.08496C12.2141 0.784485 11.9697 0.540039 11.6692 0.540039H4.09961C3.79913 0.540039 3.55469 0.784485 3.55469 1.08496V2.71657C3.55469 2.86214 3.67265 2.98024 3.81836 2.98024Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.189 8.68929C15.8691 8.30119 15.346 8.08696 14.8563 8.14436C14.3694 8.20108 13.9169 8.50568 13.6754 8.93895C13.6117 9.05307 13.5638 9.16348 13.5174 9.27032C13.488 9.33775 13.4605 9.40106 13.4314 9.45984C13.2567 9.30727 13.0925 9.13176 13.0407 8.9281C13.016 8.83142 13.0141 8.71854 13.012 8.59906C13.0095 8.46118 13.0068 8.30504 12.9669 8.14835C12.8939 7.86298 12.7001 7.60233 12.4351 7.43327C12.1454 7.24898 11.7814 7.17812 11.4405 7.23195V6.79428C11.4407 6.78865 11.4407 6.78288 11.4405 6.77725V1.57715C11.4405 1.43144 11.3224 1.31348 11.1769 1.31348H4.5918C4.44609 1.31348 4.32812 1.43144 4.32812 1.57715V10.0796C4.32812 10.2253 4.44609 10.3433 4.5918 10.3433H10.0519C10.1974 10.3433 10.3155 10.2253 10.3155 10.0796C10.3155 9.93404 10.1974 9.81593 10.0519 9.81593H4.85547V9.3817C5.21541 9.28172 5.59814 9.31537 6.0034 9.35107C6.1649 9.36536 6.33189 9.38005 6.4982 9.38582C7.2829 9.41246 7.9109 9.17186 8.31383 8.6897C8.46544 8.50815 8.58519 8.30957 8.70096 8.11758C8.8652 7.84526 9.02025 7.58804 9.2478 7.40759C9.59978 7.1284 10.1459 7.00604 10.9132 7.03516V7.44234C10.5182 7.72729 10.3581 8.23308 10.5403 8.67995C10.6565 8.96188 10.8875 9.15085 10.9744 9.34531C11.1245 9.68245 10.7859 10.0366 10.8025 10.5894H4.09961C4.09 10.5894 4.08203 10.5814 4.08203 10.5718V3.77126C4.08203 3.62555 3.96393 3.50758 3.81836 3.50758C3.67265 3.50758 3.55469 3.62555 3.55469 3.77126V10.5718C3.55469 10.8723 3.79913 11.1167 4.09961 11.1167H10.9173C11.1309 11.6243 11.5523 11.8267 11.603 12.2929C11.6409 12.6437 11.5865 12.9811 11.7736 13.452C11.7792 13.5433 11.7918 13.6342 11.8119 13.7236C11.8163 13.7438 11.8212 13.7639 11.8264 13.7839H11.5025C11.3246 13.7839 11.1554 13.8607 11.0384 13.9947C10.9214 14.1286 10.868 14.3065 10.8919 14.4828L11.3551 17.901C11.4044 18.2654 11.7189 18.54 12.0864 18.54H14.2412C14.6089 18.54 14.9232 18.2654 14.9726 17.901L15.4357 14.4828C15.4596 14.3065 15.4062 14.1286 15.2892 13.9947C15.0782 13.7533 14.7852 13.7868 14.7695 13.7839C14.7918 13.584 14.769 13.4057 14.7426 13.2089C14.631 12.3766 14.8628 12.5051 15.3471 12.2701C15.4783 12.2066 15.5329 12.0489 15.4694 11.9179C15.4058 11.7869 15.2481 11.7321 15.1171 11.7957C15.0612 11.8229 14.9991 11.8463 14.9334 11.8712C14.6788 11.9672 14.3302 12.0989 14.2193 12.5583C14.1575 12.8138 14.1907 13.061 14.2199 13.2791C14.2375 13.41 14.2541 13.5336 14.2507 13.6502C14.2493 13.6947 14.2448 13.7394 14.237 13.7839H13.6084C13.5507 12.4326 14.0446 11.0604 14.9541 10.0715C15.0527 9.96439 15.0457 9.79753 14.9384 9.69893C14.8313 9.60046 14.6645 9.60733 14.5659 9.71458C13.5682 10.7995 13.0238 12.3021 13.0807 13.7839H12.3801C12.3105 13.6055 12.3074 13.4904 12.2975 13.3719C12.2765 12.5631 12.8795 12.4391 12.9297 11.8656C12.97 11.4083 12.5757 11.0761 12.6017 10.8316C12.6302 10.5583 13.1617 10.4253 13.4369 10.2455C13.8768 9.95779 13.9475 9.53358 14.136 9.19589C14.2964 8.90791 14.5958 8.70563 14.9174 8.66814C15.2286 8.63188 15.5763 8.77512 15.7822 9.02492C15.9348 9.20976 15.9614 9.5079 15.8441 9.71829C15.6679 10.0344 15.2267 10.2429 15.3057 10.9924C15.3105 11.0372 15.3167 11.0832 15.3228 11.1303L15.3282 11.1707C15.3471 11.3152 15.4797 11.4166 15.6239 11.398C15.7682 11.3792 15.8699 11.2468 15.8511 11.1023L15.8456 11.0607C15.7565 10.392 16.0335 10.4618 16.3047 9.97496C16.5291 9.57245 16.4815 9.04373 16.189 8.68929V8.68929ZM14.9132 14.4119L14.45 17.8302C14.436 17.9341 14.3461 18.0127 14.2412 18.0127H12.0864C11.9815 18.0127 11.8917 17.9343 11.8777 17.8302C11.4142 14.2639 11.3802 14.4051 11.4357 14.3416C11.4909 14.2783 11.3627 14.3306 14.8251 14.3111C14.8788 14.3111 14.9203 14.3585 14.9132 14.4119V14.4119ZM8.92014 6.99437C8.61787 7.23415 8.43056 7.54492 8.24942 7.8454C8.13901 8.02832 8.03477 8.20122 7.90926 8.35146C7.61002 8.70947 7.142 8.87962 6.51633 8.85875C6.36417 8.85353 6.21146 8.84007 6.04968 8.82579C5.66063 8.79146 5.25963 8.7563 4.85547 8.83939V1.84082H10.9132V6.50768C10.0243 6.47733 9.37044 6.63731 8.92014 6.99437ZM12.5966 10.0789C12.5405 9.95093 12.4827 9.82115 12.4235 9.69055C12.3634 9.55803 12.2071 9.49925 12.0746 9.5594C11.9419 9.61955 11.8831 9.7757 11.9433 9.90836C12.0276 10.0946 12.1092 10.2789 12.1864 10.4582C12.1261 10.5576 12.0889 10.6648 12.0773 10.7764C12.0489 11.0431 12.1669 11.2605 12.2708 11.4523C12.3443 11.5878 12.4137 11.7156 12.4044 11.8194C12.3954 11.9227 12.3063 12.0345 12.2119 12.1527C12.1847 12.1868 12.1568 12.2218 12.1295 12.2581C12.1288 12.2508 12.1281 12.2435 12.1273 12.2362C12.0633 11.6471 11.6781 11.3914 11.4603 11.0251C11.0479 10.3324 11.7811 9.86043 11.4559 9.13066C11.333 8.85518 11.1078 8.67294 11.0283 8.48C11.0188 8.45679 11.0112 8.43275 11.0055 8.4079C10.9374 8.11401 11.1465 7.86957 11.3781 7.78896C11.6265 7.70216 11.9304 7.73705 12.1516 7.87794C12.3049 7.97572 12.4158 8.12184 12.4559 8.27881C12.4807 8.37576 12.4826 8.48865 12.4846 8.60812C12.4871 8.746 12.4899 8.90215 12.5297 9.05829C12.6151 9.39447 12.8405 9.64276 13.0741 9.84807C13.0102 9.88281 12.9406 9.91399 12.8679 9.94653C12.7794 9.98608 12.6878 10.0271 12.5966 10.0789V10.0789Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.00854 11.8545H3.6765C3.04712 11.8545 2.53516 12.3666 2.53516 12.9958C2.53516 13.6252 3.04712 14.1372 3.6765 14.1372H3.9631L3.72662 15.0706C3.72566 15.0736 3.72498 15.0766 3.72429 15.0798L3.37328 16.4648C3.37108 16.472 3.36929 16.4795 3.36765 16.4869L2.93066 18.2117C2.89482 18.3529 2.98024 18.4964 3.12155 18.5321C3.14325 18.5376 3.16495 18.5402 3.18651 18.5402C3.3042 18.5402 3.41159 18.4607 3.4418 18.3412L3.84679 16.7433L5.84245 16.0576L7.83839 16.7434L8.24324 18.3412C8.27345 18.4607 8.38084 18.5402 8.49867 18.5402C8.5201 18.5402 8.54193 18.5376 8.56363 18.5321C8.7048 18.4963 8.79022 18.3529 8.75452 18.2117L8.31589 16.481C8.31506 16.4775 8.31424 16.474 8.31328 16.4707L7.72194 14.1372H8.00854C8.63792 14.1372 9.14989 13.6252 9.14989 12.9958C9.14989 12.3666 8.63792 11.8545 8.00854 11.8545V11.8545ZM4.00142 16.1326L4.16649 15.4816L5.03111 15.7788L4.00142 16.1326ZM6.65379 15.7788L7.51855 15.4816L7.68349 16.1326L6.65379 15.7788ZM7.38864 14.9687L5.84245 15.4999L4.2964 14.9687L4.50706 14.1372H7.17784L7.38864 14.9687ZM8.00854 13.6098H4.30684C4.30368 13.6097 4.30066 13.6098 4.29764 13.6098H3.6765C3.33784 13.6098 3.0625 13.3344 3.0625 12.9958C3.0625 12.6573 3.33784 12.3818 3.6765 12.3818H8.00854C8.34706 12.3818 8.62254 12.6573 8.62254 12.9958C8.62254 13.3344 8.34706 13.6098 8.00854 13.6098Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.49033 2.19531C5.91203 2.19531 5.44141 2.66594 5.44141 3.24423C5.44141 3.82253 5.91203 4.29301 6.49033 4.29301C7.06862 4.29301 7.53911 3.82253 7.53911 3.24423C7.53911 2.66594 7.06862 2.19531 6.49033 2.19531ZM6.49033 3.76567C6.20276 3.76567 5.96875 3.5318 5.96875 3.24423C5.96875 2.95667 6.20276 2.72266 6.49033 2.72266C6.77789 2.72266 7.01176 2.95667 7.01176 3.24423C7.01176 3.5318 6.77789 3.76567 6.49033 3.76567Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50475",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.540039)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Decoration = (Decoration);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Interior.jsx



const Interior = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50481)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.09044 5.60442C8.12742 5.60451 8.16405 5.59729 8.19824 5.5832C8.23243 5.5691 8.26351 5.5484 8.28969 5.52228C8.31587 5.49616 8.33664 5.46513 8.35081 5.43097C8.36498 5.39681 8.37228 5.3602 8.37228 5.32321C8.37228 5.28623 8.36498 5.24961 8.35081 5.21545C8.33664 5.18129 8.31587 5.15027 8.28969 5.12414C8.26351 5.09802 8.23243 5.07732 8.19824 5.06323C8.16405 5.04913 8.12742 5.04192 8.09044 5.042H6.73643L5.41698 2.65632C5.39846 2.62281 5.37328 2.59344 5.34301 2.57001C5.31273 2.54657 5.27798 2.52957 5.2409 2.52003C5.20382 2.5105 5.16518 2.50864 5.12736 2.51457C5.08953 2.52049 5.05331 2.53408 5.02092 2.5545L4.14353 3.10738C4.08336 3.14528 4.0398 3.20457 4.0216 3.27331C4.00341 3.34206 4.01194 3.41514 4.04547 3.47784L4.88166 5.042H4.01231V2.5107C4.0123 2.43612 3.98266 2.36459 3.92992 2.31185C3.87718 2.25912 3.80564 2.22949 3.73106 2.22949H2.60606C2.53148 2.22949 2.45995 2.25912 2.4072 2.31185C2.35446 2.36459 2.32482 2.43612 2.32481 2.5107V5.042H0.777935C0.740953 5.04192 0.704317 5.04913 0.670127 5.06323C0.635936 5.07732 0.604861 5.09802 0.578681 5.12414C0.552502 5.15027 0.531732 5.18129 0.51756 5.21545C0.503388 5.24961 0.496094 5.28623 0.496094 5.32321C0.496094 5.3602 0.503388 5.39681 0.51756 5.43097C0.531732 5.46513 0.552502 5.49616 0.578681 5.52228C0.604861 5.5484 0.635936 5.5691 0.670127 5.5832C0.704317 5.59729 0.740953 5.60451 0.777935 5.60442H8.09044ZM3.44981 5.042H2.88731V2.79191H3.44981V5.042ZM5.51946 5.042L4.66497 3.44358L5.06885 3.18908L6.0937 5.042H5.51946ZM14.8404 7.01074C15.3411 7.01074 15.8305 6.86229 16.2467 6.58415C16.663 6.30601 16.9874 5.91069 17.179 5.44816C17.3706 4.98564 17.4207 4.47669 17.3231 3.98567C17.2254 3.49466 16.9843 3.04363 16.6303 2.68963C16.2763 2.33563 15.8253 2.09455 15.3343 1.99688C14.8432 1.89921 14.3343 1.94934 13.8718 2.14092C13.4092 2.33251 13.0139 2.65694 12.7358 3.07321C12.4576 3.48947 12.3092 3.97886 12.3092 4.47949C12.31 5.15059 12.5769 5.79397 13.0514 6.26851C13.526 6.74304 14.1693 7.00998 14.8404 7.01074ZM14.8404 2.51074C15.2298 2.51074 15.6105 2.62621 15.9342 2.84254C16.258 3.05887 16.5103 3.36634 16.6593 3.72609C16.8083 4.08583 16.8473 4.48168 16.7714 4.86358C16.6954 5.24548 16.5079 5.59628 16.2326 5.87161C15.9572 6.14694 15.6064 6.33445 15.2245 6.41041C14.8426 6.48638 14.4468 6.44739 14.087 6.29838C13.7273 6.14937 13.4198 5.89703 13.2035 5.57327C12.9872 5.24951 12.8717 4.86888 12.8717 4.47949C12.8723 3.95753 13.0799 3.45711 13.449 3.08802C13.8181 2.71894 14.3185 2.51133 14.8404 2.51074V2.51074ZM4.43419 13.7607H0.777935C0.73504 13.7607 0.692713 13.7705 0.654192 13.7894C0.615672 13.8083 0.581978 13.8357 0.55569 13.8696C0.529403 13.9035 0.511217 13.943 0.502525 13.985C0.493834 14.027 0.494866 14.0704 0.505544 14.112L1.13225 16.5508C1.17151 16.7147 1.26395 16.861 1.39513 16.9668C1.52631 17.0726 1.68884 17.132 1.85734 17.1357H3.35478C3.52328 17.132 3.68581 17.0726 3.81699 16.9668C3.94817 16.861 4.04061 16.7147 4.07988 16.5508L4.70658 14.112C4.71725 14.0704 4.71829 14.027 4.70959 13.985C4.7009 13.943 4.68272 13.9035 4.65643 13.8696C4.63014 13.8357 4.59645 13.8083 4.55793 13.7894C4.51941 13.7705 4.47708 13.7607 4.43419 13.7607V13.7607ZM3.53022 16.4312C3.51871 16.4698 3.4958 16.504 3.46449 16.5294C3.43318 16.5547 3.39494 16.57 3.35478 16.5732H1.85734C1.81718 16.57 1.77894 16.5547 1.74763 16.5294C1.71632 16.504 1.69341 16.4698 1.6819 16.4312C1.68094 16.4264 1.14062 14.3232 1.14062 14.3232H4.0715C4.0715 14.3232 3.53118 16.4264 3.53022 16.4312ZM0.522366 11.4568C0.516319 11.4877 0.378994 12.222 0.81316 12.8099C1.09427 13.1905 1.53743 13.4152 2.13028 13.4779C2.19958 13.4847 2.26894 13.4657 2.32518 13.4247C2.38142 13.3836 2.42061 13.3234 2.43529 13.2553C2.44188 13.2235 2.59157 12.4696 2.15102 11.8786C1.8686 11.4998 1.42153 11.2817 0.822362 11.2305C0.753249 11.2246 0.68437 11.2444 0.628985 11.2861C0.5736 11.3279 0.535623 11.3887 0.522366 11.4568V11.4568ZM1.6977 12.2117C1.83164 12.4044 1.90306 12.6337 1.90225 12.8684C1.65198 12.8165 1.4277 12.6789 1.2682 12.4792C1.13643 12.2899 1.0642 12.0655 1.06076 11.8349C1.31133 11.8802 1.53733 12.0139 1.6977 12.2117V12.2117ZM2.77683 13.2553C2.79223 13.323 2.83159 13.3828 2.88765 13.4237C2.94371 13.4646 3.01269 13.4839 3.08184 13.4779C3.67469 13.4152 4.11785 13.1905 4.39896 12.8099C4.83313 12.222 4.6958 11.4877 4.68976 11.4568C4.67637 11.3887 4.63836 11.328 4.58301 11.2863C4.52766 11.2446 4.45885 11.2247 4.38976 11.2305C3.79059 11.2817 3.34352 11.4998 3.0611 11.8786C2.62056 12.4696 2.77023 13.2235 2.77683 13.2553ZM3.51209 12.2149C3.67243 12.0153 3.89944 11.8804 4.15136 11.8349C4.14784 12.0641 4.07655 12.2871 3.94647 12.4758C3.78701 12.6773 3.56169 12.8163 3.31001 12.8683C3.3093 12.635 3.3798 12.4071 3.51209 12.2149H3.51209ZM2.40645 8.6407C2.38015 8.66721 1.76231 9.29885 1.76231 10.1045C1.76231 10.9101 2.38015 11.5418 2.40645 11.5683C2.4326 11.5946 2.4637 11.6155 2.49796 11.6298C2.53221 11.644 2.56895 11.6514 2.60606 11.6514C2.64317 11.6514 2.67991 11.644 2.71417 11.6298C2.74842 11.6155 2.77952 11.5946 2.80567 11.5683C2.83197 11.5418 3.44981 10.9101 3.44981 10.1045C3.44981 9.29885 2.83197 8.66721 2.80567 8.6407C2.75181 8.58952 2.68036 8.56098 2.60606 8.56098C2.53176 8.56098 2.46031 8.58952 2.40645 8.6407V8.6407ZM2.60606 10.9169C2.43628 10.6787 2.33864 10.3967 2.32481 10.1045C2.33865 9.8123 2.43629 9.53027 2.60606 9.29205C2.77584 9.53026 2.87348 9.8123 2.88731 10.1045C2.87347 10.3967 2.77583 10.6787 2.60606 10.9169V10.9169Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.6848 4.72957L15.5285 5.29207C15.591 5.33204 15.6666 5.34624 15.7393 5.3317C15.812 5.31715 15.8763 5.27499 15.9186 5.21407C15.9599 5.152 15.9749 5.07605 15.9603 5.00291C15.9457 4.92977 15.9026 4.86544 15.8406 4.82405L15.1211 4.3444V3.35449C15.1211 3.2799 15.0915 3.20836 15.0387 3.15562C14.986 3.10287 14.9144 3.07324 14.8398 3.07324C14.7653 3.07324 14.6937 3.10287 14.641 3.15562C14.5882 3.20836 14.5586 3.2799 14.5586 3.35449V4.47949C14.5586 4.48408 14.5597 4.48834 14.5599 4.49286C14.5594 4.5396 14.5705 4.58572 14.5923 4.62706C14.6141 4.66839 14.6459 4.70363 14.6848 4.72957ZM13.7148 11.2295H12.5898C12.5153 11.2295 12.4437 11.2591 12.391 11.3119C12.3382 11.3646 12.3086 11.4362 12.3086 11.5107C12.3086 11.5853 12.3382 11.6569 12.391 11.7096C12.4437 11.7624 12.5153 11.792 12.5898 11.792H13.7148C13.7894 11.792 13.861 11.7624 13.9137 11.7096C13.9665 11.6569 13.9961 11.5853 13.9961 11.5107C13.9961 11.4362 13.9665 11.3646 13.9137 11.3119C13.861 11.2591 13.7894 11.2295 13.7148 11.2295Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.2148 14.042C18.2894 14.042 18.361 14.0124 18.4137 13.9596C18.4665 13.9069 18.4961 13.8353 18.4961 13.7607C18.4961 13.6862 18.4665 13.6146 18.4137 13.5619C18.361 13.5091 18.2894 13.4795 18.2148 13.4795H16.8086V9.40137H18.2148C18.2894 9.40137 18.361 9.37174 18.4137 9.31899C18.4665 9.26625 18.4961 9.19471 18.4961 9.12012C18.4961 9.04553 18.4665 8.97399 18.4137 8.92124C18.361 8.8685 18.2894 8.83887 18.2148 8.83887H7.3804C7.1211 8.83916 6.8725 8.9423 6.68914 9.12566C6.50578 9.30902 6.40264 9.55762 6.40234 9.81693V10.8318C6.17023 10.8734 5.95959 10.9939 5.8059 11.1727C5.65221 11.3516 5.56487 11.578 5.55859 11.8137V14.864C5.5684 15.1399 5.68706 15.4006 5.8886 15.5891C6.09015 15.7776 6.35816 15.8787 6.63402 15.8701H7.99443C7.98812 15.9167 7.98479 15.9637 7.98445 16.0107C7.98478 16.3089 8.10346 16.5947 8.31441 16.8054C8.52536 17.0162 8.81132 17.1345 9.10948 17.1345C9.40764 17.1345 9.69361 17.0162 9.90456 16.8054C10.1155 16.5947 10.2342 16.3089 10.2345 16.0107C10.2342 15.9637 10.2308 15.9167 10.2245 15.8701H18.2148C18.2894 15.8701 18.361 15.8405 18.4137 15.7877C18.4665 15.735 18.4961 15.6635 18.4961 15.5889C18.4961 15.5143 18.4665 15.4427 18.4137 15.39C18.361 15.3372 18.2894 15.3076 18.2148 15.3076H7.80859V14.042H18.2148ZM8.56695 15.8701H9.65201C9.66479 15.9159 9.67151 15.9632 9.67201 16.0107C9.67201 16.1599 9.61274 16.303 9.50725 16.4085C9.40175 16.514 9.25867 16.5733 9.10948 16.5733C8.96028 16.5733 8.8172 16.514 8.7117 16.4085C8.60621 16.303 8.54694 16.1599 8.54694 16.0107C8.54744 15.9632 8.55417 15.9159 8.56695 15.8701V15.8701ZM10.0586 9.40137H16.2461V13.4795H10.0586V9.40137ZM7.24609 15.3076H6.63402C6.50737 15.316 6.38252 15.2741 6.28652 15.1911C6.19051 15.1081 6.13108 14.9906 6.12109 14.864V13.0513H7.24609V15.3076ZM7.24609 12.4888H6.12109V11.8137C6.13108 11.6872 6.19051 11.5697 6.28652 11.4866C6.38252 11.4036 6.50737 11.3617 6.63402 11.3701H6.73338C6.86 11.3618 6.98481 11.4036 7.08077 11.4867C7.17674 11.5697 7.23613 11.6872 7.24609 11.8137V12.4888ZM6.96484 10.8317V9.81693C6.96497 9.70675 7.00879 9.60113 7.0867 9.52322C7.1646 9.44532 7.27023 9.40149 7.3804 9.40137H9.49609V13.4795H7.80859V11.8137C7.80234 11.5779 7.715 11.3516 7.56131 11.1727C7.40762 10.9938 7.19696 10.8734 6.96484 10.8317Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50481",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.541992)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Interior = (Interior);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Furniture.jsx



const Furniture = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#clip0_6800_50485)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M18.2058 9.41938H17.4722V0.41194C17.4722 0.313306 17.4416 0.218711 17.3872 0.148966C17.3327 0.0792214 17.2589 0.0400391 17.1819 0.0400391L1.81029 0.0400391C1.73329 0.0400391 1.65944 0.0792214 1.605 0.148966C1.55055 0.218711 1.51996 0.313306 1.51996 0.41194V9.41938H0.786416C0.709418 9.41938 0.635573 9.45856 0.581127 9.52831C0.526681 9.59805 0.496094 9.69265 0.496094 9.79128L0.496094 15.0425C0.496605 15.1407 0.527418 15.2347 0.581809 15.3039C0.636199 15.3731 0.709752 15.4119 0.786416 15.4119H3.01222V17.6681C3.01222 17.7668 3.04281 17.8614 3.09726 17.9311C3.1517 18.0009 3.22555 18.04 3.30255 18.04H5.34448C5.42148 18.04 5.49532 18.0009 5.54977 17.9311C5.60422 17.8614 5.6348 17.7668 5.6348 17.6681V15.4119H13.2529V17.6681C13.2529 17.7668 13.2835 17.8614 13.3379 17.9311C13.3923 18.0009 13.4662 18.04 13.5432 18.04H15.5929C15.6699 18.04 15.7437 18.0009 15.7982 17.9311C15.8526 17.8614 15.8832 17.7668 15.8832 17.6681V15.4119H18.2058C18.2828 15.4119 18.3566 15.3728 18.4111 15.303C18.4655 15.2333 18.4961 15.1387 18.4961 15.04V9.79128C18.4961 9.69265 18.4655 9.59805 18.4111 9.52831C18.3566 9.45856 18.2828 9.41938 18.2058 9.41938ZM3.8948 5.66318C3.89531 5.41417 3.97276 5.17554 4.11022 4.99946C4.24768 4.82338 4.43396 4.72416 4.62835 4.72351H7.70384C7.8847 4.72296 8.05934 4.80802 8.19423 4.96235C8.32912 5.11668 8.41475 5.32941 8.43467 5.55968C8.45459 5.78995 8.40739 6.02153 8.30216 6.20995C8.19692 6.39837 8.04105 6.53035 7.86448 6.58053H4.46771C4.30522 6.53336 4.16005 6.41691 4.05597 6.25025C3.95189 6.08359 3.89507 5.8766 3.8948 5.66318V5.66318ZM3.85996 7.32434H4.41545C4.48577 7.34002 4.55698 7.34831 4.62835 7.34913H7.70384C7.77521 7.34831 7.84642 7.34002 7.91674 7.32434H11.0774C11.1477 7.34002 11.2189 7.34831 11.2903 7.34913H14.3638C14.4352 7.34831 14.5064 7.34002 14.5767 7.32434H15.1322C15.5495 7.3228 15.9537 7.51114 16.2728 7.85578C16.5918 8.20042 16.8049 8.67898 16.8742 9.20616H2.13158C2.21291 8.68924 2.42757 8.22237 2.74105 7.88061C3.05453 7.53885 3.44862 7.34206 3.85996 7.32186V7.32434ZM10.5606 5.66318C10.5611 5.41417 10.6386 5.17554 10.776 4.99946C10.9135 4.82338 11.0998 4.72416 11.2942 4.72351H14.3638C14.5447 4.72296 14.7193 4.80802 14.8542 4.96235C14.9891 5.11668 15.0747 5.32941 15.0947 5.55968C15.1146 5.78995 15.0674 6.02153 14.9622 6.20995C14.8569 6.39837 14.701 6.53035 14.5245 6.58053H11.1296C10.9679 6.53239 10.8236 6.41552 10.7203 6.24895C10.6169 6.08239 10.5607 5.87593 10.5606 5.66318V5.66318ZM16.8916 0.783841V7.60698C16.5201 7.06431 16.008 6.71207 15.4496 6.61525C15.5846 6.36225 15.663 6.06688 15.6766 5.76099C15.6901 5.45509 15.6382 5.15025 15.5265 4.87934C15.4148 4.60842 15.2475 4.3817 15.0426 4.2236C14.8377 4.06551 14.603 3.98204 14.3638 3.98219H11.2884C11.0518 3.98234 10.8198 4.06424 10.6165 4.21926C10.4133 4.37428 10.2466 4.59668 10.1338 4.86299C10.021 5.1293 9.96646 5.42965 9.97584 5.73238C9.98521 6.03511 10.0582 6.32898 10.1871 6.58301H8.80513C8.934 6.32898 9.00698 6.03511 9.01635 5.73238C9.02572 5.42965 8.97115 5.1293 8.85838 4.86299C8.74562 4.59668 8.57884 4.37428 8.37564 4.21926C8.17244 4.06424 7.94034 3.98234 7.70384 3.98219H4.62835C4.38902 3.98218 4.15423 4.0659 3.94932 4.2243C3.74441 4.3827 3.57716 4.60977 3.46561 4.88101C3.35406 5.15225 3.30245 5.45737 3.31635 5.76343C3.33025 6.06949 3.40913 6.36488 3.54448 6.61773C2.98301 6.73288 2.47187 7.10025 2.10255 7.65409V0.783841H16.8916ZM5.05416 17.2962H3.59287V15.4119H5.0619L5.05416 17.2962ZM15.3006 17.2962H13.8335V15.4119H15.3025L15.3006 17.2962ZM17.9154 14.6681H1.07674V10.1632H17.9154V14.6681Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50485",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Furniture = (Furniture);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Stool.jsx



const Stool = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 17 19",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14.4727 0.0400391H2.51953C1.45335 0.0400391 0.585938 0.907449 0.585938 1.97363V4.46973C0.585938 5.53591 1.45335 6.40332 2.51953 6.40332H3.14612L1.80667 16.2558C1.67838 17.1997 2.41311 18.04 3.36472 18.04C4.14755 18.04 4.81738 17.4551 4.92281 16.6794L5.60295 11.6768H11.3873L12.0692 16.68C12.1748 17.4554 12.8446 18.04 13.6271 18.04C14.5798 18.04 15.3136 17.1985 15.1851 16.2554L13.8425 6.40332H14.4727C15.5388 6.40332 16.4062 5.53591 16.4062 4.46973V1.97363C16.4062 0.907449 15.5388 0.0400391 14.4727 0.0400391V0.0400391ZM3.87776 16.5374C3.84306 16.7928 3.62249 16.9854 3.36472 16.9854C3.05078 16.9854 2.80936 16.7096 2.85172 16.3979L4.21051 6.40332H5.2555L3.87776 16.5374ZM10.6687 6.40332L10.9562 8.5127H6.03312L6.31989 6.40332H10.6687ZM5.74635 10.6221L5.88972 9.56738H11.0999L11.2436 10.6221H5.74635ZM14.1401 16.3978C14.1824 16.7089 13.9416 16.9854 13.6271 16.9854C13.3695 16.9854 13.149 16.7928 13.1141 16.5376L11.7331 6.40332H12.7781L14.1401 16.3978ZM15.3516 4.46973C15.3516 4.95436 14.9573 5.34863 14.4727 5.34863H2.51953C2.0349 5.34863 1.64062 4.95436 1.64062 4.46973V1.97363C1.64062 1.489 2.0349 1.09473 2.51953 1.09473H14.4727C14.9573 1.09473 15.3516 1.489 15.3516 1.97363V4.46973Z",
            fill: "currentColor"
        })
    }));
};
/* harmony default export */ const furniture_shop_Stool = (Stool);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Wardrobe.jsx



const Wardrobe = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50497)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.89764 1.24023C8.73206 1.24023 8.59766 1.37464 8.59766 1.54022V2.74025C8.59766 2.90583 8.73206 3.04023 8.89764 3.04023C9.06323 3.04023 9.19763 2.90583 9.19763 2.74025V1.54026C9.19767 1.37464 9.06327 1.24023 8.89764 1.24023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.2961 1.24023C17.1305 1.24023 16.9961 1.37464 16.9961 1.54022V2.74025C16.9961 2.90583 17.1305 3.04023 17.2961 3.04023C17.4617 3.04023 17.5961 2.90583 17.5961 2.74025V1.54026C17.5961 1.37464 17.4617 1.24023 17.2961 1.24023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.79609 0.0400391H0.796082C0.630496 0.0400391 0.496094 0.174441 0.496094 0.340027V17.74C0.496094 17.9056 0.630496 18.04 0.796082 18.04H6.79609C6.96168 18.04 7.09608 17.9056 7.09608 17.7401V0.340027C7.09608 0.174441 6.96168 0.0400391 6.79609 0.0400391ZM6.49611 17.44H1.09611V0.640051H6.49611V17.44Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.1961 12.6396H6.79608C6.6305 12.6396 6.49609 12.7741 6.49609 12.9396V17.7396C6.49609 17.9052 6.6305 18.0396 6.79608 18.0396H18.1961C18.3617 18.0396 18.4961 17.9052 18.4961 17.7396V12.9396C18.4961 12.7741 18.3617 12.6396 18.1961 12.6396ZM17.8961 17.4396H7.09607V13.2397H17.8961V17.4396Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.1961 0.0400391H6.79608C6.6305 0.0400391 6.49609 0.174441 6.49609 0.340027V1.54002C6.49609 1.7056 6.6305 1.84 6.79608 1.84H18.1961C18.3617 1.84 18.4961 1.7056 18.4961 1.54002V0.340027C18.4961 0.174441 18.3617 0.0400391 18.1961 0.0400391ZM17.8961 1.24003H7.09607V0.640051H17.8961V1.24003Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.29764 8.74023H4.39764C4.23206 8.74023 4.09766 8.87464 4.09766 9.04022C4.09766 9.20581 4.23206 9.34021 4.39764 9.34021H5.29764C5.46323 9.34021 5.59763 9.20581 5.59763 9.04022C5.59763 8.87464 5.46327 8.74023 5.29764 8.74023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.39764 8.74023C4.23206 8.74023 4.09766 8.87464 4.09766 9.04022V9.94022C4.09766 10.1058 4.23206 10.2402 4.39764 10.2402C4.56323 10.2402 4.69763 10.1058 4.69763 9.94022V9.04022C4.69767 8.87464 4.56327 8.74023 4.39764 8.74023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.3969 14.7402H11.5969C11.4313 14.7402 11.2969 14.8746 11.2969 15.0402C11.2969 15.2058 11.4313 15.3402 11.5969 15.3402H13.3969C13.5624 15.3402 13.6969 15.2058 13.6969 15.0402C13.6969 14.8746 13.5625 14.7402 13.3969 14.7402Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.4953 14.7402C12.3297 14.7402 12.1953 14.8746 12.1953 15.0402V15.6402C12.1953 15.8058 12.3297 15.9402 12.4953 15.9402C12.6609 15.9402 12.7953 15.8058 12.7953 15.6402V15.0402C12.7953 14.8746 12.6609 14.7402 12.4953 14.7402Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10.6945 1.24023C10.5289 1.24023 10.3945 1.37464 10.3945 1.54022V3.34023C10.3945 3.50581 10.5289 3.64021 10.6945 3.64021C10.8601 3.64021 10.9945 3.50581 10.9945 3.34023V1.54022C10.9945 1.37464 10.8601 1.24023 10.6945 1.24023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10.6961 4.24023C9.08119 4.24023 7.99609 4.84292 7.99609 5.74024V6.34022C7.99609 6.50581 8.1305 6.64021 8.29608 6.64021H8.89609V9.3402C8.89609 9.50579 9.0305 9.64019 9.19608 9.64019H12.1961C12.3617 9.64019 12.4961 9.50579 12.4961 9.3402V6.64021H13.0961C13.2617 6.64021 13.3961 6.50581 13.3961 6.34022V5.74021C13.3961 4.84292 12.311 4.24023 10.6961 4.24023ZM12.7961 6.04023H12.1961C12.0305 6.04023 11.8961 6.17463 11.8961 6.34022V9.04022H9.49611V6.34022C9.49611 6.17463 9.3617 6.04023 9.19612 6.04023H8.59611V5.74024C8.59611 5.30406 9.332 4.84025 10.6961 4.84025C12.0602 4.84025 12.7961 5.30406 12.7961 5.74024V6.04023H12.7961Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.7953 4.24023C12.3954 4.24023 12.0204 4.27803 11.6811 4.35242C11.5434 4.38272 11.4453 4.5045 11.4453 4.64551C11.4453 4.78653 11.5434 4.90831 11.6811 4.93861C12.3579 5.0868 12.7953 5.40151 12.7953 5.74021V6.0402H12.1953C12.0297 6.0402 11.8953 6.1746 11.8953 6.34018V9.34017C11.8953 9.50575 12.0297 9.64016 12.1953 9.64016H14.2953C14.4609 9.64016 14.5953 9.50575 14.5953 9.34017V6.64017H15.1953C15.3609 6.64017 15.4953 6.50577 15.4953 6.34018V5.74017C15.4953 4.84292 14.4102 4.24023 12.7953 4.24023ZM14.8953 6.04023H14.2953C14.1297 6.04023 13.9953 6.17463 13.9953 6.34022V9.04022H12.4953V6.64021H13.0953C13.2609 6.64021 13.3953 6.50581 13.3953 6.34022V5.74021C13.3953 5.39522 13.2288 5.08711 12.9249 4.84172C14.2059 4.86992 14.8953 5.31781 14.8953 5.74021V6.04023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.8969 4.24023C14.497 4.24023 14.122 4.27803 13.7827 4.35242C13.645 4.38272 13.5469 4.5045 13.5469 4.64551C13.5469 4.78653 13.645 4.90831 13.7827 4.93861C14.4595 5.0868 14.8969 5.40151 14.8969 5.74021V6.0402H14.2969C14.1313 6.0402 13.9969 6.1746 13.9969 6.34018V9.34017C13.9969 9.50575 14.1313 9.64016 14.2969 9.64016H16.3969C16.5624 9.64016 16.6968 9.50575 16.6968 9.34017V6.64017H17.2969C17.4624 6.64017 17.5968 6.50577 17.5968 6.34018V5.74017C17.5969 4.84292 16.5118 4.24023 14.8969 4.24023ZM16.9969 6.04023H16.3969C16.2313 6.04023 16.0969 6.17463 16.0969 6.34022V9.04022H14.5969V6.64021H15.1969C15.3624 6.64021 15.4969 6.50581 15.4969 6.34022V5.74021C15.4969 5.39522 15.3304 5.08711 15.0265 4.84172C16.3074 4.86992 16.9969 5.31781 16.9969 5.74021V6.04023V6.04023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10.6945 3.04004C10.5289 3.04004 10.3945 3.17444 10.3945 3.34003C10.3945 3.50561 10.5289 3.64002 10.6945 3.64002C10.8598 3.64002 10.9945 3.7747 10.9945 3.94C10.9945 4.10531 10.8598 4.23999 10.6945 4.23999C10.5289 4.23999 10.3945 4.37439 10.3945 4.53998C10.3945 4.70557 10.5289 4.83997 10.6945 4.83997C11.1907 4.83997 11.5945 4.43616 11.5945 3.93997C11.5945 3.44377 11.1907 3.04004 10.6945 3.04004Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.0969 1.24023C12.9313 1.24023 12.7969 1.37464 12.7969 1.54022V3.34023C12.7969 3.50581 12.9313 3.64021 13.0969 3.64021C13.2624 3.64021 13.3969 3.50581 13.3969 3.34023V1.54022C13.3969 1.37464 13.2624 1.24023 13.0969 1.24023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.0969 3.04004C12.9313 3.04004 12.7969 3.17444 12.7969 3.34003C12.7969 3.50561 12.9313 3.64002 13.0969 3.64002C13.2622 3.64002 13.3969 3.7747 13.3969 3.94C13.3969 4.10531 13.2622 4.23999 13.0969 4.23999C12.9313 4.23999 12.7969 4.37439 12.7969 4.53998C12.7969 4.70557 12.9313 4.83997 13.0969 4.83997C13.5931 4.83997 13.9969 4.43616 13.9969 3.93997C13.9969 3.44377 13.5931 3.04004 13.0969 3.04004Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.4953 1.24023C15.3297 1.24023 15.1953 1.37464 15.1953 1.54022V3.34023C15.1953 3.50581 15.3297 3.64021 15.4953 3.64021C15.6609 3.64021 15.7953 3.50581 15.7953 3.34023V1.54022C15.7953 1.37464 15.6609 1.24023 15.4953 1.24023Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.4953 3.04004C15.3297 3.04004 15.1953 3.17444 15.1953 3.34003C15.1953 3.50561 15.3297 3.64002 15.4953 3.64002C15.6606 3.64002 15.7953 3.7747 15.7953 3.94C15.7953 4.10531 15.6606 4.23999 15.4953 4.23999C15.3297 4.23999 15.1953 4.37439 15.1953 4.53998C15.1953 4.70557 15.3297 4.83997 15.4953 4.83997C15.9915 4.83997 16.3953 4.43616 16.3953 3.93997C16.3953 3.44377 15.9915 3.04004 15.4953 3.04004Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.5961 11.4404H6.79608C6.6305 11.4404 6.49609 11.5748 6.49609 11.7404V12.9404C6.49609 13.106 6.6305 13.2404 6.79608 13.2404H17.5961C17.7617 13.2404 17.8961 13.106 17.8961 12.9404V11.7404C17.8961 11.5748 17.7617 11.4404 17.5961 11.4404ZM17.2961 12.6404H7.09607V12.0404H17.2961V12.6404H17.2961Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.9953 13.8398H7.9953C7.82971 13.8398 7.69531 13.9742 7.69531 14.1398V16.5398C7.69531 16.7054 7.82971 16.8398 7.9953 16.8398H16.9953C17.1609 16.8398 17.2953 16.7054 17.2953 16.5398V14.1398C17.2953 13.9742 17.1609 13.8398 16.9953 13.8398ZM16.6953 16.2399H8.29532V14.4399H16.6953V16.2399Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50497",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Wardrobe = (Wardrobe);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Sofa.jsx



const Sofa = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50489)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.5992 6.26348C16.5711 4.75879 15.3477 3.56348 13.857 3.56348H4.94141C3.45078 3.56348 2.22734 4.75879 2.19922 6.24941C1.24297 6.24941 0.582031 7.00879 0.582031 7.83848C0.582031 8.48535 0.975781 9.07598 1.58047 9.31504V11.5088C1.58047 12.0994 1.86172 12.6479 2.29766 12.9854L1.84766 14.8838C1.73516 15.3197 2.00234 15.7557 2.43828 15.8682C2.87422 15.9807 3.31016 15.6994 3.42266 15.2775L3.66172 14.3354H15.207L15.4461 15.2775C15.5445 15.7135 15.9945 15.9807 16.4305 15.8822C16.8664 15.7838 17.1336 15.3338 17.0352 14.8979V14.8838L16.5711 12.9854C17.0352 12.6338 17.3023 12.0854 17.2883 11.5088V9.31504C18.1039 8.9916 18.4977 8.07754 18.1883 7.26191C17.9352 6.64316 17.3164 6.22129 16.5992 6.26348V6.26348ZM2.67734 6.30566C2.67734 5.0541 3.68984 4.0416 4.94141 4.0416H13.857C15.1086 4.0416 16.1211 5.0541 16.1211 6.30566V6.36191C15.5586 6.57285 15.1227 7.06504 15.1227 7.68379C15.1227 7.74004 15.1227 7.62754 15.1086 10.0182C14.757 9.62441 14.2648 9.41348 13.7305 9.41348H11.0445C10.3695 9.41348 9.76485 9.7791 9.42735 10.3557C9.08985 9.7791 8.48516 9.41348 7.81016 9.41348H5.12422C4.60391 9.41348 4.09766 9.63848 3.74609 10.0182C3.74609 10.0182 3.74609 8.3166 3.74609 7.7541C3.74609 7.48691 3.53516 6.92441 3.25391 6.69941C3.07109 6.55879 2.87422 6.41816 2.67734 6.34785V6.30566ZM3.76016 11.1713C3.81641 10.4541 4.40703 9.8916 5.13828 9.8916H7.81016C8.55547 9.8916 9.16016 10.4822 9.18828 11.2135H3.76016V11.1713ZM15.1086 11.2275H9.68047C9.7086 10.4822 10.3133 9.90566 11.0586 9.90566H13.7445C14.4758 9.8916 15.0805 10.4822 15.1086 11.2275V11.2275ZM2.95859 15.165C2.91641 15.3338 2.73359 15.4463 2.56484 15.4041C2.38203 15.3619 2.28359 15.1791 2.32578 15.0104L2.74766 13.2385C2.90234 13.3088 3.05703 13.351 3.22578 13.365V14.04L2.95859 15.165ZM3.71797 13.3932H15.1086V13.8432H3.71797V13.3932ZM16.3039 15.4041C16.1492 15.4322 15.9523 15.3338 15.9102 15.165L15.6008 13.8854V13.3932C15.7836 13.3791 15.9523 13.3369 16.1211 13.2525C16.1211 13.2525 16.4445 14.6025 16.557 15.0104C16.5852 15.151 16.5148 15.3479 16.3039 15.4041ZM16.9648 8.90723C16.8523 8.93535 16.782 9.03379 16.782 9.14629V11.5088C16.782 12.2963 16.1352 12.901 15.3898 12.901H3.46484C2.71953 12.901 2.07266 12.2963 2.07266 11.5088V9.13223C2.07266 9.01973 2.00234 8.92129 1.88984 8.89316C1.29922 8.73848 0.947656 8.13379 1.10234 7.55723C1.22891 7.06504 1.66484 6.72754 2.17109 6.72754C2.74766 6.72754 3.26797 7.1916 3.26797 7.7541V11.4525C3.26797 11.5932 3.38047 11.6916 3.50703 11.6916H15.3477C15.4883 11.6916 15.5867 11.5791 15.5867 11.4525V7.79629C15.5867 7.7541 15.5867 7.69785 15.6148 7.59941C15.7133 7.20566 16.0086 6.88223 16.4164 6.78379C16.5008 6.75566 16.5992 6.75566 16.6977 6.75566C17.3023 6.75566 17.7945 7.24785 17.7945 7.85254C17.7945 8.34473 17.457 8.78066 16.9648 8.90723V8.90723Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.39062 7.81055C5.58479 7.81055 5.74219 7.65315 5.74219 7.45898C5.74219 7.26482 5.58479 7.10742 5.39062 7.10742C5.19646 7.10742 5.03906 7.26482 5.03906 7.45898C5.03906 7.65315 5.19646 7.81055 5.39062 7.81055Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.08984 7.81055C8.28401 7.81055 8.44141 7.65315 8.44141 7.45898C8.44141 7.26482 8.28401 7.10742 8.08984 7.10742C7.89568 7.10742 7.73828 7.26482 7.73828 7.45898C7.73828 7.65315 7.89568 7.81055 8.08984 7.81055Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10.793 7.81055C10.9871 7.81055 11.1445 7.65315 11.1445 7.45898C11.1445 7.26482 10.9871 7.10742 10.793 7.10742C10.5988 7.10742 10.4414 7.26482 10.4414 7.45898C10.4414 7.65315 10.5988 7.81055 10.793 7.81055Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.4922 7.81055C13.6864 7.81055 13.8438 7.65315 13.8438 7.45898C13.8438 7.26482 13.6864 7.10742 13.4922 7.10742C13.298 7.10742 13.1406 7.26482 13.1406 7.45898C13.1406 7.65315 13.298 7.81055 13.4922 7.81055Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.79688 6.23535C6.99104 6.23535 7.14844 6.07795 7.14844 5.88379C7.14844 5.68963 6.99104 5.53223 6.79688 5.53223C6.60271 5.53223 6.44531 5.68963 6.44531 5.88379C6.44531 6.07795 6.60271 6.23535 6.79688 6.23535Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.51172 6.23535C9.70588 6.23535 9.86328 6.07795 9.86328 5.88379C9.86328 5.68963 9.70588 5.53223 9.51172 5.53223C9.31756 5.53223 9.16016 5.68963 9.16016 5.88379C9.16016 6.07795 9.31756 6.23535 9.51172 6.23535Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.2109 6.23535C12.4051 6.23535 12.5625 6.07795 12.5625 5.88379C12.5625 5.68963 12.4051 5.53223 12.2109 5.53223C12.0168 5.53223 11.8594 5.68963 11.8594 5.88379C11.8594 6.07795 12.0168 6.23535 12.2109 6.23535Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50489",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.540039)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Sofa = (Sofa);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Dining.jsx



const Dining = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.6592 4.62553C17.485 4.60379 17.3263 4.72736 17.3045 4.90134L16.6332 10.2716H14.1559L13.8286 8.41578C13.8019 8.26398 13.67 8.15322 13.5157 8.15322H5.50186C5.34796 8.15322 5.21612 8.26354 5.1891 8.41512L4.85757 10.2714H2.36681L1.6955 4.90134C1.67376 4.72725 1.5149 4.60379 1.34081 4.62553C1.16672 4.64726 1.04316 4.80613 1.065 4.98022L1.77107 10.6288C1.79093 10.7877 1.92607 10.9071 2.08626 10.9071H2.65266L1.98466 14.9147C1.95586 15.0878 2.0728 15.2514 2.24579 15.2804C2.419 15.3092 2.58272 15.1923 2.61151 15.0192L3.29695 10.9071H4.74438L3.77696 16.3232C3.75534 16.4438 3.80509 16.5661 3.90449 16.6374L3.912 16.6428C4.84423 17.3109 6.08723 17.3516 7.06117 16.7457C8.33727 17.3475 9.81637 17.3447 11.0903 16.7378C11.6596 17.0353 12.2907 17.1961 12.9331 17.2072C12.9557 17.2076 12.9782 17.2078 13.0008 17.2078C13.6791 17.2073 14.3469 17.0401 14.9453 16.7206L15.0598 16.6593C15.1809 16.5945 15.2467 16.4592 15.2229 16.324L14.2679 10.9071H15.7032L16.3885 15.0192C16.4061 15.1321 16.483 15.227 16.5899 15.2676C16.6969 15.308 16.8172 15.288 16.9053 15.2149C16.9932 15.142 17.0354 15.0273 17.0153 14.9147L16.3473 10.9071H16.9137C17.074 10.9071 17.2091 10.7877 17.229 10.6288L17.935 4.98022C17.9568 4.80613 17.8332 4.64737 17.6592 4.62553V4.62553ZM11.4152 16.19V12.1074C11.4152 11.932 11.273 11.7897 11.0974 11.7897C10.922 11.7897 10.7797 11.932 10.7797 12.1074V16.1811C9.69391 16.685 8.4412 16.685 7.35529 16.1811V13.343C7.35529 13.1676 7.21308 13.0253 7.03756 13.0253C6.86214 13.0253 6.71983 13.1676 6.71983 13.343V16.2093C6.02259 16.6403 5.14375 16.6478 4.43934 16.2287L5.76785 8.7889H13.2492L14.5572 16.2061C13.5676 16.7037 12.3997 16.6977 11.4152 16.19V16.19Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.20445 7.74409H11.4408C11.6164 7.74409 11.7586 7.60188 11.7586 7.42636C11.7569 6.20465 10.8516 5.1727 9.64038 5.01196V4.71519C9.64038 4.53967 9.49817 4.39746 9.32265 4.39746C9.14723 4.39746 9.00492 4.53967 9.00492 4.71519V5.01196C7.7939 5.1727 6.88837 6.20465 6.88672 7.42636C6.88672 7.60188 7.02904 7.74409 7.20445 7.74409ZM9.32265 5.6259C10.1941 5.62722 10.94 6.25121 11.0949 7.10863H7.55042C7.70542 6.25121 8.45121 5.62722 9.32265 5.6259Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.3802 4.30583C10.5558 4.30583 10.698 4.16352 10.698 3.9881V3.17613C10.698 3.00071 10.5558 2.8584 10.3802 2.8584C10.2048 2.8584 10.0625 3.00071 10.0625 3.17613V3.9881C10.0625 4.16352 10.2048 4.30583 10.3802 4.30583Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.93491 3.70521C9.11043 3.70521 9.25264 3.5629 9.25264 3.38748V2.11656C9.25264 1.94115 9.11043 1.79883 8.93491 1.79883C8.7595 1.79883 8.61719 1.94115 8.61719 2.11656V3.38748C8.61719 3.5629 8.7595 3.70521 8.93491 3.70521Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.59117 4.55329C7.76669 4.55329 7.9089 4.41098 7.9089 4.23556V3.5648C7.9089 3.38939 7.76669 3.24707 7.59117 3.24707C7.41576 3.24707 7.27344 3.38939 7.27344 3.5648V4.23556C7.27344 4.41098 7.41576 4.55329 7.59117 4.55329Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Dining = (Dining);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/Living.jsx



const Living = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50505)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.9336 11.79H16.8086V10.1025C16.8086 10.0279 16.779 9.95641 16.7262 9.90367C16.6735 9.85092 16.6019 9.82129 16.5273 9.82129H9.21484C9.14025 9.82129 9.06871 9.85092 9.01597 9.90367C8.96323 9.95641 8.93359 10.0279 8.93359 10.1025V11.79H7.80859C7.734 11.79 7.66246 11.8197 7.60972 11.8724C7.55698 11.9252 7.52734 11.9967 7.52734 12.0713V15.4463C7.52734 15.5209 7.55698 15.5924 7.60972 15.6452C7.66246 15.6979 7.734 15.7275 7.80859 15.7275H8.08984V16.29H4.99609V16.8525H17.9336V16.29H17.6523V15.7275H17.9336C18.0082 15.7275 18.0797 15.6979 18.1325 15.6452C18.1852 15.5924 18.2148 15.5209 18.2148 15.4463V12.0713C18.2148 11.9967 18.1852 11.9252 18.1325 11.8724C18.0797 11.8197 18.0082 11.79 17.9336 11.79ZM9.49609 13.4775H16.2461V14.04H9.49609V13.4775ZM16.2461 12.0713V12.915H13.1523V10.3838H16.2461V12.0713ZM9.49609 10.3838H12.5898V12.915H9.49609V10.3838ZM8.65234 16.29V15.7275H9.21484V16.29H8.65234ZM15.9648 15.7275V16.29H9.77734V15.7275H15.9648ZM17.0898 16.29H16.5273V15.7275H17.0898V16.29ZM17.6523 15.165H8.08984V12.3525H8.93359V14.3213C8.93359 14.3959 8.96323 14.4674 9.01597 14.5202C9.06871 14.5729 9.14025 14.6025 9.21484 14.6025H16.5273C16.6019 14.6025 16.6735 14.5729 16.7262 14.5202C16.779 14.4674 16.8086 14.3959 16.8086 14.3213V12.3525H17.6523V15.165Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.40234 14.6025C6.47694 14.6025 6.54847 14.5729 6.60122 14.5202C6.65396 14.4674 6.68359 14.3959 6.68359 14.3213V5.32129C6.68359 5.2467 6.65396 5.17516 6.60122 5.12242C6.54847 5.06967 6.47694 5.04004 6.40234 5.04004H1.05859C0.984002 5.04004 0.912465 5.06967 0.85972 5.12242C0.806975 5.17516 0.777344 5.2467 0.777344 5.32129V14.3213C0.777344 14.3959 0.806975 14.4674 0.85972 14.5202C0.912465 14.5729 0.984002 14.6025 1.05859 14.6025H6.40234ZM3.02734 10.665H3.30859V12.915H1.33984V8.8701L1.74681 9.07373C1.79365 9.09691 1.83304 9.13276 1.86054 9.1772C1.88803 9.22165 1.90251 9.27291 1.90234 9.32516V9.54004C1.90234 9.83841 2.02087 10.1246 2.23185 10.3355C2.44283 10.5465 2.72898 10.665 3.02734 10.665ZM4.99609 10.1025H5.55859C5.75666 10.1014 5.95084 10.0474 6.12109 9.94616V12.915H4.99609V10.1025ZM6.12109 5.60254V8.97754C6.12109 9.12672 6.06183 9.2698 5.95634 9.37529C5.85085 9.48078 5.70778 9.54004 5.55859 9.54004H4.99609V9.09398L5.47619 8.61388L5.0785 8.2162L4.516 8.7787C4.46325 8.83143 4.43361 8.90295 4.43359 8.97754V13.1963C4.43359 13.2709 4.46323 13.3424 4.51597 13.3952C4.56871 13.4479 4.64025 13.4775 4.71484 13.4775H6.12109V14.04H1.33984V13.4775H3.58984C3.66444 13.4775 3.73597 13.4479 3.78872 13.3952C3.84146 13.3424 3.87109 13.2709 3.87109 13.1963V9.25879C3.87109 9.19794 3.85136 9.13872 3.81484 9.09004L2.97109 7.96504L2.52109 8.30254L3.30859 9.35245V10.1025H3.02734C2.87816 10.1025 2.73509 10.0433 2.6296 9.93779C2.52411 9.8323 2.46484 9.68922 2.46484 9.54004V9.32516C2.46539 9.16838 2.42199 9.01457 2.33957 8.8812C2.25715 8.74782 2.139 8.64021 1.99853 8.57057L1.33984 8.24123V5.60254H6.12109Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.30859 16.29H1.05859V16.8525H3.30859V16.29Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.43359 16.29H3.87109V16.8525H4.43359V16.29Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.65234 6.72754H16.8086C16.8832 6.72754 16.9547 6.69791 17.0075 6.64516C17.0602 6.59242 17.0898 6.52088 17.0898 6.44629V5.32129C17.0898 5.2467 17.0602 5.17516 17.0075 5.12242C16.9547 5.06967 16.8832 5.04004 16.8086 5.04004H15.9648V3.35254C15.9648 3.27795 15.9352 3.20641 15.8825 3.15367C15.8297 3.10092 15.7582 3.07129 15.6836 3.07129H14.8398V2.50879C14.8398 2.4342 14.8102 2.36266 14.7575 2.30992C14.7047 2.25717 14.6332 2.22754 14.5586 2.22754H10.0586C9.984 2.22754 9.91246 2.25717 9.85972 2.30992C9.80698 2.36266 9.77734 2.4342 9.77734 2.50879V5.04004H8.65234C8.57775 5.04004 8.50621 5.06967 8.45347 5.12242C8.40073 5.17516 8.37109 5.2467 8.37109 5.32129V6.44629C8.37109 6.52088 8.40073 6.59242 8.45347 6.64516C8.50621 6.69791 8.57775 6.72754 8.65234 6.72754ZM15.4023 3.63379V5.04004H14.8398V3.63379H15.4023ZM14.2773 5.04004H13.7148V2.79004H14.2773V5.04004ZM13.1523 5.04004H12.5898V2.79004H13.1523V5.04004ZM12.0273 5.04004H11.4648V2.79004H12.0273V5.04004ZM10.3398 2.79004H10.9023V5.04004H10.3398V2.79004ZM8.93359 5.60254H16.5273V6.16504H8.93359V5.60254Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50505",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.540039)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_Living = (Living);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/RoundTable.jsx



const RoundTable = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 17",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18.4961 3.3192C18.4961 1.59531 13.859 0.665039 9.49609 0.665039C7.60919 0.665039 5.80812 0.826126 4.28748 1.13086C4.14465 1.15942 4.05223 1.2984 4.0808 1.44122C4.10936 1.58405 4.24834 1.67674 4.39116 1.6479C7.68898 0.986938 12.4815 1.02882 15.6039 1.88315C16.7472 2.19598 17.9688 2.73747 17.9688 3.3192C17.9688 5.05174 8.96092 6.28001 3.38824 4.75525C2.24498 4.44241 1.02344 3.90092 1.02344 3.3192C1.02344 2.7486 2.20845 2.21342 3.31738 1.90279C3.4576 1.86351 3.53944 1.71794 3.50017 1.57773C3.46089 1.43752 3.31546 1.35567 3.17511 1.39494C1.42252 1.88589 0.496094 2.55125 0.496094 3.3192V4.37402C0.496094 5.98943 4.58301 6.91695 8.70508 7.01871V11.8843C8.70508 12.0298 8.82304 12.1479 8.96875 12.1479C9.11446 12.1479 9.23242 12.0298 9.23242 11.8843V7.02722C9.40134 7.02859 9.57643 7.02873 9.75977 7.02722V13.7607C9.75977 13.9062 9.64153 14.0244 9.49609 14.0244C9.35066 14.0244 9.23242 13.9062 9.23242 13.7607V13.0225C9.23242 12.8769 9.11446 12.7588 8.96875 12.7588C8.82304 12.7588 8.70508 12.8769 8.70508 13.0225V13.4051C7.56058 13.6479 6.60065 14.3909 6.60065 15.0676C6.60065 15.4629 6.93394 15.8133 7.53915 16.054C8.06746 16.2643 8.76427 16.3799 9.50104 16.3799C10.2378 16.3799 10.9345 16.2643 11.4629 16.054C12.0681 15.8133 12.4014 15.4629 12.4014 15.0676C12.4014 14.7249 12.1413 14.339 11.688 14.0089C11.2943 13.7222 10.8036 13.5108 10.2871 13.403V7.01884C11.9563 6.9782 13.5367 6.80928 14.8728 6.52803C15.0152 6.49796 15.1064 6.35815 15.0765 6.21561C15.0464 6.07306 14.9063 5.98201 14.7642 6.01195C11.3914 6.72208 6.3709 6.67484 3.22029 5.76297C0.71225 5.03691 1.05296 4.30522 1.02344 4.26581C2.35869 5.38106 6.01466 5.97336 9.49609 5.97336C12.9775 5.97336 16.6335 5.38106 17.9688 4.26581V4.37402C17.9688 4.54774 17.8145 5.15996 15.8297 5.74594C15.69 5.78714 15.6103 5.93381 15.6516 6.07347C15.6929 6.21382 15.84 6.29279 15.9791 6.25159C17.6257 5.76558 18.4961 5.11629 18.4961 4.37402V3.3192ZM11.8741 15.0676C11.8741 15.3875 10.9496 15.8525 9.50104 15.8525C8.05235 15.8525 7.12799 15.3875 7.12799 15.0676C7.12799 14.7852 7.74144 14.1745 8.72568 13.9405C8.80725 14.2904 9.12173 14.5518 9.49609 14.5518C9.87128 14.5518 10.1862 14.2893 10.2671 13.9383C11.2569 14.1707 11.8741 14.7834 11.8741 15.0676Z",
            fill: "currentColor"
        })
    }));
};
/* harmony default export */ const furniture_shop_RoundTable = (RoundTable);

;// CONCATENATED MODULE: ./src/components/icons/furniture-shop/RoomSet.jsx



const RoomSet = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6800_50526)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.57422 16.4301H4.334V6.65723C4.334 6.46309 4.17657 6.30566 3.98243 6.30566C3.7883 6.30566 3.63087 6.46309 3.63087 6.65723V16.4301H3.30859C2.33934 16.4301 1.55078 17.2187 1.55078 18.1879C1.55078 18.382 1.70821 18.5395 1.90234 18.5395H5.98047C6.1746 18.5395 6.33203 18.382 6.33203 18.1879C6.33203 17.2187 5.54348 16.4301 4.57422 16.4301ZM2.31416 17.8364C2.45925 17.4271 2.85026 17.1332 3.30859 17.1332H4.57422C5.03255 17.1332 5.42356 17.4271 5.56865 17.8364H2.31416Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.4453 5.09149L5.78125 0.767274C5.729 0.63157 5.59857 0.541992 5.45313 0.541992H2.51171C2.36627 0.541992 2.23584 0.63157 2.1836 0.767274L0.51955 5.09149C0.477925 5.1996 0.492304 5.32128 0.557871 5.41679C0.623402 5.51228 0.731824 5.56934 0.847664 5.56934H1.72657V7.14448C1.72657 7.33861 1.884 7.49604 2.07813 7.49604C2.27227 7.49604 2.4297 7.33861 2.4297 7.14448V5.56934H7.11718C7.23302 5.56934 7.34145 5.51228 7.40698 5.41679C7.47254 5.32128 7.48689 5.1996 7.4453 5.09149ZM1.35968 4.86621L2.7531 1.24512H5.21175L6.6052 4.86621H1.35968Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M2.32664 8.13133C2.26129 8.0659 2.17059 8.02832 2.07812 8.02832C1.98528 8.02832 1.89496 8.0659 1.82957 8.13133C1.76418 8.19675 1.72656 8.28742 1.72656 8.37988C1.72656 8.47234 1.76414 8.56305 1.82957 8.6284C1.89496 8.69383 1.98566 8.73145 2.07812 8.73145C2.17059 8.73145 2.26129 8.69383 2.32664 8.6284C2.39207 8.56305 2.42969 8.47234 2.42969 8.37988C2.42969 8.28742 2.39207 8.19672 2.32664 8.13133Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.2128 10.6087V10.2159C17.2128 9.30852 16.4746 8.57031 15.5672 8.57031H13.1875C12.9934 8.57031 12.836 8.72774 12.836 8.92187C12.836 9.11601 12.9934 9.27344 13.1875 9.27344H15.5672C16.0869 9.27344 16.5097 9.69619 16.5097 10.2159V10.6087C15.8117 10.7623 15.2799 11.3629 15.2305 12.0941C15.1282 12.0597 15.0189 12.0408 14.9052 12.0408H8.65741C8.54371 12.0408 8.43437 12.0597 8.33211 12.0941C8.28278 11.3629 7.75087 10.7623 7.05291 10.6087V10.2159C7.05291 9.69623 7.4757 9.27344 7.99541 9.27344H10.3047C10.4989 9.27344 10.6563 9.11601 10.6563 8.92187C10.6563 8.72774 10.4989 8.57031 10.3047 8.57031H7.99538C7.08796 8.57031 6.34975 9.30852 6.34975 10.2159V10.6087C5.61671 10.77 5.06641 11.4243 5.06641 12.2051V15.9375C5.06641 16.1316 5.22384 16.2891 5.41797 16.2891H18.1445C18.3387 16.2891 18.4961 16.1316 18.4961 15.9375V12.2052C18.4961 11.4243 17.9458 10.77 17.2128 10.6087ZM7.63316 13.0651V13.7986V15.586H5.76957V12.2052C5.76957 11.6914 6.18757 11.2734 6.70135 11.2734C7.21516 11.2734 7.63316 11.6914 7.63316 12.2052V13.0651ZM15.2263 15.586H8.33629V14.1502H15.2263V15.586ZM15.2263 13.4471H8.33629V13.0651C8.33629 12.888 8.48036 12.744 8.65741 12.744H14.9052C15.0822 12.744 15.2263 12.888 15.2263 13.0651V13.4471V13.4471ZM17.793 15.586H15.9294V13.7986V13.0651V12.2052C15.9294 11.6914 16.3474 11.2734 16.8612 11.2734C17.375 11.2734 17.793 11.6914 17.793 12.2052V15.586Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.0298 8.67332C11.9644 8.60758 11.8737 8.57031 11.7812 8.57031C11.6888 8.57031 11.5981 8.60758 11.5327 8.67332C11.4673 8.73871 11.4297 8.8291 11.4297 8.92188C11.4297 9.01434 11.4673 9.10504 11.5327 9.17043C11.5981 9.23579 11.6888 9.27344 11.7812 9.27344C11.8737 9.27344 11.9644 9.23582 12.0298 9.17043C12.0952 9.10504 12.1328 9.01434 12.1328 8.92188C12.1328 8.82906 12.0952 8.73871 12.0298 8.67332Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.4414 0.541016H10.1992C9.61766 0.541016 9.14453 1.01415 9.14453 1.5957V5.32226C9.14453 5.90381 9.61766 6.37695 10.1992 6.37695H17.4414C18.023 6.37695 18.4961 5.90381 18.4961 5.32226V1.5957C18.4961 1.01415 18.023 0.541016 17.4414 0.541016ZM17.793 5.32226C17.793 5.51608 17.6353 5.67382 17.4414 5.67382H15.1206C15.1108 5.66078 15.1003 5.64805 15.0884 5.63617L12.0386 2.58637C11.9013 2.44912 11.6788 2.44912 11.5414 2.58637L10.5222 3.60562C10.3849 3.7429 10.3849 3.96551 10.5222 4.10283C10.6595 4.24008 10.882 4.24008 11.0194 4.10283L11.79 3.33217L14.1317 5.67382H10.1992C10.0054 5.67382 9.84766 5.51611 9.84766 5.32226V1.5957C9.84766 1.40185 10.0054 1.24414 10.1992 1.24414H17.4414C17.6353 1.24414 17.793 1.40185 17.793 1.5957V3.4188L16.3716 1.99747C16.2343 1.86022 16.0118 1.86022 15.8744 1.99747L14.5783 3.29361C14.441 3.43089 14.441 3.6535 14.5783 3.79082C14.7156 3.92807 14.9381 3.92807 15.0755 3.79082L16.123 2.74327L17.7202 4.34038C17.7424 4.3626 17.767 4.38085 17.793 4.39586V5.32226Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6800_50526",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.540039)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const furniture_shop_RoomSet = (RoomSet);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/BirthdayCake.jsx



const BirthdayCake = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24012)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.93437 14.8164C5.27369 14.8164 5.27425 14.2891 4.93437 14.2891C4.59508 14.2891 4.59451 14.8164 4.93437 14.8164Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.49688 14.8164C9.83621 14.8164 9.83678 14.2891 9.49688 14.2891C9.15759 14.2891 9.15699 14.8164 9.49688 14.8164Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.0555 14.8164C14.3948 14.8164 14.3954 14.2891 14.0555 14.2891C13.7162 14.2891 13.7156 14.8164 14.0555 14.8164Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.10627 9.84473C6.4456 9.84473 6.44616 9.31738 6.10627 9.31738C5.76694 9.31738 5.76638 9.84473 6.10627 9.84473Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.49688 9.84473C9.83621 9.84473 9.83678 9.31738 9.49688 9.31738C9.15759 9.31738 9.15699 9.84473 9.49688 9.84473Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.8875 9.84473C13.2269 9.84473 13.2274 9.31738 12.8875 9.31738C12.5482 9.31738 12.5476 9.84473 12.8875 9.84473Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.9296 3.45634C13.0631 3.45634 13.1939 3.3219 13.1933 3.19151L13.1914 2.7748C13.1899 2.44373 12.6625 2.42964 12.6641 2.77712L12.6659 3.19383C12.6666 3.33906 12.7845 3.45634 12.9296 3.45634Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.8246 3.77452C12.0666 4.01401 12.438 3.63966 12.1955 3.39969L11.8991 3.10634C11.6567 2.86658 11.2858 3.24138 11.5281 3.48118L11.8246 3.77452Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.2206 4.78116H11.2217L11.6391 4.7793C11.9721 4.77782 11.9625 4.25195 11.6368 4.25195L11.2194 4.25382C10.8791 4.25533 10.8804 4.78116 11.2206 4.78116Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.8477 5.24759L11.5539 5.54354C11.3138 5.78534 11.6877 6.15722 11.9281 5.91507L12.2219 5.61912C12.4622 5.37725 12.0879 5.00558 11.8477 5.24759Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.6973 5.22289C13.5949 5.32639 13.5958 5.49332 13.6993 5.59576L13.9957 5.8891C14.2378 6.12859 14.6091 5.75425 14.3667 5.51427C14.2385 5.34408 13.9171 5.00081 13.6973 5.22289Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.9922 4.48154C13.9928 4.61225 14.1239 4.74405 14.257 4.74405L14.6744 4.74219C15.0074 4.74071 14.9978 4.21484 14.672 4.21484L14.2547 4.21671C14.1091 4.21737 13.9916 4.33596 13.9922 4.48154Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.8587 3.82598C13.9266 3.82598 13.9943 3.8 14.0458 3.74807L14.3396 3.45212C14.5798 3.21018 14.2055 2.83861 13.9654 3.08059L13.6716 3.37654C13.516 3.53337 13.6379 3.82598 13.8587 3.82598Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.02722 1.59794C6.16071 1.59794 6.29153 1.4635 6.29093 1.33311L6.28907 0.916402C6.28759 0.585335 5.76018 0.571237 5.76172 0.918722L5.76359 1.33543C5.76425 1.48066 5.88213 1.59794 6.02722 1.59794Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.92221 1.91711C5.16429 2.1566 5.53561 1.78225 5.29314 1.54228L4.9967 1.24893C4.7544 1.00913 4.38347 1.38397 4.62577 1.62377L4.92221 1.91711Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.31821 2.92276H4.3194L4.73674 2.9209C5.06974 2.91942 5.06014 2.39355 4.73442 2.39355L4.31708 2.39542C3.9768 2.39696 3.9781 2.92276 4.31821 2.92276Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.94531 3.39016L4.65154 3.68611C4.41146 3.92795 4.78538 4.2998 5.02578 4.05764L5.31955 3.76169C5.55974 3.51975 5.18546 3.14818 4.94531 3.39016Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.79501 3.36535C6.69257 3.46885 6.69345 3.63581 6.79698 3.73822L7.09342 4.03153C7.33543 4.27112 7.70686 3.89663 7.46435 3.65669L7.16791 3.36338C7.06438 3.2609 6.89746 3.26182 6.79501 3.36535Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.08985 2.62314C7.09051 2.76837 7.20839 2.88565 7.35348 2.88565H7.35468L7.77201 2.88379C8.10501 2.88231 8.09541 2.35645 7.76969 2.35645L7.35236 2.35831C7.20674 2.35894 7.08921 2.47752 7.08985 2.62314Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.95642 1.9676C7.0242 1.9676 7.09198 1.94162 7.14352 1.8897L7.43732 1.59375C7.67754 1.35184 7.3032 0.980169 7.06308 1.22222L6.76928 1.51816C6.61357 1.675 6.73564 1.9676 6.95642 1.9676Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.2324 16.8187H16.5944V13.928C16.5944 12.9664 15.8153 12.1835 14.8552 12.1769V9.22349C14.8552 8.29375 14.1269 7.53121 13.2109 7.47566V4.33864C13.2109 4.19298 13.0929 4.07497 12.9472 4.07497C12.8016 4.07497 12.6836 4.19298 12.6836 4.33864V7.47208H10.7228V4.51614C10.7228 4.37049 10.6048 4.25247 10.4591 4.25247H9.75551V3.31471C10.8052 3.02668 10.4327 1.97445 10.0881 1.31643C9.90693 0.970352 9.72851 0.678344 9.72099 0.666074C9.57108 0.498027 9.42114 0.498027 9.27123 0.666074C9.26371 0.678344 9.08529 0.970352 8.9041 1.31643C8.56023 1.97301 8.18273 3.01514 9.2282 3.31229V4.25247H8.53313C8.38748 4.25247 8.26946 4.37049 8.26946 4.51614V7.47208H6.30869V2.48045C6.30869 2.13954 5.78134 2.13954 5.78134 2.48045V7.47566C4.86531 7.53125 4.13702 8.29375 4.13702 9.22349V12.1769C3.17693 12.1835 2.39787 12.9664 2.39787 13.928V16.8187H0.759766C0.614113 16.8187 0.496094 16.9367 0.496094 17.0824C0.496094 17.8861 1.15 18.54 1.95374 18.54H17.0384C17.8422 18.54 18.4961 17.8861 18.4961 17.0824C18.4961 16.9368 18.3781 16.8187 18.2324 16.8187ZM9.04282 2.37034C9.04282 2.03249 9.34151 1.60671 9.49652 1.32708C9.64607 1.59599 10.0074 2.11423 9.93182 2.44973C9.81946 2.94877 9.04282 2.94592 9.04282 2.37034ZM8.79673 5.86312H10.1954V6.38874H8.79673V5.86312ZM10.1955 4.77981V5.33577H8.79677V4.77981H10.1955ZM8.79673 6.91608H10.1954V7.47204H8.79673V6.91608ZM5.88836 7.99942H13.1038C13.7207 7.99942 14.2322 8.45825 14.3157 9.05249C13.9191 9.16728 13.6961 9.52921 13.5109 9.83036C13.296 10.1799 13.1508 10.3941 12.8876 10.3941C12.6244 10.3941 12.4792 10.1799 12.2643 9.83032C12.0409 9.4673 11.7631 9.01547 11.1917 9.01547C10.6204 9.01547 10.3425 9.4673 10.1192 9.83036C9.90422 10.1799 9.75913 10.3941 9.49592 10.3941C9.23274 10.3941 9.08761 10.1799 8.87263 9.83036C8.64936 9.4673 8.37148 9.01547 7.80016 9.01547C7.56067 9.01547 7.34471 9.0989 7.1582 9.26346C6.90258 9.48903 7.25144 9.88447 7.50709 9.6589C7.59808 9.57864 7.68846 9.54282 7.80016 9.54282C8.06334 9.54282 8.20846 9.75706 8.42344 10.1066C8.64672 10.4696 8.92459 10.9215 9.49592 10.9215C10.0672 10.9215 10.3451 10.4696 10.5684 10.1066C10.7834 9.75706 10.9285 9.54282 11.1917 9.54282C11.4549 9.54282 11.6001 9.75706 11.815 10.1066C12.0383 10.4696 12.3163 10.9215 12.8876 10.9215C13.459 10.9215 13.7369 10.4696 13.9602 10.1066C14.0947 9.88777 14.202 9.72201 14.3279 9.6286V12.1765H4.66429V9.62863C4.79022 9.72204 4.89741 9.8878 5.03199 10.1066C5.25527 10.4697 5.53314 10.9215 6.10446 10.9215C6.3842 10.9215 6.62232 10.813 6.83248 10.5899C7.06623 10.3417 6.68229 9.98013 6.44857 10.2283C6.33913 10.3446 6.2362 10.3942 6.10446 10.3942C5.84128 10.3942 5.69616 10.1799 5.48118 9.83039C5.29601 9.52928 5.07305 9.16735 4.67649 9.05253C4.75991 8.45821 5.27144 7.99942 5.88836 7.99942ZM4.14925 12.7039H4.40058H14.5916H14.8429C15.4422 12.7039 15.942 13.1369 16.0465 13.7064C15.517 13.832 15.2269 14.3028 14.9669 14.7256C14.6605 15.2237 14.4461 15.5261 14.0523 15.5261C13.7896 15.5261 13.597 15.4723 13.1378 14.7256C12.8346 14.2327 12.4909 13.674 11.774 13.674C11.057 13.674 10.7134 14.2327 10.4103 14.7256C10.1039 15.2237 9.88949 15.5262 9.49574 15.5262C9.23306 15.5262 9.04047 15.4723 8.58126 14.7256C8.27811 14.2327 7.93452 13.674 7.21758 13.674C6.50064 13.674 6.15709 14.2327 5.85394 14.7256C5.54763 15.2237 5.33321 15.5262 4.93953 15.5262C4.67684 15.5262 4.48425 15.4723 4.02504 14.7256C3.76503 14.3028 3.47502 13.832 2.9455 13.7065C3.0502 13.1369 3.54994 12.7039 4.14925 12.7039ZM17.0384 18.0127H1.95374C1.53232 18.0127 1.17542 17.731 1.06148 17.3461H13.3806C13.7215 17.3461 13.7215 16.8187 13.3806 16.8187H2.92514V14.2482C3.09101 14.3233 3.27695 14.5157 3.57596 15.0018C3.87911 15.4948 4.22269 16.0535 4.93963 16.0535C5.65654 16.0535 6.00009 15.4948 6.30324 15.0018C6.60955 14.5037 6.82397 14.2013 7.21769 14.2013C7.48038 14.2013 7.67296 14.2552 8.13217 15.0018C8.43532 15.4948 8.77891 16.0535 9.49585 16.0535C10.2128 16.0535 10.5564 15.4948 10.8596 15.0018C11.1659 14.5037 11.3803 14.2013 11.7741 14.2013C12.0368 14.2013 12.2294 14.2552 12.6887 15.0018C12.9919 15.4948 13.3355 16.0534 14.0524 16.0534C14.7694 16.0534 15.113 15.4947 15.4162 15.0018C15.6467 14.6271 15.8252 14.3632 16.0671 14.2554V16.8187H14.7161C14.3751 16.8187 14.3751 17.3461 14.7161 17.3461H17.9307C17.8168 17.731 17.4599 18.0127 17.0384 18.0127Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24012",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.540039)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_BirthdayCake = (BirthdayCake);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/Children.jsx



const Children = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24041)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.4628 10.5849C13.9399 10.5849 14.328 10.1968 14.328 9.71973C14.328 9.57407 14.2099 9.45605 14.0643 9.45605C13.9187 9.45605 13.8006 9.57407 13.8006 9.71973C13.8006 9.90602 13.6491 10.0575 13.4628 10.0575C13.2766 10.0575 13.125 9.90598 13.125 9.71973C13.125 9.57407 13.0069 9.45605 12.8613 9.45605C12.7157 9.45605 12.5977 9.57407 12.5977 9.71973C12.5976 10.1968 12.9857 10.5849 13.4628 10.5849Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.8457 9.10555C14.9913 9.10555 15.1094 8.98753 15.1094 8.84188V8.56636C15.2396 8.55022 15.3404 8.43923 15.3404 8.30469C15.3404 8.15904 15.2223 8.04102 15.0767 8.04102H14.8457C14.7001 8.04102 14.582 8.15904 14.582 8.30469V8.84188C14.582 8.98753 14.7001 9.10555 14.8457 9.10555Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.8169 8.56636V8.84188C11.8169 8.98753 11.935 9.10555 12.0806 9.10555C12.2262 9.10555 12.3443 8.98753 12.3443 8.84188V8.30469C12.3443 8.15904 12.2262 8.04102 12.0806 8.04102H11.8496C11.704 8.04102 11.5859 8.15904 11.5859 8.30469C11.5859 8.4392 11.6867 8.55022 11.8169 8.56636Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.4043 8.88949C17.4792 8.73111 17.5212 8.55435 17.5212 8.36788C17.5212 8.05756 17.4051 7.77398 17.2142 7.55784C17.2445 7.51492 17.2624 7.46268 17.2624 7.40611C17.2624 6.62733 17.3013 6.16548 17.067 5.49562C17.0189 5.35815 16.8685 5.28556 16.7311 5.33376C16.5936 5.38181 16.5212 5.53225 16.5692 5.66971C16.7607 6.21713 16.735 6.59685 16.735 7.14244C16.3987 7.14244 15.4927 7.14244 15.1108 7.14244C14.3479 7.14244 13.7272 6.52179 13.7271 5.7589C13.7271 5.61325 13.6091 5.49523 13.4635 5.49523C13.3179 5.49523 13.1998 5.61325 13.1998 5.7589C13.1998 6.52179 12.5791 7.14244 11.8162 7.14244H10.6705H10.1919V6.65124C10.1919 5.0126 11.525 3.67948 13.1637 3.67948C13.1836 3.67948 13.1998 3.69569 13.1998 3.71562C13.1998 3.86124 13.3179 3.97926 13.4635 3.97926C13.6091 3.97926 13.7271 3.86124 13.7271 3.71562C13.7271 3.69569 13.7434 3.67948 13.7633 3.67948C14.6223 3.67952 15.439 4.05119 16.0041 4.69919C16.0998 4.80898 16.2663 4.8203 16.3761 4.72467C16.4859 4.62894 16.4972 4.46241 16.4016 4.35265C15.7364 3.58976 14.7748 3.15221 13.7633 3.15217C13.6532 3.15217 13.5504 3.18392 13.4635 3.23873C13.3766 3.18392 13.2738 3.15217 13.1637 3.15217C11.2343 3.15217 9.6646 4.72186 9.6646 6.65127V7.40615C9.6646 7.46268 9.68256 7.51495 9.71283 7.55788C9.62431 7.65811 9.55182 7.77275 9.49965 7.89798C9.46797 7.50915 9.2718 7.16768 8.97891 6.9443V5.93978C8.97891 3.96203 7.36991 2.35304 5.39216 2.35304C4.9011 2.35304 5.09787 2.34456 4.41865 2.39765C3.48174 2.47077 2.6433 2.97214 2.13575 3.75211L1.34171 3.49832C1.17718 3.44559 1.00635 3.5635 0.998055 3.73689C0.994293 3.81634 0.914734 5.5821 1.2367 6.81197C0.798051 7.03198 0.496094 7.48581 0.496094 8.00911C0.496094 8.68812 1.00431 9.25069 1.66036 9.3364C1.82549 10.0449 2.21559 10.688 2.77362 11.1649C2.91994 11.29 3.07607 11.4013 3.23955 11.4991H2.68471C1.77307 11.4991 1.03142 12.2408 1.03142 13.1524V15.463C1.03142 15.6086 1.14947 15.7266 1.29509 15.7266H1.7331C1.87872 15.7266 1.99677 15.6086 1.99677 15.463C1.99677 15.3173 1.87872 15.1993 1.7331 15.1993H1.55876V13.1524C1.55876 12.5315 2.06385 12.0264 2.68471 12.0264H3.45175C3.58278 12.8039 4.2859 13.3884 5.10733 13.3354C5.85092 13.2875 6.44007 12.728 6.55844 12.0264H7.32558C7.94644 12.0264 8.45157 12.5315 8.45157 13.1524V15.1993H2.96361C2.81799 15.1993 2.69993 15.3173 2.69993 15.463C2.69993 15.6086 2.81799 15.7266 2.96361 15.7266H8.71527C8.86089 15.7266 8.97894 15.6086 8.97894 15.463V13.1524C8.97894 12.9328 8.93556 12.7233 8.85752 12.5315H9.28115C9.5464 12.5315 9.79939 12.4785 10.0306 12.3831C9.86794 12.6346 9.77309 12.9339 9.77309 13.2551V15.463C9.77309 15.6086 9.89114 15.7266 10.0368 15.7266H16.9081C17.0537 15.7266 17.1717 15.6086 17.1717 15.463V13.2551C17.1717 12.9379 17.0792 12.642 16.9202 12.3924C17.145 12.4818 17.3897 12.5315 17.646 12.5315H18.2324C18.378 12.5315 18.4961 12.4134 18.4961 12.2678V10.6529C18.4961 9.90178 18.0608 9.21884 17.4043 8.88949ZM11.8163 7.66982C12.5171 7.66982 13.131 7.29069 13.4635 6.72668C13.7962 7.29069 14.41 7.66982 15.1108 7.66982H16.2958C16.6808 7.66982 16.9939 7.98295 16.9939 8.36788C16.9939 8.55611 16.9187 8.72682 16.7972 8.85247C16.6584 8.99591 16.4659 9.07322 16.2679 9.06517C16.1345 9.05902 16.0186 9.15383 15.9967 9.28511C15.7961 10.4844 14.7586 11.4267 13.4635 11.4267C12.5486 11.4267 11.6939 10.943 11.234 10.1385C11.2297 10.1277 11.2248 10.117 11.2191 10.1067C11.1117 9.91416 11.0303 9.71071 10.9759 9.49963C10.9748 9.49541 10.974 9.49112 10.9729 9.4869C10.9579 9.42742 10.9437 9.36431 10.9304 9.28507C10.9085 9.15411 10.7921 9.05909 10.6592 9.06513C10.2646 9.08116 9.93319 8.76282 9.93319 8.36781C9.93319 7.98288 10.2464 7.66975 10.6313 7.66975C10.6409 7.66975 10.6504 7.67017 10.6599 7.67052C10.6712 7.67098 10.6823 7.6707 10.6932 7.66975H11.8163V7.66982ZM13.4679 13.0632C12.9662 13.0632 12.558 12.655 12.558 12.1533V11.9078V11.8192C12.8573 11.911 13.1698 11.9541 13.4635 11.9541C13.7669 11.9541 14.0828 11.908 14.3777 11.8166V12.1533C14.3777 12.6394 13.9946 13.0376 13.5146 13.062C13.4991 13.0628 13.4836 13.0632 13.4679 13.0632ZM11.3837 11.6442C11.3836 11.6442 11.3835 11.6442 11.3834 11.6442C11.2026 11.6442 11.029 11.6747 10.8667 11.7299C11.0296 11.5096 11.1476 11.2543 11.2075 10.9775C11.2849 11.0599 11.3667 11.1386 11.4532 11.2125C11.6314 11.3648 11.8254 11.4951 12.0307 11.6023V11.6442H11.3837ZM14.9051 11.598C15.2035 11.441 15.4766 11.2362 15.7195 10.9775C15.7787 11.251 15.8948 11.5035 16.0548 11.722C15.7537 11.6247 15.5967 11.6442 14.9051 11.6442V11.598H14.9051ZM1.51619 4.10768L2.17393 4.31788C2.29377 4.3561 2.42406 4.30445 2.48495 4.19427C2.88893 3.46344 3.62718 2.98831 4.45971 2.92337C5.12259 2.87162 4.9216 2.88034 5.39216 2.88034C7.0791 2.88034 8.45157 4.25277 8.45157 5.93974V6.7014C8.22115 6.6518 8.29403 6.67156 4.67786 6.67156C4.41496 6.67156 4.16314 6.61313 3.93624 6.50762C3.43705 6.27552 3.05849 5.81557 2.94761 5.24878C2.90525 5.03222 2.63869 4.96708 2.49631 5.11927C2.11595 5.52589 1.85003 6.00756 1.70564 6.50745C1.52434 5.68732 1.50968 4.64076 1.51619 4.10768ZM2.13849 9.03943C2.11715 8.91192 2.00679 8.81925 1.87854 8.81925C1.87499 8.81925 1.87141 8.81932 1.86782 8.81946C1.85682 8.81992 1.84581 8.82034 1.8347 8.82034C1.38737 8.82034 1.02344 8.45644 1.02344 8.00911C1.02344 7.56931 1.37402 7.21381 1.80524 7.19858C1.8063 7.19855 1.80739 7.19855 1.80844 7.19851C1.82806 7.19792 1.84768 7.19792 1.86719 7.19872C1.86761 7.19872 1.86803 7.19872 1.86845 7.19876C1.86926 7.19879 1.87007 7.19869 1.87088 7.19872C2.0024 7.2028 2.11673 7.10883 2.13849 6.97879C2.19801 6.6229 2.32299 6.28435 2.50629 5.97743C2.53248 5.93359 2.55987 5.89039 2.58842 5.84788C2.95137 6.65398 3.76288 7.19893 4.67786 7.19893H8.20386H8.20403C8.33204 7.20484 8.46535 7.24348 8.58027 7.31193C8.58231 7.31316 8.58449 7.31397 8.58657 7.31513C8.82148 7.45719 8.97715 7.71454 8.97715 8.00908C8.97715 8.4564 8.61321 8.8203 8.16589 8.8203C8.15478 8.8203 8.14374 8.81985 8.13273 8.81943C8.00009 8.81468 7.884 8.90837 7.86207 9.0394C7.62311 10.4683 6.39355 11.4589 5.00028 11.4589C3.59628 11.4589 2.37576 10.4581 2.13849 9.03943ZM4.95225 12.8104C4.4363 12.7846 4.01562 12.3832 3.96282 11.8714C3.96243 11.8676 3.96222 11.8637 3.96187 11.8598C3.96081 11.8485 3.95993 11.837 3.95927 11.8255C4.3065 11.9363 4.66858 11.9862 5.00035 11.9862C5.33838 11.9862 5.70337 11.9345 6.05145 11.8222C6.01956 12.3965 5.52727 12.8391 4.95225 12.8104ZM7.32562 11.4991H6.76111C6.92459 11.4013 7.08072 11.29 7.22704 11.1649C7.78504 10.688 8.17517 10.0449 8.34026 9.3364C8.83037 9.27238 9.23791 8.94216 9.4127 8.49609C9.42726 8.63545 9.46526 8.76792 9.52271 8.88949C8.86627 9.21884 8.43093 9.90175 8.43093 10.6529V11.9241C8.13787 11.6601 7.75023 11.4991 7.32562 11.4991ZM8.95831 12.0041V10.6529C8.95831 10.0662 9.32077 9.53602 9.8556 9.31647C10.0308 9.45948 10.2417 9.54934 10.4525 9.58031C10.5134 9.83467 10.6093 10.0831 10.7251 10.3021V10.5601C10.7251 11.3563 10.0773 12.0041 9.28108 12.0041H8.95831V12.0041ZM16.6443 15.1993H10.3004V13.2551C10.3004 12.6576 10.7865 12.1715 11.3841 12.1715H12.0308C12.0405 12.9501 12.6771 13.5905 13.4679 13.5905C14.2496 13.5905 14.8951 12.96 14.905 12.1715H15.5607C16.1582 12.1715 16.6443 12.6576 16.6443 13.2551V15.1993H16.6443ZM17.9688 12.0041H17.6459C16.8497 12.0041 16.202 11.3563 16.202 10.5601V10.3021C16.3195 10.0799 16.4144 9.83147 16.4745 9.58035C16.6726 9.55127 16.8724 9.47077 17.0461 9.3358C17.0545 9.3293 17.0632 9.32325 17.0714 9.31653C17.6063 9.53605 17.9688 10.0662 17.9688 10.6529V12.0041Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.9985 10.4604C5.51459 10.4604 5.93447 10.0405 5.93447 9.52441C5.93447 9.37876 5.81641 9.26074 5.67079 9.26074C5.52518 9.26074 5.40712 9.37876 5.40712 9.52441C5.40712 9.74973 5.22382 9.93303 4.9985 9.93303C4.77318 9.93303 4.58984 9.74973 4.58984 9.52441C4.58984 9.37876 4.47179 9.26074 4.32617 9.26074C4.18055 9.26074 4.0625 9.37876 4.0625 9.52441C4.06254 10.0405 4.48241 10.4604 4.9985 10.4604Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.45508 7.68848C3.30946 7.68848 3.19141 7.8065 3.19141 7.95215V8.53511C3.19141 8.68076 3.30946 8.79878 3.45508 8.79878C3.6007 8.79878 3.71875 8.68076 3.71875 8.53511V7.95215C3.71875 7.80653 3.6007 7.68848 3.45508 7.68848Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.54492 8.79878C6.69054 8.79878 6.80859 8.68076 6.80859 8.53511V7.95215C6.80859 7.8065 6.69054 7.68848 6.54492 7.68848C6.3993 7.68848 6.28125 7.8065 6.28125 7.95215V8.53511C6.28125 8.68076 6.3993 8.79878 6.54492 8.79878Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24041",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_Children = (Children);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/Christmas.jsx



const Chirstmas = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24061)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.4961 14.9219C13.0776 14.9219 13.5508 14.4487 13.5508 13.8672C13.5508 13.2856 13.0776 12.8125 12.4961 12.8125C11.9145 12.8125 11.4414 13.2856 11.4414 13.8672C11.4414 14.4487 11.9145 14.9219 12.4961 14.9219ZM12.4961 13.5156C12.6899 13.5156 12.8477 13.6733 12.8477 13.8672C12.8477 14.061 12.6899 14.2188 12.4961 14.2188C12.3022 14.2188 12.1445 14.061 12.1445 13.8672C12.1445 13.6733 12.3022 13.5156 12.4961 13.5156Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.4414 10.5303C11.4414 9.94872 10.9683 9.47559 10.3867 9.47559C9.80516 9.47559 9.33203 9.94872 9.33203 10.5303C9.33203 11.1118 9.80516 11.585 10.3867 11.585C10.9683 11.585 11.4414 11.1118 11.4414 10.5303ZM10.0352 10.5303C10.0352 10.3364 10.1929 10.1787 10.3867 10.1787C10.5806 10.1787 10.7383 10.3364 10.7383 10.5303C10.7383 10.7241 10.5806 10.8818 10.3867 10.8818C10.1929 10.8818 10.0352 10.7241 10.0352 10.5303Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.52879 13.6186C9.4634 13.684 9.42578 13.7747 9.42578 13.8672C9.42578 13.9596 9.4634 14.0504 9.52879 14.1157C9.59418 14.1811 9.68488 14.2188 9.77734 14.2188C9.8698 14.2188 9.96051 14.1811 10.0259 14.1157C10.0913 14.0504 10.1289 13.9596 10.1289 13.8672C10.1289 13.7747 10.0913 13.684 10.0259 13.6186C9.96051 13.5532 9.8698 13.5156 9.77734 13.5156C9.68488 13.5156 9.59418 13.5532 9.52879 13.6186Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.2539 4.95215C11.1614 4.95215 11.0707 4.98941 11.0054 5.05516C10.94 5.12055 10.9023 5.2109 10.9023 5.30371C10.9023 5.39617 10.94 5.48688 11.0054 5.55227C11.0707 5.61766 11.1614 5.65527 11.2539 5.65527C11.3464 5.65527 11.4371 5.61766 11.5025 5.55227C11.5679 5.48688 11.6055 5.39617 11.6055 5.30371C11.6055 5.2109 11.5679 5.12055 11.5025 5.05516C11.4371 4.98941 11.3464 4.95215 11.2539 4.95215Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.66016 5.65529C3.69732 5.65529 3.72755 5.68552 3.72755 5.72268C3.72755 5.91685 3.88495 6.07424 4.07911 6.07424C4.27328 6.07424 4.43068 5.91685 4.43068 5.72268C4.43068 5.68552 4.46091 5.65529 4.49807 5.65529C4.69224 5.65529 4.84963 5.49789 4.84963 5.30372C4.84963 5.10955 4.69224 4.95216 4.49807 4.95216C4.46091 4.95216 4.43068 4.92193 4.43068 4.88477C4.43068 4.6906 4.27328 4.5332 4.07911 4.5332C3.88495 4.5332 3.72755 4.6906 3.72755 4.88477C3.72755 4.92193 3.69732 4.95216 3.66016 4.95216C3.46599 4.95216 3.30859 5.10955 3.30859 5.30372C3.30859 5.49789 3.46599 5.65529 3.66016 5.65529Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.1426 9.10939C18.1054 9.10939 18.0752 9.07915 18.0752 9.04199C18.0752 8.84782 17.9178 8.69043 17.7236 8.69043C17.5295 8.69043 17.3721 8.84782 17.3721 9.04199C17.3721 9.07915 17.3418 9.10939 17.3047 9.10939C17.1105 9.10939 16.9531 9.26678 16.9531 9.46095C16.9531 9.65512 17.1105 9.81251 17.3047 9.81251C17.3418 9.81251 17.3721 9.84275 17.3721 9.87991C17.3721 10.0741 17.5295 10.2315 17.7236 10.2315C17.9178 10.2315 18.0752 10.0741 18.0752 9.87991C18.0752 9.84275 18.1054 9.81251 18.1426 9.81251C18.3368 9.81251 18.4942 9.65512 18.4942 9.46095C18.4942 9.26678 18.3368 9.10939 18.1426 9.10939Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.3778 12.3451H15.1094C15.235 12.3451 15.3511 12.2781 15.4139 12.1694C15.4767 12.0606 15.4767 11.9266 15.4139 11.8178L14.7426 10.6551C14.6455 10.4869 14.4305 10.4293 14.2624 10.5265C14.0942 10.6235 14.0366 10.8385 14.1337 11.0067L14.5005 11.642H13.7689C13.6433 11.642 13.5272 11.709 13.4645 11.8178C13.4016 11.9266 13.4016 12.0606 13.4645 12.1694L15.6372 15.9326H12.5195H11.4648V15.4404C11.4648 15.2463 11.3074 15.0889 11.1133 15.0889H9.49609H8.08984H7.03104L8.71664 12.1694C8.77947 12.0606 8.77947 11.9266 8.71664 11.8178C8.65385 11.709 8.5378 11.642 8.41219 11.642H7.68055L10.2642 7.16697C10.327 7.0582 10.327 6.92418 10.2642 6.81541C10.2014 6.70663 10.0854 6.63963 9.95977 6.63963H8.83076L10.5564 3.65078C10.581 3.63767 10.605 3.62304 10.6281 3.6062L11.0905 3.26867L11.553 3.6062C11.576 3.62304 11.6001 3.6377 11.6247 3.65082L13.3503 6.63966H12.2213C12.0957 6.63966 11.9797 6.70667 11.9169 6.81544C11.8541 6.92422 11.8541 7.05823 11.9169 7.167L12.5518 8.26673C12.6169 8.37951 12.7351 8.44254 12.8566 8.44254C12.9162 8.44254 12.9767 8.42736 13.032 8.3954C13.2002 8.29833 13.2578 8.08332 13.1607 7.91516L12.8302 7.34279H13.9592C14.0849 7.34279 14.2009 7.27578 14.2637 7.167C14.3265 7.05823 14.3265 6.92422 14.2637 6.81544L12.3543 3.50819C12.4833 3.35448 12.5272 3.14302 12.4625 2.94544L12.2844 2.40133L12.7506 2.06421C12.9588 1.91364 13.0455 1.64821 12.9664 1.40373C12.8872 1.15926 12.6614 0.995008 12.4045 0.995008H11.8284L11.6525 0.451C11.5734 0.206348 11.3476 0.0419922 11.0905 0.0419922C10.8334 0.0419922 10.6076 0.206348 10.5286 0.450965L10.3527 0.994973H9.77664C9.51968 0.994973 9.29387 1.15922 9.21474 1.4037C9.1356 1.64818 9.22233 1.91361 9.43053 2.06418L9.8967 2.40129L9.7186 2.94541C9.65391 3.14298 9.69782 3.35448 9.82684 3.50819L7.9174 6.81544C7.85458 6.92422 7.85458 7.05823 7.9174 7.167C7.98019 7.27578 8.09624 7.34279 8.22185 7.34279H9.35086L6.76719 11.8178C6.70437 11.9266 6.70437 12.0606 6.76719 12.1694C6.82998 12.2782 6.94603 12.3452 7.07165 12.3452H7.80325L6.82422 14.0409V12.9092C6.82422 12.715 6.66682 12.5576 6.47266 12.5576H5.62166C5.6938 12.4025 5.73437 12.2299 5.73437 12.0479C5.73437 11.3791 5.19026 10.835 4.52148 10.835C4.18497 10.835 3.88009 10.9728 3.66016 11.1949C3.44022 10.9728 3.13534 10.835 2.79883 10.835C2.13005 10.835 1.58594 11.3791 1.58594 12.0479C1.58594 12.2299 1.62651 12.4025 1.69865 12.5576H0.847656C0.653488 12.5576 0.496094 12.715 0.496094 12.9092V14.3154V17.6904C0.496094 17.8846 0.653488 18.042 0.847656 18.042H2.95703H4.36328H6.47266H8.08984H9.49609H11.1133H12.5195H14.7109C14.9051 18.042 15.0625 17.8846 15.0625 17.6904C15.0625 17.4963 14.9051 17.3389 14.7109 17.3389H12.8711V16.6357H16.2461C16.3717 16.6357 16.4878 16.5687 16.5505 16.46C16.6134 16.3512 16.6134 16.2172 16.5505 16.1084L14.3778 12.3451ZM10.6085 1.6981C10.7611 1.6981 10.8962 1.59977 10.9431 1.45468L11.0905 0.998383L11.238 1.45468C11.2849 1.59977 11.42 1.6981 11.5725 1.6981H12.0569L11.6644 1.98195C11.5405 2.07153 11.4887 2.23093 11.5363 2.37619L11.6857 2.83266L11.2977 2.54951C11.236 2.50444 11.1632 2.48191 11.0905 2.48191C11.0177 2.48191 10.945 2.50444 10.8832 2.54951L10.4952 2.83266L10.6446 2.37619C10.6922 2.23093 10.6404 2.07153 10.5165 1.98195L10.1241 1.6981H10.6085ZM10.7617 16.2842V17.3389H9.84766V15.792H10.7617V16.2842ZM6.12109 15.4404V17.3389H4.71484V14.667H6.12109V15.4404ZM6.12109 13.9639H4.71484V13.2607H6.12109V13.9639ZM3.30859 13.2607H3.66016H4.01172V13.9639H3.30859V13.2607ZM4.52148 11.5381C4.80256 11.5381 5.03125 11.7668 5.03125 12.0479C5.03125 12.3289 4.80256 12.5576 4.52148 12.5576H4.36328H4.01172V12.0479C4.01172 11.7668 4.24041 11.5381 4.52148 11.5381ZM2.28906 12.0479C2.28906 11.7668 2.51775 11.5381 2.79883 11.5381C3.0799 11.5381 3.30859 11.7668 3.30859 12.0479V12.5576H2.95703H2.79883C2.51775 12.5576 2.28906 12.3289 2.28906 12.0479ZM1.19922 13.2607H2.60547V13.9639H1.19922V13.2607ZM1.19922 14.667H2.60547V17.3389H1.19922V14.667ZM3.30859 17.3389V14.667H4.01172V17.3389H3.30859ZM6.82422 15.792H7.73828V17.3389H6.82422V15.792ZM8.44141 17.3389V15.792H9.14453V17.3389H8.44141ZM11.4648 17.3389V16.6357H12.168V17.3389H11.4648Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.897 9.70949C13.9624 9.6441 14 9.5534 14 9.46094C14 9.36812 13.9624 9.27777 13.897 9.21238C13.8316 9.14664 13.7409 9.10938 13.6484 9.10938C13.5556 9.10938 13.4653 9.14664 13.3999 9.21238C13.3345 9.27777 13.2969 9.36812 13.2969 9.46094C13.2969 9.5534 13.3345 9.6441 13.3999 9.70949C13.4653 9.77488 13.5556 9.8125 13.6484 9.8125C13.7409 9.8125 13.8316 9.77488 13.897 9.70949Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24061",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0419922)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const Christmas = (Chirstmas);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/Flower.jsx



const Flower = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24076)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.74599 12.2099C4.41068 11.0187 3.81988 9.54109 3.55927 8.5115C3.27429 7.38503 3.31011 6.5308 3.3105 6.52229L3.02964 6.50879L2.7487 6.49512C2.74691 6.53259 2.70754 7.42623 3.00907 8.62952C3.28765 9.74145 3.92366 11.338 5.37157 12.6297L5.74599 12.2099Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.2484 6.49512L15.6865 6.52247C15.6868 6.52785 15.7111 7.06996 15.5742 7.86744L16.1286 7.96265C16.2759 7.10494 16.2496 6.51962 16.2484 6.49512Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.7425 13.2431C11.7465 13.202 11.7485 13.1604 11.7485 13.1185C11.7485 12.8682 11.6743 12.6235 11.5352 12.4154C11.3962 12.2072 11.1985 12.045 10.9672 11.9492C10.736 11.8534 10.4815 11.8284 10.236 11.8772C9.99049 11.926 9.76497 12.0466 9.58797 12.2236L9.49854 12.313L9.4091 12.2236C9.2321 12.0466 9.00658 11.926 8.76107 11.8772C8.51557 11.8284 8.26109 11.8534 8.02982 11.9492C7.79856 12.045 7.6009 12.2072 7.46183 12.4154C7.32276 12.6235 7.24853 12.8682 7.24854 13.1185C7.24854 13.1603 7.25054 13.2018 7.25455 13.2429C6.91748 13.0687 6.59403 12.8693 6.28698 12.6465L5.9558 13.1011C6.484 13.4829 7.05491 13.8017 7.65698 14.0512L7.87583 14.27C7.78893 14.3575 7.69329 14.4358 7.59039 14.5038C7.37429 14.6474 7.13502 14.7569 6.88164 14.8729C6.71289 14.9503 6.53824 15.0301 6.36836 15.122C5.79827 15.4305 5.43644 15.816 5.29297 16.2679L5.8291 16.4381C5.92698 16.1298 6.19845 15.8535 6.63601 15.6168C6.78939 15.5338 6.94791 15.4613 7.11575 15.3844C7.37773 15.2645 7.64865 15.1405 7.90163 14.9725C7.95636 14.9361 8.00923 14.8979 8.06026 14.8577L7.59707 16.1648C7.54448 16.3133 7.52828 16.4723 7.54985 16.6283C7.57143 16.7843 7.63013 16.9329 7.72104 17.0616C7.81195 17.1902 7.9324 17.2952 8.07228 17.3676C8.21217 17.4401 8.36739 17.4779 8.52492 17.4779H9.21514V16.9154H8.52492C8.4574 16.9154 8.39087 16.8992 8.33091 16.8681C8.27096 16.8371 8.21933 16.7921 8.18037 16.737C8.14141 16.6818 8.11625 16.6181 8.10701 16.5513C8.09777 16.4844 8.10471 16.4162 8.12727 16.3526L8.60637 15.0006L9.29966 15.6938C9.32577 15.72 9.35678 15.7407 9.3909 15.7548C9.42503 15.769 9.4616 15.7762 9.49854 15.7762C9.53547 15.7762 9.57204 15.769 9.60617 15.7548C9.64029 15.7407 9.6713 15.72 9.69741 15.6938L10.3907 15.0006L10.8698 16.3526C10.8924 16.4162 10.8993 16.4844 10.8901 16.5513C10.8808 16.6181 10.8557 16.6818 10.8167 16.737C10.7777 16.7921 10.7261 16.8371 10.6662 16.8681C10.6062 16.8992 10.5397 16.9154 10.4722 16.9154H9.77764V17.4779H10.4722C10.6297 17.4779 10.7849 17.4401 10.9248 17.3676C11.0647 17.2952 11.1852 17.1902 11.2761 17.0616C11.367 16.9329 11.4257 16.7843 11.4473 16.6282C11.4688 16.4722 11.4526 16.3132 11.4 16.1647L10.9368 14.8577C10.9876 14.8975 11.0405 14.9358 11.0954 14.9724C11.3486 15.1404 11.6193 15.2644 11.8813 15.3843C12.0492 15.4611 12.2077 15.5337 12.3611 15.6167C12.7986 15.8534 13.0701 16.1297 13.168 16.438L13.7041 16.2678C13.5606 15.8159 13.1988 15.4304 12.6287 15.1219C12.4588 15.03 12.2842 14.9501 12.1154 14.8728C11.8621 14.7568 11.6227 14.6474 11.4066 14.5037C11.3037 14.4358 11.208 14.3575 11.1211 14.27L11.3401 14.0511C14.4127 12.7664 15.5753 10.35 16.009 8.54345L15.4621 8.41211C15.0894 9.9644 14.1384 12.0008 11.7425 13.2431ZM9.49854 15.0972L8.01698 13.6157C7.95049 13.5507 7.89755 13.4731 7.86124 13.3875C7.82492 13.3019 7.80595 13.2099 7.80543 13.1169C7.8049 13.0239 7.82283 12.9317 7.85818 12.8457C7.89352 12.7597 7.94558 12.6816 8.01133 12.6158C8.07709 12.55 8.15524 12.498 8.24125 12.4626C8.32727 12.4273 8.41944 12.4093 8.51244 12.4098C8.60544 12.4103 8.69741 12.4293 8.78303 12.4656C8.86864 12.5019 8.94621 12.5548 9.01123 12.6213L9.29952 12.9096C9.32563 12.9357 9.35664 12.9564 9.39076 12.9706C9.42489 12.9847 9.46146 12.992 9.49839 12.992C9.53533 12.992 9.5719 12.9847 9.60603 12.9706C9.64015 12.9564 9.67116 12.9357 9.69727 12.9096L9.98555 12.6213C10.1174 12.4895 10.2963 12.4154 10.4827 12.4154C10.6692 12.4154 10.8481 12.4894 10.9799 12.6213C11.1118 12.7532 11.1859 12.932 11.1859 13.1185C11.1859 13.305 11.1118 13.4838 10.98 13.6157L9.49854 15.0972Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.29073 6.20204C3.53438 6.53503 3.84835 6.8103 4.21035 7.00831C4.16269 7.15661 4.14634 7.31318 4.16233 7.46812C4.17831 7.62306 4.22629 7.773 4.30321 7.90844C4.38014 8.04388 4.48435 8.16188 4.60924 8.25497C4.73412 8.34805 4.87698 8.4142 5.02875 8.44923C5.08622 8.69701 5.22582 8.91806 5.42485 9.07645C5.62388 9.23483 5.87064 9.32123 6.125 9.32159H6.12594C6.1437 10.0023 6.38636 10.6579 6.81603 11.1861C6.85436 11.2334 6.90703 11.267 6.96611 11.2819C7.0252 11.2967 7.0875 11.292 7.14365 11.2683C7.75265 11.0115 8.26394 10.5673 8.6033 10.0001C8.7131 10.1454 8.85657 10.2619 9.02135 10.3395C9.18614 10.4171 9.36731 10.4534 9.54928 10.4455C9.73124 10.4375 9.90855 10.3855 10.0659 10.2938C10.2233 10.2021 10.3561 10.0736 10.4528 9.91925C10.7902 10.5246 11.3206 10.9995 11.9594 11.2684C12.0155 11.292 12.0778 11.2967 12.1369 11.2819C12.196 11.2671 12.2486 11.2335 12.287 11.1861C12.7178 10.6568 12.9606 9.99933 12.9772 9.31702C13.2131 9.29511 13.436 9.1995 13.6145 9.04375C13.7929 8.88799 13.9178 8.68001 13.9714 8.4493C14.1245 8.41398 14.2684 8.34702 14.394 8.25273C14.5196 8.15845 14.6241 8.03892 14.7007 7.90183C14.7773 7.76474 14.8244 7.61313 14.839 7.45675C14.8535 7.30037 14.8351 7.14268 14.785 6.99383C15.202 6.75972 15.5525 6.42323 15.8034 6.0161C16.0542 5.60897 16.1972 5.14463 16.2189 4.6669C16.221 4.61801 16.2104 4.56939 16.188 4.52587C16.1656 4.48235 16.1322 4.44542 16.0912 4.41874C15.706 4.16915 15.2657 4.01734 14.8085 3.9765C14.8731 3.72458 14.8485 3.45805 14.7388 3.22224C14.6291 2.98643 14.4411 2.7959 14.2068 2.68303C14.3644 2.4853 14.4759 2.25486 14.5332 2.00854C14.5905 1.76221 14.592 1.50621 14.5378 1.25921C14.4952 1.06801 14.4196 0.885712 14.3143 0.720541C14.2921 0.685765 14.2626 0.656285 14.2278 0.634189C14.193 0.612093 14.1537 0.597921 14.1128 0.592678C13.6918 0.538984 13.266 0.645757 12.9202 0.891752C12.5743 1.13775 12.3337 1.50493 12.2463 1.92025C12.0101 2.07973 11.8429 2.32274 11.7785 2.60042C11.6656 2.62655 11.5574 2.66994 11.4577 2.72905C11.497 2.4502 11.4304 2.16674 11.2709 1.93462C11.1115 1.7025 10.8708 1.53857 10.5964 1.47517C10.5392 1.22721 10.3997 1.00596 10.2006 0.847523C10.0014 0.689088 9.75448 0.602831 9.50002 0.602831C9.24555 0.602831 8.9986 0.689088 8.79947 0.847523C8.60034 1.00596 8.4608 1.22721 8.40361 1.47517C8.12955 1.53856 7.88912 1.70223 7.72966 1.93397C7.5702 2.16571 7.50324 2.44874 7.54197 2.72737C7.44234 2.66849 7.33416 2.62546 7.22131 2.59982C7.15677 2.32237 6.98967 2.0796 6.75355 1.92025C6.66614 1.50493 6.42558 1.13775 6.07972 0.891752C5.73387 0.645757 5.30808 0.538984 4.88707 0.592678C4.84618 0.597935 4.80694 0.612113 4.77213 0.634207C4.73732 0.656302 4.70779 0.685775 4.68563 0.720541C4.49642 1.01798 4.40498 1.36714 4.4241 1.71914C4.44323 2.07114 4.57197 2.40834 4.79229 2.68353C4.5587 2.79633 4.37124 2.98636 4.26163 3.22146C4.15202 3.45657 4.12699 3.72232 4.19077 3.97376C3.7229 4.01017 3.27157 4.16308 2.87793 4.41856C2.83689 4.44524 2.80354 4.48217 2.78115 4.52569C2.75876 4.56922 2.74812 4.61783 2.75027 4.66673C2.77442 5.22073 2.96252 5.75508 3.29073 6.20204ZM5.56249 8.19659C5.56249 8.122 5.53286 8.05046 5.48012 7.99772C5.42737 7.94497 5.35584 7.91534 5.28124 7.91534C5.13206 7.91534 4.98899 7.85608 4.8835 7.75059C4.77801 7.6451 4.71874 7.50203 4.71874 7.35284C4.71874 7.20366 4.77801 7.06058 4.8835 6.95509C4.98899 6.84961 5.13206 6.79034 5.28124 6.79034C5.35584 6.79034 5.42737 6.76071 5.48012 6.70797C5.53286 6.65522 5.56249 6.58368 5.56249 6.50909C5.56249 6.35991 5.62176 6.21683 5.72725 6.11134C5.83274 6.00586 5.97581 5.94659 6.125 5.94659C6.27418 5.94659 6.41725 6.00586 6.52274 6.11134C6.62823 6.21683 6.6875 6.35991 6.6875 6.50909C6.6875 6.58368 6.71713 6.65522 6.76987 6.70797C6.82262 6.76071 6.89415 6.79034 6.96875 6.79034C6.97824 6.79034 6.98773 6.79059 6.99715 6.79108C7.06176 7.10492 7.23152 7.38733 7.47837 7.59162C7.43286 7.68838 7.36076 7.77019 7.2705 7.82751C7.18024 7.88483 7.07553 7.9153 6.96861 7.91534C6.89401 7.91534 6.82248 7.94497 6.76973 7.99772C6.71699 8.05046 6.68736 8.122 6.68736 8.19659C6.68736 8.34578 6.62809 8.48885 6.5226 8.59434C6.41711 8.69983 6.27404 8.75909 6.12486 8.75909C5.97567 8.75909 5.8326 8.69983 5.72711 8.59434C5.62162 8.48885 5.56235 8.34578 5.56235 8.19659H5.56249ZM7.53213 5.38409C7.34127 5.52736 7.18976 5.71658 7.09169 5.93415C6.98936 5.76287 6.84364 5.62164 6.66925 5.52472C6.89124 5.40138 7.06531 5.20697 7.16348 4.97276C7.25818 5.13274 7.38344 5.2725 7.53213 5.38409ZM11.8364 4.97276C11.9346 5.207 12.1087 5.40141 12.3308 5.52472C12.1564 5.62164 12.0106 5.76287 11.9083 5.93415C11.8102 5.71658 11.6587 5.52736 11.4679 5.38409C11.6165 5.27249 11.7417 5.13272 11.8364 4.97276ZM8.375 7.35284C8.17265 7.35289 7.97703 7.28022 7.82379 7.14808C7.67055 7.01593 7.5699 6.83312 7.54019 6.63297C7.51049 6.43281 7.5537 6.22865 7.66195 6.0577C7.7702 5.88674 7.93629 5.76038 8.12992 5.70166C8.18982 5.95776 8.32012 6.19202 8.50609 6.378C8.69207 6.56397 8.92633 6.69426 9.18243 6.75417C9.12965 6.92723 9.02272 7.0788 8.87737 7.18657C8.73203 7.29433 8.55594 7.35262 8.375 7.35284ZM10.8701 5.70166C11.0095 5.74401 11.1356 5.82176 11.2361 5.92734C11.3366 6.03292 11.408 6.16272 11.4434 6.30411C11.4788 6.44549 11.477 6.59364 11.4381 6.7341C11.3992 6.87457 11.3246 7.00257 11.2215 7.10563C11.1185 7.20869 10.9905 7.28329 10.85 7.32218C10.7095 7.36106 10.5614 7.36289 10.42 7.3275C10.2786 7.29211 10.1488 7.22069 10.0432 7.12022C9.93767 7.01974 9.85991 6.89363 9.81757 6.75417C10.0737 6.69426 10.3079 6.56397 10.4939 6.378C10.6799 6.19202 10.8102 5.95776 10.8701 5.70166ZM11.4688 4.25909C11.4685 4.44003 11.4102 4.61612 11.3025 4.76147C11.1947 4.90681 11.0431 5.01374 10.8701 5.06652C10.8102 4.81042 10.6799 4.57617 10.4939 4.39019C10.3079 4.20421 10.0737 4.07392 9.81757 4.01402C9.87629 3.82038 10.0026 3.6543 10.1736 3.54604C10.3446 3.43779 10.5487 3.39458 10.7489 3.42429C10.949 3.45399 11.1318 3.55464 11.264 3.70788C11.3961 3.86112 11.4688 4.05674 11.4688 4.25909ZM9.07672 4.65397C9.25377 4.55136 9.46209 4.51663 9.66285 4.55625C9.86361 4.59587 10.0431 4.70713 10.1679 4.8693C10.2927 5.03148 10.3543 5.2335 10.3412 5.43771C10.328 5.64192 10.2411 5.8344 10.0966 5.97926C9.95205 6.12412 9.75977 6.21149 9.55559 6.22509C9.35141 6.23868 9.14925 6.17756 8.98679 6.05314C8.82433 5.92871 8.71265 5.74945 8.67258 5.54878C8.6325 5.34811 8.66676 5.13971 8.76896 4.96243L8.28204 4.68076C8.21251 4.8011 8.16126 4.93113 8.12999 5.06656C7.99053 5.02422 7.86441 4.94647 7.76392 4.84089C7.66344 4.73532 7.59201 4.60551 7.55662 4.46412C7.52122 4.32273 7.52305 4.17458 7.56193 4.03411C7.60081 3.89364 7.67542 3.76564 7.77848 3.66257C7.88154 3.55951 8.00955 3.4849 8.15002 3.44602C8.29049 3.40714 8.43864 3.40531 8.58003 3.44071C8.72141 3.47611 8.85122 3.54753 8.9568 3.64801C9.06238 3.7485 9.14013 3.87462 9.18247 4.01409C9.04603 4.04558 8.91508 4.09736 8.79399 4.16768L9.07672 4.65397ZM7.12298 10.6566C6.82542 10.2191 6.67338 9.69894 6.68848 9.17007C6.82184 9.09266 6.93792 8.98876 7.02958 8.86476C7.12124 8.74077 7.18652 8.59931 7.22141 8.44912C7.33434 8.42303 7.44256 8.37963 7.54222 8.32045C7.50749 8.56742 7.55574 8.81893 7.6794 9.03551C7.80307 9.25209 7.99514 9.42148 8.22548 9.5171C7.98884 10.0047 7.60255 10.404 7.12298 10.6566ZM10.0625 9.32159C10.0625 9.47078 10.0032 9.61385 9.89775 9.71934C9.79226 9.82483 9.64918 9.8841 9.5 9.8841C9.35081 9.8841 9.20774 9.82483 9.10225 9.71934C8.99676 9.61385 8.9375 9.47078 8.9375 9.32159C8.9375 9.247 8.90787 9.17546 8.85512 9.12272C8.80238 9.06997 8.73084 9.04034 8.65625 9.04034C8.50706 9.04034 8.36399 8.98108 8.2585 8.87559C8.15301 8.7701 8.09375 8.62703 8.09375 8.47784C8.09375 8.32866 8.15301 8.18559 8.2585 8.0801C8.36399 7.97461 8.50706 7.91534 8.65625 7.91534V7.88722C8.99343 7.81793 9.29358 7.62758 9.5 7.3521C9.70642 7.62758 10.0066 7.81793 10.3438 7.88722V7.91534C10.4929 7.91534 10.636 7.97461 10.7415 8.0801C10.847 8.18559 10.9063 8.32866 10.9063 8.47784C10.9063 8.62703 10.847 8.7701 10.7415 8.87559C10.636 8.98108 10.4929 9.04034 10.3438 9.04034C10.2692 9.04034 10.1976 9.06997 10.1449 9.12272C10.0921 9.17546 10.0625 9.247 10.0625 9.32159ZM11.9799 10.6566C11.4869 10.3974 11.0929 9.98316 10.8588 9.47779C11.0664 9.37075 11.2356 9.20175 11.343 8.99424C11.4503 8.78672 11.4904 8.55096 11.4577 8.31964C11.5573 8.379 11.6656 8.42259 11.7785 8.44887C11.8179 8.61831 11.8959 8.77637 12.0064 8.91072C12.1169 9.04507 12.2569 9.15208 12.4155 9.2234C12.4194 9.73431 12.2674 10.2343 11.9799 10.6566ZM13.7188 7.91534C13.6442 7.91534 13.5726 7.94497 13.5199 7.99772C13.4671 8.05046 13.4375 8.122 13.4375 8.19659C13.4375 8.34578 13.3782 8.48885 13.2727 8.59434C13.1673 8.69983 13.0242 8.75909 12.875 8.75909C12.7258 8.75909 12.5827 8.69983 12.4773 8.59434C12.3718 8.48885 12.3125 8.34578 12.3125 8.19659C12.3125 8.122 12.2829 8.05046 12.2301 7.99772C12.1774 7.94497 12.1058 7.91534 12.0313 7.91534C11.9244 7.91509 11.8198 7.88453 11.7296 7.82722C11.6394 7.7699 11.5673 7.68819 11.5217 7.59155C11.7685 7.38724 11.9382 7.10486 12.0028 6.79105C12.0123 6.79059 12.0218 6.79034 12.0313 6.79034C12.1058 6.79034 12.1774 6.76071 12.2301 6.70797C12.2829 6.65522 12.3125 6.58368 12.3125 6.50909C12.3125 6.35991 12.3718 6.21683 12.4773 6.11134C12.5827 6.00586 12.7258 5.94659 12.875 5.94659C13.0242 5.94659 13.1673 6.00586 13.2727 6.11134C13.3782 6.21683 13.4375 6.35991 13.4375 6.50909C13.4375 6.58368 13.4671 6.65522 13.5199 6.70797C13.5726 6.76071 13.6442 6.79034 13.7188 6.79034C13.8679 6.79034 14.011 6.84961 14.1165 6.95509C14.222 7.06058 14.2813 7.20366 14.2813 7.35284C14.2813 7.50203 14.222 7.6451 14.1165 7.75059C14.011 7.85608 13.8679 7.91534 13.7188 7.91534ZM15.2246 5.8697C15.0267 6.14003 14.7711 6.3628 14.4762 6.52178C14.3336 6.39139 14.1597 6.29999 13.9714 6.25642C13.9356 6.10264 13.868 5.95806 13.7729 5.83203C13.6778 5.706 13.5573 5.60131 13.4192 5.52472C13.5573 5.44813 13.6778 5.34343 13.7729 5.2174C13.868 5.09137 13.9356 4.94679 13.9714 4.79301C14.159 4.74958 14.3324 4.65867 14.4748 4.52899C14.8824 4.51193 15.2869 4.60761 15.6437 4.80549C15.5985 5.19053 15.4541 5.55724 15.2246 5.8697ZM13.653 1.16885C13.736 1.15058 13.8208 1.14142 13.9059 1.14154C13.9899 1.3177 14.0268 1.5127 14.0127 1.70739C13.9987 1.90208 13.9343 2.08978 13.8258 2.25205C13.7276 2.0966 13.5928 1.96757 13.4332 1.87625C13.2736 1.78494 13.0941 1.73411 12.9103 1.72823C12.9871 1.5875 13.0931 1.4648 13.2212 1.36833C13.3493 1.27187 13.4965 1.20386 13.653 1.16885ZM12.0313 3.13409C12.1058 3.13409 12.1774 3.10446 12.2301 3.05171C12.2829 2.99897 12.3125 2.92743 12.3125 2.85284C12.3125 2.70366 12.3718 2.56058 12.4773 2.45509C12.5827 2.3496 12.7258 2.29034 12.875 2.29034C13.0242 2.29034 13.1673 2.3496 13.2727 2.45509C13.3782 2.56058 13.4375 2.70366 13.4375 2.85284C13.4375 2.92743 13.4671 2.99897 13.5199 3.05171C13.5726 3.10446 13.6442 3.13409 13.7188 3.13409C13.8679 3.13409 14.011 3.19335 14.1165 3.29884C14.222 3.40433 14.2813 3.54741 14.2813 3.69659C14.2813 3.84577 14.222 3.98885 14.1165 4.09434C14.011 4.19983 13.8679 4.25909 13.7188 4.25909C13.6442 4.25909 13.5726 4.28872 13.5199 4.34147C13.4671 4.39421 13.4375 4.46575 13.4375 4.54034C13.4375 4.68953 13.3782 4.8326 13.2727 4.93809C13.1673 5.04358 13.0242 5.10284 12.875 5.10284C12.7258 5.10284 12.5827 5.04358 12.4773 4.93809C12.3718 4.8326 12.3125 4.68953 12.3125 4.54034C12.3125 4.46575 12.2829 4.39421 12.2301 4.34147C12.1774 4.28872 12.1058 4.25909 12.0313 4.25909C12.0315 3.89801 11.8924 3.55076 11.6429 3.28976C11.7476 3.18996 11.8866 3.13422 12.0313 3.13409ZM8.65625 2.00909C8.73084 2.00909 8.80238 1.97946 8.85512 1.92671C8.90787 1.87397 8.9375 1.80243 8.9375 1.72784C8.9375 1.57865 8.99676 1.43558 9.10225 1.33009C9.20774 1.2246 9.35081 1.16534 9.5 1.16534C9.64918 1.16534 9.79226 1.2246 9.89775 1.33009C10.0032 1.43558 10.0625 1.57865 10.0625 1.72784C10.0625 1.80243 10.0921 1.87397 10.1449 1.92671C10.1976 1.97946 10.2692 2.00909 10.3438 2.00909C10.4439 2.00907 10.5422 2.03578 10.6285 2.08644C10.7149 2.13711 10.7861 2.2099 10.8349 2.29731C10.8838 2.38472 10.9084 2.48357 10.9062 2.58366C10.9041 2.68375 10.8752 2.78146 10.8227 2.86669C10.5732 2.83141 10.3189 2.8638 10.0862 2.96047C9.85349 3.05714 9.65104 3.21454 9.5 3.41622C9.34895 3.21454 9.1465 3.05714 8.91381 2.96047C8.68112 2.86381 8.42673 2.83142 8.17724 2.86669C8.12472 2.78146 8.0959 2.68375 8.09375 2.58365C8.0916 2.48356 8.11621 2.3847 8.16503 2.2973C8.21385 2.20989 8.28511 2.13709 8.37147 2.08643C8.45782 2.03576 8.55613 2.00907 8.65625 2.00909ZM5.01117 1.38197C5.02968 1.29895 5.05751 1.2183 5.09414 1.14154C5.17918 1.14133 5.26399 1.15049 5.34702 1.16885C5.50347 1.20394 5.65063 1.272 5.77867 1.3685C5.90672 1.46499 6.01271 1.58769 6.08956 1.7284C5.90563 1.73431 5.72595 1.78523 5.56627 1.8767C5.40659 1.96817 5.27177 2.0974 5.17363 2.25307C5.08879 2.12653 5.03063 1.98402 5.0027 1.83425C4.97477 1.68448 4.97765 1.53059 5.01117 1.38197ZM5.28124 3.13409C5.35584 3.13409 5.42737 3.10446 5.48012 3.05171C5.53286 2.99897 5.56249 2.92743 5.56249 2.85284C5.56249 2.70366 5.62176 2.56058 5.72725 2.45509C5.83274 2.3496 5.97581 2.29034 6.125 2.29034C6.27418 2.29034 6.41725 2.3496 6.52274 2.45509C6.62823 2.56058 6.6875 2.70366 6.6875 2.85284C6.6875 2.92743 6.71713 2.99897 6.76987 3.05171C6.82262 3.10446 6.89415 3.13409 6.96875 3.13409C7.11352 3.13365 7.25283 3.18932 7.35743 3.28941C7.10773 3.55045 6.96848 3.89785 6.96875 4.25909C6.89415 4.25909 6.82262 4.28872 6.76987 4.34147C6.71713 4.39421 6.6875 4.46575 6.6875 4.54034C6.6875 4.68953 6.62823 4.8326 6.52274 4.93809C6.41725 5.04358 6.27418 5.10284 6.125 5.10284C5.97581 5.10284 5.83274 5.04358 5.72725 4.93809C5.62176 4.8326 5.56249 4.68953 5.56249 4.54034C5.56249 4.46575 5.53286 4.39421 5.48012 4.34147C5.42737 4.28872 5.35584 4.25909 5.28124 4.25909C5.13206 4.25909 4.98899 4.19983 4.8835 4.09434C4.77801 3.98885 4.71874 3.84577 4.71874 3.69659C4.71874 3.54741 4.77801 3.40433 4.8835 3.29884C4.98899 3.19335 5.13206 3.13409 5.28124 3.13409ZM4.52707 4.53064C4.66911 4.65947 4.84178 4.7498 5.02861 4.79301C5.06438 4.9468 5.13201 5.09138 5.22713 5.21741C5.32224 5.34345 5.44273 5.44814 5.58081 5.52472C5.44273 5.6013 5.32224 5.70598 5.22713 5.83202C5.13201 5.95805 5.06438 6.10263 5.02861 6.25642C4.83525 6.30118 4.65718 6.39633 4.51252 6.53223C4.18959 6.36215 3.91282 6.11614 3.70603 5.81539C3.49924 5.51464 3.36863 5.16815 3.32543 4.80574C3.6926 4.60407 4.10874 4.5088 4.52707 4.53064Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.84375 3.41504H6.40625V3.97754H5.84375V3.41504Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.5938 3.41504H13.1562V3.97754H12.5938V3.41504Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.21875 2.29004H9.78125V2.85254H9.21875V2.29004Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.84375 7.07129H6.40625V7.63379H5.84375V7.07129Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.5938 7.07129H13.1562V7.63379H12.5938V7.07129Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.21875 8.19629H9.78125V8.75879H9.21875V8.19629Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24076",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_Flower = (Flower);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/TeddyBear.jsx



const TeddyBear = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24095)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.99258 4.15723C6.76407 4.15723 6.57812 4.34313 6.57812 4.57172C6.57816 4.80027 6.76407 4.98618 6.99258 4.98618C7.22114 4.98618 7.40708 4.80027 7.40708 4.57172C7.40708 4.34317 7.22117 4.15723 6.99258 4.15723Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.0004 4.15723C11.7719 4.15723 11.5859 4.34313 11.5859 4.57172C11.5859 4.80027 11.7718 4.98618 12.0004 4.98618C12.2289 4.98618 12.4149 4.80027 12.4149 4.57172C12.4149 4.34317 12.229 4.15723 12.0004 4.15723Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.49597 4.42188C8.92197 4.42188 8.30859 4.58514 8.30859 5.04337C8.30859 5.57852 8.70389 6.02744 9.2318 6.14176V7.12604C9.2318 7.27194 9.35003 7.39021 9.49597 7.39021C9.6419 7.39021 9.76017 7.27194 9.76017 7.12604V6.14176C10.2881 6.02744 10.6834 5.57852 10.6834 5.04337C10.6833 4.58514 10.07 4.42188 9.49597 4.42188ZM9.49597 5.64187C9.14447 5.64187 8.85637 5.39068 8.83787 5.07561C8.90555 5.0259 9.13663 4.95024 9.49597 4.95024C9.8553 4.95024 10.0864 5.0259 10.1541 5.07561C10.1356 5.39068 9.84746 5.64187 9.49597 5.64187Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.3342 13.8541C13.3375 13.8399 13.341 13.8257 13.3448 13.8116C13.3456 13.8084 13.3465 13.8052 13.3474 13.802C13.3504 13.791 13.3535 13.78 13.3568 13.769C13.3582 13.7642 13.3597 13.7593 13.3611 13.7545C13.3641 13.7451 13.3671 13.7357 13.3702 13.7263C13.372 13.7209 13.3738 13.7154 13.3756 13.7102C13.379 13.7003 13.3826 13.6905 13.3863 13.6807C13.3878 13.6766 13.3893 13.6723 13.3909 13.6682C13.3962 13.6545 13.4017 13.6408 13.4075 13.6273C13.4084 13.625 13.4095 13.6227 13.4105 13.6204C13.4157 13.6084 13.4211 13.5964 13.4266 13.5846C13.4276 13.5825 13.4285 13.5805 13.4295 13.5785C13.4637 13.5068 13.5053 13.4379 13.5553 13.3733C13.7862 13.0748 14.1712 12.9072 14.6998 12.8751C14.7376 12.8728 14.7722 12.8712 14.8053 12.8702C14.8336 12.8694 14.8619 12.8687 14.891 12.8687C14.9228 12.8687 14.954 12.8692 14.9849 12.8701C15.4427 12.8831 15.8015 12.9923 16.0524 13.1953C16.0602 13.2016 16.0689 13.2067 16.0772 13.2121C16.3518 13.4464 16.491 13.7999 16.4924 14.2714C16.4929 14.4171 16.611 14.5348 16.7566 14.5348C16.7568 14.5348 16.7571 14.5348 16.7574 14.5348C16.9033 14.5344 17.0211 14.4157 17.0208 14.2699C17.0192 13.7404 16.8648 13.2908 16.5734 12.9635C16.8852 12.5181 17.0037 12.0199 16.9254 11.4793C16.6821 9.79912 14.5695 8.19043 13.8482 7.68569C14.2535 7.09288 14.4582 6.36191 14.4582 5.49977C14.4582 4.64866 14.2665 3.83356 13.9055 3.11004C14.5003 2.87541 14.9154 2.29177 14.9154 1.63017C14.9154 0.753328 14.2021 0.0400391 13.3254 0.0400391C12.6868 0.0400391 12.1227 0.421205 11.8726 0.984763C11.1587 0.594597 10.3475 0.387525 9.49517 0.387525C8.64274 0.387525 7.83157 0.594562 7.11772 0.984728C6.86758 0.421205 6.30357 0.0400391 5.66492 0.0400391C4.78815 0.0400391 4.07483 0.753328 4.07483 1.6301C4.07483 2.2917 4.48992 2.87534 5.08473 3.10997C4.72367 3.83349 4.53204 4.64863 4.53204 5.4997C4.53204 6.36201 4.73689 7.09309 5.14232 7.68601C4.89604 7.85894 4.48468 8.16294 4.03847 8.55673C3.9291 8.65326 3.91866 8.82019 4.01524 8.92959C4.11178 9.039 4.2787 9.04941 4.3881 8.95283C4.83181 8.56119 5.2467 8.25775 5.47683 8.09713C5.61837 8.2445 5.77555 8.38091 5.94863 8.50596C5.93443 8.52023 5.92054 8.53486 5.90651 8.54927C5.89435 8.56175 5.88218 8.57413 5.87012 8.58671C5.84748 8.61041 5.82509 8.63446 5.80276 8.65857C5.79341 8.66866 5.78399 8.67858 5.77471 8.68874C5.74339 8.72305 5.71245 8.75778 5.68183 8.79294C5.67592 8.79973 5.67015 8.80672 5.66428 8.81351C5.63967 8.84206 5.61517 8.87074 5.59102 8.89982C5.58005 8.913 5.56933 8.9264 5.55843 8.93968C5.53958 8.96275 5.52077 8.98588 5.50221 9.00922C5.49026 9.02427 5.47848 9.03949 5.46667 9.05465C5.44944 9.07676 5.43229 9.09894 5.41534 9.12134C5.40332 9.13723 5.3914 9.15319 5.37948 9.16919C5.36299 9.19137 5.34661 9.21369 5.33037 9.23616C5.31862 9.2524 5.30692 9.26868 5.29528 9.28503C5.279 9.30798 5.2629 9.33115 5.24687 9.35435C5.2358 9.37039 5.22472 9.38635 5.21379 9.40248C5.19681 9.42755 5.18011 9.45293 5.16344 9.47828C5.15392 9.49277 5.14428 9.50714 5.13486 9.5217C5.1125 9.55636 5.0905 9.59131 5.06866 9.62647C5.06515 9.63216 5.06149 9.63779 5.05794 9.64348C5.03326 9.68356 5.009 9.72403 4.9851 9.76477C4.97648 9.77943 4.96812 9.7943 4.95964 9.809C4.9441 9.83593 4.92863 9.86282 4.91345 9.88996C4.90385 9.90716 4.89443 9.92449 4.88494 9.94178C4.87115 9.96692 4.85744 9.99213 4.84394 10.0175C4.83428 10.0357 4.82478 10.0539 4.81529 10.0721C4.80232 10.097 4.78949 10.122 4.77679 10.1471C4.76741 10.1657 4.75813 10.1842 4.74892 10.2029C4.73629 10.2283 4.72392 10.254 4.71158 10.2797C4.70279 10.298 4.69404 10.3163 4.68542 10.3347C4.67266 10.3618 4.66025 10.3892 4.64781 10.4165C4.64007 10.4336 4.6322 10.4506 4.6246 10.4678C4.61005 10.5005 4.59584 10.5335 4.58178 10.5666C4.57672 10.5785 4.57145 10.5903 4.56642 10.6022C4.54761 10.647 4.52926 10.6921 4.51133 10.7373C4.50612 10.7505 4.50113 10.7638 4.49596 10.777C4.48327 10.8096 4.47069 10.8422 4.45845 10.8749C4.45184 10.8927 4.44548 10.9105 4.43901 10.9283C4.42857 10.957 4.4182 10.9856 4.40807 11.0145C4.40143 11.0335 4.39489 11.0526 4.38839 11.0717C4.37882 11.0997 4.36944 11.1278 4.36019 11.1559C4.35383 11.1754 4.3475 11.1948 4.34131 11.2144C4.33231 11.2427 4.32345 11.2712 4.31477 11.2997C4.30893 11.3189 4.30303 11.3381 4.29733 11.3574C4.28854 11.3871 4.28 11.4169 4.27156 11.4468C4.26643 11.4649 4.26123 11.483 4.25623 11.5012C4.24688 11.5352 4.23795 11.5693 4.22913 11.6035C4.22547 11.6176 4.22167 11.6316 4.21805 11.6456C4.20578 11.6942 4.19394 11.7428 4.18262 11.7917C4.18121 11.7978 4.17994 11.8041 4.17854 11.8102C4.16876 11.8529 4.15931 11.8957 4.15024 11.9386C4.14686 11.9547 4.14373 11.9709 4.14043 11.987C4.13368 12.0202 4.127 12.0534 4.1207 12.0867C4.11719 12.1052 4.11388 12.1238 4.11051 12.1424C4.10485 12.1737 4.09926 12.2049 4.09399 12.2363C4.09075 12.2556 4.08762 12.2749 4.08449 12.2943C4.08203 12.3096 4.07936 12.3249 4.07697 12.3402C4.04016 12.3404 4.00395 12.3413 3.96802 12.3426C3.95698 12.343 3.94612 12.3435 3.93515 12.344C3.90393 12.3454 3.8731 12.3471 3.84258 12.3493C3.83077 12.3501 3.81885 12.3507 3.80714 12.3517C3.77357 12.3544 3.74052 12.3577 3.70783 12.3615C3.68814 12.3637 3.6687 12.3661 3.64933 12.3687C3.63534 12.3706 3.62152 12.3726 3.60774 12.3746C3.31035 12.4181 3.05051 12.5036 2.82948 12.6304C2.30572 11.8414 2.58064 10.8485 3.64922 9.67505C3.74745 9.56716 3.73964 9.40009 3.63178 9.30187C3.52389 9.20364 3.35679 9.21144 3.2586 9.31934C1.70563 11.0247 1.89618 12.2189 2.41713 12.9639C2.40324 12.9795 2.38904 12.9948 2.37575 13.0109C1.99842 13.4692 1.8804 14.1277 2.03449 14.9151C2.21765 15.8514 2.78406 18.0258 4.08843 18.0377C4.08892 18.0377 4.08942 18.0378 4.08991 18.0378C4.10067 18.0382 4.15642 18.04 4.25307 18.04C4.67737 18.04 5.8889 18.0056 7.5262 17.6695C8.13388 17.8332 8.79647 17.9185 9.49503 17.9185C10.1936 17.9185 10.8562 17.8332 11.4639 17.6695C13.1013 18.0056 14.3128 18.04 14.737 18.04C14.8336 18.04 14.8894 18.0382 14.9001 18.0378C14.9017 18.0378 14.9031 18.0375 14.9047 18.0374C15.3934 18.0317 15.8252 17.7243 16.1881 17.1225C16.5159 16.5788 16.7275 15.8881 16.8472 15.4046C16.8822 15.263 16.7959 15.1197 16.6543 15.0846C16.5126 15.0496 16.3693 15.136 16.3343 15.2776C15.9882 16.6753 15.4486 17.5097 14.8908 17.5097C14.8802 17.5097 14.8697 17.5093 14.8592 17.5087C14.8552 17.5085 14.8512 17.5082 14.8471 17.5078C14.8406 17.5073 14.8341 17.5068 14.8276 17.5061C14.8227 17.5056 14.8177 17.5049 14.8128 17.5043C14.8071 17.5035 14.8015 17.5026 14.7959 17.5017C14.7906 17.5008 14.7853 17.5 14.7799 17.4989C14.7744 17.4979 14.7689 17.4967 14.7634 17.4955C14.7582 17.4943 14.753 17.4932 14.7477 17.4919C14.7412 17.4903 14.7346 17.4884 14.7282 17.4866C14.7241 17.4854 14.7201 17.4844 14.716 17.4832C14.7055 17.48 14.6952 17.4766 14.6848 17.4728C14.6848 17.4728 14.6848 17.4728 14.6847 17.4728C14.0718 17.2514 13.6146 16.0724 13.3809 14.99C13.3809 14.9899 13.3809 14.9898 13.3809 14.9897C13.377 14.972 13.3733 14.9543 13.3696 14.9366C13.3678 14.9278 13.366 14.9192 13.3642 14.9106C13.3619 14.8991 13.3595 14.8878 13.3572 14.8764C13.3529 14.855 13.3487 14.8341 13.3447 14.8138C13.3405 14.7923 13.3366 14.7713 13.333 14.7503C13.332 14.7451 13.3311 14.74 13.3302 14.7348C13.3272 14.7178 13.3245 14.7011 13.3219 14.6844C13.3201 14.6726 13.3183 14.6608 13.3166 14.6488C13.3164 14.6469 13.3161 14.6451 13.3158 14.6433C13.2815 14.3985 13.2726 14.1185 13.3338 13.8545C13.3342 13.8543 13.3341 13.8542 13.3342 13.8541ZM13.3254 0.568405C13.9108 0.568405 14.3871 1.04467 14.3871 1.6301C14.3871 2.09813 14.0762 2.50771 13.6411 2.64359C13.4692 2.37478 13.2717 2.12214 13.0496 1.88934C12.8275 1.6565 12.5857 1.44911 12.3277 1.26791C12.4772 0.854192 12.8734 0.568405 13.3254 0.568405ZM4.60323 1.6301C4.60323 1.04467 5.07953 0.568405 5.66492 0.568405C6.11689 0.568405 6.51303 0.854192 6.66266 1.26791C6.40464 1.44907 6.16284 1.6565 5.94072 1.88934C5.71867 2.12218 5.52116 2.37481 5.34925 2.64359C4.91412 2.50771 4.60323 2.09813 4.60323 1.6301ZM5.82154 7.69019C5.8098 7.67739 5.7983 7.66449 5.78684 7.65148C5.7759 7.63914 5.76525 7.62666 5.7546 7.61415C5.29359 7.07133 5.06044 6.36335 5.06044 5.49973C5.0604 4.62648 5.28329 3.79647 5.69962 3.0836C5.70127 3.081 5.70324 3.07865 5.70478 3.07597C6.05308 2.48165 6.53683 1.97421 7.10394 1.60781C7.80232 1.15721 8.62431 0.915892 9.49514 0.915892C10.366 0.915892 11.1879 1.15721 11.8863 1.60781C12.4534 1.97417 12.9372 2.48162 13.2855 3.07597C13.2871 3.07865 13.289 3.081 13.2907 3.0836C13.707 3.79647 13.9298 4.62651 13.9298 5.49973C13.9298 6.36335 13.6967 7.07137 13.2357 7.61415C13.225 7.62666 13.2143 7.63914 13.2034 7.65152C13.192 7.66449 13.1805 7.67736 13.1688 7.69015C12.9724 7.90373 12.736 8.09238 12.4637 8.25178C12.4633 8.25202 12.463 8.25224 12.4626 8.25248C12.4624 8.25259 12.4623 8.25269 12.4621 8.25276C12.4265 8.27357 12.3904 8.294 12.3536 8.31386C12.3415 8.32033 12.3293 8.32677 12.317 8.33317C12.2889 8.34793 12.2603 8.36224 12.2316 8.37641C11.6065 8.68276 10.813 8.86129 9.89508 8.90105C9.8428 8.90323 9.79045 8.9053 9.7373 8.9066C9.72411 8.90695 9.71079 8.90709 9.69757 8.90738C9.6307 8.90875 9.56341 8.9097 9.4951 8.9097C9.4268 8.9097 9.35954 8.90875 9.29264 8.90738C9.27942 8.90709 9.26609 8.90695 9.25291 8.9066C9.19975 8.9053 9.14737 8.90323 9.09513 8.90105C8.17723 8.86125 7.38375 8.68276 6.75863 8.37641C6.72987 8.3622 6.70126 8.3479 6.67317 8.33317C6.6609 8.32677 6.6487 8.32033 6.63657 8.31386C6.5998 8.29404 6.56372 8.27361 6.52811 8.25276C6.52797 8.25266 6.52783 8.25255 6.52765 8.25248C6.52727 8.25227 6.52692 8.25202 6.52649 8.25181C6.25431 8.09245 6.01796 7.90376 5.82154 7.69019ZM4.30535 17.4729C4.30531 17.4729 4.30531 17.4729 4.30528 17.4729C4.29491 17.4767 4.28453 17.4801 4.27409 17.4833C4.26998 17.4845 4.26597 17.4855 4.26189 17.4867C4.25542 17.4885 4.24892 17.4904 4.24238 17.492C4.23711 17.4933 4.23183 17.4944 4.22663 17.4956C4.22118 17.4968 4.21566 17.498 4.21018 17.499C4.2048 17.5 4.19946 17.5009 4.19415 17.5018C4.18856 17.5027 4.18293 17.5036 4.17731 17.5044C4.17235 17.505 4.16736 17.5057 4.16247 17.5062C4.156 17.5069 4.14946 17.5075 4.14292 17.5079C4.13892 17.5083 4.13487 17.5086 4.1309 17.5088C4.12035 17.5094 4.10984 17.5098 4.09922 17.5098C3.34737 17.5098 2.79647 16.0574 2.55308 14.8138C2.39804 14.0212 2.59291 13.5786 2.78374 13.3469C2.82906 13.2918 2.88018 13.2418 2.93632 13.1963C2.93681 13.1959 2.93734 13.1956 2.93783 13.1952C2.97116 13.1683 3.00642 13.143 3.04355 13.1193C3.0439 13.119 3.04429 13.1188 3.04464 13.1186C3.13664 13.0601 3.24021 13.0119 3.35496 12.9739C3.35732 12.9731 3.35967 12.9723 3.36203 12.9715C3.38298 12.9647 3.40436 12.9582 3.42608 12.952C3.43002 12.9509 3.43403 12.9498 3.43804 12.9488C3.45959 12.9428 3.48135 12.937 3.50364 12.9318C3.50557 12.9313 3.50758 12.9309 3.50951 12.9305C3.57458 12.9152 3.64286 12.903 3.71391 12.8934C3.72741 12.8916 3.74084 12.8897 3.75452 12.8881C3.7702 12.8862 3.78616 12.8846 3.80212 12.883C3.81903 12.8814 3.83604 12.8798 3.85327 12.8784C3.86768 12.8773 3.88217 12.8762 3.89676 12.8753C3.91757 12.8739 3.9387 12.8729 3.95997 12.872C3.97196 12.8715 3.98377 12.8708 3.9959 12.8705C4.02983 12.8694 4.06414 12.8688 4.09919 12.8688C4.1283 12.8688 4.1566 12.8695 4.18494 12.8702C4.21795 12.8713 4.25261 12.8729 4.29041 12.8752C4.81898 12.9073 5.20402 13.0749 5.43492 13.3733C5.69874 13.7143 5.72774 14.1711 5.68474 14.5587C5.68467 14.5593 5.6846 14.56 5.6845 14.5606C5.68292 14.5748 5.68126 14.5888 5.67951 14.6027C5.67926 14.6046 5.67901 14.6065 5.67877 14.6083C5.67715 14.6211 5.67546 14.6337 5.67367 14.6463C5.67325 14.6493 5.67279 14.6523 5.67233 14.6554C5.67072 14.6667 5.66906 14.678 5.66731 14.6891C5.6665 14.6942 5.66565 14.6993 5.66485 14.7044C5.6634 14.7134 5.66196 14.7225 5.66045 14.7315C5.65912 14.7393 5.65774 14.747 5.65634 14.7548C5.65528 14.7609 5.65423 14.767 5.65314 14.7729C5.65061 14.7868 5.64804 14.8004 5.6454 14.8139C5.64143 14.8341 5.63725 14.8551 5.63289 14.8765C5.63057 14.8879 5.62821 14.8992 5.62589 14.9107C5.6241 14.9193 5.62234 14.9279 5.62051 14.9367C5.61682 14.9544 5.61306 14.9721 5.60923 14.9898C5.60919 14.9899 5.60919 14.99 5.60919 14.9901C5.37544 16.0725 4.9183 17.2515 4.30535 17.4729ZM5.15265 17.4729C5.31244 17.2791 5.46097 17.036 5.59791 16.7436C5.60069 16.7458 5.60357 16.7478 5.60635 16.75C5.62115 16.7613 5.63626 16.7723 5.65117 16.7835C5.67121 16.7985 5.69111 16.8136 5.7115 16.8283C5.7296 16.8414 5.74813 16.8541 5.76648 16.867C5.78381 16.8791 5.8009 16.8915 5.81844 16.9034C6.04207 17.0559 6.28279 17.192 6.53824 17.3114C6.00105 17.3953 5.53181 17.4443 5.15265 17.4729ZM13.3391 16.7835C13.354 16.7723 13.3692 16.7613 13.3839 16.75C13.3867 16.7478 13.3896 16.7458 13.3924 16.7436C13.5293 17.036 13.6778 17.2791 13.8376 17.4729C13.4584 17.4443 12.9892 17.3953 12.452 17.3115C12.7073 17.192 12.9481 17.0559 13.1717 16.9035C13.1893 16.8915 13.2064 16.8792 13.2237 16.867C13.242 16.8541 13.2606 16.8414 13.2787 16.8283C13.2991 16.8136 13.319 16.7985 13.3391 16.7835ZM13.1996 12.975C13.1959 12.9792 13.1922 12.9833 13.1885 12.9876C13.1816 12.9957 13.1743 13.0033 13.1675 13.0115C13.1594 13.0215 13.1519 13.032 13.144 13.0422C13.1418 13.0449 13.1395 13.0475 13.1374 13.0503C13.1352 13.0531 13.1333 13.0562 13.1311 13.059C13.1129 13.0828 13.0953 13.1071 13.0785 13.1318C13.0751 13.1369 13.0717 13.1421 13.0683 13.1473C13.0516 13.1725 13.0354 13.1983 13.02 13.2245C13.0171 13.2294 13.0144 13.2345 13.0115 13.2394C12.9961 13.2664 12.9813 13.2937 12.9674 13.3216C12.9651 13.3262 12.9629 13.3309 12.9607 13.3354C12.9467 13.3641 12.9332 13.3931 12.9207 13.4228C12.919 13.4269 12.9173 13.4312 12.9156 13.4355C12.903 13.4658 12.8911 13.4965 12.88 13.5279C12.8787 13.5317 12.8775 13.5356 12.8761 13.5395C12.8651 13.5714 12.8548 13.6038 12.8453 13.6367C12.8443 13.6403 12.8434 13.644 12.8424 13.6477C12.833 13.681 12.8244 13.7148 12.8166 13.7492C12.8158 13.7528 12.8152 13.7565 12.8144 13.7602C12.8068 13.7947 12.7998 13.8296 12.7939 13.8652C12.7932 13.8692 12.7927 13.8733 12.7921 13.8774C12.7864 13.9127 12.7812 13.9483 12.7771 13.9846C12.7765 13.9895 12.7762 13.9945 12.7757 13.9994C12.7718 14.0349 12.7685 14.0708 12.7662 14.1073C12.7658 14.1136 12.7657 14.1201 12.7653 14.1264C12.7633 14.1618 12.7618 14.1973 12.7612 14.2334C12.7611 14.2419 12.7613 14.2507 12.7613 14.2592C12.7611 14.2935 12.7611 14.3279 12.7622 14.3629C12.7625 14.3747 12.7634 14.3867 12.7639 14.3985C12.7653 14.4308 12.7667 14.463 12.7691 14.4958C12.7703 14.5123 12.7722 14.5292 12.7737 14.5458C12.7763 14.5745 12.7786 14.6031 12.782 14.6322C12.7848 14.6563 12.7885 14.681 12.7919 14.7054C12.795 14.7277 12.7975 14.7497 12.801 14.7722C12.8084 14.8196 12.8168 14.8674 12.8263 14.9158C12.8299 14.9343 12.8337 14.9535 12.8377 14.973C12.8389 14.9788 12.8401 14.9847 12.8413 14.9906C12.8442 15.0053 12.8473 15.0202 12.8505 15.0353C12.8518 15.0416 12.8531 15.0479 12.8544 15.0543C12.8582 15.0724 12.8621 15.0908 12.8662 15.1096C12.8686 15.1209 12.8711 15.1324 12.8737 15.144C12.8754 15.152 12.8772 15.16 12.879 15.1681C12.9475 15.4766 13.0464 15.8545 13.1832 16.2344C13.1768 16.2396 13.1703 16.2449 13.1639 16.2502C12.2726 16.977 10.9497 17.3907 9.49514 17.3907C8.04061 17.3907 6.71768 16.9767 5.82642 16.2498C5.82003 16.2445 5.81352 16.2393 5.80716 16.234C5.94402 15.8538 6.04292 15.4758 6.11144 15.1672C6.11316 15.1595 6.11481 15.1518 6.1165 15.1442C6.1191 15.1323 6.1217 15.1204 6.12423 15.1088C6.12821 15.0903 6.13207 15.0722 6.13587 15.0543C6.13735 15.0473 6.13872 15.0406 6.14016 15.0337C6.14315 15.0192 6.14607 15.005 6.14895 14.991C6.15025 14.9846 6.15155 14.9782 6.15285 14.9718C6.15651 14.9537 6.16006 14.9359 6.16347 14.9186C6.16368 14.9175 6.16389 14.9164 6.1641 14.9153C6.17359 14.867 6.18196 14.8191 6.18934 14.7717C6.19279 14.7496 6.19529 14.7281 6.19831 14.7062C6.20172 14.6814 6.20555 14.6563 6.2084 14.6317C6.21174 14.6027 6.21406 14.5743 6.21663 14.5457C6.21814 14.529 6.22007 14.5119 6.2213 14.4954C6.22373 14.4626 6.22506 14.4304 6.22643 14.3982C6.22693 14.3863 6.22784 14.3743 6.22819 14.3625C6.22925 14.3274 6.22928 14.293 6.22907 14.2588C6.229 14.2502 6.22928 14.2415 6.22914 14.233C6.22858 14.1969 6.227 14.1613 6.22503 14.126C6.22468 14.1197 6.22457 14.1132 6.22415 14.1069C6.22183 14.0704 6.21852 14.0345 6.21466 13.9989C6.21413 13.994 6.21378 13.989 6.21322 13.9841C6.2091 13.9479 6.20393 13.9122 6.19824 13.8769C6.19757 13.8729 6.19708 13.8688 6.19641 13.8648C6.19047 13.8292 6.18351 13.7943 6.17595 13.7597C6.17514 13.7562 6.17451 13.7525 6.17366 13.7488C6.16597 13.7144 6.15725 13.6806 6.14793 13.6473C6.14691 13.6437 6.146 13.64 6.14498 13.6363C6.13556 13.6034 6.12522 13.571 6.11418 13.5391C6.11284 13.5353 6.11165 13.5314 6.11028 13.5275C6.09924 13.4961 6.08732 13.4654 6.07473 13.4351C6.07301 13.4309 6.07136 13.4266 6.0696 13.4225C6.05705 13.3928 6.04366 13.3637 6.02963 13.335C6.02738 13.3305 6.02523 13.3258 6.02295 13.3213C6.00896 13.2933 5.99416 13.266 5.97876 13.239C5.97594 13.2341 5.97317 13.2291 5.97032 13.2242C5.95492 13.1979 5.93878 13.1722 5.92201 13.1469C5.9186 13.1418 5.91526 13.1366 5.91178 13.1315C5.89494 13.1067 5.8774 13.0825 5.85926 13.0587C5.85708 13.0558 5.85515 13.0528 5.85297 13.0499C5.85082 13.0472 5.8485 13.0446 5.84636 13.0418C5.83841 13.0317 5.831 13.0211 5.8228 13.0112C5.81609 13.003 5.80874 12.9954 5.80189 12.9874C5.79819 12.9831 5.79436 12.9789 5.79056 12.9746C5.73709 12.9135 5.67947 12.8566 5.61753 12.8043C5.61703 12.8038 5.61654 12.8034 5.61605 12.803C5.59576 12.7859 5.57492 12.7694 5.55375 12.7532C5.55097 12.7511 5.5482 12.749 5.54542 12.7469C5.29402 12.5577 4.98035 12.434 4.60671 12.3772C4.60713 12.3746 4.60752 12.3719 4.60794 12.3693C4.61103 12.3504 4.61444 12.3316 4.61771 12.3127C4.62225 12.2864 4.62678 12.26 4.63163 12.2337C4.63532 12.2137 4.6393 12.1937 4.6432 12.1737C4.64805 12.1487 4.65294 12.1236 4.65807 12.0986C4.66225 12.0782 4.66668 12.0578 4.67108 12.0375C4.67635 12.013 4.6817 11.9884 4.68725 11.9639C4.69189 11.9435 4.69667 11.9231 4.70152 11.9026C4.70725 11.8783 4.71313 11.854 4.71914 11.8298C4.72416 11.8095 4.72933 11.7892 4.73454 11.7689C4.74076 11.7447 4.74719 11.7205 4.7537 11.6963C4.75911 11.6762 4.7646 11.6561 4.77018 11.6361C4.77693 11.6118 4.78393 11.5876 4.79096 11.5634C4.79669 11.5437 4.80246 11.5239 4.80833 11.5042C4.81571 11.4797 4.82338 11.4552 4.83101 11.4307C4.83695 11.4116 4.84289 11.3925 4.84901 11.3735C4.85716 11.3481 4.86567 11.3228 4.87414 11.2976C4.88015 11.2796 4.88606 11.2616 4.89221 11.2437C4.90178 11.216 4.91165 11.1885 4.92157 11.1609C4.92702 11.1457 4.93229 11.1304 4.93785 11.1153C4.95335 11.0729 4.96924 11.0308 4.98555 10.9888C4.98745 10.9839 4.98949 10.979 4.99139 10.9742C5.00605 10.9368 5.02092 10.8995 5.03618 10.8625C5.0423 10.8476 5.04873 10.8328 5.05495 10.818C5.06624 10.7911 5.07752 10.7643 5.08912 10.7376C5.09644 10.7208 5.10403 10.7041 5.11148 10.6873C5.12242 10.6628 5.13328 10.6383 5.14446 10.614C5.15248 10.5965 5.1607 10.5792 5.16886 10.5618C5.17986 10.5385 5.19083 10.5151 5.20208 10.4918C5.21059 10.4742 5.21931 10.4567 5.22796 10.4391C5.23924 10.4164 5.25056 10.3937 5.26206 10.371C5.27099 10.3535 5.27999 10.3361 5.28899 10.3187C5.30066 10.2963 5.31244 10.2739 5.32436 10.2516C5.33357 10.2344 5.34285 10.2172 5.3522 10.2C5.36436 10.1778 5.37663 10.1557 5.38901 10.1337C5.39847 10.1169 5.40785 10.1001 5.41745 10.0834C5.43025 10.0612 5.44318 10.0391 5.45619 10.0169C5.46572 10.0008 5.47518 9.98464 5.48481 9.96861C5.49849 9.9459 5.51237 9.92343 5.52622 9.90093C5.53554 9.88592 5.54472 9.8708 5.55414 9.8559C5.56926 9.83192 5.58465 9.80816 5.60002 9.78446C5.60852 9.77131 5.61696 9.75806 5.62558 9.74498C5.64463 9.71608 5.664 9.68757 5.68348 9.65909C5.68865 9.65153 5.69374 9.6438 5.69895 9.63628C5.72384 9.60024 5.74912 9.56456 5.77467 9.52922C5.78055 9.5211 5.78663 9.51312 5.79257 9.50504C5.81226 9.47811 5.83201 9.45128 5.85212 9.42481C5.86144 9.4125 5.87093 9.40052 5.88032 9.38832C5.8973 9.36631 5.91425 9.3443 5.93147 9.32257C5.94216 9.30911 5.95299 9.29589 5.96378 9.28257C5.98002 9.26249 5.99627 9.24242 6.01275 9.22262C6.02425 9.20881 6.03582 9.1952 6.04742 9.18156C6.06348 9.16261 6.07962 9.1437 6.09593 9.12499C6.10796 9.11121 6.12005 9.09754 6.13218 9.08393C6.14835 9.06572 6.16463 9.04765 6.18098 9.02972C6.19339 9.01615 6.20583 9.00268 6.21835 8.98929C6.2348 8.97164 6.2514 8.95413 6.26802 8.93677C6.28065 8.92362 6.29327 8.91051 6.30599 8.89753C6.32294 8.88024 6.33999 8.86315 6.35711 8.84613C6.3698 8.83351 6.38246 8.82093 6.39526 8.80848C6.40056 8.80331 6.40601 8.79825 6.41136 8.79308C6.41987 8.79758 6.42879 8.80173 6.43734 8.80623C6.67914 8.93269 6.94141 9.0403 7.22354 9.12893C7.22948 9.1308 7.23539 9.13269 7.24129 9.13452C7.29477 9.15112 7.34898 9.16704 7.40389 9.18226C7.41216 9.18455 7.42052 9.1868 7.42882 9.18909C7.48366 9.20406 7.53903 9.21851 7.59525 9.23208C7.60137 9.23356 7.60766 9.23493 7.61381 9.23641C7.84198 9.2909 8.08164 9.33432 8.33234 9.3667C8.35934 9.37018 8.3862 9.37387 8.41348 9.37714C8.45584 9.38216 8.49881 9.38663 8.54177 9.39102C8.57734 9.39468 8.61306 9.3982 8.64906 9.40146C8.68816 9.40495 8.7275 9.40818 8.76712 9.4112C8.80931 9.4144 8.85192 9.41718 8.89467 9.41982C8.93035 9.422 8.96596 9.42421 9.00203 9.42597C9.05326 9.4285 9.10511 9.43036 9.15707 9.43209C9.18636 9.43307 9.21533 9.43434 9.2449 9.43504C9.32748 9.43704 9.41076 9.43824 9.49524 9.43824C9.57973 9.43824 9.66305 9.43704 9.74563 9.43504C9.77512 9.43434 9.80406 9.43303 9.83331 9.43209C9.88538 9.43036 9.93727 9.4285 9.98856 9.42597C10.0246 9.42421 10.0602 9.422 10.0958 9.41982C10.1386 9.41718 10.1812 9.4144 10.2234 9.4112C10.263 9.40821 10.3023 9.40498 10.3414 9.40146C10.3774 9.39823 10.4131 9.39471 10.4487 9.39102C10.4917 9.38663 10.5346 9.38213 10.577 9.37714C10.6043 9.3739 10.6312 9.37021 10.6582 9.3667C10.9089 9.33432 11.1485 9.2909 11.3767 9.23641C11.3828 9.23493 11.3891 9.23356 11.3953 9.23208C11.4515 9.21844 11.5068 9.20399 11.5617 9.18909C11.57 9.1868 11.5784 9.18458 11.5866 9.18226C11.6415 9.16701 11.6958 9.15112 11.7493 9.13449C11.7552 9.13266 11.761 9.13076 11.7669 9.12893C12.0494 9.04016 12.312 8.93241 12.5541 8.8057C12.5622 8.80152 12.5706 8.79762 12.5786 8.79333C12.5945 8.80862 12.6104 8.82384 12.6261 8.83935C12.649 8.86192 12.6719 8.88456 12.6945 8.90766C12.7211 8.93483 12.7473 8.96261 12.7734 8.99052C12.7951 9.01369 12.8169 9.03686 12.8382 9.06048C12.8644 9.08949 12.8902 9.11916 12.9159 9.14887C12.9364 9.17256 12.957 9.19615 12.9772 9.22034C13.003 9.25124 13.0283 9.28281 13.0536 9.31442C13.0729 9.33857 13.0924 9.36248 13.1114 9.38705C13.1369 9.42006 13.1618 9.45388 13.1867 9.4876C13.2046 9.51182 13.2228 9.53576 13.2405 9.56037C13.2661 9.59613 13.2909 9.63283 13.3159 9.66939C13.332 9.69305 13.3485 9.71633 13.3644 9.74034C13.3913 9.78101 13.4174 9.82275 13.4436 9.86437C13.4567 9.88518 13.4701 9.9055 13.483 9.92656C13.5216 9.98963 13.5594 10.0537 13.5962 10.1189C13.6679 10.246 13.8291 10.2908 13.9561 10.2191C14.0832 10.1473 14.128 9.98615 14.0563 9.8591C14.0238 9.80165 13.9905 9.74515 13.9568 9.68915C13.9505 9.67874 13.9443 9.66834 13.938 9.658C13.9051 9.60411 13.8716 9.55088 13.8376 9.49836C13.8314 9.48876 13.825 9.47934 13.8188 9.46977C13.7839 9.41669 13.7486 9.36413 13.7126 9.31252C13.7116 9.31115 13.7107 9.30978 13.7098 9.3084C13.673 9.25592 13.6355 9.20441 13.5975 9.15347C13.5905 9.14405 13.5835 9.13463 13.5764 9.12524C13.5393 9.07592 13.5015 9.02729 13.4632 8.97945C13.4568 8.9714 13.4502 8.96345 13.4437 8.95547C13.4056 8.90829 13.3669 8.86174 13.3276 8.81604C13.3253 8.81333 13.323 8.81055 13.3207 8.80785C13.2801 8.76088 13.2388 8.71493 13.1971 8.66951C13.1891 8.66082 13.1811 8.65207 13.1731 8.64342C13.132 8.59926 13.0904 8.55574 13.0482 8.5131C13.046 8.51088 13.0439 8.50856 13.0418 8.50638C13.2148 8.38136 13.3719 8.24499 13.5134 8.09769C14.148 8.5415 16.1886 10.0736 16.4028 11.5558C16.4598 11.9506 16.3807 12.3046 16.1611 12.6317C16.0173 12.5492 15.8572 12.4841 15.6813 12.4366C15.6773 12.4355 15.6734 12.4345 15.6693 12.4335C15.6027 12.4159 15.5339 12.4008 15.4628 12.3882C15.4496 12.3859 15.4364 12.3835 15.423 12.3814C15.4048 12.3784 15.3864 12.3756 15.3679 12.373C15.3471 12.37 15.326 12.3674 15.3049 12.3648C15.2861 12.3626 15.2672 12.3604 15.2481 12.3585C15.2212 12.3557 15.1939 12.3533 15.1664 12.3512C15.1534 12.3502 15.1403 12.3493 15.1272 12.3485C15.0992 12.3467 15.0711 12.3452 15.0427 12.3441C15.0333 12.3437 15.024 12.3431 15.0145 12.3429C14.9811 12.3418 14.9474 12.341 14.9132 12.3409C14.9031 12.276 14.8922 12.2113 14.8804 12.1466C14.8779 12.1332 14.8751 12.1199 14.8725 12.1064C14.8622 12.0515 14.8514 11.9965 14.8398 11.9418C14.8347 11.918 14.8292 11.8944 14.8239 11.8707C14.814 11.8262 14.8039 11.7817 14.7932 11.7373C14.7869 11.7112 14.7802 11.6852 14.7737 11.6592C14.763 11.617 14.752 11.5749 14.7406 11.533C14.7334 11.5065 14.726 11.4801 14.7186 11.4538C14.7066 11.4118 14.6942 11.3699 14.6816 11.3281C14.6738 11.3025 14.6661 11.2769 14.6581 11.2514C14.6441 11.2072 14.6296 11.1632 14.6148 11.1192C14.6073 11.0967 14.5999 11.074 14.5922 11.0515C14.5731 10.9964 14.5531 10.9415 14.5327 10.8867C14.529 10.8768 14.5257 10.8668 14.5219 10.8568C14.5218 10.8563 14.5215 10.8559 14.5213 10.8554C14.5207 10.8536 14.52 10.8518 14.5194 10.85C14.4677 10.7136 14.3153 10.6448 14.1787 10.6965C14.0423 10.7482 13.9736 10.9007 14.0253 11.0372C14.0484 11.098 14.0703 11.1593 14.0917 11.2207C14.0983 11.2399 14.1045 11.2592 14.111 11.2784C14.1251 11.3203 14.139 11.3622 14.1523 11.4043C14.1596 11.4274 14.1666 11.4506 14.1737 11.4738C14.1856 11.5129 14.1971 11.5519 14.2083 11.5911C14.2151 11.6148 14.2218 11.6385 14.2282 11.6622C14.2394 11.7029 14.25 11.7436 14.2604 11.7845C14.2659 11.8061 14.2716 11.8276 14.2768 11.8492C14.2896 11.9018 14.3017 11.9544 14.3133 12.0071C14.3154 12.0168 14.3178 12.0264 14.3198 12.0361C14.3332 12.0984 14.3455 12.1608 14.3571 12.2233C14.3606 12.2423 14.3637 12.2614 14.3671 12.2804C14.3728 12.3129 14.3782 12.3453 14.3835 12.3778C14.0099 12.4346 13.6963 12.5583 13.4451 12.7475C13.4424 12.7495 13.4397 12.7516 13.4371 12.7536C13.4158 12.7698 13.3949 12.7864 13.3745 12.8036C13.3742 12.8039 13.3738 12.8042 13.3734 12.8045C13.311 12.8567 13.2533 12.9137 13.1996 12.975Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24095",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_TeddyBear = (TeddyBear);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/ValentineGift.jsx



const ValentineGift = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24114)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.8403 10.1651H12.5408C12.6072 10.0884 12.6755 10.0121 12.7377 9.93452C13.035 9.56141 13.1811 9.09011 13.147 8.61423C13.1128 8.13836 12.901 7.69273 12.5534 7.36586C12.1988 7.03615 11.7412 6.83892 11.2579 6.80746C10.7747 6.776 10.2954 6.91224 9.90098 7.19318C9.77104 7.28683 9.63744 7.39005 9.49654 7.50902C9.35394 7.38752 9.21838 7.2798 9.08563 7.18305C8.69204 6.90139 8.21292 6.76498 7.72999 6.79709C7.24707 6.82919 6.79023 7.02783 6.43738 7.35911C6.31139 7.47981 6.20231 7.61699 6.1131 7.76693C5.68834 7.60488 5.27945 7.40396 4.89163 7.16674C4.60149 6.99266 4.38831 6.71487 4.29521 6.38958C4.20212 6.06428 4.23605 5.71577 4.39016 5.41455C4.54931 5.10027 4.81244 4.85084 5.13477 4.7087C5.45709 4.56656 5.81872 4.54049 6.1581 4.63493C6.38652 4.70245 6.61134 4.78159 6.83169 4.87202C6.89563 4.89783 6.96682 4.89926 7.03173 4.87603C7.09665 4.8528 7.15077 4.80653 7.18382 4.74602C7.31066 4.51427 7.42991 4.31627 7.54944 4.14133C7.74921 3.8501 8.04334 3.63672 8.38219 3.53722C8.72104 3.43771 9.08384 3.45817 9.40935 3.59514C9.71888 3.7274 9.96734 3.97126 10.1054 4.27826C10.2434 4.58527 10.2609 4.93296 10.1544 5.25227C10.0559 5.54347 9.93838 5.82787 9.80254 6.10361C9.76964 6.17075 9.76476 6.2482 9.78897 6.31893C9.81318 6.38966 9.8645 6.44788 9.93163 6.48077C9.99876 6.51367 10.0762 6.51855 10.1469 6.49434C10.2177 6.47013 10.2759 6.41881 10.3088 6.35168C10.4557 6.05347 10.5828 5.74586 10.689 5.43086C10.8407 4.97857 10.8168 4.48576 10.622 4.05029C10.4272 3.61482 10.0757 3.26853 9.63744 3.08018C9.48379 3.01325 9.32229 2.966 9.15679 2.93955C9.08298 2.78156 9.018 2.61959 8.96216 2.45439C8.89632 2.26328 8.90549 2.05429 8.98782 1.86968C9.07015 1.68507 9.21951 1.5386 9.40569 1.45989C9.6014 1.37591 9.82019 1.36247 10.0247 1.42187C10.2292 1.48127 10.4068 1.60982 10.527 1.78558C10.613 1.91518 10.6923 2.04914 10.7644 2.18693C10.7968 2.24781 10.8504 2.29468 10.915 2.31864C10.9797 2.34259 11.0509 2.34196 11.1151 2.31686C11.2794 2.25274 11.4183 2.20436 11.5525 2.16752C11.7582 2.11027 11.9773 2.12569 12.173 2.2112C12.3687 2.29671 12.5289 2.44707 12.6266 2.63693C12.7175 2.81614 12.7377 3.023 12.6831 3.21641C12.6286 3.40983 12.5033 3.57565 12.3321 3.68093C12.03 3.86323 11.7088 4.01204 11.3744 4.12474C11.3395 4.13674 11.3073 4.15551 11.2796 4.17997C11.2519 4.20443 11.2293 4.23411 11.2131 4.2673C11.1969 4.30049 11.1873 4.33656 11.1851 4.37343C11.1828 4.41031 11.1878 4.44727 11.1998 4.48221C11.2118 4.51715 11.2306 4.54938 11.255 4.57707C11.2795 4.60475 11.3092 4.62735 11.3423 4.64357C11.3755 4.65979 11.4116 4.66931 11.4485 4.67159C11.4854 4.67387 11.5223 4.66887 11.5573 4.65686C11.9305 4.53081 12.2888 4.36445 12.626 4.16074C12.9173 3.98277 13.1311 3.7018 13.2248 3.37357C13.3186 3.04535 13.2856 2.69386 13.1323 2.38886C12.978 2.07955 12.7204 1.834 12.404 1.69482C12.0877 1.55565 11.7325 1.53164 11.4003 1.62696C11.3159 1.65058 11.2316 1.67758 11.1427 1.70852C11.0932 1.62414 11.0445 1.54624 10.9953 1.47311C10.8006 1.18821 10.513 0.979769 10.1817 0.883428C9.85034 0.787086 9.49582 0.808824 9.17873 0.944925C8.86581 1.08143 8.61526 1.33003 8.47631 1.64186C8.33736 1.9537 8.32005 2.30623 8.42779 2.63018C8.46116 2.73143 8.49819 2.83239 8.53888 2.93308C8.24756 2.97207 7.96762 3.07159 7.71705 3.22523C7.46649 3.37887 7.25084 3.58325 7.08398 3.82521C6.99398 3.95796 6.90398 4.10139 6.81173 4.26058C6.63623 4.19477 6.47198 4.13993 6.31448 4.09464C5.87839 3.97104 5.41368 3.99497 4.9926 4.16271C4.99627 3.94877 4.98688 3.73481 4.96448 3.52202C4.92483 3.1761 4.75687 2.85763 4.49379 2.62954C4.23071 2.40146 3.89165 2.28035 3.5436 2.29014C3.19195 2.30291 2.85548 2.43664 2.59102 2.66877C2.32656 2.90089 2.15032 3.21718 2.09207 3.56421C2.07773 3.6528 2.06563 3.74561 2.05551 3.84546C1.95398 3.85474 1.85863 3.86655 1.76723 3.88089C1.42025 3.93816 1.10391 4.11405 0.872169 4.37857C0.640432 4.64308 0.50767 4.97981 0.496538 5.3313C0.487754 5.67951 0.609501 6.01841 0.837858 6.28143C1.06621 6.54444 1.38467 6.71256 1.73066 6.75274C1.9418 6.77776 2.15424 6.79025 2.36685 6.79015C2.59894 6.78999 2.83081 6.77609 3.06126 6.74852C3.13536 6.73968 3.20292 6.70177 3.24908 6.64311C3.29523 6.58446 3.31619 6.50988 3.30735 6.43577C3.29851 6.36166 3.2606 6.2941 3.20194 6.24795C3.14329 6.2018 3.06871 6.18084 2.9946 6.18968C2.59719 6.2386 2.19539 6.24021 1.7976 6.19446C1.58957 6.17271 1.39757 6.07274 1.26046 5.91479C1.12334 5.75684 1.05134 5.5527 1.05904 5.34368C1.06595 5.12375 1.14892 4.91303 1.2938 4.74743C1.43869 4.58183 1.63651 4.4716 1.85357 4.43552C2.01203 4.41162 2.17162 4.39594 2.33169 4.38855C2.40052 4.3849 2.46561 4.3561 2.51461 4.30762C2.5636 4.25915 2.59309 4.19437 2.59748 4.12558C2.60901 3.94868 2.6256 3.79427 2.6481 3.65393C2.68411 3.43629 2.79409 3.23774 2.95948 3.09176C3.12487 2.94579 3.33555 2.86134 3.55598 2.85264C3.76369 2.84501 3.96662 2.91611 4.12417 3.05169C4.28171 3.18728 4.38224 3.37736 4.40563 3.58389C4.43825 3.88734 4.4423 4.19319 4.41773 4.49739C4.19506 4.67949 4.01359 4.90678 3.88532 5.16424C3.75187 5.43316 3.68361 5.72972 3.68606 6.02992C3.6885 6.33012 3.76158 6.62553 3.89938 6.89224L3.39313 6.80168C3.28554 6.7822 3.17515 6.78433 3.06839 6.80794C2.96163 6.83155 2.86063 6.87618 2.77129 6.93921C2.68027 7.00264 2.60278 7.08355 2.54334 7.17722C2.4839 7.2709 2.4437 7.37547 2.42507 7.48483L0.790444 16.8668C0.752261 17.0856 0.801896 17.3106 0.928579 17.4931C1.05526 17.6755 1.24877 17.8006 1.46713 17.8413L2.55782 18.0359C2.57417 18.0387 2.59073 18.0401 2.60732 18.0402C2.67352 18.0401 2.73759 18.0168 2.78827 17.9742C2.83894 17.9316 2.87296 17.8725 2.88435 17.8073L3.57932 13.8214C3.59215 13.7479 3.57525 13.6723 3.53234 13.6112C3.48944 13.5502 3.42403 13.5087 3.35052 13.4959C3.27701 13.483 3.20142 13.4999 3.14036 13.5428C3.07931 13.5857 3.03781 13.6511 3.02498 13.7246L2.37866 17.4327L1.56529 17.2875C1.4931 17.2737 1.42931 17.2318 1.38785 17.1711C1.34638 17.1104 1.3306 17.0358 1.34394 16.9635L2.97913 7.58271C2.98527 7.54637 2.99858 7.51162 3.01828 7.48048C3.03798 7.44933 3.06368 7.42242 3.09388 7.4013C3.12262 7.38094 3.15514 7.36652 3.18953 7.35889C3.22391 7.35126 3.25948 7.35057 3.29413 7.35686L4.10976 7.50227L3.80685 9.24068C3.79514 9.31366 3.81264 9.38832 3.85555 9.44851C3.89847 9.5087 3.96335 9.54957 4.03617 9.56228C4.10899 9.575 4.18388 9.55853 4.24466 9.51645C4.30543 9.47437 4.34719 9.41006 4.36091 9.33743L4.65032 7.67805C5.04787 7.91841 5.46572 8.12348 5.89907 8.2909C5.82967 8.5737 5.82582 8.86863 5.88782 9.15316C5.94983 9.43768 6.07604 9.70426 6.25682 9.93255C6.31898 10.0119 6.38676 10.0886 6.45369 10.1663H4.15279C4.0782 10.1663 4.00666 10.1959 3.95391 10.2486C3.90117 10.3014 3.87154 10.3729 3.87154 10.4475V17.1964C3.87154 17.4202 3.96043 17.6348 4.11867 17.793C4.2769 17.9513 4.49151 18.0402 4.71529 18.0402H14.2778C14.5016 18.0402 14.7162 17.9513 14.8744 17.793C15.0326 17.6348 15.1215 17.4202 15.1215 17.1964V10.4464C15.1215 10.3718 15.0919 10.3003 15.0392 10.2475C14.9864 10.1948 14.9149 10.1651 14.8403 10.1651ZM6.69782 9.58352C6.48478 9.32069 6.37949 8.98677 6.40325 8.64928C6.42701 8.31179 6.57803 7.99591 6.82579 7.76552C7.08269 7.52438 7.41526 7.3798 7.76682 7.35642C8.11839 7.33303 8.46718 7.43229 8.75376 7.63727C8.94538 7.7789 9.12966 7.93022 9.30585 8.09065C9.35711 8.13678 9.42354 8.16247 9.49251 8.16283C9.56147 8.1632 9.62817 8.13821 9.67991 8.09262C9.88129 7.91543 10.0559 7.77452 10.2298 7.64936C10.5171 7.44421 10.8665 7.34441 11.2188 7.3668C11.5712 7.38919 11.9051 7.53239 12.1642 7.77227C12.4098 8.00242 12.5598 8.3165 12.5845 8.65216C12.6092 8.98781 12.5068 9.32047 12.2975 9.58408C12.1337 9.78752 11.9585 9.98152 11.7727 10.1651H7.21335C7.03106 9.98078 6.85897 9.78662 6.69782 9.58352ZM4.43404 17.1964V10.7276H8.37154V17.4777H4.71529C4.6407 17.4777 4.56916 17.448 4.51641 17.3953C4.46367 17.3425 4.43404 17.271 4.43404 17.1964ZM14.559 17.1964C14.559 17.271 14.5294 17.3425 14.4767 17.3953C14.4239 17.448 14.3524 17.4777 14.2778 17.4777H10.6215V13.2589C10.6215 13.1843 10.5919 13.1128 10.5392 13.06C10.4864 13.0073 10.4149 12.9776 10.3403 12.9776C10.2657 12.9776 10.1942 13.0073 10.1414 13.06C10.0887 13.1128 10.059 13.1843 10.059 13.2589V17.4777H8.93404V10.7276H10.059V12.1339C10.059 12.2085 10.0887 12.28 10.1414 12.3328C10.1942 12.3855 10.2657 12.4151 10.3403 12.4151C10.4149 12.4151 10.4864 12.3855 10.5392 12.3328C10.5919 12.28 10.6215 12.2085 10.6215 12.1339V10.7276H14.559V17.1964Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.2192 5.85141L17.1896 5.84663L17.1846 5.81288C17.151 5.61034 17.0482 5.42573 16.8937 5.29053C16.7393 5.15533 16.5426 5.07792 16.3375 5.0715C16.132 5.06686 15.9321 5.13898 15.7769 5.27377C15.6217 5.40857 15.5224 5.59637 15.4982 5.8005C15.4684 6.07279 15.4771 6.34791 15.5238 6.61781C15.2736 6.45054 14.9902 6.33951 14.693 6.29236C14.3958 6.24521 14.0919 6.26308 13.8023 6.34472C13.6448 6.39028 13.4805 6.44484 13.305 6.51066C13.2128 6.35147 13.1228 6.20803 13.0328 6.07528C12.8587 5.81924 12.63 5.60507 12.363 5.44826C12.0961 5.29144 11.7976 5.1959 11.4893 5.16853C11.452 5.16424 11.4143 5.16742 11.3784 5.17791C11.3424 5.18839 11.3089 5.20595 11.2798 5.22957C11.2507 5.25319 11.2266 5.28238 11.2089 5.31543C11.1913 5.34849 11.1804 5.38473 11.177 5.42205C11.1735 5.45936 11.1776 5.49698 11.1889 5.53271C11.2002 5.56844 11.2185 5.60155 11.2428 5.6301C11.267 5.65865 11.2968 5.68206 11.3302 5.69896C11.3637 5.71586 11.4001 5.7259 11.4375 5.7285C11.6628 5.74982 11.8808 5.82021 12.076 5.93473C12.2712 6.04925 12.439 6.20513 12.5676 6.39141C12.6865 6.56634 12.8058 6.76434 12.9332 6.99609C12.9663 7.05661 13.0204 7.10287 13.0853 7.1261C13.1502 7.14933 13.2214 7.1479 13.2853 7.12209C13.5061 7.03161 13.7314 6.95248 13.9603 6.885C14.2997 6.79034 14.6614 6.81631 14.9838 6.95847C15.3062 7.10064 15.5693 7.3502 15.7283 7.66463C15.8732 7.95399 15.9091 8.28588 15.8294 8.59954C15.7496 8.91321 15.5596 9.18765 15.294 9.37266C15.2637 9.39383 15.2378 9.42078 15.2179 9.45197C15.198 9.48315 15.1844 9.51796 15.178 9.5544C15.1716 9.59083 15.1724 9.62818 15.1804 9.6643C15.1884 9.70042 15.2035 9.7346 15.2248 9.76488C15.246 9.79517 15.273 9.82096 15.3043 9.84078C15.3355 9.8606 15.3704 9.87407 15.4068 9.8804C15.4433 9.88673 15.4806 9.88581 15.5167 9.87769C15.5528 9.86957 15.5869 9.8544 15.6172 9.83306C15.9831 9.57771 16.2476 9.20186 16.3645 8.77124C16.4813 8.34061 16.4431 7.88261 16.2565 7.47731C16.4787 7.52608 16.7054 7.55181 16.9329 7.55409C17.0337 7.55414 17.1344 7.5486 17.2346 7.5375C17.4392 7.51445 17.6277 7.41533 17.7626 7.25982C17.8975 7.10431 17.9691 6.90377 17.9631 6.69797C17.9577 6.49214 17.8803 6.29472 17.7443 6.14005C17.6084 5.98538 17.4226 5.88324 17.2192 5.85141ZM17.1694 6.97838C16.8271 7.00975 16.482 6.97528 16.1527 6.87684C16.0538 6.54994 16.0211 6.20656 16.0568 5.86687C16.063 5.80101 16.0943 5.74007 16.1443 5.69671C16.1943 5.65334 16.259 5.63089 16.3251 5.634C16.3986 5.63626 16.4691 5.66396 16.5245 5.71237C16.5799 5.76079 16.6168 5.82693 16.6288 5.8995C16.6396 5.97175 16.6468 6.0445 16.6502 6.11747C16.6538 6.18639 16.6826 6.25159 16.7311 6.30065C16.7797 6.34971 16.8446 6.37921 16.9135 6.38353C16.9852 6.38803 17.0569 6.39478 17.1289 6.40631C17.2019 6.41816 17.2687 6.45485 17.3178 6.51019C17.3669 6.56553 17.3955 6.63612 17.3986 6.71006C17.4019 6.77559 17.3799 6.83988 17.3373 6.88976C17.2947 6.93965 17.2346 6.97135 17.1694 6.97838Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.27325 2.25937C6.31339 2.27978 6.35784 2.29025 6.40286 2.28991C6.44789 2.28956 6.49218 2.27841 6.532 2.2574C6.95387 2.04854 7.32747 1.75388 7.62887 1.39227C7.75735 1.23145 7.82066 1.0282 7.80623 0.822865C7.7918 0.617531 7.70068 0.425132 7.55097 0.283866C7.4018 0.14176 7.2075 0.0564951 7.00192 0.042927C6.79634 0.0293589 6.59252 0.0883478 6.42597 0.209616L6.40234 0.227335L6.37422 0.206803C6.20725 0.0874866 6.00409 0.0297314 5.79932 0.0433722C5.59456 0.0570129 5.40085 0.141206 5.25119 0.281616C5.10249 0.423543 5.0122 0.615919 4.99805 0.820988C4.9839 1.02606 5.0469 1.22901 5.17469 1.39002C5.47221 1.75735 5.84738 2.05423 6.27325 2.25937ZM5.64297 0.686897C5.69648 0.636444 5.76581 0.606074 5.83918 0.600947C5.91255 0.59582 5.98543 0.616252 6.04544 0.658772C6.10394 0.701804 6.1599 0.749054 6.21419 0.797991C6.2654 0.844086 6.33175 0.869778 6.40065 0.870193C6.46955 0.870608 6.5362 0.845716 6.58797 0.800241C6.64225 0.75271 6.69794 0.706585 6.75672 0.663554C6.81684 0.620416 6.88998 0.5993 6.96384 0.603756C7.03771 0.608212 7.10778 0.63797 7.16228 0.688022C7.21091 0.731986 7.24091 0.792869 7.24614 0.85822C7.25137 0.92357 7.23143 0.988449 7.1904 1.03958C6.97043 1.30355 6.7021 1.52311 6.39981 1.68646C6.09862 1.52518 5.83277 1.30523 5.61794 1.03958C5.57697 0.988432 5.55679 0.923714 5.56143 0.858343C5.56607 0.792971 5.59518 0.731751 5.64297 0.686897Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.2221 1.63569C17.1335 1.62135 17.0407 1.60925 16.9409 1.59913C16.9316 1.4976 16.9201 1.40225 16.9057 1.31085C16.8484 0.96388 16.6724 0.647561 16.4079 0.415875C16.1433 0.184189 15.8065 0.0514951 15.455 0.0404397C15.1069 0.032107 14.7683 0.154013 14.5054 0.382285C14.2424 0.610557 14.0742 0.928754 14.0336 1.27457C13.9379 2.19588 14.0473 3.12696 14.3539 4.001C14.3679 4.0438 14.392 4.08262 14.4241 4.11418C14.4562 4.14575 14.4954 4.16915 14.5384 4.18241C15.2299 4.40836 15.9514 4.52906 16.6787 4.54044C16.8743 4.5407 17.0697 4.5299 17.264 4.5081C17.6103 4.46914 17.9292 4.30139 18.1574 4.03816C18.3857 3.77494 18.5066 3.43548 18.4962 3.08722C18.4832 2.73564 18.3494 2.39928 18.1173 2.13486C17.8852 1.87044 17.5691 1.69414 17.2221 1.63569ZM17.2024 3.94982C16.4074 4.02049 15.6062 3.93136 14.8461 3.68769C14.5971 2.93235 14.5109 2.13285 14.593 1.34178C14.6136 1.13346 14.713 0.940881 14.871 0.803514C15.029 0.666147 15.2335 0.594389 15.4427 0.60294C15.6626 0.609736 15.8733 0.692628 16.0389 0.837473C16.2045 0.982318 16.3148 1.18014 16.3508 1.39719C16.3747 1.55565 16.3904 1.71524 16.3978 1.87532C16.4014 1.94419 16.4301 2.00935 16.4786 2.05841C16.5271 2.10746 16.5919 2.13699 16.6607 2.14138C16.8376 2.15263 16.9918 2.1695 17.1324 2.192C17.35 2.22796 17.5486 2.33788 17.6945 2.50322C17.8405 2.66857 17.925 2.87921 17.9337 3.0996C17.9407 3.30721 17.8694 3.50986 17.7339 3.66735C17.5984 3.82484 17.4087 3.92566 17.2024 3.94982Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24114",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_ValentineGift = (ValentineGift);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/WeddingGift.jsx



const WeddingGift = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#clip0_6820_24126)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.9943 4.23548H13.1859C13.6819 3.79565 13.9954 3.15424 13.9954 2.44075C13.9954 0.436387 11.6731 -0.677206 10.1103 0.556983C9.9803 0.659623 9.95815 0.84822 10.0608 0.978188C10.1635 1.10823 10.3521 1.13031 10.482 1.02767C11.6517 0.103988 13.3956 0.93534 13.3956 2.44075C13.3956 3.39176 12.6539 4.17228 11.7186 4.23548H9.7968V2.44071C9.7968 1.11779 8.72055 0.0415348 7.39763 0.0415348C6.07471 0.0415348 4.99845 1.11779 4.99845 2.44071C4.99845 3.15424 5.31188 3.79561 5.80791 4.23545H1.99948C1.17267 4.23545 0.5 4.90811 0.5 5.73493V7.28079C0.5 8.03117 1.0541 8.6545 1.77456 8.76337V16.5405C1.77456 17.3673 2.44723 18.04 3.27405 18.04H15.7198C16.5466 18.04 17.2193 17.3673 17.2193 16.5405V10.0881C17.2193 9.92247 17.085 9.78819 16.9194 9.78819C16.7537 9.78819 16.6195 9.92247 16.6195 10.0881V16.5405C16.6195 17.0366 16.2158 17.4402 15.7198 17.4402H8.44727V8.78031H10.5465V16.361C10.5465 16.5266 10.6808 16.6609 10.8464 16.6609C11.0121 16.6609 11.1463 16.5266 11.1463 16.361V8.78031H14.4827C14.6483 8.78031 14.7826 8.64603 14.7826 8.48041C14.7826 8.31479 14.6483 8.18052 14.4827 8.18052H12.4959V4.83528H16.9943C17.4904 4.83528 17.894 5.23886 17.894 5.73497V7.28082C17.894 7.77693 17.4904 8.18052 16.9943 8.18052H16.4133C16.2477 8.18052 16.1134 8.31479 16.1134 8.48041C16.1134 8.64603 16.2477 8.78031 16.4133 8.78031H16.9943C17.8211 8.78031 18.4938 8.10764 18.4938 7.28082V5.73497C18.4938 4.90815 17.8211 4.23548 16.9943 4.23548ZM5.59825 2.44071C5.59825 1.44854 6.40542 0.641329 7.39763 0.641329C8.38984 0.641329 9.19701 1.44854 9.19701 2.44071V4.23545H7.2752C6.33997 4.17228 5.59825 3.39172 5.59825 2.44071ZM7.84747 17.4402H3.27405C2.77798 17.4402 2.37436 17.0366 2.37436 16.5405V8.78031H7.84747V17.4402ZM11.8961 8.18052H1.99948C1.50342 8.18052 1.09979 7.77693 1.09979 7.28082V5.73497C1.09979 5.23886 1.50342 4.83528 1.99948 4.83528H6.49794V7.2391C6.49794 7.40472 6.63222 7.539 6.79784 7.539C6.96345 7.539 7.09773 7.40472 7.09773 7.2391V4.83528H11.8961V8.18052Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24126",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_WeddingGift = (WeddingGift);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/NewYearGift.jsx



const NewYearGift = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24136)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.9695 17.9695H1.49609C1.34141 17.9695 1.21484 17.843 1.21484 17.6883V8.02734C1.21484 7.87266 1.34141 7.74609 1.49609 7.74609H12.0992C12.2539 7.74609 12.3805 7.87266 12.3805 8.02734C12.3805 8.18203 12.2539 8.30859 12.0992 8.30859H1.76328V17.4211H13.6883V10.3477C13.6883 10.193 13.8148 10.0664 13.9695 10.0664C14.1242 10.0664 14.2508 10.193 14.2508 10.3477V17.6883C14.2367 17.843 14.1102 17.9695 13.9695 17.9695Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.59531 17.8289H6.85156C6.78125 17.8289 6.71094 17.7726 6.71094 17.6882V8.02729C6.71094 7.95698 6.76719 7.88667 6.85156 7.88667H8.59531C8.66562 7.88667 8.73594 7.94292 8.73594 8.02729V17.6882C8.73594 17.7726 8.67969 17.8289 8.59531 17.8289ZM6.99219 17.5476H8.46875V8.16792H6.99219V17.5476ZM16.1328 13.3148C16.1188 13.3148 16.1188 13.3148 16.1047 13.3148C16.0344 13.3007 15.9641 13.2726 15.9219 13.2164L6.8375 1.95229C6.73906 1.83979 6.76719 1.65698 6.87969 1.55854L8.24375 0.447603C8.3 0.405416 8.37031 0.377291 8.44063 0.391353C8.51094 0.405416 8.58125 0.433541 8.62344 0.489791L17.6938 11.7539C17.7922 11.8664 17.7641 12.0492 17.6516 12.1476L16.2875 13.2585C16.2594 13.3007 16.1891 13.3148 16.1328 13.3148ZM7.44219 1.81167L16.175 12.6398L17.1172 11.8804L8.38437 1.05229L7.44219 1.81167Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.1379 8.22402H12.1238C12.0816 8.22402 12.0535 8.1959 12.0254 8.16777L10.9285 6.80371C10.8863 6.74746 10.8863 6.66309 10.9426 6.60684L12.3066 5.4959C12.3348 5.46777 12.3769 5.46777 12.4051 5.46777C12.4473 5.46777 12.4754 5.4959 12.5035 5.52402L13.6004 6.88809C13.6426 6.94434 13.6426 7.02871 13.5863 7.08496L12.2363 8.1959C12.2082 8.20996 12.1801 8.22402 12.1379 8.22402ZM11.2379 6.74746L12.166 7.90059L13.3191 6.9584L12.391 5.80527L11.2379 6.74746Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.1651 6.32578C12.6588 6.32578 12.1385 5.70703 11.5479 4.96172C11.5057 4.90547 11.4635 4.84922 11.4213 4.80703C10.9151 4.17422 10.9432 3.30234 11.4776 2.86641C11.6745 2.69766 11.9276 2.61328 12.2088 2.61328C12.6448 2.61328 13.0807 2.83828 13.3901 3.21797C13.8682 3.80859 14.1073 5.72109 13.5167 6.21328C13.4182 6.28359 13.2917 6.32578 13.1651 6.32578ZM12.2088 3.17578C12.0682 3.17578 11.9276 3.21797 11.8292 3.30234C11.5198 3.55547 11.5338 4.07578 11.8432 4.46953C11.8854 4.51172 11.9276 4.56797 11.9698 4.62422C12.2229 4.93359 12.8838 5.77734 13.151 5.77734C13.4042 5.58047 13.3057 4.01953 12.9401 3.56953C12.7573 3.31641 12.476 3.17578 12.2088 3.17578Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.2631 8.7166C14.8272 8.7166 14.3912 8.4916 14.0818 8.11191C14.0397 8.06973 13.9975 8.01348 13.9553 7.95723C13.4068 7.28223 12.9147 6.63535 12.9568 6.15723C12.9709 6.00254 13.0412 5.86191 13.1678 5.77754C13.3084 5.66504 13.5193 5.60879 13.7725 5.60879C14.4615 5.60879 15.6568 6.03066 16.0506 6.52285C16.5568 7.15566 16.5287 8.02754 15.9943 8.46348C15.7834 8.63223 15.5443 8.7166 15.2631 8.7166ZM13.7725 6.15723C13.6178 6.15723 13.5334 6.18535 13.5053 6.19941C13.4631 6.29785 13.5756 6.63535 14.3772 7.60566C14.4193 7.66191 14.4615 7.71816 14.5037 7.76035C14.7006 7.99941 14.9818 8.1541 15.249 8.1541C15.3897 8.1541 15.5303 8.11191 15.6287 8.02754C15.9381 7.77441 15.924 7.2541 15.6147 6.86035C15.3615 6.55098 14.3631 6.15723 13.7725 6.15723ZM4.23809 4.51191C4.26622 4.51191 4.3084 4.51191 4.33653 4.52598C4.5334 4.5541 4.68809 4.68066 4.77247 4.83535C4.88497 4.73691 5.02559 4.68066 5.18028 4.68066C5.2084 4.68066 5.25059 4.68066 5.27872 4.69473C5.61622 4.75098 5.82715 5.06035 5.7709 5.39785C5.68653 5.87598 4.46309 6.63535 4.46309 6.63535C4.46309 6.63535 3.56309 5.44004 3.6334 5.03223C3.68965 4.72285 3.94278 4.51191 4.23809 4.51191ZM4.23809 3.94941C3.67559 3.94941 3.1834 4.35723 3.09903 4.91973C3.02872 5.3416 3.33809 6.0166 4.02715 6.94473C4.13965 7.08535 4.3084 7.16973 4.47715 7.16973C4.57559 7.16973 4.67403 7.1416 4.77247 7.08535C5.30684 6.74785 6.23497 6.10098 6.3334 5.46816C6.4459 4.83535 6.00997 4.23066 5.37715 4.13223C5.30684 4.11816 5.25059 4.11816 5.18028 4.11816C5.08184 4.11816 4.9834 4.13223 4.88497 4.16035C4.74434 4.07598 4.58965 4.00566 4.43497 3.97754C4.36465 3.96348 4.3084 3.94941 4.23809 3.94941ZM4.70215 0.658789C4.91309 0.658789 5.12403 0.785352 5.22247 0.996289C5.41934 1.41816 4.85684 2.65566 4.85684 2.65566C4.85684 2.65566 3.5209 2.1916 3.36622 1.8541C3.23965 1.55879 3.36622 1.22129 3.64747 1.09473C3.71778 1.0666 3.80215 1.03848 3.88653 1.03848C3.98497 1.03848 4.06934 1.0666 4.15372 1.10879C4.1959 0.940039 4.3084 0.799414 4.47715 0.715039C4.54747 0.686914 4.61778 0.658789 4.70215 0.658789ZM4.70215 0.110352C4.5334 0.110352 4.37872 0.138477 4.23809 0.208789C4.09747 0.279102 3.9709 0.363477 3.87247 0.475977C3.71778 0.475977 3.56309 0.518164 3.42247 0.574414C2.85997 0.827539 2.60684 1.50254 2.85997 2.06504C3.02872 2.43066 3.6334 2.81035 4.67403 3.16191C4.73028 3.17598 4.80059 3.19004 4.85684 3.19004C5.06778 3.19004 5.26465 3.06348 5.36309 2.8666C5.61622 2.31816 5.9959 1.31973 5.72872 0.757227C5.5459 0.363477 5.13809 0.110352 4.70215 0.110352Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24136",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_NewYearGift = (NewYearGift);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/Toys.jsx



const Toys = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24148)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.5273 13.54C16.6019 13.54 16.6735 13.5104 16.7262 13.4577C16.779 13.4049 16.8086 13.3334 16.8086 13.2588C16.8078 12.5877 16.5409 11.9443 16.0664 11.4697C15.5918 10.9952 14.9484 10.7283 14.2773 10.7275H13.7148C13.6403 10.7275 13.5687 10.7572 13.516 10.8099C13.4632 10.8627 13.4336 10.9342 13.4336 11.0088V13.2588C13.4336 13.3334 13.4632 13.4049 13.516 13.4577C13.5687 13.5104 13.6403 13.54 13.7148 13.54H16.5273ZM13.9961 11.29H14.2773C14.7506 11.2906 15.2079 11.4614 15.5657 11.7712C15.9235 12.081 16.1579 12.5092 16.2261 12.9775H13.9961V11.29Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M14.8398 16.0713C14.9952 16.0713 15.1211 15.9454 15.1211 15.79C15.1211 15.6347 14.9952 15.5088 14.8398 15.5088C14.6845 15.5088 14.5586 15.6347 14.5586 15.79C14.5586 15.9454 14.6845 16.0713 14.8398 16.0713Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.8367 10.6527C17.1798 10.1388 17.4474 9.57825 17.6313 8.98829C17.6425 8.95292 17.6467 8.91568 17.6435 8.87869C17.6404 8.84171 17.6299 8.80571 17.6127 8.77279C17.5956 8.73987 17.5721 8.71068 17.5436 8.68688C17.5151 8.66309 17.4822 8.64517 17.4467 8.63417C17.4113 8.62316 17.374 8.61928 17.337 8.62275C17.3001 8.62622 17.2642 8.63698 17.2314 8.65439C17.1986 8.67181 17.1696 8.69554 17.146 8.72422C17.1224 8.75291 17.1048 8.78597 17.0941 8.82151C16.9321 9.34044 16.6994 9.83456 16.4025 10.2899C15.9364 9.9551 15.3976 9.73545 14.8303 9.64895C16.2084 8.10601 16.9383 6.30995 16.9138 4.79795C17.3033 5.73687 17.4431 6.76064 17.3196 7.76963C17.3152 7.80633 17.318 7.84354 17.328 7.87914C17.3379 7.91474 17.3548 7.94803 17.3776 7.97711C17.4005 8.00618 17.4288 8.03047 17.461 8.04858C17.4933 8.06669 17.5287 8.07827 17.5654 8.08266C17.5766 8.08402 17.5879 8.08468 17.5992 8.08463C17.668 8.08464 17.7344 8.05943 17.7859 8.01377C17.8373 7.96811 17.8703 7.90516 17.8785 7.83685C18.0093 6.76188 17.8675 5.67128 17.4661 4.66551C17.0647 3.65974 16.4167 2.77115 15.5817 2.08158C14.7468 1.39202 13.7517 0.923654 12.6882 0.719641C11.6247 0.515627 10.527 0.582522 9.49609 0.914164V0.883789C9.49609 0.809197 9.46646 0.73766 9.41372 0.684915C9.36097 0.632171 9.28944 0.602539 9.21484 0.602539H5.83984C5.76525 0.602539 5.69371 0.632171 5.64097 0.684915C5.58823 0.73766 5.55859 0.809197 5.55859 0.883789C5.55859 0.958381 5.58823 1.02992 5.64097 1.08266C5.69371 1.13541 5.76525 1.16504 5.83984 1.16504H8.93359V5.10254H3.87109V1.16504H4.71484C4.78944 1.16504 4.86097 1.13541 4.91372 1.08266C4.96646 1.02992 4.99609 0.958381 4.99609 0.883789C4.99609 0.809197 4.96646 0.73766 4.91372 0.684915C4.86097 0.632171 4.78944 0.602539 4.71484 0.602539H3.58984C3.51525 0.602539 3.44371 0.632171 3.39097 0.684915C3.33823 0.73766 3.30859 0.809197 3.30859 0.883789V1.72754H2.46484C2.39025 1.72754 2.31871 1.75717 2.26597 1.80992C2.21323 1.86266 2.18359 1.9342 2.18359 2.00879V2.29004H1.90234C1.67857 2.29004 1.46396 2.37893 1.30572 2.53717C1.14749 2.6954 1.05859 2.91001 1.05859 3.13379C1.05859 3.35757 1.14749 3.57218 1.30572 3.73041C1.46396 3.88864 1.67857 3.97754 1.90234 3.97754H2.18359V4.25879C2.18359 4.33338 2.21323 4.40492 2.26597 4.45766C2.31871 4.51041 2.39025 4.54004 2.46484 4.54004H3.30859V5.38379C3.30859 5.45838 3.33823 5.52992 3.39097 5.58266C3.44371 5.63541 3.51525 5.66504 3.58984 5.66504H4.71484V6.22754H2.46484C2.39025 6.22754 2.31871 6.25717 2.26597 6.30992C2.21323 6.36266 2.18359 6.4342 2.18359 6.50879V6.81816C1.86618 6.88344 1.58097 7.05615 1.37605 7.30719C1.17112 7.55822 1.059 7.87223 1.05859 8.19629V10.7275C1.05859 10.8021 1.08823 10.8737 1.14097 10.9264C1.19371 10.9792 1.26525 11.0088 1.33984 11.0088C1.41444 11.0088 1.48597 10.9792 1.53872 10.9264C1.59146 10.8737 1.62109 10.8021 1.62109 10.7275V8.19629C1.62131 8.02184 1.67548 7.85172 1.77619 7.70927C1.87689 7.56682 2.0192 7.45902 2.18359 7.40063V11.5713H1.33984C1.26525 11.5713 1.19371 11.6009 1.14097 11.6537C1.08823 11.7064 1.05859 11.7779 1.05859 11.8525V12.6963C1.05859 12.9947 1.17712 13.2808 1.3881 13.4918C1.59908 13.7028 1.88523 13.8213 2.18359 13.8213C2.48196 13.8213 2.76811 13.7028 2.97909 13.4918C3.19007 13.2808 3.30859 12.9947 3.30859 12.6963V12.415C3.30787 12.2412 3.25345 12.0717 3.15276 11.93C3.05207 11.7882 2.91004 11.681 2.74609 11.623V11.29H4.15234V11.8525C4.07775 11.8525 4.00621 11.8822 3.95347 11.9349C3.90073 11.9877 3.87109 12.0592 3.87109 12.1338V13.54C3.87109 13.6146 3.90073 13.6862 3.95347 13.7389C4.00621 13.7917 4.07775 13.8213 4.15234 13.8213C4.22694 13.8213 4.29847 13.7917 4.35122 13.7389C4.40396 13.6862 4.43359 13.6146 4.43359 13.54V12.415H5.55859V15.79H4.43359V14.665C4.43359 14.5904 4.40396 14.5189 4.35122 14.4662C4.29847 14.4134 4.22694 14.3838 4.15234 14.3838C4.07775 14.3838 4.00621 14.4134 3.95347 14.4662C3.90073 14.5189 3.87109 14.5904 3.87109 14.665V15.79H3.02734C2.95275 15.79 2.88121 15.8197 2.82847 15.8724C2.77573 15.9252 2.74609 15.9967 2.74609 16.0713V17.1963C2.74609 17.2709 2.77573 17.3424 2.82847 17.3952C2.88121 17.4479 2.95275 17.4775 3.02734 17.4775H5.83984C5.91444 17.4775 5.98597 17.4479 6.03872 17.3952C6.09146 17.3424 6.12109 17.2709 6.12109 17.1963V13.8213H6.68359V16.0713C6.68359 16.1459 6.71323 16.2174 6.76597 16.2702C6.81871 16.3229 6.89025 16.3525 6.96484 16.3525H9.49609V16.915H6.96484C6.89025 16.915 6.81871 16.9447 6.76597 16.9974C6.71323 17.0502 6.68359 17.1217 6.68359 17.1963C6.68359 17.2709 6.71323 17.3424 6.76597 17.3952C6.81871 17.4479 6.89025 17.4775 6.96484 17.4775H10.0586C10.4072 17.4771 10.7472 17.3688 11.0317 17.1673C11.3163 16.9659 11.5314 16.6812 11.6477 16.3525H12.3367C12.4113 16.3525 12.4828 16.3229 12.5356 16.2702C12.5883 16.2174 12.618 16.1459 12.618 16.0713C12.618 15.9967 12.5883 15.9252 12.5356 15.8724C12.4828 15.8197 12.4113 15.79 12.3367 15.79H11.7461C11.7467 15.464 11.6526 15.1449 11.4754 14.8713C11.2982 14.5977 11.0454 14.3813 10.7476 14.2485C10.4499 14.1158 10.12 14.0722 9.79804 14.1232C9.47605 14.1741 9.17576 14.3174 8.93359 14.5357V12.1338C8.93359 12.0592 8.90396 11.9877 8.85122 11.9349C8.79847 11.8822 8.72694 11.8525 8.65234 11.8525V11.29H10.0586V11.623C9.89465 11.681 9.75262 11.7882 9.65193 11.93C9.55124 12.0717 9.49681 12.2412 9.49609 12.415V12.6963C9.49609 12.9947 9.61462 13.2808 9.8256 13.4918C10.0366 13.7028 10.3227 13.8213 10.6211 13.8213C10.8926 13.8204 11.1544 13.7204 11.3574 13.54H12.5898C12.6644 13.54 12.736 13.5104 12.7887 13.4577C12.8415 13.4049 12.8711 13.3334 12.8711 13.2588V11.0088C12.8711 10.9342 12.8415 10.8627 12.7887 10.8099C12.736 10.7572 12.6644 10.7275 12.5898 10.7275C12.5153 10.7275 12.4437 10.7572 12.391 10.8099C12.3382 10.8627 12.3086 10.9342 12.3086 11.0088V12.9775H11.7062C11.7315 12.8859 11.7449 12.7914 11.7461 12.6963V10.165H14.2773C15.0976 10.166 15.8839 10.4923 16.4639 11.0722C17.0439 11.6522 17.3701 12.4386 17.3711 13.2588V15.79H16.5273C16.529 15.3655 16.3712 14.9558 16.0852 14.6421C15.7992 14.3283 15.4059 14.1334 14.983 14.0958C14.5601 14.0582 14.1385 14.1808 13.8017 14.4393C13.4649 14.6977 13.2374 15.0732 13.1642 15.4914C13.091 15.9095 13.1775 16.34 13.4066 16.6974C13.6356 17.0549 13.9905 17.3133 14.401 17.4216C14.8115 17.5299 15.2477 17.4801 15.6232 17.2822C15.9988 17.0842 16.2863 16.7524 16.4289 16.3525H17.6523C17.7269 16.3525 17.7985 16.3229 17.8512 16.2702C17.904 16.2174 17.9336 16.1459 17.9336 16.0713V13.2588C17.9336 12.7732 17.8366 12.2926 17.6482 11.845C17.4599 11.3975 17.184 10.9921 16.8367 10.6527ZM1.90234 3.41504C1.82775 3.41504 1.75621 3.38541 1.70347 3.33266C1.65073 3.27992 1.62109 3.20838 1.62109 3.13379C1.62109 3.0592 1.65073 2.98766 1.70347 2.93492C1.75621 2.88217 1.82775 2.85254 1.90234 2.85254H2.18359V3.41504H1.90234ZM2.74609 3.97754V2.29004H3.30859V3.97754H2.74609ZM13.6946 1.60604C12.7443 1.62421 11.811 1.86044 10.9665 2.29651C10.944 2.29482 10.9237 2.29004 10.9023 2.29004H10.6211V2.00879C10.6211 1.9342 10.5915 1.86266 10.5387 1.80992C10.486 1.75717 10.4144 1.72754 10.3398 1.72754H9.49609V1.50873C10.8603 1.02595 12.3542 1.06057 13.6946 1.60604ZM9.49609 2.29004H10.0586V3.97754H9.49609V2.29004ZM10.6211 2.85254H10.9023C10.9769 2.85254 11.0485 2.88217 11.1012 2.93492C11.154 2.98766 11.1836 3.0592 11.1836 3.13379C11.1836 3.20838 11.154 3.27992 11.1012 3.33266C11.0485 3.38541 10.9769 3.41504 10.9023 3.41504H10.6211V2.85254ZM9.21484 5.66504C9.28944 5.66504 9.36097 5.63541 9.41372 5.58266C9.46646 5.52992 9.49609 5.45838 9.49609 5.38379V4.54004H10.3398C10.4144 4.54004 10.486 4.51041 10.5387 4.45766C10.5915 4.40492 10.6211 4.33338 10.6211 4.25879V3.97754H10.9023C11.0586 3.97823 11.2119 3.93536 11.345 3.85374C11.4782 3.77212 11.586 3.65498 11.6563 3.51548C11.7266 3.37598 11.7566 3.21964 11.743 3.06403C11.7293 2.90842 11.6725 2.7597 11.579 2.63457C12.7794 2.12635 13.9103 2.03382 14.7757 2.35332C13.5022 2.71895 11.664 4.08751 10.0729 5.67854C9.89012 5.86135 9.71603 6.04416 9.54559 6.22698H8.08984V5.66504H9.21484ZM11.1836 11.5713H10.6211V7.40063C10.7855 7.45902 10.9278 7.56682 11.0285 7.70927C11.1292 7.85172 11.1834 8.02184 11.1836 8.19629V11.5713ZM5.27734 5.66504H7.52734V6.22754H5.27734V5.66504ZM2.74609 12.6963C2.74609 12.8455 2.68683 12.9885 2.58134 13.094C2.47585 13.1995 2.33278 13.2588 2.18359 13.2588C2.03441 13.2588 1.89134 13.1995 1.78585 13.094C1.68036 12.9885 1.62109 12.8455 1.62109 12.6963V12.1338H2.46484C2.53944 12.1338 2.61097 12.1634 2.66372 12.2162C2.71646 12.2689 2.74609 12.3404 2.74609 12.415V12.6963ZM5.55859 16.915H3.30859V16.3525H5.55859V16.915ZM7.24609 15.79V12.415H8.37109V15.79H7.24609ZM10.0586 14.665C10.357 14.665 10.6431 14.7836 10.8541 14.9945C11.0651 15.2055 11.1836 15.4917 11.1836 15.79C11.1836 16.0884 11.0651 16.3746 10.8541 16.5855C10.6431 16.7965 10.357 16.915 10.0586 16.915V16.0713C10.1142 16.0713 10.1686 16.0548 10.2148 16.0239C10.2611 15.993 10.2971 15.9491 10.3184 15.8977C10.3397 15.8463 10.3453 15.7897 10.3344 15.7352C10.3236 15.6806 10.2968 15.6305 10.2575 15.5912C10.2181 15.5518 10.168 15.525 10.1135 15.5142C10.0589 15.5033 10.0024 15.5089 9.95096 15.5302C9.89957 15.5515 9.85565 15.5875 9.82474 15.6338C9.79384 15.68 9.77734 15.7344 9.77734 15.79H8.93359C8.93359 15.4917 9.05212 15.2055 9.2631 14.9945C9.47408 14.7836 9.76023 14.665 10.0586 14.665ZM8.08984 11.8525H6.96484C6.89025 11.8525 6.81871 11.8822 6.76597 11.9349C6.71323 11.9877 6.68359 12.0592 6.68359 12.1338V13.2588H6.12109V12.1338C6.12109 12.0592 6.09146 11.9877 6.03872 11.9349C5.98597 11.8822 5.91444 11.8525 5.83984 11.8525H4.71484V11.29H8.08984V11.8525ZM2.74609 10.7275V6.79004H10.0586V10.7275H2.74609ZM10.0586 12.6963V12.415C10.0586 12.3404 10.0882 12.2689 10.141 12.2162C10.1937 12.1634 10.2653 12.1338 10.3398 12.1338H11.1836V12.6963C11.1836 12.8455 11.1243 12.9885 11.0188 13.094C10.9134 13.1995 10.7703 13.2588 10.6211 13.2588C10.4719 13.2588 10.3288 13.1995 10.2233 13.094C10.1179 12.9885 10.0586 12.8455 10.0586 12.6963ZM10.6211 6.81816V6.50879C10.6211 6.4342 10.5915 6.36266 10.5387 6.30992C10.486 6.25717 10.4144 6.22754 10.3398 6.22754H10.3235C10.3725 6.17748 10.4203 6.12713 10.4706 6.07707C13.0199 3.52754 15.2336 2.4886 15.6414 2.89473C16.0492 3.30085 15.0086 5.51654 12.4588 8.06579C12.3444 8.18054 12.2297 8.29304 12.1145 8.40329C12.0864 8.4284 12.0635 8.45892 12.0474 8.49304C12.0312 8.52717 12.0221 8.56419 12.0206 8.6019C12.0191 8.63961 12.0252 8.67725 12.0385 8.71256C12.0518 8.74788 12.0721 8.78015 12.0982 8.80745C12.1242 8.83476 12.1555 8.85654 12.1902 8.8715C12.2248 8.88646 12.2621 8.89429 12.2999 8.89452C12.3376 8.89476 12.375 8.88739 12.4099 8.87287C12.4447 8.85834 12.4763 8.83695 12.5027 8.80998C12.6208 8.69748 12.7388 8.58207 12.8568 8.46376C14.4461 6.87441 15.8113 5.04123 16.1794 3.76773C16.7588 5.3326 15.9702 7.70185 14.1004 9.60254H11.7461V8.19629C11.7457 7.87223 11.6336 7.55822 11.4286 7.30719C11.2237 7.05615 10.9385 6.88344 10.6211 6.81816ZM14.8398 16.915C14.6173 16.915 14.3998 16.8491 14.2148 16.7254C14.0298 16.6018 13.8856 16.4261 13.8005 16.2206C13.7153 16.015 13.6931 15.7888 13.7365 15.5706C13.7799 15.3523 13.887 15.1519 14.0443 14.9945C14.2017 14.8372 14.4021 14.7301 14.6204 14.6867C14.8386 14.6432 15.0648 14.6655 15.2704 14.7507C15.4759 14.8358 15.6516 14.98 15.7752 15.165C15.8989 15.35 15.9648 15.5675 15.9648 15.79C15.9648 16.0884 15.8463 16.3746 15.6353 16.5855C15.4244 16.7965 15.1382 16.915 14.8398 16.915Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.27734 1.72754C5.11046 1.72754 4.94733 1.77702 4.80858 1.86974C4.66983 1.96245 4.56168 2.09422 4.49782 2.2484C4.43396 2.40258 4.41725 2.57223 4.44981 2.7359C4.48236 2.89957 4.56272 3.04991 4.68072 3.16791C4.79872 3.28591 4.94906 3.36627 5.11274 3.39883C5.27641 3.43138 5.44606 3.41467 5.60023 3.35081C5.75441 3.28695 5.88618 3.17881 5.97889 3.04005C6.07161 2.9013 6.12109 2.73817 6.12109 2.57129C6.12109 2.34751 6.0322 2.1329 5.87396 1.97467C5.71573 1.81643 5.50112 1.72754 5.27734 1.72754ZM5.27734 2.85254C5.22172 2.85254 5.16734 2.83604 5.12109 2.80514C5.07484 2.77424 5.03879 2.73031 5.0175 2.67892C4.99621 2.62753 4.99064 2.57098 5.0015 2.51642C5.01235 2.46186 5.03914 2.41175 5.07847 2.37242C5.1178 2.33308 5.16792 2.3063 5.22247 2.29544C5.27703 2.28459 5.33358 2.29016 5.38497 2.31145C5.43636 2.33274 5.48029 2.36878 5.51119 2.41503C5.5421 2.46129 5.55859 2.51566 5.55859 2.57129C5.55859 2.64588 5.52896 2.71742 5.47622 2.77016C5.42347 2.82291 5.35193 2.85254 5.27734 2.85254Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.37109 2.57129C8.37109 2.40441 8.32161 2.24128 8.22889 2.10253C8.13618 1.96377 8.00441 1.85563 7.85023 1.79177C7.69606 1.7279 7.52641 1.7112 7.36274 1.74375C7.19906 1.77631 7.04872 1.85667 6.93072 1.97467C6.81272 2.09267 6.73236 2.24301 6.69981 2.40668C6.66725 2.57035 6.68396 2.74 6.74782 2.89418C6.81168 3.04835 6.91983 3.18013 7.05858 3.27284C7.19733 3.36555 7.36046 3.41504 7.52734 3.41504C7.75112 3.41504 7.96573 3.32614 8.12396 3.16791C8.2822 3.00968 8.37109 2.79507 8.37109 2.57129ZM7.24609 2.57129C7.24609 2.51566 7.26259 2.46129 7.29349 2.41504C7.3244 2.36878 7.36832 2.33274 7.41971 2.31145C7.4711 2.29016 7.52765 2.28459 7.58221 2.29544C7.63677 2.3063 7.68688 2.33308 7.72622 2.37242C7.76555 2.41175 7.79234 2.46186 7.80319 2.51642C7.81404 2.57098 7.80847 2.62753 7.78718 2.67892C7.7659 2.73031 7.72985 2.77424 7.6836 2.80514C7.63735 2.83604 7.58297 2.85254 7.52734 2.85254C7.45275 2.85254 7.38121 2.82291 7.32847 2.77016C7.27572 2.71742 7.24609 2.64588 7.24609 2.57129Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M5.55859 4.25879C5.55859 4.33338 5.58823 4.40492 5.64097 4.45766C5.69371 4.51041 5.76525 4.54004 5.83984 4.54004H6.96484C7.03944 4.54004 7.11097 4.51041 7.16372 4.45766C7.21646 4.40492 7.24609 4.33338 7.24609 4.25879C7.24609 4.1842 7.21646 4.11266 7.16372 4.05992C7.11097 4.00717 7.03944 3.97754 6.96484 3.97754H5.83984C5.76525 3.97754 5.69371 4.00717 5.64097 4.05992C5.58823 4.11266 5.55859 4.1842 5.55859 4.25879Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.37109 7.35254H4.43359C4.359 7.35254 4.28746 7.38217 4.23472 7.43492C4.18198 7.48766 4.15234 7.5592 4.15234 7.63379V8.75879C4.15234 8.83338 4.18198 8.90492 4.23472 8.95766C4.28746 9.01041 4.359 9.04004 4.43359 9.04004H8.37109C8.44569 9.04004 8.51722 9.01041 8.56997 8.95766C8.62271 8.90492 8.65234 8.83338 8.65234 8.75879V7.63379C8.65234 7.5592 8.62271 7.48766 8.56997 7.43492C8.51722 7.38217 8.44569 7.35254 8.37109 7.35254ZM8.08984 8.47754H4.71484V7.91504H8.08984V8.47754Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.52734 9.60254H5.27734C5.20275 9.60254 5.13121 9.63217 5.07847 9.68492C5.02573 9.73766 4.99609 9.8092 4.99609 9.88379C4.99609 9.95838 5.02573 10.0299 5.07847 10.0827C5.13121 10.1354 5.20275 10.165 5.27734 10.165H7.52734C7.60194 10.165 7.67347 10.1354 7.72622 10.0827C7.77896 10.0299 7.80859 9.95838 7.80859 9.88379C7.80859 9.8092 7.77896 9.73766 7.72622 9.68492C7.67347 9.63217 7.60194 9.60254 7.52734 9.60254Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24148",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_Toys = (Toys);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/Football.jsx



const Football = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M6.10967 0.698636C4.99317 1.1513 3.99133 1.81686 3.13226 2.67567C2.27294 3.53473 1.60811 4.53681 1.1552 5.65304C0.717951 6.73147 0.496094 7.87108 0.496094 9.04004C0.496094 10.2088 0.717951 11.3484 1.1552 12.4263C1.60811 13.5428 2.27319 14.5448 3.13226 15.4037C3.99133 16.263 4.99292 16.928 6.10967 17.3807C7.18811 17.8184 8.32749 18.0395 9.49647 18.0395C10.6654 18.0395 11.8046 17.8177 12.883 17.3807C13.9993 16.928 15.0016 16.263 15.8604 15.4037C16.7197 14.5448 17.3848 13.5433 17.8375 12.4263C18.2747 11.3484 18.4961 10.2088 18.4961 9.04004C18.4961 7.87108 18.2745 6.73147 17.8375 5.65304C17.3848 4.53681 16.7192 3.53448 15.8604 2.67567C15.0016 1.81686 14.0003 1.1513 12.883 0.698636C11.8046 0.261644 10.6654 0.0400391 9.49647 0.0400391C8.32749 0.0400391 7.18811 0.261644 6.10967 0.698636ZM2.7455 12.8287C2.31199 12.5566 1.91254 12.2432 1.55887 11.8741C1.01865 10.354 0.927123 8.70825 1.28503 7.14607C1.45341 6.81404 1.64492 6.49519 1.86156 6.18977C1.92846 6.0955 1.99039 5.99726 2.06202 5.90573L4.09306 7.10752C4.09306 7.12344 4.09306 7.14085 4.09306 7.15851C4.08784 8.25087 4.19876 9.33526 4.41963 10.404C4.42037 10.409 4.42112 10.4117 4.42211 10.4162L2.84698 12.8859C2.81266 12.8685 2.77858 12.8496 2.7455 12.8287ZM8.78439 17.0039C9.13483 17.1827 9.49522 17.3337 9.86556 17.4566C8.29242 17.525 6.70361 17.1564 5.29909 16.3505L8.7038 16.9571C8.72992 16.9738 8.75653 16.9897 8.78439 17.0039ZM8.77195 16.3893L4.75415 15.6733C4.28408 15.1025 3.86125 14.4986 3.49788 13.8532C3.40535 13.689 3.30213 13.5296 3.22379 13.3582L4.79743 10.891C4.83225 10.8997 4.87105 10.9089 4.91507 10.9206C5.8995 11.184 6.90134 11.3712 7.91014 11.518C7.96909 11.5262 8.01833 11.5334 8.06037 11.5379L9.94665 14.7993C9.61933 15.2594 9.28829 15.717 8.95003 16.1697C8.89382 16.2451 8.83413 16.3174 8.77195 16.3893ZM15.4565 15C15.1367 15.3201 14.7972 15.6086 14.4417 15.8658C14.3828 15.3947 14.2811 14.9331 14.1376 14.4822L16.1502 10.7276C16.7046 10.4751 17.2393 10.1889 17.7358 9.83394C17.8007 9.78792 17.8546 9.73644 17.8964 9.68023C17.7507 11.6205 16.9374 13.5194 15.4565 15ZM15.3672 10.1307C15.4421 10.2734 15.5159 10.4177 15.5901 10.5639L13.6461 14.1902C13.6349 14.1927 13.6242 14.1952 13.613 14.1966C12.5622 14.3929 11.5029 14.4973 10.4346 14.5023L8.49463 11.1479C8.79657 10.5873 9.09578 10.0245 9.3925 9.46136C9.59396 9.07934 9.79194 8.69482 9.98967 8.31056L14.0047 7.89819C14.4965 8.61946 14.9623 9.35616 15.3672 10.1307ZM14.5527 5.82938C14.3621 6.33253 14.1582 6.83046 13.9555 7.32938L10.0441 7.73105C9.99739 7.66937 9.94888 7.60868 9.8979 7.55073C9.43603 7.02769 8.97117 6.50787 8.50706 5.98657C8.51129 5.98134 8.51552 5.97736 8.51975 5.97264C8.33246 5.7856 8.14468 5.59857 7.9574 5.41104L9.04629 2.13273C9.1214 2.11283 9.19701 2.09617 9.27337 2.08796C9.86532 2.02777 10.458 1.95962 11.0515 1.9253C11.4148 1.9049 11.7802 1.89321 12.1498 1.91933L14.8439 4.95589C14.7511 5.24888 14.6606 5.54261 14.5527 5.82938ZM15.4565 3.07958C16.1997 3.82324 16.7752 4.67186 17.1821 5.57842C16.6787 5.23196 16.1405 4.94694 15.5746 4.71464C15.4866 4.67832 15.3963 4.64624 15.3045 4.61465L12.6527 1.62585C12.6711 1.49676 12.6808 1.36743 12.6848 1.2371C13.6936 1.64773 14.6392 2.26256 15.4565 3.07958ZM6.79713 1.08017C6.80757 1.08788 6.81255 1.09434 6.81852 1.09608C7.42464 1.3055 7.97605 1.61391 8.49587 1.97977L7.47861 5.04319C7.47339 5.04468 7.46842 5.04617 7.46344 5.04841C7.25526 5.13447 7.04311 5.21157 6.83816 5.30484C5.99377 5.6886 5.17051 6.11366 4.395 6.62328L2.3876 5.43566C2.39058 5.37299 2.40128 5.30931 2.42267 5.25261C2.55747 4.89346 2.69004 4.53233 2.8425 4.1804C2.9599 3.9093 3.09371 3.6474 3.23971 3.39147C3.33521 3.28602 3.4342 3.18156 3.53618 3.07958C4.48952 2.12651 5.61621 1.44976 6.81578 1.04957C6.80956 1.05927 6.80309 1.06947 6.79713 1.08017Z",
            fill: "currentColor"
        })
    }));
};
/* harmony default export */ const gift_shop_Football = (Football);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/BabyToys.jsx



const BabyToys = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_24167)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.94922 4.52539C7.94922 4.37977 7.8312 4.26172 7.68555 4.26172C7.53989 4.26172 7.42188 4.37977 7.42188 4.52539V5.24166C7.42188 5.38728 7.53989 5.50534 7.68555 5.50534C7.8312 5.50534 7.94922 5.38728 7.94922 5.24166V4.52539Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.3027 4.26172C11.1571 4.26172 11.0391 4.37977 11.0391 4.52539V5.24166C11.0391 5.38728 11.1571 5.50534 11.3027 5.50534C11.4484 5.50534 11.5664 5.38728 11.5664 5.24166V4.52539C11.5664 4.37977 11.4484 4.26172 11.3027 4.26172Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M10.5203 5.76543C10.1753 5.60293 8.81444 5.60293 8.46947 5.76543C8.20337 5.8908 8.02466 6.12473 7.9663 6.42416C7.91891 6.66724 7.95238 6.93826 8.06052 7.18728C8.21036 7.53235 8.48209 7.79666 8.84639 7.9517C8.97029 8.0044 9.09967 8.04096 9.23119 8.06199V8.44291C9.23119 8.58853 9.34921 8.70659 9.49487 8.70659C9.64052 8.70659 9.75855 8.58853 9.75855 8.44291V8.06199C9.89007 8.04096 10.0195 8.0044 10.1433 7.9517C10.5076 7.79669 10.7794 7.53235 10.9292 7.18732C11.0373 6.9383 11.0708 6.66727 11.0234 6.4242C10.9651 6.12477 10.7864 5.8908 10.5203 5.76543ZM10.4454 6.97725C10.3491 7.19923 10.178 7.36384 9.93686 7.46643C9.65603 7.58596 9.33385 7.586 9.05284 7.46643C8.81176 7.36384 8.64062 7.19924 8.54425 6.97722C8.44803 6.75559 8.40855 6.37705 8.69402 6.24258C8.79879 6.19519 9.14685 6.17149 9.49483 6.17149C9.84275 6.17149 10.1907 6.19519 10.2955 6.24254C10.5812 6.37712 10.5417 6.75562 10.4454 6.97725Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.9684 3.14042C16.1779 2.50485 16.064 1.79809 15.6559 1.20126C15.1961 0.528742 14.427 0.0854466 13.6489 0.0443479C12.4754 -0.0173879 11.8621 0.593677 11.3922 1.27326C10.7987 1.0908 10.16 0.991093 9.49458 0.991093C8.82846 0.991093 8.18902 1.09101 7.59498 1.27386C7.33938 0.906294 7.06836 0.591462 6.71851 0.369621C6.59557 0.291608 6.43265 0.328066 6.3546 0.451045C6.27662 0.574024 6.31308 0.736942 6.43606 0.814956C6.67766 0.968206 6.8828 1.19187 7.07852 1.45823C5.82148 1.97141 4.81757 2.87186 4.27618 3.97966C3.94223 3.73289 3.66716 3.41665 3.52164 2.97532C3.36164 2.49008 3.44932 1.96579 3.76851 1.49897C4.13763 0.95917 4.75052 0.603627 5.36756 0.571036L5.39006 0.569946C5.53558 0.563407 5.64819 0.440181 5.64165 0.294701C5.63511 0.149222 5.51178 0.0367892 5.36644 0.0431174L5.34021 0.0443831C4.56215 0.0854466 3.79309 0.528742 3.33323 1.20126C2.92517 1.79809 2.81126 2.50485 3.02079 3.14039C3.16578 3.5801 3.41399 3.94604 3.77962 4.25908C3.86889 4.33552 3.96504 4.40815 4.06907 4.47896C3.91776 4.91789 3.83612 5.38235 3.83612 5.86302C3.83612 6.9588 4.25878 7.97093 4.97071 8.78563C4.31686 9.25972 3.89332 9.87209 3.767 10.5357C3.63787 11.2142 3.86063 11.8684 4.39498 12.3915C4.34499 12.6492 4.30297 12.9582 4.28627 13.3136C4.26982 13.6635 4.28051 14.0063 4.31204 14.3397C3.8183 14.7228 3.50266 15.3041 3.50266 15.9539C3.50266 17.087 4.46241 18.0115 5.65318 18.0396C5.65968 18.0401 13.3272 18.0401 13.3326 18.0398C13.8406 18.0284 14.33 17.8519 14.716 17.5388C14.8291 17.447 14.8464 17.281 14.7546 17.1679C14.6629 17.0548 14.4969 17.0375 14.3838 17.1292C14.0783 17.377 13.6864 17.5135 13.2804 17.5135C12.3547 17.5135 11.6016 16.8139 11.6016 15.9539C11.6016 15.8297 11.6174 15.7089 11.6471 15.5931C11.8899 15.4002 12.1088 15.2223 12.2716 15.0825C12.5093 14.8785 12.7232 14.6612 12.9126 14.4321C13.031 14.4073 13.154 14.3942 13.2804 14.3942C14.2061 14.3942 14.9592 15.0939 14.9592 15.9539C14.9592 16.0523 14.9493 16.1506 14.9298 16.2462C14.9007 16.3889 14.9927 16.5281 15.1354 16.5572C15.2782 16.5862 15.4174 16.4943 15.4465 16.3516C15.4731 16.2214 15.4865 16.0876 15.4865 15.9539C15.4865 15.3035 15.1704 14.7219 14.676 14.3389C14.7126 13.9523 14.7168 13.6077 14.7029 13.3137C14.6864 12.9627 14.6453 12.657 14.5961 12.4012C15.1273 11.8809 15.3497 11.2299 15.2233 10.5539C15.098 9.88425 14.6728 9.2683 14.0136 8.79129C14.7285 7.97564 15.1531 6.96133 15.1531 5.86305C15.1531 5.38214 15.0713 4.9174 14.9198 4.47825C15.3713 4.16989 15.766 3.75398 15.9684 3.14042ZM4.28508 10.6344C4.41906 9.93041 4.94796 9.44293 5.34267 9.16863C5.52609 9.33925 5.72353 9.49854 5.93317 9.64532C5.89095 9.6809 5.84943 9.7174 5.80959 9.75575C5.71365 9.84815 5.56385 9.96898 5.53702 10.1097C5.51666 10.2052 5.54996 10.3082 5.63191 10.3724C5.68447 10.4136 5.74775 10.4314 5.80956 10.4279C6.12094 10.4737 6.43894 10.5561 6.75571 10.674C7.25451 10.8595 7.93523 11.172 8.08777 11.7397C8.19546 12.1404 7.93182 12.6202 7.53472 12.7464C6.72962 13.0023 5.54774 12.7137 4.84411 12.0896C4.51778 11.8001 4.15595 11.3128 4.28508 10.6344ZM5.67501 13.8677C5.37083 13.872 5.08149 13.9348 4.81883 14.0449C4.80386 13.7961 4.80319 13.5695 4.8117 13.3685C4.82105 13.1476 4.84123 12.9462 4.8671 12.7658C4.99247 12.8469 5.12445 12.9206 5.26125 12.9863C5.33037 13.1843 5.40824 13.3647 5.48541 13.5218C5.5431 13.6394 5.60653 13.7546 5.67501 13.8677ZM5.70876 17.5136C4.78308 17.5136 4.02998 16.8139 4.02998 15.9539C4.02998 15.0939 4.78308 14.3942 5.70876 14.3942C5.83533 14.3942 5.95848 14.4078 6.07707 14.4327C6.26628 14.6616 6.48 14.8787 6.71753 15.0825C6.88044 15.2223 7.09926 15.4002 7.34213 15.5931C7.37183 15.7089 7.38758 15.8297 7.38758 15.9539C7.38755 16.8139 6.63448 17.5136 5.70876 17.5136ZM11.8167 17.5136H7.17249C7.60619 17.1489 7.8872 16.6255 7.91258 16.0405C8.40816 16.425 8.90588 16.8026 9.19005 17.0171C9.2797 17.0848 9.38711 17.1186 9.49458 17.1186C9.60202 17.1186 9.70946 17.0848 9.79915 17.0171C10.0833 16.8026 10.581 16.4251 11.0766 16.0405C11.102 16.6255 11.383 17.1489 11.8167 17.5136ZM13.0305 13.2894C12.7786 13.8021 12.4078 14.2708 11.9282 14.6823C11.3358 15.1908 9.93289 16.2552 9.49455 16.5863C9.0561 16.2552 7.6533 15.1907 7.06094 14.6823C6.58133 14.2708 6.21049 13.8021 5.95862 13.2894C5.95019 13.2722 5.94175 13.2539 5.93328 13.2361C6.24902 13.3212 6.57233 13.3663 6.8835 13.3663C7.16908 13.3663 7.44457 13.3284 7.69433 13.2491C8.35444 13.0393 8.77622 12.27 8.59699 11.6029C8.38119 10.7998 7.54769 10.4061 6.93951 10.1797C6.73957 10.1054 6.53879 10.0439 6.33874 9.99496C6.69401 9.72014 7.13874 9.56548 7.58928 9.56548H7.59413C8.24007 9.56706 8.83338 9.86351 9.22197 10.3788C9.28621 10.4639 9.38809 10.5148 9.49451 10.5148C9.60093 10.5148 9.70282 10.4639 9.76709 10.3787C10.1556 9.86347 10.749 9.56703 11.3949 9.56545H11.3997C11.8547 9.56545 12.3041 9.72299 12.661 10.003C12.4582 10.0516 12.2546 10.113 12.0517 10.1877C11.6141 10.349 11.0598 10.5964 10.7015 11.0207C10.5614 11.1868 10.4512 11.3799 10.3898 11.6056C10.2084 12.2722 10.6278 13.0428 11.2872 13.2546C11.5398 13.3358 11.8186 13.3744 12.1079 13.3744C12.4168 13.3744 12.7375 13.3301 13.051 13.2464C13.0442 13.2608 13.0373 13.2754 13.0305 13.2894ZM14.1697 14.0446C13.9072 13.9348 13.6181 13.872 13.3142 13.8677C13.3826 13.7546 13.4461 13.6394 13.5038 13.5218C13.5794 13.3679 13.6559 13.1917 13.724 12.9983C13.8623 12.9322 13.9958 12.8581 14.1224 12.7764C14.1711 13.1243 14.1984 13.5508 14.1697 14.0446ZM14.7049 10.6508C14.8318 11.3296 14.4684 11.8159 14.1413 12.1042C13.4356 12.7262 12.2529 13.0109 11.4486 12.7526C11.0519 12.6251 10.7898 12.1445 10.8987 11.7441C11.053 11.1768 11.7347 10.8666 12.2341 10.6826C12.5679 10.5596 12.903 10.4754 13.2301 10.4323C13.3089 10.4219 13.38 10.3755 13.4212 10.3075C13.4801 10.2104 13.4719 10.0913 13.4019 10.0021C13.3335 9.91487 13.2587 9.83201 13.1795 9.75579C13.1397 9.71743 13.0982 9.68097 13.056 9.6454C13.2635 9.50013 13.4589 9.34259 13.6407 9.17394C14.0454 9.45442 14.5727 9.94433 14.7049 10.6508ZM12.5839 9.3294C12.22 9.14068 11.8117 9.03813 11.3998 9.03813C11.3977 9.03813 11.3957 9.03813 11.3937 9.03813C10.6596 9.03992 9.9795 9.34452 9.49458 9.8814C9.00966 9.34452 8.32955 9.03992 7.5955 9.03813C7.59343 9.03813 7.59146 9.03813 7.58939 9.03813C7.17752 9.03813 6.76935 9.14064 6.4054 9.3293C5.16604 8.53545 4.36348 7.27725 4.36348 5.86302C4.36348 3.46738 6.66528 1.51841 9.49458 1.51841C12.3239 1.51841 14.6257 3.46738 14.6257 5.86302C14.6257 7.27725 13.8233 8.53556 12.5839 9.3294ZM14.7118 3.97709C14.1702 2.87045 13.1668 1.97103 11.9108 1.45823C12.3481 0.862559 12.7963 0.527476 13.6211 0.570966C14.2386 0.603556 14.8515 0.959135 15.2206 1.49894C15.5398 1.96575 15.6275 2.49005 15.4675 2.97529C15.3624 3.29395 15.1871 3.63005 14.7118 3.97709Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_24167",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white",
                        transform: "translate(0.496094 0.0400391)"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_BabyToys = (BabyToys);

;// CONCATENATED MODULE: ./src/components/icons/gift-shop/Robot.jsx



const Robot = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 19 19",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.94 4.73123V2.07641C12.94 1.53619 12.5005 1.09668 11.9603 1.09668H7.00707C6.46685 1.09668 6.02734 1.53619 6.02734 2.07641V4.73123C6.02734 5.27145 6.46685 5.71096 7.00707 5.71096H7.53049C7.67638 5.71096 7.7946 5.59271 7.7946 5.44685C7.7946 5.301 7.67638 5.18275 7.53049 5.18275H7.00707C6.75811 5.18275 6.55556 4.9802 6.55556 4.73123V2.07641C6.55556 1.82744 6.75811 1.62489 7.00707 1.62489H11.9603C12.2092 1.62489 12.4118 1.82744 12.4118 2.07641V4.73123C12.4118 4.9802 12.2092 5.18275 11.9603 5.18275H8.65601C8.51011 5.18275 8.3919 5.301 8.3919 5.44685C8.3919 5.59271 8.51011 5.71096 8.65601 5.71096H11.9603C12.5005 5.711 12.94 5.27149 12.94 4.73123Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.02191 2.63672C7.87602 2.63672 7.75781 2.75497 7.75781 2.90082V4.06419C7.75781 4.21005 7.87602 4.3283 8.02191 4.3283C8.1678 4.3283 8.28602 4.21005 8.28602 4.06419V2.90082C8.28602 2.75497 8.16777 2.63672 8.02191 2.63672Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.2157 4.06419V2.90082C11.2157 2.75497 11.0975 2.63672 10.9516 2.63672C10.8057 2.63672 10.6875 2.75497 10.6875 2.90082V4.06419C10.6875 4.21005 10.8057 4.3283 10.9516 4.3283C11.0975 4.3283 11.2157 4.21005 11.2157 4.06419Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.907 11.0561C11.907 10.9102 11.7888 10.792 11.6429 10.792H8.97114C8.82524 10.792 8.70703 10.9102 8.70703 11.0561C8.70703 11.202 8.82524 11.3202 8.97114 11.3202H11.6429C11.7888 11.3202 11.907 11.202 11.907 11.0561Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.84585 10.792H7.18989C7.04399 10.792 6.92578 10.9102 6.92578 11.0561C6.92578 11.202 7.04399 11.3202 7.18989 11.3202H7.84585C7.99175 11.3202 8.10996 11.202 8.10996 11.0561C8.10996 10.9102 7.99175 10.792 7.84585 10.792Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.1352 8.75586C13.9893 8.75586 13.8711 8.87411 13.8711 9.01997V10.6123C13.8711 10.7582 13.9893 10.8764 14.1352 10.8764C14.2811 10.8764 14.3993 10.7582 14.3993 10.6123V9.01997C14.3993 8.87411 14.2811 8.75586 14.1352 8.75586Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.87348 8.75586C4.72759 8.75586 4.60938 8.87411 4.60938 9.01997V10.6123C4.60938 10.7582 4.72759 10.8764 4.87348 10.8764C5.01937 10.8764 5.13758 10.7582 5.13758 10.6123V9.01997C5.13758 8.87411 5.01937 8.75586 4.87348 8.75586Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.6614 8.34795H15.4908C15.4889 8.34795 15.487 8.3482 15.4851 8.34824C15.1622 7.76287 14.539 7.36538 13.8246 7.36538H11.6281V6.76719H11.9622C12.9285 6.76719 13.7391 6.09042 13.9465 5.18615H14.3477C14.8327 5.18615 15.2273 4.79154 15.2273 4.30654V2.50069C15.2273 2.01569 14.8327 1.62108 14.3477 1.62108H13.9465C13.7391 0.716818 12.9285 0.0400391 11.9622 0.0400391H7.00898C6.04271 0.0400391 5.23208 0.716818 5.02474 1.62112H4.62351C4.1385 1.62112 3.7439 2.01569 3.7439 2.50073V4.30654C3.7439 4.79154 4.13847 5.18615 4.62351 5.18615H5.02474C5.23208 6.09042 6.04271 6.76719 7.00898 6.76719H7.37838V7.36538H5.18183C4.46705 7.36538 3.84359 7.76329 3.52085 8.34912C3.51331 8.34848 3.50571 8.34795 3.498 8.34795H2.32748C1.5546 8.34795 0.925781 8.97674 0.925781 9.74961V11.0739C0.925781 11.2885 1.06181 11.4715 1.252 11.5424V11.8919C1.252 12.2254 1.44882 12.5137 1.73236 12.647V14.4497C1.73236 15.1175 1.99242 15.7453 2.46464 16.2175L2.53595 16.2888C2.42671 16.6819 2.53764 17.1212 2.85992 17.4134L3.20406 17.7254C3.28132 17.7955 3.37985 17.8334 3.48345 17.8334C3.49035 17.8334 3.49733 17.8333 3.50426 17.8329C3.61543 17.8275 3.7178 17.7791 3.79256 17.6967L4.9055 16.4692C4.98023 16.3868 5.0184 16.2802 5.01298 16.169C5.00755 16.0579 4.95913 15.9555 4.8767 15.8808L4.53255 15.5687C4.32179 15.3776 4.05167 15.2764 3.76869 15.2805L3.58515 15.097C3.41225 14.9241 3.31703 14.6942 3.31703 14.4497V12.647C3.3552 12.6291 3.39186 12.6084 3.42662 12.5851C3.69593 13.2453 4.32701 13.7208 5.07242 13.7635V14.0806C5.07242 14.7618 5.62662 15.316 6.30783 15.316H6.9257V15.6287C6.9257 16.0787 7.29186 16.4449 7.74196 16.4449H7.96835V17.084C7.96835 17.6112 8.39723 18.04 8.92435 18.04H10.047C10.5742 18.04 11.003 17.6112 11.003 17.084V16.4449H11.2294C11.6795 16.4449 12.0457 16.0788 12.0457 15.6287V15.316H12.6635C13.3447 15.316 13.8989 14.7618 13.8989 14.0806V13.765C14.6562 13.7356 15.3007 13.26 15.5764 12.5941C15.607 12.6137 15.6388 12.6315 15.6719 12.647V14.4497C15.6719 14.6942 15.5767 14.9241 15.4038 15.097L15.2203 15.2805C14.9375 15.2763 14.6673 15.3776 14.4564 15.5687L14.1123 15.8807C14.0299 15.9555 13.9814 16.0579 13.976 16.169C13.9706 16.2802 14.0088 16.3868 14.0835 16.4692L15.1964 17.6967C15.2712 17.7791 15.3735 17.8275 15.4847 17.8329C15.4917 17.8333 15.4986 17.8334 15.5055 17.8334C15.6091 17.8334 15.7076 17.7955 15.7849 17.7255L16.1291 17.4134C16.4513 17.1212 16.5623 16.6819 16.4531 16.2889L16.5244 16.2175C16.9966 15.7453 17.2566 15.1175 17.2566 14.4497V12.647C17.5401 12.5137 17.737 12.2254 17.737 11.892V11.5425C17.9271 11.4715 18.0632 11.2886 18.0632 11.0739V9.74961C18.063 8.97674 17.4343 8.34795 16.6614 8.34795ZM16.6614 8.87616C17.143 8.87616 17.5348 9.26799 17.5348 9.74961V11.0461H17.4727H15.7197V9.26049C15.7197 9.12883 15.7062 9.00029 15.6805 8.87613H16.6614V8.87616ZM9.91724 8.99864V9.79719H9.05394V8.99864C9.05394 8.8157 8.90508 8.66689 8.72218 8.66689H8.05526C7.54596 8.66689 7.10484 8.34989 6.93028 7.89362H12.0761C11.9016 8.34989 11.4604 8.66689 10.9511 8.66689H10.249C10.0661 8.66685 9.91724 8.8157 9.91724 8.99864ZM14.6991 2.50069V4.30651C14.6991 4.50025 14.5414 4.65791 14.3477 4.65791H13.9983V2.14933H14.3477C14.5415 2.14933 14.6991 2.30694 14.6991 2.50069ZM4.27214 4.30651V2.50069C4.27214 2.30694 4.4298 2.14929 4.62354 2.14929H4.97287V4.65787H4.62354C4.42976 4.65791 4.27214 4.50029 4.27214 4.30651ZM5.50104 4.73101V2.07619C5.50104 1.24471 6.17751 0.56825 7.00898 0.56825H11.9622C12.7937 0.56825 13.4701 1.24471 13.4701 2.07619V4.73101C13.4701 5.56249 12.7937 6.23895 11.9622 6.23895H7.00898C6.17751 6.23898 5.50104 5.56252 5.50104 4.73101ZM7.90662 6.76719H11.0998V7.36538H7.90662V6.76719ZM3.2691 11.8919C3.2691 12.0605 3.13191 12.1977 2.9633 12.1977H2.08602C1.91741 12.1977 1.78022 12.0605 1.78022 11.8919V11.5743H3.2691V11.8919ZM1.45399 9.74961C1.45399 9.26799 1.84582 8.87616 2.32748 8.87616H3.32594C3.30027 9.00033 3.28671 9.12886 3.28671 9.26053V11.0462H1.51611H1.45399V9.74961ZM2.26057 14.4497V12.7259H2.78878V14.4497C2.78878 14.826 2.93214 15.1801 3.19251 15.4505C3.10754 15.504 3.02919 15.5692 2.95992 15.6456L2.8084 15.8127C2.45506 15.4441 2.26057 14.962 2.26057 14.4497ZM4.43916 16.1971L3.47616 17.2592L3.2147 17.0221C2.97566 16.8054 2.95749 16.4346 3.17424 16.1956L3.35115 16.0004C3.45613 15.8846 3.5999 15.8167 3.75604 15.809C3.76583 15.8085 3.77559 15.8083 3.78531 15.8083C3.93078 15.8083 4.06917 15.8616 4.17766 15.96L4.43916 16.1971ZM8.49646 17.084V16.4449H9.22148V17.5118H8.92428C8.68841 17.5118 8.49646 17.3199 8.49646 17.084ZM10.4747 17.084C10.4747 17.3199 10.2828 17.5118 10.0469 17.5118H9.74973V16.4449H10.4748V17.084H10.4747ZM12.6635 14.7878H11.7818C11.7817 14.7878 11.7816 14.7878 11.7815 14.7878C11.7813 14.7878 11.7813 14.7878 11.7811 14.7878H8.97122C8.82533 14.7878 8.70711 14.9061 8.70711 15.0519C8.70711 15.1978 8.82533 15.316 8.97122 15.316H11.5174V15.6287C11.5174 15.7875 11.3882 15.9167 11.2293 15.9167H10.7388H8.23236H7.74186C7.58301 15.9167 7.45381 15.7875 7.45381 15.6287V15.316H7.84567C7.99156 15.316 8.10977 15.1978 8.10977 15.0519C8.10977 14.9061 7.99156 14.7878 7.84567 14.7878H7.19005C7.18995 14.7878 7.18984 14.7878 7.1897 14.7878C7.18956 14.7878 7.18949 14.7878 7.18935 14.7878H6.30773C5.91777 14.7878 5.60052 14.4706 5.60052 14.0806V13.7668H13.3706V14.0806C13.3707 14.4706 13.0534 14.7878 12.6635 14.7878ZM13.8246 13.2386H5.18186C4.42814 13.2386 3.81496 12.6254 3.81496 11.8717V9.26049C3.81496 8.50677 4.42814 7.89359 5.18186 7.89359H6.37671C6.57004 8.64995 7.25425 9.19506 8.0553 9.19506H8.52576V9.79719H6.63483C6.27794 9.79719 5.98756 10.0876 5.98756 10.4445V11.6669C5.98756 12.0238 6.27794 12.3142 6.63483 12.3142H10.388C10.5338 12.3142 10.6521 12.1959 10.6521 12.0501C10.6521 11.9042 10.5338 11.786 10.388 11.786H6.63483C6.56919 11.786 6.51577 11.7326 6.51577 11.6669V10.4445C6.51577 10.3788 6.56919 10.3254 6.63483 10.3254H12.354C12.4197 10.3254 12.4731 10.3788 12.4731 10.4445V11.6669C12.4731 11.7326 12.4197 11.786 12.354 11.786H11.5135C11.3676 11.786 11.2494 11.9042 11.2494 12.0501C11.2494 12.1959 11.3676 12.3142 11.5135 12.3142H12.354C12.7109 12.3142 13.0013 12.0238 13.0013 11.6669V10.4445C13.0013 10.0876 12.7109 9.79719 12.354 9.79719H10.4455V9.19506H10.9512C11.7522 9.19506 12.4364 8.64995 12.6298 7.89359H13.8246C14.5783 7.89359 15.1915 8.5068 15.1915 9.26049V11.3102V11.8717C15.1915 12.6254 14.5783 13.2386 13.8246 13.2386ZM15.7197 11.5743H17.2086V11.8919C17.2086 12.0605 17.0714 12.1977 16.9028 12.1977H16.0255C15.8569 12.1977 15.7197 12.0605 15.7197 11.8919V11.8717V11.5743H15.7197ZM15.7741 17.0221L15.5126 17.2592L14.5496 16.1971L14.8111 15.96C14.9269 15.855 15.0769 15.8013 15.2327 15.809C15.3889 15.8167 15.5327 15.8846 15.6376 16.0004L15.8145 16.1956C16.0313 16.4346 16.0132 16.8054 15.7741 17.0221ZM16.1805 15.8128L16.0289 15.6456C15.9596 15.5692 15.8812 15.504 15.7963 15.4505C16.0566 15.1802 16.2 14.826 16.2 14.4497V12.7259H16.7282V14.4497C16.7282 14.962 16.5338 15.444 16.1805 15.8128Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const gift_shop_Robot = (Robot);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/HealthBeauty.jsx



const HealthBeauty = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_26169)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.87536 10.332C8.70011 10.2487 8.49041 10.323 8.40695 10.4983L8.34866 10.6208C8.26523 10.796 8.33966 11.0057 8.51487 11.0892C8.56367 11.1124 8.61507 11.1234 8.66573 11.1234C8.79707 11.1234 8.92307 11.0495 8.98329 10.923L9.04158 10.8005C9.12504 10.6252 9.05058 10.4155 8.87536 10.332Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M4.9352 8.29532C4.79795 8.15807 4.57541 8.15807 4.43816 8.29532C4.14679 8.58673 3.67263 8.58673 3.38123 8.29532C3.24398 8.15807 3.02144 8.15807 2.88419 8.29532C2.74694 8.43257 2.74694 8.65511 2.88419 8.79236C3.16691 9.07505 3.5383 9.21644 3.90969 9.21644C4.28108 9.21644 4.65244 9.07508 4.93516 8.79236C5.07241 8.65514 5.07241 8.4326 4.9352 8.29532Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.7826 0.933737C15.5443 -0.304466 13.5322 -0.308052 12.2891 0.922206C11.901 0.729549 11.489 0.56428 11.0546 0.428225C9.62957 -0.0181538 8.46371 -0.00159524 8.36261 0.000619608C6.45605 0.00188523 4.79301 0.801866 4.02158 2.08904C3.91977 2.25892 3.83494 2.43498 3.76687 2.61614C3.40353 2.96211 1.76385 4.65668 1.76385 7.05947C1.76385 8.65985 0.994065 9.49541 0.53524 9.85105C0.363783 9.98394 0.270935 10.1926 0.286932 10.4093C0.302928 10.626 0.425447 10.8189 0.614693 10.9252C0.787592 11.0224 0.982041 11.1157 1.17006 11.2059C1.33631 11.2856 1.57256 11.399 1.68777 11.4727V12.0987C1.68777 12.1844 1.67142 12.268 1.63918 12.3474L1.55203 12.5619C1.43267 12.8556 1.47662 13.1919 1.66604 13.445V13.5221C1.66604 13.7501 1.76645 13.9612 1.93369 14.1044V14.5171C1.93369 15.4014 2.65312 16.1209 3.53748 16.1209H4.57522C4.76932 16.1209 4.92668 15.9635 4.92668 15.7694C4.92668 15.5753 4.76932 15.4179 4.57522 15.4179H3.53748C3.04076 15.4179 2.63656 15.0138 2.63656 14.517V13.9106C2.63656 13.7698 2.55251 13.6427 2.42299 13.5874L2.4078 13.5809C2.38418 13.5708 2.36892 13.5477 2.36892 13.5221V13.3237C2.36892 13.2449 2.34241 13.1683 2.29369 13.1063L2.23167 13.0275C2.18688 12.9706 2.17602 12.8936 2.20326 12.8265L2.29042 12.6119C2.35693 12.4481 2.39068 12.2755 2.39068 12.0987V11.3505C2.39068 11.0118 2.04569 10.8463 1.47412 10.5721C1.32404 10.5001 1.16971 10.426 1.03319 10.353C1.59844 9.89169 2.4668 8.88538 2.4668 7.05943C2.4668 5.73819 3.05492 4.63724 3.56515 3.93053C3.59303 4.54291 3.77826 5.18332 4.12107 5.82453C5.02308 7.51158 6.59386 8.21871 7.856 8.78683C9.05687 9.3274 9.73655 9.66768 9.742 10.375C9.74597 10.8945 9.62651 11.2766 9.38692 11.5109C9.11031 11.7814 8.74314 11.7744 8.74092 11.7744C8.62297 11.7662 8.51241 11.8177 8.44058 11.9115C8.36872 12.0052 8.35238 12.1291 8.39108 12.2407C8.40138 12.2705 8.65036 12.9764 9.22035 13.6643C9.93275 14.5241 10.832 14.9777 11.8347 14.9879L12.7791 17.7566C12.8289 17.9028 12.9654 17.9947 13.1117 17.9947C13.1493 17.9947 13.1876 17.9887 13.2251 17.9758C13.4089 17.9132 13.507 17.7134 13.4443 17.5297L12.5143 14.803C14.2676 13.8634 15.5004 12.4059 16.0881 10.5702C16.5565 9.10697 16.5789 7.4651 16.1831 5.91007C16.4 5.77823 16.6009 5.62084 16.7825 5.43926C18.0247 4.19712 18.0247 2.17595 16.7826 0.933737ZM15.4187 10.356C14.8671 12.0788 13.683 13.4353 11.9921 14.2827C11.137 14.3211 10.3913 13.9678 9.77473 13.2316C9.52614 12.9348 9.34621 12.6293 9.2284 12.3981C9.42893 12.3353 9.65924 12.2236 9.86659 12.025C10.2559 11.6521 10.4505 11.0952 10.4449 10.3697C10.4358 9.17728 9.32283 8.67634 8.14457 8.14594C6.91902 7.59426 5.52996 6.96901 4.74095 5.49319C4.2508 4.57635 4.13542 3.70458 4.39666 2.94024C4.39775 2.93733 4.39877 2.93437 4.39979 2.93146C4.45706 2.76587 4.53177 2.60521 4.62458 2.45034C5.2703 1.37284 6.70442 0.703463 8.36725 0.703463C8.37062 0.703463 8.37396 0.703428 8.37737 0.703323C8.3883 0.702971 9.49601 0.676498 10.8446 1.0989C12.6392 1.66108 13.9612 2.70856 14.7737 4.21227C15.8006 6.11285 16.0418 8.40954 15.4187 10.356ZM15.973 5.20758C15.8162 4.75065 15.6227 4.30498 15.3921 3.87814C14.8151 2.81052 13.9816 1.93393 12.9362 1.28294C13.9108 0.465948 15.3697 0.514815 16.2856 1.43074C17.2537 2.39887 17.2537 3.97415 16.2856 4.94229C16.1881 5.03978 16.0837 5.12833 15.973 5.20758Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.30132 16.4638L8.20019 14.5566L8.16296 13.2543C8.13181 12.1636 7.28824 11.2745 6.20075 11.186C5.40108 11.1208 4.63331 11.5643 4.28987 12.2893L4.2725 12.326C3.81723 13.287 4.14569 14.4495 5.03651 15.0302L6.13265 15.7447L7.33014 17.8188C7.39522 17.9316 7.51334 17.9946 7.63481 17.9946C7.6944 17.9946 7.75487 17.9794 7.8102 17.9474C7.97828 17.8504 8.0359 17.6354 7.93884 17.4673L6.87505 15.6248L7.29889 15.3801L7.72273 15.1353L8.69255 16.8151C8.78955 16.9832 9.00449 17.0408 9.17265 16.9437C9.3408 16.8468 9.39839 16.6319 9.30132 16.4638ZM6.4062 15.084L5.42042 14.4414C4.82269 14.0518 4.6023 13.2717 4.90777 12.6269L4.92514 12.5902C5.12996 12.1579 5.57145 11.8826 6.04483 11.8826C6.0777 11.8826 6.11071 11.884 6.1438 11.8867C6.87346 11.946 7.43948 12.5427 7.46036 13.2744L7.49415 14.4559L6.4062 15.084Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.82846 17.3998C9.7631 17.3345 9.6724 17.2969 9.57997 17.2969C9.4872 17.2969 9.39688 17.3345 9.33149 17.3998C9.2661 17.4652 9.22852 17.5559 9.22852 17.6483C9.22852 17.7407 9.26613 17.8314 9.33149 17.8968C9.39684 17.9621 9.4872 17.9998 9.57997 17.9998C9.6724 17.9998 9.76307 17.9621 9.82846 17.8968C9.89381 17.8314 9.93143 17.7407 9.93143 17.6483C9.93143 17.5559 9.89381 17.4652 9.82846 17.3998Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6.94844 2.06006C6.87211 1.88164 6.6656 1.79874 6.48708 1.87507C5.86724 2.14004 5.4202 2.5867 5.22828 3.13282C5.03598 3.68002 5.10819 4.29448 5.43711 4.90968C5.50042 5.02812 5.62182 5.09548 5.74736 5.09548C5.80329 5.09548 5.86 5.08209 5.91274 5.05389C6.08391 4.96238 6.14849 4.74944 6.05698 4.57823C5.8201 4.13516 5.76441 3.72724 5.89143 3.36576C6.01725 3.00777 6.32691 2.70785 6.76341 2.52131C6.94186 2.44509 7.02469 2.23858 6.94844 2.06006Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.80462 1.61719L7.78494 1.61722C7.59087 1.61835 7.43439 1.77662 7.43555 1.97075C7.43668 2.16415 7.59383 2.32014 7.78697 2.32014C7.78768 2.32014 7.78838 2.32014 7.78908 2.32014L7.80462 2.3201C7.99872 2.3201 8.15608 2.16274 8.15608 1.96864C8.15608 1.77455 7.99872 1.61719 7.80462 1.61719Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_26169",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_HealthBeauty = (HealthBeauty);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/Mascara.jsx



const Mascara = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.6489 12.6262C14.5509 12.5144 14.4095 12.4503 14.2609 12.4503H13.295V5.89528C13.295 5.49946 13.0336 5.16357 12.6744 5.05114V4.36852H13.0313C13.177 4.36852 13.295 4.25046 13.295 4.10484C13.295 3.95923 13.177 3.84117 13.0313 3.84117H12.6744V3.36628H13.2925C13.4382 3.36628 13.5562 3.24823 13.5562 3.10261C13.5562 2.95699 13.4382 2.83894 13.2925 2.83894H12.6744V2.44793H13.7198C13.8655 2.44793 13.9835 2.32987 13.9835 2.18426C13.9835 2.03864 13.8655 1.92059 13.7198 1.92059H12.6744V1.52958H13.2925C13.4382 1.52958 13.5562 1.41152 13.5562 1.26591C13.5562 1.12029 13.4382 1.00223 13.2925 1.00223H12.6744V0.527344H12.9145C13.0602 0.527344 13.1782 0.409289 13.1782 0.263672C13.1782 0.118055 13.0602 0 12.9145 0H11.9069C11.7613 0 11.6433 0.118055 11.6433 0.263672C11.6433 0.409289 11.7613 0.527344 11.9069 0.527344H12.1471V1.00223H11.5289C11.3833 1.00223 11.2653 1.12029 11.2653 1.26591C11.2653 1.41152 11.3833 1.52958 11.5289 1.52958H12.1471V1.92059H11.1016C10.9559 1.92059 10.8379 2.03864 10.8379 2.18426C10.8379 2.32987 10.9559 2.44793 11.1016 2.44793H12.147V2.83897H11.5289C11.3832 2.83897 11.2652 2.95703 11.2652 3.10264C11.2652 3.24826 11.3832 3.36632 11.5289 3.36632H12.147V3.84121H11.7901C11.6444 3.84121 11.5264 3.95926 11.5264 4.10488C11.5264 4.2505 11.6444 4.36855 11.7901 4.36855H12.147V5.05118C11.7878 5.16361 11.5264 5.49949 11.5264 5.89532V9.23178C11.5264 9.3774 11.6444 9.49546 11.7901 9.49546C11.9357 9.49546 12.0537 9.3774 12.0537 9.23178V5.89532C12.0537 5.69848 12.2139 5.53837 12.4107 5.53837C12.6075 5.53837 12.7676 5.69851 12.7676 5.89532V12.4503H12.0537V10.2865C12.0537 10.1409 11.9357 10.0228 11.79 10.0228C11.6444 10.0228 11.5264 10.1409 11.5264 10.2865V12.4503H10.5605C10.4119 12.4503 10.2705 12.5144 10.1726 12.6262C10.0748 12.7377 10.0299 12.886 10.0494 13.0329C10.2393 14.4664 10.4864 15.9302 10.8046 17.5077C10.8619 17.793 11.115 18 11.4065 18H13.4149C13.7062 18 13.9593 17.793 14.0166 17.508C14.3349 15.93 14.582 14.4662 14.7719 13.0329C14.7915 12.886 14.7466 12.7378 14.6489 12.6262ZM13.4997 17.4039C13.4917 17.4437 13.4561 17.4727 13.4149 17.4727H11.4065C11.3654 17.4727 11.3297 17.4438 11.3217 17.4037C11.0068 15.8428 10.7622 14.3948 10.574 12.9776H11.7901H13.0313H14.2474C14.0592 14.3946 13.8147 15.8426 13.4997 17.4039Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.61311 6.32394C8.61191 6.31149 8.61079 6.29915 8.60959 6.28671C8.60115 6.19892 8.59243 6.11089 8.58347 6.02268C8.5821 6.00908 8.58083 5.99551 8.57943 5.9819C8.57932 5.98071 8.57904 5.97955 8.5789 5.97835C8.5404 5.60176 8.4979 5.22175 8.45047 4.83732C8.41869 4.57962 8.19868 4.38528 7.93874 4.38528H7.54597V3.44053C7.54597 3.18417 7.33739 2.97559 7.08103 2.97559H4.96754C4.71118 2.97559 4.5026 3.18417 4.5026 3.44053V4.38528H4.10984C3.84989 4.38528 3.62992 4.57962 3.5981 4.83732C3.5511 5.21817 3.50895 5.59645 3.47063 5.97206C3.47017 5.97536 3.4695 5.97856 3.46915 5.9819C3.42531 6.41186 3.38442 6.87628 3.35721 7.22967C3.35697 7.23265 3.35711 7.23561 3.357 7.23856C3.31791 7.74703 3.287 8.24818 3.26514 8.73917C3.25867 8.88464 3.37134 9.00783 3.51682 9.0143C3.66198 9.02 3.78549 8.90809 3.79195 8.76262C3.8102 8.35298 3.83513 7.93585 3.86554 7.51355H8.18431C8.44643 11.1383 8.26611 14.3939 7.64033 17.4052C7.63225 17.4442 7.59674 17.4726 7.55596 17.4726H4.49269C4.45187 17.4726 4.4164 17.4442 4.40828 17.405C3.92267 15.0684 3.70392 12.5132 3.75806 9.81045C3.76098 9.66483 3.64532 9.54446 3.49974 9.54154C3.35528 9.53929 3.23374 9.65429 3.23083 9.79987C3.17588 12.5421 3.39834 15.137 3.89194 17.5121C3.95047 17.7948 4.20314 18 4.49272 18H7.55599C7.84558 18 8.09824 17.7948 8.15674 17.5123C8.85818 14.1368 9.00868 10.4635 8.61311 6.32394ZM5.02995 3.50293H7.01863V4.38528H5.02995V3.50293ZM3.90632 6.98624C3.92267 6.78909 3.93493 6.63974 3.97062 6.27233H6.69305C6.83867 6.27233 6.95672 6.15427 6.95672 6.00865C6.95672 5.86304 6.83867 5.74498 6.69305 5.74498H4.02465C4.05433 5.46887 4.08579 5.19155 4.12014 4.91266H4.76627H7.2823H7.92844C7.96289 5.19229 7.99478 5.4696 8.02445 5.74498H7.7477C7.60208 5.74498 7.48403 5.86304 7.48403 6.00865C7.48403 6.15427 7.60208 6.27233 7.7477 6.27233H8.07842C8.10176 6.5123 8.12331 6.75101 8.14286 6.98624H3.90632Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_Mascara = (Mascara);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/Powder.jsx



const Powder = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6.92992 14.1011C5.9633 14.0387 5.07986 13.5328 4.53682 12.7307C4.47785 12.6388 4.37365 12.5863 4.26474 12.5934C4.15583 12.6006 4.05939 12.6663 4.01292 12.7651C3.96645 12.8638 3.97729 12.98 4.04122 13.0685C4.68614 14.015 5.72766 14.6156 6.86992 14.6996C6.88042 14.6996 6.89032 14.7011 6.89992 14.7011C7.05978 14.7011 7.19158 14.5758 7.19958 14.4161C7.20758 14.2564 7.08898 14.1186 6.92992 14.1026V14.1011Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.01601 11.6152C3.96235 11.4369 3.92332 11.2545 3.89931 11.0698C3.88274 10.905 3.73567 10.7848 3.57081 10.8013C3.40595 10.8179 3.28574 10.965 3.30231 11.1298C3.33031 11.3516 3.37708 11.5706 3.44211 11.7844C3.4923 11.9389 3.65626 12.0253 3.81206 11.9795C3.96786 11.9337 4.05891 11.7723 4.01751 11.6152H4.01601Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.4994 2.4C16.1014 2.39892 15.7195 2.55719 15.4389 2.8395L13.0431 5.2353C12.8387 5.18258 12.6215 5.23932 12.4689 5.3853L11.7018 6.1524C11.0243 5.49727 10.2205 4.98691 9.33934 4.6524C11.7123 4.3551 13.7994 3.6021 13.7994 2.4C13.7994 0.839999 10.2441 0 6.89944 0C3.55474 0 -0.00056394 0.839999 -0.00056394 2.4C-0.00056394 3.6 2.07934 4.3524 4.44724 4.65C0.969475 5.96591 -0.842639 9.79862 0.347356 13.3215C1.53735 16.8443 5.30242 18.7931 8.86577 17.7305C12.4291 16.668 14.512 12.9754 13.5783 9.37619L13.7307 8.95349H13.7418C13.9009 8.95354 14.0535 8.89041 14.166 8.77799L15.0144 7.92929C15.1274 7.81706 15.1907 7.6643 15.1902 7.50509C15.1894 7.45316 15.182 7.40154 15.168 7.35149L17.5599 4.9593C17.988 4.53019 18.1157 3.88569 17.8837 3.32579C17.6517 2.76588 17.1055 2.40061 16.4994 2.4ZM11.8746 12.3456C11.5243 12.336 11.1781 12.2676 10.8504 12.1431L11.4594 11.0457C11.5127 10.9518 11.5114 10.8365 11.4561 10.7438C11.4008 10.6511 11.2999 10.5953 11.1919 10.5977C11.084 10.6001 10.9857 10.6603 10.9344 10.7553L10.3044 11.8911C10.018 11.73 9.75009 11.5379 9.50554 11.3184L10.7721 10.0518C10.8858 9.93408 10.8842 9.74697 10.7685 9.63125C10.6528 9.51553 10.4657 9.5139 10.3479 9.62759L9.08134 10.8942C8.8618 10.6496 8.66966 10.3817 8.50834 10.0953L9.64444 9.46529C9.73948 9.41407 9.79966 9.31574 9.80203 9.2078C9.80441 9.09987 9.7486 8.99899 9.65591 8.94364C9.56322 8.88829 9.44794 8.88701 9.35404 8.94029L8.25604 9.54869C8.13202 9.22233 8.06298 8.87765 8.05174 8.52869L11.7393 7.19999L13.1994 8.66039L11.8746 12.3456ZM7.84804 7.96559C7.60934 8.05141 7.45114 8.27895 7.45384 8.53259C7.47109 9.08319 7.60515 9.62383 7.84714 10.1187C8.36774 11.1761 9.22334 12.0317 10.2807 12.5523C10.4368 12.6262 10.5971 12.6908 10.7607 12.7458C9.93676 14.6804 7.80912 15.7075 5.7818 15.1493C3.75448 14.5912 2.45235 12.6198 2.73465 10.5361C3.01696 8.45241 4.79669 6.89859 6.89944 6.89999C7.67218 6.89796 8.43006 7.11225 9.08734 7.51859L7.84804 7.96559ZM8.27764 4.1421C8.1654 3.99043 7.98812 3.90068 7.79944 3.9H5.99944C5.81081 3.90061 5.63354 3.99024 5.52124 4.1418C3.28924 3.9537 2.09944 3.3669 2.09944 3C2.09944 2.58 3.74944 1.8 6.89944 1.8C10.0494 1.8 11.6994 2.58 11.6994 3C11.6994 3.3669 10.5096 3.9537 8.27764 4.1418V4.1421ZM5.99944 4.5H7.79944V5.1H5.99944V4.5ZM0.599436 2.4C0.599436 1.5504 3.29344 0.6 6.89944 0.6C10.5054 0.6 13.1994 1.5504 13.1994 2.4C13.1994 2.6943 12.8553 3.0177 12.2304 3.3084C12.2742 3.21136 12.2977 3.10642 12.2994 3C12.2994 1.8183 9.58294 1.2 6.89944 1.2C4.21594 1.2 1.49944 1.8183 1.49944 3C1.50122 3.10642 1.5247 3.21136 1.56844 3.3084C0.943537 3.0177 0.599436 2.6943 0.599436 2.4ZM13.1994 11.1C13.1939 14.4591 10.5547 17.2235 7.19944 17.3847V17.1C7.19944 16.9343 7.06512 16.8 6.89944 16.8C6.73375 16.8 6.59944 16.9343 6.59944 17.1V17.3847C3.47417 17.2394 0.930444 14.8199 0.629019 11.7058C0.327595 8.59168 2.36005 5.7292 5.39944 4.9872V5.1C5.39944 5.43137 5.66807 5.7 5.99944 5.7H7.79944C8.13081 5.7 8.39944 5.43137 8.39944 5.1V4.986C9.53498 5.26632 10.5705 5.85619 11.3907 6.68999L9.78184 7.26959C8.95394 6.63796 7.94077 6.29715 6.89944 6.3C4.48448 6.29821 2.44422 8.09088 2.13531 10.486C1.8264 12.8811 3.34504 15.1328 5.68142 15.7438C8.0178 16.3548 10.4443 15.1349 11.3475 12.8952C11.5193 12.9256 11.6931 12.9424 11.8674 12.9456H11.8743C12.1253 12.9452 12.349 12.7875 12.4338 12.5514L13.1688 10.5114C13.1871 10.7067 13.1994 10.9026 13.1994 11.1ZM13.7418 8.35499L12.0444 6.65759L12.8931 5.8092L14.5902 7.50629L13.7418 8.35499ZM17.1357 4.5363L14.8023 6.86999L13.5294 5.5971L15.8628 3.2637C16.219 2.92381 16.7793 2.92381 17.1354 3.2637C17.4868 3.61515 17.4868 4.18485 17.1354 4.5363H17.1357Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.4072 8.56718L11.1951 8.77928C11.1171 8.8546 11.0858 8.96614 11.1133 9.07103C11.1408 9.17592 11.2227 9.25783 11.3276 9.28529C11.4324 9.31274 11.544 9.28147 11.6193 9.20348L11.8314 8.99138C11.9094 8.91606 11.9407 8.80452 11.9132 8.69963C11.8858 8.59474 11.8038 8.51283 11.699 8.48537C11.5941 8.45792 11.4825 8.48919 11.4072 8.56718Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_Powder = (Powder);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/Lotion.jsx



const Lotion = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.3555 4.5H10.6523V3.23157C10.6523 3.16631 10.6264 3.10374 10.5802 3.05759C10.5341 3.01145 10.4715 2.98551 10.4062 2.98547H10.0898V2.00391H10.9564C11.3218 2.0034 11.6786 2.11426 11.9794 2.32172L12.1236 2.42016C12.2695 2.52052 12.4494 2.55879 12.6235 2.52655C12.7977 2.49431 12.952 2.3942 13.0523 2.24825C13.1527 2.10229 13.191 1.92244 13.1587 1.74826C13.1265 1.57409 13.0264 1.41985 12.8804 1.31949L12.7363 1.22021C12.2128 0.859521 11.5918 0.66689 10.9561 0.667973H7.45312C7.27597 0.667973 7.10607 0.738348 6.9808 0.863617C6.85553 0.988885 6.78516 1.15879 6.78516 1.33594C6.78516 1.5131 6.85553 1.683 6.9808 1.80827C7.10607 1.93353 7.27597 2.00391 7.45312 2.00391H7.91016V2.98547H7.59375C7.52849 2.98551 7.46592 3.01145 7.41978 3.05759C7.37363 3.10374 7.34769 3.16631 7.34766 3.23157V4.5H6.64453C6.13188 4.50056 5.64039 4.70446 5.27789 5.06696C4.91539 5.42945 4.7115 5.92095 4.71094 6.4336V15.3984C4.7115 15.9111 4.91539 16.4026 5.27789 16.7651C5.64039 17.1276 6.13188 17.3315 6.64453 17.332H11.3555C11.8681 17.3315 12.3596 17.1276 12.7221 16.7651C13.0846 16.4026 13.2885 15.9111 13.2891 15.3984V6.4336C13.2885 5.92095 13.0846 5.42945 12.7221 5.06696C12.3596 4.70446 11.8681 4.50056 11.3555 4.5ZM7.27664 1.33594C7.27668 1.31281 7.28127 1.28991 7.29016 1.26855C7.29905 1.2472 7.31207 1.2278 7.32846 1.21148C7.34485 1.19515 7.36429 1.18222 7.38568 1.17341C7.40708 1.16461 7.42999 1.16011 7.45312 1.16016H10.9561C11.4923 1.15943 12.0159 1.32203 12.4574 1.62633L12.6015 1.72561C12.6216 1.7382 12.6388 1.75471 12.6523 1.77413C12.6658 1.79356 12.6752 1.8155 12.68 1.83866C12.6848 1.86181 12.6849 1.8857 12.6802 1.90888C12.6756 1.93206 12.6663 1.95406 12.6529 1.97357C12.6395 1.99307 12.6224 2.00968 12.6024 2.02239C12.5825 2.0351 12.5602 2.04365 12.5369 2.04754C12.5135 2.05142 12.4897 2.05055 12.4667 2.04499C12.4437 2.03943 12.4221 2.02928 12.4031 2.01516L12.2588 1.91672C11.8761 1.65283 11.422 1.51181 10.9571 1.51243H7.45312C7.42993 1.51248 7.40696 1.50795 7.38552 1.49911C7.36408 1.49026 7.34461 1.47726 7.32821 1.46086C7.31181 1.44446 7.29881 1.42498 7.28996 1.40355C7.28111 1.38211 7.27658 1.35913 7.27664 1.33594ZM8.40234 2.00391H9.59766V2.98547H8.40234V2.00391ZM7.83984 3.47766H10.1602V4.5H7.83984V3.47766ZM12.7969 15.3984C12.7965 15.7806 12.6445 16.147 12.3742 16.4172C12.104 16.6874 11.7376 16.8394 11.3555 16.8398H6.64453C6.26237 16.8394 5.89598 16.6874 5.62576 16.4172C5.35553 16.147 5.20353 15.7806 5.20312 15.3984V6.4336C5.20353 6.05144 5.35553 5.68505 5.62576 5.41482C5.89598 5.14459 6.26237 4.9926 6.64453 4.99219H11.3555C11.7376 4.9926 12.104 5.14459 12.3742 5.41482C12.6445 5.68505 12.7965 6.05144 12.7969 6.4336V15.3984Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.35156 5.83594H10.4649C10.5302 5.83594 10.5928 5.81001 10.6389 5.76386C10.6851 5.71771 10.711 5.65511 10.711 5.58984C10.711 5.52458 10.6851 5.46198 10.6389 5.41583C10.5928 5.36968 10.5302 5.34375 10.4649 5.34375H9.35156C9.28629 5.34375 9.2237 5.36968 9.17755 5.41583C9.1314 5.46198 9.10547 5.52458 9.10547 5.58984C9.10547 5.65511 9.1314 5.71771 9.17755 5.76386C9.2237 5.81001 9.28629 5.83594 9.35156 5.83594Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.7773 8.79688H6.22266C6.15739 8.79688 6.09479 8.8228 6.04864 8.86895C6.00249 8.91511 5.97656 8.9777 5.97656 9.04297V14.5977C5.9766 14.6629 6.00254 14.7255 6.04868 14.7716C6.09483 14.8178 6.1574 14.8437 6.22266 14.8438H11.7773C11.8426 14.8437 11.9052 14.8178 11.9513 14.7716C11.9975 14.7255 12.0234 14.6629 12.0234 14.5977V9.04297C12.0234 8.9777 11.9975 8.91511 11.9514 8.86895C11.9052 8.8228 11.8426 8.79688 11.7773 8.79688ZM11.5312 14.3516H6.46875V9.28906H11.5312V14.3516Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.808 2.66631C13.7631 2.62648 13.7051 2.60449 13.645 2.60449C13.5849 2.60449 13.5269 2.62648 13.4819 2.66631C13.4538 2.69078 12.8047 3.27339 12.8047 3.94403C12.8075 4.16501 12.8973 4.37597 13.0546 4.53122C13.2119 4.68648 13.424 4.77353 13.645 4.77353C13.866 4.77353 14.0781 4.68648 14.2354 4.53122C14.3926 4.37597 14.4824 4.16501 14.4853 3.94403C14.485 3.27339 13.8357 2.69078 13.808 2.66631ZM13.6449 4.29207C13.5526 4.29196 13.4642 4.25526 13.3989 4.19001C13.3337 4.12476 13.297 4.0363 13.2969 3.94403C13.2969 3.67839 13.4856 3.39264 13.6449 3.20504C13.8045 3.39278 13.9931 3.67839 13.9931 3.94403C13.993 4.03633 13.9563 4.12481 13.891 4.19006C13.8257 4.25531 13.7372 4.292 13.6449 4.29207Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_Lotion = (Lotion);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/Lipstick.jsx



const Lipstick = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#clip0_6820_26095)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12.2914 11.9182C12.2416 11.8659 12.1726 11.8363 12.1004 11.8363H11.8004V10.9727C11.8004 10.7675 11.6864 10.5886 11.5186 10.4955V5.89997C11.5186 5.59917 11.2739 5.35448 10.9731 5.35448H10.955V3.40623C10.955 3.13176 10.8539 2.86826 10.6702 2.66425L8.35087 0.0872604C8.3025 0.0335065 8.23412 0.00197125 8.16184 7.28096e-05C8.08903 -0.00161469 8.01959 0.0260885 7.96848 0.0772057C7.93079 0.114893 7.0458 1.01714 7.0458 2.51818V5.35452H7.02766C6.72686 5.35452 6.48217 5.59921 6.48217 5.9V10.4955C6.31433 10.5886 6.20036 10.7675 6.20036 10.9727V11.8363H5.9004C5.82819 11.8363 5.75911 11.8659 5.70936 11.9182C5.65958 11.9705 5.63346 12.041 5.63704 12.1131L5.89207 17.214C5.91408 17.6547 6.27703 18 6.71831 18H11.2824C11.7237 18 12.0866 17.6548 12.1087 17.214L12.3637 12.1131C12.3673 12.041 12.3412 11.9705 12.2914 11.9182ZM8.23148 0.74282L10.237 2.97113C10.1167 3.00045 9.95678 2.98347 9.77516 2.91949C9.45535 2.80685 9.10572 2.55857 8.81589 2.23833C8.52606 1.91806 8.31385 1.54544 8.23363 1.21599C8.1869 1.02428 8.18715 0.860277 8.23148 0.74282ZM7.00952 5.89997C7.00952 5.88998 7.01764 5.88183 7.02766 5.88183H9.00053C9.14615 5.88183 9.2642 5.76377 9.2642 5.61815C9.2642 5.47254 9.14615 5.35448 9.00053 5.35448H7.57314V2.51818C7.57314 2.11202 7.65049 1.75564 7.75599 1.45807C7.86825 1.83013 8.09469 2.22733 8.42488 2.59218C8.95669 3.17989 9.59875 3.50927 10.1165 3.50927C10.2267 3.50927 10.3309 3.49359 10.4276 3.46304V5.35448H10.1276C9.98202 5.35448 9.86397 5.47254 9.86397 5.61815C9.86397 5.76377 9.98202 5.88183 10.1276 5.88183H10.9731C10.9831 5.88183 10.9913 5.88995 10.9913 5.89997V10.4272H7.00952V5.89997ZM11.582 17.1877C11.574 17.3475 11.4424 17.4726 11.2824 17.4726H6.71831C6.55832 17.4726 6.42673 17.3475 6.41875 17.1877L6.17754 12.3636H7.02762C7.17324 12.3636 7.29129 12.2456 7.29129 12.1C7.29129 11.9543 7.17324 11.8363 7.02762 11.8363H6.72767V10.9727C6.72767 10.9627 6.73579 10.9546 6.74581 10.9546H11.2549C11.2649 10.9546 11.273 10.9627 11.273 10.9727V11.8363H8.15502C8.0094 11.8363 7.89134 11.9543 7.89134 12.1C7.89134 12.2456 8.0094 12.3636 8.15502 12.3636H11.8232L11.582 17.1877Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_26095",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_Lipstick = (Lipstick);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/FaceMask.jsx



const FaceMask = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_6820_26105)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.5156 8.47266H5.48438C5.29021 8.47266 5.13281 8.63005 5.13281 8.82422C5.13281 9.01839 5.29021 9.17578 5.48438 9.17578H12.5156C12.7098 9.17578 12.8672 9.01839 12.8672 8.82422C12.8672 8.63005 12.7098 8.47266 12.5156 8.47266Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.6462 6.73998C12.5719 6.71024 10.8048 6.01172 9.00002 6.01172C7.19528 6.01172 5.42819 6.71027 5.35384 6.73998C5.17362 6.81205 5.08598 7.01652 5.15802 7.19677C5.23002 7.37701 5.43455 7.4648 5.61484 7.39287C5.63182 7.38608 7.3338 6.71481 9.00006 6.71481C10.6663 6.71481 12.3683 7.38608 12.3851 7.3928C12.5661 7.46522 12.7703 7.37645 12.8421 7.19694C12.9142 7.01666 12.8265 6.81209 12.6462 6.73998Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.3853 10.2556C12.3683 10.2624 10.6663 10.9337 9.0001 10.9337C7.33387 10.9337 5.63189 10.2624 5.61487 10.2556C5.43466 10.1837 5.23012 10.2713 5.15805 10.4516C5.08594 10.6318 5.17362 10.8364 5.3539 10.9086C5.42826 10.9383 7.19532 11.6368 9.0001 11.6368C10.8049 11.6368 12.572 10.9383 12.6463 10.9086C12.8265 10.8365 12.9141 10.632 12.8421 10.4518C12.7701 10.2715 12.5657 10.1837 12.3853 10.2556Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.5349 3.5745C15.5841 3.41964 14.7072 4.0399 14.5203 4.95684H14.1335C13.2625 4.95684 12.3429 4.70614 11.4004 4.21171C10.6637 3.8252 9.8337 3.6209 9.00004 3.6209C8.16638 3.6209 7.33634 3.8252 6.59974 4.21171C5.65713 4.70614 4.73755 4.95684 3.86652 4.95684H3.4797C3.29309 4.04102 2.4171 3.41946 1.4651 3.5745C0.629859 3.71045 0 4.48821 0 5.38367V7.97434C0 10.7665 2.26951 13.0385 5.06074 13.0427C6.1849 13.951 7.57508 14.4491 9 14.4491C10.425 14.4491 11.8152 13.9509 12.9393 13.0427C13.9394 13.0412 14.9061 12.7489 15.7356 12.1971C15.8973 12.0896 15.9411 11.8713 15.8336 11.7097C15.726 11.548 15.5077 11.5041 15.3461 11.6117C14.8583 11.9362 14.3151 12.1562 13.7452 12.2636C14.6699 11.1934 15.1875 9.8521 15.1875 8.47247V5.3084C15.1875 4.67703 15.7482 4.1588 16.4219 4.26848C16.9207 4.34969 17.2969 4.82908 17.2969 5.38364V7.9743C17.2969 8.43176 17.2265 8.88228 17.0878 9.31337C17.0283 9.49819 17.1299 9.69626 17.3147 9.75574C17.4996 9.81519 17.6976 9.71362 17.7571 9.52881C17.9183 9.02801 18 8.50499 18 7.9743V5.38364C18 4.48821 17.3701 3.71045 16.5349 3.5745ZM0.703125 7.9743V5.38364C0.703125 4.82908 1.07926 4.34966 1.57806 4.26848C2.25162 4.15894 2.8125 4.67675 2.8125 5.3084V8.47247C2.8125 9.85186 3.32989 11.193 4.25443 12.2632C2.23509 11.8808 0.703125 10.1032 0.703125 7.9743ZM14.4844 8.47247C14.4844 11.3563 11.9417 13.7459 9 13.7459C6.05813 13.7459 3.51562 11.3561 3.51562 8.47247V5.65997H3.86648C4.85244 5.65997 5.88196 5.3822 6.92634 4.83432C7.57171 4.49573 8.26938 4.32403 9 4.32403C9.73062 4.32403 10.4283 4.49573 11.0737 4.83436C12.118 5.3822 13.1475 5.65997 14.1335 5.65997H14.4844V8.47247Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.6992 11.1797C16.8934 11.1797 17.0508 11.0223 17.0508 10.8281C17.0508 10.634 16.8934 10.4766 16.6992 10.4766C16.5051 10.4766 16.3477 10.634 16.3477 10.8281C16.3477 11.0223 16.5051 11.1797 16.6992 11.1797Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_6820_26105",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "18",
                        height: "18",
                        fill: "white"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_FaceMask = (FaceMask);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/Thermometer.jsx



const Thermometer = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.12998 10.5126C9.08451 10.5127 9.03949 10.5038 8.99748 10.4864C8.95548 10.469 8.91732 10.4434 8.88521 10.4112L7.58966 9.11569C7.52475 9.05078 7.48828 8.96273 7.48828 8.87093C7.48828 8.77912 7.52475 8.69108 7.58966 8.62616L11.7072 4.50863C11.7393 4.47648 11.7775 4.45098 11.8195 4.43358C11.8615 4.41618 11.9065 4.40723 11.952 4.40723C11.9974 4.40723 12.0425 4.41618 12.0845 4.43358C12.1265 4.45098 12.1646 4.47648 12.1968 4.50863L13.4923 5.80414C13.5244 5.83629 13.5499 5.87445 13.5673 5.91645C13.5847 5.95845 13.5937 6.00346 13.5937 6.04893C13.5937 6.09439 13.5847 6.1394 13.5673 6.1814C13.5499 6.2234 13.5244 6.26156 13.4923 6.29371L9.37475 10.4112C9.34263 10.4434 9.30448 10.469 9.26248 10.4864C9.22047 10.5038 9.17544 10.5127 9.12998 10.5126ZM8.324 8.87093L9.12998 9.67691L12.7579 6.04894L11.952 5.24296L8.324 8.87093Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.1669 1.8334C15.7015 1.36913 15.0711 1.1084 14.4137 1.1084C13.7564 1.1084 13.1259 1.36913 12.6606 1.8334L6.23774 8.25618C5.78035 8.71339 5.45915 9.28881 5.31005 9.9181L5.09616 10.8205C4.97666 11.3249 4.71922 11.7861 4.35262 12.1526L1.4181 15.087C1.22109 15.2855 1.11079 15.5541 1.11133 15.8337C1.11187 16.1134 1.22322 16.3815 1.42099 16.5793C1.61876 16.7771 1.88684 16.8884 2.16654 16.8889C2.44623 16.8895 2.71474 16.7792 2.91328 16.5822L5.84773 13.6477C6.21424 13.281 6.67553 13.0236 7.18 12.9041L8.08239 12.6901C8.71167 12.541 9.28708 12.2198 9.74428 11.7624L16.1669 5.33973C16.6312 4.8744 16.8919 4.2439 16.8919 3.58657C16.8919 2.92923 16.6312 2.29874 16.1669 1.8334ZM2.42385 16.0926C2.3554 16.1611 2.26256 16.1995 2.16576 16.1995C2.06895 16.1995 1.97611 16.1611 1.90766 16.0926C1.83921 16.0242 1.80076 15.9313 1.80076 15.8345C1.80076 15.7377 1.83921 15.6449 1.90766 15.5764L2.67266 14.8114L3.18871 15.3275L2.42385 16.0926ZM9.25454 11.273C8.88807 11.6396 8.42686 11.897 7.92247 12.0166L7.02008 12.2305C6.39079 12.3796 5.81538 12.7008 5.3582 13.1582L3.67817 14.8382L3.16213 14.3221L4.84211 12.6421C5.29951 12.1849 5.62071 11.6095 5.76981 10.9802L5.98376 10.0778C6.10327 9.57342 6.36071 9.11221 6.7273 8.74575L12.6471 2.8259L15.1744 5.35316L9.25454 11.273ZM15.6774 4.8502L15.6639 4.86363L13.1367 2.33637L13.1501 2.32294C13.4855 1.98906 13.9396 1.80186 14.4129 1.8024C14.8861 1.80293 15.3398 1.99117 15.6745 2.32581C16.0091 2.66045 16.1974 3.11416 16.1979 3.58741C16.1984 4.06066 16.0112 4.5148 15.6774 4.8502Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.3715 4.97551C13.5627 4.97551 13.7177 4.82053 13.7177 4.62936C13.7177 4.43818 13.5627 4.2832 13.3715 4.2832C13.1804 4.2832 13.0254 4.43818 13.0254 4.62936C13.0254 4.82053 13.1804 4.97551 13.3715 4.97551Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_Thermometer = (Thermometer);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/OxygenPump.jsx



const OxygenPump = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.6035 7.91016H12.4453V7.20703C12.4453 7.08377 12.4239 6.96551 12.3848 6.85547H12.4277C13.0093 6.85547 13.4824 6.38234 13.4824 5.80078C13.4824 5.21923 13.0093 4.74609 12.4277 4.74609H11.7246V3.94629C11.7246 2.97703 10.9361 2.18848 9.9668 2.18848H8.56055V1.75781C8.56055 1.61128 8.46963 1.48008 8.33242 1.42864L7.1518 0.985922C7.11622 0.436324 6.65803 0 6.09961 0C5.82968 0 5.58323 0.102023 5.39648 0.269402C5.20973 0.102023 4.96329 0 4.69336 0C4.1118 0 3.63867 0.473133 3.63867 1.05469V5.97656C3.63867 6.55812 4.1118 7.03125 4.69336 7.03125C4.96329 7.03125 5.20973 6.92923 5.39648 6.76185C5.58323 6.92923 5.82968 7.03125 6.09961 7.03125C6.65803 7.03125 7.11622 6.59493 7.1518 6.04536L8.33242 5.60264C8.46963 5.55121 8.56055 5.42 8.56055 5.27347V4.64945H9.26367V6.20691C8.84538 6.34693 8.54297 6.7422 8.54297 7.20703V7.91016H8.38477C7.41551 7.91016 6.62695 8.69871 6.62695 9.66797V16.2422C6.62695 17.2114 7.41551 18 8.38477 18H12.6035C13.5728 18 14.3613 17.2114 14.3613 16.2422V14.5195C14.3613 14.3258 14.2035 14.168 14.0098 14.168C13.8161 14.168 13.6586 14.3255 13.6582 14.5192V14.5195V15.8906H7.33008V10.0195H13.6582V11.3555C13.6582 11.5492 13.8161 11.707 14.0098 11.707C14.2035 11.707 14.3613 11.5492 14.3613 11.3555V9.66797C14.3613 8.69871 13.5728 7.91016 12.6035 7.91016ZM12.4277 5.44922C12.6216 5.44922 12.7793 5.60693 12.7793 5.80078C12.7793 5.99463 12.6216 6.15234 12.4277 6.15234H11.7246V5.44922H12.4277ZM4.69336 6.32812C4.49951 6.32812 4.3418 6.17041 4.3418 5.97656V1.05469C4.3418 0.860836 4.49951 0.703125 4.69336 0.703125C4.88721 0.703125 5.04492 0.860836 5.04492 1.05469V5.97656C5.04492 6.17041 4.88721 6.32812 4.69336 6.32812ZM6.45117 5.97656C6.45117 6.17041 6.29346 6.32812 6.09961 6.32812C5.90576 6.32812 5.74805 6.17041 5.74805 5.97656V1.05469C5.74805 0.860836 5.90576 0.703125 6.09961 0.703125C6.29346 0.703125 6.45117 0.860836 6.45117 1.05469V5.97656ZM7.85742 5.02981L7.1543 5.29348V1.73777L7.85742 2.00145V5.02981ZM8.56055 3.94629V2.8916H9.9668C10.5484 2.8916 11.0215 3.36473 11.0215 3.94629V6.15234H9.9668V4.29785C9.9668 4.10368 9.8094 3.94629 9.61523 3.94629H8.56055ZM9.24609 7.20703C9.24609 7.01318 9.4038 6.85547 9.59766 6.85547H11.3906C11.5845 6.85547 11.7422 7.01318 11.7422 7.20703V7.91016H9.24609V7.20703ZM13.598 16.5938C13.4529 17.003 13.0619 17.2969 12.6035 17.2969H8.38477C7.9264 17.2969 7.53543 17.003 7.3903 16.5938H13.598ZM7.3903 9.31641C7.53539 8.90715 7.9264 8.61328 8.38477 8.61328H12.6035C13.0619 8.61328 13.4529 8.90715 13.598 9.31641H7.3903Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.0098 13.2891C14.2039 13.2891 14.3613 13.1317 14.3613 12.9375C14.3613 12.7433 14.2039 12.5859 14.0098 12.5859C13.8156 12.5859 13.6582 12.7433 13.6582 12.9375C13.6582 13.1317 13.8156 13.2891 14.0098 13.2891Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const health_and_beauty_OxygenPump = (OxygenPump);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/LenseCase.jsx



const LenseCase = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.079 9.70471V6.3207C17.079 5.21033 15.5841 4.37305 13.6016 4.37305C11.6188 4.37305 10.124 5.21033 10.124 6.3207V9.25414C9.17362 9.84393 8.25449 9.45777 7.88409 9.2488V6.32099C7.88409 5.21061 6.38896 4.37333 4.40643 4.37333C2.4239 4.37333 0.928781 5.21061 0.928781 6.32099V9.70161C0.434906 10.112 0.164062 10.6168 0.164062 11.143C0.164062 12.5355 2.0279 13.6265 4.40756 13.6265C5.75896 13.6265 6.99224 13.2746 7.79128 12.6612C8.48934 12.1254 9.50352 12.1184 10.2095 12.6606C10.9972 13.2653 12.2629 13.6265 13.5949 13.6265C15.9745 13.6265 17.8386 12.5355 17.8386 11.143C17.8384 10.6182 17.5695 10.1148 17.079 9.70471ZM10.9674 9.76827C10.9674 9.05136 10.9674 8.33418 10.9674 7.61699C11.5952 8.0203 12.525 8.26836 13.6013 8.26836C14.6774 8.26836 15.6072 8.0203 16.235 7.61699C16.235 7.61699 16.235 9.86418 16.2344 9.86952C16.2344 10.3302 15.2323 10.9726 13.6011 10.9726C13.0208 10.9726 12.4274 10.8964 11.8843 10.6851C11.5741 10.5645 11.2011 10.3825 11.0304 10.0785C10.975 9.98033 10.9674 9.87852 10.9674 9.76827ZM13.6013 5.2168C15.2331 5.2168 16.235 5.85974 16.235 6.3207C16.235 6.78167 15.2331 7.42461 13.6013 7.42461C11.9692 7.42461 10.9674 6.78167 10.9674 6.3207C10.9674 5.85974 11.9695 5.2168 13.6013 5.2168ZM1.77253 9.87008C1.77253 9.86868 1.77225 9.86727 1.77225 9.86586V7.61727C2.4 8.02058 3.33009 8.26864 4.40615 8.26864C5.4825 8.26864 6.41231 8.02058 7.04006 7.61727V9.86165C7.04006 9.86446 7.03921 9.86699 7.03921 9.8698C7.03921 10.3305 6.0374 10.9726 4.40587 10.9726C2.77434 10.9729 1.77253 10.3305 1.77253 9.87008ZM4.40615 5.2168C6.03796 5.2168 7.04006 5.85974 7.04006 6.3207C7.04006 6.78167 6.03796 7.42461 4.40615 7.42461C2.77434 7.42461 1.77225 6.78167 1.77225 6.3207C1.77225 5.85974 2.77406 5.2168 4.40615 5.2168ZM13.5946 12.7824C12.4417 12.7824 11.3682 12.4866 10.723 11.9916C9.71784 11.2198 8.27728 11.224 7.27715 11.9918C6.63225 12.4871 5.55928 12.7827 4.407 12.7827C2.40337 12.7827 1.00725 11.9187 1.00725 11.143C1.00725 10.9535 1.08262 10.7841 1.18978 10.6373C1.70081 11.3436 2.91525 11.8169 4.40587 11.8169C6.20728 11.8169 7.60228 11.1247 7.84246 10.1657C8.18587 10.3057 8.60156 10.4109 9.05437 10.4109C9.41099 10.4109 9.78927 10.3451 10.169 10.1828C10.4215 11.1332 11.8103 11.8169 13.6011 11.8169C15.0875 11.8169 16.2996 11.3464 16.8132 10.643C16.9305 10.8066 16.9943 10.9765 16.9943 11.143C16.9946 11.9184 15.5982 12.7824 13.5946 12.7824Z",
            fill: "currentColor"
        })
    }));
};
/* harmony default export */ const health_and_beauty_LenseCase = (LenseCase);

;// CONCATENATED MODULE: ./src/components/icons/health-and-beauty/Automotive.jsx



const AutoMotive = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9 0C4.02945 0 0 4.02945 0 9C0 13.9706 4.02945 18 9 18C13.9706 18 18 13.9706 18 9C17.9944 4.03178 13.9682 0.005625 9 0ZM17.0748 11.3082L16.5111 11.1249L16.3254 11.6949L16.8915 11.8788C16.6574 12.5175 16.3465 13.1253 15.9657 13.689L15.4857 13.341L15.1329 13.8264L15.6093 14.1726C15.1901 14.7077 14.708 15.1905 14.1735 15.6105L13.8273 15.1341L13.3419 15.4869L13.6899 15.9669C13.1263 16.3473 12.5185 16.6577 11.88 16.8915L11.6961 16.3254L11.1261 16.5111L11.3094 17.0748C10.6551 17.2622 9.98025 17.3688 9.3 17.3925V16.8H8.7V17.3925C8.02016 17.3688 7.34576 17.2621 6.6918 17.0748L6.8751 16.5111L6.3051 16.3254L6.12 16.8915C5.48134 16.6574 4.87346 16.3465 4.3098 15.9657L4.6578 15.4857L4.1724 15.1329L3.8262 15.6093C3.29134 15.1896 2.80886 14.7072 2.3892 14.1723L2.8656 13.8261L2.5128 13.3407L2.0328 13.6887C1.65315 13.1253 1.34329 12.518 1.11 11.88L1.6761 11.6961L1.4904 11.1261L0.9267 11.3094C0.738825 10.6551 0.63165 9.98029 0.6075 9.3H1.2V8.7H0.6075C0.631238 8.02016 0.737925 7.34576 0.9252 6.6918L1.4889 6.8751L1.6746 6.3051L1.11 6.12C1.34415 5.48134 1.65503 4.87346 2.0358 4.3098L2.5158 4.6578L2.8686 4.1724L2.3895 3.8265C2.80916 3.29164 3.29164 2.80916 3.8265 2.3895L4.1727 2.8659L4.6581 2.5131L4.3101 2.0331C4.8738 1.65326 5.48156 1.34329 6.12 1.11L6.3039 1.6761L6.8739 1.4904L6.6906 0.9267C7.3449 0.738825 8.01971 0.63165 8.7 0.6075V1.2H9.3V0.6075C9.97984 0.631238 10.6542 0.737925 11.3082 0.9252L11.1249 1.4889L11.6949 1.6746L11.88 1.11C12.5187 1.34415 13.1265 1.65503 13.6902 2.0358L13.3422 2.5158L13.8276 2.8686L14.1738 2.3922C14.7087 2.81186 15.1911 3.29434 15.6108 3.8292L15.1344 4.1754L15.4872 4.6608L15.9672 4.3128C16.3473 4.8756 16.6576 5.48243 16.8915 6.12L16.3254 6.3039L16.5111 6.8739L17.0748 6.6906C17.2622 7.34494 17.3688 8.01975 17.3925 8.7H16.8V9.3H17.3925C17.3688 9.97984 17.2621 10.6542 17.0748 11.3082Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.00039 2.40039C5.35532 2.40039 2.40039 5.35532 2.40039 9.00039C2.40039 12.6455 5.35532 15.6004 9.00039 15.6004C12.6455 15.6004 15.6004 12.6455 15.6004 9.00039C15.5963 5.35704 12.6437 2.40452 9.00039 2.40039ZM9.00039 15.0004C5.68667 15.0004 3.00039 12.3141 3.00039 9.00039C3.00039 5.68667 5.68667 3.00039 9.00039 3.00039C12.3141 3.00039 15.0004 5.68667 15.0004 9.00039C14.9966 12.3125 12.3125 14.9966 9.00039 15.0004Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.00039 3.90039C6.18373 3.90039 3.90039 6.18373 3.90039 9.00039C3.90039 11.8171 6.18373 14.1004 9.00039 14.1004C11.8171 14.1004 14.1004 11.8171 14.1004 9.00039C14.0972 6.18504 11.8157 3.90354 9.00039 3.90039ZM12.8581 6.69549C13.2069 7.27449 13.4195 7.92515 13.48 8.59839L11.6011 8.44659C11.436 8.43271 11.3134 8.28759 11.3273 8.12251C11.3339 8.04425 11.3709 7.97169 11.4304 7.92039L12.8581 6.69549ZM10.0021 4.61679L9.27729 6.35679C9.21354 6.50972 9.03789 6.58202 8.88497 6.51827C8.81195 6.48782 8.75394 6.4298 8.72349 6.35679L7.99869 4.61679C8.65749 4.46158 9.34329 4.46158 10.0021 4.61679ZM5.14269 6.69542L6.57039 7.92039C6.6962 8.0282 6.71075 8.21761 6.60294 8.34339C6.55145 8.40346 6.47829 8.44078 6.39939 8.44719L4.52049 8.59899C4.58094 7.92549 4.79372 7.27456 5.14269 6.69542ZM7.66899 11.3026L7.23339 13.138C6.61273 12.8701 6.06009 12.4664 5.61609 11.9566H5.61519L7.22079 10.9771C7.3622 10.8907 7.54682 10.9354 7.63318 11.0768C7.67447 11.1444 7.68733 11.2255 7.66899 11.3026ZM10.7674 13.138H10.7665L10.33 11.3026C10.2916 11.1414 10.3912 10.9796 10.5524 10.9413C10.6294 10.9229 10.7106 10.9358 10.7782 10.9771L12.3838 11.9566C11.9401 12.4663 11.3877 12.8699 10.7674 13.138ZM11.0914 10.4647C10.6671 10.2058 10.1132 10.3399 9.85434 10.7642C9.73063 10.9669 9.69204 11.2104 9.74709 11.4415L10.1971 13.3339C9.41454 13.5559 8.58564 13.5559 7.80309 13.3339H7.80249L8.25249 11.4415C8.36747 10.9579 8.06867 10.4727 7.58507 10.3577C7.3541 10.3028 7.11084 10.3414 6.90819 10.465L5.24799 11.4784C4.79972 10.8004 4.54479 10.0131 4.51059 9.20109L6.44799 9.04449C6.94337 9.00388 7.31203 8.56933 7.27142 8.07395C7.25203 7.83774 7.14028 7.6187 6.96039 7.46439L5.48439 6.19839C5.99158 5.56382 6.66058 5.07785 7.42089 4.79169L8.16849 6.58659C8.35955 7.04544 8.88643 7.26256 9.34532 7.07147C9.56462 6.98015 9.73888 6.80585 9.83019 6.58659L10.5781 4.79169C11.3383 5.07793 12.0073 5.56389 12.5146 6.19839L11.0404 7.46439C10.6631 7.78805 10.6197 8.35625 10.9434 8.73347C11.0979 8.91354 11.3172 9.02529 11.5537 9.04449L13.4911 9.20109C13.4569 10.0131 13.202 10.8004 12.7537 11.4784L11.0914 10.4647Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.00078 7.7998C8.33804 7.7998 7.80078 8.33707 7.80078 8.9998C7.80078 9.66254 8.33804 10.1998 9.00078 10.1998C9.66352 10.1998 10.2008 9.66254 10.2008 8.9998C10.2008 8.33707 9.66352 7.7998 9.00078 7.7998ZM9.00078 9.5998C8.66939 9.5998 8.40078 9.33119 8.40078 8.9998C8.40078 8.66842 8.66939 8.3998 9.00078 8.3998C9.33217 8.3998 9.60078 8.66842 9.60078 8.9998C9.60078 9.33119 9.33217 9.5998 9.00078 9.5998Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const Automotive = (AutoMotive);

;// CONCATENATED MODULE: ./src/components/icons/index.js



















 // furniture shop page icons














 // gift shop page icon











 // health and beauty homepage icons










const appIcons = {
    Beer: icons_Beer,
    Milk: icons_Milk,
    Snack: icons_Snack,
    Truck: icons_Truck,
    Honey: icons_Honey,
    Apple: icons_Apple,
    Shield: icons_Shield,
    Bottle: icons_Bottle,
    Carrot: icons_Carrot,
    Yogurt: icons_Yogurt,
    Payment: icons_Payment,
    PickUpBox: icons_PickUpBox,
    Breakfast: icons_Breakfast,
    AlarmClock: icons_AlarmClock,
    OnlineSupport: icons_OnlineSupport,
    OnlineService: icons_OnlineService,
    MoneyGuarantee: MoneyGurantee,
    CustomerService: CustomerService/* default */.Z,
    FeedbackThumbsUp: icons_FeedbackThumbsUp,
    CreditCardVerified: icons_CreditCardVerified,
    // furniture-shop-icons
    Home: Home/* default */.Z,
    Sofa: furniture_shop_Sofa,
    Chair: furniture_shop_Chair,
    Stool: furniture_shop_Stool,
    Dining: furniture_shop_Dining,
    Living: furniture_shop_Living,
    Popular: furniture_shop_Popular,
    RoomSet: furniture_shop_RoomSet,
    Trending: furniture_shop_Trending,
    Products: furniture_shop_Products,
    Interior: furniture_shop_Interior,
    Wardrobe: furniture_shop_Wardrobe,
    Furniture: furniture_shop_Furniture,
    Decoration: furniture_shop_Decoration,
    RoundTable: furniture_shop_RoundTable,
    // gift-shop-page-icons
    Toys: gift_shop_Toys,
    Robot: gift_shop_Robot,
    Flower: gift_shop_Flower,
    BabyToys: gift_shop_BabyToys,
    Children: gift_shop_Children,
    Football: gift_shop_Football,
    Chirstmas: Christmas,
    TeddyBear: gift_shop_TeddyBear,
    WeddingGift: gift_shop_WeddingGift,
    NewYearGift: gift_shop_NewYearGift,
    BirthdayCake: gift_shop_BirthdayCake,
    ValentineGift: gift_shop_ValentineGift,
    // health-and-beauty-page-icons
    Powder: health_and_beauty_Powder,
    Lotion: health_and_beauty_Lotion,
    Mascara: health_and_beauty_Mascara,
    Lipstick: health_and_beauty_Lipstick,
    FaceMask: health_and_beauty_FaceMask,
    LenseCase: health_and_beauty_LenseCase,
    OxygenPump: health_and_beauty_OxygenPump,
    AutoMotive: Automotive,
    Thermometer: health_and_beauty_Thermometer,
    HealthBeauty: health_and_beauty_HealthBeauty
};
/* harmony default export */ const icons = (appIcons);

;// CONCATENATED MODULE: ./src/components/superstore-shop/Section12.jsx







const Section12 = ({ serviceList  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
        sx: {
            mb: '70px'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            container: true,
            spacing: 3,
            children: serviceList.map((item, ind)=>{
                const Icon = icons[item.icon];
                return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    lg: 3,
                    md: 6,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BazarCard/* default */.Z, {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: '3rem',
                            height: '100%',
                            borderRadius: '8px'
                        },
                        hoverEffect: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BazarIconButton/* default */.Z, {
                                fontSize: "1.75rem",
                                height: "64px",
                                width: "64px",
                                bgcolor: "grey.200",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                    fontSize: "inherit"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                                mt: 2.5,
                                mb: 1.25,
                                textAlign: "center",
                                children: item.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Span */.Dr, {
                                textAlign: "center",
                                color: "grey.600",
                                children: item.description
                            })
                        ]
                    })
                }, ind));
            })
        })
    }));
};
// const serviceList = [
//   {
//     icon: Truck,
//     title: 'Worldwide Delivery',
//   },
//   {
//     icon: CreditCardVerified,
//     title: 'Safe Payment',
//   },
//   {
//     icon: Shield,
//     title: 'Shop With Confidence',
//   },
//   {
//     icon: CustomerService,
//     title: '24/7 Support',
//   },
// ]
/* harmony default export */ const superstore_shop_Section12 = (Section12);


/***/ }),

/***/ 7529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ superstore_shop_Section13)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/FlexBox.jsx
var FlexBox = __webpack_require__(2279);
// EXTERNAL MODULE: ./src/components/HoverBox.jsx
var HoverBox = __webpack_require__(2348);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: ./src/components/BazarCard.jsx
var BazarCard = __webpack_require__(5120);
// EXTERNAL MODULE: ./src/components/LazyImage.jsx
var LazyImage = __webpack_require__(4588);
// EXTERNAL MODULE: ./src/components/icons/GiftBox.jsx
var GiftBox = __webpack_require__(9997);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(420);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowBack"
const ArrowBack_namespaceObject = require("@mui/icons-material/ArrowBack");
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForward"
const ArrowForward_namespaceObject = require("@mui/icons-material/ArrowForward");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_namespaceObject);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: external "pure-react-carousel"
const external_pure_react_carousel_namespaceObject = require("pure-react-carousel");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/carousel/CarouselStyled.js

 // StyledCarouselProvider and StyledSlider component props type
// common styles for arrow back and next button
const commonArrowBtnStyle = ({ theme , showDots , dot_margin_top , showArrowOnHover  })=>({
        display: showArrowOnHover ? 'none' : 'flex',
        position: 'absolute',
        transform: 'translateY(-50%)',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        border: 0,
        borderRadius: '50%',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        top: `calc(50% - ${showDots ? dot_margin_top : '0px'})`,
        '&:disabled': {
            background: theme.palette.text.disabled,
            color: theme.palette.secondary.main,
            cursor: 'not-allowed'
        },
        '&:hover:not(:disabled)': {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block !important'
        }
    })
; // styled components
const StyledCarouselProvider = (0,material_.styled)(external_pure_react_carousel_namespaceObject.CarouselProvider)(({ spacing  })=>({
        position: 'relative',
        minWidth: 0,
        '& .focusRing___1airF.carousel__slide-focus-ring': {
            outline: 'none !important'
        },
        '& .carousel__inner-slide': {
            margin: 'auto',
            width: `calc(100% - ${spacing || '0px'})`
        },
        '&:hover $arrowButton': {
            display: 'flex'
        }
    })
);
const StyledSlider = (0,material_.styled)(external_pure_react_carousel_namespaceObject.Slider)(({ spacing  })=>({
        marginLeft: `calc(-1 * ${spacing || '0px'} / 2)`,
        marginRight: `calc(-1 * ${spacing || '0px'} / 2)`
    })
);
const StyledDotGroup = (0,material_.styled)(external_pure_react_carousel_namespaceObject.DotGroup)(({ dot_margin_top  })=>({
        display: 'flex',
        justifyContent: 'center',
        marginTop: dot_margin_top || '0px'
    })
);
const StyledDot = (0,material_.styled)('div')(({ dot_color , dot_active , theme  })=>({
        position: 'relative',
        height: 16,
        width: 16,
        borderRadius: 300,
        margin: '0.25rem',
        cursor: 'pointer',
        border: `1px solid
          ${dot_color || theme.palette.secondary.main}`,
        '&:after': {
            position: 'absolute',
            content: '" "',
            height: 9,
            width: 9,
            top: '50%',
            left: '50%',
            borderRadius: 300,
            transform: `translate(-50%, -50%) scaleX(${dot_active ? 1 : 0})`,
            backgroundColor: dot_color || theme.palette.secondary.main
        }
    })
);
const StyledArrowBackButton = (0,material_.styled)(external_pure_react_carousel_namespaceObject.ButtonBack)(({ theme , showArrowOnHover , showDots , dot_margin_top  })=>({
        ...commonArrowBtnStyle({
            theme,
            showDots,
            showArrowOnHover,
            dot_margin_top
        }),
        [theme.breakpoints.down('md')]: {
            height: '36px',
            width: '36px',
            left: '-12px'
        }
    })
);
const StyledArrowNextButton = (0,material_.styled)(external_pure_react_carousel_namespaceObject.ButtonNext)(({ theme , showArrowOnHover , showDots , dot_margin_top  })=>({
        ...commonArrowBtnStyle({
            theme,
            showDots,
            showArrowOnHover,
            dot_margin_top
        }),
        [theme.breakpoints.down('md')]: {
            height: '36px',
            width: '36px',
            right: '-12px'
        }
    })
);


;// CONCATENATED MODULE: ./src/components/carousel/Carousel.jsx







 // component props interface
const Carousel = ({ sx , step , spacing , infinite , children , autoPlay , interval , showDots , dotClass , dotColor , showArrow , totalSlides , currentSlide , visibleSlides , leftButtonClass , leftButtonStyle , arrowButtonClass , rightButtonClass , rightButtonStyle , hasMasterSpinner , isIntrinsicHeight , naturalSlideWidth , dotGroupMarginTop , naturalSlideHeight  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledCarouselProvider, {
        sx: sx,
        step: step,
        spacing: spacing,
        interval: interval,
        infinite: infinite,
        isPlaying: autoPlay,
        totalSlides: totalSlides,
        currentSlide: currentSlide,
        visibleSlides: visibleSlides,
        hasMasterSpinner: hasMasterSpinner,
        isIntrinsicHeight: isIntrinsicHeight,
        naturalSlideWidth: naturalSlideWidth || 100,
        naturalSlideHeight: naturalSlideHeight || 125,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledSlider, {
                spacing: spacing,
                children: external_react_default().Children.map(children, (child, ind)=>/*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_namespaceObject.Slide, {
                        index: ind,
                        children: child
                    })
                )
            }),
            showDots && /*#__PURE__*/ jsx_runtime_.jsx(StyledDotGroup, {
                className: external_clsx_default()(dotClass),
                dot_margin_top: dotGroupMarginTop,
                renderDots: (props)=>renderDots({
                        ...props,
                        step,
                        dotColor
                    })
            }),
            showArrow && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledArrowBackButton, {
                        id: "backArrowButton",
                        sx: {
                            left: "-20px"
                        },
                        style: leftButtonStyle || {},
                        className: external_clsx_default()(leftButtonClass, arrowButtonClass),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowBack_default()), {
                            fontSize: "small",
                            color: "inherit"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledArrowNextButton, {
                        id: "backForwardButton",
                        sx: {
                            right: "-20px"
                        },
                        style: rightButtonStyle || {},
                        className: external_clsx_default()(arrowButtonClass, rightButtonClass),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {
                            fontSize: "small",
                            color: "inherit"
                        })
                    })
                ]
            })
        ]
    }));
};
const renderDots = ({ step , dotColor , totalSlides , currentSlide: currentSlide1 , visibleSlides , carouselStore  })=>{
    const dots = [];
    const total = totalSlides - visibleSlides + 1; // handle dot button
    const handleClick = (currentSlide, autoplay)=>{
        carouselStore.setStoreState({
            autoPlay: autoplay,
            currentSlide: currentSlide
        });
    };
    for(let i = 0; i < total; i += step){
        dots.push(/*#__PURE__*/ jsx_runtime_.jsx(StyledDot, {
            dot_color: dotColor,
            dot_active: currentSlide1 === i ? i + 1 : 0,
            onClick: ()=>handleClick(i, false)
        }, (Math.random() * i + Date.now()).toString()));
        if (total - (i + 1) < step && total - (i + 1) !== 0) {
            dots.push(/*#__PURE__*/ jsx_runtime_.jsx(StyledDot, {
                dot_color: dotColor,
                dot_active: totalSlides - visibleSlides,
                onClick: ()=>handleClick(totalSlides - visibleSlides, false)
            }, (Math.random() * i + Date.now()).toString()));
        }
    }
    return dots;
};
Carousel.defaultProps = {
    sx: {},
    step: 1,
    interval: 2000,
    showDots: false,
    showArrow: true,
    autoPlay: false,
    infinite: false,
    totalSlides: 10,
    visibleSlides: 5,
    spacing: "1.5rem",
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    hasMasterSpinner: false,
    isIntrinsicHeight: true,
    dotGroupMarginTop: "2rem",
    arrowButtonColor: "secondary"
};
/* harmony default export */ const carousel_Carousel = (Carousel);

// EXTERNAL MODULE: ./src/components/CategorySectionCreator.jsx
var CategorySectionCreator = __webpack_require__(9334);
;// CONCATENATED MODULE: ./src/components/superstore-shop/Section13.jsx













const Section13 = ({ bigDiscountList  })=>{
    var ref1;
    const { 0: visibleSlides , 1: setVisibleSlides  } = (0,external_react_.useState)(6);
    const width = (0,useWindowSize/* default */.Z)();
    (0,external_react_.useEffect)(()=>{
        if (width < 370) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 950) setVisibleSlides(4);
        else setVisibleSlides(6);
    }, [
        width
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(CategorySectionCreator/* default */.Z, {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(GiftBox/* default */.Z, {}),
        title: "Yuqori qiymatdagi chegirmalar",
        seeMoreLink: "/category/discounted",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            my: "-0.25rem",
            children: /*#__PURE__*/ jsx_runtime_.jsx(carousel_Carousel, {
                totalSlides: 9,
                visibleSlides: visibleSlides,
                children: (ref1 = bigDiscountList === null || bigDiscountList === void 0 ? void 0 : bigDiscountList.filter((item)=>{
                    return (item === null || item === void 0 ? void 0 : item.product_discounted_price) > 0;
                })) === null || ref1 === void 0 ? void 0 : ref1.map((item)=>{
                    var ref;
                    /*#__PURE__*/ return jsx_runtime_.jsx(material_.Box, {
                        py: 0.5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BazarCard/* default */.Z, {
                            sx: {
                                p: "1rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/product/${item === null || item === void 0 ? void 0 : item.product_id}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(HoverBox/* default */.Z, {
                                            borderRadius: "8px",
                                            mb: 1,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LazyImage/* default */.Z, {
                                                src: (ref = item === null || item === void 0 ? void 0 : item.product_media[0]) === null || ref === void 0 ? void 0 : ref.media_link,
                                                width: "100%",
                                                height: 120,
                                                layout: "responsive",
                                                alt: item === null || item === void 0 ? void 0 : item.product_name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                                            fontWeight: "600",
                                            fontSize: "14px",
                                            mb: 0.5,
                                            ellipsis: true,
                                            children: item === null || item === void 0 ? void 0 : item.product_name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                                                    fontWeight: "600",
                                                    fontSize: "14px",
                                                    color: "primary.main",
                                                    mr: 1,
                                                    children: Math.ceil(item === null || item === void 0 ? void 0 : item.product_price).toLocaleString()
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                                                    fontWeight: "600",
                                                    fontSize: "14px",
                                                    color: "grey.600",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("del", {
                                                        children: Math.ceil((item === null || item === void 0 ? void 0 : item.product_price) + (item === null || item === void 0 ? void 0 : item.product_discounted_price)).toLocaleString()
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, item === null || item === void 0 ? void 0 : item.product_id);
                })
            })
        })
    }));
};
/* harmony default export */ const superstore_shop_Section13 = (Section13);


/***/ }),

/***/ 7950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ superstore_shop_Section4)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/BazarCard.jsx
var BazarCard = __webpack_require__(5120);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/DottedStar.jsx



const DottedStar = (props)=>{
    return(/*#__PURE__*/ _jsxs(SvgIcon, {
        ...props,
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12.431 11.7264L11.9772 10.5867L11.5233 11.7264C11.4231 11.9784 11.1869 12.15 10.9157 12.1679L9.69147 12.2469L10.6349 13.031C10.8436 13.2047 10.9342 13.4828 10.8669 13.7457L10.5641 14.9342L11.6016 14.2785C11.8309 14.1344 12.1234 14.1344 12.3527 14.2785L13.3895 14.9336L13.0867 13.7457C13.0194 13.4828 13.11 13.2047 13.3188 13.031L14.2621 12.2469L13.0386 12.1679C12.7675 12.15 12.5313 11.9784 12.431 11.7264Z",
                fill: "#FF9101"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M23.3423 8.60791L15.5284 8.10188L12.6302 0.821148C12.4174 0.286994 11.5372 0.286994 11.3243 0.821148L8.42618 8.10188L0.657701 8.60791C0.37 8.62647 0.123547 8.8187 0.0342556 9.09266C-0.0543326 9.36593 0.0321933 9.66666 0.253992 9.85068L6.23112 14.8567L4.29624 22.4498C4.22485 22.7285 4.33125 23.0231 4.56402 23.192C4.79744 23.3609 5.10989 23.3706 5.35292 23.2181L11.9773 19.0312L18.6009 23.2181C18.845 23.3716 19.1564 23.3616 19.3898 23.192C19.6226 23.0231 19.729 22.7292 19.6576 22.4498L17.7227 14.8567L23.746 9.85063C23.9677 9.66661 24.0543 9.36588 23.9657 9.09262C23.8764 8.8187 23.63 8.62643 23.3423 8.60791ZM16.5192 12.2009L14.5589 13.8288L15.1879 16.2978C15.2592 16.5773 15.1528 16.8711 14.9201 17.0401C14.6867 17.2095 14.3754 17.2197 14.1312 17.0662L11.9773 15.7046L9.82274 17.0662C9.5783 17.2186 9.26726 17.2097 9.03383 17.0401C8.80107 16.8711 8.69467 16.5766 8.76605 16.2978L9.39498 13.8288L7.43475 12.2009C7.21299 12.0169 7.12647 11.7161 7.21501 11.4429C7.30425 11.1689 7.55075 10.9767 7.83846 10.9581L10.3816 10.7933L11.3243 8.42591C11.5372 7.89175 12.4174 7.89175 12.6302 8.42591L13.5729 10.7933L16.1154 10.9581C16.4031 10.9767 16.6496 11.1689 16.7389 11.4429C16.8274 11.7161 16.7409 12.0169 16.5192 12.2009Z",
                fill: "#FF9101"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.9993 23.58C12.3876 23.58 12.7024 23.2652 12.7024 22.8769C12.7024 22.4886 12.3876 22.1738 11.9993 22.1738C11.611 22.1738 11.2962 22.4886 11.2962 22.8769C11.2962 23.2652 11.611 23.58 11.9993 23.58Z",
                fill: "#FF9101"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22.0295 16.2913C22.1495 15.922 21.9473 15.5253 21.578 15.4054C21.2087 15.2854 20.8121 15.4875 20.6921 15.8568C20.5721 16.2261 20.7742 16.6228 21.1435 16.7428C21.5128 16.8628 21.9095 16.6606 22.0295 16.2913Z",
                fill: "#FF9101"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.3541 5.48443C18.5824 5.1703 18.5127 4.73062 18.1986 4.50237C17.8845 4.27413 17.4448 4.34376 17.2165 4.65789C16.9883 4.97203 17.0579 5.41171 17.372 5.63995C17.6862 5.8682 18.1259 5.79857 18.3541 5.48443Z",
                fill: "#FF9101"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.62693 5.63899C6.94107 5.41075 7.0107 4.97106 6.78245 4.65692C6.55421 4.34279 6.11453 4.27316 5.80039 4.5014C5.48626 4.72964 5.41663 5.16933 5.64487 5.48347C5.87311 5.7976 6.3128 5.86723 6.62693 5.63899Z",
                fill: "#FF9101"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M2.85485 16.7449C3.22417 16.6249 3.42629 16.2283 3.3063 15.859C3.18632 15.4896 2.78966 15.2875 2.42035 15.4075C2.05104 15.5275 1.84892 15.9241 1.9689 16.2935C2.08889 16.6628 2.48554 16.8649 2.85485 16.7449Z",
                fill: "#FF9101"
            })
        ]
    }));
};
/* harmony default export */ const icons_DottedStar = ((/* unused pure expression or super */ null && (DottedStar)));

;// CONCATENATED MODULE: ./src/components/icons/RankBadge.jsx



const RankBadge = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SvgIcon, {
        ...props,
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1.99309 16.5377L1.49359 17.0365L5.70897 18.0092C5.77746 18.025 5.84014 18.0597 5.88987 18.1093C5.93959 18.159 5.97437 18.2216 5.99022 18.2901L6.96297 22.5062L7.46247 22.0063L6.43722 17.5622L1.99309 16.5377Z",
                fill: "#FAB400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.9999 3.375C10.8133 3.375 9.65322 3.72689 8.66652 4.38618C7.67983 5.04547 6.91079 5.98254 6.45666 7.0789C6.00254 8.17526 5.88372 9.38166 6.11523 10.5455C6.34674 11.7094 6.91819 12.7785 7.7573 13.6176C8.59642 14.4568 9.66551 15.0282 10.8294 15.2597C11.9933 15.4912 13.1997 15.3724 14.296 14.9183C15.3924 14.4642 16.3295 13.6951 16.9888 12.7084C17.648 11.7217 17.9999 10.5617 17.9999 9.375C17.9983 7.78422 17.3656 6.25908 16.2407 5.13422C15.1159 4.00937 13.5907 3.37669 11.9999 3.375ZM14.2957 10.2626L14.9883 13.0343C15.0069 13.1087 15.0023 13.187 14.975 13.2587C14.9477 13.3303 14.8991 13.3919 14.8357 13.4351C14.7734 13.4772 14.7001 13.4997 14.6249 13.5C14.5466 13.5002 14.4703 13.4756 14.4067 13.4299L11.9999 11.7109L9.59282 13.4299C9.5304 13.4745 9.45578 13.499 9.37903 13.4999C9.30228 13.5008 9.2271 13.4781 9.16365 13.4349C9.10019 13.3918 9.05151 13.3302 9.02418 13.2584C8.99685 13.1867 8.99218 13.1083 9.01082 13.0339L9.70382 10.2622L7.63457 8.53725C7.57566 8.48782 7.53338 8.42147 7.51345 8.3472C7.49352 8.27294 7.4969 8.19434 7.52313 8.12205C7.54937 8.04977 7.59719 7.9873 7.66012 7.94311C7.72305 7.89892 7.79805 7.87514 7.87494 7.875H10.6042L11.6441 4.75612C11.6687 4.6811 11.7164 4.61577 11.7804 4.56946C11.8444 4.52315 11.9213 4.49822 12.0003 4.49822C12.0793 4.49822 12.1563 4.52315 12.2202 4.56946C12.2842 4.61577 12.3319 4.6811 12.3566 4.75612L13.3949 7.875H16.1249C16.202 7.87496 16.2772 7.89866 16.3403 7.94289C16.4035 7.98712 16.4514 8.04973 16.4777 8.12218C16.504 8.19464 16.5073 8.27343 16.4872 8.34783C16.4671 8.42224 16.4245 8.48864 16.3653 8.538L14.2957 10.2626Z",
                fill: "#FAB400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.7692 8.36805L12.0001 6.0603L11.2306 8.36805C11.2058 8.44276 11.1581 8.50778 11.0943 8.55388C11.0305 8.59999 10.9538 8.62484 10.8751 8.62493H8.91046L10.3651 9.83655C10.4192 9.88175 10.4595 9.9413 10.4813 10.0084C10.5032 10.0754 10.5056 10.1473 10.4885 10.2157L9.98559 12.2276L11.7818 10.9447C11.8455 10.8992 11.9217 10.8748 11.9999 10.8748C12.0781 10.8748 12.1544 10.8992 12.218 10.9447L14.0142 12.2276L13.511 10.2157C13.4939 10.1472 13.4964 10.0754 13.5183 10.0083C13.5402 9.94124 13.5805 9.88171 13.6347 9.83655L15.089 8.62493H13.1251C13.0463 8.62492 12.9695 8.6001 12.9057 8.55399C12.8418 8.50788 12.794 8.44283 12.7692 8.36805Z",
                fill: "#FAB400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.82497 17.6569C9.38171 17.8278 8.88992 17.8231 8.45002 17.6437C8.01011 17.4643 7.65527 17.1238 7.45797 16.6916C7.40527 16.574 7.32111 16.4733 7.21477 16.4005C7.10843 16.3277 6.98404 16.2857 6.85534 16.2791C6.3829 16.2539 5.9377 16.0501 5.60994 15.7089C5.28219 15.3677 5.0964 14.9147 5.09022 14.4416C5.08944 14.3123 5.05801 14.185 4.99849 14.0702C4.93897 13.9554 4.85307 13.8564 4.74784 13.7812L2.61859 15.9113L6.83397 16.884C6.90246 16.8998 6.96514 16.9344 7.01487 16.9841C7.06459 17.0338 7.09937 17.0964 7.11522 17.1649L8.08797 21.3806L11.253 18.2156C11.0438 18.1251 10.8532 17.9968 10.6905 17.8373C10.5801 17.7252 10.439 17.6483 10.285 17.6162C10.131 17.5841 9.97094 17.5982 9.82497 17.6569Z",
                fill: "#FAB400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.2242 17.0588C14.489 17.1576 14.7814 17.152 15.0423 17.0432C15.3031 16.9344 15.5128 16.7304 15.6289 16.4727C15.752 16.1956 15.9523 15.9598 16.2059 15.7936C16.4595 15.6273 16.7556 15.5376 17.0588 15.5352C17.3415 15.5317 17.6123 15.4208 17.8162 15.2249C18.0201 15.0291 18.1419 14.763 18.1568 14.4807C18.1702 14.215 18.2566 13.9582 18.4064 13.7383C18.5563 13.5185 18.7638 13.3442 19.0062 13.2346C19.2643 13.1165 19.4677 12.9043 19.5748 12.6414C19.6819 12.3785 19.6847 12.0846 19.5825 11.8197C19.4722 11.5393 19.4461 11.2327 19.5076 10.9377C19.569 10.6426 19.7152 10.372 19.9283 10.1588C20.1281 9.95696 20.2433 9.68638 20.2503 9.40241C20.2572 9.11844 20.1555 8.84253 19.9658 8.63109C19.7874 8.43376 19.6668 8.1911 19.6172 7.92973C19.5677 7.66836 19.5911 7.3984 19.6849 7.14946C19.7837 6.88465 19.7781 6.59218 19.6693 6.33134C19.5604 6.0705 19.3565 5.86079 19.0988 5.74471C18.8218 5.6216 18.5861 5.42133 18.4198 5.16783C18.2536 4.91434 18.1638 4.61835 18.1613 4.31521C18.1575 4.03264 18.0465 3.76205 17.8507 3.55826C17.6549 3.35446 17.389 3.23269 17.1068 3.21759C16.8411 3.20414 16.5842 3.11777 16.3643 2.96794C16.1444 2.81811 15.97 2.61061 15.8603 2.36821C15.7421 2.11012 15.5299 1.9068 15.267 1.79971C15.0042 1.69261 14.7103 1.6898 14.4454 1.79184C14.165 1.90237 13.8584 1.92853 13.5633 1.8671C13.2682 1.80567 12.9975 1.65934 12.7845 1.44609C12.5796 1.25219 12.3101 1.14106 12.0281 1.13413C11.746 1.12721 11.4714 1.22498 11.2572 1.40859C11.06 1.58726 10.8173 1.70803 10.5559 1.75759C10.2945 1.80715 10.0244 1.78358 9.77554 1.68946C9.51073 1.59068 9.21826 1.59628 8.95742 1.70511C8.69657 1.81395 8.48686 2.01788 8.37079 2.27559C8.24768 2.55269 8.04737 2.78847 7.79379 2.95472C7.54022 3.12098 7.24412 3.21068 6.94092 3.21309C6.65822 3.2166 6.38744 3.32752 6.18353 3.52336C5.97962 3.71919 5.85784 3.98526 5.84292 4.26759C5.82932 4.5331 5.74287 4.78974 5.59304 5.00935C5.44322 5.22897 5.2358 5.40308 4.99354 5.51259C4.73529 5.63071 4.53186 5.84293 4.42474 6.10593C4.31763 6.36894 4.31492 6.6629 4.41717 6.92784C4.52747 7.20822 4.55351 7.51471 4.49209 7.80969C4.43067 8.10466 4.28447 8.37528 4.07142 8.58834C3.87175 8.79031 3.75669 9.06086 3.74973 9.34478C3.74276 9.62869 3.8444 9.90457 4.03392 10.1161C4.21236 10.3134 4.33299 10.5561 4.38254 10.8174C4.43209 11.0788 4.40865 11.3488 4.31479 11.5977C4.21601 11.8625 4.2216 12.155 4.33044 12.4158C4.43928 12.6767 4.64321 12.8864 4.90092 13.0025C5.17793 13.1256 5.41364 13.3259 5.57989 13.5793C5.74614 13.8328 5.83589 14.1288 5.83842 14.432C5.842 14.7146 5.95289 14.9853 6.14862 15.1893C6.34435 15.3932 6.61028 15.5151 6.89254 15.5303C7.15832 15.5436 7.4153 15.6299 7.63521 15.7798C7.85512 15.9296 8.02945 16.1372 8.13904 16.3797C8.25715 16.6378 8.46927 16.8411 8.73212 16.9481C8.99497 17.0551 9.28875 17.0579 9.55354 16.9557C9.73588 16.8855 9.92966 16.8498 10.125 16.8503C10.5346 16.8511 10.9272 17.014 11.217 17.3033C11.422 17.4972 11.6915 17.6082 11.9735 17.6152C12.2556 17.6221 12.5302 17.5244 12.7444 17.3408C12.9415 17.1626 13.1838 17.042 13.4447 16.9923C13.7057 16.9426 13.9754 16.9656 14.2242 17.0588ZM12 16.1251C10.665 16.1251 9.35997 15.7292 8.24994 14.9875C7.13991 14.2458 6.27475 13.1916 5.76385 11.9582C5.25296 10.7248 5.11929 9.3676 5.37974 8.05823C5.64019 6.74886 6.28307 5.54612 7.22707 4.60212C8.17107 3.65811 9.37381 3.01524 10.6832 2.75479C11.9926 2.49434 13.3498 2.62801 14.5832 3.1389C15.8166 3.64979 16.8708 4.51496 17.6125 5.62499C18.3542 6.73502 18.75 8.04006 18.75 9.37509C18.7481 11.1647 18.0363 12.8804 16.7708 14.1459C15.5054 15.4113 13.7896 16.1231 12 16.1251Z",
                fill: "#FAB400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.1653 16.8838L21.3814 15.9111L19.3617 13.8921C19.3459 13.8996 19.3324 13.9105 19.3167 13.9176C19.1991 13.9705 19.0984 14.0547 19.0256 14.1611C18.9528 14.2675 18.9108 14.3919 18.9042 14.5206C18.8791 14.993 18.6752 15.4382 18.334 15.766C17.9928 16.0937 17.5397 16.2793 17.0667 16.2853C16.9064 16.2858 16.7497 16.3329 16.6158 16.421C16.4819 16.509 16.3765 16.6341 16.3125 16.7811C16.1179 17.2122 15.7667 17.5532 15.3301 17.7352C14.8935 17.9171 14.4041 17.9263 13.9609 17.761C13.8406 17.7157 13.7101 17.7044 13.5837 17.7283C13.4574 17.7523 13.3401 17.8105 13.2447 17.8967C13.0956 18.0282 12.9265 18.1349 12.7437 18.2128L15.9113 21.3808L16.8844 17.1647C16.9002 17.0963 16.9349 17.0337 16.9846 16.984C17.0343 16.9344 17.0969 16.8997 17.1653 16.8838Z",
                fill: "#FAB400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M22.0064 16.5377L17.5623 17.5622L16.5374 22.0067L17.0373 22.5066L18.01 18.2905C18.0259 18.222 18.0607 18.1594 18.1104 18.1097C18.1601 18.06 18.2228 18.0254 18.2913 18.0096L22.5063 17.0365L22.0064 16.5377Z",
                fill: "#FAB400"
            })
        ]
    }));
};
/* harmony default export */ const icons_RankBadge = (RankBadge);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/CategorySectionHeader.jsx
var CategorySectionHeader = __webpack_require__(7160);
// EXTERNAL MODULE: ./src/components/product-cards/ProductCard4.jsx
var ProductCard4 = __webpack_require__(5502);
// EXTERNAL MODULE: ./src/components/HoverBox.jsx
var components_HoverBox = __webpack_require__(2348);
// EXTERNAL MODULE: ./src/components/LazyImage.jsx
var components_LazyImage = __webpack_require__(4588);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
;// CONCATENATED MODULE: ./src/components/product-cards/ProductCard5.jsx






const ProductCard5 = ({ imgUrl , title  })=>{
    return(/*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(HoverBox, {
                borderRadius: "5px",
                mb: 1,
                children: /*#__PURE__*/ _jsx(LazyImage, {
                    src: imgUrl,
                    width: 260,
                    height: 175,
                    layout: "responsive",
                    objectFit: "cover",
                    alt: title
                })
            }),
            /*#__PURE__*/ _jsx(H4, {
                fontSize: "14px",
                fontWeight: "600",
                children: title
            })
        ]
    }));
};
/* harmony default export */ const product_cards_ProductCard5 = ((/* unused pure expression or super */ null && (ProductCard5)));

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/superstore-shop/Section4.jsx











const Section4 = (props)=>{
    const { topRatedBrands , topRatedList  } = props;
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        mb: 7.5,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CategorySectionHeader/* default */.Z, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_RankBadge, {}),
                        title: "Yuqori reytinga ega mahsulotlar",
                        seeMoreLink: "/category/top-rated"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BazarCard/* default */.Z, {
                        sx: {
                            p: "1rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            spacing: 4,
                            children: topRatedList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    lg: 2,
                                    md: 3,
                                    sm: 4,
                                    xs: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/product/${item.product_id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard4/* default */.Z, {
                                                ...item
                                            })
                                        })
                                    })
                                }, item.product_name)
                            )
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const superstore_shop_Section4 = (Section4);


/***/ }),

/***/ 2812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ superstore_shop_Section5)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/BazarCard.jsx
var BazarCard = __webpack_require__(5120);
// EXTERNAL MODULE: ./src/components/icons/NewArrival.jsx
var NewArrival = __webpack_require__(1001);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/CategorySectionCreator.jsx
var CategorySectionCreator = __webpack_require__(9334);
// EXTERNAL MODULE: ./src/components/HoverBox.jsx
var HoverBox = __webpack_require__(2348);
// EXTERNAL MODULE: ./src/components/LazyImage.jsx
var LazyImage = __webpack_require__(4588);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/product-cards/ProductCard2.jsx






const ProductCard2 = ({ imgUrl , title , price , id  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/product/${id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HoverBox/* default */.Z, {
                    borderRadius: "8px",
                    mb: 1,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LazyImage/* default */.Z, {
                        src: imgUrl,
                        width: "100%",
                        height: 170,
                        layout: "responsive",
                        alt: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Typography.H4, {
                    fontWeight: "600",
                    fontSize: "14px",
                    mb: 0.5,
                    ellipsis: true,
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography.H4, {
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "primary.main",
                    children: [
                        Math.ceil(price).toLocaleString(),
                        " so'm"
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const product_cards_ProductCard2 = (ProductCard2);

;// CONCATENATED MODULE: ./src/components/superstore-shop/Section5.jsx







const Section5 = ({ newArrivalsList  })=>{
    var ref1;
    return(/*#__PURE__*/ jsx_runtime_.jsx(CategorySectionCreator/* default */.Z, {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(NewArrival/* default */.Z, {}),
        title: "Eng yangi mahsulotlar",
        seeMoreLink: "/category/new",
        children: /*#__PURE__*/ jsx_runtime_.jsx(BazarCard/* default */.Z, {
            sx: {
                p: "1rem"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                spacing: 3,
                children: (ref1 = newArrivalsList === null || newArrivalsList === void 0 ? void 0 : newArrivalsList.slice(0, 7)) === null || ref1 === void 0 ? void 0 : ref1.map((item)=>{
                    var ref;
                    /*#__PURE__*/ return jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        lg: 2,
                        md: 3,
                        sm: 4,
                        xs: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(product_cards_ProductCard2, {
                            imgUrl: (ref = item === null || item === void 0 ? void 0 : item.product_media[0]) === null || ref === void 0 ? void 0 : ref.media_link,
                            title: item === null || item === void 0 ? void 0 : item.product_name,
                            price: item === null || item === void 0 ? void 0 : item.product_price,
                            id: item === null || item === void 0 ? void 0 : item.product_id
                        })
                    }, item.product_id);
                })
            })
        })
    }));
};
/* harmony default export */ const superstore_shop_Section5 = (Section5);


/***/ }),

/***/ 2038:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4588);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const Section8 = ()=>{
    return(/*#__PURE__*/ _jsx(Container, {
        sx: {
            mb: '70px'
        },
        children: /*#__PURE__*/ _jsxs(Grid, {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 12,
                    md: 4,
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/product/1643199887887",
                        children: /*#__PURE__*/ _jsx("a", {
                            children: /*#__PURE__*/ _jsx(LazyImage, {
                                src: "https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2FUntitled-1.jpg?alt=media&token=abb1b480-c779-47bd-b59d-d2b611a8c650",
                                height: 342,
                                width: 385,
                                layout: "responsive",
                                objectFit: "contain",
                                alt: "smart watch o'zbekiston buylab eltuv xizmati"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 12,
                    md: 8,
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/product/1643708705765",
                        children: /*#__PURE__*/ _jsx("a", {
                            children: /*#__PURE__*/ _jsx(LazyImage, {
                                src: "https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fsssssss.jpg?alt=media&token=3c3a8fbc-8dba-45e1-94a9-8bb8c91c8b51",
                                height: 342,
                                width: "100%",
                                layout: "responsive",
                                objectFit: "contain",
                                alt: "Elektr isitgich eng hamyonbob va hammabob mahsulot"
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Section8)));


/***/ }),

/***/ 6253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qM": () => (/* binding */ getServiceList)
/* harmony export */ });
/* unused harmony exports getTopRatedProduct, getTopRatedBrand, getNewArrivalList, getCarBrands, getCarList, getMobileBrands, getMobileShops, getMobileList, getOpticsBrands, getOpticsShops, getOpticsList, getCategories, getMoreItems */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getTopRatedProduct = async ()=>{
    const response = await axios.get("/api/super-store/toprated-product");
    return response.data;
};
const getTopRatedBrand = async ()=>{
    const response = await axios.get("/api/super-store/toprated-brand");
    return response.data;
};
const getNewArrivalList = async ()=>{
    const response = await axios.get("/api/super-store/new-arrivals");
    return response.data;
};
const getCarBrands = async ()=>{
    const response = await axios.get("/api/super-store/car-brand-list");
    return response.data;
};
const getCarList = async ()=>{
    const response = await axios.get("/api/super-store/car-list");
    return response.data;
};
const getMobileBrands = async ()=>{
    const response = await axios.get("/api/super-store/mobile-brand-list");
    return response.data;
};
const getMobileShops = async ()=>{
    const response = await axios.get("/api/super-store/mobile-shop-list");
    return response.data;
};
const getMobileList = async ()=>{
    const response = await axios.get("/api/super-store/mobile-list");
    return response.data;
};
const getOpticsBrands = async ()=>{
    const response = await axios.get("/api/super-store/optics/watch-brands");
    return response.data;
};
const getOpticsShops = async ()=>{
    const response = await axios.get("/api/super-store/optics/watch-shops");
    return response.data;
};
const getOpticsList = async ()=>{
    const response = await axios.get("/api/super-store/optics-list");
    return response.data;
};
const getCategories = async ()=>{
    const response = await axios.get("/api/super-store/bottom-categories");
    return response.data;
};
const getMoreItems = async ()=>{
    const response = await axios.get("/api/super-store/get-more-items");
    return response.data;
};
const getServiceList = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/super-store/get-service-list");
    return response.data;
};


/***/ }),

/***/ 7902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowRight");

/***/ }),

/***/ 4214:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CallOutlined");

/***/ }),

/***/ 7522:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CameraEnhance");

/***/ }),

/***/ 2818:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 8790:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDownOutlined");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 5974:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MailOutline");

/***/ }),

/***/ 4449:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PersonOutline");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 1920:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SearchOutlined");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 6715:
/***/ ((module) => {

module.exports = require("@mui/lab/AdapterDateFns");

/***/ }),

/***/ 5890:
/***/ ((module) => {

module.exports = require("@mui/lab/DateTimePicker");

/***/ }),

/***/ 9904:
/***/ ((module) => {

module.exports = require("@mui/lab/LocalizationProvider");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 2494:
/***/ ((module) => {

module.exports = require("@mui/material/ButtonBase");

/***/ }),

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 5371:
/***/ ((module) => {

module.exports = require("@mui/material/ClickAwayListener");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7077:
/***/ ((module) => {

module.exports = require("@mui/material/utils");

/***/ }),

/***/ 1918:
/***/ ((module) => {

module.exports = require("@mui/styled-engine");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 3908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 4648:
/***/ ((module) => {

module.exports = require("react-input-mask");

/***/ }),

/***/ 9252:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,7387,7308,6562,2123,5336,553,4273,1001,9144,9997], () => (__webpack_exec__(1878)));
module.exports = __webpack_exports__;

})();