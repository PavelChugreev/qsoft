/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/style.sass":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/style.sass ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: Roboto, sans-serif;\n}\n\n.container {\n  max-width: 1440px;\n  min-width: 375px;\n  margin: 0 auto;\n}\n.container .header {\n  display: flex;\n  align-items: center;\n  padding: 12px 104px 20px 127px;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);\n}\n.container .header__logo-wrapper {\n  display: block;\n}\n.container .header__search {\n  position: relative;\n  width: 100%;\n  max-width: 763px;\n  margin: 0 60px;\n}\n.container .header__search::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 9px;\n  width: 16px;\n  height: 16px;\n  background: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 17L12.0962 12.0962M12.0962 12.0962C13.2725 10.9199 14 9.29493 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C9.29493 14 10.9199 13.2725 12.0962 12.0962Z' stroke='%23768298' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") no-repeat;\n}\n.container .header__search input {\n  height: 40px;\n  width: 100%;\n  padding: 12px 0 12px 39px;\n  border: 1px solid #EBEBF1;\n  outline: none;\n  border-radius: 5px;\n  color: #BBC4D6;\n  font-size: 14px;\n}\n.container .header__user {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n.container .header__user::after {\n  content: \"\";\n  position: absolute;\n  left: -19px;\n  width: 1px;\n  height: 83px;\n  background: #EBEBF1;\n}\n.container .header__user-name {\n  padding: 0 0 4px 0;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n  color: #768298;\n}\n.container .header__user-avatar img {\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n  margin-left: 10px;\n}\n.container .header__user_mobile {\n  display: none;\n}\n.container .partners {\n  padding: 66px 128px;\n}\n.container .partners__title {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 160%;\n  letter-spacing: -0.3px;\n  text-transform: uppercase;\n  color: #121920;\n}\n.container .partners__list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 31px -48px 0 -15px;\n}\n.container .partners__item {\n  display: flex;\n  width: 266px;\n  max-width: 266px;\n  height: 118px;\n  margin: 0 17px 30px 15px;\n  border: 1px solid #EBEBF1;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.container .partners__item img {\n  margin: auto;\n}\n.container .partners__item:hover {\n  box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);\n}\n\n@media (max-width: 1439px) {\n  .container .header {\n    padding: 20px 10%;\n  }\n  .container .partners__item {\n    flex: 1 1 18%;\n  }\n  .container .partners__item img {\n    max-width: 80%;\n  }\n}\n@media (max-width: 768px) {\n  .container .header {\n    padding: 12px 0px 12px 12px;\n  }\n  .container .header__search {\n    margin: 0 37px 2px 48px;\n  }\n  .container .header__search::before {\n    top: 10px;\n    left: 14px;\n  }\n  .container .header__user {\n    margin-left: 33px;\n  }\n  .container .header__user::after {\n    left: -20px;\n    top: -20px;\n    height: 75px;\n  }\n  .container .header__user-avatar img {\n    margin: 0 12px 0 10px;\n  }\n  .container .partners {\n    padding: 75px 12px;\n  }\n  .container .partners__title {\n    font-size: 28px;\n  }\n  .container .partners__list {\n    margin: 29px -10px 0 -10px;\n  }\n  .container .partners__item {\n    flex: 1 1 227px;\n    max-width: 227px;\n    height: 120px;\n    margin: 0 10px 18px 10px;\n  }\n  .container .partners__item:nth-child(3) img {\n    transform: scale(1.16);\n  }\n  .container .partners__item:nth-child(4) img {\n    transform: scale(1.1);\n  }\n  .container .partners__item:nth-child(5) img {\n    transform: scale(1.02);\n    margin-left: 22px;\n  }\n  .container .partners__item:nth-child(6) img {\n    transform: scale(1.16);\n  }\n  .container .partners__item:nth-child(7) img {\n    transform: scale(1.07);\n    margin-left: 22px;\n  }\n}\n@media (max-width: 767px) {\n  .container .partners__item {\n    flex: 1 1 27%;\n  }\n  .container .partners__item img {\n    max-width: 80%;\n  }\n}\n@media (max-width: 576px) {\n  .container .header {\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 9px 0 0 0;\n  }\n  .container .header__logo {\n    margin-left: 13px;\n  }\n  .container .header__search {\n    order: 2;\n    margin: 13px -8px 0 -8px;\n    width: 576px;\n  }\n  .container .header__search input {\n    border-radius: 0px;\n  }\n  .container .header__user {\n    display: none;\n  }\n  .container .header__user_mobile {\n    display: block;\n    margin: 3px 28px 0 0;\n  }\n}\n@media (max-width: 375px) {\n  .container .header__search::before {\n    left: 23px;\n  }\n  .container .header__search input {\n    padding-left: 52px;\n  }\n  .container .partners {\n    padding-top: 72px;\n  }\n  .container .partners__list {\n    margin: 30px 0 0 0;\n  }\n  .container .partners__item {\n    flex: 1 1 335px;\n    max-width: 335px;\n    height: 138px;\n    margin: 0 0 20px 0;\n  }\n  .container .partners__item:first-child img {\n    transform: scale(1.27);\n  }\n  .container .partners__item:nth-child(4) img {\n    transform: scale(1.23);\n  }\n  .container .partners__item:nth-child(5) img {\n    margin-left: auto;\n  }\n  .container .partners__item:nth-child(7) img {\n    margin-left: auto;\n  }\n}", "",{"version":3,"sources":["webpack://./sass/style.sass"],"names":[],"mappings":"AAAA;EACE,+BAAA;AACF;;AAGA;EACI,iBAAA;EACA,gBAAA;EACA,cAAA;AAAJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,4CAAA;AADR;AAGQ;EACI,cAAA;AADZ;AAGQ;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;AADZ;AAGY;EACI,WAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,ucAAA;AADhB;AAGY;EACI,YAAA;EACA,WAAA;EACA,yBAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EAGA,cAAA;EACA,eAAA;AAHhB;AAKQ;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AAHZ;AAKY;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;AAHhB;AAKQ;EACI,kBAAA;EACA,eAAA;EACA,sBAAA;EACA,cAAA;AAHZ;AAKQ;EACI,YAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;AAHZ;AAIQ;EACI,aAAA;AAFZ;AAII;EACI,mBAAA;AAFR;AAIQ;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAFZ;AAIQ;EACI,aAAA;EACA,eAAA;EACA,0BAAA;AAFZ;AAIQ;EACI,aAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,wBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;AAFZ;AAIY;EACI,YAAA;AAFhB;AAGY;EACI,oFAAA;AADhB;;AAIA;EAEQ;IACI,iBAAA;EAFV;EAIU;IACI,aAAA;EAFd;EAGc;IACI,cAAA;EADlB;AACF;AAEA;EAEQ;IACI,2BAAA;EADV;EAGU;IACI,uBAAA;EADd;EAEc;IACI,SAAA;IACA,UAAA;EAAlB;EACU;IACI,iBAAA;EACd;EAAc;IACI,WAAA;IACA,UAAA;IACA,YAAA;EAElB;EADc;IACI,qBAAA;EAGlB;EADM;IACI,kBAAA;EAGV;EADU;IACI,eAAA;EAGd;EADU;IACI,0BAAA;EAGd;EADU;IACI,eAAA;IACA,gBAAA;IACA,aAAA;IACA,wBAAA;EAGd;EAFc;IACI,sBAAA;EAIlB;EAHc;IACI,qBAAA;EAKlB;EAJc;IACI,sBAAA;IACA,iBAAA;EAMlB;EALc;IACI,sBAAA;EAOlB;EANc;IACI,sBAAA;IACA,iBAAA;EAQlB;AACF;AAPA;EAGgB;IACI,aAAA;EAOlB;EANkB;IACI,cAAA;EAQtB;AACF;AAPA;EAEQ;IACI,eAAA;IACA,8BAAA;IACA,kBAAA;EAQV;EAPU;IACI,iBAAA;EASd;EARU;IACI,QAAA;IACA,wBAAA;IACA,YAAA;EAUd;EATc;IACI,kBAAA;EAWlB;EAVU;IACI,aAAA;EAYd;EAXU;IACI,cAAA;IACA,oBAAA;EAad;AACF;AAZA;EAIgB;IACI,UAAA;EAWlB;EAVc;IACI,kBAAA;EAYlB;EAXM;IACI,iBAAA;EAaV;EAZU;IACI,kBAAA;EAcd;EAbU;IACI,eAAA;IACA,gBAAA;IACA,aAAA;IACA,kBAAA;EAed;EAdc;IACI,sBAAA;EAgBlB;EAfc;IACI,sBAAA;EAiBlB;EAhBc;IACI,iBAAA;EAkBlB;EAjBc;IACI,iBAAA;EAmBlB;AACF","sourcesContent":["*\r\n  font-family: Roboto, sans-serif\r\nbody\r\n    // margin: 0\r\n\r\n.container\r\n    max-width: 1440px\r\n    min-width: 375px\r\n    margin: 0 auto\r\n    \r\n\r\n    .header\r\n        display: flex\r\n        align-items: center\r\n        padding: 12px 104px 20px 127px\r\n        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05)\r\n\r\n        &__logo-wrapper\r\n            display: block\r\n\r\n        &__search\r\n            position: relative\r\n            width: 100%\r\n            max-width: 763px\r\n            margin: 0 60px\r\n\r\n            &::before\r\n                content: \"\"\r\n                position: absolute\r\n                left: 13px\r\n                top: 9px\r\n                width: 16px\r\n                height: 16px\r\n                background: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 17L12.0962 12.0962M12.0962 12.0962C13.2725 10.9199 14 9.29493 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C9.29493 14 10.9199 13.2725 12.0962 12.0962Z' stroke='%23768298' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") no-repeat\r\n\r\n            input\r\n                height: 40px\r\n                width: 100%\r\n                padding: 12px 0 12px 39px\r\n                border: 1px solid #EBEBF1\r\n                outline: none\r\n                border-radius: 5px\r\n\r\n                \\::-webkit-input-placeholder, ::-moz-placeholder, :-moz-placeholder, :-ms-input-placeholder\r\n                color: #BBC4D6\r\n                font-size: 14px\r\n\r\n        &__user\r\n            position: relative\r\n            display: flex\r\n            align-items: center\r\n            margin-left: 20px\r\n\r\n            &::after\r\n                content: \"\"\r\n                position: absolute\r\n                left: -19px\r\n                width: 1px\r\n                height: 83px\r\n                background: #EBEBF1\r\n\r\n        &__user-name\r\n            padding: 0 0 4px 0\r\n            font-size: 14px\r\n            letter-spacing: 0.03em\r\n            color: #768298\r\n\r\n        &__user-avatar img\r\n            height: 40px\r\n            width: 40px\r\n            border-radius: 100%\r\n            margin-left: 10px\r\n        &__user_mobile\r\n            display: none\r\n\r\n    .partners\r\n        padding: 66px 128px\r\n        \r\n        &__title\r\n            font-style: normal\r\n            font-weight: 500\r\n            font-size: 36px\r\n            line-height: 160%\r\n            letter-spacing: -0.3px\r\n            text-transform: uppercase\r\n            color: #121920\r\n\r\n        &__list\r\n            display: flex\r\n            flex-wrap: wrap\r\n            margin: 31px -48px 0 -15px\r\n\r\n        &__item\r\n            display: flex\r\n            width: 266px\r\n            max-width: 266px\r\n            height: 118px\r\n            margin: 0 17px 30px 15px\r\n            border: 1px solid #EBEBF1\r\n            border-radius: 5px\r\n            cursor: pointer\r\n\r\n            img\r\n                margin: auto\r\n            &:hover\r\n                box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03)\r\n                \r\n\r\n@media (max-width: 1439px)\r\n    .container\r\n        .header\r\n            padding: 20px 10%\r\n        .partners\r\n            &__item\r\n                flex: 1 1 18%\r\n                img\r\n                    max-width: 80%\r\n\r\n@media (max-width: 768px)\r\n    .container\r\n        .header\r\n            padding: 12px 0px 12px 12px \r\n\r\n            &__search\r\n                margin: 0 37px 2px 48px\r\n                &::before\r\n                    top: 10px\r\n                    left: 14px\r\n            &__user\r\n                margin-left: 33px\r\n                &::after\r\n                    left: -20px\r\n                    top: -20px\r\n                    height: 75px\r\n                &-avatar img\r\n                    margin: 0 12px 0 10px\r\n\r\n        .partners\r\n            padding: 75px 12px\r\n\r\n            &__title\r\n                font-size: 28px\r\n\r\n            &__list\r\n                margin: 29px -10px 0 -10px\r\n\r\n            &__item\r\n                flex: 1 1 227px\r\n                max-width: 227px\r\n                height: 120px\r\n                margin: 0 10px 18px 10px\r\n                &:nth-child(3) img\r\n                    transform: scale(1.16)\r\n                &:nth-child(4) img\r\n                    transform: scale(1.1)\r\n                &:nth-child(5) img\r\n                    transform: scale(1.02)\r\n                    margin-left: 22px\r\n                &:nth-child(6) img\r\n                    transform: scale(1.16)\r\n                &:nth-child(7) img\r\n                    transform: scale(1.07)\r\n                    margin-left: 22px\r\n\r\n@media (max-width: 767px)\r\n        .container\r\n            .partners\r\n                &__item\r\n                    flex: 1 1 27%\r\n                    img\r\n                        max-width: 80%\r\n\r\n@media (max-width: 576px)\r\n    .container\r\n        .header\r\n            flex-wrap: wrap\r\n            justify-content: space-between\r\n            padding: 9px 0 0 0\r\n            &__logo\r\n                margin-left: 13px\r\n            &__search\r\n                order: 2\r\n                margin: 13px -8px 0 -8px\r\n                width: 576px\r\n                input\r\n                    border-radius: 0px\r\n            &__user\r\n                display: none\r\n            &__user_mobile\r\n                display: block\r\n                margin: 3px 28px 0 0 \r\n\r\n@media (max-width: 375px)\r\n    .container\r\n        .header\r\n            &__search\r\n                &::before\r\n                    left: 23px\r\n                input\r\n                    padding-left: 52px\r\n        .partners\r\n            padding-top: 72px\r\n            &__list\r\n                margin: 30px 0 0 0 \r\n            &__item\r\n                flex: 1 1 335px\r\n                max-width: 335px\r\n                height: 138px\r\n                margin: 0 0 20px 0\r\n                &:first-child img\r\n                    transform: scale(1.27)\r\n                &:nth-child(4) img\r\n                    transform: scale(1.23)\r\n                &:nth-child(5) img\r\n                    margin-left: auto\r\n                &:nth-child(7) img\r\n                    margin-left: auto\r\n\r\n\r\n                        "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/style.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ "./sass/style.sass");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map