"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{8363:function(e,n){n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},5162:function(e,n,t){t.d(n,{uI:function(){return we}});var r=t(7294),o=t(5697),i=t.n(o);function a(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(n){i(n)}}function c(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function u(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function l(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=s.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"===typeof e&&null!==e}function v(e){return b(e.target.files).map((function(e){return f(e)}))}function m(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return f(e)}))]}}))}))}function g(e,n){return a(this,void 0,void 0,(function(){var t;return c(this,(function(r){switch(r.label){case 0:return e.items?(t=b(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(h))]):[3,2];case 1:return[2,y(w(r.sent()))];case 2:return[2,y(b(e.files).map((function(e){return f(e)})))]}}))}))}function y(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function b(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function h(e){if("function"!==typeof e.webkitGetAsEntry)return D(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?O(n):D(e)}function w(e){return e.reduce((function(e,n){return l(l([],u(e),!1),u(Array.isArray(n)?w(n):[n]),!1)}),[])}function D(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=f(n);return Promise.resolve(t)}function x(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,e.isDirectory?O(e):j(e)]}))}))}function O(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(n.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),t(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(x)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function j(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=f(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var A=t(8363);function E(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||C(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){if(e){if("string"===typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var R="file-invalid-type",I="file-too-large",T="file-too-small",M="too-many-files",L=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:R,message:"File type must be ".concat(n)}},_=function(e){return{code:I,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},B=function(e){return{code:T,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},K={code:M,message:"Too many files"};function U(e,n){var t="application/x-moz-file"===e.type||(0,A.Z)(e,n);return[t,t?null:L(n)]}function $(e,n,t){if(N(e.size))if(N(n)&&N(t)){if(e.size>t)return[!1,_(t)];if(e.size<n)return[!1,B(n)]}else{if(N(n)&&e.size<n)return[!1,B(n)];if(N(t)&&e.size>t)return[!1,_(t)]}return[!0,null]}function N(e){return void 0!==e&&null!==e}function W(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=P(U(e,t),1)[0],i=P($(e,r,o),1)[0],a=c?c(e):null;return n&&i&&!a}))}function G(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function H(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function q(e){e.preventDefault()}function Z(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function Y(e){return-1!==e.indexOf("Edge/")}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return Z(e)||Y(e)}function Q(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!G(e)&&n&&n.apply(void 0,[e].concat(r)),G(e)}))}}function V(){return"showOpenFilePicker"in window}function X(e){return N(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var n=P(e,2),t=n[0],r=n[1],o=!0;return re(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(oe)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,n){var t=P(n,2),r=t[0],o=t[1];return k(k({},e),{},S({},r,o))}),{})}]:e}function ee(e){if(N(e))return Object.entries(e).reduce((function(e,n){var t=P(n,2),r=t[0],o=t[1];return[].concat(E(e),[r],E(o))}),[]).filter((function(e){return re(e)||oe(e)})).join(",")}function ne(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function te(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function re(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function oe(e){return/^.*\.[\w]+$/.test(e)}var ie=["children"],ae=["open"],ce=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ue=["refKey","onChange","onClick"];function le(e){return function(e){if(Array.isArray(e))return pe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||fe(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,n){if(e){if("string"===typeof e)return pe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pe(e,n):void 0}}function pe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ve(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(Object(t),!0).forEach((function(n){me(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function me(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ge(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ye=(0,r.forwardRef)((function(e,n){var t=e.children,o=we(ge(e,ie)),i=o.open,a=ge(o,ae);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(ve(ve({},a),{},{open:i})))}));ye.displayName="Dropzone";var be={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return d(e)&&d(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return d(e)&&d(e.target)}(e)?[2,v(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,m(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ye.defaultProps=be,ye.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var he={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=ve(ve({},be),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.autoFocus,w=n.preventDropOnDocument,D=n.noClick,x=n.noKeyboard,O=n.noDrag,j=n.noDragEventsBubbling,A=n.onError,E=n.validator,F=(0,r.useMemo)((function(){return ee(t)}),[t]),k=(0,r.useMemo)((function(){return X(t)}),[t]),S=(0,r.useMemo)((function(){return"function"===typeof y?y:xe}),[y]),P=(0,r.useMemo)((function(){return"function"===typeof g?g:xe}),[g]),C=(0,r.useRef)(null),z=(0,r.useRef)(null),R=(0,r.useReducer)(De,he),I=se(R,2),T=I[0],M=I[1],L=T.isFocused,_=T.isFileDialogActive,B=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&V()),N=function(){!B.current&&_&&setTimeout((function(){z.current&&(z.current.files.length||(M({type:"closeDialog"}),P()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",N,!1),function(){window.removeEventListener("focus",N,!1)}}),[z,_,P,B]);var Z=(0,r.useRef)([]),Y=function(e){C.current&&C.current.contains(e.target)||(e.preventDefault(),Z.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",q,!1),document.addEventListener("drop",Y,!1)),function(){w&&(document.removeEventListener("dragover",q),document.removeEventListener("drop",Y))}}),[C,w]),(0,r.useEffect)((function(){return!o&&h&&C.current&&C.current.focus(),function(){}}),[C,h,o]);var re=(0,r.useCallback)((function(e){A?A(e):console.error(e)}),[A]),oe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),Z.current=[].concat(le(Z.current),[e.target]),H(e)&&Promise.resolve(i(e)).then((function(n){if(!G(e)||j){var t=n.length,r=t>0&&W({files:n,accept:F,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:E});M({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return re(e)}))}),[i,s,re,j,F,c,a,u,l,E]),ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var n=H(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,j]),ae=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var n=Z.current.filter((function(e){return C.current&&C.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),Z.current=n,n.length>0||(M({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),H(e)&&f&&f(e))}),[C,f,j]),fe=(0,r.useCallback)((function(e,n){var t=[],r=[];e.forEach((function(e){var n=se(U(e,F),2),o=n[0],i=n[1],u=se($(e,c,a),2),l=u[0],s=u[1],f=E?E(e):null;if(o&&l&&!f)t.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&t.length>1||u&&l>=1&&t.length>l)&&(t.forEach((function(e){r.push({file:e,errors:[K]})})),t.splice(0)),M({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&m&&m(r,n),t.length>0&&v&&v(t,n)}),[M,u,F,c,a,l,d,v,m,E]),pe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),Z.current=[],H(e)&&Promise.resolve(i(e)).then((function(n){G(e)&&!j||fe(n,e)})).catch((function(e){return re(e)})),M({type:"reset"})}),[i,fe,re,j]),de=(0,r.useCallback)((function(){if(B.current){M({type:"openDialog"}),S();var e={multiple:u,types:k};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){fe(e,null),M({type:"closeDialog"})})).catch((function(e){ne(e)?(P(e),M({type:"closeDialog"})):te(e)?(B.current=!1,z.current?(z.current.value=null,z.current.click()):re(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):re(e)}))}else z.current&&(M({type:"openDialog"}),S(),z.current.value=null,z.current.click())}),[M,S,P,b,fe,re,k,u]),ye=(0,r.useCallback)((function(e){C.current&&C.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),de()))}),[C,de]),we=(0,r.useCallback)((function(){M({type:"focus"})}),[]),Oe=(0,r.useCallback)((function(){M({type:"blur"})}),[]),je=(0,r.useCallback)((function(){D||(J()?setTimeout(de,0):de())}),[D,de]),Ae=function(e){return o?null:e},Ee=function(e){return x?null:Ae(e)},Fe=function(e){return O?null:Ae(e)},ke=function(e){j&&e.stopPropagation()},Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=ge(e,ce);return ve(ve(me({onKeyDown:Ee(Q(i,ye)),onFocus:Ee(Q(a,we)),onBlur:Ee(Q(c,Oe)),onClick:Ae(Q(u,je)),onDragEnter:Fe(Q(l,oe)),onDragOver:Fe(Q(s,ie)),onDragLeave:Fe(Q(f,ae)),onDrop:Fe(Q(p,pe)),role:"string"===typeof r&&""!==r?r:"presentation"},t,C),o||x?{}:{tabIndex:0}),d)}}),[C,ye,we,Oe,je,oe,ie,ae,pe,x,O,o]),Pe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ce=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onChange,o=e.onClick,i=ge(e,ue),a=me({accept:F,multiple:u,type:"file",style:{display:"none"},onChange:Ae(Q(r,pe)),onClick:Ae(Q(o,Pe)),tabIndex:-1},t,z);return ve(ve({},a),i)}}),[z,t,u,pe,o]);return ve(ve({},T),{},{isFocused:L&&!o,getRootProps:Se,getInputProps:Ce,rootRef:C,inputRef:z,open:Ae(de)})}function De(e,n){switch(n.type){case"focus":return ve(ve({},e),{},{isFocused:!0});case"blur":return ve(ve({},e),{},{isFocused:!1});case"openDialog":return ve(ve({},he),{},{isFileDialogActive:!0});case"closeDialog":return ve(ve({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return ve(ve({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return ve(ve({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return ve({},he);default:return e}}function xe(){}}}]);