// Generated from FEEL_1_1.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FEEL_1_1Visitor = require('./FEEL_1_1Visitor').FEEL_1_1Visitor;

var grammarFileName = "FEEL_1_1.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u0229\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005r\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006w\n\u0006\f\u0006\u000e\u0006z\u000b",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u0083\n\b\f\b\u000e\b\u0086\u000b\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u0092\n\n\f\n\u000e\n\u0095\u000b\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a2\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00b9\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c1\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u00d0\n\u0011\f\u0011\u000e\u0011\u00d3\u000b\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00de\n\u0013\f\u0013\u000e",
    "\u0013\u00e1\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00eb\n",
    "\u0015\f\u0015\u000e\u0015\u00ee\u000b\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00f6\n",
    "\u0016\f\u0016\u000e\u0016\u00f9\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0101\n",
    "\u0017\f\u0017\u000e\u0017\u0104\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0118\n",
    "\u0018\f\u0018\u000e\u0018\u011b\u000b\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0007\u0019\u0120\n\u0019\f\u0019\u000e\u0019\u0123\u000b",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u012e\n\u001a",
    "\f\u001a\u000e\u001a\u0131\u000b\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0139\n\u001b",
    "\f\u001b\u000e\u001b\u013c\u000b\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u0144\n\u001c",
    "\f\u001c\u000e\u001c\u0147\u000b\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0007\u001d\u0159\n\u001d\f\u001d\u000e\u001d\u015c",
    "\u000b\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0005\u001e\u0164\n\u001e\u0003\u001e\u0003\u001e\u0007",
    "\u001e\u0168\n\u001e\f\u001e\u000e\u001e\u016b\u000b\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0005 \u017b\n \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0005!\u0183\n!\u0003\"\u0003\"\u0003\"\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0005$\u01a9\n$\u0003%\u0003%\u0003%\u0007%\u01ae\n%\f%\u000e",
    "%\u01b1\u000b%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0005",
    "&\u01ba\n&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0007(\u01c1\n(\f(\u000e",
    "(\u01c4\u000b(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0005*\u01d0\n*\u0003+\u0003+\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0005,\u020a\n,\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0007",
    "-\u0213\n-\f-\u000e-\u0216\u000b-\u0003.\u0003.\u0003.\u0003.\u0005",
    ".\u021c\n.\u0003.\u0007.\u021f\n.\f.\u000e.\u0222\u000b.\u0003/\u0003",
    "/\u0003/\u00030\u00030\u00030\u0002\u000b(*,.2468:1\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDFHJLNPRTVXZ\\^\u0002\u0007\u0005\u0002\u0017\u0017##-0",
    "\u0003\u0002$)\u0003\u0002/0\u0005\u0002\u001b!$&11\u0005\u0002\u0004",
    "\u0005\u0007\u001622\u0002\u0240\u0002`\u0003\u0002\u0002\u0002\u0004",
    "c\u0003\u0002\u0002\u0002\u0006e\u0003\u0002\u0002\u0002\bq\u0003\u0002",
    "\u0002\u0002\ns\u0003\u0002\u0002\u0002\f{\u0003\u0002\u0002\u0002\u000e",
    "\u007f\u0003\u0002\u0002\u0002\u0010\u0087\u0003\u0002\u0002\u0002\u0012",
    "\u008e\u0003\u0002\u0002\u0002\u0014\u00a1\u0003\u0002\u0002\u0002\u0016",
    "\u00a3\u0003\u0002\u0002\u0002\u0018\u00b8\u0003\u0002\u0002\u0002\u001a",
    "\u00c0\u0003\u0002\u0002\u0002\u001c\u00c2\u0003\u0002\u0002\u0002\u001e",
    "\u00c5\u0003\u0002\u0002\u0002 \u00c8\u0003\u0002\u0002\u0002\"\u00d4",
    "\u0003\u0002\u0002\u0002$\u00d7\u0003\u0002\u0002\u0002&\u00e2\u0003",
    "\u0002\u0002\u0002(\u00e4\u0003\u0002\u0002\u0002*\u00ef\u0003\u0002",
    "\u0002\u0002,\u00fa\u0003\u0002\u0002\u0002.\u0105\u0003\u0002\u0002",
    "\u00020\u011c\u0003\u0002\u0002\u00022\u0124\u0003\u0002\u0002\u0002",
    "4\u0132\u0003\u0002\u0002\u00026\u013d\u0003\u0002\u0002\u00028\u0148",
    "\u0003\u0002\u0002\u0002:\u0163\u0003\u0002\u0002\u0002<\u016c\u0003",
    "\u0002\u0002\u0002>\u017a\u0003\u0002\u0002\u0002@\u0182\u0003\u0002",
    "\u0002\u0002B\u0184\u0003\u0002\u0002\u0002D\u0187\u0003\u0002\u0002",
    "\u0002F\u01a8\u0003\u0002\u0002\u0002H\u01aa\u0003\u0002\u0002\u0002",
    "J\u01b9\u0003\u0002\u0002\u0002L\u01bb\u0003\u0002\u0002\u0002N\u01bd",
    "\u0003\u0002\u0002\u0002P\u01c5\u0003\u0002\u0002\u0002R\u01cf\u0003",
    "\u0002\u0002\u0002T\u01d1\u0003\u0002\u0002\u0002V\u0209\u0003\u0002",
    "\u0002\u0002X\u020b\u0003\u0002\u0002\u0002Z\u021b\u0003\u0002\u0002",
    "\u0002\\\u0223\u0003\u0002\u0002\u0002^\u0226\u0003\u0002\u0002\u0002",
    "`a\u0005\u0004\u0003\u0002ab\u0007\u0002\u0002\u0003b\u0003\u0003\u0002",
    "\u0002\u0002cd\u0005\u0006\u0004\u0002d\u0005\u0003\u0002\u0002\u0002",
    "ef\u0005(\u0015\u0002f\u0007\u0003\u0002\u0002\u0002gh\u0007\u001b\u0002",
    "\u0002hr\u0007\u001c\u0002\u0002ij\u0007\u001b\u0002\u0002jk\u0005\n",
    "\u0006\u0002kl\u0007\u001c\u0002\u0002lr\u0003\u0002\u0002\u0002mn\u0007",
    "\u001b\u0002\u0002no\u0005\u000e\b\u0002op\u0007\u001c\u0002\u0002p",
    "r\u0003\u0002\u0002\u0002qg\u0003\u0002\u0002\u0002qi\u0003\u0002\u0002",
    "\u0002qm\u0003\u0002\u0002\u0002r\t\u0003\u0002\u0002\u0002sx\u0005",
    "\f\u0007\u0002tu\u0007!\u0002\u0002uw\u0005\f\u0007\u0002vt\u0003\u0002",
    "\u0002\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002y\u000b\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002",
    "\u0002{|\u0005\u001c\u000f\u0002|}\u0007*\u0002\u0002}~\u0005\u0004",
    "\u0003\u0002~\r\u0003\u0002\u0002\u0002\u007f\u0084\u0005\u0004\u0003",
    "\u0002\u0080\u0081\u0007!\u0002\u0002\u0081\u0083\u0005\u0004\u0003",
    "\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002",
    "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u000f\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0007\u0004\u0002\u0002\u0088\u0089\u0005\u0012\n",
    "\u0002\u0089\u008a\u0007\u0005\u0002\u0002\u008a\u008b\b\t\u0001\u0002",
    "\u008b\u008c\u0005\u0004\u0003\u0002\u008c\u008d\b\t\u0001\u0002\u008d",
    "\u0011\u0003\u0002\u0002\u0002\u008e\u0093\u0005\u0014\u000b\u0002\u008f",
    "\u0090\u0007!\u0002\u0002\u0090\u0092\u0005\u0014\u000b\u0002\u0091",
    "\u008f\u0003\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093",
    "\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094",
    "\u0013\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0006\u000b\u0002\u0002\u0097\u0098\u0005\"\u0012\u0002\u0098",
    "\u0099\u0007\u0006\u0002\u0002\u0099\u009a\u0005\u0004\u0003\u0002\u009a",
    "\u009b\u0007\"\u0002\u0002\u009b\u009c\u0005\u0004\u0003\u0002\u009c",
    "\u00a2\u0003\u0002\u0002\u0002\u009d\u009e\u0005\"\u0012\u0002\u009e",
    "\u009f\u0007\u0006\u0002\u0002\u009f\u00a0\u0005\u0004\u0003\u0002\u00a0",
    "\u00a2\u0003\u0002\u0002\u0002\u00a1\u0096\u0003\u0002\u0002\u0002\u00a1",
    "\u009d\u0003\u0002\u0002\u0002\u00a2\u0015\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0007\u0007\u0002\u0002\u00a4\u00a5\u0005\u0004\u0003\u0002\u00a5",
    "\u00a6\u0007\b\u0002\u0002\u00a6\u00a7\u0005\u0004\u0003\u0002\u00a7",
    "\u00a8\u0007\t\u0002\u0002\u00a8\u00a9\u0005\u0004\u0003\u0002\u00a9",
    "\u0017\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007\n\u0002\u0002\u00ab",
    "\u00ac\u0005\u0012\n\u0002\u00ac\u00ad\u0007\f\u0002\u0002\u00ad\u00ae",
    "\b\r\u0001\u0002\u00ae\u00af\u0005\u0004\u0003\u0002\u00af\u00b0\b\r",
    "\u0001\u0002\u00b0\u00b9\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\u000b",
    "\u0002\u0002\u00b2\u00b3\u0005\u0012\n\u0002\u00b3\u00b4\u0007\f\u0002",
    "\u0002\u00b4\u00b5\b\r\u0001\u0002\u00b5\u00b6\u0005\u0004\u0003\u0002",
    "\u00b6\u00b7\b\r\u0001\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002\u00b8",
    "\u00aa\u0003\u0002\u0002\u0002\u00b8\u00b1\u0003\u0002\u0002\u0002\u00b9",
    "\u0019\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u001f\u0002\u0002\u00bb",
    "\u00c1\u0007 \u0002\u0002\u00bc\u00bd\u0007\u001f\u0002\u0002\u00bd",
    "\u00be\u00050\u0019\u0002\u00be\u00bf\u0007 \u0002\u0002\u00bf\u00c1",
    "\u0003\u0002\u0002\u0002\u00c0\u00ba\u0003\u0002\u0002\u0002\u00c0\u00bc",
    "\u0003\u0002\u0002\u0002\u00c1\u001b\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0005 \u0011\u0002\u00c3\u00c4\b\u000f\u0001\u0002\u00c4\u001d\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\u0005\u001c\u000f\u0002\u00c6\u00c7\u0007",
    "\u0002\u0002\u0003\u00c7\u001f\u0003\u0002\u0002\u0002\u00c8\u00d1\u0007",
    "4\u0002\u0002\u00c9\u00d0\u00074\u0002\u0002\u00ca\u00d0\u0005&\u0014",
    "\u0002\u00cb\u00d0\u0007\u0018\u0002\u0002\u00cc\u00d0\u0007\u0019\u0002",
    "\u0002\u00cd\u00d0\u0005^0\u0002\u00ce\u00d0\u0007\u0006\u0002\u0002",
    "\u00cf\u00c9\u0003\u0002\u0002\u0002\u00cf\u00ca\u0003\u0002\u0002\u0002",
    "\u00cf\u00cb\u0003\u0002\u0002\u0002\u00cf\u00cc\u0003\u0002\u0002\u0002",
    "\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002",
    "\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2!\u0003\u0002\u0002\u0002",
    "\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d5\u0005$\u0013\u0002",
    "\u00d5\u00d6\b\u0012\u0001\u0002\u00d6#\u0003\u0002\u0002\u0002\u00d7",
    "\u00df\u00074\u0002\u0002\u00d8\u00de\u00074\u0002\u0002\u00d9\u00de",
    "\u0005&\u0014\u0002\u00da\u00de\u0007\u0018\u0002\u0002\u00db\u00de",
    "\u0007\u0019\u0002\u0002\u00dc\u00de\u0005^0\u0002\u00dd\u00d8\u0003",
    "\u0002\u0002\u0002\u00dd\u00d9\u0003\u0002\u0002\u0002\u00dd\u00da\u0003",
    "\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd\u00dc\u0003",
    "\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df\u00dd\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0%\u0003",
    "\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2\u00e3\t",
    "\u0002\u0002\u0002\u00e3\'\u0003\u0002\u0002\u0002\u00e4\u00e5\b\u0015",
    "\u0001\u0002\u00e5\u00e6\u0005*\u0016\u0002\u00e6\u00ec\u0003\u0002",
    "\u0002\u0002\u00e7\u00e8\f\u0003\u0002\u0002\u00e8\u00e9\u0007\u0011",
    "\u0002\u0002\u00e9\u00eb\u0005*\u0016\u0002\u00ea\u00e7\u0003\u0002",
    "\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed)\u0003\u0002",
    "\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0\b\u0016",
    "\u0001\u0002\u00f0\u00f1\u0005,\u0017\u0002\u00f1\u00f7\u0003\u0002",
    "\u0002\u0002\u00f2\u00f3\f\u0003\u0002\u0002\u00f3\u00f4\u0007\u0012",
    "\u0002\u0002\u00f4\u00f6\u0005,\u0017\u0002\u00f5\u00f2\u0003\u0002",
    "\u0002\u0002\u00f6\u00f9\u0003\u0002\u0002\u0002\u00f7\u00f5\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8+\u0003\u0002",
    "\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fb\b\u0017",
    "\u0001\u0002\u00fb\u00fc\u0005.\u0018\u0002\u00fc\u0102\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\f\u0003\u0002\u0002\u00fe\u00ff\t\u0003\u0002",
    "\u0002\u00ff\u0101\u0005.\u0018\u0002\u0100\u00fd\u0003\u0002\u0002",
    "\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103-\u0003\u0002\u0002",
    "\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0105\u0106\b\u0018\u0001",
    "\u0002\u0106\u0107\u00052\u001a\u0002\u0107\u0119\u0003\u0002\u0002",
    "\u0002\u0108\u0109\f\u0005\u0002\u0002\u0109\u010a\u0007\u0013\u0002",
    "\u0002\u010a\u010b\u00052\u001a\u0002\u010b\u010c\u0007\u0012\u0002",
    "\u0002\u010c\u010d\u00052\u001a\u0002\u010d\u0118\u0003\u0002\u0002",
    "\u0002\u010e\u010f\f\u0004\u0002\u0002\u010f\u0110\u0007\u0006\u0002",
    "\u0002\u0110\u0111\u0007\u001b\u0002\u0002\u0111\u0112\u0005N(\u0002",
    "\u0112\u0113\u0007\u001c\u0002\u0002\u0113\u0118\u0003\u0002\u0002\u0002",
    "\u0114\u0115\f\u0003\u0002\u0002\u0115\u0116\u0007\u0006\u0002\u0002",
    "\u0116\u0118\u0005\u0004\u0003\u0002\u0117\u0108\u0003\u0002\u0002\u0002",
    "\u0117\u010e\u0003\u0002\u0002\u0002\u0117\u0114\u0003\u0002\u0002\u0002",
    "\u0118\u011b\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002",
    "\u0119\u011a\u0003\u0002\u0002\u0002\u011a/\u0003\u0002\u0002\u0002",
    "\u011b\u0119\u0003\u0002\u0002\u0002\u011c\u0121\u0005\u0004\u0003\u0002",
    "\u011d\u011e\u0007!\u0002\u0002\u011e\u0120\u0005\u0004\u0003\u0002",
    "\u011f\u011d\u0003\u0002\u0002\u0002\u0120\u0123\u0003\u0002\u0002\u0002",
    "\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002",
    "\u01221\u0003\u0002\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002",
    "\u0124\u0125\b\u001a\u0001\u0002\u0125\u0126\u00054\u001b\u0002\u0126",
    "\u012f\u0003\u0002\u0002\u0002\u0127\u0128\f\u0004\u0002\u0002\u0128",
    "\u0129\u0007-\u0002\u0002\u0129\u012e\u00054\u001b\u0002\u012a\u012b",
    "\f\u0003\u0002\u0002\u012b\u012c\u0007.\u0002\u0002\u012c\u012e\u0005",
    "4\u001b\u0002\u012d\u0127\u0003\u0002\u0002\u0002\u012d\u012a\u0003",
    "\u0002\u0002\u0002\u012e\u0131\u0003\u0002\u0002\u0002\u012f\u012d\u0003",
    "\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u01303\u0003",
    "\u0002\u0002\u0002\u0131\u012f\u0003\u0002\u0002\u0002\u0132\u0133\b",
    "\u001b\u0001\u0002\u0133\u0134\u00056\u001c\u0002\u0134\u013a\u0003",
    "\u0002\u0002\u0002\u0135\u0136\f\u0003\u0002\u0002\u0136\u0137\t\u0004",
    "\u0002\u0002\u0137\u0139\u00056\u001c\u0002\u0138\u0135\u0003\u0002",
    "\u0002\u0002\u0139\u013c\u0003\u0002\u0002\u0002\u013a\u0138\u0003\u0002",
    "\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b5\u0003\u0002",
    "\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013d\u013e\b\u001c",
    "\u0001\u0002\u013e\u013f\u00058\u001d\u0002\u013f\u0145\u0003\u0002",
    "\u0002\u0002\u0140\u0141\f\u0003\u0002\u0002\u0141\u0142\u0007,\u0002",
    "\u0002\u0142\u0144\u00058\u001d\u0002\u0143\u0140\u0003\u0002\u0002",
    "\u0002\u0144\u0147\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002",
    "\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u01467\u0003\u0002\u0002",
    "\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0148\u0149\b\u001d\u0001",
    "\u0002\u0149\u014a\u0005:\u001e\u0002\u014a\u015a\u0003\u0002\u0002",
    "\u0002\u014b\u014c\f\u0004\u0002\u0002\u014c\u014d\u0007\u001f\u0002",
    "\u0002\u014d\u014e\b\u001d\u0001\u0002\u014e\u014f\u0005\u0004\u0003",
    "\u0002\u014f\u0150\b\u001d\u0001\u0002\u0150\u0151\u0007 \u0002\u0002",
    "\u0151\u0159\u0003\u0002\u0002\u0002\u0152\u0153\f\u0003\u0002\u0002",
    "\u0153\u0154\u0007#\u0002\u0002\u0154\u0155\b\u001d\u0001\u0002\u0155",
    "\u0156\u0005X-\u0002\u0156\u0157\b\u001d\u0001\u0002\u0157\u0159\u0003",
    "\u0002\u0002\u0002\u0158\u014b\u0003\u0002\u0002\u0002\u0158\u0152\u0003",
    "\u0002\u0002\u0002\u0159\u015c\u0003\u0002\u0002\u0002\u015a\u0158\u0003",
    "\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002\u015b9\u0003",
    "\u0002\u0002\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015d\u015e\b",
    "\u001e\u0001\u0002\u015e\u015f\u0007.\u0002\u0002\u015f\u0164\u0005",
    ":\u001e\u0006\u0160\u0164\u0005<\u001f\u0002\u0161\u0162\u0007-\u0002",
    "\u0002\u0162\u0164\u0005<\u001f\u0002\u0163\u015d\u0003\u0002\u0002",
    "\u0002\u0163\u0160\u0003\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002",
    "\u0002\u0164\u0169\u0003\u0002\u0002\u0002\u0165\u0166\f\u0003\u0002",
    "\u0002\u0166\u0168\u0005\b\u0005\u0002\u0167\u0165\u0003\u0002\u0002",
    "\u0002\u0168\u016b\u0003\u0002\u0002\u0002\u0169\u0167\u0003\u0002\u0002",
    "\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a;\u0003\u0002\u0002",
    "\u0002\u016b\u0169\u0003\u0002\u0002\u0002\u016c\u016d\u0005> \u0002",
    "\u016d=\u0003\u0002\u0002\u0002\u016e\u017b\u0005@!\u0002\u016f\u017b",
    "\u0005\u0010\t\u0002\u0170\u017b\u0005\u0018\r\u0002\u0171\u017b\u0005",
    "\u0016\f\u0002\u0172\u017b\u0005V,\u0002\u0173\u017b\u0005\u001a\u000e",
    "\u0002\u0174\u0175\u0007\u001b\u0002\u0002\u0175\u0176\u0005\u0004\u0003",
    "\u0002\u0176\u0177\u0007\u001c\u0002\u0002\u0177\u017b\u0003\u0002\u0002",
    "\u0002\u0178\u017b\u0005F$\u0002\u0179\u017b\u0005X-\u0002\u017a\u016e",
    "\u0003\u0002\u0002\u0002\u017a\u016f\u0003\u0002\u0002\u0002\u017a\u0170",
    "\u0003\u0002\u0002\u0002\u017a\u0171\u0003\u0002\u0002\u0002\u017a\u0172",
    "\u0003\u0002\u0002\u0002\u017a\u0173\u0003\u0002\u0002\u0002\u017a\u0174",
    "\u0003\u0002\u0002\u0002\u017a\u0178\u0003\u0002\u0002\u0002\u017a\u0179",
    "\u0003\u0002\u0002\u0002\u017b?\u0003\u0002\u0002\u0002\u017c\u0183",
    "\u0007\u0018\u0002\u0002\u017d\u0183\u0007\u0019\u0002\u0002\u017e\u0183",
    "\u0007\u0003\u0002\u0002\u017f\u0183\u0005B\"\u0002\u0180\u0183\u0007",
    "\u001a\u0002\u0002\u0181\u0183\u0007\u0014\u0002\u0002\u0182\u017c\u0003",
    "\u0002\u0002\u0002\u0182\u017d\u0003\u0002\u0002\u0002\u0182\u017e\u0003",
    "\u0002\u0002\u0002\u0182\u017f\u0003\u0002\u0002\u0002\u0182\u0180\u0003",
    "\u0002\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0183A\u0003",
    "\u0002\u0002\u0002\u0184\u0185\u00073\u0002\u0002\u0185\u0186\u0005",
    "D#\u0002\u0186C\u0003\u0002\u0002\u0002\u0187\u0188\u0007\u001a\u0002",
    "\u0002\u0188E\u0003\u0002\u0002\u0002\u0189\u018a\u0007&\u0002\u0002",
    "\u018a\u018b\b$\u0001\u0002\u018b\u018c\u0005T+\u0002\u018c\u018d\b",
    "$\u0001\u0002\u018d\u01a9\u0003\u0002\u0002\u0002\u018e\u018f\u0007",
    "%\u0002\u0002\u018f\u0190\b$\u0001\u0002\u0190\u0191\u0005T+\u0002\u0191",
    "\u0192\b$\u0001\u0002\u0192\u01a9\u0003\u0002\u0002\u0002\u0193\u0194",
    "\u0007\'\u0002\u0002\u0194\u0195\b$\u0001\u0002\u0195\u0196\u0005T+",
    "\u0002\u0196\u0197\b$\u0001\u0002\u0197\u01a9\u0003\u0002\u0002\u0002",
    "\u0198\u0199\u0007(\u0002\u0002\u0199\u019a\b$\u0001\u0002\u019a\u019b",
    "\u0005T+\u0002\u019b\u019c\b$\u0001\u0002\u019c\u01a9\u0003\u0002\u0002",
    "\u0002\u019d\u019e\u0007$\u0002\u0002\u019e\u019f\b$\u0001\u0002\u019f",
    "\u01a0\u0005T+\u0002\u01a0\u01a1\b$\u0001\u0002\u01a1\u01a9\u0003\u0002",
    "\u0002\u0002\u01a2\u01a3\u0007)\u0002\u0002\u01a3\u01a4\b$\u0001\u0002",
    "\u01a4\u01a5\u0005T+\u0002\u01a5\u01a6\b$\u0001\u0002\u01a6\u01a9\u0003",
    "\u0002\u0002\u0002\u01a7\u01a9\u0005V,\u0002\u01a8\u0189\u0003\u0002",
    "\u0002\u0002\u01a8\u018e\u0003\u0002\u0002\u0002\u01a8\u0193\u0003\u0002",
    "\u0002\u0002\u01a8\u0198\u0003\u0002\u0002\u0002\u01a8\u019d\u0003\u0002",
    "\u0002\u0002\u01a8\u01a2\u0003\u0002\u0002\u0002\u01a8\u01a7\u0003\u0002",
    "\u0002\u0002\u01a9G\u0003\u0002\u0002\u0002\u01aa\u01af\u0005F$\u0002",
    "\u01ab\u01ac\u0007!\u0002\u0002\u01ac\u01ae\u0005F$\u0002\u01ad\u01ab",
    "\u0003\u0002\u0002\u0002\u01ae\u01b1\u0003\u0002\u0002\u0002\u01af\u01ad",
    "\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002\u01b0I",
    "\u0003\u0002\u0002\u0002\u01b1\u01af\u0003\u0002\u0002\u0002\u01b2\u01ba",
    "\u0005H%\u0002\u01b3\u01b4\u00072\u0002\u0002\u01b4\u01b5\u0007\u001b",
    "\u0002\u0002\u01b5\u01b6\u0005H%\u0002\u01b6\u01b7\u0007\u001c\u0002",
    "\u0002\u01b7\u01ba\u0003\u0002\u0002\u0002\u01b8\u01ba\u0007.\u0002",
    "\u0002\u01b9\u01b2\u0003\u0002\u0002\u0002\u01b9\u01b3\u0003\u0002\u0002",
    "\u0002\u01b9\u01b8\u0003\u0002\u0002\u0002\u01baK\u0003\u0002\u0002",
    "\u0002\u01bb\u01bc\u0005\u0004\u0003\u0002\u01bcM\u0003\u0002\u0002",
    "\u0002\u01bd\u01c2\u0005L\'\u0002\u01be\u01bf\u0007!\u0002\u0002\u01bf",
    "\u01c1\u0005L\'\u0002\u01c0\u01be\u0003\u0002\u0002\u0002\u01c1\u01c4",
    "\u0003\u0002\u0002\u0002\u01c2\u01c0\u0003\u0002\u0002\u0002\u01c2\u01c3",
    "\u0003\u0002\u0002\u0002\u01c3O\u0003\u0002\u0002\u0002\u01c4\u01c2",
    "\u0003\u0002\u0002\u0002\u01c5\u01c6\u0005R*\u0002\u01c6\u01c7\u0007",
    "\u0002\u0002\u0003\u01c7Q\u0003\u0002\u0002\u0002\u01c8\u01c9\u0007",
    "2\u0002\u0002\u01c9\u01ca\u0007\u001b\u0002\u0002\u01ca\u01cb\u0005",
    "N(\u0002\u01cb\u01cc\u0007\u001c\u0002\u0002\u01cc\u01d0\u0003\u0002",
    "\u0002\u0002\u01cd\u01d0\u0005N(\u0002\u01ce\u01d0\u0007.\u0002\u0002",
    "\u01cf\u01c8\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002",
    "\u01cf\u01ce\u0003\u0002\u0002\u0002\u01d0S\u0003\u0002\u0002\u0002",
    "\u01d1\u01d2\u00052\u001a\u0002\u01d2U\u0003\u0002\u0002\u0002\u01d3",
    "\u01d4\u0007\u001b\u0002\u0002\u01d4\u01d5\u0005T+\u0002\u01d5\u01d6",
    "\u0007\"\u0002\u0002\u01d6\u01d7\u0005T+\u0002\u01d7\u01d8\u0007\u001c",
    "\u0002\u0002\u01d8\u020a\u0003\u0002\u0002\u0002\u01d9\u01da\u0007\u001b",
    "\u0002\u0002\u01da\u01db\u0005T+\u0002\u01db\u01dc\u0007\"\u0002\u0002",
    "\u01dc\u01dd\u0005T+\u0002\u01dd\u01de\u0007\u001f\u0002\u0002\u01de",
    "\u020a\u0003\u0002\u0002\u0002\u01df\u01e0\u0007\u001b\u0002\u0002\u01e0",
    "\u01e1\u0005T+\u0002\u01e1\u01e2\u0007\"\u0002\u0002\u01e2\u01e3\u0005",
    "T+\u0002\u01e3\u01e4\u0007 \u0002\u0002\u01e4\u020a\u0003\u0002\u0002",
    "\u0002\u01e5\u01e6\u0007 \u0002\u0002\u01e6\u01e7\u0005T+\u0002\u01e7",
    "\u01e8\u0007\"\u0002\u0002\u01e8\u01e9\u0005T+\u0002\u01e9\u01ea\u0007",
    "\u001c\u0002\u0002\u01ea\u020a\u0003\u0002\u0002\u0002\u01eb\u01ec\u0007",
    " \u0002\u0002\u01ec\u01ed\u0005T+\u0002\u01ed\u01ee\u0007\"\u0002\u0002",
    "\u01ee\u01ef\u0005T+\u0002\u01ef\u01f0\u0007\u001f\u0002\u0002\u01f0",
    "\u020a\u0003\u0002\u0002\u0002\u01f1\u01f2\u0007 \u0002\u0002\u01f2",
    "\u01f3\u0005T+\u0002\u01f3\u01f4\u0007\"\u0002\u0002\u01f4\u01f5\u0005",
    "T+\u0002\u01f5\u01f6\u0007 \u0002\u0002\u01f6\u020a\u0003\u0002\u0002",
    "\u0002\u01f7\u01f8\u0007\u001f\u0002\u0002\u01f8\u01f9\u0005T+\u0002",
    "\u01f9\u01fa\u0007\"\u0002\u0002\u01fa\u01fb\u0005T+\u0002\u01fb\u01fc",
    "\u0007\u001c\u0002\u0002\u01fc\u020a\u0003\u0002\u0002\u0002\u01fd\u01fe",
    "\u0007\u001f\u0002\u0002\u01fe\u01ff\u0005T+\u0002\u01ff\u0200\u0007",
    "\"\u0002\u0002\u0200\u0201\u0005T+\u0002\u0201\u0202\u0007\u001f\u0002",
    "\u0002\u0202\u020a\u0003\u0002\u0002\u0002\u0203\u0204\u0007\u001f\u0002",
    "\u0002\u0204\u0205\u0005T+\u0002\u0205\u0206\u0007\"\u0002\u0002\u0206",
    "\u0207\u0005T+\u0002\u0207\u0208\u0007 \u0002\u0002\u0208\u020a\u0003",
    "\u0002\u0002\u0002\u0209\u01d3\u0003\u0002\u0002\u0002\u0209\u01d9\u0003",
    "\u0002\u0002\u0002\u0209\u01df\u0003\u0002\u0002\u0002\u0209\u01e5\u0003",
    "\u0002\u0002\u0002\u0209\u01eb\u0003\u0002\u0002\u0002\u0209\u01f1\u0003",
    "\u0002\u0002\u0002\u0209\u01f7\u0003\u0002\u0002\u0002\u0209\u01fd\u0003",
    "\u0002\u0002\u0002\u0209\u0203\u0003\u0002\u0002\u0002\u020aW\u0003",
    "\u0002\u0002\u0002\u020b\u020c\u0005Z.\u0002\u020c\u0214\b-\u0001\u0002",
    "\u020d\u020e\u0007#\u0002\u0002\u020e\u020f\b-\u0001\u0002\u020f\u0210",
    "\u0005Z.\u0002\u0210\u0211\b-\u0001\u0002\u0211\u0213\u0003\u0002\u0002",
    "\u0002\u0212\u020d\u0003\u0002\u0002\u0002\u0213\u0216\u0003\u0002\u0002",
    "\u0002\u0214\u0212\u0003\u0002\u0002\u0002\u0214\u0215\u0003\u0002\u0002",
    "\u0002\u0215Y\u0003\u0002\u0002\u0002\u0216\u0214\u0003\u0002\u0002",
    "\u0002\u0217\u0218\u00074\u0002\u0002\u0218\u021c\b.\u0001\u0002\u0219",
    "\u021a\u00072\u0002\u0002\u021a\u021c\b.\u0001\u0002\u021b\u0217\u0003",
    "\u0002\u0002\u0002\u021b\u0219\u0003\u0002\u0002\u0002\u021c\u0220\u0003",
    "\u0002\u0002\u0002\u021d\u021f\u0005\\/\u0002\u021e\u021d\u0003\u0002",
    "\u0002\u0002\u021f\u0222\u0003\u0002\u0002\u0002\u0220\u021e\u0003\u0002",
    "\u0002\u0002\u0220\u0221\u0003\u0002\u0002\u0002\u0221[\u0003\u0002",
    "\u0002\u0002\u0222\u0220\u0003\u0002\u0002\u0002\u0223\u0224\u0006/",
    "\u0010\u0002\u0224\u0225\n\u0005\u0002\u0002\u0225]\u0003\u0002\u0002",
    "\u0002\u0226\u0227\t\u0006\u0002\u0002\u0227_\u0003\u0002\u0002\u0002",
    "&qx\u0084\u0093\u00a1\u00b8\u00c0\u00cf\u00d1\u00dd\u00df\u00ec\u00f7",
    "\u0102\u0117\u0119\u0121\u012d\u012f\u013a\u0145\u0158\u015a\u0163\u0169",
    "\u017a\u0182\u01a8\u01af\u01b9\u01c2\u01cf\u0209\u0214\u021b\u0220"].join("");


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
                   "parameters", "namedParameters", "namedParameter", "positionalParameters", 
                   "forExpression", "iterationContexts", "iterationContext", 
                   "ifExpression", "quantifiedExpression", "list", "nameDefinition", 
                   "nameDefinitionWithEOF", "nameDefinitionTokens", "iterationNameDefinition", 
                   "iterationNameDefinitionTokens", "additionalNameSymbol", 
                   "conditionalOrExpression", "conditionalAndExpression", 
                   "comparisonExpression", "relationalExpression", "expressionList", 
                   "additiveExpression", "multiplicativeExpression", "powerExpression", 
                   "filterPathExpression", "unaryExpression", "unaryExpressionNotPlusMinus", 
                   "primary", "literal", "atLiteral", "atLiteralValue", 
                   "simplePositiveUnaryTest", "simplePositiveUnaryTests", 
                   "simpleUnaryTests", "positiveUnaryTest", "positiveUnaryTests", 
                   "unaryTestsRoot", "unaryTests", "endpoint", "interval", 
                   "qualifiedName", "nameRef", "nameRefOtherToken", "reusableKeywords" ];

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
FEEL_1_1Parser.RULE_parameters = 3;
FEEL_1_1Parser.RULE_namedParameters = 4;
FEEL_1_1Parser.RULE_namedParameter = 5;
FEEL_1_1Parser.RULE_positionalParameters = 6;
FEEL_1_1Parser.RULE_forExpression = 7;
FEEL_1_1Parser.RULE_iterationContexts = 8;
FEEL_1_1Parser.RULE_iterationContext = 9;
FEEL_1_1Parser.RULE_ifExpression = 10;
FEEL_1_1Parser.RULE_quantifiedExpression = 11;
FEEL_1_1Parser.RULE_list = 12;
FEEL_1_1Parser.RULE_nameDefinition = 13;
FEEL_1_1Parser.RULE_nameDefinitionWithEOF = 14;
FEEL_1_1Parser.RULE_nameDefinitionTokens = 15;
FEEL_1_1Parser.RULE_iterationNameDefinition = 16;
FEEL_1_1Parser.RULE_iterationNameDefinitionTokens = 17;
FEEL_1_1Parser.RULE_additionalNameSymbol = 18;
FEEL_1_1Parser.RULE_conditionalOrExpression = 19;
FEEL_1_1Parser.RULE_conditionalAndExpression = 20;
FEEL_1_1Parser.RULE_comparisonExpression = 21;
FEEL_1_1Parser.RULE_relationalExpression = 22;
FEEL_1_1Parser.RULE_expressionList = 23;
FEEL_1_1Parser.RULE_additiveExpression = 24;
FEEL_1_1Parser.RULE_multiplicativeExpression = 25;
FEEL_1_1Parser.RULE_powerExpression = 26;
FEEL_1_1Parser.RULE_filterPathExpression = 27;
FEEL_1_1Parser.RULE_unaryExpression = 28;
FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus = 29;
FEEL_1_1Parser.RULE_primary = 30;
FEEL_1_1Parser.RULE_literal = 31;
FEEL_1_1Parser.RULE_atLiteral = 32;
FEEL_1_1Parser.RULE_atLiteralValue = 33;
FEEL_1_1Parser.RULE_simplePositiveUnaryTest = 34;
FEEL_1_1Parser.RULE_simplePositiveUnaryTests = 35;
FEEL_1_1Parser.RULE_simpleUnaryTests = 36;
FEEL_1_1Parser.RULE_positiveUnaryTest = 37;
FEEL_1_1Parser.RULE_positiveUnaryTests = 38;
FEEL_1_1Parser.RULE_unaryTestsRoot = 39;
FEEL_1_1Parser.RULE_unaryTests = 40;
FEEL_1_1Parser.RULE_endpoint = 41;
FEEL_1_1Parser.RULE_interval = 42;
FEEL_1_1Parser.RULE_qualifiedName = 43;
FEEL_1_1Parser.RULE_nameRef = 44;
FEEL_1_1Parser.RULE_nameRefOtherToken = 45;
FEEL_1_1Parser.RULE_reusableKeywords = 46;


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
        this.state = 94;
        this.expression();
        this.state = 95;
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
        this.state = 97;
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
        this.state = 99;
        this.conditionalOrExpression(0);
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


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;


 
ParametersContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParametersNamedContext(parser, ctx) {
	ParametersContext.call(this, parser);
    ParametersContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParametersNamedContext.prototype = Object.create(ParametersContext.prototype);
ParametersNamedContext.prototype.constructor = ParametersNamedContext;

FEEL_1_1Parser.ParametersNamedContext = ParametersNamedContext;

ParametersNamedContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

ParametersNamedContext.prototype.namedParameters = function() {
    return this.getTypedRuleContext(NamedParametersContext,0);
};

ParametersNamedContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};
ParametersNamedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitParametersNamed(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParametersEmptyContext(parser, ctx) {
	ParametersContext.call(this, parser);
    ParametersContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParametersEmptyContext.prototype = Object.create(ParametersContext.prototype);
ParametersEmptyContext.prototype.constructor = ParametersEmptyContext;

FEEL_1_1Parser.ParametersEmptyContext = ParametersEmptyContext;

ParametersEmptyContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

ParametersEmptyContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};
ParametersEmptyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitParametersEmpty(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParametersPositionalContext(parser, ctx) {
	ParametersContext.call(this, parser);
    ParametersContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParametersPositionalContext.prototype = Object.create(ParametersContext.prototype);
ParametersPositionalContext.prototype.constructor = ParametersPositionalContext;

FEEL_1_1Parser.ParametersPositionalContext = ParametersPositionalContext;

ParametersPositionalContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

ParametersPositionalContext.prototype.positionalParameters = function() {
    return this.getTypedRuleContext(PositionalParametersContext,0);
};

ParametersPositionalContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};
ParametersPositionalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitParametersPositional(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.ParametersContext = ParametersContext;

FEEL_1_1Parser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FEEL_1_1Parser.RULE_parameters);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParametersEmptyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 102;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            localctx = new ParametersNamedContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 104;
            this.namedParameters();
            this.state = 105;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 3:
            localctx = new ParametersPositionalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 107;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 108;
            this.positionalParameters();
            this.state = 109;
            this.match(FEEL_1_1Parser.RPAREN);
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


function NamedParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_namedParameters;
    return this;
}

NamedParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedParametersContext.prototype.constructor = NamedParametersContext;

NamedParametersContext.prototype.namedParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamedParameterContext);
    } else {
        return this.getTypedRuleContext(NamedParameterContext,i);
    }
};

NamedParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.COMMA);
    } else {
        return this.getToken(FEEL_1_1Parser.COMMA, i);
    }
};


NamedParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNamedParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NamedParametersContext = NamedParametersContext;

FEEL_1_1Parser.prototype.namedParameters = function() {

    var localctx = new NamedParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FEEL_1_1Parser.RULE_namedParameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.namedParameter();
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 114;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 115;
            this.namedParameter();
            this.state = 120;
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


function NamedParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_namedParameter;
    this.name = null; // NameDefinitionContext
    this.value = null; // ExpressionContext
    return this;
}

NamedParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedParameterContext.prototype.constructor = NamedParameterContext;

NamedParameterContext.prototype.COLON = function() {
    return this.getToken(FEEL_1_1Parser.COLON, 0);
};

NamedParameterContext.prototype.nameDefinition = function() {
    return this.getTypedRuleContext(NameDefinitionContext,0);
};

NamedParameterContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

NamedParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNamedParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NamedParameterContext = NamedParameterContext;

FEEL_1_1Parser.prototype.namedParameter = function() {

    var localctx = new NamedParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FEEL_1_1Parser.RULE_namedParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        localctx.name = this.nameDefinition();
        this.state = 122;
        this.match(FEEL_1_1Parser.COLON);
        this.state = 123;
        localctx.value = this.expression();
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


function PositionalParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_positionalParameters;
    return this;
}

PositionalParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PositionalParametersContext.prototype.constructor = PositionalParametersContext;

PositionalParametersContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PositionalParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.COMMA);
    } else {
        return this.getToken(FEEL_1_1Parser.COMMA, i);
    }
};


PositionalParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositionalParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.PositionalParametersContext = PositionalParametersContext;

FEEL_1_1Parser.prototype.positionalParameters = function() {

    var localctx = new PositionalParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FEEL_1_1Parser.RULE_positionalParameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.expression();
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 126;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 127;
            this.expression();
            this.state = 132;
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


function ForExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_forExpression;
    return this;
}

ForExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForExpressionContext.prototype.constructor = ForExpressionContext;

ForExpressionContext.prototype.FOR = function() {
    return this.getToken(FEEL_1_1Parser.FOR, 0);
};

ForExpressionContext.prototype.iterationContexts = function() {
    return this.getTypedRuleContext(IterationContextsContext,0);
};

ForExpressionContext.prototype.RETURN = function() {
    return this.getToken(FEEL_1_1Parser.RETURN, 0);
};

ForExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitForExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.ForExpressionContext = ForExpressionContext;

FEEL_1_1Parser.prototype.forExpression = function() {

    var localctx = new ForExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FEEL_1_1Parser.RULE_forExpression);

        this.helper.pushScope();

    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(FEEL_1_1Parser.FOR);
        this.state = 134;
        this.iterationContexts();
        this.state = 135;
        this.match(FEEL_1_1Parser.RETURN);
        this.helper.enableDynamicResolution();
        this.state = 137;
        this.expression();
        this.helper.disableDynamicResolution();
        this._ctx.stop = this._input.LT(-1);

            this.helper.popScope();

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


function IterationContextsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_iterationContexts;
    return this;
}

IterationContextsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationContextsContext.prototype.constructor = IterationContextsContext;

IterationContextsContext.prototype.iterationContext = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IterationContextContext);
    } else {
        return this.getTypedRuleContext(IterationContextContext,i);
    }
};

IterationContextsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.COMMA);
    } else {
        return this.getToken(FEEL_1_1Parser.COMMA, i);
    }
};


IterationContextsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitIterationContexts(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.IterationContextsContext = IterationContextsContext;

FEEL_1_1Parser.prototype.iterationContexts = function() {

    var localctx = new IterationContextsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FEEL_1_1Parser.RULE_iterationContexts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.iterationContext();
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 141;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 142;
            this.iterationContext();
            this.state = 147;
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


function IterationContextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_iterationContext;
    return this;
}

IterationContextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationContextContext.prototype.constructor = IterationContextContext;

IterationContextContext.prototype.iterationNameDefinition = function() {
    return this.getTypedRuleContext(IterationNameDefinitionContext,0);
};

IterationContextContext.prototype.IN = function() {
    return this.getToken(FEEL_1_1Parser.IN, 0);
};

IterationContextContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IterationContextContext.prototype.ELIPSIS = function() {
    return this.getToken(FEEL_1_1Parser.ELIPSIS, 0);
};

IterationContextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitIterationContext(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.IterationContextContext = IterationContextContext;

FEEL_1_1Parser.prototype.iterationContext = function() {

    var localctx = new IterationContextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FEEL_1_1Parser.RULE_iterationContext);
    try {
        this.state = 159;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            if (!( this.helper.isFeatDMN12EnhancedForLoopEnabled())) {
                throw new antlr4.error.FailedPredicateException(this, "this.helper.isFeatDMN12EnhancedForLoopEnabled()");
            }
            this.state = 149;
            this.iterationNameDefinition();
            this.state = 150;
            this.match(FEEL_1_1Parser.IN);
            this.state = 151;
            this.expression();
            this.state = 152;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 153;
            this.expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.iterationNameDefinition();
            this.state = 156;
            this.match(FEEL_1_1Parser.IN);
            this.state = 157;
            this.expression();
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


function IfExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_ifExpression;
    this.c = null; // ExpressionContext
    this.t = null; // ExpressionContext
    this.e = null; // ExpressionContext
    return this;
}

IfExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfExpressionContext.prototype.constructor = IfExpressionContext;

IfExpressionContext.prototype.IF = function() {
    return this.getToken(FEEL_1_1Parser.IF, 0);
};

IfExpressionContext.prototype.THEN = function() {
    return this.getToken(FEEL_1_1Parser.THEN, 0);
};

IfExpressionContext.prototype.ELSE = function() {
    return this.getToken(FEEL_1_1Parser.ELSE, 0);
};

IfExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IfExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitIfExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.IfExpressionContext = IfExpressionContext;

FEEL_1_1Parser.prototype.ifExpression = function() {

    var localctx = new IfExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FEEL_1_1Parser.RULE_ifExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(FEEL_1_1Parser.IF);
        this.state = 162;
        localctx.c = this.expression();
        this.state = 163;
        this.match(FEEL_1_1Parser.THEN);
        this.state = 164;
        localctx.t = this.expression();
        this.state = 165;
        this.match(FEEL_1_1Parser.ELSE);
        this.state = 166;
        localctx.e = this.expression();
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


function QuantifiedExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_quantifiedExpression;
    return this;
}

QuantifiedExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantifiedExpressionContext.prototype.constructor = QuantifiedExpressionContext;


 
QuantifiedExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function QuantExprSomeContext(parser, ctx) {
	QuantifiedExpressionContext.call(this, parser);
    QuantifiedExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuantExprSomeContext.prototype = Object.create(QuantifiedExpressionContext.prototype);
QuantExprSomeContext.prototype.constructor = QuantExprSomeContext;

FEEL_1_1Parser.QuantExprSomeContext = QuantExprSomeContext;

QuantExprSomeContext.prototype.SOME = function() {
    return this.getToken(FEEL_1_1Parser.SOME, 0);
};

QuantExprSomeContext.prototype.iterationContexts = function() {
    return this.getTypedRuleContext(IterationContextsContext,0);
};

QuantExprSomeContext.prototype.SATISFIES = function() {
    return this.getToken(FEEL_1_1Parser.SATISFIES, 0);
};

QuantExprSomeContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
QuantExprSomeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitQuantExprSome(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function QuantExprEveryContext(parser, ctx) {
	QuantifiedExpressionContext.call(this, parser);
    QuantifiedExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuantExprEveryContext.prototype = Object.create(QuantifiedExpressionContext.prototype);
QuantExprEveryContext.prototype.constructor = QuantExprEveryContext;

FEEL_1_1Parser.QuantExprEveryContext = QuantExprEveryContext;

QuantExprEveryContext.prototype.EVERY = function() {
    return this.getToken(FEEL_1_1Parser.EVERY, 0);
};

QuantExprEveryContext.prototype.iterationContexts = function() {
    return this.getTypedRuleContext(IterationContextsContext,0);
};

QuantExprEveryContext.prototype.SATISFIES = function() {
    return this.getToken(FEEL_1_1Parser.SATISFIES, 0);
};

QuantExprEveryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
QuantExprEveryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitQuantExprEvery(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.QuantifiedExpressionContext = QuantifiedExpressionContext;

FEEL_1_1Parser.prototype.quantifiedExpression = function() {

    var localctx = new QuantifiedExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FEEL_1_1Parser.RULE_quantifiedExpression);

        this.helper.pushScope();

    try {
        this.state = 182;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.SOME:
            localctx = new QuantExprSomeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            this.match(FEEL_1_1Parser.SOME);
            this.state = 169;
            this.iterationContexts();
            this.state = 170;
            this.match(FEEL_1_1Parser.SATISFIES);
            this.helper.enableDynamicResolution();
            this.state = 172;
            this.expression();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.EVERY:
            localctx = new QuantExprEveryContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(FEEL_1_1Parser.EVERY);
            this.state = 176;
            this.iterationContexts();
            this.state = 177;
            this.match(FEEL_1_1Parser.SATISFIES);
            this.helper.enableDynamicResolution();
            this.state = 179;
            this.expression();
            this.helper.disableDynamicResolution();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);

            this.helper.popScope();

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


function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LBRACK = function() {
    return this.getToken(FEEL_1_1Parser.LBRACK, 0);
};

ListContext.prototype.RBRACK = function() {
    return this.getToken(FEEL_1_1Parser.RBRACK, 0);
};

ListContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.ListContext = ListContext;

FEEL_1_1Parser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FEEL_1_1Parser.RULE_list);
    try {
        this.state = 190;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(FEEL_1_1Parser.LBRACK);
            this.state = 185;
            this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 186;
            this.match(FEEL_1_1Parser.LBRACK);
            this.state = 187;
            this.expressionList();
            this.state = 188;
            this.match(FEEL_1_1Parser.RBRACK);
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


function NameDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_nameDefinition;
    this._nameDefinitionTokens = null; // NameDefinitionTokensContext
    return this;
}

NameDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameDefinitionContext.prototype.constructor = NameDefinitionContext;

NameDefinitionContext.prototype.nameDefinitionTokens = function() {
    return this.getTypedRuleContext(NameDefinitionTokensContext,0);
};

NameDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNameDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NameDefinitionContext = NameDefinitionContext;

FEEL_1_1Parser.prototype.nameDefinition = function() {

    var localctx = new NameDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FEEL_1_1Parser.RULE_nameDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        localctx._nameDefinitionTokens = this.nameDefinitionTokens();
         this.helper.defineVariable( localctx._nameDefinitionTokens ); 
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


function NameDefinitionWithEOFContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_nameDefinitionWithEOF;
    return this;
}

NameDefinitionWithEOFContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameDefinitionWithEOFContext.prototype.constructor = NameDefinitionWithEOFContext;

NameDefinitionWithEOFContext.prototype.nameDefinition = function() {
    return this.getTypedRuleContext(NameDefinitionContext,0);
};

NameDefinitionWithEOFContext.prototype.EOF = function() {
    return this.getToken(FEEL_1_1Parser.EOF, 0);
};

NameDefinitionWithEOFContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNameDefinitionWithEOF(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NameDefinitionWithEOFContext = NameDefinitionWithEOFContext;

FEEL_1_1Parser.prototype.nameDefinitionWithEOF = function() {

    var localctx = new NameDefinitionWithEOFContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FEEL_1_1Parser.RULE_nameDefinitionWithEOF);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.nameDefinition();
        this.state = 196;
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


function NameDefinitionTokensContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_nameDefinitionTokens;
    return this;
}

NameDefinitionTokensContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameDefinitionTokensContext.prototype.constructor = NameDefinitionTokensContext;

NameDefinitionTokensContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.Identifier);
    } else {
        return this.getToken(FEEL_1_1Parser.Identifier, i);
    }
};


NameDefinitionTokensContext.prototype.additionalNameSymbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AdditionalNameSymbolContext);
    } else {
        return this.getTypedRuleContext(AdditionalNameSymbolContext,i);
    }
};

NameDefinitionTokensContext.prototype.IntegerLiteral = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.IntegerLiteral);
    } else {
        return this.getToken(FEEL_1_1Parser.IntegerLiteral, i);
    }
};


NameDefinitionTokensContext.prototype.FloatingPointLiteral = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.FloatingPointLiteral);
    } else {
        return this.getToken(FEEL_1_1Parser.FloatingPointLiteral, i);
    }
};


NameDefinitionTokensContext.prototype.reusableKeywords = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ReusableKeywordsContext);
    } else {
        return this.getTypedRuleContext(ReusableKeywordsContext,i);
    }
};

NameDefinitionTokensContext.prototype.IN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.IN);
    } else {
        return this.getToken(FEEL_1_1Parser.IN, i);
    }
};


NameDefinitionTokensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNameDefinitionTokens(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NameDefinitionTokensContext = NameDefinitionTokensContext;

FEEL_1_1Parser.prototype.nameDefinitionTokens = function() {

    var localctx = new NameDefinitionTokensContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FEEL_1_1Parser.RULE_nameDefinitionTokens);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(FEEL_1_1Parser.Identifier);
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEEL_1_1Parser.FOR) | (1 << FEEL_1_1Parser.RETURN) | (1 << FEEL_1_1Parser.IN) | (1 << FEEL_1_1Parser.IF) | (1 << FEEL_1_1Parser.THEN) | (1 << FEEL_1_1Parser.ELSE) | (1 << FEEL_1_1Parser.SOME) | (1 << FEEL_1_1Parser.EVERY) | (1 << FEEL_1_1Parser.SATISFIES) | (1 << FEEL_1_1Parser.INSTANCE) | (1 << FEEL_1_1Parser.OF) | (1 << FEEL_1_1Parser.FUNCTION) | (1 << FEEL_1_1Parser.EXTERNAL) | (1 << FEEL_1_1Parser.OR) | (1 << FEEL_1_1Parser.AND) | (1 << FEEL_1_1Parser.BETWEEN) | (1 << FEEL_1_1Parser.NULL) | (1 << FEEL_1_1Parser.TRUE) | (1 << FEEL_1_1Parser.FALSE) | (1 << FEEL_1_1Parser.QUOTE) | (1 << FEEL_1_1Parser.IntegerLiteral) | (1 << FEEL_1_1Parser.FloatingPointLiteral))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEEL_1_1Parser.DOT - 33)) | (1 << (FEEL_1_1Parser.ADD - 33)) | (1 << (FEEL_1_1Parser.SUB - 33)) | (1 << (FEEL_1_1Parser.MUL - 33)) | (1 << (FEEL_1_1Parser.DIV - 33)) | (1 << (FEEL_1_1Parser.NOT - 33)) | (1 << (FEEL_1_1Parser.Identifier - 33)))) !== 0)) {
            this.state = 205;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FEEL_1_1Parser.Identifier:
                this.state = 199;
                this.match(FEEL_1_1Parser.Identifier);
                break;
            case FEEL_1_1Parser.QUOTE:
            case FEEL_1_1Parser.DOT:
            case FEEL_1_1Parser.ADD:
            case FEEL_1_1Parser.SUB:
            case FEEL_1_1Parser.MUL:
            case FEEL_1_1Parser.DIV:
                this.state = 200;
                this.additionalNameSymbol();
                break;
            case FEEL_1_1Parser.IntegerLiteral:
                this.state = 201;
                this.match(FEEL_1_1Parser.IntegerLiteral);
                break;
            case FEEL_1_1Parser.FloatingPointLiteral:
                this.state = 202;
                this.match(FEEL_1_1Parser.FloatingPointLiteral);
                break;
            case FEEL_1_1Parser.FOR:
            case FEEL_1_1Parser.RETURN:
            case FEEL_1_1Parser.IF:
            case FEEL_1_1Parser.THEN:
            case FEEL_1_1Parser.ELSE:
            case FEEL_1_1Parser.SOME:
            case FEEL_1_1Parser.EVERY:
            case FEEL_1_1Parser.SATISFIES:
            case FEEL_1_1Parser.INSTANCE:
            case FEEL_1_1Parser.OF:
            case FEEL_1_1Parser.FUNCTION:
            case FEEL_1_1Parser.EXTERNAL:
            case FEEL_1_1Parser.OR:
            case FEEL_1_1Parser.AND:
            case FEEL_1_1Parser.BETWEEN:
            case FEEL_1_1Parser.NULL:
            case FEEL_1_1Parser.TRUE:
            case FEEL_1_1Parser.FALSE:
            case FEEL_1_1Parser.NOT:
                this.state = 203;
                this.reusableKeywords();
                break;
            case FEEL_1_1Parser.IN:
                this.state = 204;
                this.match(FEEL_1_1Parser.IN);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 209;
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


function IterationNameDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_iterationNameDefinition;
    this._iterationNameDefinitionTokens = null; // IterationNameDefinitionTokensContext
    return this;
}

IterationNameDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationNameDefinitionContext.prototype.constructor = IterationNameDefinitionContext;

IterationNameDefinitionContext.prototype.iterationNameDefinitionTokens = function() {
    return this.getTypedRuleContext(IterationNameDefinitionTokensContext,0);
};

IterationNameDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitIterationNameDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.IterationNameDefinitionContext = IterationNameDefinitionContext;

FEEL_1_1Parser.prototype.iterationNameDefinition = function() {

    var localctx = new IterationNameDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FEEL_1_1Parser.RULE_iterationNameDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        localctx._iterationNameDefinitionTokens = this.iterationNameDefinitionTokens();
         this.helper.defineVariable( localctx._iterationNameDefinitionTokens ); 
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


function IterationNameDefinitionTokensContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_iterationNameDefinitionTokens;
    return this;
}

IterationNameDefinitionTokensContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationNameDefinitionTokensContext.prototype.constructor = IterationNameDefinitionTokensContext;

IterationNameDefinitionTokensContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.Identifier);
    } else {
        return this.getToken(FEEL_1_1Parser.Identifier, i);
    }
};


IterationNameDefinitionTokensContext.prototype.additionalNameSymbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AdditionalNameSymbolContext);
    } else {
        return this.getTypedRuleContext(AdditionalNameSymbolContext,i);
    }
};

IterationNameDefinitionTokensContext.prototype.IntegerLiteral = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.IntegerLiteral);
    } else {
        return this.getToken(FEEL_1_1Parser.IntegerLiteral, i);
    }
};


IterationNameDefinitionTokensContext.prototype.FloatingPointLiteral = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.FloatingPointLiteral);
    } else {
        return this.getToken(FEEL_1_1Parser.FloatingPointLiteral, i);
    }
};


IterationNameDefinitionTokensContext.prototype.reusableKeywords = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ReusableKeywordsContext);
    } else {
        return this.getTypedRuleContext(ReusableKeywordsContext,i);
    }
};

IterationNameDefinitionTokensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitIterationNameDefinitionTokens(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.IterationNameDefinitionTokensContext = IterationNameDefinitionTokensContext;

FEEL_1_1Parser.prototype.iterationNameDefinitionTokens = function() {

    var localctx = new IterationNameDefinitionTokensContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FEEL_1_1Parser.RULE_iterationNameDefinitionTokens);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(FEEL_1_1Parser.Identifier);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEEL_1_1Parser.FOR) | (1 << FEEL_1_1Parser.RETURN) | (1 << FEEL_1_1Parser.IF) | (1 << FEEL_1_1Parser.THEN) | (1 << FEEL_1_1Parser.ELSE) | (1 << FEEL_1_1Parser.SOME) | (1 << FEEL_1_1Parser.EVERY) | (1 << FEEL_1_1Parser.SATISFIES) | (1 << FEEL_1_1Parser.INSTANCE) | (1 << FEEL_1_1Parser.OF) | (1 << FEEL_1_1Parser.FUNCTION) | (1 << FEEL_1_1Parser.EXTERNAL) | (1 << FEEL_1_1Parser.OR) | (1 << FEEL_1_1Parser.AND) | (1 << FEEL_1_1Parser.BETWEEN) | (1 << FEEL_1_1Parser.NULL) | (1 << FEEL_1_1Parser.TRUE) | (1 << FEEL_1_1Parser.FALSE) | (1 << FEEL_1_1Parser.QUOTE) | (1 << FEEL_1_1Parser.IntegerLiteral) | (1 << FEEL_1_1Parser.FloatingPointLiteral))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEEL_1_1Parser.DOT - 33)) | (1 << (FEEL_1_1Parser.ADD - 33)) | (1 << (FEEL_1_1Parser.SUB - 33)) | (1 << (FEEL_1_1Parser.MUL - 33)) | (1 << (FEEL_1_1Parser.DIV - 33)) | (1 << (FEEL_1_1Parser.NOT - 33)) | (1 << (FEEL_1_1Parser.Identifier - 33)))) !== 0)) {
            this.state = 219;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FEEL_1_1Parser.Identifier:
                this.state = 214;
                this.match(FEEL_1_1Parser.Identifier);
                break;
            case FEEL_1_1Parser.QUOTE:
            case FEEL_1_1Parser.DOT:
            case FEEL_1_1Parser.ADD:
            case FEEL_1_1Parser.SUB:
            case FEEL_1_1Parser.MUL:
            case FEEL_1_1Parser.DIV:
                this.state = 215;
                this.additionalNameSymbol();
                break;
            case FEEL_1_1Parser.IntegerLiteral:
                this.state = 216;
                this.match(FEEL_1_1Parser.IntegerLiteral);
                break;
            case FEEL_1_1Parser.FloatingPointLiteral:
                this.state = 217;
                this.match(FEEL_1_1Parser.FloatingPointLiteral);
                break;
            case FEEL_1_1Parser.FOR:
            case FEEL_1_1Parser.RETURN:
            case FEEL_1_1Parser.IF:
            case FEEL_1_1Parser.THEN:
            case FEEL_1_1Parser.ELSE:
            case FEEL_1_1Parser.SOME:
            case FEEL_1_1Parser.EVERY:
            case FEEL_1_1Parser.SATISFIES:
            case FEEL_1_1Parser.INSTANCE:
            case FEEL_1_1Parser.OF:
            case FEEL_1_1Parser.FUNCTION:
            case FEEL_1_1Parser.EXTERNAL:
            case FEEL_1_1Parser.OR:
            case FEEL_1_1Parser.AND:
            case FEEL_1_1Parser.BETWEEN:
            case FEEL_1_1Parser.NULL:
            case FEEL_1_1Parser.TRUE:
            case FEEL_1_1Parser.FALSE:
            case FEEL_1_1Parser.NOT:
                this.state = 218;
                this.reusableKeywords();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 223;
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


function AdditionalNameSymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_additionalNameSymbol;
    return this;
}

AdditionalNameSymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionalNameSymbolContext.prototype.constructor = AdditionalNameSymbolContext;

AdditionalNameSymbolContext.prototype.DOT = function() {
    return this.getToken(FEEL_1_1Parser.DOT, 0);
};

AdditionalNameSymbolContext.prototype.DIV = function() {
    return this.getToken(FEEL_1_1Parser.DIV, 0);
};

AdditionalNameSymbolContext.prototype.SUB = function() {
    return this.getToken(FEEL_1_1Parser.SUB, 0);
};

AdditionalNameSymbolContext.prototype.ADD = function() {
    return this.getToken(FEEL_1_1Parser.ADD, 0);
};

AdditionalNameSymbolContext.prototype.MUL = function() {
    return this.getToken(FEEL_1_1Parser.MUL, 0);
};

AdditionalNameSymbolContext.prototype.QUOTE = function() {
    return this.getToken(FEEL_1_1Parser.QUOTE, 0);
};

AdditionalNameSymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitAdditionalNameSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.AdditionalNameSymbolContext = AdditionalNameSymbolContext;

FEEL_1_1Parser.prototype.additionalNameSymbol = function() {

    var localctx = new AdditionalNameSymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FEEL_1_1Parser.RULE_additionalNameSymbol);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        _la = this._input.LA(1);
        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (FEEL_1_1Parser.QUOTE - 21)) | (1 << (FEEL_1_1Parser.DOT - 21)) | (1 << (FEEL_1_1Parser.ADD - 21)) | (1 << (FEEL_1_1Parser.SUB - 21)) | (1 << (FEEL_1_1Parser.MUL - 21)) | (1 << (FEEL_1_1Parser.DIV - 21)))) !== 0))) {
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

function CondOrContext(parser, ctx) {
	ConditionalOrExpressionContext.call(this, parser);
    this.left = null; // ConditionalOrExpressionContext;
    this.op = null; // Token;
    this.right = null; // ConditionalAndExpressionContext;
    ConditionalOrExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondOrContext.prototype = Object.create(ConditionalOrExpressionContext.prototype);
CondOrContext.prototype.constructor = CondOrContext;

FEEL_1_1Parser.CondOrContext = CondOrContext;

CondOrContext.prototype.conditionalOrExpression = function() {
    return this.getTypedRuleContext(ConditionalOrExpressionContext,0);
};

CondOrContext.prototype.OR = function() {
    return this.getToken(FEEL_1_1Parser.OR, 0);
};

CondOrContext.prototype.conditionalAndExpression = function() {
    return this.getTypedRuleContext(ConditionalAndExpressionContext,0);
};
CondOrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCondOr(this);
    } else {
        return visitor.visitChildren(this);
    }
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



FEEL_1_1Parser.prototype.conditionalOrExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ConditionalOrExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, FEEL_1_1Parser.RULE_conditionalOrExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CondOrAndContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 227;
        this.conditionalAndExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 234;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new CondOrContext(this, new ConditionalOrExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_conditionalOrExpression);
                this.state = 229;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 230;
                localctx.op = this.match(FEEL_1_1Parser.OR);
                this.state = 231;
                localctx.right = this.conditionalAndExpression(0); 
            }
            this.state = 236;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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


function CondAndContext(parser, ctx) {
	ConditionalAndExpressionContext.call(this, parser);
    this.left = null; // ConditionalAndExpressionContext;
    this.op = null; // Token;
    this.right = null; // ComparisonExpressionContext;
    ConditionalAndExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondAndContext.prototype = Object.create(ConditionalAndExpressionContext.prototype);
CondAndContext.prototype.constructor = CondAndContext;

FEEL_1_1Parser.CondAndContext = CondAndContext;

CondAndContext.prototype.conditionalAndExpression = function() {
    return this.getTypedRuleContext(ConditionalAndExpressionContext,0);
};

CondAndContext.prototype.AND = function() {
    return this.getToken(FEEL_1_1Parser.AND, 0);
};

CondAndContext.prototype.comparisonExpression = function() {
    return this.getTypedRuleContext(ComparisonExpressionContext,0);
};
CondAndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCondAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.prototype.conditionalAndExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ConditionalAndExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 40;
    this.enterRecursionRule(localctx, 40, FEEL_1_1Parser.RULE_conditionalAndExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CondAndCompContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 238;
        this.comparisonExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 245;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new CondAndContext(this, new ConditionalAndExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_conditionalAndExpression);
                this.state = 240;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 241;
                localctx.op = this.match(FEEL_1_1Parser.AND);
                this.state = 242;
                localctx.right = this.comparisonExpression(0); 
            }
            this.state = 247;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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

function CompExpressionContext(parser, ctx) {
	ComparisonExpressionContext.call(this, parser);
    this.left = null; // ComparisonExpressionContext;
    this.op = null; // Token;
    this.right = null; // RelationalExpressionContext;
    ComparisonExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompExpressionContext.prototype = Object.create(ComparisonExpressionContext.prototype);
CompExpressionContext.prototype.constructor = CompExpressionContext;

FEEL_1_1Parser.CompExpressionContext = CompExpressionContext;

CompExpressionContext.prototype.comparisonExpression = function() {
    return this.getTypedRuleContext(ComparisonExpressionContext,0);
};

CompExpressionContext.prototype.relationalExpression = function() {
    return this.getTypedRuleContext(RelationalExpressionContext,0);
};

CompExpressionContext.prototype.LT = function() {
    return this.getToken(FEEL_1_1Parser.LT, 0);
};

CompExpressionContext.prototype.GT = function() {
    return this.getToken(FEEL_1_1Parser.GT, 0);
};

CompExpressionContext.prototype.LE = function() {
    return this.getToken(FEEL_1_1Parser.LE, 0);
};

CompExpressionContext.prototype.GE = function() {
    return this.getToken(FEEL_1_1Parser.GE, 0);
};

CompExpressionContext.prototype.EQUAL = function() {
    return this.getToken(FEEL_1_1Parser.EQUAL, 0);
};

CompExpressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(FEEL_1_1Parser.NOTEQUAL, 0);
};
CompExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitCompExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
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



FEEL_1_1Parser.prototype.comparisonExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ComparisonExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, FEEL_1_1Parser.RULE_comparisonExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompExpressionRelContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 249;
        this.relationalExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 256;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new CompExpressionContext(this, new ComparisonExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_comparisonExpression);
                this.state = 251;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 252;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (FEEL_1_1Parser.EQUAL - 34)) | (1 << (FEEL_1_1Parser.GT - 34)) | (1 << (FEEL_1_1Parser.LT - 34)) | (1 << (FEEL_1_1Parser.LE - 34)) | (1 << (FEEL_1_1Parser.GE - 34)) | (1 << (FEEL_1_1Parser.NOTEQUAL - 34)))) !== 0))) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 253;
                localctx.right = this.relationalExpression(0); 
            }
            this.state = 258;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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

function RelExpressionBetweenContext(parser, ctx) {
	RelationalExpressionContext.call(this, parser);
    this.val = null; // RelationalExpressionContext;
    this.start = null; // AdditiveExpressionContext;
    this.end = null; // AdditiveExpressionContext;
    RelationalExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelExpressionBetweenContext.prototype = Object.create(RelationalExpressionContext.prototype);
RelExpressionBetweenContext.prototype.constructor = RelExpressionBetweenContext;

FEEL_1_1Parser.RelExpressionBetweenContext = RelExpressionBetweenContext;

RelExpressionBetweenContext.prototype.BETWEEN = function() {
    return this.getToken(FEEL_1_1Parser.BETWEEN, 0);
};

RelExpressionBetweenContext.prototype.AND = function() {
    return this.getToken(FEEL_1_1Parser.AND, 0);
};

RelExpressionBetweenContext.prototype.relationalExpression = function() {
    return this.getTypedRuleContext(RelationalExpressionContext,0);
};

RelExpressionBetweenContext.prototype.additiveExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AdditiveExpressionContext);
    } else {
        return this.getTypedRuleContext(AdditiveExpressionContext,i);
    }
};
RelExpressionBetweenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitRelExpressionBetween(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelExpressionValueContext(parser, ctx) {
	RelationalExpressionContext.call(this, parser);
    this.val = null; // RelationalExpressionContext;
    RelationalExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelExpressionValueContext.prototype = Object.create(RelationalExpressionContext.prototype);
RelExpressionValueContext.prototype.constructor = RelExpressionValueContext;

FEEL_1_1Parser.RelExpressionValueContext = RelExpressionValueContext;

RelExpressionValueContext.prototype.IN = function() {
    return this.getToken(FEEL_1_1Parser.IN, 0);
};

RelExpressionValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RelExpressionValueContext.prototype.relationalExpression = function() {
    return this.getTypedRuleContext(RelationalExpressionContext,0);
};
RelExpressionValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitRelExpressionValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelExpressionTestListContext(parser, ctx) {
	RelationalExpressionContext.call(this, parser);
    this.val = null; // RelationalExpressionContext;
    RelationalExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelExpressionTestListContext.prototype = Object.create(RelationalExpressionContext.prototype);
RelExpressionTestListContext.prototype.constructor = RelExpressionTestListContext;

FEEL_1_1Parser.RelExpressionTestListContext = RelExpressionTestListContext;

RelExpressionTestListContext.prototype.IN = function() {
    return this.getToken(FEEL_1_1Parser.IN, 0);
};

RelExpressionTestListContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

RelExpressionTestListContext.prototype.positiveUnaryTests = function() {
    return this.getTypedRuleContext(PositiveUnaryTestsContext,0);
};

RelExpressionTestListContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};

RelExpressionTestListContext.prototype.relationalExpression = function() {
    return this.getTypedRuleContext(RelationalExpressionContext,0);
};
RelExpressionTestListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitRelExpressionTestList(this);
    } else {
        return visitor.visitChildren(this);
    }
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



FEEL_1_1Parser.prototype.relationalExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new RelationalExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, FEEL_1_1Parser.RULE_relationalExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new RelExpressionAddContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 260;
        this.additiveExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 279;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 277;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new RelExpressionBetweenContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
                    localctx.val = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_relationalExpression);
                    this.state = 262;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 263;
                    this.match(FEEL_1_1Parser.BETWEEN);
                    this.state = 264;
                    localctx.start = this.additiveExpression(0);
                    this.state = 265;
                    this.match(FEEL_1_1Parser.AND);
                    this.state = 266;
                    localctx.end = this.additiveExpression(0);
                    break;

                case 2:
                    localctx = new RelExpressionTestListContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
                    localctx.val = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_relationalExpression);
                    this.state = 268;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 269;
                    this.match(FEEL_1_1Parser.IN);
                    this.state = 270;
                    this.match(FEEL_1_1Parser.LPAREN);
                    this.state = 271;
                    this.positiveUnaryTests();
                    this.state = 272;
                    this.match(FEEL_1_1Parser.RPAREN);
                    break;

                case 3:
                    localctx = new RelExpressionValueContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
                    localctx.val = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_relationalExpression);
                    this.state = 274;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 275;
                    this.match(FEEL_1_1Parser.IN);
                    this.state = 276;
                    this.expression();
                    break;

                } 
            }
            this.state = 281;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
    this.enterRule(localctx, 46, FEEL_1_1Parser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.expression();
        this.state = 287;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 283;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 284;
            this.expression();
            this.state = 289;
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
    var _startState = 48;
    this.enterRecursionRule(localctx, 48, FEEL_1_1Parser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new AddExpressionMultContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 291;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 301;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 299;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_additiveExpression);
                    this.state = 293;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 294;
                    localctx.op = this.match(FEEL_1_1Parser.ADD);
                    this.state = 295;
                    this.multiplicativeExpression(0);
                    break;

                case 2:
                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_additiveExpression);
                    this.state = 296;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 297;
                    localctx.op = this.match(FEEL_1_1Parser.SUB);
                    this.state = 298;
                    this.multiplicativeExpression(0);
                    break;

                } 
            }
            this.state = 303;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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


function MultExpressionContext(parser, ctx) {
	MultiplicativeExpressionContext.call(this, parser);
    this.op = null; // Token;
    MultiplicativeExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultExpressionContext.prototype = Object.create(MultiplicativeExpressionContext.prototype);
MultExpressionContext.prototype.constructor = MultExpressionContext;

FEEL_1_1Parser.MultExpressionContext = MultExpressionContext;

MultExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

MultExpressionContext.prototype.powerExpression = function() {
    return this.getTypedRuleContext(PowerExpressionContext,0);
};

MultExpressionContext.prototype.MUL = function() {
    return this.getToken(FEEL_1_1Parser.MUL, 0);
};

MultExpressionContext.prototype.DIV = function() {
    return this.getToken(FEEL_1_1Parser.DIV, 0);
};
MultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitMultExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.prototype.multiplicativeExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 50;
    this.enterRecursionRule(localctx, 50, FEEL_1_1Parser.RULE_multiplicativeExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new MultExpressionPowContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 305;
        this.powerExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 312;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_multiplicativeExpression);
                this.state = 307;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 308;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===FEEL_1_1Parser.MUL || _la===FEEL_1_1Parser.DIV)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 309;
                this.powerExpression(0); 
            }
            this.state = 314;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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


function PowExpressionContext(parser, ctx) {
	PowerExpressionContext.call(this, parser);
    this.op = null; // Token;
    PowerExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExpressionContext.prototype = Object.create(PowerExpressionContext.prototype);
PowExpressionContext.prototype.constructor = PowExpressionContext;

FEEL_1_1Parser.PowExpressionContext = PowExpressionContext;

PowExpressionContext.prototype.powerExpression = function() {
    return this.getTypedRuleContext(PowerExpressionContext,0);
};

PowExpressionContext.prototype.filterPathExpression = function() {
    return this.getTypedRuleContext(FilterPathExpressionContext,0);
};

PowExpressionContext.prototype.POW = function() {
    return this.getToken(FEEL_1_1Parser.POW, 0);
};
PowExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPowExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.prototype.powerExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new PowerExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 52;
    this.enterRecursionRule(localctx, 52, FEEL_1_1Parser.RULE_powerExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new PowExpressionUnaryContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 316;
        this.filterPathExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 323;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new PowExpressionContext(this, new PowerExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_powerExpression);
                this.state = 318;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 319;
                localctx.op = this.match(FEEL_1_1Parser.POW);
                this.state = 320;
                this.filterPathExpression(0); 
            }
            this.state = 325;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
    this.filter = null; // ExpressionContext
    return this;
}

FilterPathExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FilterPathExpressionContext.prototype.constructor = FilterPathExpressionContext;

FilterPathExpressionContext.prototype.unaryExpression = function() {
    return this.getTypedRuleContext(UnaryExpressionContext,0);
};

FilterPathExpressionContext.prototype.filterPathExpression = function() {
    return this.getTypedRuleContext(FilterPathExpressionContext,0);
};

FilterPathExpressionContext.prototype.LBRACK = function() {
    return this.getToken(FEEL_1_1Parser.LBRACK, 0);
};

FilterPathExpressionContext.prototype.RBRACK = function() {
    return this.getToken(FEEL_1_1Parser.RBRACK, 0);
};

FilterPathExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FilterPathExpressionContext.prototype.DOT = function() {
    return this.getToken(FEEL_1_1Parser.DOT, 0);
};

FilterPathExpressionContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

FilterPathExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitFilterPathExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.prototype.filterPathExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new FilterPathExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, FEEL_1_1Parser.RULE_filterPathExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this.unaryExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 344;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 342;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FilterPathExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_filterPathExpression);
                    this.state = 329;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 330;
                    this.match(FEEL_1_1Parser.LBRACK);
                    this.helper.enableDynamicResolution();
                    this.state = 332;
                    localctx.filter = this.expression();
                    this.helper.disableDynamicResolution();
                    this.state = 334;
                    this.match(FEEL_1_1Parser.RBRACK);
                    break;

                case 2:
                    localctx = new FilterPathExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_filterPathExpression);
                    this.state = 336;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 337;
                    this.match(FEEL_1_1Parser.DOT);
                    this.helper.enableDynamicResolution();
                    this.state = 339;
                    this.qualifiedName();
                    this.helper.disableDynamicResolution();
                    break;

                } 
            }
            this.state = 346;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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

function SignedUnaryExpressionPlusContext(parser, ctx) {
	UnaryExpressionContext.call(this, parser);
    UnaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SignedUnaryExpressionPlusContext.prototype = Object.create(UnaryExpressionContext.prototype);
SignedUnaryExpressionPlusContext.prototype.constructor = SignedUnaryExpressionPlusContext;

FEEL_1_1Parser.SignedUnaryExpressionPlusContext = SignedUnaryExpressionPlusContext;

SignedUnaryExpressionPlusContext.prototype.ADD = function() {
    return this.getToken(FEEL_1_1Parser.ADD, 0);
};

SignedUnaryExpressionPlusContext.prototype.unaryExpressionNotPlusMinus = function() {
    return this.getTypedRuleContext(UnaryExpressionNotPlusMinusContext,0);
};
SignedUnaryExpressionPlusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitSignedUnaryExpressionPlus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SignedUnaryExpressionMinusContext(parser, ctx) {
	UnaryExpressionContext.call(this, parser);
    UnaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SignedUnaryExpressionMinusContext.prototype = Object.create(UnaryExpressionContext.prototype);
SignedUnaryExpressionMinusContext.prototype.constructor = SignedUnaryExpressionMinusContext;

FEEL_1_1Parser.SignedUnaryExpressionMinusContext = SignedUnaryExpressionMinusContext;

SignedUnaryExpressionMinusContext.prototype.SUB = function() {
    return this.getToken(FEEL_1_1Parser.SUB, 0);
};

SignedUnaryExpressionMinusContext.prototype.unaryExpression = function() {
    return this.getTypedRuleContext(UnaryExpressionContext,0);
};
SignedUnaryExpressionMinusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitSignedUnaryExpressionMinus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FnInvocationContext(parser, ctx) {
	UnaryExpressionContext.call(this, parser);
    UnaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FnInvocationContext.prototype = Object.create(UnaryExpressionContext.prototype);
FnInvocationContext.prototype.constructor = FnInvocationContext;

FEEL_1_1Parser.FnInvocationContext = FnInvocationContext;

FnInvocationContext.prototype.unaryExpression = function() {
    return this.getTypedRuleContext(UnaryExpressionContext,0);
};

FnInvocationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};
FnInvocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitFnInvocation(this);
    } else {
        return visitor.visitChildren(this);
    }
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



FEEL_1_1Parser.prototype.unaryExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new UnaryExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 56;
    this.enterRecursionRule(localctx, 56, FEEL_1_1Parser.RULE_unaryExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.SUB:
            localctx = new SignedUnaryExpressionMinusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 348;
            this.match(FEEL_1_1Parser.SUB);
            this.state = 349;
            this.unaryExpression(4);
            break;
        case FEEL_1_1Parser.BooleanLiteral:
        case FEEL_1_1Parser.FOR:
        case FEEL_1_1Parser.IF:
        case FEEL_1_1Parser.SOME:
        case FEEL_1_1Parser.EVERY:
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
        case FEEL_1_1Parser.NOT:
        case FEEL_1_1Parser.AT:
        case FEEL_1_1Parser.Identifier:
            localctx = new NonSignedUnaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 350;
            this.unaryExpressionNotPlusMinus();
            break;
        case FEEL_1_1Parser.ADD:
            localctx = new SignedUnaryExpressionPlusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 351;
            this.match(FEEL_1_1Parser.ADD);
            this.state = 352;
            this.unaryExpressionNotPlusMinus();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 359;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FnInvocationContext(this, new UnaryExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_unaryExpression);
                this.state = 355;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 356;
                this.parameters(); 
            }
            this.state = 361;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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
    this.enterRule(localctx, 58, FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
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


function PrimaryQuantifiedExpressionContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryQuantifiedExpressionContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryQuantifiedExpressionContext.prototype.constructor = PrimaryQuantifiedExpressionContext;

FEEL_1_1Parser.PrimaryQuantifiedExpressionContext = PrimaryQuantifiedExpressionContext;

PrimaryQuantifiedExpressionContext.prototype.quantifiedExpression = function() {
    return this.getTypedRuleContext(QuantifiedExpressionContext,0);
};
PrimaryQuantifiedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryQuantifiedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimaryIfExpressionContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryIfExpressionContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryIfExpressionContext.prototype.constructor = PrimaryIfExpressionContext;

FEEL_1_1Parser.PrimaryIfExpressionContext = PrimaryIfExpressionContext;

PrimaryIfExpressionContext.prototype.ifExpression = function() {
    return this.getTypedRuleContext(IfExpressionContext,0);
};
PrimaryIfExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryIfExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
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


function PrimaryListContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryListContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryListContext.prototype.constructor = PrimaryListContext;

FEEL_1_1Parser.PrimaryListContext = PrimaryListContext;

PrimaryListContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};
PrimaryListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryList(this);
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


function PrimaryNameContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryNameContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryNameContext.prototype.constructor = PrimaryNameContext;

FEEL_1_1Parser.PrimaryNameContext = PrimaryNameContext;

PrimaryNameContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};
PrimaryNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryName(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimaryForExpressionContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryForExpressionContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryForExpressionContext.prototype.constructor = PrimaryForExpressionContext;

FEEL_1_1Parser.PrimaryForExpressionContext = PrimaryForExpressionContext;

PrimaryForExpressionContext.prototype.forExpression = function() {
    return this.getTypedRuleContext(ForExpressionContext,0);
};
PrimaryForExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryForExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrimaryParensContext(parser, ctx) {
	PrimaryContext.call(this, parser);
    PrimaryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryParensContext.prototype = Object.create(PrimaryContext.prototype);
PrimaryParensContext.prototype.constructor = PrimaryParensContext;

FEEL_1_1Parser.PrimaryParensContext = PrimaryParensContext;

PrimaryParensContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

PrimaryParensContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryParensContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};
PrimaryParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPrimaryParens(this);
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
    this.enterRule(localctx, 60, FEEL_1_1Parser.RULE_primary);
    try {
        this.state = 376;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrimaryLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 364;
            this.literal();
            break;

        case 2:
            localctx = new PrimaryForExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 365;
            this.forExpression();
            break;

        case 3:
            localctx = new PrimaryQuantifiedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 366;
            this.quantifiedExpression();
            break;

        case 4:
            localctx = new PrimaryIfExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 367;
            this.ifExpression();
            break;

        case 5:
            localctx = new PrimaryIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 368;
            this.interval();
            break;

        case 6:
            localctx = new PrimaryListContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 369;
            this.list();
            break;

        case 7:
            localctx = new PrimaryParensContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 370;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 371;
            this.expression();
            this.state = 372;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 8:
            localctx = new PrimaryUnaryTestContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 374;
            this.simplePositiveUnaryTest();
            break;

        case 9:
            localctx = new PrimaryNameContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 375;
            this.qualifiedName();
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
    this.enterRule(localctx, 62, FEEL_1_1Parser.RULE_literal);
    try {
        this.state = 384;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.IntegerLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 378;
            this.match(FEEL_1_1Parser.IntegerLiteral);
            break;
        case FEEL_1_1Parser.FloatingPointLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 379;
            this.match(FEEL_1_1Parser.FloatingPointLiteral);
            break;
        case FEEL_1_1Parser.BooleanLiteral:
            localctx = new BoolLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 380;
            this.match(FEEL_1_1Parser.BooleanLiteral);
            break;
        case FEEL_1_1Parser.AT:
            localctx = new AtLiteralLabelContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 381;
            this.atLiteral();
            break;
        case FEEL_1_1Parser.StringLiteral:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 382;
            this.match(FEEL_1_1Parser.StringLiteral);
            break;
        case FEEL_1_1Parser.NULL:
            localctx = new NullLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 383;
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
    this.enterRule(localctx, 64, FEEL_1_1Parser.RULE_atLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(FEEL_1_1Parser.AT);
        this.state = 387;
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
    this.enterRule(localctx, 66, FEEL_1_1Parser.RULE_atLiteralValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
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
    this.enterRule(localctx, 68, FEEL_1_1Parser.RULE_simplePositiveUnaryTest);
    try {
        this.state = 422;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.LT:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 391;
            localctx.op = this.match(FEEL_1_1Parser.LT);
            this.helper.enableDynamicResolution();
            this.state = 393;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.GT:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 396;
            localctx.op = this.match(FEEL_1_1Parser.GT);
            this.helper.enableDynamicResolution();
            this.state = 398;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.LE:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 401;
            localctx.op = this.match(FEEL_1_1Parser.LE);
            this.helper.enableDynamicResolution();
            this.state = 403;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.GE:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 406;
            localctx.op = this.match(FEEL_1_1Parser.GE);
            this.helper.enableDynamicResolution();
            this.state = 408;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.EQUAL:
            localctx = new PositiveUnaryTestIneqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 411;
            localctx.op = this.match(FEEL_1_1Parser.EQUAL);
            this.helper.enableDynamicResolution();
            this.state = 413;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.NOTEQUAL:
            localctx = new PositiveUnaryTestIneqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 416;
            localctx.op = this.match(FEEL_1_1Parser.NOTEQUAL);
            this.helper.enableDynamicResolution();
            this.state = 418;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.LPAREN:
        case FEEL_1_1Parser.LBRACK:
        case FEEL_1_1Parser.RBRACK:
            localctx = new PositiveUnaryTestIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 421;
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


function SimplePositiveUnaryTestsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_simplePositiveUnaryTests;
    return this;
}

SimplePositiveUnaryTestsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimplePositiveUnaryTestsContext.prototype.constructor = SimplePositiveUnaryTestsContext;

SimplePositiveUnaryTestsContext.prototype.simplePositiveUnaryTest = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimplePositiveUnaryTestContext);
    } else {
        return this.getTypedRuleContext(SimplePositiveUnaryTestContext,i);
    }
};

SimplePositiveUnaryTestsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.COMMA);
    } else {
        return this.getToken(FEEL_1_1Parser.COMMA, i);
    }
};


SimplePositiveUnaryTestsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitSimplePositiveUnaryTests(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.SimplePositiveUnaryTestsContext = SimplePositiveUnaryTestsContext;

FEEL_1_1Parser.prototype.simplePositiveUnaryTests = function() {

    var localctx = new SimplePositiveUnaryTestsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, FEEL_1_1Parser.RULE_simplePositiveUnaryTests);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.simplePositiveUnaryTest();
        this.state = 429;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 425;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 426;
            this.simplePositiveUnaryTest();
            this.state = 431;
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


function SimpleUnaryTestsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_simpleUnaryTests;
    return this;
}

SimpleUnaryTestsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleUnaryTestsContext.prototype.constructor = SimpleUnaryTestsContext;


 
SimpleUnaryTestsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PositiveUnaryTestDashContext(parser, ctx) {
	SimpleUnaryTestsContext.call(this, parser);
    SimpleUnaryTestsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PositiveUnaryTestDashContext.prototype = Object.create(SimpleUnaryTestsContext.prototype);
PositiveUnaryTestDashContext.prototype.constructor = PositiveUnaryTestDashContext;

FEEL_1_1Parser.PositiveUnaryTestDashContext = PositiveUnaryTestDashContext;

PositiveUnaryTestDashContext.prototype.SUB = function() {
    return this.getToken(FEEL_1_1Parser.SUB, 0);
};
PositiveUnaryTestDashContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveUnaryTestDash(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PositiveSimplePositiveUnaryTestsContext(parser, ctx) {
	SimpleUnaryTestsContext.call(this, parser);
    SimpleUnaryTestsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PositiveSimplePositiveUnaryTestsContext.prototype = Object.create(SimpleUnaryTestsContext.prototype);
PositiveSimplePositiveUnaryTestsContext.prototype.constructor = PositiveSimplePositiveUnaryTestsContext;

FEEL_1_1Parser.PositiveSimplePositiveUnaryTestsContext = PositiveSimplePositiveUnaryTestsContext;

PositiveSimplePositiveUnaryTestsContext.prototype.simplePositiveUnaryTests = function() {
    return this.getTypedRuleContext(SimplePositiveUnaryTestsContext,0);
};
PositiveSimplePositiveUnaryTestsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitPositiveSimplePositiveUnaryTests(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegatedSimplePositiveUnaryTestsContext(parser, ctx) {
	SimpleUnaryTestsContext.call(this, parser);
    SimpleUnaryTestsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegatedSimplePositiveUnaryTestsContext.prototype = Object.create(SimpleUnaryTestsContext.prototype);
NegatedSimplePositiveUnaryTestsContext.prototype.constructor = NegatedSimplePositiveUnaryTestsContext;

FEEL_1_1Parser.NegatedSimplePositiveUnaryTestsContext = NegatedSimplePositiveUnaryTestsContext;

NegatedSimplePositiveUnaryTestsContext.prototype.NOT = function() {
    return this.getToken(FEEL_1_1Parser.NOT, 0);
};

NegatedSimplePositiveUnaryTestsContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

NegatedSimplePositiveUnaryTestsContext.prototype.simplePositiveUnaryTests = function() {
    return this.getTypedRuleContext(SimplePositiveUnaryTestsContext,0);
};

NegatedSimplePositiveUnaryTestsContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};
NegatedSimplePositiveUnaryTestsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNegatedSimplePositiveUnaryTests(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FEEL_1_1Parser.SimpleUnaryTestsContext = SimpleUnaryTestsContext;

FEEL_1_1Parser.prototype.simpleUnaryTests = function() {

    var localctx = new SimpleUnaryTestsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, FEEL_1_1Parser.RULE_simpleUnaryTests);
    try {
        this.state = 439;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.LPAREN:
        case FEEL_1_1Parser.LBRACK:
        case FEEL_1_1Parser.RBRACK:
        case FEEL_1_1Parser.EQUAL:
        case FEEL_1_1Parser.GT:
        case FEEL_1_1Parser.LT:
        case FEEL_1_1Parser.LE:
        case FEEL_1_1Parser.GE:
        case FEEL_1_1Parser.NOTEQUAL:
            localctx = new PositiveSimplePositiveUnaryTestsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 432;
            this.simplePositiveUnaryTests();
            break;
        case FEEL_1_1Parser.NOT:
            localctx = new NegatedSimplePositiveUnaryTestsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 433;
            this.match(FEEL_1_1Parser.NOT);
            this.state = 434;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 435;
            this.simplePositiveUnaryTests();
            this.state = 436;
            this.match(FEEL_1_1Parser.RPAREN);
            break;
        case FEEL_1_1Parser.SUB:
            localctx = new PositiveUnaryTestDashContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 438;
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
    this.enterRule(localctx, 74, FEEL_1_1Parser.RULE_positiveUnaryTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 441;
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
    this.enterRule(localctx, 76, FEEL_1_1Parser.RULE_positiveUnaryTests);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.positiveUnaryTest();
        this.state = 448;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 444;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 445;
            this.positiveUnaryTest();
            this.state = 450;
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
    this.enterRule(localctx, 78, FEEL_1_1Parser.RULE_unaryTestsRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.unaryTests();
        this.state = 452;
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
    this.enterRule(localctx, 80, FEEL_1_1Parser.RULE_unaryTests);
    try {
        this.state = 461;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryTests_negatedContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 454;
            this.match(FEEL_1_1Parser.NOT);
            this.state = 455;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 456;
            this.positiveUnaryTests();
            this.state = 457;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            localctx = new UnaryTests_positiveContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 459;
            this.positiveUnaryTests();
            break;

        case 3:
            localctx = new UnaryTests_emptyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 460;
            this.match(FEEL_1_1Parser.SUB);
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
    this.enterRule(localctx, 82, FEEL_1_1Parser.RULE_endpoint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
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
    this.enterRule(localctx, 84, FEEL_1_1Parser.RULE_interval);
    try {
        this.state = 519;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 465;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 466;
            localctx.start = this.endpoint();
            this.state = 467;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 468;
            localctx.end = this.endpoint();
            this.state = 469;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 471;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 472;
            localctx.start = this.endpoint();
            this.state = 473;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 474;
            localctx.end = this.endpoint();
            this.state = 475;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 477;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 478;
            localctx.start = this.endpoint();
            this.state = 479;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 480;
            localctx.end = this.endpoint();
            this.state = 481;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 483;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 484;
            localctx.start = this.endpoint();
            this.state = 485;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 486;
            localctx.end = this.endpoint();
            this.state = 487;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 489;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 490;
            localctx.start = this.endpoint();
            this.state = 491;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 492;
            localctx.end = this.endpoint();
            this.state = 493;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 495;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 496;
            localctx.start = this.endpoint();
            this.state = 497;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 498;
            localctx.end = this.endpoint();
            this.state = 499;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 501;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 502;
            localctx.start = this.endpoint();
            this.state = 503;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 504;
            localctx.end = this.endpoint();
            this.state = 505;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 507;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 508;
            localctx.start = this.endpoint();
            this.state = 509;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 510;
            localctx.end = this.endpoint();
            this.state = 511;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 513;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 514;
            localctx.start = this.endpoint();
            this.state = 515;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 516;
            localctx.end = this.endpoint();
            this.state = 517;
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


function QualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_qualifiedName;
    this.n1 = null; // NameRefContext
    this.n2 = null; // NameRefContext
    return this;
}

QualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedNameContext.prototype.constructor = QualifiedNameContext;

QualifiedNameContext.prototype.nameRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameRefContext);
    } else {
        return this.getTypedRuleContext(NameRefContext,i);
    }
};

QualifiedNameContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FEEL_1_1Parser.DOT);
    } else {
        return this.getToken(FEEL_1_1Parser.DOT, i);
    }
};


QualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.QualifiedNameContext = QualifiedNameContext;

FEEL_1_1Parser.prototype.qualifiedName = function() {

    var localctx = new QualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, FEEL_1_1Parser.RULE_qualifiedName);

        var name = null;
        var count = 0;
        var qn = ([]);

    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 521;
        localctx.n1 = this.nameRef();
         name = this.helper.getOriginalText( localctx.n1 ); qn.push( name ); this.helper.validateVariable( localctx.n1, qn, name ); 
        this.state = 530;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 523;
                this.match(FEEL_1_1Parser.DOT);
                this.helper.recoverScope( name ); count++;
                this.state = 525;
                localctx.n2 = this.nameRef();
                name=this.helper.getOriginalText( localctx.n2 );  qn.push( name ); this.helper.validateVariable( localctx.n1, qn, name );  
            }
            this.state = 532;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
        }

        this._ctx.stop = this._input.LT(-1);

            for (var i = 0; i < count; i++) {
                this.helper.dismissScope();
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


function NameRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_nameRef;
    this.st = null; // Token
    this.not_st = null; // Token
    return this;
}

NameRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameRefContext.prototype.constructor = NameRefContext;

NameRefContext.prototype.Identifier = function() {
    return this.getToken(FEEL_1_1Parser.Identifier, 0);
};

NameRefContext.prototype.NOT = function() {
    return this.getToken(FEEL_1_1Parser.NOT, 0);
};

NameRefContext.prototype.nameRefOtherToken = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameRefOtherTokenContext);
    } else {
        return this.getTypedRuleContext(NameRefOtherTokenContext,i);
    }
};

NameRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNameRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NameRefContext = NameRefContext;

FEEL_1_1Parser.prototype.nameRef = function() {

    var localctx = new NameRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, FEEL_1_1Parser.RULE_nameRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 537;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.Identifier:
            this.state = 533;
            localctx.st = this.match(FEEL_1_1Parser.Identifier);
             this.helper.startVariable( localctx.st ); 
            break;
        case FEEL_1_1Parser.NOT:
            this.state = 535;
            localctx.not_st = this.match(FEEL_1_1Parser.NOT);
             this.helper.startVariable( localctx.not_st ); 
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 542;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 539;
                this.nameRefOtherToken(); 
            }
            this.state = 544;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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


function NameRefOtherTokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FEEL_1_1Parser.RULE_nameRefOtherToken;
    return this;
}

NameRefOtherTokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameRefOtherTokenContext.prototype.constructor = NameRefOtherTokenContext;

NameRefOtherTokenContext.prototype.LPAREN = function() {
    return this.getToken(FEEL_1_1Parser.LPAREN, 0);
};

NameRefOtherTokenContext.prototype.RPAREN = function() {
    return this.getToken(FEEL_1_1Parser.RPAREN, 0);
};

NameRefOtherTokenContext.prototype.LBRACK = function() {
    return this.getToken(FEEL_1_1Parser.LBRACK, 0);
};

NameRefOtherTokenContext.prototype.RBRACK = function() {
    return this.getToken(FEEL_1_1Parser.RBRACK, 0);
};

NameRefOtherTokenContext.prototype.LBRACE = function() {
    return this.getToken(FEEL_1_1Parser.LBRACE, 0);
};

NameRefOtherTokenContext.prototype.RBRACE = function() {
    return this.getToken(FEEL_1_1Parser.RBRACE, 0);
};

NameRefOtherTokenContext.prototype.LT = function() {
    return this.getToken(FEEL_1_1Parser.LT, 0);
};

NameRefOtherTokenContext.prototype.GT = function() {
    return this.getToken(FEEL_1_1Parser.GT, 0);
};

NameRefOtherTokenContext.prototype.EQUAL = function() {
    return this.getToken(FEEL_1_1Parser.EQUAL, 0);
};

NameRefOtherTokenContext.prototype.BANG = function() {
    return this.getToken(FEEL_1_1Parser.BANG, 0);
};

NameRefOtherTokenContext.prototype.COMMA = function() {
    return this.getToken(FEEL_1_1Parser.COMMA, 0);
};

NameRefOtherTokenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FEEL_1_1Visitor ) {
        return visitor.visitNameRefOtherToken(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FEEL_1_1Parser.NameRefOtherTokenContext = NameRefOtherTokenContext;

FEEL_1_1Parser.prototype.nameRefOtherToken = function() {

    var localctx = new NameRefOtherTokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, FEEL_1_1Parser.RULE_nameRefOtherToken);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 545;
        if (!(  this.helper.followUp( this._input.LT(1), localctx===null ) )) {
            throw new antlr4.error.FailedPredicateException(this, " this.helper.followUp( this._input.LT(1), localctx===null ) ");
        }
        this.state = 546;
        _la = this._input.LA(1);
        if(_la<=0 || ((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (FEEL_1_1Parser.LPAREN - 25)) | (1 << (FEEL_1_1Parser.RPAREN - 25)) | (1 << (FEEL_1_1Parser.LBRACE - 25)) | (1 << (FEEL_1_1Parser.RBRACE - 25)) | (1 << (FEEL_1_1Parser.LBRACK - 25)) | (1 << (FEEL_1_1Parser.RBRACK - 25)) | (1 << (FEEL_1_1Parser.COMMA - 25)) | (1 << (FEEL_1_1Parser.EQUAL - 25)) | (1 << (FEEL_1_1Parser.GT - 25)) | (1 << (FEEL_1_1Parser.LT - 25)) | (1 << (FEEL_1_1Parser.BANG - 25)))) !== 0)) {
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
    this.enterRule(localctx, 92, FEEL_1_1Parser.RULE_reusableKeywords);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
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
	case 9:
			return this.iterationContext_sempred(localctx, predIndex);
	case 19:
			return this.conditionalOrExpression_sempred(localctx, predIndex);
	case 20:
			return this.conditionalAndExpression_sempred(localctx, predIndex);
	case 21:
			return this.comparisonExpression_sempred(localctx, predIndex);
	case 22:
			return this.relationalExpression_sempred(localctx, predIndex);
	case 24:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 25:
			return this.multiplicativeExpression_sempred(localctx, predIndex);
	case 26:
			return this.powerExpression_sempred(localctx, predIndex);
	case 27:
			return this.filterPathExpression_sempred(localctx, predIndex);
	case 28:
			return this.unaryExpression_sempred(localctx, predIndex);
	case 45:
			return this.nameRefOtherToken_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FEEL_1_1Parser.prototype.iterationContext_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.helper.isFeatDMN12EnhancedForLoopEnabled();
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.conditionalOrExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.conditionalAndExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.comparisonExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.relationalExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.additiveExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.multiplicativeExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.powerExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.filterPathExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);
		case 12:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.unaryExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 13:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.nameRefOtherToken_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 14:
			return  this.helper.followUp( this._input.LT(1), localctx===null ) ;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FEEL_1_1Parser = FEEL_1_1Parser;
