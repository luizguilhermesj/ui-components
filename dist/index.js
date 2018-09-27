"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vueComponents = exports.reactComponents = exports.styledComponents = void 0;

var _styledComponents = _interopRequireWildcard(require("./styled"));

exports.styledComponents = _styledComponents;

var _reactComponents = _interopRequireWildcard(require("./react"));

exports.reactComponents = _reactComponents;

var _vueComponents = _interopRequireWildcard(require("./vue"));

exports.vueComponents = _vueComponents;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }