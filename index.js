"use strict";
var Scene = require("./src/scene");

module.exports = {
    Scene: Scene,
    createScene: function (options) {
        return new Scene(options);
    }
};