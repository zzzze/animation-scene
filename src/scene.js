"use strict";
var createCtxObj = require("./createCtxObj");

var addMouseMoveListerner = function (element, cb) {
    element.addEventListener('mousemove', cb);
};

function Scene(options) {
    this.ctxList = createCtxObj(options);
    this.width = this.ctxList.width;
    this.height = this.ctxList.height;
    this.isSimpleScene = !!options.isSimpleScene;

    var canvas = this.isSimpleScene ? this.ctxList.ctx_main.canvas : this.ctxList.ctx_ui.canvas;
    addMouseMoveListerner(canvas, this._handleMouseMove.bind(this));
}

Scene.prototype._autoLoop = true;
Scene.prototype._frameCount = 0;

Scene.prototype._handleMouseMove = function (event) {
    this._mouseX = event.offsetX;
    this._mouseY = event.offsetY;
};

Scene.prototype._run = function () {
    if (!this.isSimpleScene) this.clean(this.ctxList.ctx_bg);
    
    if (this._autoLoop || this._frameCount < 1) {
        this.loop(this.ctxList.ctx_main);
    }

    this._frameCount++;
    window.requestAnimationFrame(this._run.bind(this));
};

Scene.prototype.start = function () {
    this._run();
};

Scene.prototype.loop = function () {
    this.clean();
};

Scene.prototype.clean = function (ctx) {
    if (!ctx) ctx = this.ctxList.ctx_main;
    ctx.clearRect(0, 0, this.width, this.height);
};

Scene.prototype.draw = function () {};

module.exports = Scene;