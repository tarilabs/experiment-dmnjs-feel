"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Severity;
(function (Severity) {
    Severity[Severity["TRACE"] = 0] = "TRACE";
    Severity[Severity["INFO"] = 1] = "INFO";
    Severity[Severity["WARN"] = 2] = "WARN";
    Severity[Severity["ERROR"] = 3] = "ERROR";
})(Severity = exports.Severity || (exports.Severity = {}));
var FEELEventBase = (function () {
    function FEELEventBase(severity, message, sourceException) {
        this.severity = severity;
        this.message = message;
        this.sourceException = sourceException;
    }
    FEELEventBase.prototype.getSeverity = function () {
        return this.severity;
    };
    FEELEventBase.prototype.getMessage = function () {
        return this.message;
    };
    FEELEventBase.prototype.getSourceException = function () {
        return this.sourceException;
    };
    FEELEventBase.prototype.getLine = function () {
        return -1;
    };
    FEELEventBase.prototype.getColumn = function () {
        return -1;
    };
    FEELEventBase.prototype.getOffendingSymbol = function () {
        return null;
    };
    return FEELEventBase;
}());
exports.FEELEventBase = FEELEventBase;
var SyntaxErrorEvent = (function (_super) {
    __extends(SyntaxErrorEvent, _super);
    function SyntaxErrorEvent(severity, msg, e, line, charPositionInLine, offendingSymbol) {
        var _this = _super.call(this, severity, msg, e) || this;
        _this.line = 0;
        _this.column = 0;
        _this.offendingSymbol = null;
        _this.line = line;
        _this.column = charPositionInLine;
        _this.offendingSymbol = offendingSymbol;
        return _this;
    }
    SyntaxErrorEvent.prototype.getLine = function () {
        return this.line;
    };
    SyntaxErrorEvent.prototype.getColumn = function () {
        return this.column;
    };
    SyntaxErrorEvent.prototype.getOffendingSymbol = function () {
        return this.offendingSymbol;
    };
    return SyntaxErrorEvent;
}(FEELEventBase));
exports.SyntaxErrorEvent = SyntaxErrorEvent;
//# sourceMappingURL=Commons.js.map