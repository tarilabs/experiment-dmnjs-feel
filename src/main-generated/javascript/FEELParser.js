"use strict";
exports.__esModule = true;
var antlr4 = require("antlr4");
var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var MyGrammarParser = require('../../main-generated/javascript/FEEL_1_1Parser.js').FEEL_1_1Parser;
var MyVisitor = require('../../main-generated/javascript/FEEL_1_1Visitor.js').FEEL_1_1Visitor;
var ASTNode = require("./ASTNode");
var Commons_1 = require("./Commons");
var EvalHelper_1 = require("./EvalHelper");
var Scope_1 = require("./Scope");
var REUSABLE_KEYWORDS = ([
    "for", "return", "if", "then", "else", "some", "every", "satisfies", "instance", "of",
    "function", "external", "or", "and", "between", "not", "null", "true", "false"
]);
var DIGITS_PATTERN = new RegExp("[0-9]*");
var MockedParserHelper = (function () {
    function MockedParserHelper() {
        this.eventsManager = 123;
        this.currentScope = new Scope_1.Scope("<local>");
        this.currentName = ([]);
        this.dynamicResolution = 0;
    }
    MockedParserHelper.prototype.isDynamicResolution = function () {
        return this.dynamicResolution > 0;
    };
    MockedParserHelper.prototype.disableDynamicResolution = function () {
        if (this.dynamicResolution > 0) {
            this.dynamicResolution--;
        }
    };
    MockedParserHelper.prototype.enableDynamicResolution = function () {
        this.dynamicResolution++;
    };
    MockedParserHelper.prototype.pushTypeScope = function () {
        console.log('TODO pushTypeScope()');
    };
    MockedParserHelper.prototype.pushScope = function () {
        console.log('TODO pushScope()');
    };
    MockedParserHelper.prototype.popScope = function () {
        console.log('TODO popScope()');
    };
    MockedParserHelper.prototype.pushName = function (ctx) {
        this.currentName.push(this.getName(ctx));
    };
    MockedParserHelper.prototype.getName = function (ctx) {
        var key = this.getOriginalText(ctx);
        if (ctx instanceof MyGrammarParser.KeyStringContext) {
            key = EvalHelper_1.EvalHelper.unescapeString(key);
        }
        return key;
    };
    MockedParserHelper.prototype.popName = function () {
        this.currentName.pop();
    };
    MockedParserHelper.prototype.recoverScope = function () {
        console.log('TODO recoverScope()');
    };
    MockedParserHelper.prototype.dismissScope = function () {
        console.log('TODO dismissScope()');
    };
    MockedParserHelper.prototype.defineVariable = function (ctx) {
        var v = new Scope_1.VariableSymbol(this.getName(ctx), undefined);
        this.currentScope.define(v);
    };
    MockedParserHelper.prototype.defineVariableExternally = function (variable, type) {
        log("defining custom type symbol: " + variable);
        var v = new Scope_1.VariableSymbol(variable, type);
        this.currentScope.define(v);
    };
    MockedParserHelper.prototype.isFeatDMN12EnhancedForLoopEnabled = function () {
        return true;
    };
    MockedParserHelper.prototype.followUp = function (t, isPredict) {
        var dynamicResolutionResult = this.isDynamicResolution() && isVariableNamePartValid(t.text, this.currentScope);
        var follow = dynamicResolutionResult || this.currentScope.followUp(t.text, isPredict);
        if (dynamicResolutionResult && !isPredict) {
            this.currentScope.followUp(t.text, isPredict);
        }
        return follow;
    };
    MockedParserHelper.prototype.startVariable = function (t) {
        log("startVariable( " + t.text);
        this.currentScope.start(t.text);
    };
    MockedParserHelper.prototype.getOriginalText = function (ctx) {
        var a = ctx.start.start;
        var b = ctx.stop.stop;
        var text = ctx.start.getInputStream().getText(a, b);
        return text;
    };
    MockedParserHelper.prototype.validateVariable = function (n1, qn, name) {
        if (this.eventsManager != null && !this.isDynamicResolution()) {
            if (this.currentScope.childScopes.has(name) == false && this.currentScope.resolve(name) == null) {
                console.log("validateVariable( " + this.getOriginalText(n1) + ", " + qn + ", " + name);
                var varName = qn.join(".");
                console.log("TODO ERROR Unknown variable " + varName);
            }
            else {
                console.log("SUCCESS!! TODO validateVariable( " + this.getOriginalText(n1) + ", " + qn + ", " + name);
            }
        }
    };
    return MockedParserHelper;
}());
function isVariableNamePartValid(namePart, scope) {
    if (DIGITS_PATTERN.test(namePart)) {
        return true;
    }
    if (REUSABLE_KEYWORDS.includes(namePart)) {
        return scope.followUp(namePart, true);
    }
    return isVariableNameValid(namePart);
}
function parse(expression, simpleSymbols, errorListener) {
    var chars = new antlr4.InputStream(expression, true);
    var lexer = new MyGrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    var helper = new MockedParserHelper();
    if (simpleSymbols) {
        for (var _i = 0, simpleSymbols_1 = simpleSymbols; _i < simpleSymbols_1.length; _i++) {
            var s = simpleSymbols_1[_i];
            helper.defineVariableExternally(s);
        }
    }
    parser.setHelper(helper);
    var aParser = parser;
    var errorChecker = errorListener != null ? errorListener : new FEELParserErrorListener(null);
    aParser.removeErrorListeners();
    aParser.addErrorListener(errorChecker);
    var tree = parser.compilation_unit();
    log(tree.toStringTree(parser.ruleNames));
    var cu = tree.accept(new MyVisitor());
    log(JSON.stringify(cu));
    return cu;
}
exports.parse = parse;
function evaluate(cu) {
    var feelValue = cu.accept(new ASTNode.ValueVisitor());
    return feelValue;
}
exports.evaluate = evaluate;
function log(text) {
}
function isVariableNameValid(source) {
    return checkVariableName(source).length == 0;
}
exports.isVariableNameValid = isVariableNameValid;
function checkVariableName(source) {
    if (source == null || source.length == 0) {
        return ["INVALID_VARIABLE_NAME_EMPTY"];
    }
    var input = new antlr4.InputStream(source, true);
    var lexer = new MyGrammarLexer(input);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    var helper = new MockedParserHelper();
    parser.setHelper(helper);
    var aParser = parser;
    var errorChecker = new FEELParserErrorListener(null);
    aParser.removeErrorListeners();
    aParser.addErrorListener(errorChecker);
    var nameDef = parser.nameDefinitionWithEOF();
    if (!errorChecker.hasErrors() &&
        nameDef != null &&
        source.trim() == (parser.getHelper().getOriginalText(nameDef))) {
        return ([]);
    }
    return errorChecker.getErrors();
}
exports.checkVariableName = checkVariableName;
var FEELParserErrorListener = (function () {
    function FEELParserErrorListener(unused) {
        this.msg = [];
    }
    FEELParserErrorListener.prototype.hasErrors = function () {
        return this.msg.length > 0;
    };
    FEELParserErrorListener.prototype.getErrors = function () {
        return this.msg;
    };
    FEELParserErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        var tokenIndex = offendingSymbol.tokenIndex;
        var parser = recognizer;
        var error;
        var ruleStack = parser.getRuleInvocationStack(null);
        var tokenStream = parser.getTokenStream();
        if (ruleStack.indexOf("nameDefinitionWithEOF") >= 0) {
            error = new Commons_1.SyntaxErrorEvent(Commons_1.Severity.ERROR, "INVALID_VARIABLE_NAME/NAMESTART: " + offendingSymbol.text, e, line, column, offendingSymbol);
        }
        else if (offendingSymbol.text === "}" && tokenIndex > 1 && tokenStream.get(tokenIndex - 1).text === ":") {
            error = new Commons_1.SyntaxErrorEvent(Commons_1.Severity.ERROR, "Missing expression: " + tokenStream.get(tokenIndex - 2).text, e, line, column, offendingSymbol);
        }
        else if (e != null && ruleStack[ruleStack.length - 1] === "ifExpression") {
            console.log("TODO: " + e);
            error = new Commons_1.SyntaxErrorEvent(Commons_1.Severity.ERROR, "Syntax error: " + offendingSymbol.text, e, line, column, offendingSymbol);
        }
        else {
            error = new Commons_1.SyntaxErrorEvent(Commons_1.Severity.ERROR, "Syntax error: " + offendingSymbol.text, e, line, column, offendingSymbol);
        }
        this.msg.push(error);
    };
    FEELParserErrorListener.prototype.reportAmbiguity = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    };
    FEELParserErrorListener.prototype.reportAttemptingFullContext = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    };
    FEELParserErrorListener.prototype.reportContextSensitivity = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    };
    return FEELParserErrorListener;
}());
exports.FEELParserErrorListener = FEELParserErrorListener;
MyVisitor.prototype.visit = function (ctx) {
    var _this = this;
    if (Array.isArray(ctx)) {
        if (ctx.length > 1) {
            return ctx.map(function (child) { return child.accept(_this); });
        }
        else if (ctx.length === 1) {
            return ctx[0].accept(this);
        }
        else {
            throw new Error("??");
        }
    }
    else {
        return ctx.accept(this);
    }
};
MyVisitor.prototype.visitCompilation_unit = function (ctx) {
    return this.visit(ctx.expression());
};
MyVisitor.prototype.visitAddExpression = function (ctx) {
    log("I found a visitAddExpression: " + ctx.getText());
    log("I found a visitAddExpression: " + ctx.op.text);
    var left = this.visit(ctx.additiveExpression());
    log("I found a visitAddExpression: " + left);
    var right = this.visit(ctx.multiplicativeExpression());
    log("I found a visitAddExpression: " + right);
    return new ASTNode.SumNode(left, right);
};
MyVisitor.prototype.visitPrimaryLiteral = function (ctx) {
    log("I found a primary: " + ctx.getText());
    return this.visitChildren(ctx);
};
MyVisitor.prototype.visitNumberLiteral = function (ctx) {
    return new ASTNode.NumberNode(ctx.getText());
};
MyVisitor.prototype.visitStringLiteral = function (ctx) {
    return new ASTNode.StringNode(ctx.getText());
};
MyVisitor.prototype.visitInterval = function (ctx) {
    var start = this.visit(ctx.start);
    var end = this.visit(ctx.end);
    var low = ctx.low.text === "[" ? ASTNode.IntervalBoundary.CLOSED : ASTNode.IntervalBoundary.OPEN;
    var up = ctx.up.text === "]" ? ASTNode.IntervalBoundary.CLOSED : ASTNode.IntervalBoundary.OPEN;
    return new ASTNode.RangeNode(low, start, end, up);
};
MyVisitor.prototype.visitPositiveUnaryTestIneqInterval = function (ctx) {
    var value = this.visit(ctx.endpoint());
    var op = ctx.op.text;
    switch (op) {
        case ASTNode.UnaryOperator.GT:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.OPEN, value, new ASTNode.NullNode(), ASTNode.IntervalBoundary.OPEN);
        case ASTNode.UnaryOperator.GTE:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.CLOSED, value, new ASTNode.NullNode(), ASTNode.IntervalBoundary.OPEN);
        case ASTNode.UnaryOperator.LT:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.OPEN, new ASTNode.NullNode(), value, ASTNode.IntervalBoundary.OPEN);
        case ASTNode.UnaryOperator.LTE:
            return new ASTNode.RangeNode(ASTNode.IntervalBoundary.OPEN, new ASTNode.NullNode(), value, ASTNode.IntervalBoundary.CLOSED);
        default:
            throw new Error("by the parser rule FEEL grammar rule 7.a for range syntax should not have determined the operator " + op);
    }
};
//# sourceMappingURL=FEELParser.js.map