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
function createCanvas(id, width, height, zIndex) {
    var canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.width = parseInt(width);
    canvas.height = parseInt(height);
    canvas.style.position = 'absolute';
    canvas.style.width = width;
    canvas.style.height = height;
    canvas.style.zIndex = zIndex;
    return canvas;
}

module.exports = createCanvas;