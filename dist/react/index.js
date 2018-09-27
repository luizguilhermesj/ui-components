"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedback = exports.dataDisplay = exports.dataEntry = exports.layout = void 0;

var _layout = _interopRequireWildcard(require("./layout"));

exports.layout = _layout;

var _dataEntry = _interopRequireWildcard(require("./dataEntry"));

exports.dataEntry = _dataEntry;

var _dataDisplay = _interopRequireWildcard(require("./dataDisplay"));

exports.dataDisplay = _dataDisplay;

var _feedback = _interopRequireWildcard(require("./feedback"));

exports.feedback = _feedback;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }