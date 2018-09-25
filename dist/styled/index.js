"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _primitives = _interopRequireDefault(require("./primitives"));

var _foundation = _interopRequireDefault(require("./foundation"));

var _layout = _interopRequireDefault(require("./layout"));

var _dataEntry = _interopRequireDefault(require("./dataEntry"));

var _dataDisplay = _interopRequireDefault(require("./dataDisplay"));

var _feedback = _interopRequireDefault(require("./feedback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  primitives: _primitives.default,
  foundation: _foundation.default,
  layout: _layout.default,
  dataEntry: _dataEntry.default,
  dataDisplay: _dataDisplay.default,
  feedback: _feedback.default
};
exports.default = _default;