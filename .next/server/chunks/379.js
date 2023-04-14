exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

// import jwtDecode from 'jwt-decode';



const PageAuthentication = ({ children  })=>{
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            if (false) {}
        }, 0);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageAuthentication);


/***/ }),

/***/ 8060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_2__);



const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
};
const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box"
};
const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
};
const img = {
    display: "block",
    width: "auto",
    height: "100%"
};
const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
};
const focusedStyle = {
    borderColor: "#2196f3"
};
const acceptStyle = {
    borderColor: "#00e676"
};
const rejectStyle = {
    borderColor: "#ff1744"
};
function ImageUpload({ setFileUploadError , setFilesToUpload  }) {
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { getRootProps , getInputProps , isFocused , isDragAccept , isDragReject  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)({
        accept: {
            "image/*": [
                ".jpeg",
                ".png"
            ]
        },
        maxFiles: 2,
        maxSize: 512000,
        onDropRejected: (e)=>{
            var ref;
            let error = (ref = e[0]) === null || ref === void 0 ? void 0 : ref.errors[0].code;
            setFileUploadError(error);
        },
        onDrop: (acceptedFiles)=>{
            setFiles(acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            let immediateFile = acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
            convertImageToBase64(immediateFile);
        }
    });
    function convertImageToBase64(files) {
        // const files = event.target.files; // get uploaded files
        let upload_image = [];
        for(let i = 0; i < files.length; i++){
            const reader = new FileReader(); // create new file reader
            console.log("hello");
            reader.onload = ()=>{
                var ref;
                const base64 = reader === null || reader === void 0 ? void 0 : (ref = reader.result) === null || ref === void 0 ? void 0 : ref.split(",")[1]; // extract base64 data
                upload_image[i] = base64;
                setFilesToUpload(upload_image);
            };
            reader.readAsDataURL(files[i]); // read file as data URL
        }
    }
    const thumbs = files.map((file)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: thumb,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: thumbInner,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: file.preview,
                    style: img,
                    // Revoke data uri after image is loaded
                    onLoad: ()=>{
                        URL.revokeObjectURL(file.preview);
                    }
                })
            })
        }, file.name);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return ()=>files.forEach((file)=>URL.revokeObjectURL(file.preview));
    }, [
        files
    ]);
    const style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...baseStyle,
            ...isFocused ? focusedStyle : {},
            ...isDragAccept ? acceptStyle : {},
            ...isDragReject ? rejectStyle : {}
        }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...getRootProps({
                    style
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-center",
                        children: [
                            "Drag 'n' drop some package image here,",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " or click to select files"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Note: maximum of two files "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Note: image should not be more than 500kb "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "btn",
                        children: "Select"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                style: thumbsContainer,
                children: thumbs
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;