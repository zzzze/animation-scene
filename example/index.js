import { setTimeout } from "timers";

require("normalize.css");
"use strict";
require("./src/style/main.scss");
var Scene = require("../").Scene;

var scene = new Scene({
    containerId: "container"
});
scene._autoLoop = false;
scene.loop = function (ctx) {
    console.log(ctx);
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 200);
    ctx.stroke();
};
scene.start();