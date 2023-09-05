"use strict";
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "r": () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/store.js



// Define initial state
const initialState = {
    data: [],
    isLoading: false,
    error: null
};
// Define action types
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
// Define action creators
const fetchDataRequest = ()=>({
        type: FETCH_DATA_REQUEST
    });
const fetchDataSuccess = (data)=>({
        type: FETCH_DATA_SUCCESS,
        payload: data
    });
const fetchDataFailure = (error)=>({
        type: FETCH_DATA_FAILURE,
        payload: error
    });
// Define thunk action creator
const fetchData = ()=>{
    return async (dispatch)=>{
        dispatch(fetchDataRequest());
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/sell");
            dispatch(fetchDataSuccess(response.data.msg));
        } catch (error) {
            dispatch(fetchDataFailure(error));
        }
    };
};
// Define reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
// Create and export store
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;