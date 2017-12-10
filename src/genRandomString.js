"use strict";

/**
 * return a random string
 * @param {Number} len string length
 * @returns {String}
 */
function genRandomString(len) {
    var chars = "abcdefhijkmnprstwxyz2345678";
    var result = "";

    for (var i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

module.exports = genRandomString;