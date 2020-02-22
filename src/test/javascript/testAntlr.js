// test.js

console.log("*** OLD SCHOOLD CONSOLE LOG PROVISIONAL TESTS ***");

var antlr4 = require('antlr4');
var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var MyGrammarParser = require('../../main-generated/javascript/FEEL_1_1Parser.js').FEEL_1_1Parser;
var MyVisitor = require('../../main-generated/javascript/FEEL_1_1Visitor.js').FEEL_1_1Visitor;

var FEELValue = require('../../main-generated/javascript/FEELValue.js');
var ASTNode = require('../../main-generated/javascript/ASTNode.js');

var input = "1+2";
var chars = new antlr4.InputStream(input);
var lexer = new MyGrammarLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.compilation_unit();
console.log(tree.toStringTree(parser.ruleNames));

MyVisitor.prototype.visit = function(ctx) {
 	if (Array.isArray(ctx)) {
        if (ctx.length > 1) {
            return ctx.map(function(child) {
                return child.accept(this);
            }, this);
        } else if (ctx.length === 1) {
            return ctx[0].accept(this);
        } else {
            throw new Error("??");
        }
	} else {
		return ctx.accept(this);
	}
};
MyVisitor.prototype.visitCompilation_unit = function(ctx) {
    return this.visit(ctx.expression());
};

MyVisitor.prototype.visitAddExpression = function(ctx) {
    console.log("I found a visitAddExpression: "+ctx.getText());
    console.log("I found a visitAddExpression: "+ctx.op.text);
    let left = this.visit(ctx.additiveExpression());
    console.log("I found a visitAddExpression: "+left);
    let right = this.visit(ctx.multiplicativeExpression());
    console.log("I found a visitAddExpression: "+right);
    return new ASTNode.SumNode(left, right);
};

MyVisitor.prototype.visitPrimaryLiteral = function(ctx) {
    console.log("I found a primary: "+ctx.getText());
    return this.visitChildren(ctx);
};
MyVisitor.prototype.visitNumberLiteral = function(ctx) {
    return new ASTNode.NumberNode(ctx.getText());
};

var cu = tree.accept(new MyVisitor());
console.log(JSON.stringify(cu));

var feelValue = cu.accept(new ASTNode.ValueVisitor());
console.log(JSON.stringify(feelValue));