"use strict";
exports.__esModule = true;
var feelvalue = require("./FEELValue");
var Commons_1 = require("./Commons");
var NumberNode = (function () {
    function NumberNode(text) {
        this.value = feelvalue.NumberValue.from(text);
    }
    NumberNode.prototype.accept = function (visitor) {
        return visitor.visitNumber(this);
    };
    return NumberNode;
}());
exports.NumberNode = NumberNode;
var StringNode = (function () {
    function StringNode(text) {
        this.value = feelvalue.StringValue.from(text.slice(1, -1));
    }
    StringNode.prototype.accept = function (visitor) {
        return visitor.visitString(this);
    };
    return StringNode;
}());
exports.StringNode = StringNode;
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
    ValueVisitor.prototype.visitString = function (node) {
        return Commons_1.Either.ofRight(node.value);
    };
    ValueVisitor.prototype.visitSum = function (node) {
        var lm = node.left.accept(this);
        var rm = node.right.accept(this);
        if (lm.isLeft() || rm.isLeft()) {
            return Commons_1.Either.ofLeft(new Error());
        }
        var left = lm.getRight();
        var right = rm.getRight();
        if (left instanceof feelvalue.NumberValue && right instanceof feelvalue.NumberValue) {
            return Commons_1.Either.ofRight(left.sum(right));
        }
        else if (left instanceof feelvalue.StringValue && right instanceof feelvalue.StringValue) {
            return Commons_1.Either.ofRight(left.sum(right));
        }
        else {
            return Commons_1.Either.ofLeft(new Error("TODO"));
        }
    };
    return ValueVisitor;
}());
exports.ValueVisitor = ValueVisitor;
//# sourceMappingURL=ASTNode.js.map