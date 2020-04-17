// Generated from FEEL_1_1.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FEEL_1_1Parser.

function FEEL_1_1Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FEEL_1_1Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FEEL_1_1Visitor.prototype.constructor = FEEL_1_1Visitor;

// Visit a parse tree produced by FEEL_1_1Parser#compilation_unit.
FEEL_1_1Visitor.prototype.visitCompilation_unit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#expressionTextual.
FEEL_1_1Visitor.prototype.visitExpressionTextual = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#textualExpression.
FEEL_1_1Visitor.prototype.visitTextualExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#parametersEmpty.
FEEL_1_1Visitor.prototype.visitParametersEmpty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#parametersPositional.
FEEL_1_1Visitor.prototype.visitParametersPositional = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positionalParameters.
FEEL_1_1Visitor.prototype.visitPositionalParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#forExpression.
FEEL_1_1Visitor.prototype.visitForExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#iterationContexts.
FEEL_1_1Visitor.prototype.visitIterationContexts = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#iterationContext.
FEEL_1_1Visitor.prototype.visitIterationContext = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#ifExpression.
FEEL_1_1Visitor.prototype.visitIfExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#quantExprSome.
FEEL_1_1Visitor.prototype.visitQuantExprSome = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#quantExprEvery.
FEEL_1_1Visitor.prototype.visitQuantExprEvery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#list.
FEEL_1_1Visitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#nameDefinitionTokens.
FEEL_1_1Visitor.prototype.visitNameDefinitionTokens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#iterationNameDefinition.
FEEL_1_1Visitor.prototype.visitIterationNameDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#iterationNameDefinitionTokens.
FEEL_1_1Visitor.prototype.visitIterationNameDefinitionTokens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#additionalNameSymbol.
FEEL_1_1Visitor.prototype.visitAdditionalNameSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#condOr.
FEEL_1_1Visitor.prototype.visitCondOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#condOrAnd.
FEEL_1_1Visitor.prototype.visitCondOrAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#condAndComp.
FEEL_1_1Visitor.prototype.visitCondAndComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#condAnd.
FEEL_1_1Visitor.prototype.visitCondAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#compExpression.
FEEL_1_1Visitor.prototype.visitCompExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#compExpressionRel.
FEEL_1_1Visitor.prototype.visitCompExpressionRel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#relExpressionBetween.
FEEL_1_1Visitor.prototype.visitRelExpressionBetween = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#relExpressionValue.
FEEL_1_1Visitor.prototype.visitRelExpressionValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#relExpressionTestList.
FEEL_1_1Visitor.prototype.visitRelExpressionTestList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#relExpressionAdd.
FEEL_1_1Visitor.prototype.visitRelExpressionAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#expressionList.
FEEL_1_1Visitor.prototype.visitExpressionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#addExpressionMult.
FEEL_1_1Visitor.prototype.visitAddExpressionMult = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#addExpression.
FEEL_1_1Visitor.prototype.visitAddExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#multExpressionPow.
FEEL_1_1Visitor.prototype.visitMultExpressionPow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#multExpression.
FEEL_1_1Visitor.prototype.visitMultExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#powExpressionUnary.
FEEL_1_1Visitor.prototype.visitPowExpressionUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#powExpression.
FEEL_1_1Visitor.prototype.visitPowExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#filterPathExpression.
FEEL_1_1Visitor.prototype.visitFilterPathExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#signedUnaryExpressionPlus.
FEEL_1_1Visitor.prototype.visitSignedUnaryExpressionPlus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#signedUnaryExpressionMinus.
FEEL_1_1Visitor.prototype.visitSignedUnaryExpressionMinus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#fnInvocation.
FEEL_1_1Visitor.prototype.visitFnInvocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#nonSignedUnaryExpression.
FEEL_1_1Visitor.prototype.visitNonSignedUnaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#unaryExpressionNotPlusMinus.
FEEL_1_1Visitor.prototype.visitUnaryExpressionNotPlusMinus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryLiteral.
FEEL_1_1Visitor.prototype.visitPrimaryLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryForExpression.
FEEL_1_1Visitor.prototype.visitPrimaryForExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryQuantifiedExpression.
FEEL_1_1Visitor.prototype.visitPrimaryQuantifiedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryIfExpression.
FEEL_1_1Visitor.prototype.visitPrimaryIfExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryInterval.
FEEL_1_1Visitor.prototype.visitPrimaryInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryList.
FEEL_1_1Visitor.prototype.visitPrimaryList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryParens.
FEEL_1_1Visitor.prototype.visitPrimaryParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#primaryUnaryTest.
FEEL_1_1Visitor.prototype.visitPrimaryUnaryTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#numberLiteral.
FEEL_1_1Visitor.prototype.visitNumberLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#boolLiteral.
FEEL_1_1Visitor.prototype.visitBoolLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#atLiteralLabel.
FEEL_1_1Visitor.prototype.visitAtLiteralLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#stringLiteral.
FEEL_1_1Visitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#nullLiteral.
FEEL_1_1Visitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#atLiteral.
FEEL_1_1Visitor.prototype.visitAtLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#atLiteralValue.
FEEL_1_1Visitor.prototype.visitAtLiteralValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveUnaryTestIneqInterval.
FEEL_1_1Visitor.prototype.visitPositiveUnaryTestIneqInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveUnaryTestIneq.
FEEL_1_1Visitor.prototype.visitPositiveUnaryTestIneq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveUnaryTestInterval.
FEEL_1_1Visitor.prototype.visitPositiveUnaryTestInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#simplePositiveUnaryTests.
FEEL_1_1Visitor.prototype.visitSimplePositiveUnaryTests = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveSimplePositiveUnaryTests.
FEEL_1_1Visitor.prototype.visitPositiveSimplePositiveUnaryTests = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#negatedSimplePositiveUnaryTests.
FEEL_1_1Visitor.prototype.visitNegatedSimplePositiveUnaryTests = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveUnaryTestDash.
FEEL_1_1Visitor.prototype.visitPositiveUnaryTestDash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveUnaryTest.
FEEL_1_1Visitor.prototype.visitPositiveUnaryTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#positiveUnaryTests.
FEEL_1_1Visitor.prototype.visitPositiveUnaryTests = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#unaryTestsRoot.
FEEL_1_1Visitor.prototype.visitUnaryTestsRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#unaryTests_negated.
FEEL_1_1Visitor.prototype.visitUnaryTests_negated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#unaryTests_positive.
FEEL_1_1Visitor.prototype.visitUnaryTests_positive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#unaryTests_empty.
FEEL_1_1Visitor.prototype.visitUnaryTests_empty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#endpoint.
FEEL_1_1Visitor.prototype.visitEndpoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#interval.
FEEL_1_1Visitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FEEL_1_1Parser#reusableKeywords.
FEEL_1_1Visitor.prototype.visitReusableKeywords = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FEEL_1_1Visitor = FEEL_1_1Visitor;