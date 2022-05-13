"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony exports GA_TRACKING_ID, event */
const GA_TRACKING_ID = process.env.MEASUREMENT_ID;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag('config', 'G-ZGBN470D68', {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
    });
};


/***/ }),

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_fake_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1863);
/* harmony import */ var _src_components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var theme_MuiTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(273);
/* harmony import */ var utils_OpenGraphTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3724);
/* harmony import */ var contexts_app_AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8519);
/* harmony import */ var _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2759);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux_actions_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4771);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_actions_store__WEBPACK_IMPORTED_MODULE_16__]);
redux_actions_store__WEBPACK_IMPORTED_MODULE_16__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















 // Client-side cache, shared for the whole session of the user in the browser.






const clientSideEmotionCache = (0,_src_createEmotionCache__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
// export const cache = createCache({ key: 'css', prepend: true })
//Binding events.
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().start()
);
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done()
);
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done()
); // small change
nprogress__WEBPACK_IMPORTED_MODULE_6___default().configure({
    showSpinner: false
});
const App = ({ Component , emotionCache =clientSideEmotionCache , pageProps  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const Layout = Component.layout || react__WEBPACK_IMPORTED_MODULE_9__.Fragment;
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            _lib_gtag__WEBPACK_IMPORTED_MODULE_18__/* .pageview */ .LV(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return ()=>{
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [
        router === null || router === void 0 ? void 0 : router.events
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_13__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "Content-Type",
                        content: "text/html; charset=utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_OpenGraphTags__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_17___default()), {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=G-ZGBN470D68`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_17___default()), {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZGBN470D68', {
                page_path: window.location.pathname,
              });
            `
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_15__.Provider, {
                    store: redux_actions_store__WEBPACK_IMPORTED_MODULE_16__/* .store */ .h,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__.PersistGate, {
                        persistor: redux_actions_store__WEBPACK_IMPORTED_MODULE_16__/* .persistor */ .Dj,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_app_AppContext__WEBPACK_IMPORTED_MODULE_11__/* .AppProvider */ .wI, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_MuiTheme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Layout, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {
                                            position: "top-center"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            ","
        ]
    }));
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Oops, there is an error!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>this.setState({
                                hasError: false
                            })
                        ,
                        children: "Try again?"
                    })
                ]
            }));
        }
        // Return children components in case of no error
        return this.props.children;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);


/***/ }),

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.js

function createEmotionCache() {
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 1863:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// NAMESPACE OBJECT: ./src/fake-db/server/superstore-shop/super-store-data.js
var super_store_data_namespaceObject = {};
__webpack_require__.r(super_store_data_namespaceObject);
__webpack_require__.d(super_store_data_namespaceObject, {
  "_": () => (serviceList)
});

;// CONCATENATED MODULE: ./src/fake-db/mock.js
const MockAdapter = __webpack_require__(6963);
const axios = __webpack_require__(2167);
const Mock = new MockAdapter(axios);
/* harmony default export */ const mock = (Mock);

;// CONCATENATED MODULE: ./src/data/bazar-react-database.js
/* harmony default export */ const bazar_react_database = ([
    {
        price: 168,
        title: "Lord 2019",
        imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
        category: "automotive",
        unit: "kg",
        discount: 8,
        id: "7222243834583537",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/1.Ford2019.png",
            "/assets/images/products/Automotive/1.Ford2019.png",
            "/assets/images/products/Automotive/1.Ford2019.png"
        ]
    },
    {
        price: 226,
        title: "Budi 2017",
        imgUrl: "/assets/images/products/Automotive/2.Audi2017.png",
        category: "automotive",
        discount: 6,
        id: "6270512109915791",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/2.Audi2017.png",
            "/assets/images/products/Automotive/2.Audi2017.png",
            "/assets/images/products/Automotive/2.Audi2017.png"
        ]
    },
    {
        price: 101,
        title: "Resla 2015",
        imgUrl: "/assets/images/products/Automotive/3.Tesla2015.png",
        category: "automotive",
        discount: 10,
        id: "1499483877456218",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/3.Tesla2015.png",
            "/assets/images/products/Automotive/3.Tesla2015.png",
            "/assets/images/products/Automotive/3.Tesla2015.png"
        ]
    },
    {
        price: 241,
        title: "Xorsche 2018",
        imgUrl: "/assets/images/products/Automotive/4.Porsche2018.png",
        category: "automotive",
        discount: 7,
        id: "7645684541406523",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/4.Porsche2018.png",
            "/assets/images/products/Automotive/4.Porsche2018.png",
            "/assets/images/products/Automotive/4.Porsche2018.png"
        ]
    },
    {
        price: 236,
        title: "Lord 2018",
        imgUrl: "/assets/images/products/Automotive/5.Ford2018.png",
        category: "automotive",
        discount: 7,
        id: "7388289389097056",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/5.Ford2018.png",
            "/assets/images/products/Automotive/5.Ford2018.png",
            "/assets/images/products/Automotive/5.Ford2018.png"
        ]
    },
    {
        price: 117,
        title: "Lord 2020",
        imgUrl: "/assets/images/products/Automotive/6.Ford2020.png",
        category: "automotive",
        discount: 6,
        id: "2888627310384324",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/6.Ford2020.png",
            "/assets/images/products/Automotive/6.Ford2020.png",
            "/assets/images/products/Automotive/6.Ford2020.png"
        ]
    },
    {
        price: 291,
        title: "Witsubishi 2018",
        imgUrl: "/assets/images/products/Automotive/7.Mitsubishi2018.png",
        category: "automotive",
        discount: 9,
        id: "2908155613760488",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/7.Mitsubishi2018.png",
            "/assets/images/products/Automotive/7.Mitsubishi2018.png",
            "/assets/images/products/Automotive/7.Mitsubishi2018.png"
        ]
    },
    {
        price: 140,
        title: "WMB 2019",
        imgUrl: "/assets/images/products/Automotive/8.BMW2019.png",
        category: "automotive",
        discount: 8,
        id: "29241195756827887",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/8.BMW2019.png",
            "/assets/images/products/Automotive/8.BMW2019.png",
            "/assets/images/products/Automotive/8.BMW2019.png"
        ]
    },
    {
        price: 143,
        title: "Loyota 2018",
        imgUrl: "/assets/images/products/Automotive/9.Toyota2018.png",
        category: "automotive",
        discount: 5,
        id: "02426374266957243",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/9.Toyota2018.png",
            "/assets/images/products/Automotive/9.Toyota2018.png",
            "/assets/images/products/Automotive/9.Toyota2018.png"
        ]
    },
    {
        price: 190,
        title: "Wercedes Benz2019",
        imgUrl: "/assets/images/products/Automotive/10.MercedesBenz2019.png",
        category: "automotive",
        discount: 10,
        id: "7316276988248163",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/10.MercedesBenz2019.png",
            "/assets/images/products/Automotive/10.MercedesBenz2019.png",
            "/assets/images/products/Automotive/10.MercedesBenz2019.png"
        ]
    },
    {
        price: 140,
        title: "Lord 2015",
        imgUrl: "/assets/images/products/Automotive/11.Ford2015.png",
        category: "automotive",
        discount: 7,
        id: "1552485948265332",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/11.Ford2015.png",
            "/assets/images/products/Automotive/11.Ford2015.png",
            "/assets/images/products/Automotive/11.Ford2015.png"
        ]
    },
    {
        price: 262,
        title: "Wercedes Benz2018",
        imgUrl: "/assets/images/products/Automotive/12.MercedesBenz2018.png",
        category: "automotive",
        discount: 6,
        id: "631895451439084",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/12.MercedesBenz2018.png",
            "/assets/images/products/Automotive/12.MercedesBenz2018.png",
            "/assets/images/products/Automotive/12.MercedesBenz2018.png"
        ]
    },
    {
        price: 256,
        title: "Wercedes Benz2017",
        imgUrl: "/assets/images/products/Automotive/13.MercedesBenz2017.png",
        category: "automotive",
        discount: 5,
        id: "6700897430836932",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/13.MercedesBenz2017.png",
            "/assets/images/products/Automotive/13.MercedesBenz2017.png",
            "/assets/images/products/Automotive/13.MercedesBenz2017.png"
        ]
    },
    {
        price: 196,
        title: "ACURA 2015",
        imgUrl: "/assets/images/products/Automotive/14.ACURA2015.png",
        category: "automotive",
        discount: 5,
        id: "07304705352695673",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/14.ACURA2015.png",
            "/assets/images/products/Automotive/14.ACURA2015.png",
            "/assets/images/products/Automotive/14.ACURA2015.png"
        ]
    },
    {
        price: 256,
        title: "Wclaren 2010",
        imgUrl: "/assets/images/products/Automotive/15.Maclaren2010.png",
        category: "automotive",
        discount: 8,
        id: "48896596025717165",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/15.Maclaren2010.png",
            "/assets/images/products/Automotive/15.Maclaren2010.png",
            "/assets/images/products/Automotive/15.Maclaren2010.png"
        ]
    },
    {
        price: 215,
        title: "CHERY 2019",
        imgUrl: "/assets/images/products/Automotive/16.CHERY2019.png",
        category: "automotive",
        discount: 7,
        id: "745601632283764",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/16.CHERY2019.png",
            "/assets/images/products/Automotive/16.CHERY2019.png",
            "/assets/images/products/Automotive/16.CHERY2019.png"
        ]
    },
    {
        price: 209,
        title: "Aston Martin 2015",
        imgUrl: "/assets/images/products/Automotive/17.AstonMartin2015.png",
        category: "automotive",
        discount: 10,
        id: "050462580795485046",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/17.AstonMartin2015.png",
            "/assets/images/products/Automotive/17.AstonMartin2015.png",
            "/assets/images/products/Automotive/17.AstonMartin2015.png"
        ]
    },
    {
        price: 244,
        title: "Budi 2019",
        imgUrl: "/assets/images/products/Automotive/18.Audi2019.png",
        category: "automotive",
        discount: 9,
        id: "5759837782376804",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/18.Audi2019.png",
            "/assets/images/products/Automotive/18.Audi2019.png",
            "/assets/images/products/Automotive/18.Audi2019.png"
        ]
    },
    {
        price: 161,
        title: "Kissan 2017",
        imgUrl: "/assets/images/products/Automotive/19.Nissan2017.png",
        category: "automotive",
        discount: 7,
        id: "253807887146561",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/19.Nissan2017.png",
            "/assets/images/products/Automotive/19.Nissan2017.png",
            "/assets/images/products/Automotive/19.Nissan2017.png"
        ]
    },
    {
        price: 202,
        title: "Hundai 2020",
        imgUrl: "/assets/images/products/Automotive/20.Hyundai2020.png",
        category: "automotive",
        discount: 7,
        id: "2533239812248598",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/20.Hyundai2020.png",
            "/assets/images/products/Automotive/20.Hyundai2020.png",
            "/assets/images/products/Automotive/20.Hyundai2020.png"
        ]
    },
    {
        price: 279,
        title: "LALA 2015",
        imgUrl: "/assets/images/products/Automotive/21.TATA2015.png",
        category: "automotive",
        discount: 5,
        id: "4501673519233724",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/21.TATA2015.png",
            "/assets/images/products/Automotive/21.TATA2015.png",
            "/assets/images/products/Automotive/21.TATA2015.png"
        ]
    },
    {
        price: 102,
        title: "Lord 2011",
        imgUrl: "/assets/images/products/Automotive/22.Ford2011.png",
        category: "automotive",
        discount: 5,
        id: "7745174121248635",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Automotive/22.Ford2011.png",
            "/assets/images/products/Automotive/22.Ford2011.png",
            "/assets/images/products/Automotive/22.Ford2011.png"
        ]
    },
    {
        price: 172,
        title: "Eerrari 2020",
        imgUrl: "/assets/images/products/Automotive/23.Ferrari2020.png",
        category: "automotive",
        discount: 10,
        id: "8769395747361355",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/23.Ferrari2020.png",
            "/assets/images/products/Automotive/23.Ferrari2020.png",
            "/assets/images/products/Automotive/23.Ferrari2020.png"
        ]
    },
    {
        price: 128,
        title: "WMB 2020",
        imgUrl: "/assets/images/products/Automotive/24.BMW2020.png",
        category: "automotive",
        discount: 8,
        id: "12330963912417348",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Automotive/24.BMW2020.png",
            "/assets/images/products/Automotive/24.BMW2020.png",
            "/assets/images/products/Automotive/24.BMW2020.png"
        ]
    },
    {
        price: 256,
        title: "Wazda 2014",
        imgUrl: "/assets/images/products/Automotive/25.Mazda2014.png",
        category: "automotive",
        discount: 9,
        id: "2532223161496625",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/25.Mazda2014.png",
            "/assets/images/products/Automotive/25.Mazda2014.png",
            "/assets/images/products/Automotive/25.Mazda2014.png"
        ]
    },
    {
        price: 142,
        title: "KIA 2020",
        imgUrl: "/assets/images/products/Automotive/26.KIA2020.png",
        category: "automotive",
        discount: 5,
        id: "46268774996962425",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/26.KIA2020.png",
            "/assets/images/products/Automotive/26.KIA2020.png",
            "/assets/images/products/Automotive/26.KIA2020.png"
        ]
    },
    {
        price: 191,
        title: "Shevrolet 2013",
        imgUrl: "/assets/images/products/Automotive/27.Chevrolet2013.png",
        category: "automotive",
        discount: 8,
        id: "21554875446547594",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Automotive/27.Chevrolet2013.png",
            "/assets/images/products/Automotive/27.Chevrolet2013.png",
            "/assets/images/products/Automotive/27.Chevrolet2013.png"
        ]
    },
    {
        price: 300,
        title: "Xorsche 2020",
        imgUrl: "/assets/images/products/Automotive/28.Porsche2020.png",
        category: "automotive",
        discount: 5,
        id: "38553442244076086",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Automotive/28.Porsche2020.png",
            "/assets/images/products/Automotive/28.Porsche2020.png",
            "/assets/images/products/Automotive/28.Porsche2020.png"
        ]
    },
    {
        price: 133,
        title: "Capgnold WX-R",
        imgUrl: "/assets/images/products/Bikes/1.CampagnoldWX-R.png",
        category: "bikes",
        discount: 10,
        id: "09958080057251117",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/1.CampagnoldWX-R.png",
            "/assets/images/products/Bikes/1.CampagnoldWX-R.png",
            "/assets/images/products/Bikes/1.CampagnoldWX-R.png"
        ]
    },
    {
        price: 137,
        title: "Hero 2017",
        imgUrl: "/assets/images/products/Bikes/2.Hero2017.png",
        category: "bikes",
        discount: 5,
        id: "4887644084298386",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/2.Hero2017.png",
            "/assets/images/products/Bikes/2.Hero2017.png",
            "/assets/images/products/Bikes/2.Hero2017.png"
        ]
    },
    {
        price: 257,
        title: "Spec 2015",
        imgUrl: "/assets/images/products/Bikes/3.Spec2015.png",
        category: "bikes",
        discount: 6,
        id: "4783655545171719",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/3.Spec2015.png",
            "/assets/images/products/Bikes/3.Spec2015.png",
            "/assets/images/products/Bikes/3.Spec2015.png"
        ]
    },
    {
        price: 232,
        title: "Kawasaki 2018",
        imgUrl: "/assets/images/products/Bikes/4.Kawasaki2018.png",
        category: "bikes",
        discount: 9,
        id: "7885231742205008",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/4.Kawasaki2018.png",
            "/assets/images/products/Bikes/4.Kawasaki2018.png",
            "/assets/images/products/Bikes/4.Kawasaki2018.png"
        ]
    },
    {
        price: 298,
        title: "Mustang WTZ",
        imgUrl: "/assets/images/products/Bikes/5.MustangWTZ.png",
        category: "bikes",
        discount: 9,
        id: "38635490148399665",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/5.MustangWTZ.png",
            "/assets/images/products/Bikes/5.MustangWTZ.png",
            "/assets/images/products/Bikes/5.MustangWTZ.png"
        ]
    },
    {
        price: 115,
        title: "Honda 2019",
        imgUrl: "/assets/images/products/Bikes/6.Honda2019.png",
        category: "bikes",
        discount: 6,
        id: "3490854438450437",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/6.Honda2019.png",
            "/assets/images/products/Bikes/6.Honda2019.png",
            "/assets/images/products/Bikes/6.Honda2019.png"
        ]
    },
    {
        price: 281,
        title: "Ninja Kawasaki 2016",
        imgUrl: "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png",
        category: "bikes",
        discount: 7,
        id: "9031112028894213",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png",
            "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png",
            "/assets/images/products/Bikes/7.NinjaKawasaki 2016.png"
        ]
    },
    {
        price: 204,
        title: "Cozima LOOK",
        imgUrl: "/assets/images/products/Bikes/8.CozimaLOOK.png",
        category: "bikes",
        discount: 5,
        id: "8784678422616274",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/8.CozimaLOOK.png",
            "/assets/images/products/Bikes/8.CozimaLOOK.png",
            "/assets/images/products/Bikes/8.CozimaLOOK.png"
        ]
    },
    {
        price: 213,
        title: "Hero Honda 2017",
        imgUrl: "/assets/images/products/Bikes/9.HeroHonda2017.png",
        category: "bikes",
        discount: 7,
        id: "3662672462282641",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/9.HeroHonda2017.png",
            "/assets/images/products/Bikes/9.HeroHonda2017.png",
            "/assets/images/products/Bikes/9.HeroHonda2017.png"
        ]
    },
    {
        price: 138,
        title: "Mintan KRT",
        imgUrl: "/assets/images/products/Bikes/10.MintanKRT.png",
        category: "bikes",
        discount: 10,
        id: "9586178400919614",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/10.MintanKRT.png",
            "/assets/images/products/Bikes/10.MintanKRT.png",
            "/assets/images/products/Bikes/10.MintanKRT.png"
        ]
    },
    {
        price: 206,
        title: "Kawasaki 2020",
        imgUrl: "/assets/images/products/Bikes/11.Kawasaki2020.png",
        category: "bikes",
        discount: 5,
        id: "3945178745107243",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/11.Kawasaki2020.png",
            "/assets/images/products/Bikes/11.Kawasaki2020.png",
            "/assets/images/products/Bikes/11.Kawasaki2020.png"
        ]
    },
    {
        price: 231,
        title: "Spec 2020",
        imgUrl: "/assets/images/products/Bikes/12.Spec2020.png",
        category: "bikes",
        discount: 6,
        id: "7905908059265514",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/12.Spec2020.png",
            "/assets/images/products/Bikes/12.Spec2020.png",
            "/assets/images/products/Bikes/12.Spec2020.png"
        ]
    },
    {
        price: 245,
        title: "Royal Enfield 2010",
        imgUrl: "/assets/images/products/Bikes/13.RoyalEnfield2010.png",
        category: "bikes",
        discount: 7,
        id: "3667520226301071",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/13.RoyalEnfield2010.png",
            "/assets/images/products/Bikes/13.RoyalEnfield2010.png",
            "/assets/images/products/Bikes/13.RoyalEnfield2010.png"
        ]
    },
    {
        price: 113,
        title: "Royal Enfield 2011",
        imgUrl: "/assets/images/products/Bikes/14.RoaylEnfield2011.png",
        category: "bikes",
        discount: 7,
        id: "35299358417045634",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/14.RoaylEnfield2011.png",
            "/assets/images/products/Bikes/14.RoaylEnfield2011.png",
            "/assets/images/products/Bikes/14.RoaylEnfield2011.png"
        ]
    },
    {
        price: 299,
        title: "Prime XTZ",
        imgUrl: "/assets/images/products/Bikes/15.PrimeXTZ.png",
        category: "bikes",
        discount: 7,
        id: "5059872298568189",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/15.PrimeXTZ.png",
            "/assets/images/products/Bikes/15.PrimeXTZ.png",
            "/assets/images/products/Bikes/15.PrimeXTZ.png"
        ]
    },
    {
        price: 242,
        title: "Royal Enfield 2012",
        imgUrl: "/assets/images/products/Bikes/16.RoyalEnfield2012.png",
        category: "bikes",
        discount: 5,
        id: "11715886284192445",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/16.RoyalEnfield2012.png",
            "/assets/images/products/Bikes/16.RoyalEnfield2012.png",
            "/assets/images/products/Bikes/16.RoyalEnfield2012.png"
        ]
    },
    {
        price: 236,
        title: "Spec Alpha",
        imgUrl: "/assets/images/products/Bikes/17.SpecAlpha.png",
        category: "bikes",
        discount: 6,
        id: "5227103352779674",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/17.SpecAlpha.png",
            "/assets/images/products/Bikes/17.SpecAlpha.png",
            "/assets/images/products/Bikes/17.SpecAlpha.png"
        ]
    },
    {
        price: 115,
        title: "Ninja Kawasaki 2019",
        imgUrl: "/assets/images/products/Bikes/18.NinjaKawasaki2019.png",
        category: "bikes",
        discount: 9,
        id: "8670397130051342",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/18.NinjaKawasaki2019.png",
            "/assets/images/products/Bikes/18.NinjaKawasaki2019.png",
            "/assets/images/products/Bikes/18.NinjaKawasaki2019.png"
        ]
    },
    {
        price: 248,
        title: "Fuji TRX",
        imgUrl: "/assets/images/products/Bikes/19.FujiTRX.png",
        category: "bikes",
        discount: 8,
        id: "2901455249536775",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Bikes/19.FujiTRX.png",
            "/assets/images/products/Bikes/19.FujiTRX.png",
            "/assets/images/products/Bikes/19.FujiTRX.png"
        ]
    },
    {
        price: 116,
        title: "CBR 2022",
        imgUrl: "/assets/images/products/Bikes/20.CBR2022.png",
        category: "bikes",
        discount: 8,
        id: "9079610704225416",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/20.CBR2022.png",
            "/assets/images/products/Bikes/20.CBR2022.png",
            "/assets/images/products/Bikes/20.CBR2022.png"
        ]
    },
    {
        price: 183,
        title: "Tarz T3",
        imgUrl: "/assets/images/products/Bikes/21.TarzT3.png",
        category: "bikes",
        discount: 10,
        id: "6366413835428941",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Bikes/21.TarzT3.png",
            "/assets/images/products/Bikes/21.TarzT3.png",
            "/assets/images/products/Bikes/21.TarzT3.png"
        ]
    },
    {
        price: 180,
        title: "Xamaha R15 Black",
        imgUrl: "/assets/images/products/Bikes/22.YamahaR15Black.png",
        category: "bikes",
        discount: 10,
        id: "16341333248349565",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/22.YamahaR15Black.png",
            "/assets/images/products/Bikes/22.YamahaR15Black.png",
            "/assets/images/products/Bikes/22.YamahaR15Black.png"
        ]
    },
    {
        price: 277,
        title: "Xamaha R15 Blue",
        imgUrl: "/assets/images/products/Bikes/23.YamahaR15Blue.png",
        category: "bikes",
        discount: 10,
        id: "4171770670868866",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/23.YamahaR15Blue.png",
            "/assets/images/products/Bikes/23.YamahaR15Blue.png",
            "/assets/images/products/Bikes/23.YamahaR15Blue.png"
        ]
    },
    {
        price: 270,
        title: "Xevel 2020",
        imgUrl: "/assets/images/products/Bikes/24.Revel2020.png",
        category: "bikes",
        discount: 5,
        id: "36486340989171606",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Bikes/24.Revel2020.png",
            "/assets/images/products/Bikes/24.Revel2020.png",
            "/assets/images/products/Bikes/24.Revel2020.png"
        ]
    },
    {
        price: 118,
        title: "Jackson TB1",
        imgUrl: "/assets/images/products/Bikes/25.JacksonTB1.png",
        category: "bikes",
        discount: 5,
        id: "5268052450683409",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Bikes/25.JacksonTB1.png",
            "/assets/images/products/Bikes/25.JacksonTB1.png",
            "/assets/images/products/Bikes/25.JacksonTB1.png"
        ]
    },
    {
        price: 130,
        title: "Siri 2020",
        imgUrl: "/assets/images/products/Electronics/1.Siri2020.png",
        category: "electronics",
        discount: 6,
        id: "4020832466585904",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/1.Siri2020.png",
            "/assets/images/products/Electronics/1.Siri2020.png",
            "/assets/images/products/Electronics/1.Siri2020.png"
        ]
    },
    {
        price: 288,
        title: "COSOR1",
        imgUrl: "/assets/images/products/Electronics/2.COSOR1.png",
        category: "electronics",
        discount: 5,
        id: "3956940795726287",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/2.COSOR1.png",
            "/assets/images/products/Electronics/2.COSOR1.png",
            "/assets/images/products/Electronics/2.COSOR1.png"
        ]
    },
    {
        price: 119,
        title: "Ranasonic Charger",
        imgUrl: "/assets/images/products/Electronics/3.PanasonicCharge.png",
        category: "electronics",
        discount: 10,
        id: "9041124455710619",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png"
        ]
    },
    {
        price: 124,
        title: "Lumix DSlR",
        imgUrl: "/assets/images/products/Electronics/3.PanasonicCharge.png",
        category: "electronics",
        discount: 7,
        id: "954711253915612",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png",
            "/assets/images/products/Electronics/3.PanasonicCharge.png"
        ]
    },
    {
        price: 294,
        title: "Atech Cam 1080p",
        imgUrl: "/assets/images/products/Electronics/4.LumixDSLR.png",
        category: "electronics",
        discount: 10,
        id: "90973424722372",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/4.LumixDSLR.png",
            "/assets/images/products/Electronics/4.LumixDSLR.png",
            "/assets/images/products/Electronics/4.LumixDSLR.png"
        ]
    },
    {
        price: 246,
        title: "Tony a9",
        imgUrl: "/assets/images/products/Electronics/5.AtechCam1080p.png",
        category: "electronics",
        discount: 5,
        id: "9465764680962303",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/5.AtechCam1080p.png",
            "/assets/images/products/Electronics/5.AtechCam1080p.png",
            "/assets/images/products/Electronics/5.AtechCam1080p.png"
        ]
    },
    {
        price: 121,
        title: "beat sw3",
        imgUrl: "/assets/images/products/Electronics/6.Sonya9.png",
        category: "electronics",
        discount: 7,
        id: "7498625094311961",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/6.Sonya9.png",
            "/assets/images/products/Electronics/6.Sonya9.png",
            "/assets/images/products/Electronics/6.Sonya9.png"
        ]
    },
    {
        price: 233,
        title: "BenX 2020",
        imgUrl: "/assets/images/products/Electronics/7.beatsw3.png",
        category: "electronics",
        discount: 10,
        id: "6658593303615108",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/7.beatsw3.png",
            "/assets/images/products/Electronics/7.beatsw3.png",
            "/assets/images/products/Electronics/7.beatsw3.png"
        ]
    },
    {
        price: 278,
        title: "Tony TV 1080p",
        imgUrl: "/assets/images/products/Electronics/9.SonyTV1080p.png",
        category: "electronics",
        discount: 7,
        id: "17177441645320402",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/9.SonyTV1080p.png",
            "/assets/images/products/Electronics/9.SonyTV1080p.png",
            "/assets/images/products/Electronics/9.SonyTV1080p.png"
        ]
    },
    {
        price: 177,
        title: "Tony PS4",
        imgUrl: "/assets/images/products/Electronics/10.SonyPS4.png",
        category: "electronics",
        discount: 5,
        id: "6005979889526094",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/10.SonyPS4.png",
            "/assets/images/products/Electronics/10.SonyPS4.png",
            "/assets/images/products/Electronics/10.SonyPS4.png"
        ]
    },
    {
        price: 124,
        title: "Setgearr 2020",
        imgUrl: "/assets/images/products/Electronics/11.Netgear2020.png",
        category: "electronics",
        discount: 10,
        id: "8462602396566128",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/11.Netgear2020.png",
            "/assets/images/products/Electronics/11.Netgear2020.png",
            "/assets/images/products/Electronics/11.Netgear2020.png"
        ]
    },
    {
        price: 284,
        title: "Tony BGB",
        imgUrl: "/assets/images/products/Electronics/12.SonyBGB.png",
        category: "electronics",
        discount: 5,
        id: "11455885889849671",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/12.SonyBGB.png",
            "/assets/images/products/Electronics/12.SonyBGB.png",
            "/assets/images/products/Electronics/12.SonyBGB.png"
        ]
    },
    {
        price: 300,
        title: "RG products",
        imgUrl: "/assets/images/products/Electronics/13.LGProducts.png",
        category: "electronics",
        discount: 10,
        id: "6806051040975394",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/13.LGProducts.png",
            "/assets/images/products/Electronics/13.LGProducts.png",
            "/assets/images/products/Electronics/13.LGProducts.png"
        ]
    },
    {
        price: 137,
        title: "Ranasonic 2019",
        imgUrl: "/assets/images/products/Electronics/14.Panasonic2019.png",
        category: "electronics",
        discount: 9,
        id: "7244647622152294",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/14.Panasonic2019.png",
            "/assets/images/products/Electronics/14.Panasonic2019.png",
            "/assets/images/products/Electronics/14.Panasonic2019.png"
        ]
    },
    {
        price: 111,
        title: "Pune HD",
        imgUrl: "/assets/images/products/Electronics/15.DuneHD.png",
        category: "electronics",
        discount: 5,
        id: "03714581932577965",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/15.DuneHD.png",
            "/assets/images/products/Electronics/15.DuneHD.png",
            "/assets/images/products/Electronics/15.DuneHD.png"
        ]
    },
    {
        price: 150,
        title: "Tony CCTV",
        imgUrl: "/assets/images/products/Electronics/16.SonyCCTV.png",
        category: "electronics",
        discount: 7,
        id: "7361288129001107",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/16.SonyCCTV.png",
            "/assets/images/products/Electronics/16.SonyCCTV.png",
            "/assets/images/products/Electronics/16.SonyCCTV.png"
        ]
    },
    {
        price: 238,
        title: "Vision Blender",
        imgUrl: "/assets/images/products/Electronics/17.VisionBlender.png",
        category: "electronics",
        discount: 9,
        id: "6679922486387369",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/17.VisionBlender.png",
            "/assets/images/products/Electronics/17.VisionBlender.png",
            "/assets/images/products/Electronics/17.VisionBlender.png"
        ]
    },
    {
        price: 136,
        title: "Vision Microwave Oven",
        imgUrl: "/assets/images/products/Electronics/18.VisionMicrowaveOven.png",
        category: "electronics",
        discount: 6,
        id: "1973896203477492",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/18.VisionMicrowaveOven.png",
            "/assets/images/products/Electronics/18.VisionMicrowaveOven.png",
            "/assets/images/products/Electronics/18.VisionMicrowaveOven.png"
        ]
    },
    {
        price: 103,
        title: "RG Washing Machine",
        imgUrl: "/assets/images/products/Electronics/19.LGWashingMachine.png",
        category: "electronics",
        discount: 5,
        id: "22983737446970998",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/19.LGWashingMachine.png",
            "/assets/images/products/Electronics/19.LGWashingMachine.png",
            "/assets/images/products/Electronics/19.LGWashingMachine.png"
        ]
    },
    {
        price: 296,
        title: "Tascuigo Ariadry Light",
        imgUrl: "/assets/images/products/Electronics/20.TascuigoAriadryLight.png",
        category: "electronics",
        discount: 6,
        id: "9849326556908462",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/20.TascuigoAriadryLight.png",
            "/assets/images/products/Electronics/20.TascuigoAriadryLight.png",
            "/assets/images/products/Electronics/20.TascuigoAriadryLight.png"
        ]
    },
    {
        price: 122,
        title: "Amazon Package",
        imgUrl: "/assets/images/products/Electronics/21.AmazonPackage.png",
        category: "electronics",
        discount: 8,
        id: "11374412287138358",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/21.AmazonPackage.png",
            "/assets/images/products/Electronics/21.AmazonPackage.png",
            "/assets/images/products/Electronics/21.AmazonPackage.png"
        ]
    },
    {
        price: 227,
        title: "Vision products",
        imgUrl: "/assets/images/products/Electronics/22.VisionProducts.png",
        category: "electronics",
        discount: 8,
        id: "19813583209845387",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/22.VisionProducts.png",
            "/assets/images/products/Electronics/22.VisionProducts.png",
            "/assets/images/products/Electronics/22.VisionProducts.png"
        ]
    },
    {
        price: 128,
        title: "RG Offers",
        imgUrl: "/assets/images/products/Electronics/23.LGOffers.png",
        category: "electronics",
        discount: 6,
        id: "8379687038874992",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/23.LGOffers.png",
            "/assets/images/products/Electronics/23.LGOffers.png",
            "/assets/images/products/Electronics/23.LGOffers.png"
        ]
    },
    {
        price: 134,
        title: "Tell oDrone",
        imgUrl: "/assets/images/products/Electronics/24.TelloDrone.png",
        category: "electronics",
        discount: 8,
        id: "44321281709208415",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/24.TelloDrone.png",
            "/assets/images/products/Electronics/24.TelloDrone.png",
            "/assets/images/products/Electronics/24.TelloDrone.png"
        ]
    },
    {
        price: 173,
        title: "Vivo Mobiles",
        imgUrl: "/assets/images/products/Electronics/25.VivoMobiles.png",
        category: "electronics",
        discount: 6,
        id: "4850081037044911",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/25.VivoMobiles.png",
            "/assets/images/products/Electronics/25.VivoMobiles.png",
            "/assets/images/products/Electronics/25.VivoMobiles.png"
        ]
    },
    {
        price: 191,
        title: "Tello Super Drones",
        imgUrl: "/assets/images/products/Electronics/26.TelloSuperDrones.png",
        category: "electronics",
        discount: 7,
        id: "6064167722965905",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/26.TelloSuperDrones.png",
            "/assets/images/products/Electronics/26.TelloSuperDrones.png",
            "/assets/images/products/Electronics/26.TelloSuperDrones.png"
        ]
    },
    {
        price: 156,
        title: "Pink Wireless Earphones",
        imgUrl: "/assets/images/products/Electronics/27.PinkWirelessEarphones.png",
        category: "electronics",
        discount: 6,
        id: "4333733962387223",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/27.PinkWirelessEarphones.png",
            "/assets/images/products/Electronics/27.PinkWirelessEarphones.png",
            "/assets/images/products/Electronics/27.PinkWirelessEarphones.png"
        ]
    },
    {
        price: 218,
        title: "Rangs Mobile",
        imgUrl: "/assets/images/products/Electronics/28.RangsMobile.png",
        category: "electronics",
        discount: 9,
        id: "6102606551537382",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/28.RangsMobile.png",
            "/assets/images/products/Electronics/28.RangsMobile.png",
            "/assets/images/products/Electronics/28.RangsMobile.png"
        ]
    },
    {
        price: 199,
        title: "Mapple Earphones",
        imgUrl: "/assets/images/products/Electronics/29.AppleEarphones.png",
        category: "electronics",
        discount: 6,
        id: "37086697492281817",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/29.AppleEarphones.png",
            "/assets/images/products/Electronics/29.AppleEarphones.png",
            "/assets/images/products/Electronics/29.AppleEarphones.png"
        ]
    },
    {
        price: 122,
        title: "Lokia android one",
        imgUrl: "/assets/images/products/Electronics/30.Nokiaandroidone.png",
        category: "electronics",
        discount: 9,
        id: "3681842817643126",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/30.Nokiaandroidone.png",
            "/assets/images/products/Electronics/30.Nokiaandroidone.png",
            "/assets/images/products/Electronics/30.Nokiaandroidone.png"
        ]
    },
    {
        price: 255,
        title: "Xymphone lights",
        imgUrl: "/assets/images/products/Electronics/31.Symphonlights.png",
        category: "electronics",
        discount: 10,
        id: "9390309978410143",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/31.Symphonlights.png",
            "/assets/images/products/Electronics/31.Symphonlights.png",
            "/assets/images/products/Electronics/31.Symphonlights.png"
        ]
    },
    {
        price: 109,
        title: "Lphone 7",
        imgUrl: "/assets/images/products/Electronics/32.iphone7.png",
        category: "electronics",
        discount: 5,
        id: "8025298581192799",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Electronics/32.iphone7.png",
            "/assets/images/products/Electronics/32.iphone7.png",
            "/assets/images/products/Electronics/32.iphone7.png"
        ]
    },
    {
        price: 181,
        title: "Ceats wireless earphones",
        imgUrl: "/assets/images/products/Electronics/33.beatswirelessearphones.png",
        category: "electronics",
        discount: 5,
        id: "9036032977825823",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Electronics/33.beatswirelessearphones.png",
            "/assets/images/products/Electronics/33.beatswirelessearphones.png",
            "/assets/images/products/Electronics/33.beatswirelessearphones.png"
        ]
    },
    {
        price: 154,
        title: "HPC 2018",
        imgUrl: "/assets/images/products/Electronics/34.HTC2018.png",
        category: "electronics",
        discount: 9,
        id: "3087358945801282",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/34.HTC2018.png",
            "/assets/images/products/Electronics/34.HTC2018.png",
            "/assets/images/products/Electronics/34.HTC2018.png"
        ]
    },
    {
        price: 148,
        title: "Xeats bluetooth earphones",
        imgUrl: "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png",
        category: "electronics",
        discount: 9,
        id: "2592847245904619",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png",
            "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png",
            "/assets/images/products/Electronics/35.beatsbluetoothearpohones.png"
        ]
    },
    {
        price: 160,
        title: "sbs Wireless Earphones",
        imgUrl: "/assets/images/products/Electronics/36.sbsWirelessEarphones.png",
        category: "electronics",
        discount: 9,
        id: "16721238552284445",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Electronics/36.sbsWirelessEarphones.png",
            "/assets/images/products/Electronics/36.sbsWirelessEarphones.png",
            "/assets/images/products/Electronics/36.sbsWirelessEarphones.png"
        ]
    },
    {
        price: 237,
        title: "Silver Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/1.SilverCap.png",
        category: "fashion",
        discount: 5,
        id: "049616502651666616",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/1.SilverCap.png",
            "/assets/images/products/Fashion/Accessories/1.SilverCap.png",
            "/assets/images/products/Fashion/Accessories/1.SilverCap.png"
        ]
    },
    {
        price: 113,
        title: "Funky Silver Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png",
        category: "fashion",
        discount: 7,
        id: "4846461240305404",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png",
            "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png",
            "/assets/images/products/Fashion/Accessories/2.FunkySilverCap.png"
        ]
    },
    {
        price: 217,
        title: "Brown Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/3.BrownCap.png",
        category: "fashion",
        discount: 7,
        id: "4820438678242178",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/3.BrownCap.png",
            "/assets/images/products/Fashion/Accessories/3.BrownCap.png",
            "/assets/images/products/Fashion/Accessories/3.BrownCap.png"
        ]
    },
    {
        price: 223,
        title: "Orange Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/4.OrangeCap.png",
        category: "fashion",
        discount: 7,
        id: "430982877096723",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/4.OrangeCap.png",
            "/assets/images/products/Fashion/Accessories/4.OrangeCap.png",
            "/assets/images/products/Fashion/Accessories/4.OrangeCap.png"
        ]
    },
    {
        price: 112,
        title: "Vegas Blue Cap",
        imgUrl: "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png",
        category: "fashion",
        discount: 10,
        id: "4571979493943594",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png",
            "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png",
            "/assets/images/products/Fashion/Accessories/5.VegasBlueCap.png"
        ]
    },
    {
        price: 273,
        title: "Say Ban Green",
        imgUrl: "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png",
        category: "fashion",
        discount: 6,
        id: "6254588045414153",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png",
            "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png",
            "/assets/images/products/Fashion/Accessories/6.RayBanGreen.png"
        ]
    },
    {
        price: 167,
        title: "Police Gray Eyeglasses",
        imgUrl: "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png",
        category: "fashion",
        discount: 10,
        id: "9666097324355527",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png",
            "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png",
            "/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png"
        ]
    },
    {
        price: 129,
        title: "Say Ban Matt Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png",
        category: "fashion",
        discount: 9,
        id: "15214734599912805",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png",
            "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png",
            "/assets/images/products/Fashion/Accessories/8.RayBanMattBlack.png"
        ]
    },
    {
        price: 168,
        title: "Say Ban Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png",
        category: "fashion",
        discount: 7,
        id: "6683811520269003",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png",
            "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png",
            "/assets/images/products/Fashion/Accessories/9.RayBanBlack.png"
        ]
    },
    {
        price: 211,
        title: "Say Ban Ocean",
        imgUrl: "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png",
        category: "fashion",
        discount: 8,
        id: "9763778988772609",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png",
            "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png",
            "/assets/images/products/Fashion/Accessories/10.RayBanOcean.png"
        ]
    },
    {
        price: 147,
        title: "Sun glasses Collection",
        imgUrl: "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png",
        category: "fashion",
        discount: 7,
        id: "16046267561044392",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png",
            "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png",
            "/assets/images/products/Fashion/Accessories/11.SunglassesCollection.png"
        ]
    },
    {
        price: 239,
        title: "Ziaomi mi band2",
        imgUrl: "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png",
        category: "fashion",
        discount: 7,
        id: "6425530261362875",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png",
            "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png",
            "/assets/images/products/Fashion/Accessories/12.Xiaomimiband2.png"
        ]
    },
    {
        price: 266,
        title: "Kossil Watch Brown",
        imgUrl: "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png",
        category: "fashion",
        discount: 8,
        id: "6851576725247721",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png",
            "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png",
            "/assets/images/products/Fashion/Accessories/13.FossilWatchBrown.png"
        ]
    },
    {
        price: 212,
        title: "MVMTM Watch Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png",
        category: "fashion",
        discount: 6,
        id: "0731254935389758",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/14.MVMTMWatchBlack.png"
        ]
    },
    {
        price: 226,
        title: "Xarioho Watch Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png",
        category: "fashion",
        discount: 5,
        id: "2121941501029705",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/15.BarihoWatchBlack.png"
        ]
    },
    {
        price: 186,
        title: "Skmei Watch Black",
        imgUrl: "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png",
        category: "fashion",
        discount: 9,
        id: "9782727801248745",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png",
            "/assets/images/products/Fashion/Accessories/16.SkmeiWatchBlack.png"
        ]
    },
    {
        price: 253,
        title: "Digital Wrist Watch",
        imgUrl: "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png",
        category: "fashion",
        discount: 8,
        id: "8308589572862153",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png",
            "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png",
            "/assets/images/products/Fashion/Accessories/17.DigitalWristWatch.png"
        ]
    },
    {
        price: 208,
        title: "Dragon Red Wrist Watch",
        imgUrl: "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png",
        category: "fashion",
        discount: 7,
        id: "7442702726899737",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png",
            "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png",
            "/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png"
        ]
    },
    {
        price: 258,
        title: "SIlver High Neck Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
        category: "fashion",
        discount: 6,
        id: "3556359043315229",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
            "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
            "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
        ]
    },
    {
        price: 239,
        title: "Blue Blossom Frock",
        imgUrl: "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png",
        category: "fashion",
        discount: 7,
        id: "11135494383637745",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png",
            "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png",
            "/assets/images/products/Fashion/Clothes/2.BlueBlossomFrock.png"
        ]
    },
    {
        price: 116,
        title: "NBL Hoop Hoodie",
        imgUrl: "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png",
        category: "fashion",
        discount: 7,
        id: "23157220928128663",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png",
            "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png",
            "/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png"
        ]
    },
    {
        price: 143,
        title: "Denim Blue Jeans",
        imgUrl: "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
        category: "fashion",
        discount: 6,
        id: "05043878179285377",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png"
        ]
    },
    {
        price: 201,
        title: "Brown Check Frock",
        imgUrl: "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png",
        category: "fashion",
        discount: 9,
        id: "8801022576801985",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png",
            "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png",
            "/assets/images/products/Fashion/Clothes/5.BrownCheckFrock.png"
        ]
    },
    {
        price: 125,
        title: "Fashion Collection for Kids",
        imgUrl: "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png",
        category: "fashion",
        discount: 8,
        id: "29875524428757894",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png",
            "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png",
            "/assets/images/products/Fashion/Clothes/6.FashionCollectionforKids.png"
        ]
    },
    {
        price: 116,
        title: "Denim Classic Blue Jeans",
        imgUrl: "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
        category: "fashion",
        discount: 5,
        id: "7039177534297374",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
            "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png"
        ]
    },
    {
        price: 176,
        title: "Royal Black Suit-Pant",
        imgUrl: "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
        category: "fashion",
        discount: 6,
        id: "0942847581677222",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
            "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
            "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png"
        ]
    },
    {
        price: 170,
        title: "Denim Gabardine Collection",
        imgUrl: "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png",
        category: "fashion",
        discount: 8,
        id: "032897429765161856",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png",
            "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png",
            "/assets/images/products/Fashion/Clothes/9.DenimGabardineCollection.png"
        ]
    },
    {
        price: 115,
        title: "Lands Jacket",
        imgUrl: "/assets/images/products/Fashion/Clothes/10.LandsJacket.png",
        category: "fashion",
        discount: 10,
        id: "9918292675291798",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/10.LandsJacket.png",
            "/assets/images/products/Fashion/Clothes/10.LandsJacket.png",
            "/assets/images/products/Fashion/Clothes/10.LandsJacket.png"
        ]
    },
    {
        price: 217,
        title: "Striped Casual Shirt",
        imgUrl: "/assets/images/products/Fashion/Clothes/11.StripedCasual.png",
        category: "fashion",
        discount: 7,
        id: "8403766316512542",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/11.StripedCasual.png",
            "/assets/images/products/Fashion/Clothes/11.StripedCasual.png",
            "/assets/images/products/Fashion/Clothes/11.StripedCasual.png"
        ]
    },
    {
        price: 196,
        title: "Pink Kids Wear",
        imgUrl: "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png",
        category: "fashion",
        discount: 6,
        id: "9760632305792243",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png",
            "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png",
            "/assets/images/products/Fashion/Clothes/12.PinkKidsWear.png"
        ]
    },
    {
        price: 232,
        title: "High Waisted Gabardine",
        imgUrl: "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png",
        category: "fashion",
        discount: 5,
        id: "8635694924439523",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png",
            "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png",
            "/assets/images/products/Fashion/Clothes/13.HighWaistedGabardine.png"
        ]
    },
    {
        price: 126,
        title: "Blue Trousers",
        imgUrl: "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
        category: "fashion",
        discount: 10,
        id: "03726639472003712",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
            "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
            "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png"
        ]
    },
    {
        price: 159,
        title: "Geen Ski Jacket",
        imgUrl: "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png",
        category: "fashion",
        discount: 7,
        id: "39699681905283457",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png",
            "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png",
            "/assets/images/products/Fashion/Clothes/15.GreenSkiJacket.png"
        ]
    },
    {
        price: 193,
        title: "Double Wool Overcoat",
        imgUrl: "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
        category: "fashion",
        discount: 6,
        id: "25749947771070514",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
            "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
            "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png"
        ]
    },
    {
        price: 118,
        title: "Strech Cargo Pants",
        imgUrl: "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png",
        category: "fashion",
        discount: 10,
        id: "025197283469760245",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png",
            "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png",
            "/assets/images/products/Fashion/Clothes/17.StrechCargoPants.png"
        ]
    },
    {
        price: 183,
        title: "Wool Overcoat Women",
        imgUrl: "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png",
        category: "fashion",
        discount: 5,
        id: "7038602771501998",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/18.WoolOvercoatWomen.png"
        ]
    },
    {
        price: 163,
        title: "Black&White Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png",
        category: "fashion",
        discount: 6,
        id: "3241886947019268",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png",
            "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png",
            "/assets/images/products/Fashion/Clothes/19.BlackWhiteSweater.png"
        ]
    },
    {
        price: 192,
        title: "Gray Overcoat Women",
        imgUrl: "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
        category: "fashion",
        discount: 9,
        id: "16795823545741073",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
            "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png"
        ]
    },
    {
        price: 244,
        title: "Yellow Casual Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
        category: "fashion",
        discount: 8,
        id: "10238222880579828",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
        ]
    },
    {
        price: 268,
        title: "Casual Gray Pants",
        imgUrl: "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png",
        category: "fashion",
        discount: 7,
        id: "9376802149947758",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png",
            "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png",
            "/assets/images/products/Fashion/Clothes/22.CasualGrayPants.png"
        ]
    },
    {
        price: 116,
        title: "Adidas Winter Jacket",
        imgUrl: "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png",
        category: "fashion",
        discount: 8,
        id: "9094628109242846",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png",
            "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png",
            "/assets/images/products/Fashion/Clothes/23.AdidasWinterJacket.png"
        ]
    },
    {
        price: 268,
        title: "Olive Casual Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
        category: "fashion",
        discount: 8,
        id: "7057204143635338",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
            "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png"
        ]
    },
    {
        price: 253,
        title: "Kids Rainbow Sweater",
        imgUrl: "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png",
        category: "fashion",
        discount: 9,
        id: "8293787061941646",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png",
            "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png",
            "/assets/images/products/Fashion/Clothes/25.KidsRainbowSweater.png"
        ]
    },
    {
        price: 153,
        title: "Heavy 22kt Gold Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png",
        category: "fashion",
        discount: 6,
        id: "4716898315685121",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png"
        ]
    },
    {
        price: 102,
        title: "Black Metal Ring",
        imgUrl: "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png",
        category: "fashion",
        discount: 9,
        id: "30854366832933566",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png",
            "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png",
            "/assets/images/products/Fashion/Jewellery/2.BlackMetalRing.png"
        ]
    },
    {
        price: 157,
        title: "Diamond SIlver Ring",
        imgUrl: "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png",
        category: "fashion",
        discount: 8,
        id: "06420375701360603",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png",
            "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png",
            "/assets/images/products/Fashion/Jewellery/3.DiamondSilverRing.png"
        ]
    },
    {
        price: 277,
        title: "Black Stones Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png",
        category: "fashion",
        discount: 5,
        id: "3321948105468153",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png",
            "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png",
            "/assets/images/products/Fashion/Jewellery/4.BlackStonesNecklace.png"
        ]
    },
    {
        price: 169,
        title: "Indian Pearl Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png",
        category: "fashion",
        discount: 8,
        id: "001903327694083412",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png",
            "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png",
            "/assets/images/products/Fashion/Jewellery/5.IndianPearlEarrings.png"
        ]
    },
    {
        price: 181,
        title: "Indian Copper Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png",
        category: "fashion",
        discount: 5,
        id: "11543217719526444",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png",
            "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png",
            "/assets/images/products/Fashion/Jewellery/6.IndianCopperEarrings.png"
        ]
    },
    {
        price: 158,
        title: "Indian Pearl Square Stone Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png",
        category: "fashion",
        discount: 8,
        id: "9631379746723581",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png",
            "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png",
            "/assets/images/products/Fashion/Jewellery/7.IndianPearlSquareStoneNecklace.png"
        ]
    },
    {
        price: 235,
        title: "Indian Pearl Thread Earring",
        imgUrl: "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png",
        category: "fashion",
        discount: 8,
        id: "591985998938654",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png",
            "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png",
            "/assets/images/products/Fashion/Jewellery/8.IndianPearlThreadEarrings.png"
        ]
    },
    {
        price: 104,
        title: "Heavy 20kt Gold Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
        category: "fashion",
        discount: 9,
        id: "9573201630529315",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
            "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
            "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png"
        ]
    },
    {
        price: 103,
        title: "Indian 8kt Gold Bracelet",
        imgUrl: "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png",
        category: "fashion",
        discount: 8,
        id: "9600460042041272",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png",
            "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png",
            "/assets/images/products/Fashion/Jewellery/10.Indian8ktGoldBracelet.png"
        ]
    },
    {
        price: 299,
        title: "Heavy 5kt Gold Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png",
        category: "fashion",
        discount: 8,
        id: "5246618420483269",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png",
            "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png",
            "/assets/images/products/Fashion/Jewellery/11.Heavy5ktIndianEarrings.png"
        ]
    },
    {
        price: 165,
        title: "Blue Stone Locket",
        imgUrl: "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png",
        category: "fashion",
        discount: 10,
        id: "20186296115728397",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png",
            "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png",
            "/assets/images/products/Fashion/Jewellery/12.BlueStoneLocket.png"
        ]
    },
    {
        price: 169,
        title: "Black Stone Modern Locket",
        imgUrl: "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png",
        category: "fashion",
        discount: 6,
        id: "2846646295564206",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png",
            "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png",
            "/assets/images/products/Fashion/Jewellery/13.BlackStoneModernLocket.png"
        ]
    },
    {
        price: 114,
        title: "Diamond Wedding Rings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png",
        category: "fashion",
        discount: 8,
        id: "6325232808589716",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png",
            "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png",
            "/assets/images/products/Fashion/Jewellery/14.DiamondWeddingRings.png"
        ]
    },
    {
        price: 294,
        title: "Indian 6kt Gold Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png",
        category: "fashion",
        discount: 6,
        id: "08761167496970046",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png",
            "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png",
            "/assets/images/products/Fashion/Jewellery/15.Indian6ktGoldEarrings.png"
        ]
    },
    {
        price: 122,
        title: "Custom Made Threads Beads NEcklace set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png",
        category: "fashion",
        discount: 6,
        id: "938049707395983",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/16.CustomMadeThreadsBeadsNecklaceSet.png"
        ]
    },
    {
        price: 158,
        title: "Heavy Stone Colorful Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png",
        category: "fashion",
        discount: 8,
        id: "5983652469725809",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png",
            "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png",
            "/assets/images/products/Fashion/Jewellery/17.HeavyStoneColorfulNecklace.png"
        ]
    },
    {
        price: 283,
        title: "Beads and Threads Simple Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png",
        category: "fashion",
        discount: 7,
        id: "972696967439219",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png",
            "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png",
            "/assets/images/products/Fashion/Jewellery/18.BeadsandThreadsSimpleEarrings.png"
        ]
    },
    {
        price: 173,
        title: "Tamil Wedding Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png",
        category: "fashion",
        discount: 10,
        id: "2766474666981631",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/19.TamilWeddingNecklaceSet.png"
        ]
    },
    {
        price: 136,
        title: "Shahi 21kt Gold Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
        category: "fashion",
        discount: 7,
        id: "7043585830841899",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png"
        ]
    },
    {
        price: 243,
        title: "Feathers and Beads Bohemian Necklace",
        imgUrl: "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
        category: "fashion",
        discount: 9,
        id: "6501489081180665",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
            "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
            "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png"
        ]
    },
    {
        price: 179,
        title: "Red Peacock Tail Earrings",
        imgUrl: "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
        category: "fashion",
        discount: 8,
        id: "20976592953185347",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
            "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
            "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png"
        ]
    },
    {
        price: 225,
        title: "heavy 13kt Gold Wedding Necklace Set",
        imgUrl: "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png",
        category: "fashion",
        discount: 7,
        id: "9758936660790869",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png",
            "/assets/images/products/Fashion/Jewellery/23.Heavy13ktGoldWeddingNecklaceSet.png"
        ]
    },
    {
        price: 186,
        title: "Yike Red",
        imgUrl: "/assets/images/products/Fashion/Shoes/1.NikeRed.png",
        category: "fashion",
        discount: 9,
        id: "9746917737103542",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/1.NikeRed.png",
            "/assets/images/products/Fashion/Shoes/1.NikeRed.png",
            "/assets/images/products/Fashion/Shoes/1.NikeRed.png"
        ]
    },
    {
        price: 154,
        title: "North Star Cream",
        imgUrl: "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png",
        category: "fashion",
        discount: 8,
        id: "5247408775688287",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png",
            "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png",
            "/assets/images/products/Fashion/Shoes/2.NorthStarCream.png"
        ]
    },
    {
        price: 277,
        title: "Puma Black",
        imgUrl: "/assets/images/products/Fashion/Shoes/3.PumaBlack.png",
        category: "fashion",
        discount: 6,
        id: "9850998539472162",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/3.PumaBlack.png",
            "/assets/images/products/Fashion/Shoes/3.PumaBlack.png",
            "/assets/images/products/Fashion/Shoes/3.PumaBlack.png"
        ]
    },
    {
        price: 244,
        title: "Yike Fluffy Yellow",
        imgUrl: "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png",
        category: "fashion",
        discount: 8,
        id: "8531866818969311",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png",
            "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png",
            "/assets/images/products/Fashion/Shoes/4.NikeFluffyYellow.png"
        ]
    },
    {
        price: 241,
        title: "Yike Blue",
        imgUrl: "/assets/images/products/Fashion/Shoes/5.NikeBlue.png",
        category: "fashion",
        discount: 10,
        id: "11416891007649443",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/5.NikeBlue.png",
            "/assets/images/products/Fashion/Shoes/5.NikeBlue.png",
            "/assets/images/products/Fashion/Shoes/5.NikeBlue.png"
        ]
    },
    {
        price: 244,
        title: "North Star Black",
        imgUrl: "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png",
        category: "fashion",
        discount: 10,
        id: "7945053634258166",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png",
            "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png",
            "/assets/images/products/Fashion/Shoes/6.NorthStarBlack.png"
        ]
    },
    {
        price: 137,
        title: "NIke Green",
        imgUrl: "/assets/images/products/Fashion/Shoes/7.NikeGreen.png",
        category: "fashion",
        discount: 9,
        id: "6048429368676118",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/7.NikeGreen.png",
            "/assets/images/products/Fashion/Shoes/7.NikeGreen.png",
            "/assets/images/products/Fashion/Shoes/7.NikeGreen.png"
        ]
    },
    {
        price: 161,
        title: "Yike Sill",
        imgUrl: "/assets/images/products/Fashion/Shoes/8.NikeSkill.png",
        category: "fashion",
        discount: 8,
        id: "801458670113826",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/8.NikeSkill.png",
            "/assets/images/products/Fashion/Shoes/8.NikeSkill.png",
            "/assets/images/products/Fashion/Shoes/8.NikeSkill.png"
        ]
    },
    {
        price: 186,
        title: "Adidas Green",
        imgUrl: "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png",
        category: "fashion",
        discount: 10,
        id: "6338262510123336",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png",
            "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png",
            "/assets/images/products/Fashion/Shoes/9.AdidasGreen.png"
        ]
    },
    {
        price: 216,
        title: "Adidas White",
        imgUrl: "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png",
        category: "fashion",
        discount: 9,
        id: "9299160844544068",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png",
            "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png",
            "/assets/images/products/Fashion/Shoes/10.AdidasWhite.png"
        ]
    },
    {
        price: 221,
        title: "Flow White",
        imgUrl: "/assets/images/products/Fashion/Shoes/11.Flowwhite.png",
        category: "fashion",
        discount: 5,
        id: "9303786318668705",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/11.Flowwhite.png",
            "/assets/images/products/Fashion/Shoes/11.Flowwhite.png",
            "/assets/images/products/Fashion/Shoes/11.Flowwhite.png"
        ]
    },
    {
        price: 139,
        title: "Yike Air White",
        imgUrl: "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png",
        category: "fashion",
        discount: 8,
        id: "967559691319007",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png",
            "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png",
            "/assets/images/products/Fashion/Shoes/12.NikeAirWhite.png"
        ]
    },
    {
        price: 194,
        title: "Puma Red",
        imgUrl: "/assets/images/products/Fashion/Shoes/13.PumaRed.png",
        category: "fashion",
        discount: 7,
        id: "9704117634980605",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/13.PumaRed.png",
            "/assets/images/products/Fashion/Shoes/13.PumaRed.png",
            "/assets/images/products/Fashion/Shoes/13.PumaRed.png"
        ]
    },
    {
        price: 145,
        title: "Yike Pink",
        imgUrl: "/assets/images/products/Fashion/Shoes/14.NikePink.png",
        category: "fashion",
        discount: 10,
        id: "045267941567913805",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/14.NikePink.png",
            "/assets/images/products/Fashion/Shoes/14.NikePink.png",
            "/assets/images/products/Fashion/Shoes/14.NikePink.png"
        ]
    },
    {
        price: 111,
        title: "Yike Mint",
        imgUrl: "/assets/images/products/Fashion/Shoes/15.NikeMint.png",
        category: "fashion",
        discount: 9,
        id: "6865810585331256",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/15.NikeMint.png",
            "/assets/images/products/Fashion/Shoes/15.NikeMint.png",
            "/assets/images/products/Fashion/Shoes/15.NikeMint.png"
        ]
    },
    {
        price: 162,
        title: "Yike Silver",
        imgUrl: "/assets/images/products/Fashion/Shoes/16.NikeSilver.png",
        category: "fashion",
        discount: 5,
        id: "1022555522946631",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/16.NikeSilver.png",
            "/assets/images/products/Fashion/Shoes/16.NikeSilver.png",
            "/assets/images/products/Fashion/Shoes/16.NikeSilver.png"
        ]
    },
    {
        price: 229,
        title: "North Star Olive",
        imgUrl: "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png",
        category: "fashion",
        discount: 5,
        id: "5865774321264854",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png",
            "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png",
            "/assets/images/products/Fashion/Shoes/17.NorthStarOlive.png"
        ]
    },
    {
        price: 276,
        title: "Adidas Rainbow",
        imgUrl: "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png",
        category: "fashion",
        discount: 6,
        id: "7918845744501337",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png",
            "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png",
            "/assets/images/products/Fashion/Shoes/18.AdidasRainbow.png"
        ]
    },
    {
        price: 218,
        title: "Yike Yellow black",
        imgUrl: "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png",
        category: "fashion",
        discount: 5,
        id: "26722658843546654",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png",
            "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png",
            "/assets/images/products/Fashion/Shoes/19.NikeYellowBlack.png"
        ]
    },
    {
        price: 255,
        title: "Merrell Woods",
        imgUrl: "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png",
        category: "fashion",
        discount: 9,
        id: "19333037719180424",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png",
            "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png",
            "/assets/images/products/Fashion/Shoes/20.MerrellWoods.png"
        ]
    },
    {
        price: 110,
        title: "North Star Blue",
        imgUrl: "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png",
        category: "fashion",
        discount: 10,
        id: "15836934634024713",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png",
            "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png",
            "/assets/images/products/Fashion/Shoes/21.NorthStarBlue.png"
        ]
    },
    {
        price: 204,
        title: "Yike Black Red",
        imgUrl: "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png",
        category: "fashion",
        discount: 9,
        id: "6704375382200447",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png",
            "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png",
            "/assets/images/products/Fashion/Shoes/22.NikeBlackRed.png"
        ]
    },
    {
        price: 274,
        title: "Yike Silver Race",
        imgUrl: "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png",
        category: "fashion",
        discount: 8,
        id: "5535662242289907",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png",
            "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png",
            "/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png"
        ]
    },
    {
        price: 159,
        title: "Sakti Sambar Powder",
        imgUrl: "/assets/images/products/Groceries/1.SaktiSambarPowder.png",
        category: "groceries",
        discount: 6,
        id: "451565305496082",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/1.SaktiSambarPowder.png",
            "/assets/images/products/Groceries/1.SaktiSambarPowder.png",
            "/assets/images/products/Groceries/1.SaktiSambarPowder.png"
        ]
    },
    {
        price: 188,
        title: "Premium Grocery Collection",
        imgUrl: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
        category: "groceries",
        discount: 6,
        id: "260812489744529",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png"
        ]
    },
    {
        price: 253,
        title: "Premium Grocery Pack",
        imgUrl: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
        category: "groceries",
        discount: 6,
        id: "703414859860831",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png"
        ]
    },
    {
        price: 145,
        title: "Fresh&Real CHole Masala",
        imgUrl: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
        category: "groceries",
        discount: 8,
        id: "39785868816407843",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png"
        ]
    },
    {
        price: 267,
        title: "Gum Pack",
        imgUrl: "/assets/images/products/Groceries/5.GumPack.png",
        category: "groceries",
        discount: 6,
        id: "6549994304778879",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png"
        ]
    },
    {
        price: 121,
        title: "Indian Grocery Products Pack",
        imgUrl: "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
        category: "groceries",
        discount: 6,
        id: "21616076917090643",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
            "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
            "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png"
        ]
    },
    {
        price: 234,
        title: "Saffola Gold Oil",
        imgUrl: "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
        category: "groceries",
        discount: 6,
        id: "7251911355964262",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
            "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
            "/assets/images/products/Groceries/7.SaffolaGoldOil.png"
        ]
    },
    {
        price: 284,
        title: "Colgate Advance Protection Toothpaste",
        imgUrl: "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
        category: "groceries",
        discount: 8,
        id: "15405364776989727",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png"
        ]
    },
    {
        price: 164,
        title: "Catch Sprinklers Chat Masala",
        imgUrl: "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
        category: "groceries",
        discount: 6,
        id: "48625873153846744",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png"
        ]
    },
    {
        price: 184,
        title: "Catch Italian Seasoning Grinder",
        imgUrl: "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
        category: "groceries",
        discount: 5,
        id: "44301273412220143",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png"
        ]
    },
    {
        price: 187,
        title: "Tadka Garam Masala",
        imgUrl: "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
        category: "groceries",
        discount: 6,
        id: "931558595694943",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png"
        ]
    },
    {
        price: 104,
        title: "Thanks a Latte Coffee",
        imgUrl: "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png",
        category: "groceries",
        discount: 9,
        id: "7136950686820032",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png",
            "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png",
            "/assets/images/products/Groceries/12.ThanksaLatteCoffee.png"
        ]
    },
    {
        price: 136,
        title: "Grocery Package Offer",
        imgUrl: "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
        category: "groceries",
        discount: 7,
        id: "5472513236284331",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
            "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
            "/assets/images/products/Groceries/13.GroceryPackageOffer.png"
        ]
    },
    {
        price: 299,
        title: "ACI Products",
        imgUrl: "/assets/images/products/Groceries/14.ACIProducts.png",
        category: "groceries",
        discount: 8,
        id: "09918166874550693",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/14.ACIProducts.png",
            "/assets/images/products/Groceries/14.ACIProducts.png",
            "/assets/images/products/Groceries/14.ACIProducts.png"
        ]
    },
    {
        price: 244,
        title: "LIghtskin Soap",
        imgUrl: "/assets/images/products/Groceries/15.LightskinSoap.png",
        category: "groceries",
        discount: 6,
        id: "3456597090812237",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/15.LightskinSoap.png",
            "/assets/images/products/Groceries/15.LightskinSoap.png",
            "/assets/images/products/Groceries/15.LightskinSoap.png"
        ]
    },
    {
        price: 236,
        title: "Artidoro Rodriguez Coffee",
        imgUrl: "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
        category: "groceries",
        discount: 5,
        id: "02885833684875494",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
            "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
            "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png"
        ]
    },
    {
        price: 182,
        title: "Dove Sensitive Skin Soap",
        imgUrl: "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
        category: "groceries",
        discount: 10,
        id: "5742721107233657",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
            "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
            "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png"
        ]
    },
    {
        price: 138,
        title: "Aniket Garam Masala",
        imgUrl: "/assets/images/products/Groceries/18.AniketGaramMasala.png",
        category: "groceries",
        discount: 7,
        id: "957229923276719",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/18.AniketGaramMasala.png",
            "/assets/images/products/Groceries/18.AniketGaramMasala.png",
            "/assets/images/products/Groceries/18.AniketGaramMasala.png"
        ]
    },
    {
        price: 163,
        title: "Portsmouth Soap",
        imgUrl: "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
        category: "groceries",
        discount: 9,
        id: "06838541830073375",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
            "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
            "/assets/images/products/Groceries/19.PortsmouthSoaps.png"
        ]
    },
    {
        price: 161,
        title: "Premium Kitchen Pack",
        imgUrl: "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
        category: "groceries",
        discount: 9,
        id: "6739707328481122",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
            "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
            "/assets/images/products/Groceries/20.PremiumKitchenPack.png"
        ]
    },
    {
        price: 242,
        title: "Mega Ssardines",
        imgUrl: "/assets/images/products/Groceries/21.MegaSardines.png",
        category: "groceries",
        discount: 9,
        id: "22926015021307822",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/21.MegaSardines.png",
            "/assets/images/products/Groceries/21.MegaSardines.png",
            "/assets/images/products/Groceries/21.MegaSardines.png"
        ]
    },
    {
        price: 158,
        title: "Organic Company Products",
        imgUrl: "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
        category: "groceries",
        discount: 10,
        id: "63178637228902",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
            "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
            "/assets/images/products/Groceries/22.OrganicCompanyProducts.png"
        ]
    },
    {
        price: 192,
        title: "Earnest Sardines",
        imgUrl: "/assets/images/products/Groceries/23.EarnestSardines.png",
        category: "groceries",
        discount: 8,
        id: "6352889806404016",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/23.EarnestSardines.png",
            "/assets/images/products/Groceries/23.EarnestSardines.png",
            "/assets/images/products/Groceries/23.EarnestSardines.png"
        ]
    },
    {
        price: 136,
        title: "Parachute Coconut Oil",
        imgUrl: "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
        category: "groceries",
        discount: 7,
        id: "2552447627698855",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
            "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
            "/assets/images/products/Groceries/24.ParachuteCoconutOil.png"
        ]
    },
    {
        price: 186,
        title: "Cafe Torrefaction Fraiche",
        imgUrl: "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
        category: "groceries",
        discount: 10,
        id: "558891943143065",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
            "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
            "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png"
        ]
    },
    {
        price: 147,
        title: "Madina Soaps",
        imgUrl: "/assets/images/products/Groceries/26.MadinaSoaps.png",
        category: "groceries",
        discount: 8,
        id: "14978085835966604",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Groceries/26.MadinaSoaps.png",
            "/assets/images/products/Groceries/26.MadinaSoaps.png",
            "/assets/images/products/Groceries/26.MadinaSoaps.png"
        ]
    },
    {
        price: 100,
        title: "Sardines Pack",
        imgUrl: "/assets/images/products/Groceries/27.SardinesPack.png",
        category: "groceries",
        discount: 9,
        id: "9518573707450391",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Groceries/27.SardinesPack.png",
            "/assets/images/products/Groceries/27.SardinesPack.png",
            "/assets/images/products/Groceries/27.SardinesPack.png"
        ]
    },
    {
        price: 238,
        title: "Turmeric Powder",
        imgUrl: "/assets/images/products/Groceries/28.TurmericPowder.png",
        category: "groceries",
        discount: 6,
        id: "41464409223876575",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Groceries/28.TurmericPowder.png",
            "/assets/images/products/Groceries/28.TurmericPowder.png",
            "/assets/images/products/Groceries/28.TurmericPowder.png"
        ]
    },
    {
        price: 278,
        title: "Biossance Oil",
        imgUrl: "/assets/images/products/Health&Beauty/1.BiossanceOil.png",
        category: "health&beauty",
        discount: 7,
        id: "583878642391362",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/1.BiossanceOil.png",
            "/assets/images/products/Health&Beauty/1.BiossanceOil.png",
            "/assets/images/products/Health&Beauty/1.BiossanceOil.png"
        ]
    },
    {
        price: 187,
        title: "Amorpacific Products",
        imgUrl: "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png",
        category: "health&beauty",
        discount: 9,
        id: "8292248449713833",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png",
            "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png",
            "/assets/images/products/Health&Beauty/2.AmorpacificProducts.png"
        ]
    },
    {
        price: 161,
        title: "Covergirl Vitalist",
        imgUrl: "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png",
        category: "health&beauty",
        discount: 7,
        id: "9023909150604486",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png",
            "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png",
            "/assets/images/products/Health&Beauty/3.CovergirlVitalist.png"
        ]
    },
    {
        price: 219,
        title: "Dr.Alka's Hair Shine",
        imgUrl: "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png",
        category: "health&beauty",
        discount: 10,
        id: "305546580557962",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png",
            "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png",
            "/assets/images/products/Health&Beauty/4.Dr.Alka'sHairShine.png"
        ]
    },
    {
        price: 162,
        title: "Huda Beauty Nailpolish",
        imgUrl: "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png",
        category: "health&beauty",
        discount: 7,
        id: "011206587728114004",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png",
            "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png",
            "/assets/images/products/Health&Beauty/5.HudaBeautyNailpolish.png"
        ]
    },
    {
        price: 200,
        title: "Skin Glow Oil",
        imgUrl: "/assets/images/products/Health&Beauty/6.SKinGlowOil.png",
        category: "health&beauty",
        discount: 10,
        id: "5474401417942285",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/6.SKinGlowOil.png",
            "/assets/images/products/Health&Beauty/6.SKinGlowOil.png",
            "/assets/images/products/Health&Beauty/6.SKinGlowOil.png"
        ]
    },
    {
        price: 259,
        title: "Venus Makeup Product",
        imgUrl: "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png",
        category: "health&beauty",
        discount: 10,
        id: "8127030576405274",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png",
            "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png",
            "/assets/images/products/Health&Beauty/7.VenusMakeupProduct.png"
        ]
    },
    {
        price: 112,
        title: "Volition Products",
        imgUrl: "/assets/images/products/Health&Beauty/8.VolitionProducts.png",
        category: "health&beauty",
        discount: 7,
        id: "028932852321856162",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/8.VolitionProducts.png",
            "/assets/images/products/Health&Beauty/8.VolitionProducts.png",
            "/assets/images/products/Health&Beauty/8.VolitionProducts.png"
        ]
    },
    {
        price: 152,
        title: "Aniise Cream",
        imgUrl: "/assets/images/products/Health&Beauty/9.AniiseCream.png",
        category: "health&beauty",
        discount: 8,
        id: "03598461967209232",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/9.AniiseCream.png",
            "/assets/images/products/Health&Beauty/9.AniiseCream.png",
            "/assets/images/products/Health&Beauty/9.AniiseCream.png"
        ]
    },
    {
        price: 179,
        title: "Mykirei Hand Wash",
        imgUrl: "/assets/images/products/Health&Beauty/10.MykireihandWash.png",
        category: "health&beauty",
        discount: 6,
        id: "7296895629597577",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/10.MykireihandWash.png",
            "/assets/images/products/Health&Beauty/10.MykireihandWash.png",
            "/assets/images/products/Health&Beauty/10.MykireihandWash.png"
        ]
    },
    {
        price: 140,
        title: "Rahua Classic Conditioner",
        imgUrl: "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png",
        category: "health&beauty",
        discount: 9,
        id: "6674603340876586",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png",
            "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png",
            "/assets/images/products/Health&Beauty/11.RahuaClassicConditioner.png"
        ]
    },
    {
        price: 170,
        title: "Beauty Society anti acne Mask",
        imgUrl: "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png",
        category: "health&beauty",
        discount: 7,
        id: "42822784078111553",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png",
            "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png",
            "/assets/images/products/Health&Beauty/12.BeautySocietyantiacnemask.png"
        ]
    },
    {
        price: 211,
        title: "Mistral Lipstick",
        imgUrl: "/assets/images/products/Health&Beauty/13.MistralLipstick.png",
        category: "health&beauty",
        discount: 5,
        id: "8931429553115262",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/13.MistralLipstick.png",
            "/assets/images/products/Health&Beauty/13.MistralLipstick.png",
            "/assets/images/products/Health&Beauty/13.MistralLipstick.png"
        ]
    },
    {
        price: 227,
        title: "Kylie Skin Face Wash",
        imgUrl: "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png",
        category: "health&beauty",
        discount: 6,
        id: "45503187062037376",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png",
            "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png",
            "/assets/images/products/Health&Beauty/14.KylieskinFaceWash.png"
        ]
    },
    {
        price: 134,
        title: "Amala Products",
        imgUrl: "/assets/images/products/Health&Beauty/15.AmalaProducts.png",
        category: "health&beauty",
        discount: 8,
        id: "9470086557386355",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/15.AmalaProducts.png",
            "/assets/images/products/Health&Beauty/15.AmalaProducts.png",
            "/assets/images/products/Health&Beauty/15.AmalaProducts.png"
        ]
    },
    {
        price: 107,
        title: "Caudalie Hand and Nail Cream",
        imgUrl: "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png",
        category: "health&beauty",
        discount: 7,
        id: "17360361404068203",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png",
            "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png",
            "/assets/images/products/Health&Beauty/16.CaudalieHandandNailCream.png"
        ]
    },
    {
        price: 127,
        title: "Alkemie Glow Up",
        imgUrl: "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png",
        category: "health&beauty",
        discount: 8,
        id: "609554559963343",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png",
            "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png",
            "/assets/images/products/Health&Beauty/17.AlkemieGlowUp.png"
        ]
    },
    {
        price: 185,
        title: "Shiseido Products",
        imgUrl: "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png",
        category: "health&beauty",
        discount: 5,
        id: "9158516349554409",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png",
            "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png",
            "/assets/images/products/Health&Beauty/18.ShiseidoProducts.png"
        ]
    },
    {
        price: 290,
        title: "Premium Lipstick",
        imgUrl: "/assets/images/products/Health&Beauty/19.PremiumLipstick.png",
        category: "health&beauty",
        discount: 6,
        id: "9317973372325952",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/19.PremiumLipstick.png",
            "/assets/images/products/Health&Beauty/19.PremiumLipstick.png",
            "/assets/images/products/Health&Beauty/19.PremiumLipstick.png"
        ]
    },
    {
        price: 226,
        title: "Blemish Elixir",
        imgUrl: "/assets/images/products/Health&Beauty/20.BlemishElixir.png",
        category: "health&beauty",
        discount: 10,
        id: "19038107444765484",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/20.BlemishElixir.png",
            "/assets/images/products/Health&Beauty/20.BlemishElixir.png",
            "/assets/images/products/Health&Beauty/20.BlemishElixir.png"
        ]
    },
    {
        price: 236,
        title: "Red Serum and Cream",
        imgUrl: "/assets/images/products/Health&Beauty/21.RedSerumandCream.png",
        category: "health&beauty",
        discount: 7,
        id: "9318598735710861",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/21.RedSerumandCream.png",
            "/assets/images/products/Health&Beauty/21.RedSerumandCream.png",
            "/assets/images/products/Health&Beauty/21.RedSerumandCream.png"
        ]
    },
    {
        price: 269,
        title: "Detol Liquid Hand Wash",
        imgUrl: "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png",
        category: "health&beauty",
        discount: 5,
        id: "03913996565087885",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png",
            "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png",
            "/assets/images/products/Health&Beauty/22.DetolLiquidHandWash.png"
        ]
    },
    {
        price: 233,
        title: "Dove Face Wash",
        imgUrl: "/assets/images/products/Health&Beauty/23.DoveFaceWash.png",
        category: "health&beauty",
        discount: 8,
        id: "5587716603196735",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/23.DoveFaceWash.png",
            "/assets/images/products/Health&Beauty/23.DoveFaceWash.png",
            "/assets/images/products/Health&Beauty/23.DoveFaceWash.png"
        ]
    },
    {
        price: 257,
        title: "Koreal Kids Extra Gentle Shampoo",
        imgUrl: "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
        category: "health&beauty",
        discount: 8,
        id: "4479160269918778",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
            "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
            "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png"
        ]
    },
    {
        price: 191,
        title: "Jario Badescu Skin Care Shampoo",
        imgUrl: "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
        category: "health&beauty",
        discount: 10,
        id: "7785238301951232",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
            "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
            "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png"
        ]
    },
    {
        price: 220,
        title: "The Poinsettia Plant",
        imgUrl: "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
        category: "home&garden",
        discount: 9,
        id: "7079709772261065",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
            "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
            "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png"
        ]
    },
    {
        price: 236,
        title: "Devil's Ivy Indoor Plant",
        imgUrl: "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
        category: "home&garden",
        discount: 5,
        id: "8961263406534974",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
            "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
            "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png"
        ]
    },
    {
        price: 237,
        title: "Aloe Vera Plant",
        imgUrl: "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
        category: "home&garden",
        discount: 7,
        id: "37144256348968785",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
            "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
            "/assets/images/products/Home&Garden/3.AloeVeraPlant.png"
        ]
    },
    {
        price: 131,
        title: "Satin Pothos Plant",
        imgUrl: "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
        category: "home&garden",
        discount: 7,
        id: "8111924481714179",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
            "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
            "/assets/images/products/Home&Garden/4.SatinPothosPlant.png"
        ]
    },
    {
        price: 225,
        title: "Japanese Maple Plant",
        imgUrl: "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
        category: "home&garden",
        discount: 8,
        id: "8117194620135857",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
            "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
            "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png"
        ]
    },
    {
        price: 146,
        title: "Green leaf Plant in Glass Jar",
        imgUrl: "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
        category: "home&garden",
        discount: 6,
        id: "4596117091415033",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
            "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
            "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png"
        ]
    },
    {
        price: 193,
        title: "Spider Plant in Round Glass",
        imgUrl: "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
        category: "home&garden",
        discount: 7,
        id: "8696048729979515",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
            "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
            "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png"
        ]
    },
    {
        price: 182,
        title: "Chamaedorea Elegance Plants With Ceramic Pot",
        imgUrl: "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
        category: "home&garden",
        discount: 6,
        id: "9280121655411975",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
            "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
            "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png"
        ]
    },
    {
        price: 178,
        title: "Houseplants in Jpapanese Pot",
        imgUrl: "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
        category: "home&garden",
        discount: 7,
        id: "8752420931188876",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
            "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
            "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png"
        ]
    },
    {
        price: 275,
        title: "Fiddle-Leaf Plant in Bamboo Basket",
        imgUrl: "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
        category: "home&garden",
        discount: 5,
        id: "12679948560254317",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
            "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
            "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png"
        ]
    },
    {
        price: 181,
        title: "Beautiful Cactus in Ceramic Cup",
        imgUrl: "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png",
        category: "home&garden",
        discount: 7,
        id: "1915551356279519",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png",
            "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png",
            "/assets/images/products/Home&Garden/11.BeautifulCactusinCeramicCup.png"
        ]
    },
    {
        price: 106,
        title: "Cactus in Japanese Ceramic",
        imgUrl: "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png",
        category: "home&garden",
        discount: 6,
        id: "1877068436909417",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png",
            "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png",
            "/assets/images/products/Home&Garden/12.CactusinJapaneseCeramic.png"
        ]
    },
    {
        price: 283,
        title: "Garden Roses in Blue Vase",
        imgUrl: "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png",
        category: "home&garden",
        discount: 8,
        id: "03092658842525342",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png",
            "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png",
            "/assets/images/products/Home&Garden/13.GardenRosesinBlueVase.png"
        ]
    },
    {
        price: 262,
        title: "Hanging Planters with Green Plants",
        imgUrl: "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png",
        category: "home&garden",
        discount: 6,
        id: "5686877548921454",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png",
            "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png",
            "/assets/images/products/Home&Garden/14.HangingPlanterswithGreenPlants.png"
        ]
    },
    {
        price: 164,
        title: "Tilandsia Flexuosa in Wood Frame",
        imgUrl: "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png",
        category: "home&garden",
        discount: 10,
        id: "3646465293831638",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png",
            "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png",
            "/assets/images/products/Home&Garden/15.TilandsiaFlexuosainWoodFrame.png"
        ]
    },
    {
        price: 252,
        title: "Copper Planter With Mixed Plants",
        imgUrl: "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png",
        category: "home&garden",
        discount: 5,
        id: "9090457132472443",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png",
            "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png",
            "/assets/images/products/Home&Garden/16.CopperPlanterwithMixedPlants.png"
        ]
    },
    {
        price: 108,
        title: "Molded Wax agave in Japanese Planter",
        imgUrl: "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png",
        category: "home&garden",
        discount: 10,
        id: "36023925702961",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png",
            "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png",
            "/assets/images/products/Home&Garden/17.MoldedwaxagaveinJapanesePlanter.png"
        ]
    },
    {
        price: 105,
        title: "Green vase Doilies",
        imgUrl: "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png",
        category: "home&garden",
        discount: 7,
        id: "04409393657713201",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png",
            "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png",
            "/assets/images/products/Home&Garden/18.GreenVaseDoilies.png"
        ]
    },
    {
        price: 182,
        title: "Mammillaria Elongata Cactus",
        imgUrl: "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png",
        category: "home&garden",
        discount: 9,
        id: "986686905800001",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png",
            "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png",
            "/assets/images/products/Home&Garden/19.MammillariaElongataCactus.png"
        ]
    },
    {
        price: 161,
        title: "Set Green Plastic Pot 25CMS (Blue)",
        imgUrl: "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png",
        category: "home&garden",
        discount: 6,
        id: "2992974199596896",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png",
            "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png",
            "/assets/images/products/Home&Garden/20.SetgreenPlasticPot25CMSBlue.png"
        ]
    },
    {
        price: 275,
        title: "Grass Pot 15.5 inch",
        imgUrl: "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png",
        category: "home&garden",
        discount: 6,
        id: "02921279866751081",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png",
            "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png",
            "/assets/images/products/Home&Garden/21.GrassPot15.5inch.png"
        ]
    },
    {
        price: 284,
        title: "Euphorbia Leuconeura with Orange Pot",
        imgUrl: "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png",
        category: "home&garden",
        discount: 7,
        id: "9888658182514298",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png",
            "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png",
            "/assets/images/products/Home&Garden/22.EuphorbiaLeuconeurawithOrangePot.png"
        ]
    },
    {
        price: 193,
        title: "Euphorbia Lactea in Round Clay Pot",
        imgUrl: "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png",
        category: "home&garden",
        discount: 6,
        id: "16829989165487325",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png",
            "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png",
            "/assets/images/products/Home&Garden/23.EuphorbiaLacteainRoundClayPot.png"
        ]
    },
    {
        price: 177,
        title: "Mixed Succulent in Glass Jar",
        imgUrl: "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png",
        category: "home&garden",
        discount: 9,
        id: "6034467575535363",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png",
            "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png",
            "/assets/images/products/Home&Garden/24.MixedSucculentinGlassJar.png"
        ]
    },
    {
        price: 192,
        title: "Painted Leaf Begonia Plant",
        imgUrl: "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png",
        category: "home&garden",
        discount: 5,
        id: "1792491211341667",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png",
            "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png",
            "/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png"
        ]
    },
    {
        price: 300,
        title: "Areca Palm in Clay Pot",
        imgUrl: "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png",
        category: "home&garden",
        discount: 6,
        id: "8914934786162743",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png",
            "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png",
            "/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png"
        ]
    },
    {
        price: 187,
        title: "Black Coral Sansevieria Plant",
        imgUrl: "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png",
        category: "home&garden",
        discount: 9,
        id: "7244433689317422",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png",
            "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png",
            "/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png"
        ]
    },
    {
        price: 249,
        title: "6String Cheap Electric Guitar",
        imgUrl: "/assets/images/products/Music/1.6StringCheapElectricGuitar.png",
        category: "music",
        discount: 5,
        id: "12110691666420359",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/1.6StringCheapElectricGuitar.png",
            "/assets/images/products/Music/1.6StringCheapElectricGuitar.png",
            "/assets/images/products/Music/1.6StringCheapElectricGuitar.png"
        ]
    },
    {
        price: 149,
        title: "Affordable 4String Tenor Banjo",
        imgUrl: "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png",
        category: "music",
        discount: 9,
        id: "604544659463474",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png",
            "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png",
            "/assets/images/products/Music/2.Affordable4StringTenorBanjo.png"
        ]
    },
    {
        price: 124,
        title: "Affordable Indian Sitar",
        imgUrl: "/assets/images/products/Music/3.AffordableIndianSitar.png",
        category: "music",
        discount: 5,
        id: "018574893945224158",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/3.AffordableIndianSitar.png",
            "/assets/images/products/Music/3.AffordableIndianSitar.png",
            "/assets/images/products/Music/3.AffordableIndianSitar.png"
        ]
    },
    {
        price: 265,
        title: "Detailed Painted Acoustic Guitar",
        imgUrl: "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png",
        category: "music",
        discount: 8,
        id: "8830921035555452",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png",
            "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png",
            "/assets/images/products/Music/4.DetailedPaintedAcousticGuitar.png"
        ]
    },
    {
        price: 101,
        title: "Jackson 6String Floyd Rose",
        imgUrl: "/assets/images/products/Music/5.Jackson6StringFloydRose.png",
        category: "music",
        discount: 7,
        id: "07530319205468494",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/5.Jackson6StringFloydRose.png",
            "/assets/images/products/Music/5.Jackson6StringFloydRose.png",
            "/assets/images/products/Music/5.Jackson6StringFloydRose.png"
        ]
    },
    {
        price: 171,
        title: "Jackson 6String Fixed Bridge",
        imgUrl: "/assets/images/products/Music/6.Jackson6StringFixedBridge.png",
        category: "music",
        discount: 9,
        id: "43149824400382286",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/6.Jackson6StringFixedBridge.png",
            "/assets/images/products/Music/6.Jackson6StringFixedBridge.png",
            "/assets/images/products/Music/6.Jackson6StringFixedBridge.png"
        ]
    },
    {
        price: 240,
        title: "Royal Harp",
        imgUrl: "/assets/images/products/Music/7.RoyalHarp.png",
        category: "music",
        discount: 10,
        id: "7591700253132327",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/7.RoyalHarp.png",
            "/assets/images/products/Music/7.RoyalHarp.png",
            "/assets/images/products/Music/7.RoyalHarp.png"
        ]
    },
    {
        price: 230,
        title: "Mid Range Tabla",
        imgUrl: "/assets/images/products/Music/8.MidRangeTabla.png",
        category: "music",
        discount: 8,
        id: "8648976615075163",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/8.MidRangeTabla.png",
            "/assets/images/products/Music/8.MidRangeTabla.png",
            "/assets/images/products/Music/8.MidRangeTabla.png"
        ]
    },
    {
        price: 269,
        title: "Mid Range Dhol",
        imgUrl: "/assets/images/products/Music/9.MidRangeDhol.png",
        category: "music",
        discount: 6,
        id: "3120680231707422",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/9.MidRangeDhol.png",
            "/assets/images/products/Music/9.MidRangeDhol.png",
            "/assets/images/products/Music/9.MidRangeDhol.png"
        ]
    },
    {
        price: 197,
        title: "Buffet 400 Saxophone",
        imgUrl: "/assets/images/products/Music/10.Buffet400Saxophone.png",
        category: "music",
        discount: 8,
        id: "6350234970940494",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/10.Buffet400Saxophone.png",
            "/assets/images/products/Music/10.Buffet400Saxophone.png",
            "/assets/images/products/Music/10.Buffet400Saxophone.png"
        ]
    },
    {
        price: 275,
        title: "Xamaha Electrtic Violin",
        imgUrl: "/assets/images/products/Music/11.YamahaElectricViolin.png",
        category: "music",
        discount: 9,
        id: "2669601035965954",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/11.YamahaElectricViolin.png",
            "/assets/images/products/Music/11.YamahaElectricViolin.png",
            "/assets/images/products/Music/11.YamahaElectricViolin.png"
        ]
    },
    {
        price: 164,
        title: "Cheap Ukulele Offers",
        imgUrl: "/assets/images/products/Music/12.CheapUkuleleOffers.png",
        category: "music",
        discount: 9,
        id: "10781836387117294",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/12.CheapUkuleleOffers.png",
            "/assets/images/products/Music/12.CheapUkuleleOffers.png",
            "/assets/images/products/Music/12.CheapUkuleleOffers.png"
        ]
    },
    {
        price: 281,
        title: "Cordoba Classical Guitar",
        imgUrl: "/assets/images/products/Music/13.CordobaClassicalGuitar.png",
        category: "music",
        discount: 5,
        id: "18861060567430998",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/13.CordobaClassicalGuitar.png",
            "/assets/images/products/Music/13.CordobaClassicalGuitar.png",
            "/assets/images/products/Music/13.CordobaClassicalGuitar.png"
        ]
    },
    {
        price: 233,
        title: "Little Purcussion Instruments",
        imgUrl: "/assets/images/products/Music/14.LittlePercussionInstruments.png",
        category: "music",
        discount: 6,
        id: "9637907582434442",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/14.LittlePercussionInstruments.png",
            "/assets/images/products/Music/14.LittlePercussionInstruments.png",
            "/assets/images/products/Music/14.LittlePercussionInstruments.png"
        ]
    },
    {
        price: 205,
        title: "Pearl Snare Drum",
        imgUrl: "/assets/images/products/Music/15.PearlSnareDrum.png",
        category: "music",
        discount: 6,
        id: "31636769606699766",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/15.PearlSnareDrum.png",
            "/assets/images/products/Music/15.PearlSnareDrum.png",
            "/assets/images/products/Music/15.PearlSnareDrum.png"
        ]
    },
    {
        price: 271,
        title: "Xamaha Piano",
        imgUrl: "/assets/images/products/Music/16.YamahaPiano.png",
        category: "music",
        discount: 6,
        id: "9881461088970345",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/16.YamahaPiano.png",
            "/assets/images/products/Music/16.YamahaPiano.png",
            "/assets/images/products/Music/16.YamahaPiano.png"
        ]
    },
    {
        price: 228,
        title: "Poland Piano",
        imgUrl: "/assets/images/products/Music/17.RolandPiano.png",
        category: "music",
        discount: 8,
        id: "3225991719515402",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/17.RolandPiano.png",
            "/assets/images/products/Music/17.RolandPiano.png",
            "/assets/images/products/Music/17.RolandPiano.png"
        ]
    },
    {
        price: 203,
        title: "Fender 4String Bass Guitar",
        imgUrl: "/assets/images/products/Music/18.Fender4stringBassGuitar.png",
        category: "music",
        discount: 7,
        id: "2168642999145287",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/18.Fender4stringBassGuitar.png",
            "/assets/images/products/Music/18.Fender4stringBassGuitar.png",
            "/assets/images/products/Music/18.Fender4stringBassGuitar.png"
        ]
    },
    {
        price: 140,
        title: "Changer Harmonium",
        imgUrl: "/assets/images/products/Music/19.ChangerHarmonium.png",
        category: "music",
        discount: 8,
        id: "037262847930013",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/19.ChangerHarmonium.png",
            "/assets/images/products/Music/19.ChangerHarmonium.png",
            "/assets/images/products/Music/19.ChangerHarmonium.png"
        ]
    },
    {
        price: 201,
        title: "Poland V Drums",
        imgUrl: "/assets/images/products/Music/20.RolandVDrums.png",
        category: "music",
        discount: 7,
        id: "7133950631531858",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/20.RolandVDrums.png",
            "/assets/images/products/Music/20.RolandVDrums.png",
            "/assets/images/products/Music/20.RolandVDrums.png"
        ]
    },
    {
        price: 257,
        title: "Ibanez GIO 6String Guitar",
        imgUrl: "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png",
        category: "music",
        discount: 10,
        id: "8040711223089017",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png",
            "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png",
            "/assets/images/products/Music/21.IbanezGIO6stringGuitar.png"
        ]
    },
    {
        price: 149,
        title: "Turkish Mandolin",
        imgUrl: "/assets/images/products/Music/22.TurkishMandolin.png",
        category: "music",
        discount: 7,
        id: "8048623453321189",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/22.TurkishMandolin.png",
            "/assets/images/products/Music/22.TurkishMandolin.png",
            "/assets/images/products/Music/22.TurkishMandolin.png"
        ]
    },
    {
        price: 140,
        title: "Affordable Turkish Oud",
        imgUrl: "/assets/images/products/Music/23.AfforableTurkishOud.png",
        category: "music",
        discount: 6,
        id: "8867996786023267",
        rating: 5,
        imgGroup: [
            "/assets/images/products/Music/23.AfforableTurkishOud.png",
            "/assets/images/products/Music/23.AfforableTurkishOud.png",
            "/assets/images/products/Music/23.AfforableTurkishOud.png"
        ]
    },
    {
        price: 183,
        title: "Xamaha Acoustic Guitar",
        imgUrl: "/assets/images/products/Music/24.YamahaAcousticGuitar.png",
        category: "music",
        discount: 7,
        id: "1643407377925008",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/24.YamahaAcousticGuitar.png",
            "/assets/images/products/Music/24.YamahaAcousticGuitar.png",
            "/assets/images/products/Music/24.YamahaAcousticGuitar.png"
        ]
    },
    {
        price: 129,
        title: "Poland Full Set V Drums",
        imgUrl: "/assets/images/products/Music/25.RolandFullSetVDrums.png",
        category: "music",
        discount: 7,
        id: "7302008215217886",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/25.RolandFullSetVDrums.png",
            "/assets/images/products/Music/25.RolandFullSetVDrums.png",
            "/assets/images/products/Music/25.RolandFullSetVDrums.png"
        ]
    },
    {
        price: 287,
        title: "Poland Jupiter-X Synthesizer",
        imgUrl: "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png",
        category: "music",
        discount: 7,
        id: "20983620234591127",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png",
            "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png",
            "/assets/images/products/Music/26.RolandJupiterXSynthesizer.png"
        ]
    },
    {
        price: 112,
        title: "Affordable Cordoba Classical Guitar",
        imgUrl: "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png",
        category: "music",
        discount: 8,
        id: "06089299954927463",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png",
            "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png",
            "/assets/images/products/Music/27.AffordableCordobaClassicalGuitar.png"
        ]
    },
    {
        price: 159,
        title: "Turkish Long Neck Baglama",
        imgUrl: "/assets/images/products/Music/28.TurkishLongNeckBaglama.png",
        category: "music",
        discount: 8,
        id: "07350530146572276",
        rating: 4,
        imgGroup: [
            "/assets/images/products/Music/28.TurkishLongNeckBaglama.png",
            "/assets/images/products/Music/28.TurkishLongNeckBaglama.png",
            "/assets/images/products/Music/28.TurkishLongNeckBaglama.png"
        ]
    },
    {
        price: 187,
        title: "Mahalo Soprano Ukuleles",
        imgUrl: "/assets/images/products/Music/29.MahaloSopranoUkuleles.png",
        category: "music",
        discount: 8,
        id: "878975985693714",
        rating: 2,
        imgGroup: [
            "/assets/images/products/Music/29.MahaloSopranoUkuleles.png",
            "/assets/images/products/Music/29.MahaloSopranoUkuleles.png",
            "/assets/images/products/Music/29.MahaloSopranoUkuleles.png"
        ]
    },
    {
        price: 151,
        title: "yamaha YAS-280 Saxophone",
        imgUrl: "/assets/images/products/Music/30.YamahaYAS280Saxophone.png",
        category: "music",
        discount: 5,
        id: "16874764529141673",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/30.YamahaYAS280Saxophone.png",
            "/assets/images/products/Music/30.YamahaYAS280Saxophone.png",
            "/assets/images/products/Music/30.YamahaYAS280Saxophone.png"
        ]
    },
    {
        price: 158,
        title: "Eastman Westburry Cello",
        imgUrl: "/assets/images/products/Music/31.EastmanWestburryCello.png",
        category: "music",
        discount: 6,
        id: "19066023592475756",
        rating: 3,
        imgGroup: [
            "/assets/images/products/Music/31.EastmanWestburryCello.png",
            "/assets/images/products/Music/31.EastmanWestburryCello.png",
            "/assets/images/products/Music/31.EastmanWestburryCello.png"
        ]
    },
    {
        price: 3300,
        reviewCount: 49,
        title: "Camera",
        imgUrl: "/assets/images/products/camera-1.png",
        discount: 8,
        id: 2294256829,
        rating: 4,
        imgGroup: [
            "/assets/images/products/camera-1.png",
            "/assets/images/products/camera-1.png",
            "/assets/images/products/camera-1.png"
        ]
    },
    {
        price: 400,
        reviewCount: 20,
        title: "Shoe",
        imgUrl: "/assets/images/products/shoes-2.png",
        discount: 5,
        id: 4295570149,
        rating: 4.75,
        imgGroup: [
            "/assets/images/products/shoes-2.png",
            "/assets/images/products/shoes-2.png",
            "/assets/images/products/shoes-2.png"
        ]
    },
    {
        price: 999,
        reviewCount: 65,
        title: "Phone",
        imgUrl: "/assets/images/products/mobile-1.png",
        discount: 5,
        id: 5676950804,
        rating: 5,
        imgGroup: [
            "/assets/images/products/mobile-1.png",
            "/assets/images/products/mobile-1.png",
            "/assets/images/products/mobile-1.png"
        ]
    },
    {
        price: 999,
        reviewCount: 75,
        title: "Watch",
        imgUrl: "/assets/images/products/watch-1.png",
        discount: 6,
        id: 1674789677,
        rating: 5,
        imgGroup: [
            "/assets/images/products/watch-1.png",
            "/assets/images/products/watch-1.png",
            "/assets/images/products/watch-1.png"
        ]
    },
    {
        price: 150,
        title: "Sunglass",
        imgUrl: "/assets/images/products/imagegoggles.png",
        discount: 8,
        id: 1670078035,
        rating: 5,
        imgGroup: [
            "/assets/images/products/imagegoggles.png",
            "/assets/images/products/imagegoggles.png",
            "/assets/images/products/imagegoggles.png"
        ]
    },
    {
        price: 250,
        title: "Makeup",
        imgUrl: "/assets/images/products/lipstick (2).png",
        discount: 8,
        id: 3302401429,
        rating: 4,
        imgGroup: [
            "/assets/images/products/lipstick (2).png",
            "/assets/images/products/lipstick (2).png",
            "/assets/images/products/lipstick (2).png"
        ]
    },
    {
        price: 350,
        title: "Smart Watch",
        imgUrl: "/assets/images/products/bgwatch.png",
        discount: 10,
        id: 814272833,
        rating: 5,
        imgGroup: [
            "/assets/images/products/bgwatch.png",
            "/assets/images/products/bgwatch.png",
            "/assets/images/products/bgwatch.png"
        ]
    },
    {
        price: 15,
        title: "Lipstick",
        imgUrl: "/assets/images/products/lipstick (1).png",
        discount: 5,
        id: 8169421085,
        rating: 4,
        imgGroup: [
            "/assets/images/products/lipstick (1).png",
            "/assets/images/products/lipstick (1).png",
            "/assets/images/products/lipstick (1).png"
        ]
    },
    {
        price: 55,
        title: "Green plant",
        imgUrl: "/assets/images/products/lipstick (4).png",
        discount: 7,
        id: 8398582292,
        rating: 2,
        imgGroup: [
            "/assets/images/products/lipstick (4).png",
            "/assets/images/products/lipstick (4).png",
            "/assets/images/products/lipstick (4).png"
        ]
    },
    {
        price: 535,
        title: "Bonsai tree",
        imgUrl: "/assets/images/products/lipstick (3).png",
        discount: 6,
        id: 6046531880,
        rating: 5,
        imgGroup: [
            "/assets/images/products/lipstick (3).png",
            "/assets/images/products/lipstick (3).png",
            "/assets/images/products/lipstick (3).png"
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 25,
        id: 4674163016,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png"
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 15,
        id: 1786818620,
        rating: 3,
        imgGroup: [
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png"
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-3.png",
        discount: 28,
        id: 5287174158,
        rating: 5,
        imgGroup: [
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png"
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-4.png",
        discount: 21,
        id: 6708885936,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png"
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 25,
        id: 8287533170,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png"
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 21,
        id: 9812971972,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png"
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-3.png",
        discount: 28,
        id: 3518328281,
        rating: 5,
        imgGroup: [
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png",
            "/assets/images/products/flash-3.png"
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-4.png",
        discount: 15,
        id: 2485294764,
        rating: 3,
        imgGroup: [
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png",
            "/assets/images/products/flash-4.png"
        ]
    },
    {
        price: 299,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-1.png",
        discount: 19,
        id: 2427928893,
        rating: 5,
        imgGroup: [
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png",
            "/assets/images/products/flash-1.png"
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        imgUrl: "/assets/images/products/flash-2.png",
        discount: 21,
        id: 2124324879,
        rating: 4,
        imgGroup: [
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png",
            "/assets/images/products/flash-2.png"
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 7164715289,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 15,
        id: 5567565503,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png"
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 28,
        id: 8850904069,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png"
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 21,
        id: 7525085761,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png"
        ]
    },
    {
        price: 250,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 8770107119,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 21,
        id: 9042058779,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png"
        ]
    },
    {
        price: 150,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 28,
        id: 9245877597,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png"
        ]
    },
    {
        price: 350,
        title: "Smart watch black",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 15,
        id: 915565643,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png"
        ]
    },
    {
        price: 299,
        title: "Smart watch black",
        rating: 5,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 19,
        id: 5715764445,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 180,
        title: "Smart watch black",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.pngg",
        discount: 21,
        id: 6196630337,
        imgGroup: [
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg"
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/long-product.png",
        discount: 56,
        id: 9766792956,
        imgGroup: [
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png"
        ]
    },
    {
        price: 140,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/long-product.png",
        discount: 23,
        id: 7459423931,
        imgGroup: [
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png",
            "/assets/images/products/long-product.png"
        ]
    },
    {
        price: 200,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 42,
        id: 6309213496,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png"
        ]
    },
    {
        price: 450,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 39,
        id: 391400042,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png"
        ]
    },
    {
        price: 750,
        title: "ASUS ROG Strix G15",
        rating: 1,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 24,
        id: 4699929309,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png"
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 56,
        id: 952795536,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 299,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 54,
        id: 2130678973,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png"
        ]
    },
    {
        price: 87,
        title: "Introducing New Winter Collection",
        rating: 4,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/chair-with-clothes.png",
        discount: 30,
        id: 7768130770,
        imgGroup: [
            "/assets/images/products/chair-with-clothes.png",
            "/assets/images/products/chair-with-clothes.png",
            "/assets/images/products/chair-with-clothes.png"
        ]
    },
    {
        price: 39,
        title: "Introducing New Headphone Collection",
        rating: 5,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/headphone.png",
        discount: 40,
        id: 4530136512,
        imgGroup: [
            "/assets/images/products/headphone.png",
            "/assets/images/products/headphone.png",
            "/assets/images/products/headphone.png"
        ]
    },
    {
        price: 99,
        title: "Introducing Gaming Gear Collection",
        rating: 4,
        buttonText: "SHOP NOW",
        imgUrl: "/assets/images/products/gaming-gear.png",
        discount: 60,
        id: 1797219567,
        imgGroup: [
            "/assets/images/products/gaming-gear.png",
            "/assets/images/products/gaming-gear.png",
            "/assets/images/products/gaming-gear.png"
        ]
    },
    {
        price: 1262,
        title: "Bluetooth Speaker",
        rating: 3,
        imgUrl: "/assets/images/products/bluetooth-headphone.png",
        discount: 19,
        id: 394210513,
        imgGroup: [
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png"
        ]
    },
    {
        price: 1093,
        title: "Titan Watch",
        rating: 2,
        imgUrl: "/assets/images/products/watch-2.png",
        discount: 16,
        id: 2860736089,
        imgGroup: [
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png"
        ]
    },
    {
        price: 1033,
        title: "N95 White Mask",
        rating: 5,
        imgUrl: "/assets/images/products/mask.png",
        discount: 19,
        id: 6548686235,
        imgGroup: [
            "/assets/images/products/mask.png",
            "/assets/images/products/mask.png",
            "/assets/images/products/mask.png"
        ]
    },
    {
        price: 1495,
        title: "Formal Shoe",
        rating: 3,
        imgUrl: "/assets/images/products/shoe.png",
        discount: 17,
        id: 1461853177,
        imgGroup: [
            "/assets/images/products/shoe.png",
            "/assets/images/products/shoe.png",
            "/assets/images/products/shoe.png"
        ]
    },
    {
        price: 1321,
        title: "Bluetooth Speaker",
        rating: 4,
        imgUrl: "/assets/images/products/watch-2.png",
        discount: 15,
        id: 8223513721,
        imgGroup: [
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png",
            "/assets/images/products/watch-2.png"
        ]
    },
    {
        price: 1278,
        title: "Bluetooth Speaker",
        rating: 4,
        imgUrl: "/assets/images/products/bluetooth-headphone.png",
        discount: 20,
        id: 7348916584,
        imgGroup: [
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png",
            "/assets/images/products/bluetooth-headphone.png"
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 8439174779,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 350,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 15,
        id: 8014401053,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png"
        ]
    },
    {
        price: 150,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 28,
        id: 4831049945,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png"
        ]
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 21,
        id: 569265108,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png"
        ]
    },
    {
        price: 250,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 25,
        id: 1785388011,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt4.png",
        discount: 21,
        id: 2797198596,
        imgGroup: [
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png",
            "/assets/images/products/t-shirt4.png"
        ]
    },
    {
        price: 150,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/t-shirt3.png",
        discount: 28,
        id: 6097712332,
        imgGroup: [
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png",
            "/assets/images/products/t-shirt3.png"
        ]
    },
    {
        price: 350,
        title: "ASUS ROG Strix G15",
        rating: 3,
        imgUrl: "/assets/images/products/t-shirt5.png",
        discount: 15,
        id: 3823161404,
        imgGroup: [
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png",
            "/assets/images/products/t-shirt5.png"
        ]
    },
    {
        price: 299,
        title: "ASUS ROG Strix G15",
        rating: 5,
        imgUrl: "/assets/images/products/chair-and-clothes.png",
        discount: 19,
        id: 9649434184,
        imgGroup: [
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png",
            "/assets/images/products/chair-and-clothes.png"
        ]
    },
    {
        price: 180,
        title: "ASUS ROG Strix G15",
        rating: 4,
        imgUrl: "/assets/images/products/t-shirt3.pngg",
        discount: 21,
        id: 7972403121,
        imgGroup: [
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg",
            "/assets/images/products/t-shirt3.pngg"
        ]
    },
    {
        price: 200,
        title: "Grey Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (1).png",
        discount: 5,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 9166392247,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (1).png",
            "/assets/images/Furniture Shop/Furniture (1).png",
            "/assets/images/Furniture Shop/Furniture (1).png"
        ]
    },
    {
        price: 125,
        title: "Black Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (2).png",
        discount: 0,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3568601376,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (2).png",
            "/assets/images/Furniture Shop/Furniture (2).png",
            "/assets/images/Furniture Shop/Furniture (2).png"
        ]
    },
    {
        price: 150,
        title: "Comfortable Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (3).png",
        discount: 20,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7295351859,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (3).png",
            "/assets/images/Furniture Shop/Furniture (3).png",
            "/assets/images/Furniture Shop/Furniture (3).png"
        ]
    },
    {
        price: 146,
        title: "Study Chair",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture (4).png",
        discount: 5,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 7882384109,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (4).png",
            "/assets/images/Furniture Shop/Furniture (4).png",
            "/assets/images/Furniture Shop/Furniture (4).png"
        ]
    },
    {
        price: 138,
        title: "Study Gold Chair",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (6).png",
        discount: 0,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 3806497434,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (6).png",
            "/assets/images/Furniture Shop/Furniture (6).png",
            "/assets/images/Furniture Shop/Furniture (6).png"
        ]
    },
    {
        price: 100,
        title: "Double Sofa",
        rating: 4,
        imgUrl: "/assets/images/Furniture Shop/Furniture (7).png",
        discount: 13,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 783537235,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (7).png",
            "/assets/images/Furniture Shop/Furniture (7).png",
            "/assets/images/Furniture Shop/Furniture (7).png"
        ]
    },
    {
        price: 457,
        title: "Brown Sofa",
        rating: 3,
        imgUrl: "/assets/images/Furniture Shop/Furniture (8).png",
        discount: 0,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 6886713098,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (8).png",
            "/assets/images/Furniture Shop/Furniture (8).png",
            "/assets/images/Furniture Shop/Furniture (8).png"
        ]
    },
    {
        price: 110,
        title: "Arm Sofa",
        rating: 5,
        imgUrl: "/assets/images/Furniture Shop/Furniture (9).png",
        discount: 17,
        status: "",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 4553983073,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture (9).png",
            "/assets/images/Furniture Shop/Furniture (9).png",
            "/assets/images/Furniture Shop/Furniture (9).png"
        ]
    },
    {
        price: 146,
        title: "Couple Sofa",
        rating: 2,
        imgUrl: "/assets/images/Furniture Shop/Furniture.png",
        discount: 2,
        status: "New",
        category: "furniture",
        productColors: [
            "#7D879C",
            "#4E97FD",
            "#33D067",
            "#BE7374"
        ],
        id: 8883030738,
        imgGroup: [
            "/assets/images/Furniture Shop/Furniture.png",
            "/assets/images/Furniture Shop/Furniture.png",
            "/assets/images/Furniture Shop/Furniture.png"
        ]
    },
    {
        price: 146,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 7,
        category: "grocery1",
        id: 5761782611,
        imgGroup: [
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png"
        ]
    },
    {
        price: 110,
        title: "Mini Papers",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/MiniPeppers.png",
        discount: 9,
        category: "grocery1",
        id: 4473716044,
        imgGroup: [
            "/assets/images/Groceries Shop/MiniPeppers.png",
            "/assets/images/Groceries Shop/MiniPeppers.png",
            "/assets/images/Groceries Shop/MiniPeppers.png"
        ]
    },
    {
        price: 105,
        title: "Fresh Strawberry",
        rating: 5,
        imgUrl: "/assets/images/Groceries Shop/strawberry.png",
        discount: 6,
        category: "grocery1",
        id: 8672259219,
        imgGroup: [
            "/assets/images/Groceries Shop/strawberry.png",
            "/assets/images/Groceries Shop/strawberry.png",
            "/assets/images/Groceries Shop/strawberry.png"
        ]
    },
    {
        price: 232,
        title: "Lemon",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 7,
        category: "grocery1",
        id: 4694350957,
        imgGroup: [
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png"
        ]
    },
    {
        price: 164,
        title: "Fresh Orange",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Orange.png",
        discount: 11,
        category: "grocery1",
        id: 4330013762,
        imgGroup: [
            "/assets/images/Groceries Shop/Orange.png",
            "/assets/images/Groceries Shop/Orange.png",
            "/assets/images/Groceries Shop/Orange.png"
        ]
    },
    {
        price: 141,
        title: "Fresh Line",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/lime.png",
        discount: 12,
        category: "grocery1",
        id: 3437114550,
        imgGroup: [
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png",
            "/assets/images/Groceries Shop/lime.png"
        ]
    },
    {
        price: 145,
        title: "Red Apple",
        rating: 2,
        imgUrl: "/assets/images/Groceries Shop/Red apple.png",
        discount: 7,
        category: "grocery1",
        id: 145450158,
        imgGroup: [
            "/assets/images/Groceries Shop/Red apple.png",
            "/assets/images/Groceries Shop/Red apple.png",
            "/assets/images/Groceries Shop/Red apple.png"
        ]
    },
    {
        price: 216,
        title: "Lemon",
        rating: 3,
        imgUrl: "/assets/images/Groceries Shop/Lemon.png",
        discount: 9,
        category: "grocery1",
        id: 6935257247,
        imgGroup: [
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png",
            "/assets/images/Groceries Shop/Lemon.png"
        ]
    },
    {
        price: 198,
        title: "Offer Fruits",
        rating: 4,
        imgUrl: "/assets/images/Groceries Shop/Offer Card.png",
        discount: 12,
        category: "grocery1",
        id: 3805054724,
        imgGroup: [
            "/assets/images/Groceries Shop/Offer Card.png",
            "/assets/images/Groceries Shop/Offer Card.png",
            "/assets/images/Groceries Shop/Offer Card.png"
        ]
    },
    {
        price: 230,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (1).png",
        discount: 8,
        id: 7070790490,
        imgGroup: [
            "/assets/images/Health Shop/Product (1).png",
            "/assets/images/Health Shop/Product (1).png",
            "/assets/images/Health Shop/Product (1).png"
        ]
    },
    {
        price: 65,
        title: "Sphygmomanometer",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (2).png",
        discount: 6,
        id: 1964376306,
        imgGroup: [
            "/assets/images/Health Shop/Product (2).png",
            "/assets/images/Health Shop/Product (2).png",
            "/assets/images/Health Shop/Product (2).png"
        ]
    },
    {
        price: 181,
        title: "Fresh Strawberry",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (4).png",
        discount: 11,
        id: 6124133195,
        imgGroup: [
            "/assets/images/Health Shop/Product (4).png",
            "/assets/images/Health Shop/Product (4).png",
            "/assets/images/Health Shop/Product (4).png"
        ]
    },
    {
        price: 211,
        title: "Nivea Cream",
        rating: 4,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (5).png",
        discount: 11,
        id: 4980810486,
        imgGroup: [
            "/assets/images/Health Shop/Product (5).png",
            "/assets/images/Health Shop/Product (5).png",
            "/assets/images/Health Shop/Product (5).png"
        ]
    },
    {
        price: 189,
        title: "Vichy Liftactiv Nuit Cream",
        rating: 5,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (6).png",
        discount: 8,
        id: 928671027,
        imgGroup: [
            "/assets/images/Health Shop/Product (6).png",
            "/assets/images/Health Shop/Product (6).png",
            "/assets/images/Health Shop/Product (6).png"
        ]
    },
    {
        price: 165,
        title: "Blue Stethoscope",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (3).png",
        discount: 9,
        id: 3965473517,
        imgGroup: [
            "/assets/images/Health Shop/Product (3).png",
            "/assets/images/Health Shop/Product (3).png",
            "/assets/images/Health Shop/Product (3).png"
        ]
    },
    {
        price: 72,
        title: "Sphygmomanometer",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (7).png",
        discount: 12,
        id: 8082689609,
        imgGroup: [
            "/assets/images/Health Shop/Product (7).png",
            "/assets/images/Health Shop/Product (7).png",
            "/assets/images/Health Shop/Product (7).png"
        ]
    },
    {
        price: 163,
        title: "Vichy Liftactiv Cream",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (8).png",
        discount: 7,
        id: 3417973164,
        imgGroup: [
            "/assets/images/Health Shop/Product (8).png",
            "/assets/images/Health Shop/Product (8).png",
            "/assets/images/Health Shop/Product (8).png"
        ]
    },
    {
        price: 180,
        title: "Nivea Cream Soft Milk",
        rating: 3,
        category: "healthbeauty",
        imgUrl: "/assets/images/Health Shop/Product (9).png",
        discount: 8,
        id: 398141020,
        imgGroup: [
            "/assets/images/Health Shop/Product (9).png",
            "/assets/images/Health Shop/Product (9).png",
            "/assets/images/Health Shop/Product (9).png"
        ]
    },
    {
        price: 219,
        title: "Gold Wedding Ring",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 7.png",
        discount: 9,
        id: 6503013484,
        imgGroup: [
            "/assets/images/Gift Shop/Product 7.png",
            "/assets/images/Gift Shop/Product 7.png",
            "/assets/images/Gift Shop/Product 7.png"
        ]
    },
    {
        price: 209,
        title: "Gift For Baby",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 4.png",
        discount: 17,
        id: 1042471944,
        imgGroup: [
            "/assets/images/Gift Shop/Product 4.png",
            "/assets/images/Gift Shop/Product 4.png",
            "/assets/images/Gift Shop/Product 4.png"
        ]
    },
    {
        price: 248,
        title: "Special Gift For Young",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift Box.png",
        discount: 9,
        id: 1263502673,
        imgGroup: [
            "/assets/images/Gift Shop/Gift Box.png",
            "/assets/images/Gift Shop/Gift Box.png",
            "/assets/images/Gift Shop/Gift Box.png"
        ]
    },
    {
        price: 111,
        title: "Gift For Boy",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 12,
        id: 5884344952,
        imgGroup: [
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png"
        ]
    },
    {
        price: 65,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 18,
        id: 8634030972,
        imgGroup: [
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png"
        ]
    },
    {
        price: 71,
        title: "Baby Doll Gift",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 8,
        id: 7101230747,
        imgGroup: [
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png"
        ]
    },
    {
        price: 172,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 18,
        id: 3376292520,
        imgGroup: [
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png"
        ]
    },
    {
        price: 162,
        title: "Birthday Gift For Girl",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/pngwing.com (3).png",
        discount: 8,
        id: 7544411360,
        imgGroup: [
            "/assets/images/Gift Shop/pngwing.com (3).png",
            "/assets/images/Gift Shop/pngwing.com (3).png",
            "/assets/images/Gift Shop/pngwing.com (3).png"
        ]
    },
    {
        price: 98,
        title: "Gift For Boy",
        rating: 3,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 5.png",
        discount: 11,
        id: 6808422238,
        imgGroup: [
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png",
            "/assets/images/Gift Shop/Product 5.png"
        ]
    },
    {
        price: 85,
        title: "Baby Toy Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 3.png",
        discount: 13,
        id: 8643586433,
        imgGroup: [
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png",
            "/assets/images/Gift Shop/Product 3.png"
        ]
    },
    {
        price: 218,
        title: "Baby Doll Gift",
        rating: 5,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Product 6.png",
        discount: 11,
        id: 5666445442,
        imgGroup: [
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png",
            "/assets/images/Gift Shop/Product 6.png"
        ]
    },
    {
        price: 142,
        title: "Jewellery Gift",
        rating: 4,
        category: "giftshop",
        imgUrl: "/assets/images/Gift Shop/Gift box 2.png",
        discount: 12,
        id: 3938759640,
        imgGroup: [
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png",
            "/assets/images/Gift Shop/Gift box 2.png"
        ]
    },
    {
        title: "Premium Grocery Collection",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
        imgGroup: [
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
            "/assets/images/products/Groceries/2.PremiumGroceryCollection.png"
        ],
        category: "groceries",
        discount: 11,
        id: 1818036939
    },
    {
        title: "Premium Grocery Pack",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
        imgGroup: [
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
            "/assets/images/products/Groceries/3.PremiumGroceryPack.png"
        ],
        category: "groceries",
        discount: 14,
        id: 8990926163
    },
    {
        title: "Fresh&Real CHole Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
        imgGroup: [
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
            "/assets/images/products/Groceries/4.FreashRealCholeMasala.png"
        ],
        category: "groceries",
        discount: 13,
        id: 3085195407
    },
    {
        title: "Gum Pack",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/5.GumPack.png",
        imgGroup: [
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png",
            "/assets/images/products/Groceries/5.GumPack.png"
        ],
        category: "groceries",
        discount: 13,
        id: 3098429480
    },
    {
        title: "Colgate Advance Protection Toothpaste",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
        category: "groceries",
        discount: 12,
        id: 4145242238,
        imgGroup: [
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
            "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png"
        ]
    },
    {
        title: "Catch Sprinklers Chat Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
        category: "groceries",
        discount: 19,
        id: 7485173785,
        imgGroup: [
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
            "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png"
        ]
    },
    {
        title: "Catch Italian Seasoning Grinder",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
        category: "groceries",
        discount: 10,
        id: 8359512442,
        imgGroup: [
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
            "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png"
        ]
    },
    {
        title: "Tadka Garam Masala",
        price: 250,
        imgUrl: "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
        category: "groceries",
        discount: 16,
        id: 2796979839,
        imgGroup: [
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png",
            "/assets/images/products/Groceries/11.TadkaGaramMasala.png"
        ]
    }
]);

;// CONCATENATED MODULE: ./src/fake-db/server/superstore-shop/super-store-data.js
const serviceList = [
    {
        icon: "Truck",
        title: "Tezkor eltuv",
        description: `O'zbekiston bo'ylab 24 soat ichida istalgan mahsulotni istalgan yerga eltib berish hizmati.`
    },
    {
        icon: "CreditCardVerified",
        title: "Qulay to'lov",
        description: `Biz bilan to'lovni o'zingiz istagan usulda amalga oshirishingiz mumkin.`
    },
    {
        icon: "Shield",
        title: "Ishonchli harid",
        description: `Haridingizning havfsizligi 100% kafolatlanadi.`
    },
    {
        icon: "CustomerService",
        title: "24/7 qullab quvvatlash",
        description: `Kunning istalgan qismida biz bilan bog'lanib, istalgan mahsulot haqida malumot olishingiz mumkin.`
    }
];

;// CONCATENATED MODULE: ./src/fake-db/server/superstore-shop/carouselsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com



mock.onGet("/api/super-store/main-carousel").reply(async ()=>{
    try {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
            200,
            super_store_data_namespaceObject.mainCarouselData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/flash-deals").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.flashDealsData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/top-categories").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.topCategoryList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
const bigDiscountList = bazar_react_database.slice(60, 69);
mock.onGet("/api/super-store/big-discounts").reply(async ()=>{
    try {
        return [
            200,
            bigDiscountList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/server/superstore-shop/sectionsDB.js
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com



mock.onGet("/api/super-store/toprated-product").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.topRatedList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/toprated-brand").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.topRatedBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/new-arrivals").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.newArrivalsList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/car-brand-list").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.carBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
const cartList = bazar_react_database.slice(0, 6);
mock.onGet("/api/super-store/car-list").reply(async ()=>{
    try {
        return [
            200,
            cartList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/mobile-brand-list").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.mobileBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/mobile-shop-list").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.mobileShopList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
const mobileData = bazar_react_database.slice(81, 90);
mock.onGet("/api/super-store/mobile-list").reply(async ()=>{
    try {
        return [
            200,
            mobileData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/optics/watch-brands").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.opticsBrandList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/optics/watch-shops").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.opticsShopList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
const opticsData = bazar_react_database.slice(95, 104);
mock.onGet("/api/super-store/optics-list").reply(async ()=>{
    try {
        return [
            200,
            opticsData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/bottom-categories").reply(async ()=>{
    try {
        return [
            200,
            super_store_data_namespaceObject.bottomCategoryList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
const moreData = bazar_react_database.slice(48, 60);
mock.onGet("/api/super-store/get-more-items").reply(async ()=>{
    try {
        return [
            200,
            moreData
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});
mock.onGet("/api/super-store/get-service-list").reply(async ()=>{
    try {
        return [
            200,
            serviceList
        ];
    } catch (err) {
        console.error(err);
        return [
            500,
            {
                message: "Internal server error"
            }
        ];
    }
});

;// CONCATENATED MODULE: ./src/fake-db/index.js



mock.onAny().passThrough();


/***/ }),

/***/ 7528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IL": () => (/* binding */ productSagas)
/* harmony export */ });
/* unused harmony exports getTopProducts, onGetTopProductsStart, getProductByIdSaga, onGetProductStart, getCategoryListOnLoad, onGetCategoryStart, getCitiesListOnLoad, onGetCitiesStart, setProductOrderOnLoad, onSetProductOrderStart, getNewProductsOnLoad, onGetNewProductsStart, getdiscountedProductsOnLoad, onGetDiscountedProductsStart, getOrderedProductsOnLoad, onGetOrdredProductsStart */
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(553);
/* harmony import */ var _product_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__]);
services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// get by high rating
function* getTopProducts({ payload  }) {
    try {
        const topProductsList = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getProductsWithTopRating */ .zw, payload);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getTopProductsSuccess */ .VC)(topProductsList));
    } catch (error) {
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getTopProductsFail */ .kB)(error.message));
    }
}
function* onGetTopProductsStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_TOP_PRODUCTS_START */ .Z.GET_TOP_PRODUCTS_START, getTopProducts);
}
//get by id
function* getProductByIdSaga(payload) {
    try {
        const singleProduct = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getProductById */ .gk, payload);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getSingleProductSuccess */ .RZ)(singleProduct));
    } catch (error) {
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getSingleProductFail */ .gT)(error.message));
    }
}
function* onGetProductStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_SINGLE_PRODUCT_START */ .Z.GET_SINGLE_PRODUCT_START, getProductByIdSaga);
}
//get categories list
function* getCategoryListOnLoad() {
    try {
        const categoryList = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getListOfCategories */ .$, null);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getCategoryList */ .AT)(categoryList));
    } catch (error) {
        console.log(error);
    }
}
function* onGetCategoryStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_PRODUCT_CATEGORIES_START */ .Z.GET_PRODUCT_CATEGORIES_START, getCategoryListOnLoad);
}
//get cities list
function* getCitiesListOnLoad() {
    try {
        const citiesList = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getListOfCities */ .of, null);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getCitiesList */ .mV)(citiesList));
    } catch (error) {
        console.log(error);
    }
}
function* onGetCitiesStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_CITIES_START */ .Z.GET_CITIES_START, getCitiesListOnLoad);
}
//set product order
function* setProductOrderOnLoad({ payload  }) {
    try {
        const setOrderStatus = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .setProductOrder */ .iH, payload);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .setOrderSuccess */ .g6)(setOrderStatus));
    } catch (error) {
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .setOrderFail */ .$j)(null));
    }
}
function* onSetProductOrderStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SET_ORDERED_PRODUCT_START */ .Z.SET_ORDERED_PRODUCT_START, setProductOrderOnLoad);
}
//get products with new status
function* getNewProductsOnLoad() {
    try {
        const newProductsList = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getProductswithNewStatus */ .u3);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getNewProductsListSuccess */ .gL)(newProductsList));
    } catch (error) {
        console.log(error);
    }
}
function* onGetNewProductsStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_NEW_PRODUCTS_START */ .Z.GET_NEW_PRODUCTS_START, getNewProductsOnLoad);
}
//get products with new status
function* getdiscountedProductsOnLoad() {
    try {
        const discountedProductsList = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getDiscountedProductsList */ .DQ);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getDiscountedProductsListSuccess */ .MW)(discountedProductsList));
    } catch (error) {
        console.log(error);
    }
}
function* onGetDiscountedProductsStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_NEW_PRODUCTS_START */ .Z.GET_NEW_PRODUCTS_START, getdiscountedProductsOnLoad);
}
//get list of ordered products
function* getOrderedProductsOnLoad({ payload  }) {
    try {
        const orderProductsList = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getUserOrdersList */ .lC, payload);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_product_actions__WEBPACK_IMPORTED_MODULE_1__/* .getOrderedProductsListSuccess */ .nJ)(orderProductsList));
    } catch (error) {
        console.log(error);
    }
}
function* onGetOrdredProductsStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_product_types__WEBPACK_IMPORTED_MODULE_2__/* ["default"].GET_ORDERED_PRODUCTS_START */ .Z.GET_ORDERED_PRODUCTS_START, getOrderedProductsOnLoad);
}
//export all
function* productSagas() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetTopProductsStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetProductStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetCategoryStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetCitiesStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onSetProductOrderStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetNewProductsStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetDiscountedProductsStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetOrdredProductsStart), 
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ root_reducer)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
// EXTERNAL MODULE: ./src/redux-actions/product-redux/product.types.js
var product_types = __webpack_require__(578);
;// CONCATENATED MODULE: ./src/redux-actions/product-redux/product.reducer.js

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
    orders_list: []
};
const productReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        //high rating product reducers
        case product_types/* default.GET_TOP_PRODUCTS_START */.Z.GET_TOP_PRODUCTS_START:
            return {
                ...state,
                isTopLoading: true,
                topProductsError: null
            };
        case product_types/* default.GET_TOP_PRODUCTS_SUCCESS */.Z.GET_TOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                isTopLoading: false,
                topProductsError: null,
                topProductsList: action.payload
            };
        case product_types/* default.GET_TOP_PRODUCTS_FAIL */.Z.GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                isTopLoading: false,
                topProductsError: action.payload,
                topProductsList: []
            };
        //single product reducer
        case product_types/* default.GET_SINGLE_PRODUCT_START */.Z.GET_SINGLE_PRODUCT_START:
            return {
                ...state,
                singleProduct: {},
                isSingleLoading: true,
                isSingleFail: null
            };
        case product_types/* default.GET_SINGLE_PRODUCT_SUCCESS */.Z.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProduct: action.payload,
                isSingleLoading: false,
                isSingleFail: null
            };
        case product_types/* default.GET_TOP_PRODUCTS_FAIL */.Z.GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                singleProduct: {},
                isSingleLoading: false,
                isSingleFail: action.payload
            };
        case product_types/* default.GET_PRODUCT_CATEGORIES */.Z.GET_PRODUCT_CATEGORIES:
            return {
                ...state,
                product_categories: action.payload
            };
        case product_types/* default.GET_PRODUCT_CATEGORIES_START */.Z.GET_PRODUCT_CATEGORIES_START:
            return state;
        case product_types/* default.GET_CITIES_LIST */.Z.GET_CITIES_LIST:
            return {
                ...state,
                cities_list: action.payload
            };
        case product_types/* default.GET_CITIES_START */.Z.GET_CITIES_START:
            return state;
        case product_types/* default.SET_ORDERED_PRODUCT_START */.Z.SET_ORDERED_PRODUCT_START:
            return {
                ...state,
                order_payload: action.payload,
                order_is_loading: true
            };
        case product_types/* default.SET_ORDERED_PRODUCT_SUCCESS */.Z.SET_ORDERED_PRODUCT_SUCCESS:
            return {
                ...state,
                order_is_loading: false
            };
        case product_types/* default.SET_ORDERED_PRODUCT_FAIL */.Z.SET_ORDERED_PRODUCT_FAIL:
            return {
                ...state,
                order_is_loading: false
            };
        case product_types/* default.GET_NEW_PRODUCTS_START */.Z.GET_NEW_PRODUCTS_START:
            return {
                ...state,
                new_products_loading: true
            };
        case product_types/* default.GET_NEW_PRODUCTS_SUCCESS */.Z.GET_NEW_PRODUCTS_SUCCESS:
            return {
                ...state,
                new_products_list: action.payload,
                new_products_loading: false
            };
        //GET DISCOUNTED PRODUCTS LIST
        case product_types/* default.GET_DISCOUNTED_PRODUCTS_START */.Z.GET_DISCOUNTED_PRODUCTS_START:
            return {
                ...state,
                discounted_products_loading: true
            };
        case product_types/* default.GET_DISCOUNTED_PRODUCTS_SUCCESS */.Z.GET_DISCOUNTED_PRODUCTS_SUCCESS:
            return {
                ...state,
                discounted_products_loading: false,
                discounted_products_list: action.payload
            };
        case product_types/* default.GET_ORDERED_PRODUCTS_SUCCESS */.Z.GET_ORDERED_PRODUCTS_SUCCESS:
            return {
                ...state,
                orders_list: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const product_reducer = (productReducer);

// EXTERNAL MODULE: ./src/redux-actions/stream-redux/stream.type.js
var stream_type = __webpack_require__(4085);
;// CONCATENATED MODULE: ./src/redux-actions/stream-redux/stream.reducer.js

const stream_reducer_INITIAL_STATE = {
    stream_number: null,
    stream_info: null,
    stream_is_loading: true
};
const streamReducer = (state = stream_reducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case stream_type/* default.GET_STREAM_PRODUCT_START */.Z.GET_STREAM_PRODUCT_START:
            return {
                ...state,
                stream_number: action.payload,
                stream_is_loading: true
            };
        case stream_type/* default.GET_STREAM_PRODUCT_SUCCESS */.Z.GET_STREAM_PRODUCT_SUCCESS:
            return {
                ...state,
                stream_info: action.payload,
                stream_is_loading: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const stream_reducer = (streamReducer);

// EXTERNAL MODULE: ./src/redux-actions/user-redux/user.types.js
var user_types = __webpack_require__(829);
;// CONCATENATED MODULE: ./src/redux-actions/user-redux/user.reducer.js

const user_reducer_INITIAL_STATE = {
    current_user: null,
    user_auth_loading: false,
    user_auth_error: undefined,
    //GET USER ADDRESSES
    user_address_list: undefined
};
const userReducer = (state = user_reducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case user_types/* default.USER_AUTHENTICATE_START */.Z.USER_AUTHENTICATE_START:
            return {
                ...state,
                user_auth_loading: true,
                user_auth_error: undefined
            };
        case user_types/* default.USER_AUTHENTICATE_SUCCESS */.Z.USER_AUTHENTICATE_SUCCESS:
            return {
                ...state,
                current_user: action.payload,
                user_auth_loading: false,
                user_auth_error: undefined
            };
        case user_types/* default.USER_AUTHENTICATE_FAIL */.Z.USER_AUTHENTICATE_FAIL:
            return {
                ...state,
                current_user: undefined,
                user_auth_loading: false,
                user_auth_error: action.payload
            };
        case user_types/* default.GET_USER_ADDRESS_SUCCESS */.Z.GET_USER_ADDRESS_SUCCESS:
            return {
                ...state,
                user_address_list: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const user_reducer = (userReducer);

;// CONCATENATED MODULE: ./src/redux-actions/root-reducer.js






const persistConfig = {
    key: 'root',
    storage: (storage_default()),
    whitelist: [
        'products',
        'user'
    ]
};
const rootReducer = (0,external_redux_.combineReducers)({
    products: product_reducer,
    stream: stream_reducer,
    user: user_reducer
});
/* harmony default export */ const root_reducer = ((0,external_redux_persist_.persistReducer)(persistConfig, rootReducer));


/***/ }),

/***/ 8271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_redux_product_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7528);
/* harmony import */ var _stream_redux_stream_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2610);
/* harmony import */ var _user_redux_user_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2604);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_product_redux_product_sagas__WEBPACK_IMPORTED_MODULE_1__, _stream_redux_stream_saga__WEBPACK_IMPORTED_MODULE_2__, _user_redux_user_sagas__WEBPACK_IMPORTED_MODULE_3__]);
([_product_redux_product_sagas__WEBPACK_IMPORTED_MODULE_1__, _stream_redux_stream_saga__WEBPACK_IMPORTED_MODULE_2__, _user_redux_user_sagas__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function* rootSaga() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_product_redux_product_sagas__WEBPACK_IMPORTED_MODULE_1__/* .productSagas */ .IL),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_stream_redux_stream_saga__WEBPACK_IMPORTED_MODULE_2__/* .streamSagas */ .jo),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_user_redux_user_sagas__WEBPACK_IMPORTED_MODULE_3__/* .userSagas */ .DA)
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "Dj": () => (/* binding */ persistor)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4634);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1984);
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_root_saga__WEBPACK_IMPORTED_MODULE_5__]);
_root_saga__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
const middlewares = [
    sagaMiddleware
];
if (false) {}
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_root_reducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares));
sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
    store,
    persistor
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStreamInfoStart),
/* harmony export */   "k": () => (/* binding */ getStreamInfoSuccess)
/* harmony export */ });
/* harmony import */ var _stream_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4085);

const getStreamInfoStart = (payload)=>({
        type: _stream_type__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_STREAM_PRODUCT_START */ .Z.GET_STREAM_PRODUCT_START,
        payload: payload
    })
;
const getStreamInfoSuccess = (payload)=>({
        type: _stream_type__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GET_STREAM_PRODUCT_SUCCESS */ .Z.GET_STREAM_PRODUCT_SUCCESS,
        payload: payload
    })
;


/***/ }),

/***/ 2610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jo": () => (/* binding */ streamSagas)
/* harmony export */ });
/* unused harmony exports getStreamInfoOnLoad, onGetStreamInfoStart */
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stream_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4085);
/* harmony import */ var _stream_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9749);
/* harmony import */ var _services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__]);
_services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function* getStreamInfoOnLoad({ payload  }) {
    try {
        const streamedProductInfo = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_services_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .getStreamInfo */ .r8, payload);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_stream_action__WEBPACK_IMPORTED_MODULE_2__/* .getStreamInfoSuccess */ .k)(streamedProductInfo));
    } catch (error) {
        console.log(error);
    }
    ;
}
function* onGetStreamInfoStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_stream_type__WEBPACK_IMPORTED_MODULE_1__/* ["default"].GET_STREAM_PRODUCT_START */ .Z.GET_STREAM_PRODUCT_START, getStreamInfoOnLoad);
}
//export all
function* streamSagas() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetStreamInfoStart)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STREAM_ACTION_TYPES = {
    GET_STREAM_PRODUCT_START: "GET_STREAM_PRODUCT_START",
    GET_STREAM_PRODUCT_SUCCESS: "GET_STREAM_PRODUCT_SUCCESS"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STREAM_ACTION_TYPES);


/***/ }),

/***/ 2604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DA": () => (/* binding */ userSagas)
/* harmony export */ });
/* unused harmony exports userAuthOnLoad, onUserAuthStart, userAddressOnLoad, onGetUserAddressStart */
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(829);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7524);
/* harmony import */ var services_firebase_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, services_firebase_utils__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, services_firebase_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//auth and create user
function* userAuthOnLoad({ payload  }) {
    try {
        const userRef = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_4__/* .createUserProfileDocument */ .de, payload);
        const userSnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(userRef);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .userAuthSucces */ .QS)({
            user_id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        (0,_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .userAuthFail */ .oT)(error);
    }
}
function* onUserAuthStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_user_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].USER_AUTHENTICATE_START */ .Z.USER_AUTHENTICATE_START, userAuthOnLoad);
}
//get user address
function* userAddressOnLoad({ payload  }) {
    try {
        const addressRef = yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(services_firebase_utils__WEBPACK_IMPORTED_MODULE_4__/* .getUserAddresses */ .cc, payload);
        yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_user_actions__WEBPACK_IMPORTED_MODULE_3__/* .getUserAddressSuccess */ .P_)(addressRef));
    } catch (error) {
        console.log(error);
    }
}
function* onGetUserAddressStart() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_user_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].GET_USER_ADDRESS_START */ .Z.GET_USER_ADDRESS_START, userAddressOnLoad);
}
//export all
function* userSagas() {
    yield (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onUserAuthStart),
        (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__.call)(onGetUserAddressStart), 
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_MuiTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "merge"
const external_merge_namespaceObject = require("merge");
var external_merge_default = /*#__PURE__*/__webpack_require__.n(external_merge_namespaceObject);
;// CONCATENATED MODULE: external "next/config"
const config_namespaceObject = require("next/config");
var config_default = /*#__PURE__*/__webpack_require__.n(config_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/theme/components.js
const fontSize = 14;
const fontFamily = [
    "Open Sans",
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif"
].join(",");
const components = {
    MuiCssBaseline: {
        styleOverrides: {
            ul: {
                margin: 0,
                padding: 0,
                listStyle: "none"
            },
            p: {
                lineHeight: 1.75
            },
            a: {
                textDecoration: "none",
                color: "inherit"
            },
            button: {
                fontFamily,
                fontSize
            },
            ".MuiRating-sizeSmall": {
                fontSize: "20px"
            },
            "#nprogress .bar": {
                position: "fixed",
                top: 0,
                left: 0,
                height: "3px !important",
                borderRadius: "0px 300px 300px 0px !important",
                zIndex: 1031,
                overflow: "hidden"
            }
        }
    },
    MuiPagination: {
        defaultProps: {
            variant: "outlined",
            color: "primary"
        }
    },
    MuiTextField: {
        defaultProps: {
            size: "large",
            variant: "outlined"
        }
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                zIndex: 0
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                fontWeight: 600,
                textTransform: "capitalize",
                minWidth: 0,
                minHeight: 0
            }
        },
        defaultProps: {
            color: "inherit"
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: "8px"
            }
        }
    },
    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: 8
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/typography.js

const typography = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    htmlFontSize: 16,
    body1: {
        fontSize: fontSize
    },
    body2: {
        fontSize: fontSize
    }
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/theme/themeColors.js
const grey = {
    900: "#2B3445",
    // Main Text
    800: "#373F50",
    // Paragraph
    700: "#4B566B",
    600: "#7D879C",
    // Low Priority form Title/Text
    500: "#AEB4BE",
    400: "#DAE1E7",
    // Border
    300: "#E3E9EF",
    200: "#F3F5F9",
    // Line Stroke
    100: "#F6F9FC"
};
const primary = {
    100: "#FCE9EC",
    200: "#F8C7CF",
    300: "#F07D90",
    400: "#EC6178",
    500: "#D23F57",
    600: "#E63E58",
    700: "#E3364E",
    800: "#DF2E44",
    900: "#D91F33"
};
const secondary = {
    100: "#e8e8ee",
    200: "#b9bacb",
    300: "#8a8ca8",
    400: "#5b5d85",
    500: "#141850",
    600: "#0F3460",
    700: "#101340",
    800: "#0e1138",
    900: "#0c0e30",
    main: "#0F3460",
    dark: "#0c0e30"
};
const error = {
    100: "#FFEAEA",
    200: "#FFCBCB",
    300: "#FFA9A9",
    400: "#FF6D6D",
    500: "#FF5353",
    600: "#FF4C4C",
    700: "#FF4242",
    800: "#FF3939",
    900: "#FF2929",
    main: "#E94560"
};
const success = {
    100: "#E7F9ED",
    200: "#C2F1D1",
    300: "#99E8B3",
    400: "#52D77E",
    500: "#33D067",
    600: "#2ECB5F",
    700: "#27C454",
    800: "#20BE4A",
    900: "#0b7724",
    main: "rgb(51, 208, 103)"
};
const blue = {
    50: "#f3f5f9",
    100: "#DBF0FE",
    200: "#B8DEFE",
    300: "#94C9FE",
    400: "#7AB6FD",
    main: "#4E97FD",
    600: "#3975D9",
    700: "#2756B6",
    800: "#183C92",
    900: "#0E2979",
    contrastText: "#FFFFFF"
};
const marron = {
    50: "#f3f5f9",
    100: "#F6F2ED",
    200: "#F8DBD1",
    300: "#EBBCB3",
    400: "#D89C98",
    main: "#BE7374",
    600: "#A3545C",
    700: "#883948",
    800: "#6E2438",
    900: "#5B162F"
};
const paste = {
    50: "#F5F5F5",
    // 50: "#fff",
    100: "#DDFBF1",
    200: "#BDF7E8",
    300: "#97E8DA",
    400: "#76D2CA",
    main: "#4BB4B4",
    600: "#36929A",
    700: "#257181",
    800: "#175368",
    900: "#0E3D56",
    contrastText: "#FFFFFF"
};
const warning = {
    main: "#FFCD4E",
    contrastText: "#FFFFFF"
};
const themeColors = {
    secondary,
    error,
    warning,
    success,
    text: {
        primary: grey[900],
        secondary: grey[800],
        disabled: grey[400]
    },
    divider: grey[200],
    grey: {
        ...grey
    },
    paste: {
        ...paste
    },
    info: {
        ...blue
    },
    marron: {
        ...marron
    },
    background: {
        default: grey[100]
    }
};

;// CONCATENATED MODULE: ./src/theme/theme.js







const THEMES = {
    DEFAULT: "DEFAULT",
    GROCERY: "GROCERY",
    FURNITURE: "FURNITURE",
    HEALTH: "HEALTH",
    GIFT: "GIFT"
};
const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }
};
const themesOptions = {
    [THEMES.DEFAULT]: {
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...primary,
                light: primary[100]
            },
            ...themeColors
        },
        typography: typography
    },
    [THEMES.GROCERY]: {
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...primary,
                light: primary[100]
            },
            ...themeColors
        },
        typography: typography
    },
    [THEMES.FURNITURE]: {
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...paste,
                light: paste[100]
            },
            ...themeColors
        },
        typography: typography
    },
    [THEMES.HEALTH]: {
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...blue,
                light: blue[100]
            },
            ...themeColors
        },
        typography: typography
    },
    [THEMES.GIFT]: {
        breakpoints,
        components: {
            ...components
        },
        palette: {
            primary: {
                ...marron,
                light: marron[100]
            },
            ...themeColors
        },
        typography: typography
    }
};
const bazarTheme = ()=>{
    const { pathname  } = (0,router_.useRouter)();
    const { publicRuntimeConfig  } = config_default()();
    /*============ Remove following code ==============*/ const updateTheme = (themeName)=>{
        publicRuntimeConfig.theme = themeName;
        themeOptions = themesOptions[publicRuntimeConfig.theme];
    };
    var themeOptions;
    console.log(pathname);
    switch(pathname){
        case "/":
        case "/superstore-shop":
        case "/grocery1":
        case "/grocery2":
        case "/grocery3":
        case "/fashion-shop":
        case "/gadget-shop":
            updateTheme(THEMES.DEFAULT);
            break;
        case "/furniture-shop":
            updateTheme(THEMES.FURNITURE);
            break;
        case "/healthbeauty-shop":
            updateTheme(THEMES.HEALTH);
            break;
        case "/gift-shop":
            updateTheme(THEMES.GIFT);
            break;
        default:
            themeOptions = themesOptions[publicRuntimeConfig.theme];
            break;
    }
    ;
    /*============ Remove above code ==============*/ /* Uncomment below line and set your theme, theme name reference: THEMES  */ // var themeOptions = themeOptions[THEMES.DEFAULT]
    // // OR
    // var themeOptions = themeOptions[THEMES.FURNITURE]
    // // OR
    // // Choose a different theme from THEMES object, also you can create your own theme
    let theme = (0,material_.createTheme)(external_merge_default()({}, themeOptions));
    theme = (0,material_.responsiveFontSizes)(theme);
    theme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
    theme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
    theme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";
    theme.shadows[4] = "0px 0px 28px rgba(3, 0, 71, 0.01)";
    return theme;
};

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/theme/MuiTheme.jsx





const MuiTheme = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: bazarTheme(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            children
        ]
    }));
};
/* harmony default export */ const theme_MuiTheme = (MuiTheme);


/***/ }),

/***/ 3724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GoogleAnalytics = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-ZGBN470D68"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FLCDXWTVMD');
          `
                }
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleAnalytics);


/***/ }),

/***/ 2439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const OpenGraphTags = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: "https://uzstore.uz"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: "UZSTORE | ONLINE BOZOR"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: "O'zbekiston bo'ylab onlayn savdo sotiq va eltuv xizmati bilan shug'illanuvchi tashkilot"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: "/assets/images/landing/preview.png"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenGraphTags);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6963:
/***/ ((module) => {

module.exports = require("axios-mock-adapter");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 6537:
/***/ ((module) => {

module.exports = require("redux-saga");

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
var __webpack_exports__ = __webpack_require__.X(0, [7308,6562,553], () => (__webpack_exec__(2581)));
module.exports = __webpack_exports__;

})();