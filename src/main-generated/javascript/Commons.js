"use strict";
exports.__esModule = true;
var Either = (function () {
    function Either(value, left) {
        this.value = value;
        this.left = left;
    }
    Either.prototype.isLeft = function () {
        return this.left;
    };
    Either.prototype.getLeft = function () {
        if (!this.isLeft())
            throw new Error();
        return this.value;
    };
    Either.prototype.isRight = function () {
        return !this.left;
    };
    Either.prototype.getRight = function () {
        if (!this.isRight())
            throw new Error();
        return this.value;
    };
    Either.ofLeft = function (value) {
        return new Either(value, true);
    };
    Either.ofRight = function (value) {
        return new Either(value, false);
    };
    return Either;
}());
exports.Either = Either;
//# sourceMappingURL=Commons.js.map