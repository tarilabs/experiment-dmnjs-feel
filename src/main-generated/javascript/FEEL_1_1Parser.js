// Generated from FEEL_1_1.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FEEL_1_1Visitor = require('./FEEL_1_1Visitor').FEEL_1_1Visitor;

var grammarFileName = "FEEL_1_1.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u0205\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005f\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006k\n\u0006\f\u0006\u000e\u0006n\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0007\bz\n\b\f\b\u000e\b}\u000b\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u008a\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a1\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a9\n\f\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00b2\n\r\f",
    "\r\u000e\r\u00b5\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u00c0\n\u000f\f\u000f\u000e\u000f\u00c3\u000b\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00cd\n\u0011\f\u0011\u000e\u0011\u00d0\u000b\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u00d8\n\u0012\f\u0012\u000e\u0012\u00db\u000b\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u00e3\n\u0013\f\u0013\u000e\u0013\u00e6\u000b\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014",
    "\u00fa\n\u0014\f\u0014\u000e\u0014\u00fd\u000b\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0007\u0015\u0102\n\u0015\f\u0015\u000e\u0015\u0105",
    "\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u0110\n",
    "\u0016\f\u0016\u000e\u0016\u0113\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u011b\n",
    "\u0017\f\u0017\u000e\u0017\u011e\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0126\n",
    "\u0018\f\u0018\u000e\u0018\u0129\u000b\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0007\u0019\u0135\n\u0019\f\u0019\u000e\u0019",
    "\u0138\u000b\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u0140\n\u001a\u0003\u001a\u0003\u001a",
    "\u0007\u001a\u0144\n\u001a\f\u001a\u000e\u001a\u0147\u000b\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u0157\n\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u015f\n",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0005 \u0185\n \u0003!\u0003!\u0003!\u0007!\u018a\n!\f!\u000e!\u018d",
    "\u000b!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005",
    "\"\u0196\n\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0007$\u019d\n$\f$\u000e",
    "$\u01a0\u000b$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0005&\u01ac\n&\u0003\'\u0003\'\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0005(\u01e6\n(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0007)\u01ef\n)\f)\u000e)\u01f2\u000b)\u0003*\u0003*\u0003*\u0003",
    "*\u0005*\u01f8\n*\u0003*\u0007*\u01fb\n*\f*\u000e*\u01fe\u000b*\u0003",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0002\u000b \"$&*,.02-\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNPRTV\u0002\u0007\u0005\u0002\u0017\u0017##-",
    "0\u0003\u0002$)\u0003\u0002/0\u0005\u0002\u001b!$&11\u0005\u0002\u0004",
    "\u0005\u0007\u001622\u0002\u021d\u0002X\u0003\u0002\u0002\u0002\u0004",
    "[\u0003\u0002\u0002\u0002\u0006]\u0003\u0002\u0002\u0002\be\u0003\u0002",
    "\u0002\u0002\ng\u0003\u0002\u0002\u0002\fo\u0003\u0002\u0002\u0002\u000e",
    "v\u0003\u0002\u0002\u0002\u0010\u0089\u0003\u0002\u0002\u0002\u0012",
    "\u008b\u0003\u0002\u0002\u0002\u0014\u00a0\u0003\u0002\u0002\u0002\u0016",
    "\u00a8\u0003\u0002\u0002\u0002\u0018\u00aa\u0003\u0002\u0002\u0002\u001a",
    "\u00b6\u0003\u0002\u0002\u0002\u001c\u00b9\u0003\u0002\u0002\u0002\u001e",
    "\u00c4\u0003\u0002\u0002\u0002 \u00c6\u0003\u0002\u0002\u0002\"\u00d1",
    "\u0003\u0002\u0002\u0002$\u00dc\u0003\u0002\u0002\u0002&\u00e7\u0003",
    "\u0002\u0002\u0002(\u00fe\u0003\u0002\u0002\u0002*\u0106\u0003\u0002",
    "\u0002\u0002,\u0114\u0003\u0002\u0002\u0002.\u011f\u0003\u0002\u0002",
    "\u00020\u012a\u0003\u0002\u0002\u00022\u013f\u0003\u0002\u0002\u0002",
    "4\u0148\u0003\u0002\u0002\u00026\u0156\u0003\u0002\u0002\u00028\u015e",
    "\u0003\u0002\u0002\u0002:\u0160\u0003\u0002\u0002\u0002<\u0163\u0003",
    "\u0002\u0002\u0002>\u0184\u0003\u0002\u0002\u0002@\u0186\u0003\u0002",
    "\u0002\u0002B\u0195\u0003\u0002\u0002\u0002D\u0197\u0003\u0002\u0002",
    "\u0002F\u0199\u0003\u0002\u0002\u0002H\u01a1\u0003\u0002\u0002\u0002",
    "J\u01ab\u0003\u0002\u0002\u0002L\u01ad\u0003\u0002\u0002\u0002N\u01e5",
    "\u0003\u0002\u0002\u0002P\u01e7\u0003\u0002\u0002\u0002R\u01f7\u0003",
    "\u0002\u0002\u0002T\u01ff\u0003\u0002\u0002\u0002V\u0202\u0003\u0002",
    "\u0002\u0002XY\u0005\u0004\u0003\u0002YZ\u0007\u0002\u0002\u0003Z\u0003",
    "\u0003\u0002\u0002\u0002[\\\u0005\u0006\u0004\u0002\\\u0005\u0003\u0002",
    "\u0002\u0002]^\u0005 \u0011\u0002^\u0007\u0003\u0002\u0002\u0002_`\u0007",
    "\u001b\u0002\u0002`f\u0007\u001c\u0002\u0002ab\u0007\u001b\u0002\u0002",
    "bc\u0005\n\u0006\u0002cd\u0007\u001c\u0002\u0002df\u0003\u0002\u0002",
    "\u0002e_\u0003\u0002\u0002\u0002ea\u0003\u0002\u0002\u0002f\t\u0003",
    "\u0002\u0002\u0002gl\u0005\u0004\u0003\u0002hi\u0007!\u0002\u0002ik",
    "\u0005\u0004\u0003\u0002jh\u0003\u0002\u0002\u0002kn\u0003\u0002\u0002",
    "\u0002lj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002m\u000b\u0003",
    "\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002op\u0007\u0004\u0002\u0002",
    "pq\u0005\u000e\b\u0002qr\u0007\u0005\u0002\u0002rs\b\u0007\u0001\u0002",
    "st\u0005\u0004\u0003\u0002tu\b\u0007\u0001\u0002u\r\u0003\u0002\u0002",
    "\u0002v{\u0005\u0010\t\u0002wx\u0007!\u0002\u0002xz\u0005\u0010\t\u0002",
    "yw\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002",
    "\u0002{|\u0003\u0002\u0002\u0002|\u000f\u0003\u0002\u0002\u0002}{\u0003",
    "\u0002\u0002\u0002~\u007f\u0006\t\u0002\u0002\u007f\u0080\u0005\u001a",
    "\u000e\u0002\u0080\u0081\u0007\u0006\u0002\u0002\u0081\u0082\u0005\u0004",
    "\u0003\u0002\u0082\u0083\u0007\"\u0002\u0002\u0083\u0084\u0005\u0004",
    "\u0003\u0002\u0084\u008a\u0003\u0002\u0002\u0002\u0085\u0086\u0005\u001a",
    "\u000e\u0002\u0086\u0087\u0007\u0006\u0002\u0002\u0087\u0088\u0005\u0004",
    "\u0003\u0002\u0088\u008a\u0003\u0002\u0002\u0002\u0089~\u0003\u0002",
    "\u0002\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u008a\u0011\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0007\u0007\u0002\u0002\u008c\u008d\u0005\u0004",
    "\u0003\u0002\u008d\u008e\u0007\b\u0002\u0002\u008e\u008f\u0005\u0004",
    "\u0003\u0002\u008f\u0090\u0007\t\u0002\u0002\u0090\u0091\u0005\u0004",
    "\u0003\u0002\u0091\u0013\u0003\u0002\u0002\u0002\u0092\u0093\u0007\n",
    "\u0002\u0002\u0093\u0094\u0005\u000e\b\u0002\u0094\u0095\u0007\f\u0002",
    "\u0002\u0095\u0096\b\u000b\u0001\u0002\u0096\u0097\u0005\u0004\u0003",
    "\u0002\u0097\u0098\b\u000b\u0001\u0002\u0098\u00a1\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0007\u000b\u0002\u0002\u009a\u009b\u0005\u000e\b",
    "\u0002\u009b\u009c\u0007\f\u0002\u0002\u009c\u009d\b\u000b\u0001\u0002",
    "\u009d\u009e\u0005\u0004\u0003\u0002\u009e\u009f\b\u000b\u0001\u0002",
    "\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u0092\u0003\u0002\u0002\u0002",
    "\u00a0\u0099\u0003\u0002\u0002\u0002\u00a1\u0015\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0007\u001f\u0002\u0002\u00a3\u00a9\u0007 \u0002\u0002",
    "\u00a4\u00a5\u0007\u001f\u0002\u0002\u00a5\u00a6\u0005(\u0015\u0002",
    "\u00a6\u00a7\u0007 \u0002\u0002\u00a7\u00a9\u0003\u0002\u0002\u0002",
    "\u00a8\u00a2\u0003\u0002\u0002\u0002\u00a8\u00a4\u0003\u0002\u0002\u0002",
    "\u00a9\u0017\u0003\u0002\u0002\u0002\u00aa\u00b3\u00074\u0002\u0002",
    "\u00ab\u00b2\u00074\u0002\u0002\u00ac\u00b2\u0005\u001e\u0010\u0002",
    "\u00ad\u00b2\u0007\u0018\u0002\u0002\u00ae\u00b2\u0007\u0019\u0002\u0002",
    "\u00af\u00b2\u0005V,\u0002\u00b0\u00b2\u0007\u0006\u0002\u0002\u00b1",
    "\u00ab\u0003\u0002\u0002\u0002\u00b1\u00ac\u0003\u0002\u0002\u0002\u00b1",
    "\u00ad\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003\u0002\u0002\u0002\u00b1",
    "\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2",
    "\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3",
    "\u00b4\u0003\u0002\u0002\u0002\u00b4\u0019\u0003\u0002\u0002\u0002\u00b5",
    "\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b7\u0005\u001c\u000f\u0002\u00b7",
    "\u00b8\b\u000e\u0001\u0002\u00b8\u001b\u0003\u0002\u0002\u0002\u00b9",
    "\u00c1\u00074\u0002\u0002\u00ba\u00c0\u00074\u0002\u0002\u00bb\u00c0",
    "\u0005\u001e\u0010\u0002\u00bc\u00c0\u0007\u0018\u0002\u0002\u00bd\u00c0",
    "\u0007\u0019\u0002\u0002\u00be\u00c0\u0005V,\u0002\u00bf\u00ba\u0003",
    "\u0002\u0002\u0002\u00bf\u00bb\u0003\u0002\u0002\u0002\u00bf\u00bc\u0003",
    "\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00be\u0003",
    "\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003",
    "\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u001d\u0003",
    "\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\t",
    "\u0002\u0002\u0002\u00c5\u001f\u0003\u0002\u0002\u0002\u00c6\u00c7\b",
    "\u0011\u0001\u0002\u00c7\u00c8\u0005\"\u0012\u0002\u00c8\u00ce\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\f\u0003\u0002\u0002\u00ca\u00cb\u0007",
    "\u0011\u0002\u0002\u00cb\u00cd\u0005\"\u0012\u0002\u00cc\u00c9\u0003",
    "\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf!\u0003",
    "\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d2\b",
    "\u0012\u0001\u0002\u00d2\u00d3\u0005$\u0013\u0002\u00d3\u00d9\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\f\u0003\u0002\u0002\u00d5\u00d6\u0007",
    "\u0012\u0002\u0002\u00d6\u00d8\u0005$\u0013\u0002\u00d7\u00d4\u0003",
    "\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da#\u0003",
    "\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00dd\b",
    "\u0013\u0001\u0002\u00dd\u00de\u0005&\u0014\u0002\u00de\u00e4\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\f\u0003\u0002\u0002\u00e0\u00e1\t\u0003",
    "\u0002\u0002\u00e1\u00e3\u0005&\u0014\u0002\u00e2\u00df\u0003\u0002",
    "\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5%\u0003\u0002",
    "\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7\u00e8\b\u0014",
    "\u0001\u0002\u00e8\u00e9\u0005*\u0016\u0002\u00e9\u00fb\u0003\u0002",
    "\u0002\u0002\u00ea\u00eb\f\u0005\u0002\u0002\u00eb\u00ec\u0007\u0013",
    "\u0002\u0002\u00ec\u00ed\u0005*\u0016\u0002\u00ed\u00ee\u0007\u0012",
    "\u0002\u0002\u00ee\u00ef\u0005*\u0016\u0002\u00ef\u00fa\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\f\u0004\u0002\u0002\u00f1\u00f2\u0007\u0006",
    "\u0002\u0002\u00f2\u00f3\u0007\u001b\u0002\u0002\u00f3\u00f4\u0005F",
    "$\u0002\u00f4\u00f5\u0007\u001c\u0002\u0002\u00f5\u00fa\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\f\u0003\u0002\u0002\u00f7\u00f8\u0007\u0006",
    "\u0002\u0002\u00f8\u00fa\u0005\u0004\u0003\u0002\u00f9\u00ea\u0003\u0002",
    "\u0002\u0002\u00f9\u00f0\u0003\u0002\u0002\u0002\u00f9\u00f6\u0003\u0002",
    "\u0002\u0002\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\'\u0003\u0002",
    "\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe\u0103\u0005\u0004",
    "\u0003\u0002\u00ff\u0100\u0007!\u0002\u0002\u0100\u0102\u0005\u0004",
    "\u0003\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102\u0105\u0003\u0002",
    "\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002",
    "\u0002\u0002\u0104)\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002",
    "\u0002\u0002\u0106\u0107\b\u0016\u0001\u0002\u0107\u0108\u0005,\u0017",
    "\u0002\u0108\u0111\u0003\u0002\u0002\u0002\u0109\u010a\f\u0004\u0002",
    "\u0002\u010a\u010b\u0007-\u0002\u0002\u010b\u0110\u0005,\u0017\u0002",
    "\u010c\u010d\f\u0003\u0002\u0002\u010d\u010e\u0007.\u0002\u0002\u010e",
    "\u0110\u0005,\u0017\u0002\u010f\u0109\u0003\u0002\u0002\u0002\u010f",
    "\u010c\u0003\u0002\u0002\u0002\u0110\u0113\u0003\u0002\u0002\u0002\u0111",
    "\u010f\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "+\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0114",
    "\u0115\b\u0017\u0001\u0002\u0115\u0116\u0005.\u0018\u0002\u0116\u011c",
    "\u0003\u0002\u0002\u0002\u0117\u0118\f\u0003\u0002\u0002\u0118\u0119",
    "\t\u0004\u0002\u0002\u0119\u011b\u0005.\u0018\u0002\u011a\u0117\u0003",
    "\u0002\u0002\u0002\u011b\u011e\u0003\u0002\u0002\u0002\u011c\u011a\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d-\u0003",
    "\u0002\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011f\u0120\b",
    "\u0018\u0001\u0002\u0120\u0121\u00050\u0019\u0002\u0121\u0127\u0003",
    "\u0002\u0002\u0002\u0122\u0123\f\u0003\u0002\u0002\u0123\u0124\u0007",
    ",\u0002\u0002\u0124\u0126\u00050\u0019\u0002\u0125\u0122\u0003\u0002",
    "\u0002\u0002\u0126\u0129\u0003\u0002\u0002\u0002\u0127\u0125\u0003\u0002",
    "\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128/\u0003\u0002",
    "\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u012a\u012b\b\u0019",
    "\u0001\u0002\u012b\u012c\u00052\u001a\u0002\u012c\u0136\u0003\u0002",
    "\u0002\u0002\u012d\u012e\f\u0003\u0002\u0002\u012e\u012f\u0007\u001f",
    "\u0002\u0002\u012f\u0130\b\u0019\u0001\u0002\u0130\u0131\u0005\u0004",
    "\u0003\u0002\u0131\u0132\b\u0019\u0001\u0002\u0132\u0133\u0007 \u0002",
    "\u0002\u0133\u0135\u0003\u0002\u0002\u0002\u0134\u012d\u0003\u0002\u0002",
    "\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002",
    "\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u01371\u0003\u0002\u0002",
    "\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013a\b\u001a\u0001",
    "\u0002\u013a\u013b\u0007.\u0002\u0002\u013b\u0140\u00052\u001a\u0006",
    "\u013c\u0140\u00054\u001b\u0002\u013d\u013e\u0007-\u0002\u0002\u013e",
    "\u0140\u00054\u001b\u0002\u013f\u0139\u0003\u0002\u0002\u0002\u013f",
    "\u013c\u0003\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u0140",
    "\u0145\u0003\u0002\u0002\u0002\u0141\u0142\f\u0003\u0002\u0002\u0142",
    "\u0144\u0005\b\u0005\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0144",
    "\u0147\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0145",
    "\u0146\u0003\u0002\u0002\u0002\u01463\u0003\u0002\u0002\u0002\u0147",
    "\u0145\u0003\u0002\u0002\u0002\u0148\u0149\u00056\u001c\u0002\u0149",
    "5\u0003\u0002\u0002\u0002\u014a\u0157\u00058\u001d\u0002\u014b\u0157",
    "\u0005\f\u0007\u0002\u014c\u0157\u0005\u0014\u000b\u0002\u014d\u0157",
    "\u0005\u0012\n\u0002\u014e\u0157\u0005N(\u0002\u014f\u0157\u0005\u0016",
    "\f\u0002\u0150\u0151\u0007\u001b\u0002\u0002\u0151\u0152\u0005\u0004",
    "\u0003\u0002\u0152\u0153\u0007\u001c\u0002\u0002\u0153\u0157\u0003\u0002",
    "\u0002\u0002\u0154\u0157\u0005> \u0002\u0155\u0157\u0005P)\u0002\u0156",
    "\u014a\u0003\u0002\u0002\u0002\u0156\u014b\u0003\u0002\u0002\u0002\u0156",
    "\u014c\u0003\u0002\u0002\u0002\u0156\u014d\u0003\u0002\u0002\u0002\u0156",
    "\u014e\u0003\u0002\u0002\u0002\u0156\u014f\u0003\u0002\u0002\u0002\u0156",
    "\u0150\u0003\u0002\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0156",
    "\u0155\u0003\u0002\u0002\u0002\u01577\u0003\u0002\u0002\u0002\u0158",
    "\u015f\u0007\u0018\u0002\u0002\u0159\u015f\u0007\u0019\u0002\u0002\u015a",
    "\u015f\u0007\u0003\u0002\u0002\u015b\u015f\u0005:\u001e\u0002\u015c",
    "\u015f\u0007\u001a\u0002\u0002\u015d\u015f\u0007\u0014\u0002\u0002\u015e",
    "\u0158\u0003\u0002\u0002\u0002\u015e\u0159\u0003\u0002\u0002\u0002\u015e",
    "\u015a\u0003\u0002\u0002\u0002\u015e\u015b\u0003\u0002\u0002\u0002\u015e",
    "\u015c\u0003\u0002\u0002\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015f",
    "9\u0003\u0002\u0002\u0002\u0160\u0161\u00073\u0002\u0002\u0161\u0162",
    "\u0005<\u001f\u0002\u0162;\u0003\u0002\u0002\u0002\u0163\u0164\u0007",
    "\u001a\u0002\u0002\u0164=\u0003\u0002\u0002\u0002\u0165\u0166\u0007",
    "&\u0002\u0002\u0166\u0167\b \u0001\u0002\u0167\u0168\u0005L\'\u0002",
    "\u0168\u0169\b \u0001\u0002\u0169\u0185\u0003\u0002\u0002\u0002\u016a",
    "\u016b\u0007%\u0002\u0002\u016b\u016c\b \u0001\u0002\u016c\u016d\u0005",
    "L\'\u0002\u016d\u016e\b \u0001\u0002\u016e\u0185\u0003\u0002\u0002\u0002",
    "\u016f\u0170\u0007\'\u0002\u0002\u0170\u0171\b \u0001\u0002\u0171\u0172",
    "\u0005L\'\u0002\u0172\u0173\b \u0001\u0002\u0173\u0185\u0003\u0002\u0002",
    "\u0002\u0174\u0175\u0007(\u0002\u0002\u0175\u0176\b \u0001\u0002\u0176",
    "\u0177\u0005L\'\u0002\u0177\u0178\b \u0001\u0002\u0178\u0185\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0007$\u0002\u0002\u017a\u017b\b \u0001\u0002",
    "\u017b\u017c\u0005L\'\u0002\u017c\u017d\b \u0001\u0002\u017d\u0185\u0003",
    "\u0002\u0002\u0002\u017e\u017f\u0007)\u0002\u0002\u017f\u0180\b \u0001",
    "\u0002\u0180\u0181\u0005L\'\u0002\u0181\u0182\b \u0001\u0002\u0182\u0185",
    "\u0003\u0002\u0002\u0002\u0183\u0185\u0005N(\u0002\u0184\u0165\u0003",
    "\u0002\u0002\u0002\u0184\u016a\u0003\u0002\u0002\u0002\u0184\u016f\u0003",
    "\u0002\u0002\u0002\u0184\u0174\u0003\u0002\u0002\u0002\u0184\u0179\u0003",
    "\u0002\u0002\u0002\u0184\u017e\u0003\u0002\u0002\u0002\u0184\u0183\u0003",
    "\u0002\u0002\u0002\u0185?\u0003\u0002\u0002\u0002\u0186\u018b\u0005",
    "> \u0002\u0187\u0188\u0007!\u0002\u0002\u0188\u018a\u0005> \u0002\u0189",
    "\u0187\u0003\u0002\u0002\u0002\u018a\u018d\u0003\u0002\u0002\u0002\u018b",
    "\u0189\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002\u018c",
    "A\u0003\u0002\u0002\u0002\u018d\u018b\u0003\u0002\u0002\u0002\u018e",
    "\u0196\u0005@!\u0002\u018f\u0190\u00072\u0002\u0002\u0190\u0191\u0007",
    "\u001b\u0002\u0002\u0191\u0192\u0005@!\u0002\u0192\u0193\u0007\u001c",
    "\u0002\u0002\u0193\u0196\u0003\u0002\u0002\u0002\u0194\u0196\u0007.",
    "\u0002\u0002\u0195\u018e\u0003\u0002\u0002\u0002\u0195\u018f\u0003\u0002",
    "\u0002\u0002\u0195\u0194\u0003\u0002\u0002\u0002\u0196C\u0003\u0002",
    "\u0002\u0002\u0197\u0198\u0005\u0004\u0003\u0002\u0198E\u0003\u0002",
    "\u0002\u0002\u0199\u019e\u0005D#\u0002\u019a\u019b\u0007!\u0002\u0002",
    "\u019b\u019d\u0005D#\u0002\u019c\u019a\u0003\u0002\u0002\u0002\u019d",
    "\u01a0\u0003\u0002\u0002\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e",
    "\u019f\u0003\u0002\u0002\u0002\u019fG\u0003\u0002\u0002\u0002\u01a0",
    "\u019e\u0003\u0002\u0002\u0002\u01a1\u01a2\u0005J&\u0002\u01a2\u01a3",
    "\u0007\u0002\u0002\u0003\u01a3I\u0003\u0002\u0002\u0002\u01a4\u01a5",
    "\u00072\u0002\u0002\u01a5\u01a6\u0007\u001b\u0002\u0002\u01a6\u01a7",
    "\u0005F$\u0002\u01a7\u01a8\u0007\u001c\u0002\u0002\u01a8\u01ac\u0003",
    "\u0002\u0002\u0002\u01a9\u01ac\u0005F$\u0002\u01aa\u01ac\u0007.\u0002",
    "\u0002\u01ab\u01a4\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002",
    "\u0002\u01ab\u01aa\u0003\u0002\u0002\u0002\u01acK\u0003\u0002\u0002",
    "\u0002\u01ad\u01ae\u0005*\u0016\u0002\u01aeM\u0003\u0002\u0002\u0002",
    "\u01af\u01b0\u0007\u001b\u0002\u0002\u01b0\u01b1\u0005L\'\u0002\u01b1",
    "\u01b2\u0007\"\u0002\u0002\u01b2\u01b3\u0005L\'\u0002\u01b3\u01b4\u0007",
    "\u001c\u0002\u0002\u01b4\u01e6\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007",
    "\u001b\u0002\u0002\u01b6\u01b7\u0005L\'\u0002\u01b7\u01b8\u0007\"\u0002",
    "\u0002\u01b8\u01b9\u0005L\'\u0002\u01b9\u01ba\u0007\u001f\u0002\u0002",
    "\u01ba\u01e6\u0003\u0002\u0002\u0002\u01bb\u01bc\u0007\u001b\u0002\u0002",
    "\u01bc\u01bd\u0005L\'\u0002\u01bd\u01be\u0007\"\u0002\u0002\u01be\u01bf",
    "\u0005L\'\u0002\u01bf\u01c0\u0007 \u0002\u0002\u01c0\u01e6\u0003\u0002",
    "\u0002\u0002\u01c1\u01c2\u0007 \u0002\u0002\u01c2\u01c3\u0005L\'\u0002",
    "\u01c3\u01c4\u0007\"\u0002\u0002\u01c4\u01c5\u0005L\'\u0002\u01c5\u01c6",
    "\u0007\u001c\u0002\u0002\u01c6\u01e6\u0003\u0002\u0002\u0002\u01c7\u01c8",
    "\u0007 \u0002\u0002\u01c8\u01c9\u0005L\'\u0002\u01c9\u01ca\u0007\"\u0002",
    "\u0002\u01ca\u01cb\u0005L\'\u0002\u01cb\u01cc\u0007\u001f\u0002\u0002",
    "\u01cc\u01e6\u0003\u0002\u0002\u0002\u01cd\u01ce\u0007 \u0002\u0002",
    "\u01ce\u01cf\u0005L\'\u0002\u01cf\u01d0\u0007\"\u0002\u0002\u01d0\u01d1",
    "\u0005L\'\u0002\u01d1\u01d2\u0007 \u0002\u0002\u01d2\u01e6\u0003\u0002",
    "\u0002\u0002\u01d3\u01d4\u0007\u001f\u0002\u0002\u01d4\u01d5\u0005L",
    "\'\u0002\u01d5\u01d6\u0007\"\u0002\u0002\u01d6\u01d7\u0005L\'\u0002",
    "\u01d7\u01d8\u0007\u001c\u0002\u0002\u01d8\u01e6\u0003\u0002\u0002\u0002",
    "\u01d9\u01da\u0007\u001f\u0002\u0002\u01da\u01db\u0005L\'\u0002\u01db",
    "\u01dc\u0007\"\u0002\u0002\u01dc\u01dd\u0005L\'\u0002\u01dd\u01de\u0007",
    "\u001f\u0002\u0002\u01de\u01e6\u0003\u0002\u0002\u0002\u01df\u01e0\u0007",
    "\u001f\u0002\u0002\u01e0\u01e1\u0005L\'\u0002\u01e1\u01e2\u0007\"\u0002",
    "\u0002\u01e2\u01e3\u0005L\'\u0002\u01e3\u01e4\u0007 \u0002\u0002\u01e4",
    "\u01e6\u0003\u0002\u0002\u0002\u01e5\u01af\u0003\u0002\u0002\u0002\u01e5",
    "\u01b5\u0003\u0002\u0002\u0002\u01e5\u01bb\u0003\u0002\u0002\u0002\u01e5",
    "\u01c1\u0003\u0002\u0002\u0002\u01e5\u01c7\u0003\u0002\u0002\u0002\u01e5",
    "\u01cd\u0003\u0002\u0002\u0002\u01e5\u01d3\u0003\u0002\u0002\u0002\u01e5",
    "\u01d9\u0003\u0002\u0002\u0002\u01e5\u01df\u0003\u0002\u0002\u0002\u01e6",
    "O\u0003\u0002\u0002\u0002\u01e7\u01e8\u0005R*\u0002\u01e8\u01f0\b)\u0001",
    "\u0002\u01e9\u01ea\u0007#\u0002\u0002\u01ea\u01eb\b)\u0001\u0002\u01eb",
    "\u01ec\u0005R*\u0002\u01ec\u01ed\b)\u0001\u0002\u01ed\u01ef\u0003\u0002",
    "\u0002\u0002\u01ee\u01e9\u0003\u0002\u0002\u0002\u01ef\u01f2\u0003\u0002",
    "\u0002\u0002\u01f0\u01ee\u0003\u0002\u0002\u0002\u01f0\u01f1\u0003\u0002",
    "\u0002\u0002\u01f1Q\u0003\u0002\u0002\u0002\u01f2\u01f0\u0003\u0002",
    "\u0002\u0002\u01f3\u01f4\u00074\u0002\u0002\u01f4\u01f8\b*\u0001\u0002",
    "\u01f5\u01f6\u00072\u0002\u0002\u01f6\u01f8\b*\u0001\u0002\u01f7\u01f3",
    "\u0003\u0002\u0002\u0002\u01f7\u01f5\u0003\u0002\u0002\u0002\u01f8\u01fc",
    "\u0003\u0002\u0002\u0002\u01f9\u01fb\u0005T+\u0002\u01fa\u01f9\u0003",
    "\u0002\u0002\u0002\u01fb\u01fe\u0003\u0002\u0002\u0002\u01fc\u01fa\u0003",
    "\u0002\u0002\u0002\u01fc\u01fd\u0003\u0002\u0002\u0002\u01fdS\u0003",
    "\u0002\u0002\u0002\u01fe\u01fc\u0003\u0002\u0002\u0002\u01ff\u0200\u0006",
    "+\u000f\u0002\u0200\u0201\n\u0005\u0002\u0002\u0201U\u0003\u0002\u0002",
    "\u0002\u0202\u0203\t\u0006\u0002\u0002\u0203W\u0003\u0002\u0002\u0002",
    "$el{\u0089\u00a0\u00a8\u00b1\u00b3\u00bf\u00c1\u00ce\u00d9\u00e4\u00f9",
    "\u00fb\u0103\u010f\u0111\u011c\u0127\u0136\u013f\u0145\u0156\u015e\u0184",
    "\u018b\u0195\u019e\u01ab\u01e5\u01f0\u01f7\u01fc"].join("");


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
                   "parameters", "positionalParameters", "forExpression", 
                   "iterationContexts", "iterationContext", "ifExpression", 
                   "quantifiedExpression", "list", "nameDefinitionTokens", 
                   "iterationNameDefinition", "iterationNameDefinitionTokens", 
                   "additionalNameSymbol", "conditionalOrExpression", "conditionalAndExpression", 
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
FEEL_1_1Parser.RULE_positionalParameters = 4;
FEEL_1_1Parser.RULE_forExpression = 5;
FEEL_1_1Parser.RULE_iterationContexts = 6;
FEEL_1_1Parser.RULE_iterationContext = 7;
FEEL_1_1Parser.RULE_ifExpression = 8;
FEEL_1_1Parser.RULE_quantifiedExpression = 9;
FEEL_1_1Parser.RULE_list = 10;
FEEL_1_1Parser.RULE_nameDefinitionTokens = 11;
FEEL_1_1Parser.RULE_iterationNameDefinition = 12;
FEEL_1_1Parser.RULE_iterationNameDefinitionTokens = 13;
FEEL_1_1Parser.RULE_additionalNameSymbol = 14;
FEEL_1_1Parser.RULE_conditionalOrExpression = 15;
FEEL_1_1Parser.RULE_conditionalAndExpression = 16;
FEEL_1_1Parser.RULE_comparisonExpression = 17;
FEEL_1_1Parser.RULE_relationalExpression = 18;
FEEL_1_1Parser.RULE_expressionList = 19;
FEEL_1_1Parser.RULE_additiveExpression = 20;
FEEL_1_1Parser.RULE_multiplicativeExpression = 21;
FEEL_1_1Parser.RULE_powerExpression = 22;
FEEL_1_1Parser.RULE_filterPathExpression = 23;
FEEL_1_1Parser.RULE_unaryExpression = 24;
FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus = 25;
FEEL_1_1Parser.RULE_primary = 26;
FEEL_1_1Parser.RULE_literal = 27;
FEEL_1_1Parser.RULE_atLiteral = 28;
FEEL_1_1Parser.RULE_atLiteralValue = 29;
FEEL_1_1Parser.RULE_simplePositiveUnaryTest = 30;
FEEL_1_1Parser.RULE_simplePositiveUnaryTests = 31;
FEEL_1_1Parser.RULE_simpleUnaryTests = 32;
FEEL_1_1Parser.RULE_positiveUnaryTest = 33;
FEEL_1_1Parser.RULE_positiveUnaryTests = 34;
FEEL_1_1Parser.RULE_unaryTestsRoot = 35;
FEEL_1_1Parser.RULE_unaryTests = 36;
FEEL_1_1Parser.RULE_endpoint = 37;
FEEL_1_1Parser.RULE_interval = 38;
FEEL_1_1Parser.RULE_qualifiedName = 39;
FEEL_1_1Parser.RULE_nameRef = 40;
FEEL_1_1Parser.RULE_nameRefOtherToken = 41;
FEEL_1_1Parser.RULE_reusableKeywords = 42;


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
        this.state = 86;
        this.expression();
        this.state = 87;
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
        this.state = 89;
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
        this.state = 91;
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
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParametersEmptyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 94;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            localctx = new ParametersPositionalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 96;
            this.positionalParameters();
            this.state = 97;
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
    this.enterRule(localctx, 8, FEEL_1_1Parser.RULE_positionalParameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.expression();
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 102;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 103;
            this.expression();
            this.state = 108;
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
    this.enterRule(localctx, 10, FEEL_1_1Parser.RULE_forExpression);

        this.helper.pushScope();

    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(FEEL_1_1Parser.FOR);
        this.state = 110;
        this.iterationContexts();
        this.state = 111;
        this.match(FEEL_1_1Parser.RETURN);
        this.helper.enableDynamicResolution();
        this.state = 113;
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
    this.enterRule(localctx, 12, FEEL_1_1Parser.RULE_iterationContexts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.iterationContext();
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 117;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 118;
            this.iterationContext();
            this.state = 123;
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
    this.enterRule(localctx, 14, FEEL_1_1Parser.RULE_iterationContext);
    try {
        this.state = 135;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            if (!( this.helper.isFeatDMN12EnhancedForLoopEnabled())) {
                throw new antlr4.error.FailedPredicateException(this, "this.helper.isFeatDMN12EnhancedForLoopEnabled()");
            }
            this.state = 125;
            this.iterationNameDefinition();
            this.state = 126;
            this.match(FEEL_1_1Parser.IN);
            this.state = 127;
            this.expression();
            this.state = 128;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 129;
            this.expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 131;
            this.iterationNameDefinition();
            this.state = 132;
            this.match(FEEL_1_1Parser.IN);
            this.state = 133;
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
    this.enterRule(localctx, 16, FEEL_1_1Parser.RULE_ifExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(FEEL_1_1Parser.IF);
        this.state = 138;
        localctx.c = this.expression();
        this.state = 139;
        this.match(FEEL_1_1Parser.THEN);
        this.state = 140;
        localctx.t = this.expression();
        this.state = 141;
        this.match(FEEL_1_1Parser.ELSE);
        this.state = 142;
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
    this.enterRule(localctx, 18, FEEL_1_1Parser.RULE_quantifiedExpression);

        this.helper.pushScope();

    try {
        this.state = 158;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.SOME:
            localctx = new QuantExprSomeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.match(FEEL_1_1Parser.SOME);
            this.state = 145;
            this.iterationContexts();
            this.state = 146;
            this.match(FEEL_1_1Parser.SATISFIES);
            this.helper.enableDynamicResolution();
            this.state = 148;
            this.expression();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.EVERY:
            localctx = new QuantExprEveryContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.match(FEEL_1_1Parser.EVERY);
            this.state = 152;
            this.iterationContexts();
            this.state = 153;
            this.match(FEEL_1_1Parser.SATISFIES);
            this.helper.enableDynamicResolution();
            this.state = 155;
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
    this.enterRule(localctx, 20, FEEL_1_1Parser.RULE_list);
    try {
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.match(FEEL_1_1Parser.LBRACK);
            this.state = 161;
            this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(FEEL_1_1Parser.LBRACK);
            this.state = 163;
            this.expressionList();
            this.state = 164;
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
    this.enterRule(localctx, 22, FEEL_1_1Parser.RULE_nameDefinitionTokens);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(FEEL_1_1Parser.Identifier);
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEEL_1_1Parser.FOR) | (1 << FEEL_1_1Parser.RETURN) | (1 << FEEL_1_1Parser.IN) | (1 << FEEL_1_1Parser.IF) | (1 << FEEL_1_1Parser.THEN) | (1 << FEEL_1_1Parser.ELSE) | (1 << FEEL_1_1Parser.SOME) | (1 << FEEL_1_1Parser.EVERY) | (1 << FEEL_1_1Parser.SATISFIES) | (1 << FEEL_1_1Parser.INSTANCE) | (1 << FEEL_1_1Parser.OF) | (1 << FEEL_1_1Parser.FUNCTION) | (1 << FEEL_1_1Parser.EXTERNAL) | (1 << FEEL_1_1Parser.OR) | (1 << FEEL_1_1Parser.AND) | (1 << FEEL_1_1Parser.BETWEEN) | (1 << FEEL_1_1Parser.NULL) | (1 << FEEL_1_1Parser.TRUE) | (1 << FEEL_1_1Parser.FALSE) | (1 << FEEL_1_1Parser.QUOTE) | (1 << FEEL_1_1Parser.IntegerLiteral) | (1 << FEEL_1_1Parser.FloatingPointLiteral))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEEL_1_1Parser.DOT - 33)) | (1 << (FEEL_1_1Parser.ADD - 33)) | (1 << (FEEL_1_1Parser.SUB - 33)) | (1 << (FEEL_1_1Parser.MUL - 33)) | (1 << (FEEL_1_1Parser.DIV - 33)) | (1 << (FEEL_1_1Parser.NOT - 33)) | (1 << (FEEL_1_1Parser.Identifier - 33)))) !== 0)) {
            this.state = 175;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FEEL_1_1Parser.Identifier:
                this.state = 169;
                this.match(FEEL_1_1Parser.Identifier);
                break;
            case FEEL_1_1Parser.QUOTE:
            case FEEL_1_1Parser.DOT:
            case FEEL_1_1Parser.ADD:
            case FEEL_1_1Parser.SUB:
            case FEEL_1_1Parser.MUL:
            case FEEL_1_1Parser.DIV:
                this.state = 170;
                this.additionalNameSymbol();
                break;
            case FEEL_1_1Parser.IntegerLiteral:
                this.state = 171;
                this.match(FEEL_1_1Parser.IntegerLiteral);
                break;
            case FEEL_1_1Parser.FloatingPointLiteral:
                this.state = 172;
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
                this.state = 173;
                this.reusableKeywords();
                break;
            case FEEL_1_1Parser.IN:
                this.state = 174;
                this.match(FEEL_1_1Parser.IN);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 179;
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
    this.enterRule(localctx, 24, FEEL_1_1Parser.RULE_iterationNameDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
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
    this.enterRule(localctx, 26, FEEL_1_1Parser.RULE_iterationNameDefinitionTokens);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(FEEL_1_1Parser.Identifier);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FEEL_1_1Parser.FOR) | (1 << FEEL_1_1Parser.RETURN) | (1 << FEEL_1_1Parser.IF) | (1 << FEEL_1_1Parser.THEN) | (1 << FEEL_1_1Parser.ELSE) | (1 << FEEL_1_1Parser.SOME) | (1 << FEEL_1_1Parser.EVERY) | (1 << FEEL_1_1Parser.SATISFIES) | (1 << FEEL_1_1Parser.INSTANCE) | (1 << FEEL_1_1Parser.OF) | (1 << FEEL_1_1Parser.FUNCTION) | (1 << FEEL_1_1Parser.EXTERNAL) | (1 << FEEL_1_1Parser.OR) | (1 << FEEL_1_1Parser.AND) | (1 << FEEL_1_1Parser.BETWEEN) | (1 << FEEL_1_1Parser.NULL) | (1 << FEEL_1_1Parser.TRUE) | (1 << FEEL_1_1Parser.FALSE) | (1 << FEEL_1_1Parser.QUOTE) | (1 << FEEL_1_1Parser.IntegerLiteral) | (1 << FEEL_1_1Parser.FloatingPointLiteral))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (FEEL_1_1Parser.DOT - 33)) | (1 << (FEEL_1_1Parser.ADD - 33)) | (1 << (FEEL_1_1Parser.SUB - 33)) | (1 << (FEEL_1_1Parser.MUL - 33)) | (1 << (FEEL_1_1Parser.DIV - 33)) | (1 << (FEEL_1_1Parser.NOT - 33)) | (1 << (FEEL_1_1Parser.Identifier - 33)))) !== 0)) {
            this.state = 189;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FEEL_1_1Parser.Identifier:
                this.state = 184;
                this.match(FEEL_1_1Parser.Identifier);
                break;
            case FEEL_1_1Parser.QUOTE:
            case FEEL_1_1Parser.DOT:
            case FEEL_1_1Parser.ADD:
            case FEEL_1_1Parser.SUB:
            case FEEL_1_1Parser.MUL:
            case FEEL_1_1Parser.DIV:
                this.state = 185;
                this.additionalNameSymbol();
                break;
            case FEEL_1_1Parser.IntegerLiteral:
                this.state = 186;
                this.match(FEEL_1_1Parser.IntegerLiteral);
                break;
            case FEEL_1_1Parser.FloatingPointLiteral:
                this.state = 187;
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
                this.state = 188;
                this.reusableKeywords();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 193;
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
    this.enterRule(localctx, 28, FEEL_1_1Parser.RULE_additionalNameSymbol);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
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
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, FEEL_1_1Parser.RULE_conditionalOrExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CondOrAndContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 197;
        this.conditionalAndExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 204;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new CondOrContext(this, new ConditionalOrExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_conditionalOrExpression);
                this.state = 199;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 200;
                localctx.op = this.match(FEEL_1_1Parser.OR);
                this.state = 201;
                localctx.right = this.conditionalAndExpression(0); 
            }
            this.state = 206;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, FEEL_1_1Parser.RULE_conditionalAndExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CondAndCompContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 208;
        this.comparisonExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 215;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new CondAndContext(this, new ConditionalAndExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_conditionalAndExpression);
                this.state = 210;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 211;
                localctx.op = this.match(FEEL_1_1Parser.AND);
                this.state = 212;
                localctx.right = this.comparisonExpression(0); 
            }
            this.state = 217;
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
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, FEEL_1_1Parser.RULE_comparisonExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new CompExpressionRelContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 219;
        this.relationalExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 226;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new CompExpressionContext(this, new ComparisonExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_comparisonExpression);
                this.state = 221;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 222;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (FEEL_1_1Parser.EQUAL - 34)) | (1 << (FEEL_1_1Parser.GT - 34)) | (1 << (FEEL_1_1Parser.LT - 34)) | (1 << (FEEL_1_1Parser.LE - 34)) | (1 << (FEEL_1_1Parser.GE - 34)) | (1 << (FEEL_1_1Parser.NOTEQUAL - 34)))) !== 0))) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 223;
                localctx.right = this.relationalExpression(0); 
            }
            this.state = 228;
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
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, FEEL_1_1Parser.RULE_relationalExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new RelExpressionAddContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 230;
        this.additiveExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 249;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 247;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new RelExpressionBetweenContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
                    localctx.val = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_relationalExpression);
                    this.state = 232;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 233;
                    this.match(FEEL_1_1Parser.BETWEEN);
                    this.state = 234;
                    localctx.start = this.additiveExpression(0);
                    this.state = 235;
                    this.match(FEEL_1_1Parser.AND);
                    this.state = 236;
                    localctx.end = this.additiveExpression(0);
                    break;

                case 2:
                    localctx = new RelExpressionTestListContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
                    localctx.val = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_relationalExpression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 239;
                    this.match(FEEL_1_1Parser.IN);
                    this.state = 240;
                    this.match(FEEL_1_1Parser.LPAREN);
                    this.state = 241;
                    this.positiveUnaryTests();
                    this.state = 242;
                    this.match(FEEL_1_1Parser.RPAREN);
                    break;

                case 3:
                    localctx = new RelExpressionValueContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
                    localctx.val = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_relationalExpression);
                    this.state = 244;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 245;
                    this.match(FEEL_1_1Parser.IN);
                    this.state = 246;
                    this.expression();
                    break;

                } 
            }
            this.state = 251;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
    this.enterRule(localctx, 38, FEEL_1_1Parser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.expression();
        this.state = 257;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 253;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 254;
            this.expression();
            this.state = 259;
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
    var _startState = 40;
    this.enterRecursionRule(localctx, 40, FEEL_1_1Parser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new AddExpressionMultContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 261;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 271;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 269;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_additiveExpression);
                    this.state = 263;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 264;
                    localctx.op = this.match(FEEL_1_1Parser.ADD);
                    this.state = 265;
                    this.multiplicativeExpression(0);
                    break;

                case 2:
                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_additiveExpression);
                    this.state = 266;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 267;
                    localctx.op = this.match(FEEL_1_1Parser.SUB);
                    this.state = 268;
                    this.multiplicativeExpression(0);
                    break;

                } 
            }
            this.state = 273;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, FEEL_1_1Parser.RULE_multiplicativeExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new MultExpressionPowContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 275;
        this.powerExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 282;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_multiplicativeExpression);
                this.state = 277;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 278;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===FEEL_1_1Parser.MUL || _la===FEEL_1_1Parser.DIV)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 279;
                this.powerExpression(0); 
            }
            this.state = 284;
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
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, FEEL_1_1Parser.RULE_powerExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new PowExpressionUnaryContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 286;
        this.filterPathExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 293;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new PowExpressionContext(this, new PowerExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_powerExpression);
                this.state = 288;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 289;
                localctx.op = this.match(FEEL_1_1Parser.POW);
                this.state = 290;
                this.filterPathExpression(0); 
            }
            this.state = 295;
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
    var _startState = 46;
    this.enterRecursionRule(localctx, 46, FEEL_1_1Parser.RULE_filterPathExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this.unaryExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 308;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FilterPathExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_filterPathExpression);
                this.state = 299;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 300;
                this.match(FEEL_1_1Parser.LBRACK);
                this.helper.enableDynamicResolution();
                this.state = 302;
                localctx.filter = this.expression();
                this.helper.disableDynamicResolution();
                this.state = 304;
                this.match(FEEL_1_1Parser.RBRACK); 
            }
            this.state = 310;
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
    var _startState = 48;
    this.enterRecursionRule(localctx, 48, FEEL_1_1Parser.RULE_unaryExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.SUB:
            localctx = new SignedUnaryExpressionMinusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 312;
            this.match(FEEL_1_1Parser.SUB);
            this.state = 313;
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
            this.state = 314;
            this.unaryExpressionNotPlusMinus();
            break;
        case FEEL_1_1Parser.ADD:
            localctx = new SignedUnaryExpressionPlusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 315;
            this.match(FEEL_1_1Parser.ADD);
            this.state = 316;
            this.unaryExpressionNotPlusMinus();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 323;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FnInvocationContext(this, new UnaryExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, FEEL_1_1Parser.RULE_unaryExpression);
                this.state = 319;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 320;
                this.parameters(); 
            }
            this.state = 325;
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
    this.enterRule(localctx, 50, FEEL_1_1Parser.RULE_unaryExpressionNotPlusMinus);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
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
    this.enterRule(localctx, 52, FEEL_1_1Parser.RULE_primary);
    try {
        this.state = 340;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrimaryLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 328;
            this.literal();
            break;

        case 2:
            localctx = new PrimaryForExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 329;
            this.forExpression();
            break;

        case 3:
            localctx = new PrimaryQuantifiedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 330;
            this.quantifiedExpression();
            break;

        case 4:
            localctx = new PrimaryIfExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 331;
            this.ifExpression();
            break;

        case 5:
            localctx = new PrimaryIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 332;
            this.interval();
            break;

        case 6:
            localctx = new PrimaryListContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 333;
            this.list();
            break;

        case 7:
            localctx = new PrimaryParensContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 334;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 335;
            this.expression();
            this.state = 336;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 8:
            localctx = new PrimaryUnaryTestContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 338;
            this.simplePositiveUnaryTest();
            break;

        case 9:
            localctx = new PrimaryNameContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 339;
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
    this.enterRule(localctx, 54, FEEL_1_1Parser.RULE_literal);
    try {
        this.state = 348;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.IntegerLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 342;
            this.match(FEEL_1_1Parser.IntegerLiteral);
            break;
        case FEEL_1_1Parser.FloatingPointLiteral:
            localctx = new NumberLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 343;
            this.match(FEEL_1_1Parser.FloatingPointLiteral);
            break;
        case FEEL_1_1Parser.BooleanLiteral:
            localctx = new BoolLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 344;
            this.match(FEEL_1_1Parser.BooleanLiteral);
            break;
        case FEEL_1_1Parser.AT:
            localctx = new AtLiteralLabelContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 345;
            this.atLiteral();
            break;
        case FEEL_1_1Parser.StringLiteral:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 346;
            this.match(FEEL_1_1Parser.StringLiteral);
            break;
        case FEEL_1_1Parser.NULL:
            localctx = new NullLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 347;
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
    this.enterRule(localctx, 56, FEEL_1_1Parser.RULE_atLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(FEEL_1_1Parser.AT);
        this.state = 351;
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
    this.enterRule(localctx, 58, FEEL_1_1Parser.RULE_atLiteralValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
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
    this.enterRule(localctx, 60, FEEL_1_1Parser.RULE_simplePositiveUnaryTest);
    try {
        this.state = 386;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.LT:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 355;
            localctx.op = this.match(FEEL_1_1Parser.LT);
            this.helper.enableDynamicResolution();
            this.state = 357;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.GT:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 360;
            localctx.op = this.match(FEEL_1_1Parser.GT);
            this.helper.enableDynamicResolution();
            this.state = 362;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.LE:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 365;
            localctx.op = this.match(FEEL_1_1Parser.LE);
            this.helper.enableDynamicResolution();
            this.state = 367;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.GE:
            localctx = new PositiveUnaryTestIneqIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 370;
            localctx.op = this.match(FEEL_1_1Parser.GE);
            this.helper.enableDynamicResolution();
            this.state = 372;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.EQUAL:
            localctx = new PositiveUnaryTestIneqContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 375;
            localctx.op = this.match(FEEL_1_1Parser.EQUAL);
            this.helper.enableDynamicResolution();
            this.state = 377;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.NOTEQUAL:
            localctx = new PositiveUnaryTestIneqContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 380;
            localctx.op = this.match(FEEL_1_1Parser.NOTEQUAL);
            this.helper.enableDynamicResolution();
            this.state = 382;
            this.endpoint();
            this.helper.disableDynamicResolution();
            break;
        case FEEL_1_1Parser.LPAREN:
        case FEEL_1_1Parser.LBRACK:
        case FEEL_1_1Parser.RBRACK:
            localctx = new PositiveUnaryTestIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 385;
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
    this.enterRule(localctx, 62, FEEL_1_1Parser.RULE_simplePositiveUnaryTests);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.simplePositiveUnaryTest();
        this.state = 393;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 389;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 390;
            this.simplePositiveUnaryTest();
            this.state = 395;
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
    this.enterRule(localctx, 64, FEEL_1_1Parser.RULE_simpleUnaryTests);
    try {
        this.state = 403;
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
            this.state = 396;
            this.simplePositiveUnaryTests();
            break;
        case FEEL_1_1Parser.NOT:
            localctx = new NegatedSimplePositiveUnaryTestsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 397;
            this.match(FEEL_1_1Parser.NOT);
            this.state = 398;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 399;
            this.simplePositiveUnaryTests();
            this.state = 400;
            this.match(FEEL_1_1Parser.RPAREN);
            break;
        case FEEL_1_1Parser.SUB:
            localctx = new PositiveUnaryTestDashContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 402;
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
    this.enterRule(localctx, 66, FEEL_1_1Parser.RULE_positiveUnaryTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
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
    this.enterRule(localctx, 68, FEEL_1_1Parser.RULE_positiveUnaryTests);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.positiveUnaryTest();
        this.state = 412;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FEEL_1_1Parser.COMMA) {
            this.state = 408;
            this.match(FEEL_1_1Parser.COMMA);
            this.state = 409;
            this.positiveUnaryTest();
            this.state = 414;
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
    this.enterRule(localctx, 70, FEEL_1_1Parser.RULE_unaryTestsRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.unaryTests();
        this.state = 416;
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
    this.enterRule(localctx, 72, FEEL_1_1Parser.RULE_unaryTests);
    try {
        this.state = 425;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryTests_negatedContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.match(FEEL_1_1Parser.NOT);
            this.state = 419;
            this.match(FEEL_1_1Parser.LPAREN);
            this.state = 420;
            this.positiveUnaryTests();
            this.state = 421;
            this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            localctx = new UnaryTests_positiveContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 423;
            this.positiveUnaryTests();
            break;

        case 3:
            localctx = new UnaryTests_emptyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 424;
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
    this.enterRule(localctx, 74, FEEL_1_1Parser.RULE_endpoint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
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
    this.enterRule(localctx, 76, FEEL_1_1Parser.RULE_interval);
    try {
        this.state = 483;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 429;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 430;
            localctx.start = this.endpoint();
            this.state = 431;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 432;
            localctx.end = this.endpoint();
            this.state = 433;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 435;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 436;
            localctx.start = this.endpoint();
            this.state = 437;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 438;
            localctx.end = this.endpoint();
            this.state = 439;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 441;
            localctx.low = this.match(FEEL_1_1Parser.LPAREN);
            this.state = 442;
            localctx.start = this.endpoint();
            this.state = 443;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 444;
            localctx.end = this.endpoint();
            this.state = 445;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 447;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 448;
            localctx.start = this.endpoint();
            this.state = 449;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 450;
            localctx.end = this.endpoint();
            this.state = 451;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 453;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 454;
            localctx.start = this.endpoint();
            this.state = 455;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 456;
            localctx.end = this.endpoint();
            this.state = 457;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 459;
            localctx.low = this.match(FEEL_1_1Parser.RBRACK);
            this.state = 460;
            localctx.start = this.endpoint();
            this.state = 461;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 462;
            localctx.end = this.endpoint();
            this.state = 463;
            localctx.up = this.match(FEEL_1_1Parser.RBRACK);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 465;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 466;
            localctx.start = this.endpoint();
            this.state = 467;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 468;
            localctx.end = this.endpoint();
            this.state = 469;
            localctx.up = this.match(FEEL_1_1Parser.RPAREN);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 471;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 472;
            localctx.start = this.endpoint();
            this.state = 473;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 474;
            localctx.end = this.endpoint();
            this.state = 475;
            localctx.up = this.match(FEEL_1_1Parser.LBRACK);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 477;
            localctx.low = this.match(FEEL_1_1Parser.LBRACK);
            this.state = 478;
            localctx.start = this.endpoint();
            this.state = 479;
            this.match(FEEL_1_1Parser.ELIPSIS);
            this.state = 480;
            localctx.end = this.endpoint();
            this.state = 481;
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
    this.enterRule(localctx, 78, FEEL_1_1Parser.RULE_qualifiedName);

        var name = null;
        var count = 0;
        var qn = ([]);

    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 485;
        localctx.n1 = this.nameRef();
         name = this.helper.getOriginalText( localctx.n1 ); qn.push( name ); this.helper.validateVariable( localctx.n1, qn, name ); 
        this.state = 494;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 487;
                this.match(FEEL_1_1Parser.DOT);
                this.helper.recoverScope( name ); count++;
                this.state = 489;
                localctx.n2 = this.nameRef();
                name=this.helper.getOriginalText( localctx.n2 );  qn.push( name ); this.helper.validateVariable( localctx.n1, qn, name );  
            }
            this.state = 496;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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
    this.enterRule(localctx, 80, FEEL_1_1Parser.RULE_nameRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 501;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FEEL_1_1Parser.Identifier:
            this.state = 497;
            localctx.st = this.match(FEEL_1_1Parser.Identifier);
             this.helper.startVariable( localctx.st ); 
            break;
        case FEEL_1_1Parser.NOT:
            this.state = 499;
            localctx.not_st = this.match(FEEL_1_1Parser.NOT);
             this.helper.startVariable( localctx.not_st ); 
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 506;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 503;
                this.nameRefOtherToken(); 
            }
            this.state = 508;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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
    this.enterRule(localctx, 82, FEEL_1_1Parser.RULE_nameRefOtherToken);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 509;
        if (!(  this.helper.followUp( this._input.LT(1), localctx===null ) )) {
            throw new antlr4.error.FailedPredicateException(this, " this.helper.followUp( this._input.LT(1), localctx===null ) ");
        }
        this.state = 510;
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
    this.enterRule(localctx, 84, FEEL_1_1Parser.RULE_reusableKeywords);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 512;
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
	case 7:
			return this.iterationContext_sempred(localctx, predIndex);
	case 15:
			return this.conditionalOrExpression_sempred(localctx, predIndex);
	case 16:
			return this.conditionalAndExpression_sempred(localctx, predIndex);
	case 17:
			return this.comparisonExpression_sempred(localctx, predIndex);
	case 18:
			return this.relationalExpression_sempred(localctx, predIndex);
	case 20:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 21:
			return this.multiplicativeExpression_sempred(localctx, predIndex);
	case 22:
			return this.powerExpression_sempred(localctx, predIndex);
	case 23:
			return this.filterPathExpression_sempred(localctx, predIndex);
	case 24:
			return this.unaryExpression_sempred(localctx, predIndex);
	case 41:
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
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.unaryExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 12:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

FEEL_1_1Parser.prototype.nameRefOtherToken_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 13:
			return  this.helper.followUp( this._input.LT(1), localctx===null ) ;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FEEL_1_1Parser = FEEL_1_1Parser;
