"use strict";
var createCanvas = require("./createCanvas");
var uniqueString = require('unique-string');

function createCtx(options) {
    var container, width, height;

    if (options.id) {
        var id = options.id;
        var canvas = document.getElementById(id);
        var style = window.getComputedStyle(canvas);

        container = document.createElement('div');
        container.style = canvas.style;
        container.style.position = 'relative';
        container.style.width = style.width;
        container.style.height = style.height;
        container.id = id;
        canvas.parentNode.insertBefore(container, canvas);
        canvas.remove();

    } else {
        var containerId = options.containerId;
        container = document.getElementById(containerId);
        var style = window.getComputedStyle(container);
    
        if (style.position === "static") {
            container.style.position = 'relative';
        }
        
    }

    canvas = createCanvas("canvas-" + uniqueString(), style.width, style.height);
    var ctx = canvas.getContext("2d");
    container.appendChild(canvas);
    canvas = container = null;

    return ctx;
}

module.exports = createCtx;