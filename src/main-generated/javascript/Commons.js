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
            throw new Error("This either is not a left");
        return this.value;
    };
    Either.prototype.isRight = function () {
        return !this.left;
    };
    Either.prototype.getRight = function () {
        if (!this.isRight())
            throw new Error("This either is not a right");
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
var Node = (function () {
    function Node(token, parent) {
        this.token = token;
        this.parent = parent;
        this.children = new Array();
    }
    return Node;
}());
var TokenTree = (function () {
    function TokenTree() {
        this.root = new Node(null, null);
        this.currentNode = null;
    }
    TokenTree.prototype.addName = function (tokens) {
        var current = this.root;
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var t = tokens_1[_i];
            var next = this.findToken(current, t);
            if (next == null) {
                next = new Node(t, current);
                current.children.push(next);
            }
            current = next;
        }
    };
    TokenTree.prototype.start = function (t) {
        console.log("start(" + t);
        console.log(this);
        this.currentNode = this.findToken(this.root, t);
        console.log(this);
        console.log("-");
    };
    TokenTree.prototype.followUp = function (t, commit) {
        console.log("followUp(" + t, ", " + commit);
        console.log(this);
        if (this.currentNode == null) {
            return false;
        }
        var node = this.findToken(this.currentNode, t);
        if (commit) {
            this.currentNode = node;
        }
        console.log(node != null);
        console.log("-");
        return node != null;
    };
    TokenTree.prototype.findToken = function (current, t) {
        for (var _i = 0, _a = current.children; _i < _a.length; _i++) {
            var n = _a[_i];
            if (n.token === t) {
                return n;
            }
        }
        return null;
    };
    return TokenTree;
}());
exports.TokenTree = TokenTree;
//# sourceMappingURL=Commons.js.map