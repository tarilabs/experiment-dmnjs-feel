import * as antlr4 from 'antlr4';

var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var MyGrammarParser = require('../../main-generated/javascript/FEEL_1_1Parser.js').FEEL_1_1Parser;
var MyVisitor = require('../../main-generated/javascript/FEEL_1_1Visitor.js').FEEL_1_1Visitor;

import * as ASTNode from "./ASTNode";
import { FEELValue } from "./FEELValue";
import { Either } from "./Commons";

export function parse(expression : string) : ASTNode.ASTNode {
    var chars = new antlr4.InputStream(expression);
    var lexer = new MyGrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.compilation_unit();
    log(tree.toStringTree(parser.ruleNames));

    var cu = tree.accept(new MyVisitor());
    log(JSON.stringify(cu));
    return cu;
}
export function evaluate(cu : ASTNode.ASTNode) : Either<Error, FEELValue> {
    var feelValue = cu.accept(new ASTNode.ValueVisitor());
    return feelValue;
}

function log(text : any) {
    //console.log(text);
}
// IMPORTANT: please note this overwrite will be shared:
MyVisitor.prototype.visit = function(ctx : any) {
    if (Array.isArray(ctx)) {
       if (ctx.length > 1) {
           return ctx.map((child) => child.accept(this));
       } else if (ctx.length === 1) {
           return ctx[0].accept(this);
       } else {
           throw new Error("??");
       }
   } else {
       return ctx.accept(this);
   }
};
MyVisitor.prototype.visitCompilation_unit = function(ctx : any) {
   return this.visit(ctx.expression());
};
MyVisitor.prototype.visitAddExpression = function(ctx : any) {
   log("I found a visitAddExpression: "+ctx.getText());
   log("I found a visitAddExpression: "+ctx.op.text);
   let left = this.visit(ctx.additiveExpression());
   log("I found a visitAddExpression: "+left);
   let right = this.visit(ctx.multiplicativeExpression());
   log("I found a visitAddExpression: "+right);
   return new ASTNode.SumNode(left, right);
};
MyVisitor.prototype.visitPrimaryLiteral = function(ctx : any) {
   log("I found a primary: "+ctx.getText());
   return this.visitChildren(ctx);
};
MyVisitor.prototype.visitNumberLiteral = function(ctx : any) {
   return new ASTNode.NumberNode(ctx.getText());
};
MyVisitor.prototype.visitStringLiteral = function(ctx : any) {
   return new ASTNode.StringNode(ctx.getText());
};