"use strict";
var createCanvas = require("./createCanvas");
var randomString = require("randomstring");

function createCtx(options) {
    var canvas, width, height;

    if (options.id) {
        canvas = document.getElementById(options.id);
    } else if (options.canvas) {
        canvas = options.canvas;
    } else if (options.containerId) {
        var container = document.getElementById(options.containerId);
        var style = window.getComputedStyle(container);

        if (!options.width || !options.height) {
            width = parseInt(style.width);
            height = parseInt(style.height);
        } else {
            width = options.width;
            height = options.height;
        }

        canvas = createCanvas("canvas-" + randomString({
            length: 12,
            charset: 'hex'
          }), width, height);

        container.appendChild(canvas);
        container = null;
    } 

    var ctx = canvas.getContext("2d");
    canvas = null;

    return ctx;
}

module.exports = createCtx;