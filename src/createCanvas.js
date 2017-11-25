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
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = zIndex;
    return canvas;
}

module.exports = createCanvas;