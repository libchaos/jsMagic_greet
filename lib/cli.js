"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  var args = (0, _minimist2.default)(process.argv.slice(2));

  if (args && args["drunk"]) {
    console.log((0, _index2.default)(args["_"][0], args["drunk"]));
  } else {
    console.log((0, _index2.default)(args["_"][0]));
  }
}