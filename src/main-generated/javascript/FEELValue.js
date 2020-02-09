"use strict";
exports.__esModule = true;
var Decimal = require("decimal.js");
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
        this.value = new Decimal.Decimal(value);
    }
    NumberValue.from = function (value) {
        return new NumberValue(value);
    };
    return NumberValue;
}());
exports.NumberValue = NumberValue;
//# sourceMappingURL=FEELValue.js.map