var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var createCtxInjector = require("inject-loader!../src/createCtx");

var expect = chai.expect;
chai.use(sinonChai);

var createCtx = createCtxInjector({
    "randomstring": function () {
        return "hash-test";
    }
})

describe("createCtx", function () {
    var _canvas = document.createElement("canvas");
    var _ctx = _canvas.getContext("2d");
    var container = document.createElement("div");
    container.style.width = "300px";
    container.style.height = "400px";
    container.id = "container";
    document.body.appendChild(container);

    it("should return a ctx obj", function () {
        var result = createCtx({
            containerId: "container",
            width: 100,
            height: 200
        });
        expect(_ctx.__proto__.isPrototypeOf(result)).to.be.ok;
        expect(result.canvas.id).to.be.equal("canvas-hash-test");
        expect(result.canvas.width).to.be.equal(100);
        expect(result.canvas.height).to.be.equal(200);
        expect(result.canvas.style.width).to.be.equal("100px");
        expect(result.canvas.style.height).to.be.equal("200px");
    });

    it("should get container width and height", function () {
        var result = createCtx({containerId: "container"});

        expect(result.canvas.width).to.be.equal(300);
        expect(result.canvas.height).to.be.equal(400);
        expect(result.canvas.style.width).to.be.equal("300px");
        expect(result.canvas.style.height).to.be.equal("400px");
    });
});