"use strict";
exports.__esModule = true;
var antlr4 = require("antlr4");
var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var MyGrammarParser = require('../../main-generated/javascript/FEEL_1_1Parser.js').FEEL_1_1Parser;
var MyVisitor = require('../../main-generated/javascript/FEEL_1_1Visitor.js').FEEL_1_1Visitor;
var ASTNode = require("./ASTNode");
var MockedParserHelper = (function () {
    function MockedParserHelper() {
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
    MockedParserHelper.prototype.pushScope = function () {
        console.log('pushScope()');
    };
    MockedParserHelper.prototype.popScope = function () {
        console.log('popScope()');
    };
    MockedParserHelper.prototype.recoverScope = function () {
        console.log('recoverScope()');
    };
    MockedParserHelper.prototype.dismissScope = function () {
        console.log('dismissScope()');
    };
    MockedParserHelper.prototype.defineVariable = function (ctx) {
        console.log('defineVariable( ' + ctx);
    };
    MockedParserHelper.prototype.isFeatDMN12EnhancedForLoopEnabled = function () {
        return true;
    };
    MockedParserHelper.prototype.followUp = function (lt1, localctx) {
        console.log('followUp( ' + lt1 + ', ' + localctx + " ) : FALSE");
        return false;
    };
    MockedParserHelper.prototype.startVariable = function (startToken) {
        console.log("startVariable( " + startToken);
    };
    MockedParserHelper.prototype.getOriginalText = function (ctx) {
        var a = ctx.start.start;
        var b = ctx.stop.stop;
        var text = ctx.start.getInputStream().getText(a, b);
        return text;
    };
    MockedParserHelper.prototype.validateVariable = function (n1, qn, name) {
        console.log("validateVariable( " + n1 + ", " + qn + ", " + name);
        var varName = qn.join(".");
        console.log("TODO ERROR Unknown variable " + varName);
    };
    return MockedParserHelper;
}());
function parse(expression) {
    var chars = new antlr4.InputStream(expression);
    var lexer = new MyGrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    var helper = new MockedParserHelper();
    parser.setHelper(helper);
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