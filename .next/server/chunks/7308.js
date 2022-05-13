"use strict";
exports.id = 7308;
exports.ids = [7308];
exports.modules = {

/***/ 7308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "t": () => (/* binding */ storage),
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5tVdlL0K0u7wQP3Tbe1bg4WcfkIsjoFk",
    authDomain: "uzstore.firebaseapp.com",
    databaseURL: "https://uzstore-default-rtdb.firebaseio.com",
    projectId: "uzstore",
    storageBucket: "uzstore.appspot.com",
    messagingSenderId: "519153610191",
    appId: "1:519153610191:web:b8195300ed3f596741f6ba",
    measurementId: "G-MNDT2KXZ7B"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
// enableIndexedDbPersistence(db)
// .catch((err) => {
//   if (err.code == 'failed-precondition') {
//     console.log('one browser')
//   } else if (err.code == 'unimplemented') {
//     console.log('one browser doesnto support')
//   }
// });
// Initialize Firebase
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);
auth.languageCode = 'uz';

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;