exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LoadingOverlay = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "loading-overlay",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "loading-spinner",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "spinner"
                }),
                ";"
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingOverlay);


/***/ }),

/***/ 3449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LK": () => (/* binding */ sellMaterials),
/* harmony export */   "gP": () => (/* binding */ Condition),
/* harmony export */   "jp": () => (/* binding */ sellCategory),
/* harmony export */   "yy": () => (/* binding */ statesInNigeria)
/* harmony export */ });
/* unused harmony export Color */
const statesInNigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Federal Capital Territory",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara", 
];
const sellCategory = [
    "Farm Machinery & Equipment",
    "Commercial Equipment & Tools",
    "Electronics",
    "Fashion",
    "Health & Beauty",
    "Home, Furniture & Appliances",
    "Mobile Phones",
    "Property",
    "Repair & Construction",
    "Services",
    "Vehicles",
    "Other", 
];
const sellMaterials = [
    "ABS Plastic",
    "Acrylic",
    "Alloy Steel",
    "Alluminium",
    "Canvas",
    "Carbon Steel",
    "Cardboard",
    "Chrome",
    "Composite",
    "Copper",
    "Cotton",
    "Fiberglass",
    "Galvanized Steel",
    "Glass",
    "High Carbon Steel",
    "Metal",
    "Leather",
    "Nylon",
    "Steel",
    "Wood", 
];
const Color = (/* unused pure expression or super */ null && ([
    "Black",
    "Blue",
    "Brown",
    "Gold",
    "Green",
    "Grey",
    "Orange",
    "Pink",
    "Red",
    "Silver",
    "Other", 
]));
const Condition = [
    "Brand New",
    "Used",
    "Manufacturer Refurbished",
    "Seller Refurbished", 
];


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
/* harmony import */ var imagekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3386);
/* harmony import */ var imagekit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(imagekit__WEBPACK_IMPORTED_MODULE_3__);




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
function ImageUpload({ setFileUploadError , setImageUrl  }) {
    const { 0: uploading , 1: setUploading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { getRootProps , getInputProps , isFocused , isDragAccept , isDragReject  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)({
        accept: {
            "image/*": [
                ".jpeg",
                ".png"
            ]
        },
        maxFiles: 3,
        maxSize: 2097152,
        onDropRejected: (e)=>{
            let error = e[0]?.errors[0].code;
            setFileUploadError(error);
            setUploading(-1);
        },
        onDrop: (acceptedFiles)=>{
            setFiles(acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            let immediateFile = acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
            handleUploadToImageKit(immediateFile);
        }
    });
    const handleUploadToImageKit = async (files)=>{
        // // const files = event.target.files; // get uploaded files
        // let upload_image = [];
        // for (let i = 0; i < files.length; i++) {
        //   const reader = new FileReader(); // create new file reader
        //   reader.onload = () => {
        //     const base64 = reader?.result?.split(",")[1]; // extract base64 data
        //     upload_image[i] = base64;
        //     setFilesToUpload(upload_image);
        //   };
        //   reader.readAsDataURL(files[i]); // read file as data URL
        // }
        setUploading(1);
        const imagekit = new (imagekit__WEBPACK_IMPORTED_MODULE_3___default())({
            publicKey: "public_G1mBGH4ynRy46gzsggJdCguDRZA=",
            privateKey: "private_Df2/XKDIEaIDztFzQ+tAJVmKAOI=",
            urlEndpoint: "https://ik.imagekit.io/padeusnha"
        });
        const uploadPromises = [];
        for(let i = 0; i < files.length; i++){
            const file = files[i];
            const uploadPromise = imagekit.upload({
                file,
                fileName: file.name
            });
            uploadPromises.push(uploadPromise);
        }
        try {
            const responses = await Promise.all(uploadPromises);
            const uploadedImageUrls = responses.map((response)=>response.url);
            if (uploadedImageUrls.length == 0 || !uploadedImageUrls) {
                setUploading(-1);
            } else {
                setImageUrl(uploadedImageUrls);
                setUploading(2);
            }
        } catch (error) {
            setUploading(-1);
        }
    };
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
                        children: "Note: maximum of three images "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Note: image should not be more than 2mb "
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
            }),
            uploading == -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("em", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "30",
                        height: "30",
                        src: "https://img.icons8.com/sf-black-filled/64/FA5252/error.png",
                        alt: "checked--v1"
                    }),
                    " ",
                    "error; try again"
                ]
            }) : uploading == 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading-container mr-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "loader"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "uploading image, please wait"
                            })
                        ]
                    })
                ]
            }) : uploading == 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("em", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        width: "20",
                        height: "20",
                        src: "https://img.icons8.com/ios-filled/50/90EE90/checked--v1.png",
                        alt: "checked--v1"
                    }),
                    " ",
                    "uploaded ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }) : null
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