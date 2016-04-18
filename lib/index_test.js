"use strict";

var _chai = require("chai");

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("greet", function () {
  it("greet person by name", function () {
    var name = "libchaos";
    (0, _chai.expect)((0, _index2.default)(name)).to.be.eql("hello, libchaos");
  });

  it("greet a person if flirtatiously if drunk", function () {
    var name = "libchaos";
    var drunk = true;
    (0, _chai.expect)((0, _index2.default)(name, drunk)).to.be.eql("hello libchaos, you look sexy today");
  });
});