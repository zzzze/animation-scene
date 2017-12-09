var createCanvas = require("../src/createCanvas");
var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");

var expect = chai.expect;
chai.use(sinonChai);

describe("createCanvas", function () {
    var _canvas = document.createElement("canvas");
    var _ctx = _canvas.getContext("2d");

    it("should create canvas element with config object", function () {
        var result = createCanvas("test", 100, 200);
        expect(_canvas.__proto__.isPrototypeOf(result)).to.be.ok;
        expect(result.id).to.be.equal("test");
        expect(result.width).to.be.equal(100);
        expect(result.height).to.be.equal(200);
        expect(result.style.width).to.be.equal("100px");
        expect(result.style.height).to.be.equal("200px");
    });
});