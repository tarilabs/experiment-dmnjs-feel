"use strict";
exports.__esModule = true;
var Decimal = require("decimal.js");
var Commons_1 = require("./Commons");
var NullValue = (function () {
    function NullValue() {
    }
    ;
    NullValue.prototype.toJSONObject = function () {
        return null;
    };
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
    NumberValue.prototype.toJSONObject = function () {
        return this.value.toNumber();
    };
    return NumberValue;
}());
exports.NumberValue = NumberValue;
var StringValue = (function () {
    function StringValue(value) {
        this.value = value;
    }
    StringValue.from = function (value) {
        return new StringValue(value);
    };
    StringValue.prototype.sum = function (value) {
        return new StringValue(this.value + value.value);
    };
    StringValue.prototype.toJSONObject = function () {
        return this.value;
    };
    return StringValue;
}());
exports.StringValue = StringValue;
//# sourceMappingURL=FEELValue.js.map