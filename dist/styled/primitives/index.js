"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = exports.spacing = exports.colours = void 0;

var _colours = _interopRequireWildcard(require("./colours.js"));

exports.colours = _colours;

var _spacing = _interopRequireWildcard(require("./spacing.js"));

exports.spacing = _spacing;

var _typography = _interopRequireWildcard(require("./typography.js"));

exports.typography = _typography;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }