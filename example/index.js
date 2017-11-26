import { setTimeout } from "timers";

require("normalize.css");
"use strict";
require("./src/style/main.scss");
var scene = require("../");

var scene = scene.createSimpleScene({
    containerId: "container"
});
// scene._autoLoop = false;

var x = 50, y = 50;
scene.loop = function (ctx) {
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
scene.start();