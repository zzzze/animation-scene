"use strict";
var createCanvas = require("./createCanvas");

function createArray(width, height) {
    var canvas_bg = createCanvas("canvas_bg", width, height, 1);
    var canvas_main = createCanvas("canvas_main", width, height, 2);
    var canvas_ui = createCanvas("canvas_ui", width, height, 3);

    return {
        bg: canvas_bg, 
        main: canvas_main, 
        ui: canvas_ui
    }
}

function createCtxList(options) {
    var fragment = document.createDocumentFragment();
    var container, width, height, canvasList = {}, ctxList = [];


    if (options.id) {
        var id = options.id;
        var canvas = document.getElementById(id);
        var style = window.getComputedStyle(canvas);

        container = document.createElement('div');
        container.style = canvas.style;
        container.style.position = 'relative';
        container.style.width = container.style.width + 'px';
        container.style.height = container.style.height + 'px';
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

    canvasList = createArray(style.width, style.height);
    var keys = Object.keys(canvasList);
    keys.forEach(function (key) {
        fragment.appendChild(canvasList[key]);
        var ctx = canvasList[key].getContext("2d");
        if (key === "main") ctxList.push(ctx);
        ctxList["ctx_" + key] = ctx;
    });
    container.appendChild(fragment);

    return ctxList;
}

module.exports = createCtxList;