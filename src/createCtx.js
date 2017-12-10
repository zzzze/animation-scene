"use strict";
var createCanvas = require("./createCanvas");
var genRandomString = require("./genRandomString");

function createCtx(options) {
    var canvas, width, height;

    if (options.canvas) {
        var _canvas = createCanvas();
        if (!_canvas.__proto__.isPrototypeOf(options.canvas)) {
            throw TypeError("options.canvas should be a canvas element");
        }
        canvas = options.canvas;
    } else if (options.id) {
        if (typeof options.id !== "string") {
            throw TypeError("options.id should be a string");
        }
        canvas = document.getElementById(options.id);
    } else if (options.containerId) {
        if (typeof options.containerId !== "string") {
            throw TypeError("options.containerId should be a string");
        }
        var container = document.getElementById(options.containerId);
        var style = window.getComputedStyle(container);

        if (!options.width || !options.height) {
            width = parseInt(style.width);
            height = parseInt(style.height);
        } else {
            width = options.width;
            height = options.height;
        }
        canvas = createCanvas("canvas-" + genRandomString(12), width, height);

        container.appendChild(canvas);
        container = null;
    } else {
        throw "invalid options";
    }

    var ctx = canvas.getContext("2d");
    canvas = null;

    return ctx;
}

module.exports = createCtx;