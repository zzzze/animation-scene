"use strict";
require("normalize.css");
require("./src/style/main.scss");
var scene = require("../");

var scene = scene.createScene({
    containerId: "container"
});
// scene._autoLoop = false;

var x = 50, y = 50;
scene.loop = function (ctx) {
    // console.log(this.mouseX, this.mouseY);
    this.clean();
    if (x + 1 < 300) {
        x += 1;
    } else {
        x = -100;
    }
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y + 200);
    ctx.stroke();
};
console.log(scene);
scene.start();