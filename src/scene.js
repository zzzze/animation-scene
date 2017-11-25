"use strict";
var createCtxList = require("./createCtxList");

var addMouseMoveListerner = (element, cb) => {
    element.addEventListener('mousemove', cb);
};

function Scene(options) {
    this.ctxList = createCtxList(options);
    this._autoLoop = true;
    this._frameCount = 0;

    addMouseMoveListerner(this.ctxList.ctx_ui.canvas, this._handleMouseMove);
    this._run();
}

Scene.prototype._handleMouseMove = function (event) {
    this._mouseX = event.offsetX;
    this._mouseY = event.offsetY;
};

Scene.prototype._run = function () {
    this.clean(this.ctxList.bg_ctx);

    if (this._autoLoop || this._frameCount <= 0) {
        this.loop();
    }

    this._frameCount++;
    this._requestNextFrame(this._run);
};

Scene.prototype._requestNextFrame = function (func) {
    window.requestAnimationFrame(func);
};

Scene.prototype.loop = function () {
    this.clean();
};

Scene.prototype.clean = function (ctx) {
    if (!ctx) ctx = this.ctxList.main_ctx;
    ctx.clearRect(0, 0, this.width, this.height);
};

Scene.prototype.draw = function () {};