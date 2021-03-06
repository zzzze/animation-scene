"use strict";
var createCtx = require("./createCtx");

function Scene(options) {
    this.ctx = createCtx(options);
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.addEventListener = this.ctx.canvas.addEventListener.bind(this.ctx.canvas);

    if (options.traceMouse === undefined || options.traceMouse) {
        this._addMouseEventListerner();
    }
}

Scene.prototype._canLoop = true;
Scene.prototype._frameCount = 0;
Scene.prototype._mouseX = Number.MAX_VALUE;
Scene.prototype._mouseY = Number.MAX_VALUE;

Scene.prototype._addMouseEventListerner = function () {
    this.addEventListener('mousemove', this._handleMouseMove.bind(this));
};

Scene.prototype._handleMouseMove = function (event) {
    this._mouseX = event.offsetX;
    this._mouseY = event.offsetY;
};

Scene.prototype._run = function () {
    this._frameCount++;
    this.loop(this.ctx);
    if (this._canLoop) {
        window.requestAnimationFrame(this._run.bind(this));
    }
};

Scene.prototype.start = function () {
    this.setup(this.ctx);
    this._run();
};

Scene.prototype.setup = function () {};

Scene.prototype.loop = function () {};

Scene.prototype.clean = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
};

Scene.prototype.loopStop = function () {
    this._canLoop = false;
};

Scene.prototype.loopStart = function () {
    this._canLoop = true;
};

Object.defineProperties(Scene.prototype, {
    "mouseX": {
        get: function () {
            return this._mouseX;
        }
    },
    "mouseY": {
        get: function () {
            return this._mouseY;
        }
    },
    "frameCount": {
        get: function () {
            return this._frameCount;
        }
    }
});

module.exports = Scene;