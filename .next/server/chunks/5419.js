"use strict";
exports.id = 5419;
exports.ids = [5419];
exports.modules = {

/***/ 9138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ DashboardNavigationWrapper),
/* harmony export */   "W": () => (/* binding */ StyledDashboardNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3377);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const DashboardNavigationWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card)(({ theme  })=>({
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 64px)',
            boxShadow: 'none',
            overflowY: 'auto'
        }
    })
);
const StyledDashboardNav = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(({ children , isCurrentPath , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_link_NavLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...rest,
        children: children
    })
)(({ theme , isCurrentPath  })=>({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderLeft: '4px solid',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        marginBottom: '1.25rem',
        borderColor: isCurrentPath ? theme.palette.primary.main : 'transparent',
        '& .nav-icon': {
            color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600]
        },
        '&:hover': {
            borderColor: theme.palette.primary.main,
            '& .nav-icon': {
                color: theme.palette.primary.main
            }
        }
    })
);


/***/ }),

/***/ 3624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/BazarButton.jsx
var BazarButton = __webpack_require__(5469);
// EXTERNAL MODULE: ./src/components/BazarCard.jsx
var BazarCard = __webpack_require__(5120);
// EXTERNAL MODULE: ./src/components/categories/CategoryMenu.jsx + 22 modules
var CategoryMenu = __webpack_require__(3948);
// EXTERNAL MODULE: ./src/components/FlexBox.jsx
var FlexBox = __webpack_require__(2279);
// EXTERNAL MODULE: ./src/components/icons/Category.jsx
var Category = __webpack_require__(2871);
// EXTERNAL MODULE: ./src/components/nav-link/NavLink.jsx
var NavLink = __webpack_require__(3377);
// EXTERNAL MODULE: ./src/components/Typography.jsx
var Typography = __webpack_require__(403);
;// CONCATENATED MODULE: ./src/data/navbarNavigations.js
const navbarNavigations = [
    {
        title: "Home",
        child: [
            {
                title: "Super Store",
                url: "/superstore-shop"
            },
            {
                title: "Furniture",
                url: "/furniture-shop"
            },
            {
                title: "Grocery-v1",
                url: "/grocery1"
            },
            {
                title: "Grocery-v2",
                url: "/grocery2"
            },
            {
                title: "Grocery-v3",
                url: "/grocery3"
            },
            {
                title: "Health and Beauty",
                url: "/healthbeauty-shop"
            },
            {
                title: "Fashion",
                url: "/fashion-shop"
            },
            {
                title: "Gift Store",
                url: "/gift-shop"
            },
            {
                title: "Gadget",
                url: "/gadget-shop"
            }
        ]
    },
    {
        title: "Pages",
        child: [
            {
                title: "Sale Page",
                child: [
                    {
                        title: "Version 1",
                        url: "/sale-page-1"
                    },
                    {
                        title: "Version 2",
                        url: "/sale-page-2"
                    }
                ]
            },
            {
                title: "Vendor",
                child: [
                    {
                        title: "All vendors",
                        url: "/shops"
                    },
                    {
                        title: "Vendor store",
                        url: "/shop/34324"
                    }
                ]
            },
            {
                title: "Shop",
                child: [
                    {
                        title: "Search product",
                        url: "/product/search/mobile phone"
                    },
                    {
                        title: "Single product",
                        url: "/product/34324321"
                    },
                    {
                        title: "Cart",
                        url: "/cart"
                    },
                    {
                        title: "Checkout",
                        url: "/checkout"
                    },
                    {
                        title: "Alternative Checkout",
                        url: "/checkout-alternative"
                    },
                    {
                        title: "Order confirmation",
                        url: "/order-confirmation"
                    }
                ]
            }
        ]
    },
    {
        title: "User Account",
        child: [
            {
                title: "Orders",
                child: [
                    {
                        title: "Order List",
                        url: "/orders"
                    },
                    {
                        title: "Order Details",
                        url: "/orders/5452423"
                    }
                ]
            },
            {
                title: "Profile",
                child: [
                    {
                        title: "View Profile",
                        url: "/profile"
                    },
                    {
                        title: "Edit Profile",
                        url: "/profile/edit"
                    }
                ]
            },
            {
                title: "Address",
                child: [
                    {
                        title: "Address List",
                        url: "/address"
                    },
                    {
                        title: "Add Address",
                        url: "/address/512474"
                    }
                ]
            },
            {
                title: "Support tickets",
                child: [
                    {
                        title: "All tickets",
                        url: "/support-tickets"
                    },
                    {
                        title: "Ticket details",
                        url: "/support-tickets/512474"
                    }
                ]
            },
            {
                title: "Wishlist",
                url: "/wish-list"
            }
        ]
    },
    {
        title: "Vendor Account",
        child: [
            {
                title: "Dashboard",
                url: "/vendor/dashboard"
            },
            {
                title: "Products",
                child: [
                    {
                        title: "All products",
                        url: "/vendor/products"
                    },
                    {
                        title: "Add/Edit product",
                        url: "/vendor/products/248104"
                    }
                ]
            },
            {
                title: "Orders",
                child: [
                    {
                        title: "All orders",
                        url: "/vendor/orders"
                    },
                    {
                        title: "Order details",
                        url: "/vendor/orders/248104"
                    }
                ]
            },
            {
                title: "Profile",
                url: "/vendor/account-settings"
            }
        ]
    },
    {
        title: "Back to Demos",
        url: "/"
    }
];
/* harmony default export */ const data_navbarNavigations = (navbarNavigations);

// EXTERNAL MODULE: external "@mui/icons-material/ArrowRight"
var ArrowRight_ = __webpack_require__(7902);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronRight"
var ChevronRight_ = __webpack_require__(2818);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx












 // component props interface
// const common css style
const navLinkStyle = {
    cursor: "pointer",
    marginRight: "2rem",
    transition: "color 150ms ease-in-out",
    "&:hover": {
        color: "primary.main"
    },
    "&:last-child": {
        marginRight: "0"
    }
}; // style components
const StyledNavLink = (0,material_.styled)(NavLink/* default */.Z)(()=>({
        ...navLinkStyle
    })
);
const ParentNav = (0,material_.styled)(material_.Box)(({ theme  })=>({
        "&:hover": {
            color: theme.palette.primary.main,
            "& > .parent-nav-item": {
                display: "block"
            }
        }
    })
);
const ParentNavItem = (0,material_.styled)(material_.Box)(()=>({
        display: "none",
        position: "absolute",
        top: 0,
        left: "100%",
        zIndex: 5
    })
);
const NavBarWrapper = (0,material_.styled)(BazarCard/* default */.Z)(({ theme  })=>({
        display: "block",
        position: "relative",
        height: "60px",
        borderRadius: "0px",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    })
);
const InnerContainer = (0,material_.styled)(material_.Container)(()=>({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%"
    })
);
const CategoryMenuButton = (0,material_.styled)(BazarButton/* default */.Z)(({ theme  })=>({
        width: "278px",
        height: "40px",
        px: "1rem",
        backgroundColor: theme.palette.grey[100]
    })
);
const Navbar = ({ navListOpen , hideCategories  })=>{
    const renderNestedNav = (list, isRoot = false)=>{
        return list === null || list === void 0 ? void 0 : list.map((nav)=>{
            if (isRoot) {
                if (nav.url && nav.extLink) return(/*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                    href: nav.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: nav.title
                }, nav.title));
                else if (nav.url) return(/*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                    href: nav.url,
                    children: nav.title
                }, nav.title));
                if (nav.child) return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexBox/* default */.Z, {
                    position: "relative",
                    flexDirection: "column",
                    alignItems: "center",
                    sx: {
                        "&:hover": {
                            "& > .child-nav-item": {
                                display: "block"
                            }
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: navLinkStyle,
                            children: nav.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            className: "child-nav-item",
                            sx: {
                                display: "none",
                                position: "absolute",
                                left: 0,
                                top: "100%",
                                zIndex: 5
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BazarCard/* default */.Z, {
                                sx: {
                                    mt: "1.25rem",
                                    py: "0.5rem",
                                    minWidth: "230px"
                                },
                                elevation: 3,
                                children: renderNestedNav(nav.child)
                            })
                        })
                    ]
                }, nav.title));
            } else {
                if (nav.url) return(/*#__PURE__*/ jsx_runtime_.jsx(NavLink/* default */.Z, {
                    href: nav.url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                        children: nav.title
                    })
                }, nav.title));
                if (nav.child) return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ParentNav, {
                    position: "relative",
                    minWidth: "230px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.MenuItem, {
                            color: "grey.700",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    flex: "1 1 0",
                                    component: "span",
                                    children: nav.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ArrowRight_default()), {
                                    fontSize: "small"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ParentNavItem, {
                            className: "parent-nav-item",
                            pl: 1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BazarCard/* default */.Z, {
                                sx: {
                                    py: "0.5rem",
                                    minWidth: "230px"
                                },
                                elevation: 3,
                                children: renderNestedNav(nav.child)
                            })
                        })
                    ]
                }, nav.title));
            }
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(NavBarWrapper, {
        elevation: 2,
        hoverEffect: false,
        children: !hideCategories ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InnerContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CategoryMenu/* default */.Z, {
                    open: navListOpen,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CategoryMenuButton, {
                        variant: "text",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Category/* default */.Z, {
                                fontSize: "small"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Paragraph */.nv, {
                                fontWeight: "600",
                                textAlign: "left",
                                flex: "1 1 0",
                                ml: 1.25,
                                color: "grey.600",
                                children: "Kategoriyalar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                                className: "dropdown-icon",
                                fontSize: "small"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FlexBox/* default */.Z, {
                    children: renderNestedNav(data_navbarNavigations, true)
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(InnerContainer, {
            sx: {
                justifyContent: "flex-end"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(FlexBox/* default */.Z, {
                children: renderNestedNav(data_navbarNavigations, true)
            })
        })
    }));
};
/* harmony default export */ const navbar_Navbar = (Navbar);


/***/ })

};
;