"use strict";
var createCtx = require("./createCtx");

var addMouseMoveListerner = function (element, cb) {
    element.addEventListener('mousemove', cb);
};

function Scene(options) {
    this.ctx = createCtx(options);
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;

    addMouseMoveListerner(this.ctx.canvas, this._handleMouseMove.bind(this));
}

Scene.prototype._autoLoop = true;
Scene.prototype._frameCount = 0;

Scene.prototype._handleMouseMove = function (event) {
    this._mouseX = event.offsetX;
    this._mouseY = event.offsetY;
};

Scene.prototype._run = function () {
    if (this._autoLoop || this._frameCount < 1) {
        this.loop(this.ctx);
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

Scene.prototype.clean = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
};

module.exports = Scene;