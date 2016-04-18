import { assert, expect } from "chai";
import greet from "./index";

describe("greet", () => {
  it("greet person by name", () => {
    let name = "libchaos";
    expect(greet(name)).to.be.eql("hello, libchaos");
  });

  it("greet a person if flirtatiously if drunk", () => {
    let name = "libchaos";
    let drunk = true;
    expect(greet(name, drunk)).to.be.eql("hello libchaos, you look sexy today");
  })
});
