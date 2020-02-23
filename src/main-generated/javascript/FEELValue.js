"use strict";
exports.__esModule = true;
var Decimal = require("decimal.js");
var Commons_1 = require("./Commons");
var NullValue = (function () {
    function NullValue() {
    }
    ;
    NullValue.value = new NullValue();
    return NullValue;
}());
exports.NullValue = NullValue;
function greet() {
    console.log("Hello world!");
    return NullValue.value;
}
var NumberValue = (function () {
    function NumberValue(value) {
        this.value = value;
    }
    NumberValue.from = function (value) {
        var d = new Decimal.Decimal(value);
        return Commons_1.Either.ofRight(new NumberValue(d));
    };
    NumberValue.prototype.sum = function (value) {
        return new NumberValue(this.value.add(value.value));
    };
    return NumberValue;
}());
exports.NumberValue = NumberValue;
//# sourceMappingURL=FEELValue.js.map