"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require("./styled"));

var _react = _interopRequireDefault(require("./react"));

var _vue = _interopRequireDefault(require("./vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  styledComponents: _styled.default,
  reactComponents: _react.default,
  vueComponents: _vue.default
};
exports.default = _default;