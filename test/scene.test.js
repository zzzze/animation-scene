var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sceneInjector = require("inject-loader!../src/scene");

var expect = chai.expect;
chai.use(sinonChai);

var _canvas = document.createElement("canvas");
_canvas.width = 200;
_canvas.height = 300;
var _ctx = _canvas.getContext("2d");

var Scene = sceneInjector({
    "./createCtx": function () {
        return _ctx;
    }
});

var setup = sinon.spy(Scene.prototype, "setup");
var start = sinon.spy(Scene.prototype, "start");

describe("scene", function () {
    it("should call setup method onece after scene.start called", function () {
        var scene = new Scene({});
        scene.start();

        expect(setup.calledOnce).to.be.ok;
        expect(setup.calledAfter(start)).to.be.ok;
    });
});