// Generated from FEEL_1_1.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FEEL_1_1Visitor = require('./FEEL_1_1Visitor').FEEL_1_1Visitor;

var grammarFileName = "FEEL_1_1.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038]\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t;",
    "\n\t\f\t\u000e\t>\u000b\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011T\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0002\u0002\u0015\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&\u0002\u0003\u0005\u0002\u0004\u0005",
    "\u0007\u001622\u0002O\u0002(\u0003\u0002\u0002\u0002\u0004+\u0003\u0002",
    "\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002",
    "\n1\u0003\u0002\u0002\u0002\f3\u0003\u0002\u0002\u0002\u000e5\u0003",
    "\u0002\u0002\u0002\u00107\u0003\u0002\u0002\u0002\u0012?\u0003\u0002",
    "\u0002\u0002\u0014A\u0003\u0002\u0002\u0002\u0016C\u0003\u0002\u0002",
    "\u0002\u0018E\u0003\u0002\u0002\u0002\u001aG\u0003\u0002\u0002\u0002",
    "\u001cI\u0003\u0002\u0002\u0002\u001eK\u0003\u0002\u0002\u0002 S\u0003",
    "\u0002\u0002\u0002\"U\u0003\u0002\u0002\u0002$X\u0003\u0002\u0002\u0002",
    "&Z\u0003\u0002\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0002\u0002",
    "\u0003*\u0003\u0003\u0002\u0002\u0002+,\u0005\u0006\u0004\u0002,\u0005",
    "\u0003\u0002\u0002\u0002-.\u0005\b\u0005\u0002.\u0007\u0003\u0002\u0002",
    "\u0002/0\u0005\n\u0006\u00020\t\u0003\u0002\u0002\u000212\u0005\f\u0007",
    "\u00022\u000b\u0003\u0002\u0002\u000234\u0005\u000e\b\u00024\r\u0003",
    "\u0002\u0002\u000256\u0005\u0012\n\u00026\u000f\u0003\u0002\u0002\u0002",
    "7<\u0005\u0004\u0003\u000289\u0007!\u0002\u00029;\u0005\u0004\u0003",
    "\u0002:8\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002",
    "\u0002\u0002<=\u0003\u0002\u0002\u0002=\u0011\u0003\u0002\u0002\u0002",
    "><\u0003\u0002\u0002\u0002?@\u0005\u0014\u000b\u0002@\u0013\u0003\u0002",
    "\u0002\u0002AB\u0005\u0016\f\u0002B\u0015\u0003\u0002\u0002\u0002CD",
    "\u0005\u0018\r\u0002D\u0017\u0003\u0002\u0002\u0002EF\u0005\u001a\u000e",
    "\u0002F\u0019\u0003\u0002\u0002\u0002GH\u0005\u001c\u000f\u0002H\u001b",
    "\u0003\u0002\u0002\u0002IJ\u0005\u001e\u0010\u0002J\u001d\u0003\u0002",
    "\u0002\u0002KL\u0005 \u0011\u0002L\u001f\u0003\u0002\u0002\u0002MT\u0007",
    "\u0018\u0002\u0002NT\u0007\u0019\u0002\u0002OT\u0007\u0003\u0002\u0002",
    "PT\u0005\"\u0012\u0002QT\u0007\u001a\u0002\u0002RT\u0007\u0014\u0002",
    "\u0002SM\u0003\u0002\u0002\u0002SN\u0003\u0002\u0002\u0002SO\u0003\u0002",
    "\u0002\u0002SP\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002SR\u0003",
    "\u0002\u0002\u0002T!\u0003\u0002\u0002\u0002UV\u00073\u0002\u0002VW",
    "\u0005$\u0013\u0002W#\u0003\u0002\u0002\u0002XY\u0007\u001a\u0002\u0002",
    "Y%\u0003\u0002\u0002\u0002Z[\t\u0002\u0002\u0002[\'\u0003\u0002\u0002",
    "\u0002\u0004<S"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'for'", "'return'", "'in'", "'if'", "'then'", 
                     "'else'", "'some'", "'every'", "'satisfies'", "'instance'", 
                     "'of'", "'function'", "'external'", "'or'", "'and'", 
                     "'between'", "'null'", "'true'", "'false'", "'''", 
                     null, null, null, "'('", "')'", "'{'", "'}'", "'['", 
                     "']'", "','", "'..'", "'.'", "'='", "'>'", "'<'", "'<='", 
                     "'>='", "'!='", "':'", "'->'", "'**'", "'+'", "'-'", 
                     "'*'", "'/'", "'!'", "'not'", "'@'" ];

var symbolicNames = [ null, "BooleanLiteral", "FOR", "RETURN", "IN", "IF", 
                      "THEN", "ELSE", "SOME", "EVERY", "SATISFIES", "INSTANCE", 
                      "OF", "FUNCTION", "EXTERNAL", "OR", "AND", "BETWEEN", 
                      "NULL", "TRUE", "FALSE", "QUOTE", "IntegerLiteral", 
                      "FloatingPointLiteral", "StringLiteral", "LPAREN", 
                      "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
                      "COMMA", "ELIPSIS", "DOT", "EQUAL", "GT", "LT", "LE", 
                      "GE", "NOTEQUAL", "COLON", "RARROW", "POW", "ADD", 
                      "SUB", "MUL", "DIV", "BANG", "NOT", "AT", "Identifier", 
                      "WS", "COMMENT", "LINE_COMMENT", "ANY_OTHER_CHAR" ];

var ruleNames =  [ "compilation_unit", "expression", "textualExpression", 
                   "conditionalOrExpression", "conditionalAndExpression", 
                   "comparisonExpression", "relationalExpression", "expressionList", 
                   "additiveExpression", "multiplicativeExpression", "powerExpression", 
                   "filterPathExpression", "unaryExpression", "unaryExpressionNotPlusMinus", 
                   "primary", "literal", "atLiteral", "atLiteralValue", 
                   "reusableKeywords" ];

function FEEL_1_1Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FEEL_1_1Parser.prototype = Object.create(antlr4.Parser.prototype);
FEEL_1_1Parser.prototype.constructor = FEEL_1_1Parser;

Object.defineProperty(FEEL_1_1Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FEEL_1_1Parser.EOF = antlr4.Token.EOF;
FEEL_1_1Parser.BooleanLiteral = 1;
FEEL_1_1Parser.FOR = 2;
FEEL_1_1Parser.RETURN = 3;
FEEL_1_1Parser.IN = 4;
FEEL_1_1Parser.IF = 5;
FEEL_1_1Parser.THEN = 6;
FEEL_1_1Parser.ELSE = 7;
FEEL_1_1Parser.SOME = 8;
FEEL_1_1Parser.EVERY = 9;
FEEL_1_1Parser.SATISFIES = 10;
FEEL_1_1Parser.INSTANCE = 11;
FEEL_1_1Parser.OF = 12;
FEEL_1_1Parser.FUNCTION = 13;
FEEL_1_1Parser.EXTERNAL = 14;
FEEL_1_1Parser.OR = 15;
FEEL_1_1Parser.AND = 16;
FEEL_1_1Parser.BETWEEN = 17;
FEEL_1_1Parser.NULL = 18;
FEEL_1_1Parser.TRUE = 19;
FEEL_1_1Parser.FALSE = 20;
FEEL_1_1Parser.QUOTE = 21;
FEEL_1_1Parser.IntegerLiteral = 22;
FEEL_1_1Parser.FloatingPointLiteral = 23;
FEEL_1_1Parser.StringLiteral = 24;
FEEL_1_1Parser.LPAREN = 25;
FEEL_1_1Parser.RPAREN = 26;
FEEL_1_1Parser.LBRACE = 27;
FEEL_1_1Parser.RBRACE = 28;
FEEL_1_1Parser.LBRACK = 29;
FEEL_1_1Parser.RBRACK = 30;
FEEL_1_1Parser.COMMA = 31;
FEEL_1_1Parser.ELIPSIS = 32;
FEEL_1_1Parser.DOT = 33;
FEEL_1_1Parser.EQUAL = 34;
FEEL_1_1Parser.GT = 35;
FEEL_1_1Parser.LT = 36;
FEEL_1_1Parser.LE = 37;
FEEL_1_1Parser.GE = 38;
FEEL_1_1Parser.NOTEQUAL = 39;
FEEL_1_1Parser.COLON = 40;
FEEL_1_1Parser.RARROW = 41;
FEEL_1_1Parser.POW = 42;
FEEL_1_1Parser.ADD = 43;
FEEL_1_1Parser.SUB = 44;
FEEL_1_1Parser.MUL = 45;
FEEL_1_1Parser.DIV = 46;
FEEL_1_1Parser.BANG = 47;
FEEL_1_1Parser.NOT = 48;
FEEL_1_1Parser.AT = 49;
FEEL_1_1Parser.Identifier = 50;
FEEL_1_1Parser.WS = 51;
FEEL_1_1Parser.COMMENT = 52;
FEEL_1_1Parser.LINE_COMMENT = 53;
FEEL_1_1Parser.ANY_OTHER_CHAR = 54;

FEEL_1_1Parser.RULE_compilation_unit = 0;
FEEL_1_1Parser.RULE_expression = 1;
FEEL_1_1Parser.RULE_textualExpression = 2;
FEEL_1_1Parser.RULE_conditionalOrExpression = 3;
FEEL_1_1Parser.RULE_conditionalAndExpression = 4;
FEEL_1_1Parser.RULE_comparisonExpression = 5;
FEEL_1_1Parser.RULE_relationalExpression = 6;
FEEL_1_1Parser.RULE_expressionList = 7;
FEEL_1_1Parser.RULE_additiveExpression = 8;
FEEL_1_1Parser.RULE_multiplicativeExpression = 9;
FEEL_1_1Parser.RULE_powerExpression = 10;
FEEL_1_1Parser.RULE_filterPathExpression = 11;
FEEL_1_1Parser.RULE_unaryExpression = 12;
FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus = 13;
FEEL_1_1Parser.RULE_primary = 14;
FEEL_1_1Parser.RULE_literal = 15;
FEEL_1_1Parser.RULE_atLiteral = 16;
FEEL_1_1Parser.RULE_atLiteralValue = 17;
FEEL_1_1Parser.RULE_reusableKeywords = 18;


function Compilation_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_compilation_unit;
    return this;
}

Compilation_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compilation_unitContext.prototype.constructor = Compilation_unitContext;

Compilation_unitContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Compilation_unitContext.prototype.EOF = function() {
    return this.getToken(FEEL_1_1Parser.EOF, 0);
};

Compilation_unitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCompilation_unit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.Compilation_unitContext = Compilation_unitContext;

FEEL_1_1Parser.prototype.compilation_unit = function() {

    var localctx = new Compilation_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FEEL_1_1Parser.RULE_compilation_unit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.expression();
        this.state = 39;
        this.match(FEEL_1_1Parser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExpressionTextualContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.expr = null; // TextualExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionTextualContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionTextualContext.prototype.constructor = ExpressionTextualContext;

FEEL_1_1Parser.ExpressionTextualContext = ExpressionTextualContext;

ExpressionTextualContext.prototype.textualExpression = function() {
    return this.getTypedRuleContext(TextualExpressionContext,0);
};
ExpressionTextualContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitExpressionTextual(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.ExpressionContext = ExpressionContext;

FEEL_1_1Parser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FEEL_1_1Parser.RULE_expression);
    try {
        localctx = new ExpressionTextualContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        localctx.expr = this.textualExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TextualExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_textualExpression;
    return this;
}

TextualExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextualExpressionContext.prototype.constructor = TextualExpressionContext;

TextualExpressionContext.prototype.conditionalOrExpression = function() {
    return this.getTypedRuleContext(ConditionalOrExpressionContext,0);
};

TextualExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitTextualExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.TextualExpressionContext = TextualExpressionContext;

FEEL_1_1Parser.prototype.textualExpression = function() {

    var localctx = new TextualExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FEEL_1_1Parser.RULE_textualExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.conditionalOrExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionalOrExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_conditionalOrExpression;
    return this;
}

ConditionalOrExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalOrExpressionContext.prototype.constructor = ConditionalOrExpressionContext;


 
ConditionalOrExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondOrAndContext(parser, ctx) {
	ConditionalOrExpressionContext.call(this, parser);
    ConditionalOrExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondOrAndContext.prototype = Object.create(ConditionalOrExpressionContext.prototype);
CondOrAndContext.prototype.constructor = CondOrAndContext;

FEEL_1_1Parser.CondOrAndContext = CondOrAndContext;

CondOrAndContext.prototype.conditionalAndExpression = function() {
    return this.getTypedRuleContext(ConditionalAndExpressionContext,0);
};
CondOrAndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCondOrAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.ConditionalOrExpressionContext = ConditionalOrExpressionContext;

FEEL_1_1Parser.prototype.conditionalOrExpression = function() {

    var localctx = new ConditionalOrExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FEEL_1_1Parser.RULE_conditionalOrExpression);
    try {
        localctx = new CondOrAndContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.conditionalAndExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionalAndExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_conditionalAndExpression;
    return this;
}

ConditionalAndExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalAndExpressionContext.prototype.constructor = ConditionalAndExpressionContext;


 
ConditionalAndExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondAndCompContext(parser, ctx) {
	ConditionalAndExpressionContext.call(this, parser);
    ConditionalAndExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondAndCompContext.prototype = Object.create(ConditionalAndExpressionContext.prototype);
CondAndCompContext.prototype.constructor = CondAndCompContext;

FEEL_1_1Parser.CondAndCompContext = CondAndCompContext;

CondAndCompContext.prototype.comparisonExpression = function() {
    return this.getTypedRuleContext(ComparisonExpressionContext,0);
};
CondAndCompContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCondAndComp(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.ConditionalAndExpressionContext = ConditionalAndExpressionContext;

FEEL_1_1Parser.prototype.conditionalAndExpression = function() {

    var localctx = new ConditionalAndExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FEEL_1_1Parser.RULE_conditionalAndExpression);
    try {
        localctx = new CondAndCompContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.comparisonExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComparisonExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_comparisonExpression;
    return this;
}

ComparisonExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonExpressionContext.prototype.constructor = ComparisonExpressionContext;


 
ComparisonExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CompExpressionRelContext(parser, ctx) {
	ComparisonExpressionContext.call(this, parser);
    ComparisonExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompExpressionRelContext.prototype = Object.create(ComparisonExpressionContext.prototype);
CompExpressionRelContext.prototype.constructor = CompExpressionRelContext;

FEEL_1_1Parser.CompExpressionRelContext = CompExpressionRelContext;

CompExpressionRelContext.prototype.relationalExpression = function() {
    return this.getTypedRuleContext(RelationalExpressionContext,0);
};
CompExpressionRelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCompExpressionRel(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.ComparisonExpressionContext = ComparisonExpressionContext;

FEEL_1_1Parser.prototype.comparisonExpression = function() {

    var localctx = new ComparisonExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FEEL_1_1Parser.RULE_comparisonExpression);
    try {
        localctx = new CompExpressionRelContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.relationalExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelationalExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_relationalExpression;
    return this;
}

RelationalExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;


 
RelationalExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RelExpressionAddContext(parser, ctx) {
	RelationalExpressionContext.call(this, parser);
    RelationalExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelExpressionAddContext.prototype = Object.create(RelationalExpressionContext.prototype);
RelExpressionAddContext.prototype.constructor = RelExpressionAddContext;

FEEL_1_1Parser.RelExpressionAddContext = RelExpressionAddContext;

RelExpressionAddContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};
RelExpressionAddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitRelExpressionAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.RelationalExpressionContext = RelationalExpressionContext;

FEEL_1_1Parser.prototype.relationalExpression = function() {

    var localctx = new RelationalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FEEL_1_1Parser.RULE_relationalExpression);
    try {
        localctx = new RelExpressionAddContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.additiveExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.COMMA);
    } else {
        return this.getToken(FEEL_1_1Parser.COMMA, i);
    }
};


ExpressionListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitExpressionList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.ExpressionListContext = ExpressionListContext;

FEEL_1_1Parser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FEEL_1_1Parser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.expression();
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 54;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 55;
            this.expression();
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdditiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_additiveExpression;
    return this;
}

AdditiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;


 
AdditiveExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AddExpressionMultContext(parser, ctx) {
	AdditiveExpressionContext.call(this, parser);
    AdditiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionMultContext.prototype = Object.create(AdditiveExpressionContext.prototype);
AddExpressionMultContext.prototype.constructor = AddExpressionMultContext;

FEEL_1_1Parser.AddExpressionMultContext = AddExpressionMultContext;

AddExpressionMultContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};
AddExpressionMultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitAddExpressionMult(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.AdditiveExpressionContext = AdditiveExpressionContext;

FEEL_1_1Parser.prototype.additiveExpression = function() {

    var localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FEEL_1_1Parser.RULE_additiveExpression);
    try {
        localctx = new AddExpressionMultContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.multiplicativeExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplicativeExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_multiplicativeExpression;
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;


 
MultiplicativeExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MultExpressionPowContext(parser, ctx) {
	MultiplicativeExpressionContext.call(this, parser);
    MultiplicativeExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultExpressionPowContext.prototype = Object.create(MultiplicativeExpressionContext.prototype);
MultExpressionPowContext.prototype.constructor = MultExpressionPowContext;

FEEL_1_1Parser.MultExpressionPowContext = MultExpressionPowContext;

MultExpressionPowContext.prototype.powerExpression = function() {
    return this.getTypedRuleContext(PowerExpressionContext,0);
};
MultExpressionPowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitMultExpressionPow(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

FEEL_1_1Parser.prototype.multiplicativeExpression = function() {

    var localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FEEL_1_1Parser.RULE_multiplicativeExpression);
    try {
        localctx = new MultExpressionPowContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.powerExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PowerExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_powerExpression;
    return this;
}

PowerExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowerExpressionContext.prototype.constructor = PowerExpressionContext;


 
PowerExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PowExpressionUnaryContext(parser, ctx) {
	PowerExpressionContext.call(this, parser);
    PowerExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExpressionUnaryContext.prototype = Object.create(PowerExpressionContext.prototype);
PowExpressionUnaryContext.prototype.constructor = PowExpressionUnaryContext;

FEEL_1_1Parser.PowExpressionUnaryContext = PowExpressionUnaryContext;

PowExpressionUnaryContext.prototype.filterPathExpression = function() {
    return this.getTypedRuleContext(FilterPathExpressionContext,0);
};
PowExpressionUnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPowExpressionUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.PowerExpressionContext = PowerExpressionContext;

FEEL_1_1Parser.prototype.powerExpression = function() {

    var localctx = new PowerExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FEEL_1_1Parser.RULE_powerExpression);
    try {
        localctx = new PowExpressionUnaryContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.filterPathExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FilterPathExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_filterPathExpression;
    return this;
}

FilterPathExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FilterPathExpressionContext.prototype.constructor = FilterPathExpressionContext;

FilterPathExpressionContext.prototype.unaryExpression = function() {
    return this.getTypedRuleContext(UnaryExpressionContext,0);
};

FilterPathExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitFilterPathExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.FilterPathExpressionContext = FilterPathExpressionContext;

FEEL_1_1Parser.prototype.filterPathExpression = function() {

    var localctx = new FilterPathExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FEEL_1_1Parser.RULE_filterPathExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.unaryExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_unaryExpression;
    return this;
}

UnaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;


 
UnaryExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NonSignedUnaryExpressionContext(parser, ctx) {
	UnaryExpressionContext.call(this, parser);
    UnaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NonSignedUnaryExpressionContext.prototype = Object.create(UnaryExpressionContext.prototype);
NonSignedUnaryExpressionContext.prototype.constructor = NonSignedUnaryExpressionContext;

FEEL_1_1Parser.NonSignedUnaryExpressionContext = NonSignedUnaryExpressionContext;

NonSignedUnaryExpressionContext.prototype.unaryExpressionNotPlusMinus = function() {
    return this.getTypedRuleContext(UnaryExpressionNotPlusMinusContext,0);
};
NonSignedUnaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNonSignedUnaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.UnaryExpressionContext = UnaryExpressionContext;

FEEL_1_1Parser.prototype.unaryExpression = function() {

    var localctx = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FEEL_1_1Parser.RULE_unaryExpression);
    try {
        localctx = new NonSignedUnaryExpressionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.unaryExpressionNotPlusMinus();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryExpressionNotPlusMinusContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus;
    return this;
}

UnaryExpressionNotPlusMinusContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryExpressionNotPlusMinusContext.prototype.constructor = UnaryExpressionNotPlusMinusContext;

UnaryExpressionNotPlusMinusContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

UnaryExpressionNotPlusMinusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitUnaryExpressionNotPlusMinus(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.UnaryExpressionNotPlusMinusContext = UnaryExpressionNotPlusMinusContext;

FEEL_1_1Parser.prototype.unaryExpressionNotPlusMinus = function() {

    var localctx = new UnaryExpressionNotPlusMinusContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.primary();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;


 
PrimaryContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PrimaryLiteralContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryLiteralContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryLiteralContext.prototype.constructor = PrimaryLiteralContext;

FEEL_1_1Parser.PrimaryLiteralContext = PrimaryLiteralContext;

PrimaryLiteralContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
PrimaryLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.PrimaryContext = PrimaryContext;

FEEL_1_1Parser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FEEL_1_1Parser.RULE_primary);
    try {
        localctx = new PrimaryLiteralContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.literal();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;


 
LiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NullLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullLiteralContext.prototype = Object.create(LiteralContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;

FEEL_1_1Parser.NullLiteralContext = NullLiteralContext;

NullLiteralContext.prototype.NULL = function() {
    return this.getToken(FEEL_1_1Parser.NULL, 0);
};
NullLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNullLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringLiteralContext.prototype = Object.create(LiteralContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

FEEL_1_1Parser.StringLiteralContext = StringLiteralContext;

StringLiteralContext.prototype.StringLiteral = function() {
    return this.getToken(FEEL_1_1Parser.StringLiteral, 0);
};
StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtLiteralLabelContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtLiteralLabelContext.prototype = Object.create(LiteralContext.prototype);
AtLiteralLabelContext.prototype.constructor = AtLiteralLabelContext;

FEEL_1_1Parser.AtLiteralLabelContext = AtLiteralLabelContext;

AtLiteralLabelContext.prototype.atLiteral = function() {
    return this.getTypedRuleContext(AtLiteralContext,0);
};
AtLiteralLabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitAtLiteralLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolLiteralContext.prototype = Object.create(LiteralContext.prototype);
BoolLiteralContext.prototype.constructor = BoolLiteralContext;

FEEL_1_1Parser.BoolLiteralContext = BoolLiteralContext;

BoolLiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(FEEL_1_1Parser.BooleanLiteral, 0);
};
BoolLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitBoolLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberLiteralContext.prototype = Object.create(LiteralContext.prototype);
NumberLiteralContext.prototype.constructor = NumberLiteralContext;

FEEL_1_1Parser.NumberLiteralContext = NumberLiteralContext;

NumberLiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(FEEL_1_1Parser.IntegerLiteral, 0);
};

NumberLiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(FEEL_1_1Parser.FloatingPointLiteral, 0);
};
NumberLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNumberLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.LiteralContext = LiteralContext;

FEEL_1_1Parser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FEEL_1_1Parser.RULE_literal);
    try {
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.IntegerLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.match(FEEL_1_1Parser.IntegerLiteral);
            break;
        case FEEL_1_1Parser.FloatingPointLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
            this.match(FEEL_1_1Parser.FloatingPointLiteral);
            break;
        case FEEL_1_1Parser.BooleanLiteral:
            localctx = new BoolLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 77;
            this.match(FEEL_1_1Parser.BooleanLiteral);
            break;
        case FEEL_1_1Parser.AT:
            localctx = new AtLiteralLabelContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 78;
            this.atLiteral();
            break;
        case FEEL_1_1Parser.StringLiteral:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 79;
            this.match(FEEL_1_1Parser.StringLiteral);
            break;
        case FEEL_1_1Parser.NULL:
            localctx = new NullLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 80;
            this.match(FEEL_1_1Parser.NULL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_atLiteral;
    return this;
}

AtLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtLiteralContext.prototype.constructor = AtLiteralContext;

AtLiteralContext.prototype.AT = function() {
    return this.getToken(FEEL_1_1Parser.AT, 0);
};

AtLiteralContext.prototype.atLiteralValue = function() {
    return this.getTypedRuleContext(AtLiteralValueContext,0);
};

AtLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitAtLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.AtLiteralContext = AtLiteralContext;

FEEL_1_1Parser.prototype.atLiteral = function() {

    var localctx = new AtLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FEEL_1_1Parser.RULE_atLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(FEEL_1_1Parser.AT);
        this.state = 84;
        this.atLiteralValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtLiteralValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_atLiteralValue;
    return this;
}

AtLiteralValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtLiteralValueContext.prototype.constructor = AtLiteralValueContext;

AtLiteralValueContext.prototype.StringLiteral = function() {
    return this.getToken(FEEL_1_1Parser.StringLiteral, 0);
};

AtLiteralValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitAtLiteralValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.AtLiteralValueContext = AtLiteralValueContext;

FEEL_1_1Parser.prototype.atLiteralValue = function() {

    var localctx = new AtLiteralValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FEEL_1_1Parser.RULE_atLiteralValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(FEEL_1_1Parser.StringLiteral);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReusableKeywordsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_reusableKeywords;
    return this;
}

ReusableKeywordsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReusableKeywordsContext.prototype.constructor = ReusableKeywordsContext;

ReusableKeywordsContext.prototype.FOR = function() {
    return this.getToken(FEEL_1_1Parser.FOR, 0);
};

ReusableKeywordsContext.prototype.RETURN = function() {
    return this.getToken(FEEL_1_1Parser.RETURN, 0);
};

ReusableKeywordsContext.prototype.IF = function() {
    return this.getToken(FEEL_1_1Parser.IF, 0);
};

ReusableKeywordsContext.prototype.THEN = function() {
    return this.getToken(FEEL_1_1Parser.THEN, 0);
};

ReusableKeywordsContext.prototype.ELSE = function() {
    return this.getToken(FEEL_1_1Parser.ELSE, 0);
};

ReusableKeywordsContext.prototype.SOME = function() {
    return this.getToken(FEEL_1_1Parser.SOME, 0);
};

ReusableKeywordsContext.prototype.EVERY = function() {
    return this.getToken(FEEL_1_1Parser.EVERY, 0);
};

ReusableKeywordsContext.prototype.SATISFIES = function() {
    return this.getToken(FEEL_1_1Parser.SATISFIES, 0);
};

ReusableKeywordsContext.prototype.INSTANCE = function() {
    return this.getToken(FEEL_1_1Parser.INSTANCE, 0);
};

ReusableKeywordsContext.prototype.OF = function() {
    return this.getToken(FEEL_1_1Parser.OF, 0);
};

ReusableKeywordsContext.prototype.FUNCTION = function() {
    return this.getToken(FEEL_1_1Parser.FUNCTION, 0);
};

ReusableKeywordsContext.prototype.EXTERNAL = function() {
    return this.getToken(FEEL_1_1Parser.EXTERNAL, 0);
};

ReusableKeywordsContext.prototype.OR = function() {
    return this.getToken(FEEL_1_1Parser.OR, 0);
};

ReusableKeywordsContext.prototype.AND = function() {
    return this.getToken(FEEL_1_1Parser.AND, 0);
};

ReusableKeywordsContext.prototype.BETWEEN = function() {
    return this.getToken(FEEL_1_1Parser.BETWEEN, 0);
};

ReusableKeywordsContext.prototype.NOT = function() {
    return this.getToken(FEEL_1_1Parser.NOT, 0);
};

ReusableKeywordsContext.prototype.NULL = function() {
    return this.getToken(FEEL_1_1Parser.NULL, 0);
};

ReusableKeywordsContext.prototype.TRUE = function() {
    return this.getToken(FEEL_1_1Parser.TRUE, 0);
};

ReusableKeywordsContext.prototype.FALSE = function() {
    return this.getToken(FEEL_1_1Parser.FALSE, 0);
};

ReusableKeywordsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitReusableKeywords(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.ReusableKeywordsContext = ReusableKeywordsContext;

FEEL_1_1Parser.prototype.reusableKeywords = function() {

    var localctx = new ReusableKeywordsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FEEL_1_1Parser.RULE_reusableKeywords);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEEL_1_1Parser.FOR) | (1 << FEEL_1_1Parser.RETURN) | (1 << FEEL_1_1Parser.IF) | (1 << FEEL_1_1Parser.THEN) | (1 << FEEL_1_1Parser.ELSE) | (1 << FEEL_1_1Parser.SOME) | (1 << FEEL_1_1Parser.EVERY) | (1 << FEEL_1_1Parser.SATISFIES) | (1 << FEEL_1_1Parser.INSTANCE) | (1 << FEEL_1_1Parser.OF) | (1 << FEEL_1_1Parser.FUNCTION) | (1 << FEEL_1_1Parser.EXTERNAL) | (1 << FEEL_1_1Parser.OR) | (1 << FEEL_1_1Parser.AND) | (1 << FEEL_1_1Parser.BETWEEN) | (1 << FEEL_1_1Parser.NULL) | (1 << FEEL_1_1Parser.TRUE) | (1 << FEEL_1_1Parser.FALSE))) !== 0) || _la===FEEL_1_1Parser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.FEEL_1_1Parser = FEEL_1_1Parser;
