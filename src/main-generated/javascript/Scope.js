"use strict";
exports.__esModule = true;
var EvalHelper_1 = require("./EvalHelper");
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
        var s = this.symbols.get(EvalHelper_1.EvalHelper.normalizeVariableName(id));
        if (s != null) {
            return (_a = this.parentScope) === null || _a === void 0 ? void 0 : _a.resolve(id);
        }
        return s;
    };
    return Scope;
}());
exports.Scope = Scope;
//# sourceMappingURL=Scope.js.map