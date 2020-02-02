// test.js

console.log("*** OLD SCHOOLD CONSOLE LOG PROVISIONAL TESTS ***");

var antlr4 = require('antlr4');
var MyGrammarLexer = require('../../main-generated/javascript/FEEL_1_1Lexer.js').FEEL_1_1Lexer;
var MyGrammarParser = require('../../main-generated/javascript/FEEL_1_1Parser.js').FEEL_1_1Parser;
var MyVisitor = require('../../main-generated/javascript/FEEL_1_1Visitor').FEEL_1_1Visitor;


var input = "47";
var chars = new antlr4.InputStream(input);
var lexer = new MyGrammarLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.compilation_unit();

MyVisitor.prototype.visitPrimaryLiteral = function(ctx) {
    console.log("I found a primary: "+ctx.getText());
    return this.visitChildren(ctx);
};

tree.accept(new MyVisitor());