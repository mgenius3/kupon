"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FetchApiClient {
    constructor(baseURL, token = ""){
        this.baseURL = baseURL;
        this.token = token;
    }
    async get(endpoint) {
        try {
            const response = await fetch(this.baseURL + endpoint, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                }
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.msg);
            }
            const data = await response.json();
            return {
                response: data.msg,
                error: null
            };
        } catch (err) {
            return {
                response: null,
                error: err.message
            };
        }
    }
    async post(endpoint, body) {
        try {
            const response = await fetch(this.baseURL + endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.msg);
            }
            const data = await response.json();
            return {
                response: data.msg,
                error: null
            };
        } catch (err) {
            return {
                response: null,
                error: err.message
            };
        }
    }
    async delete(endpoint) {
        try {
            const response = await fetch(this.baseURL + endpoint, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                }
            });
            if (!response.ok) {
                const res = await response.json();
                throw new Error(res.msg);
            }
            const data = await response.json();
            return {
                response: data.msg,
                error: null
            };
        } catch (err) {
            return {
                response: null,
                error: err.message
            };
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchApiClient);


/***/ })

};
;