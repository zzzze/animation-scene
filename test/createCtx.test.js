var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var createCtxInjector = require("inject-loader!../src/createCtx");

var expect = chai.expect;
chai.use(sinonChai);

var createCtx = createCtxInjector({
    "./genRandomString": function () {
        return "hash-test";
    }
})

describe("createCtx", function () {
    var _canvas = document.createElement("canvas");
    var _ctx = _canvas.getContext("2d");
    var container = document.createElement("div");
    _canvas.id = "canvas_1";
    container.style.width = "300px";
    container.style.height = "400px";
    container.id = "container";
    document.body.appendChild(container);
    document.body.appendChild(_canvas);

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

    it("should throw TypeError", function () {
        expect(function () {
            createCtx({id: 10});
        }).to.throw(TypeError);

        expect(function () {
            createCtx({containerId: 11});
        }).to.throw(TypeError);

        expect(function () {
            createCtx({canvas: "test"});
        }).to.throw(TypeError);
    });

    it("should throw 'invalid options'", function () {
        expect(function () {
            createCtx({});
        }).to.throw("invalid options");
    });

    it("can handle diffrent options", function () {
        var result_1 = createCtx({
            canvas: _canvas
        });

        var result_2 = createCtx({
            id: "canvas_1"
        });

        var result_3 = createCtx({
            containerId: "container"
        });
        expect(_ctx.__proto__.isPrototypeOf(result_1)).to.be.ok;
        expect(_ctx.__proto__.isPrototypeOf(result_2)).to.be.ok;
        expect(_ctx.__proto__.isPrototypeOf(result_3)).to.be.ok;
        expect(result_1.canvas).to.be.equal(_canvas);
        expect(result_2.canvas).to.be.equal(_canvas);
        expect(result_3.canvas.width).to.be.equal(300);
        expect(result_3.canvas.height).to.be.equal(400);
    });
});