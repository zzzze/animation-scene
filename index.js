"use strict";
var Scene = require("./src/scene");

module.exports = {
    Scene: Scene,
    createScene: function (options) {
        options.isSimpleScene = false;
        return new Scene(options);
    },
    createSimpleScene: function (options) {
        options.isSimpleScene = true;
        return new Scene(options);
    }
};