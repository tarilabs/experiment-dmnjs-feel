// Generated from FEEL_1_1.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FEEL_1_1Visitor = require('./FEEL_1_1Visitor').FEEL_1_1Visitor;

var grammarFileName = "FEEL_1_1.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u00eb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tI",
    "\n\t\f\t\u000e\tL\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0007\nW\n\n\f\n\u000e\nZ\u000b\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "i\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011q\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0097\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u009e",
    "\n\u0016\f\u0016\u000e\u0016\u00a1\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u00ad\n\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0005\u001a\u00e7\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0002\u0003\u0012\u001c\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.024\u0002\u0003\u0005\u0002\u0004",
    "\u0005\u0007\u001622\u0002\u00eb\u00026\u0003\u0002\u0002\u0002\u0004",
    "9\u0003\u0002\u0002\u0002\u0006;\u0003\u0002\u0002\u0002\b=\u0003\u0002",
    "\u0002\u0002\n?\u0003\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002\u000e",
    "C\u0003\u0002\u0002\u0002\u0010E\u0003\u0002\u0002\u0002\u0012M\u0003",
    "\u0002\u0002\u0002\u0014[\u0003\u0002\u0002\u0002\u0016]\u0003\u0002",
    "\u0002\u0002\u0018_\u0003\u0002\u0002\u0002\u001aa\u0003\u0002\u0002",
    "\u0002\u001cc\u0003\u0002\u0002\u0002\u001eh\u0003\u0002\u0002\u0002",
    " p\u0003\u0002\u0002\u0002\"r\u0003\u0002\u0002\u0002$u\u0003\u0002",
    "\u0002\u0002&\u0096\u0003\u0002\u0002\u0002(\u0098\u0003\u0002\u0002",
    "\u0002*\u009a\u0003\u0002\u0002\u0002,\u00a2\u0003\u0002\u0002\u0002",
    ".\u00ac\u0003\u0002\u0002\u00020\u00ae\u0003\u0002\u0002\u00022\u00e6",
    "\u0003\u0002\u0002\u00024\u00e8\u0003\u0002\u0002\u000267\u0005\u0004",
    "\u0003\u000278\u0007\u0002\u0002\u00038\u0003\u0003\u0002\u0002\u0002",
    "9:\u0005\u0006\u0004\u0002:\u0005\u0003\u0002\u0002\u0002;<\u0005\b",
    "\u0005\u0002<\u0007\u0003\u0002\u0002\u0002=>\u0005\n\u0006\u0002>\t",
    "\u0003\u0002\u0002\u0002?@\u0005\f\u0007\u0002@\u000b\u0003\u0002\u0002",
    "\u0002AB\u0005\u000e\b\u0002B\r\u0003\u0002\u0002\u0002CD\u0005\u0012",
    "\n\u0002D\u000f\u0003\u0002\u0002\u0002EJ\u0005\u0004\u0003\u0002FG",
    "\u0007!\u0002\u0002GI\u0005\u0004\u0003\u0002HF\u0003\u0002\u0002\u0002",
    "IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002K\u0011\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\b",
    "\n\u0001\u0002NO\u0005\u0014\u000b\u0002OX\u0003\u0002\u0002\u0002P",
    "Q\f\u0004\u0002\u0002QR\u0007-\u0002\u0002RW\u0005\u0014\u000b\u0002",
    "ST\f\u0003\u0002\u0002TU\u0007.\u0002\u0002UW\u0005\u0014\u000b\u0002",
    "VP\u0003\u0002\u0002\u0002VS\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002",
    "\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u0013\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0005\u0016\f\u0002",
    "\\\u0015\u0003\u0002\u0002\u0002]^\u0005\u0018\r\u0002^\u0017\u0003",
    "\u0002\u0002\u0002_`\u0005\u001a\u000e\u0002`\u0019\u0003\u0002\u0002",
    "\u0002ab\u0005\u001c\u000f\u0002b\u001b\u0003\u0002\u0002\u0002cd\u0005",
    "\u001e\u0010\u0002d\u001d\u0003\u0002\u0002\u0002ei\u0005 \u0011\u0002",
    "fi\u00052\u001a\u0002gi\u0005&\u0014\u0002he\u0003\u0002\u0002\u0002",
    "hf\u0003\u0002\u0002\u0002hg\u0003\u0002\u0002\u0002i\u001f\u0003\u0002",
    "\u0002\u0002jq\u0007\u0018\u0002\u0002kq\u0007\u0019\u0002\u0002lq\u0007",
    "\u0003\u0002\u0002mq\u0005\"\u0012\u0002nq\u0007\u001a\u0002\u0002o",
    "q\u0007\u0014\u0002\u0002pj\u0003\u0002\u0002\u0002pk\u0003\u0002\u0002",
    "\u0002pl\u0003\u0002\u0002\u0002pm\u0003\u0002\u0002\u0002pn\u0003\u0002",
    "\u0002\u0002po\u0003\u0002\u0002\u0002q!\u0003\u0002\u0002\u0002rs\u0007",
    "3\u0002\u0002st\u0005$\u0013\u0002t#\u0003\u0002\u0002\u0002uv\u0007",
    "\u001a\u0002\u0002v%\u0003\u0002\u0002\u0002wx\u0007&\u0002\u0002xy",
    "\b\u0014\u0001\u0002yz\u00050\u0019\u0002z{\b\u0014\u0001\u0002{\u0097",
    "\u0003\u0002\u0002\u0002|}\u0007%\u0002\u0002}~\b\u0014\u0001\u0002",
    "~\u007f\u00050\u0019\u0002\u007f\u0080\b\u0014\u0001\u0002\u0080\u0097",
    "\u0003\u0002\u0002\u0002\u0081\u0082\u0007\'\u0002\u0002\u0082\u0083",
    "\b\u0014\u0001\u0002\u0083\u0084\u00050\u0019\u0002\u0084\u0085\b\u0014",
    "\u0001\u0002\u0085\u0097\u0003\u0002\u0002\u0002\u0086\u0087\u0007(",
    "\u0002\u0002\u0087\u0088\b\u0014\u0001\u0002\u0088\u0089\u00050\u0019",
    "\u0002\u0089\u008a\b\u0014\u0001\u0002\u008a\u0097\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0007$\u0002\u0002\u008c\u008d\b\u0014\u0001\u0002",
    "\u008d\u008e\u00050\u0019\u0002\u008e\u008f\b\u0014\u0001\u0002\u008f",
    "\u0097\u0003\u0002\u0002\u0002\u0090\u0091\u0007)\u0002\u0002\u0091",
    "\u0092\b\u0014\u0001\u0002\u0092\u0093\u00050\u0019\u0002\u0093\u0094",
    "\b\u0014\u0001\u0002\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0097",
    "\u00052\u001a\u0002\u0096w\u0003\u0002\u0002\u0002\u0096|\u0003\u0002",
    "\u0002\u0002\u0096\u0081\u0003\u0002\u0002\u0002\u0096\u0086\u0003\u0002",
    "\u0002\u0002\u0096\u008b\u0003\u0002\u0002\u0002\u0096\u0090\u0003\u0002",
    "\u0002\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\'\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0005\u0004\u0003\u0002\u0099)\u0003\u0002",
    "\u0002\u0002\u009a\u009f\u0005(\u0015\u0002\u009b\u009c\u0007!\u0002",
    "\u0002\u009c\u009e\u0005(\u0015\u0002\u009d\u009b\u0003\u0002\u0002",
    "\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0+\u0003\u0002\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a3\u0005.\u0018",
    "\u0002\u00a3\u00a4\u0007\u0002\u0002\u0003\u00a4-\u0003\u0002\u0002",
    "\u0002\u00a5\u00a6\u00072\u0002\u0002\u00a6\u00a7\u0007\u001b\u0002",
    "\u0002\u00a7\u00a8\u0005*\u0016\u0002\u00a8\u00a9\u0007\u001c\u0002",
    "\u0002\u00a9\u00ad\u0003\u0002\u0002\u0002\u00aa\u00ad\u0005*\u0016",
    "\u0002\u00ab\u00ad\u0007.\u0002\u0002\u00ac\u00a5\u0003\u0002\u0002",
    "\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002",
    "\u0002\u00ad/\u0003\u0002\u0002\u0002\u00ae\u00af\u0005\u0012\n\u0002",
    "\u00af1\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007\u001b\u0002\u0002",
    "\u00b1\u00b2\u00050\u0019\u0002\u00b2\u00b3\u0007\"\u0002\u0002\u00b3",
    "\u00b4\u00050\u0019\u0002\u00b4\u00b5\u0007\u001c\u0002\u0002\u00b5",
    "\u00e7\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\u001b\u0002\u0002\u00b7",
    "\u00b8\u00050\u0019\u0002\u00b8\u00b9\u0007\"\u0002\u0002\u00b9\u00ba",
    "\u00050\u0019\u0002\u00ba\u00bb\u0007\u001f\u0002\u0002\u00bb\u00e7",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u001b\u0002\u0002\u00bd\u00be",
    "\u00050\u0019\u0002\u00be\u00bf\u0007\"\u0002\u0002\u00bf\u00c0\u0005",
    "0\u0019\u0002\u00c0\u00c1\u0007 \u0002\u0002\u00c1\u00e7\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0007 \u0002\u0002\u00c3\u00c4\u00050\u0019",
    "\u0002\u00c4\u00c5\u0007\"\u0002\u0002\u00c5\u00c6\u00050\u0019\u0002",
    "\u00c6\u00c7\u0007\u001c\u0002\u0002\u00c7\u00e7\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0007 \u0002\u0002\u00c9\u00ca\u00050\u0019\u0002\u00ca",
    "\u00cb\u0007\"\u0002\u0002\u00cb\u00cc\u00050\u0019\u0002\u00cc\u00cd",
    "\u0007\u001f\u0002\u0002\u00cd\u00e7\u0003\u0002\u0002\u0002\u00ce\u00cf",
    "\u0007 \u0002\u0002\u00cf\u00d0\u00050\u0019\u0002\u00d0\u00d1\u0007",
    "\"\u0002\u0002\u00d1\u00d2\u00050\u0019\u0002\u00d2\u00d3\u0007 \u0002",
    "\u0002\u00d3\u00e7\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007\u001f\u0002",
    "\u0002\u00d5\u00d6\u00050\u0019\u0002\u00d6\u00d7\u0007\"\u0002\u0002",
    "\u00d7\u00d8\u00050\u0019\u0002\u00d8\u00d9\u0007\u001c\u0002\u0002",
    "\u00d9\u00e7\u0003\u0002\u0002\u0002\u00da\u00db\u0007\u001f\u0002\u0002",
    "\u00db\u00dc\u00050\u0019\u0002\u00dc\u00dd\u0007\"\u0002\u0002\u00dd",
    "\u00de\u00050\u0019\u0002\u00de\u00df\u0007\u001f\u0002\u0002\u00df",
    "\u00e7\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007\u001f\u0002\u0002\u00e1",
    "\u00e2\u00050\u0019\u0002\u00e2\u00e3\u0007\"\u0002\u0002\u00e3\u00e4",
    "\u00050\u0019\u0002\u00e4\u00e5\u0007 \u0002\u0002\u00e5\u00e7\u0003",
    "\u0002\u0002\u0002\u00e6\u00b0\u0003\u0002\u0002\u0002\u00e6\u00b6\u0003",
    "\u0002\u0002\u0002\u00e6\u00bc\u0003\u0002\u0002\u0002\u00e6\u00c2\u0003",
    "\u0002\u0002\u0002\u00e6\u00c8\u0003\u0002\u0002\u0002\u00e6\u00ce\u0003",
    "\u0002\u0002\u0002\u00e6\u00d4\u0003\u0002\u0002\u0002\u00e6\u00da\u0003",
    "\u0002\u0002\u0002\u00e6\u00e0\u0003\u0002\u0002\u0002\u00e73\u0003",
    "\u0002\u0002\u0002\u00e8\u00e9\t\u0002\u0002\u0002\u00e95\u0003\u0002",
    "\u0002\u0002\u000bJVXhp\u0096\u009f\u00ac\u00e6"].join("");


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
                   "simplePositiveUnaryTest", "positiveUnaryTest", "positiveUnaryTests", 
                   "unaryTestsRoot", "unaryTests", "endpoint", "interval", 
                   "reusableKeywords" ];

function FEEL_1_1Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;


	this.helper = null;
	this.setHelper = function (helper) {
	    this.helper = helper;
	};
	this.getHelper = function () {
	    return this.helper;
	};


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
FEEL_1_1Parser.RULE_simplePositiveUnaryTest = 18;
FEEL_1_1Parser.RULE_positiveUnaryTest = 19;
FEEL_1_1Parser.RULE_positiveUnaryTests = 20;
FEEL_1_1Parser.RULE_unaryTestsRoot = 21;
FEEL_1_1Parser.RULE_unaryTests = 22;
FEEL_1_1Parser.RULE_endpoint = 23;
FEEL_1_1Parser.RULE_interval = 24;
FEEL_1_1Parser.RULE_reusableKeywords = 25;


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
        this.state = 52;
        this.expression();
        this.state = 53;
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
        this.state = 55;
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
        this.state = 57;
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
        this.state = 59;
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
        this.state = 61;
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
        this.state = 63;
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
        this.state = 65;
        this.additiveExpression(0);
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
        this.state = 67;
        this.expression();
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 68;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 69;
            this.expression();
            this.state = 74;
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


function AddExpressionContext(parser, ctx) {
	AdditiveExpressionContext.call(this, parser);
    this.op = null; // Token;
    AdditiveExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(AdditiveExpressionContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

FEEL_1_1Parser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

AddExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

AddExpressionContext.prototype.ADD = function() {
    return this.getToken(FEEL_1_1Parser.ADD, 0);
};

AddExpressionContext.prototype.SUB = function() {
    return this.getToken(FEEL_1_1Parser.SUB, 0);
};
AddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.prototype.additiveExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, FEEL_1_1Parser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new AddExpressionMultContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 76;
        this.multiplicativeExpression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 86;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 84;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_additiveExpression);
                    this.state = 78;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 79;
                    localctx.op = this.match(FEEL_1_1Parser.ADD);
                    this.state = 80;
                    this.multiplicativeExpression();
                    break;

                case 2:
                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_additiveExpression);
                    this.state = 81;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 82;
                    localctx.op = this.match(FEEL_1_1Parser.SUB);
                    this.state = 83;
                    this.multiplicativeExpression();
                    break;

                } 
            }
            this.state = 88;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
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
        this.state = 89;
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
        this.state = 91;
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
        this.state = 93;
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
        this.state = 95;
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
        this.state = 97;
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


function PrimaryIntervalContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryIntervalContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryIntervalContext.prototype.constructor = PrimaryIntervalContext;

FEEL_1_1Parser.PrimaryIntervalContext = PrimaryIntervalContext;

PrimaryIntervalContext.prototype.interval = function() {
    return this.getTypedRuleContext(IntervalContext,0);
};
PrimaryIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimaryUnaryTestContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryUnaryTestContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryUnaryTestContext.prototype.constructor = PrimaryUnaryTestContext;

FEEL_1_1Parser.PrimaryUnaryTestContext = PrimaryUnaryTestContext;

PrimaryUnaryTestContext.prototype.simplePositiveUnaryTest = function() {
    return this.getTypedRuleContext(SimplePositiveUnaryTestContext,0);
};
PrimaryUnaryTestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryUnaryTest(this);
    } else {
        return visitor.visitChildren(this);
    }
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
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrimaryLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.literal();
            break;

        case 2:
            localctx = new PrimaryIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.interval();
            break;

        case 3:
            localctx = new PrimaryUnaryTestContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 101;
            this.simplePositiveUnaryTest();
            break;

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
        this.state = 110;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.IntegerLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.match(FEEL_1_1Parser.IntegerLiteral);
            break;
        case FEEL_1_1Parser.FloatingPointLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.match(FEEL_1_1Parser.FloatingPointLiteral);
            break;
        case FEEL_1_1Parser.BooleanLiteral:
            localctx = new BoolLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 106;
            this.match(FEEL_1_1Parser.BooleanLiteral);
            break;
        case FEEL_1_1Parser.AT:
            localctx = new AtLiteralLabelContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 107;
            this.atLiteral();
            break;
        case FEEL_1_1Parser.StringLiteral:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 108;
            this.match(FEEL_1_1Parser.StringLiteral);
            break;
        case FEEL_1_1Parser.NULL:
            localctx = new NullLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 109;
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
        this.state = 112;
        this.match(FEEL_1_1Parser.AT);
        this.state = 113;
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
        this.state = 115;
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


function SimplePositiveUnaryTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_simplePositiveUnaryTest;
    return this;
}

SimplePositiveUnaryTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimplePositiveUnaryTestContext.prototype.constructor = SimplePositiveUnaryTestContext;


 
SimplePositiveUnaryTestContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PositiveUnaryTestIntervalContext(parser, ctx) {
	SimplePositiveUnaryTestContext.call(this, parser);
    SimplePositiveUnaryTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PositiveUnaryTestIntervalContext.prototype = Object.create(SimplePositiveUnaryTestContext.prototype);
PositiveUnaryTestIntervalContext.prototype.constructor = PositiveUnaryTestIntervalContext;

FEEL_1_1Parser.PositiveUnaryTestIntervalContext = PositiveUnaryTestIntervalContext;

PositiveUnaryTestIntervalContext.prototype.interval = function() {
    return this.getTypedRuleContext(IntervalContext,0);
};
PositiveUnaryTestIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveUnaryTestInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PositiveUnaryTestIneqContext(parser, ctx) {
	SimplePositiveUnaryTestContext.call(this, parser);
    this.op = null; // Token;
    SimplePositiveUnaryTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PositiveUnaryTestIneqContext.prototype = Object.create(SimplePositiveUnaryTestContext.prototype);
PositiveUnaryTestIneqContext.prototype.constructor = PositiveUnaryTestIneqContext;

FEEL_1_1Parser.PositiveUnaryTestIneqContext = PositiveUnaryTestIneqContext;

PositiveUnaryTestIneqContext.prototype.endpoint = function() {
    return this.getTypedRuleContext(EndpointContext,0);
};

PositiveUnaryTestIneqContext.prototype.EQUAL = function() {
    return this.getToken(FEEL_1_1Parser.EQUAL, 0);
};

PositiveUnaryTestIneqContext.prototype.NOTEQUAL = function() {
    return this.getToken(FEEL_1_1Parser.NOTEQUAL, 0);
};
PositiveUnaryTestIneqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveUnaryTestIneq(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PositiveUnaryTestIneqIntervalContext(parser, ctx) {
	SimplePositiveUnaryTestContext.call(this, parser);
    this.op = null; // Token;
    SimplePositiveUnaryTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PositiveUnaryTestIneqIntervalContext.prototype = Object.create(SimplePositiveUnaryTestContext.prototype);
PositiveUnaryTestIneqIntervalContext.prototype.constructor = PositiveUnaryTestIneqIntervalContext;

FEEL_1_1Parser.PositiveUnaryTestIneqIntervalContext = PositiveUnaryTestIneqIntervalContext;

PositiveUnaryTestIneqIntervalContext.prototype.endpoint = function() {
    return this.getTypedRuleContext(EndpointContext,0);
};

PositiveUnaryTestIneqIntervalContext.prototype.LT = function() {
    return this.getToken(FEEL_1_1Parser.LT, 0);
};

PositiveUnaryTestIneqIntervalContext.prototype.GT = function() {
    return this.getToken(FEEL_1_1Parser.GT, 0);
};

PositiveUnaryTestIneqIntervalContext.prototype.LE = function() {
    return this.getToken(FEEL_1_1Parser.LE, 0);
};

PositiveUnaryTestIneqIntervalContext.prototype.GE = function() {
    return this.getToken(FEEL_1_1Parser.GE, 0);
};
PositiveUnaryTestIneqIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveUnaryTestIneqInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.SimplePositiveUnaryTestContext = SimplePositiveUnaryTestContext;

FEEL_1_1Parser.prototype.simplePositiveUnaryTest = function() {

    var localctx = new SimplePositiveUnaryTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FEEL_1_1Parser.RULE_simplePositiveUnaryTest);
    try {
        this.state = 148;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.LT:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 117;
            localctx.op = this.match(FEEL_1_1Parser.LT);
            this.helper.enableDynamicResolution();
            this.state = 119;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.GT:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            localctx.op = this.match(FEEL_1_1Parser.GT);
            this.helper.enableDynamicResolution();
            this.state = 124;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.LE:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 127;
            localctx.op = this.match(FEEL_1_1Parser.LE);
            this.helper.enableDynamicResolution();
            this.state = 129;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.GE:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 132;
            localctx.op = this.match(FEEL_1_1Parser.GE);
            this.helper.enableDynamicResolution();
            this.state = 134;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.EQUAL:
            localctx = new PositiveUnaryTestIneqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 137;
            localctx.op = this.match(FEEL_1_1Parser.EQUAL);
            this.helper.enableDynamicResolution();
            this.state = 139;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.NOTEQUAL:
            localctx = new PositiveUnaryTestIneqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 142;
            localctx.op = this.match(FEEL_1_1Parser.NOTEQUAL);
            this.helper.enableDynamicResolution();
            this.state = 144;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.LPAREN:
        case FEEL_1_1Parser.LBRACK:
        case FEEL_1_1Parser.RBRACK:
            localctx = new PositiveUnaryTestIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 147;
            this.interval();
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


function PositiveUnaryTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_positiveUnaryTest;
    return this;
}

PositiveUnaryTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PositiveUnaryTestContext.prototype.constructor = PositiveUnaryTestContext;

PositiveUnaryTestContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PositiveUnaryTestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveUnaryTest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.PositiveUnaryTestContext = PositiveUnaryTestContext;

FEEL_1_1Parser.prototype.positiveUnaryTest = function() {

    var localctx = new PositiveUnaryTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FEEL_1_1Parser.RULE_positiveUnaryTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.expression();
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


function PositiveUnaryTestsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_positiveUnaryTests;
    return this;
}

PositiveUnaryTestsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PositiveUnaryTestsContext.prototype.constructor = PositiveUnaryTestsContext;

PositiveUnaryTestsContext.prototype.positiveUnaryTest = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PositiveUnaryTestContext);
    } else {
        return this.getTypedRuleContext(PositiveUnaryTestContext,i);
    }
};

PositiveUnaryTestsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.COMMA);
    } else {
        return this.getToken(FEEL_1_1Parser.COMMA, i);
    }
};


PositiveUnaryTestsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveUnaryTests(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.PositiveUnaryTestsContext = PositiveUnaryTestsContext;

FEEL_1_1Parser.prototype.positiveUnaryTests = function() {

    var localctx = new PositiveUnaryTestsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FEEL_1_1Parser.RULE_positiveUnaryTests);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.positiveUnaryTest();
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 153;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 154;
            this.positiveUnaryTest();
            this.state = 159;
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


function UnaryTestsRootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_unaryTestsRoot;
    return this;
}

UnaryTestsRootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryTestsRootContext.prototype.constructor = UnaryTestsRootContext;

UnaryTestsRootContext.prototype.unaryTests = function() {
    return this.getTypedRuleContext(UnaryTestsContext,0);
};

UnaryTestsRootContext.prototype.EOF = function() {
    return this.getToken(FEEL_1_1Parser.EOF, 0);
};

UnaryTestsRootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitUnaryTestsRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.UnaryTestsRootContext = UnaryTestsRootContext;

FEEL_1_1Parser.prototype.unaryTestsRoot = function() {

    var localctx = new UnaryTestsRootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FEEL_1_1Parser.RULE_unaryTestsRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.unaryTests();
        this.state = 161;
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


function UnaryTestsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_unaryTests;
    return this;
}

UnaryTestsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryTestsContext.prototype.constructor = UnaryTestsContext;


 
UnaryTestsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function UnaryTests_emptyContext(parser, ctx) {
	UnaryTestsContext.call(this, parser);
    UnaryTestsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryTests_emptyContext.prototype = Object.create(UnaryTestsContext.prototype);
UnaryTests_emptyContext.prototype.constructor = UnaryTests_emptyContext;

FEEL_1_1Parser.UnaryTests_emptyContext = UnaryTests_emptyContext;

UnaryTests_emptyContext.prototype.SUB = function() {
    return this.getToken(FEEL_1_1Parser.SUB, 0);
};
UnaryTests_emptyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitUnaryTests_empty(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryTests_positiveContext(parser, ctx) {
	UnaryTestsContext.call(this, parser);
    UnaryTestsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryTests_positiveContext.prototype = Object.create(UnaryTestsContext.prototype);
UnaryTests_positiveContext.prototype.constructor = UnaryTests_positiveContext;

FEEL_1_1Parser.UnaryTests_positiveContext = UnaryTests_positiveContext;

UnaryTests_positiveContext.prototype.positiveUnaryTests = function() {
    return this.getTypedRuleContext(PositiveUnaryTestsContext,0);
};
UnaryTests_positiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitUnaryTests_positive(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryTests_negatedContext(parser, ctx) {
	UnaryTestsContext.call(this, parser);
    UnaryTestsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryTests_negatedContext.prototype = Object.create(UnaryTestsContext.prototype);
UnaryTests_negatedContext.prototype.constructor = UnaryTests_negatedContext;

FEEL_1_1Parser.UnaryTests_negatedContext = UnaryTests_negatedContext;

UnaryTests_negatedContext.prototype.NOT = function() {
    return this.getToken(FEEL_1_1Parser.NOT, 0);
};

UnaryTests_negatedContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

UnaryTests_negatedContext.prototype.positiveUnaryTests = function() {
    return this.getTypedRuleContext(PositiveUnaryTestsContext,0);
};

UnaryTests_negatedContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};
UnaryTests_negatedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitUnaryTests_negated(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.UnaryTestsContext = UnaryTestsContext;

FEEL_1_1Parser.prototype.unaryTests = function() {

    var localctx = new UnaryTestsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FEEL_1_1Parser.RULE_unaryTests);
    try {
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.NOT:
            localctx = new UnaryTests_negatedContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 163;
            this.match(FEEL_1_1Parser.NOT);
            this.state = 164;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 165;
            this.positiveUnaryTests();
            this.state = 166;
            this.match(FEEL_1_1Parser.RPAREN);
            break;
        case FEEL_1_1Parser.BooleanLiteral:
        case FEEL_1_1Parser.NULL:
        case FEEL_1_1Parser.IntegerLiteral:
        case FEEL_1_1Parser.FloatingPointLiteral:
        case FEEL_1_1Parser.StringLiteral:
        case FEEL_1_1Parser.LPAREN:
        case FEEL_1_1Parser.LBRACK:
        case FEEL_1_1Parser.RBRACK:
        case FEEL_1_1Parser.EQUAL:
        case FEEL_1_1Parser.GT:
        case FEEL_1_1Parser.LT:
        case FEEL_1_1Parser.LE:
        case FEEL_1_1Parser.GE:
        case FEEL_1_1Parser.NOTEQUAL:
        case FEEL_1_1Parser.AT:
            localctx = new UnaryTests_positiveContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
            this.positiveUnaryTests();
            break;
        case FEEL_1_1Parser.SUB:
            localctx = new UnaryTests_emptyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 169;
            this.match(FEEL_1_1Parser.SUB);
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


function EndpointContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_endpoint;
    return this;
}

EndpointContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndpointContext.prototype.constructor = EndpointContext;

EndpointContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

EndpointContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitEndpoint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.EndpointContext = EndpointContext;

FEEL_1_1Parser.prototype.endpoint = function() {

    var localctx = new EndpointContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, FEEL_1_1Parser.RULE_endpoint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.additiveExpression(0);
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


function IntervalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_interval;
    this.low = null; // Token
    this.start = null; // EndpointContext
    this.end = null; // EndpointContext
    this.up = null; // Token
    return this;
}

IntervalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalContext.prototype.constructor = IntervalContext;

IntervalContext.prototype.ELIPSIS = function() {
    return this.getToken(FEEL_1_1Parser.ELIPSIS, 0);
};

IntervalContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

IntervalContext.prototype.endpoint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EndpointContext);
    } else {
        return this.getTypedRuleContext(EndpointContext,i);
    }
};

IntervalContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};

IntervalContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.LBRACK);
    } else {
        return this.getToken(FEEL_1_1Parser.LBRACK, i);
    }
};


IntervalContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.RBRACK);
    } else {
        return this.getToken(FEEL_1_1Parser.RBRACK, i);
    }
};


IntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.IntervalContext = IntervalContext;

FEEL_1_1Parser.prototype.interval = function() {

    var localctx = new IntervalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FEEL_1_1Parser.RULE_interval);
    try {
        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 175;
            localctx.start = this.endpoint();
            this.state = 176;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 177;
            localctx.end = this.endpoint();
            this.state = 178;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 181;
            localctx.start = this.endpoint();
            this.state = 182;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 183;
            localctx.end = this.endpoint();
            this.state = 184;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 186;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 187;
            localctx.start = this.endpoint();
            this.state = 188;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 189;
            localctx.end = this.endpoint();
            this.state = 190;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 192;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 193;
            localctx.start = this.endpoint();
            this.state = 194;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 195;
            localctx.end = this.endpoint();
            this.state = 196;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 198;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 199;
            localctx.start = this.endpoint();
            this.state = 200;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 201;
            localctx.end = this.endpoint();
            this.state = 202;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 204;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 205;
            localctx.start = this.endpoint();
            this.state = 206;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 207;
            localctx.end = this.endpoint();
            this.state = 208;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 210;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 211;
            localctx.start = this.endpoint();
            this.state = 212;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 213;
            localctx.end = this.endpoint();
            this.state = 214;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 216;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 217;
            localctx.start = this.endpoint();
            this.state = 218;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 219;
            localctx.end = this.endpoint();
            this.state = 220;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 222;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 223;
            localctx.start = this.endpoint();
            this.state = 224;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 225;
            localctx.end = this.endpoint();
            this.state = 226;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

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
    this.enterRule(localctx, 50, FEEL_1_1Parser.RULE_reusableKeywords);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
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


FEEL_1_1Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.additiveExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FEEL_1_1Parser.prototype.additiveExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FEEL_1_1Parser = FEEL_1_1Parser;
