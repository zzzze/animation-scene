"use strict";

/**
 * create a canvas element
 * 
 * @param {String} id 
 * @param {Number} width 
 * @param {Number} height
 * @param {Number} zIndex
 * @returns {HTMLCanvasElement}
 */
function createCanvas(id, width, height) {
    var canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    return canvas;
}

module.exports = createCanvas;