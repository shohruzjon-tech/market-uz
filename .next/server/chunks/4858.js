"use strict";
exports.id = 4858;
exports.ids = [4858];
exports.modules = {

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_ProductCard9List)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/FlexBox.jsx
var FlexBox = __webpack_require__(2279);
// EXTERNAL MODULE: ./src/components/BazarImage.jsx
var BazarImage = __webpack_require__(7976);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
// EXTERNAL MODULE: external "@mui/icons-material/Add"
var Add_ = __webpack_require__(6146);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@mui/icons-material/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__(6910);
// EXTERNAL MODULE: external "@mui/icons-material/Remove"
var Remove_ = __webpack_require__(9509);
// EXTERNAL MODULE: external "@mui/icons-material/Visibility"
var Visibility_ = __webpack_require__(773);
var Visibility_default = /*#__PURE__*/__webpack_require__.n(Visibility_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/components/product-cards/ProductCard9Style.jsx


const ProductCard9Style = (0,styles_.styled)(material_.Card)(({ theme  })=>({
        overflow: 'hidden',
        width: '100%',
        marginBottom: '1.25rem',
        '& .quick-view': {
            position: 'absolute',
            display: 'none',
            flexDirection: 'column',
            top: '0.75rem',
            right: '0.75rem'
        },
        h4: {
            margin: '0.5rem 0px',
            color: theme.palette.secondary.main,
            textAlign: 'left'
        },
        '& .price': {
            display: 'flex',
            marginTop: '0.5rem',
            fontWeight: 600,
            h4: {
                margin: '0px',
                paddingRight: '0.5rem',
                color: theme.palette.primary.main
            },
            del: {
                color: theme.palette.grey[600]
            }
        },
        '& .icon-holder': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
        },
        '& .add-cart': {
            display: 'none'
        },
        '&:hover': {
            '& .add-cart': {
                display: 'flex'
            },
            '& .quick-view': {
                display: 'block'
            }
        }
    })
);
/* harmony default export */ const product_cards_ProductCard9Style = (ProductCard9Style);

;// CONCATENATED MODULE: ./src/components/product-cards/ProductCard9.jsx














const ProductCard9 = ({ product_id , product_price , product_name , product_media , product_is_discounted , product_discounted_price , product_rating ,  })=>{
    const { 0: cartAmount , 1: setCartAmount  } = (0,external_react_.useState)(0);
    const { 0: open1 , 1: setOpen  } = (0,external_react_.useState)(false);
    const toggleDialog = (0,external_react_.useCallback)(()=>{
        setOpen((open)=>!open
        );
    }, []);
    const handleCartAmountChange = (0,external_react_.useCallback)((amount)=>()=>{
            console.log(amount);
            if (amount >= 0) setCartAmount(amount);
        }
    , []);
    const media = product_media === null || product_media === void 0 ? void 0 : product_media.filter((item)=>{
        return (item === null || item === void 0 ? void 0 : item.type_id) === 1;
    })[0];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(product_cards_ProductCard9Style, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            sm: 3,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(system_.Box, {
                                position: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                        className: "quick-view",
                                        size: "small",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Visibility_default()), {
                                            fontSize: "small",
                                            onClick: toggleDialog
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(BazarImage/* default */.Z, {
                                        src: media === null || media === void 0 ? void 0 : media.media_link,
                                        alt: product_name,
                                        width: "100%",
                                        height: 200
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            sm: 8,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%",
                                p: 2,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/product/${product_id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Typography.H5, {
                                                fontWeight: "600",
                                                my: "0.5rem",
                                                children: product_name
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Rating, {
                                        value: product_rating || 0,
                                        color: "warn",
                                        readOnly: true
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
                                        mt: 1,
                                        mb: 2,
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography.H5, {
                                                fontWeight: 600,
                                                color: "primary.main",
                                                mr: 1,
                                                children: [
                                                    product_price === null || product_price === void 0 ? void 0 : product_price.toLocaleString(),
                                                    " so'm"
                                                ]
                                            }),
                                            product_is_discounted && product_discounted_price > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Span */.Dr, {
                                                fontWeight: "600",
                                                color: "grey.600",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("del", {
                                                    children: [
                                                        (product_price - product_price * product_discounted_price / 100).toFixed(2),
                                                        " so'm"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(FlexBox/* default */.Z, {
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flexDirection: "row-reverse",
                                        height: "30px",
                                        sx: {
                                            display: {
                                                xs: "flex",
                                                sm: "none"
                                            }
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Dialog, {
                open: open1,
                maxWidth: false,
                onClose: toggleDialog,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                    sx: {
                        paddingBottom: "1.25rem"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        sx: {
                            position: "absolute",
                            top: "0",
                            right: "0"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                            className: "close",
                            fontSize: "small",
                            color: "primary",
                            onClick: toggleDialog
                        })
                    })
                })
            })
        ]
    }));
};
ProductCard9.defaultProps = {
    title: "Apple iPhone 5 Unlocked 16GB 8MP Used Cell-Phone-16gbIOS Used Refurbished 100%Factory Used",
    imgUrl: "/assets/images/products/macbook.png",
    off: 50,
    price: 450,
    rating: 0,
    subcategories: [
        {
            title: "Bike",
            url: "/#"
        },
        {
            title: "Ducati",
            url: "/#"
        },
        {
            title: "Motors",
            url: "/#"
        }
    ]
};
/* harmony default export */ const product_cards_ProductCard9 = (ProductCard9);

;// CONCATENATED MODULE: ./src/components/products/ProductCard9List.jsx






const ProductCard9List = ({ products  })=>{
    console.log(products);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: products.map((item, ind)=>/*#__PURE__*/ jsx_runtime_.jsx(product_cards_ProductCard9, {
                ...item
            }, ind)
        )
    }));
};
/* harmony default export */ const products_ProductCard9List = (ProductCard9List);


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