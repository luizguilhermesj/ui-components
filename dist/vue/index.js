"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedback = exports.dataDisplay = exports.dataEntry = exports.layout = exports.foundation = void 0;

var foundation = _interopRequireWildcard(require("./foundation"));

exports.foundation = foundation;

var layout = _interopRequireWildcard(require("./layout"));

exports.layout = layout;

var dataEntry = _interopRequireWildcard(require("./dataEntry"));

exports.dataEntry = dataEntry;

var dataDisplay = _interopRequireWildcard(require("./dataDisplay"));

exports.dataDisplay = dataDisplay;

var feedback = _interopRequireWildcard(require("./feedback"));

exports.feedback = feedback;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }