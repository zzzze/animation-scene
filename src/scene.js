"use strict";
var createCtxList = require("./createCtxList");

var addMouseMoveListerner = (element, cb) => {
    element.addEventListener('mousemove', cb);
};

function Scene(options) {
    this.ctxList = createCtxList(options);
    this._autoLoop = true;
    this._frameCount = 0;

    addMouseMoveListerner(this.ctxList.ctx_ui.canvas, this._handleMouseMove.bind(this));
}

Scene.prototype._handleMouseMove = function (event) {
    this._mouseX = event.offsetX;
    this._mouseY = event.offsetY;
};

Scene.prototype._run = function () {
    this.clean(this.ctxList.ctx_bg);
    
    if (this._autoLoop || this._frameCount < 1) {
        this.loop(this.ctxList.ctx_main);
    }

    this._frameCount++;
    this._requestNextFrame(this._run.bind(this));
};

Scene.prototype.start = function () {
    this._run();
};

Scene.prototype._requestNextFrame = function (func) {
    window.requestAnimationFrame(func);
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