"use strict";
exports.__esModule = true;
var FEELValue = require("./FEELValue");
var NumberNode = (function () {
    function NumberNode(text) {
        this.value = FEELValue.NumberValue.from(text);
    }
    NumberNode.prototype.accept = function (visitor) {
        return visitor.visitNumber(this);
    };
    return NumberNode;
}());
exports.NumberNode = NumberNode;
var SumNode = (function () {
    function SumNode(left, right) {
        this.left = left;
        this.right = right;
    }
    SumNode.prototype.accept = function (visitor) {
        return visitor.visitSum(this);
    };
    return SumNode;
}());
exports.SumNode = SumNode;
var ValueVisitor = (function () {
    function ValueVisitor() {
    }
    ValueVisitor.prototype.visitNumber = function (node) {
        return node.value;
    };
    ValueVisitor.prototype.visitSum = function (node) {
        var left = node.left.accept(this);
        var right = node.right.accept(this);
        if (left instanceof FEELValue.NumberValue && right instanceof FEELValue.NumberValue) {
            return left.sum(right);
        }
        else {
            return FEELValue.NullValue.value;
        }
    };
    return ValueVisitor;
}());
exports.ValueVisitor = ValueVisitor;
//# sourceMappingURL=ASTNode.js.map