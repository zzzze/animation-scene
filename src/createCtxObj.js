"use strict";
var createCanvas = require("./createCanvas");

function createCanvasObj(isSimpleScene, width, height) {
    var canvas_main = createCanvas("canvas_main", width, height, 2);

    if (isSimpleScene) {
        return {
            main: canvas_main
        }
    }

    return {
        bg: createCanvas("canvas_bg", width, height, 1), 
        main: canvas_main, 
        ui: createCanvas("canvas_ui", width, height, 3)
    }
}

function createCtxObj(options) {
    var fragment = document.createDocumentFragment();
    var container, width, height, canvasList = {}, ctxList = [];
    var isSimpleScene = !!options.isSimpleScene;


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

    canvasList = createCanvasObj(isSimpleScene, style.width, style.height);
    var keys = Object.keys(canvasList);
    keys.forEach(function (key) {
        fragment.appendChild(canvasList[key]);
        var ctx = canvasList[key].getContext("2d");
        if (key === "main") ctxList.push(ctx);
        ctxList["ctx_" + key] = ctx;
    });
    container.appendChild(fragment);

    ctxList.width = parseInt(style.width);
    ctxList.height = parseInt(style.height);
    return ctxList;
}

module.exports = createCtxObj;