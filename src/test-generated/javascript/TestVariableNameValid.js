"use strict";
exports.__esModule = true;
var mocha_1 = require("mocha");
var assert = require("assert");
var x = require("../../main-generated/javascript/FEELParser");
mocha_1.describe("Variable name valid", function () {
    var validVariableNames = ["valid variable name",
        "?_873./-'+*valid",
        "🐎"];
    var _loop_1 = function (n) {
        mocha_1.it(n, function () {
            assert.equal(x.isVariableNameValid(n), true);
        });
    };
    for (var _i = 0, validVariableNames_1 = validVariableNames; _i < validVariableNames_1.length; _i++) {
        var n = validVariableNames_1[_i];
        _loop_1(n);
    }
});
mocha_1.describe("Variable name NOT valid", function () {
    var validVariableNames = ["banana%mango",
        "?_873./-'%+*valid",
        "?_873./-'@+*valid",
        "5variable can't start with a number",
        "for keyword is an invalid start for a variable name"];
    var _loop_2 = function (n) {
        mocha_1.it(n, function () {
            assert.equal(x.isVariableNameValid(n), false);
        });
    };
    for (var _i = 0, validVariableNames_2 = validVariableNames; _i < validVariableNames_2.length; _i++) {
        var n = validVariableNames_2[_i];
        _loop_2(n);
    }
});
//# sourceMappingURL=TestVariableNameValid.js.map