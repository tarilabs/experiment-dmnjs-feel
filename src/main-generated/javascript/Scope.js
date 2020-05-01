"use strict";
exports.__esModule = true;
var Commons_1 = require("./Commons");
var EvalHelper_1 = require("./EvalHelper");
var antlr4_1 = require("antlr4");
var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var VariableSymbol = (function () {
    function VariableSymbol(id, type) {
        this.id = id;
        this.type = type;
    }
    return VariableSymbol;
}());
exports.VariableSymbol = VariableSymbol;
var Scope = (function () {
    function Scope(name, parentScope) {
        this.symbols = new Map();
        this.childScopes = new Map();
        this.tokenTree = null;
        this.name = name;
        this.parentScope = parentScope;
    }
    Scope.prototype.define = function (symbol) {
        if (this.symbols.has(symbol.id)) {
            return false;
        }
        this.symbols.set(EvalHelper_1.EvalHelper.normalizeVariableName(symbol.id), symbol);
        if (this.tokenTree != null) {
            throw new Error("TODO");
        }
        return true;
    };
    Scope.prototype.resolve = function (id) {
        var _a;
        console.log("resolve( " + id);
        this.symbols.forEach(function (v, k, m) { console.log(k + " = " + v); });
        var s = this.symbols.get(EvalHelper_1.EvalHelper.normalizeVariableName(id));
        console.log("s: " + s);
        if (s == null) {
            return (_a = this.parentScope) === null || _a === void 0 ? void 0 : _a.resolve(id);
        }
        return s;
    };
    Scope.prototype.start = function (token) {
        var _a;
        if (this.tokenTree == null) {
            this.initializeTokenTree();
        }
        this.tokenTree.start(token);
        (_a = this.parentScope) === null || _a === void 0 ? void 0 : _a.start(token);
    };
    Scope.prototype.followUp = function (token, isPredict) {
        var parent = this.parentScope != null && this.parentScope.followUp(token, isPredict);
        return this.tokenTree.followUp(token, !isPredict) || parent;
    };
    Scope.prototype.initializeTokenTree = function () {
        this.tokenTree = Scope.tokenTreeFromSymbols(this.symbols);
    };
    Scope.tokenTreeFromSymbols = function (symbol) {
        console.log("tokenTreeFromSymbols( )");
        symbol.forEach(function (v, k, m) { console.log(k + " = " + v); });
        var tt = new Commons_1.TokenTree();
        for (var _i = 0, _a = Array.from(symbol.keys()); _i < _a.length; _i++) {
            var s = _a[_i];
            var tokens = Scope.tokenize(s);
            console.log(tokens);
            tt.addName(tokens);
        }
        return tt;
    };
    Scope.tokenize = function (symbol) {
        var input = new antlr4_1.InputStream(symbol, true);
        var lexer = new MyGrammarLexer(input);
        var tokens = ([]);
        for (var token = lexer.nextToken(); token.type != antlr4_1.Token.EOF; token = lexer.nextToken()) {
            tokens.push(token.text);
        }
        return tokens;
    };
    return Scope;
}());
exports.Scope = Scope;
//# sourceMappingURL=Scope.js.map