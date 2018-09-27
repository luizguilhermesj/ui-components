"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var foundation = _interopRequireWildcard(require("./foundation"));

var layout = _interopRequireWildcard(require("./layout"));

var dataEntry = _interopRequireWildcard(require("./dataEntry"));

var dataDisplay = _interopRequireWildcard(require("./dataDisplay"));

var feedback = _interopRequireWildcard(require("./feedback"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  foundation: foundation,
  layout: layout,
  dataEntry: dataEntry,
  dataDisplay: dataDisplay,
  feedback: feedback
};
exports.default = _default;