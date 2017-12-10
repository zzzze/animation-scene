var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var genRandomString = require("../src/genRandomString");

var expect = chai.expect;
chai.use(sinonChai);

describe("genRandomString", function () {

    it("should return a random string which length is equal to argument len", function () {
        expect(typeof genRandomString(8)).to.be.equal("string");
        expect(genRandomString(8).length).to.be.equal(8);
        expect(genRandomString(12).length).to.be.equal(12);
        expect(genRandomString(6)).to.not.be.equal(genRandomString(6));
    });
});