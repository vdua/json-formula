// Generated from antlr/JSONFormula.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JSONFormulaListener from './JSONFormulaListener.js';
import JSONFormulaVisitor from './JSONFormulaVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003!\u00fb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003A\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003]",
    "\n\u0003\f\u0003\u000e\u0003`\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004g\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006o",
    "\n\u0006\f\u0006\u000e\u0006r\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007|\n\u0007\f\u0007\u000e\u0007\u007f\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u0083\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0099\n\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a0\n\n\u0003\u000b",
    "\u0005\u000b\u00a3\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a7",
    "\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00ab\n\u000b\u0005\u000b",
    "\u00ad\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00b4",
    "\n\f\f\f\u000e\f\u00b7\u000b\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u00c1\n\f\u0003\r\u0003\r\u0005\r",
    "\u00c5\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00d6\n",
    "\u0012\f\u0012\u000e\u0012\u00d9\u000b\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00df\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u00e9\n\u0014\f\u0014\u000e\u0014\u00ec\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00f2\n",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00f9\n\u0015\u0003\u0015\u0002\u0003\u0004\u0016\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(\u0002\u0006\u0003\u0002\u001f \u0003\u0002\u0005\b\u0003\u0002",
    "\t\n\u0003\u0002\u001c\u001e\u0002\u0117\u0002*\u0003\u0002\u0002\u0002",
    "\u0004@\u0003\u0002\u0002\u0002\u0006f\u0003\u0002\u0002\u0002\bh\u0003",
    "\u0002\u0002\u0002\nj\u0003\u0002\u0002\u0002\f\u0082\u0003\u0002\u0002",
    "\u0002\u000e\u0084\u0003\u0002\u0002\u0002\u0010\u0098\u0003\u0002\u0002",
    "\u0002\u0012\u009f\u0003\u0002\u0002\u0002\u0014\u00a2\u0003\u0002\u0002",
    "\u0002\u0016\u00c0\u0003\u0002\u0002\u0002\u0018\u00c4\u0003\u0002\u0002",
    "\u0002\u001a\u00c6\u0003\u0002\u0002\u0002\u001c\u00c8\u0003\u0002\u0002",
    "\u0002\u001e\u00cb\u0003\u0002\u0002\u0002 \u00cf\u0003\u0002\u0002",
    "\u0002\"\u00de\u0003\u0002\u0002\u0002$\u00e0\u0003\u0002\u0002\u0002",
    "&\u00f1\u0003\u0002\u0002\u0002(\u00f8\u0003\u0002\u0002\u0002*+\u0005",
    "\u0004\u0003\u0002+,\u0007\u0002\u0002\u0003,\u0003\u0003\u0002\u0002",
    "\u0002-.\b\u0003\u0001\u0002.A\u0005\u0010\t\u0002/A\u0005 \u0011\u0002",
    "01\u0007\r\u0002\u00021A\u0005\u0004\u0003\u000e23\u0007\n\u0002\u0002",
    "3A\u0005\u0004\u0003\r45\u0007\u000e\u0002\u000256\u0005\u0004\u0003",
    "\u000267\u0007\u000f\u0002\u00027A\u0003\u0002\u0002\u00028A\u0005\b",
    "\u0005\u00029A\u0005\n\u0006\u0002:A\u0005\f\u0007\u0002;A\u0005\u001e",
    "\u0010\u0002<A\u0005\u0016\f\u0002=A\u0007\u001b\u0002\u0002>A\t\u0002",
    "\u0002\u0002?A\u0005\u001a\u000e\u0002@-\u0003\u0002\u0002\u0002@/\u0003",
    "\u0002\u0002\u0002@0\u0003\u0002\u0002\u0002@2\u0003\u0002\u0002\u0002",
    "@4\u0003\u0002\u0002\u0002@8\u0003\u0002\u0002\u0002@9\u0003\u0002\u0002",
    "\u0002@:\u0003\u0002\u0002\u0002@;\u0003\u0002\u0002\u0002@<\u0003\u0002",
    "\u0002\u0002@=\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@?\u0003",
    "\u0002\u0002\u0002A^\u0003\u0002\u0002\u0002BC\f\u0015\u0002\u0002C",
    "D\u0007\u0004\u0002\u0002D]\u0005\u0004\u0003\u0016EF\f\u0014\u0002",
    "\u0002FG\t\u0003\u0002\u0002G]\u0005\u0004\u0003\u0015HI\f\u0013\u0002",
    "\u0002IJ\t\u0004\u0002\u0002J]\u0005\u0004\u0003\u0014KL\f\u0012\u0002",
    "\u0002LM\u0007\u001a\u0002\u0002M]\u0005\u0004\u0003\u0013NO\f\u0011",
    "\u0002\u0002OP\u0007\u000b\u0002\u0002P]\u0005\u0004\u0003\u0012QR\f",
    "\u0010\u0002\u0002RS\u0007\f\u0002\u0002S]\u0005\u0004\u0003\u0011T",
    "U\f\u0006\u0002\u0002UV\u0007\u0010\u0002\u0002V]\u0005\u0004\u0003",
    "\u0007WX\f\u0018\u0002\u0002XY\u0007\u0003\u0002\u0002Y]\u0005\u0006",
    "\u0004\u0002Z[\f\u0017\u0002\u0002[]\u0005\u0012\n\u0002\\B\u0003\u0002",
    "\u0002\u0002\\E\u0003\u0002\u0002\u0002\\H\u0003\u0002\u0002\u0002\\",
    "K\u0003\u0002\u0002\u0002\\N\u0003\u0002\u0002\u0002\\Q\u0003\u0002",
    "\u0002\u0002\\T\u0003\u0002\u0002\u0002\\W\u0003\u0002\u0002\u0002\\",
    "Z\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002",
    "\u0002^_\u0003\u0002\u0002\u0002_\u0005\u0003\u0002\u0002\u0002`^\u0003",
    "\u0002\u0002\u0002ag\u0005 \u0011\u0002bg\u0005\n\u0006\u0002cg\u0005",
    "\f\u0007\u0002dg\u0005\u0016\f\u0002eg\u0005\b\u0005\u0002fa\u0003\u0002",
    "\u0002\u0002fb\u0003\u0002\u0002\u0002fc\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002fe\u0003\u0002\u0002\u0002g\u0007\u0003\u0002\u0002",
    "\u0002hi\u0007\u0005\u0002\u0002i\t\u0003\u0002\u0002\u0002jk\u0007",
    "\u0011\u0002\u0002kp\u0005\u0004\u0003\u0002lm\u0007\u0012\u0002\u0002",
    "mo\u0005\u0004\u0003\u0002nl\u0003\u0002\u0002\u0002or\u0003\u0002\u0002",
    "\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qs\u0003\u0002",
    "\u0002\u0002rp\u0003\u0002\u0002\u0002st\u0007\u0013\u0002\u0002t\u000b",
    "\u0003\u0002\u0002\u0002uv\u0007\u0014\u0002\u0002v\u0083\u0007\u0015",
    "\u0002\u0002wx\u0007\u0014\u0002\u0002x}\u0005\u000e\b\u0002yz\u0007",
    "\u0012\u0002\u0002z|\u0005\u000e\b\u0002{y\u0003\u0002\u0002\u0002|",
    "\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0007\u0015\u0002\u0002\u0081\u0083\u0003\u0002\u0002",
    "\u0002\u0082u\u0003\u0002\u0002\u0002\u0082w\u0003\u0002\u0002\u0002",
    "\u0083\r\u0003\u0002\u0002\u0002\u0084\u0085\u0005 \u0011\u0002\u0085",
    "\u0086\u0007\u0016\u0002\u0002\u0086\u0087\u0005\u0004\u0003\u0002\u0087",
    "\u000f\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0011\u0002\u0002\u0089",
    "\u008a\u0007 \u0002\u0002\u008a\u0099\u0007\u0013\u0002\u0002\u008b",
    "\u008c\u0007\u0011\u0002\u0002\u008c\u008d\u0007\u0005\u0002\u0002\u008d",
    "\u0099\u0007\u0013\u0002\u0002\u008e\u008f\u0007\u0011\u0002\u0002\u008f",
    "\u0090\u0005\u0014\u000b\u0002\u0090\u0091\u0007\u0013\u0002\u0002\u0091",
    "\u0099\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0011\u0002\u0002\u0093",
    "\u0099\u0007\u0013\u0002\u0002\u0094\u0095\u0007\u0017\u0002\u0002\u0095",
    "\u0096\u0005\u0004\u0003\u0002\u0096\u0097\u0007\u0013\u0002\u0002\u0097",
    "\u0099\u0003\u0002\u0002\u0002\u0098\u0088\u0003\u0002\u0002\u0002\u0098",
    "\u008b\u0003\u0002\u0002\u0002\u0098\u008e\u0003\u0002\u0002\u0002\u0098",
    "\u0092\u0003\u0002\u0002\u0002\u0098\u0094\u0003\u0002\u0002\u0002\u0099",
    "\u0011\u0003\u0002\u0002\u0002\u009a\u00a0\u0005\u0010\t\u0002\u009b",
    "\u009c\u0007\u0011\u0002\u0002\u009c\u009d\u0005\u0004\u0003\u0002\u009d",
    "\u009e\u0007\u0013\u0002\u0002\u009e\u00a0\u0003\u0002\u0002\u0002\u009f",
    "\u009a\u0003\u0002\u0002\u0002\u009f\u009b\u0003\u0002\u0002\u0002\u00a0",
    "\u0013\u0003\u0002\u0002\u0002\u00a1\u00a3\u0005\u0004\u0003\u0002\u00a2",
    "\u00a1\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a6\u0007\u0016\u0002\u0002\u00a5",
    "\u00a7\u0005\u0004\u0003\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0003\u0002\u0002\u0002\u00a7\u00ac\u0003\u0002\u0002\u0002\u00a8",
    "\u00aa\u0007\u0016\u0002\u0002\u00a9\u00ab\u0005\u0004\u0003\u0002\u00aa",
    "\u00a9\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab",
    "\u00ad\u0003\u0002\u0002\u0002\u00ac\u00a8\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0003\u0002\u0002\u0002\u00ad\u0015\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007\u001d\u0002\u0002\u00af\u00b0\u0007\u000e\u0002\u0002\u00b0",
    "\u00b5\u0005\u0018\r\u0002\u00b1\u00b2\u0007\u0012\u0002\u0002\u00b2",
    "\u00b4\u0005\u0018\r\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4",
    "\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002\u00b7",
    "\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u000f\u0002\u0002\u00b9",
    "\u00c1\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u001d\u0002\u0002\u00bb",
    "\u00bc\u0007\u000e\u0002\u0002\u00bc\u00c1\u0007\u000f\u0002\u0002\u00bd",
    "\u00be\u0007\u001c\u0002\u0002\u00be\u00bf\u0007\u000e\u0002\u0002\u00bf",
    "\u00c1\u0007\u000f\u0002\u0002\u00c0\u00ae\u0003\u0002\u0002\u0002\u00c0",
    "\u00ba\u0003\u0002\u0002\u0002\u00c0\u00bd\u0003\u0002\u0002\u0002\u00c1",
    "\u0017\u0003\u0002\u0002\u0002\u00c2\u00c5\u0005\u0004\u0003\u0002\u00c3",
    "\u00c5\u0005\u001c\u000f\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4",
    "\u00c3\u0003\u0002\u0002\u0002\u00c5\u0019\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0007\u0018\u0002\u0002\u00c7\u001b\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0007\u0007\u0002\u0002\u00c9\u00ca\u0005\u0004\u0003\u0002\u00ca",
    "\u001d\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u0019\u0002\u0002\u00cc",
    "\u00cd\u0005(\u0015\u0002\u00cd\u00ce\u0007\u0019\u0002\u0002\u00ce",
    "\u001f\u0003\u0002\u0002\u0002\u00cf\u00d0\t\u0005\u0002\u0002\u00d0",
    "!\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\u0014\u0002\u0002\u00d2",
    "\u00d7\u0005$\u0013\u0002\u00d3\u00d4\u0007\u0012\u0002\u0002\u00d4",
    "\u00d6\u0005$\u0013\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6",
    "\u00d9\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002\u0002\u00d9",
    "\u00d7\u0003\u0002\u0002\u0002\u00da\u00db\u0007\u0015\u0002\u0002\u00db",
    "\u00df\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\u0014\u0002\u0002\u00dd",
    "\u00df\u0007\u0015\u0002\u0002\u00de\u00d1\u0003\u0002\u0002\u0002\u00de",
    "\u00dc\u0003\u0002\u0002\u0002\u00df#\u0003\u0002\u0002\u0002\u00e0",
    "\u00e1\u0007\u001e\u0002\u0002\u00e1\u00e2\u0007\u0016\u0002\u0002\u00e2",
    "\u00e3\u0005(\u0015\u0002\u00e3%\u0003\u0002\u0002\u0002\u00e4\u00e5",
    "\u0007\u0011\u0002\u0002\u00e5\u00ea\u0005(\u0015\u0002\u00e6\u00e7",
    "\u0007\u0012\u0002\u0002\u00e7\u00e9\u0005(\u0015\u0002\u00e8\u00e6",
    "\u0003\u0002\u0002\u0002\u00e9\u00ec\u0003\u0002\u0002\u0002\u00ea\u00e8",
    "\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ed",
    "\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0007\u0013\u0002\u0002\u00ee\u00f2\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\u0007\u0011\u0002\u0002\u00f0\u00f2\u0007\u0013\u0002\u0002\u00f1\u00e4",
    "\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\'",
    "\u0003\u0002\u0002\u0002\u00f3\u00f9\u0007\u001e\u0002\u0002\u00f4\u00f9",
    "\t\u0002\u0002\u0002\u00f5\u00f9\u0005\"\u0012\u0002\u00f6\u00f9\u0005",
    "&\u0014\u0002\u00f7\u00f9\u0007\u001c\u0002\u0002\u00f8\u00f3\u0003",
    "\u0002\u0002\u0002\u00f8\u00f4\u0003\u0002\u0002\u0002\u00f8\u00f5\u0003",
    "\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f7\u0003",
    "\u0002\u0002\u0002\u00f9)\u0003\u0002\u0002\u0002\u0017@\\^fp}\u0082",
    "\u0098\u009f\u00a2\u00a6\u00aa\u00ac\u00b5\u00c0\u00c4\u00d7\u00de\u00ea",
    "\u00f1\u00f8"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JSONFormulaParser extends antlr4.Parser {

    static grammarFileName = "JSONFormula.g4";
    static literalNames = [ null, "'.'", "'^'", "'*'", "'/'", "'&'", "'~'", 
                            "'+'", "'-'", "'&&'", "'||'", "'!'", "'('", 
                            "')'", "'|'", "'['", "','", "']'", "'{'", "'}'", 
                            "':'", "'[?'", "'@'", "'`'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "COMPARATOR", "RAW_STRING", "JSON_CONSTANT", 
                             "NAME", "STRING", "REAL_OR_EXPONENT_NUMBER", 
                             "SIGNED_INT", "WS" ];
    static ruleNames = [ "formula", "expression", "chainedExpression", "wildcard", 
                         "multiSelectList", "multiSelectHash", "keyvalExpr", 
                         "bracketSpecifier", "chainedBracketSpecifier", 
                         "slice", "functionExpression", "functionArg", "currentNode", 
                         "expressionType", "literal", "identifier", "jsonObject", 
                         "jsonObjectPair", "jsonArray", "jsonValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSONFormulaParser.ruleNames;
        this.literalNames = JSONFormulaParser.literalNames;
        this.symbolicNames = JSONFormulaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 19);
    		case 1:
    			return this.precpred(this._ctx, 18);
    		case 2:
    			return this.precpred(this._ctx, 17);
    		case 3:
    			return this.precpred(this._ctx, 16);
    		case 4:
    			return this.precpred(this._ctx, 15);
    		case 5:
    			return this.precpred(this._ctx, 14);
    		case 6:
    			return this.precpred(this._ctx, 4);
    		case 7:
    			return this.precpred(this._ctx, 22);
    		case 8:
    			return this.precpred(this._ctx, 21);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSONFormulaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.expression(0);
	        this.state = 41;
	        this.match(JSONFormulaParser.EOF);
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
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, JSONFormulaParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new BracketExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 44;
	            this.bracketSpecifier();
	            break;

	        case 2:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 45;
	            this.identifier();
	            break;

	        case 3:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 46;
	            this.match(JSONFormulaParser.T__10);
	            this.state = 47;
	            this.expression(12);
	            break;

	        case 4:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 48;
	            this.match(JSONFormulaParser.T__7);
	            this.state = 49;
	            this.expression(11);
	            break;

	        case 5:
	            localctx = new ParenExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.match(JSONFormulaParser.T__11);
	            this.state = 51;
	            this.expression(0);
	            this.state = 52;
	            this.match(JSONFormulaParser.T__12);
	            break;

	        case 6:
	            localctx = new WildcardExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.wildcard();
	            break;

	        case 7:
	            localctx = new MultiSelectListExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 55;
	            this.multiSelectList();
	            break;

	        case 8:
	            localctx = new MultiSelectHashExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 56;
	            this.multiSelectHash();
	            break;

	        case 9:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 57;
	            this.literal();
	            break;

	        case 10:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 58;
	            this.functionExpression();
	            break;

	        case 11:
	            localctx = new RawStringExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 59;
	            this.match(JSONFormulaParser.RAW_STRING);
	            break;

	        case 12:
	            localctx = new NumberLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 60;
	            _la = this._input.LA(1);
	            if(!(_la===JSONFormulaParser.REAL_OR_EXPONENT_NUMBER || _la===JSONFormulaParser.SIGNED_INT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 13:
	            localctx = new CurrentNodeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 61;
	            this.currentNode();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 90;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 64;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }

	                    this.state = 65;
	                    this.match(JSONFormulaParser.T__1);
	                    this.state = 66;
	                    this.expression(20);
	                    break;

	                case 2:
	                    localctx = new MultDivExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 68;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSONFormulaParser.T__2) | (1 << JSONFormulaParser.T__3) | (1 << JSONFormulaParser.T__4) | (1 << JSONFormulaParser.T__5))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 69;
	                    this.expression(19);
	                    break;

	                case 3:
	                    localctx = new AddSubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 70;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 71;
	                    _la = this._input.LA(1);
	                    if(!(_la===JSONFormulaParser.T__6 || _la===JSONFormulaParser.T__7)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 72;
	                    this.expression(18);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 74;
	                    this.match(JSONFormulaParser.COMPARATOR);
	                    this.state = 75;
	                    this.expression(17);
	                    break;

	                case 5:
	                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 77;
	                    this.match(JSONFormulaParser.T__8);
	                    this.state = 78;
	                    this.expression(16);
	                    break;

	                case 6:
	                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 80;
	                    this.match(JSONFormulaParser.T__9);
	                    this.state = 81;
	                    this.expression(15);
	                    break;

	                case 7:
	                    localctx = new PipeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 82;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 83;
	                    this.match(JSONFormulaParser.T__13);
	                    this.state = 84;
	                    this.expression(5);
	                    break;

	                case 8:
	                    localctx = new ChainExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 85;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 86;
	                    this.match(JSONFormulaParser.T__0);
	                    this.state = 87;
	                    this.chainedExpression();
	                    break;

	                case 9:
	                    localctx = new BracketedExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JSONFormulaParser.RULE_expression);
	                    this.state = 88;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 89;
	                    this.chainedBracketSpecifier();
	                    break;

	                } 
	            }
	            this.state = 94;
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
	}



	chainedExpression() {
	    let localctx = new ChainedExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSONFormulaParser.RULE_chainedExpression);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.multiSelectList();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.multiSelectHash();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.functionExpression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.wildcard();
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
	}



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSONFormulaParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(JSONFormulaParser.T__2);
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
	}



	multiSelectList() {
	    let localctx = new MultiSelectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSONFormulaParser.RULE_multiSelectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(JSONFormulaParser.T__14);
	        this.state = 105;
	        this.expression(0);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JSONFormulaParser.T__15) {
	            this.state = 106;
	            this.match(JSONFormulaParser.T__15);
	            this.state = 107;
	            this.expression(0);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 113;
	        this.match(JSONFormulaParser.T__16);
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
	}



	multiSelectHash() {
	    let localctx = new MultiSelectHashContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSONFormulaParser.RULE_multiSelectHash);
	    var _la = 0; // Token type
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new EmptyHashContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.match(JSONFormulaParser.T__17);
	            this.state = 116;
	            this.match(JSONFormulaParser.T__18);
	            break;

	        case 2:
	            localctx = new NonEmptyHashContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.match(JSONFormulaParser.T__17);
	            this.state = 118;
	            this.keyvalExpr();
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JSONFormulaParser.T__15) {
	                this.state = 119;
	                this.match(JSONFormulaParser.T__15);
	                this.state = 120;
	                this.keyvalExpr();
	                this.state = 125;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 126;
	            this.match(JSONFormulaParser.T__18);
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
	}



	keyvalExpr() {
	    let localctx = new KeyvalExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JSONFormulaParser.RULE_keyvalExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.identifier();
	        this.state = 131;
	        this.match(JSONFormulaParser.T__19);
	        this.state = 132;
	        this.expression(0);
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
	}



	bracketSpecifier() {
	    let localctx = new BracketSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JSONFormulaParser.RULE_bracketSpecifier);
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new BracketIndexContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 135;
	            this.match(JSONFormulaParser.SIGNED_INT);
	            this.state = 136;
	            this.match(JSONFormulaParser.T__16);
	            break;

	        case 2:
	            localctx = new BracketStarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 138;
	            this.match(JSONFormulaParser.T__2);
	            this.state = 139;
	            this.match(JSONFormulaParser.T__16);
	            break;

	        case 3:
	            localctx = new BracketSliceContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 141;
	            this.slice();
	            this.state = 142;
	            this.match(JSONFormulaParser.T__16);
	            break;

	        case 4:
	            localctx = new BracketFlattenContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 144;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 145;
	            this.match(JSONFormulaParser.T__16);
	            break;

	        case 5:
	            localctx = new SelectContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 146;
	            this.match(JSONFormulaParser.T__20);
	            this.state = 147;
	            this.expression(0);
	            this.state = 148;
	            this.match(JSONFormulaParser.T__16);
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
	}



	chainedBracketSpecifier() {
	    let localctx = new ChainedBracketSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JSONFormulaParser.RULE_chainedBracketSpecifier);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ChainedBracketContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this.bracketSpecifier();
	            break;

	        case 2:
	            localctx = new ChainedBracketIndexContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 153;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 154;
	            this.expression(0);
	            this.state = 155;
	            this.match(JSONFormulaParser.T__16);
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
	}



	slice() {
	    let localctx = new SliceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JSONFormulaParser.RULE_slice);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSONFormulaParser.T__2) | (1 << JSONFormulaParser.T__7) | (1 << JSONFormulaParser.T__10) | (1 << JSONFormulaParser.T__11) | (1 << JSONFormulaParser.T__14) | (1 << JSONFormulaParser.T__17) | (1 << JSONFormulaParser.T__20) | (1 << JSONFormulaParser.T__21) | (1 << JSONFormulaParser.T__22) | (1 << JSONFormulaParser.RAW_STRING) | (1 << JSONFormulaParser.JSON_CONSTANT) | (1 << JSONFormulaParser.NAME) | (1 << JSONFormulaParser.STRING) | (1 << JSONFormulaParser.REAL_OR_EXPONENT_NUMBER) | (1 << JSONFormulaParser.SIGNED_INT))) !== 0)) {
	            this.state = 159;
	            localctx.start = this.expression(0);
	        }

	        this.state = 162;
	        this.match(JSONFormulaParser.T__19);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSONFormulaParser.T__2) | (1 << JSONFormulaParser.T__7) | (1 << JSONFormulaParser.T__10) | (1 << JSONFormulaParser.T__11) | (1 << JSONFormulaParser.T__14) | (1 << JSONFormulaParser.T__17) | (1 << JSONFormulaParser.T__20) | (1 << JSONFormulaParser.T__21) | (1 << JSONFormulaParser.T__22) | (1 << JSONFormulaParser.RAW_STRING) | (1 << JSONFormulaParser.JSON_CONSTANT) | (1 << JSONFormulaParser.NAME) | (1 << JSONFormulaParser.STRING) | (1 << JSONFormulaParser.REAL_OR_EXPONENT_NUMBER) | (1 << JSONFormulaParser.SIGNED_INT))) !== 0)) {
	            this.state = 163;
	            localctx.stop = this.expression(0);
	        }

	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===JSONFormulaParser.T__19) {
	            this.state = 166;
	            this.match(JSONFormulaParser.T__19);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSONFormulaParser.T__2) | (1 << JSONFormulaParser.T__7) | (1 << JSONFormulaParser.T__10) | (1 << JSONFormulaParser.T__11) | (1 << JSONFormulaParser.T__14) | (1 << JSONFormulaParser.T__17) | (1 << JSONFormulaParser.T__20) | (1 << JSONFormulaParser.T__21) | (1 << JSONFormulaParser.T__22) | (1 << JSONFormulaParser.RAW_STRING) | (1 << JSONFormulaParser.JSON_CONSTANT) | (1 << JSONFormulaParser.NAME) | (1 << JSONFormulaParser.STRING) | (1 << JSONFormulaParser.REAL_OR_EXPONENT_NUMBER) | (1 << JSONFormulaParser.SIGNED_INT))) !== 0)) {
	                this.state = 167;
	                localctx.step = this.expression(0);
	            }

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
	}



	functionExpression() {
	    let localctx = new FunctionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JSONFormulaParser.RULE_functionExpression);
	    var _la = 0; // Token type
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 172;
	            this.match(JSONFormulaParser.NAME);
	            this.state = 173;
	            this.match(JSONFormulaParser.T__11);
	            this.state = 174;
	            this.functionArg();
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JSONFormulaParser.T__15) {
	                this.state = 175;
	                this.match(JSONFormulaParser.T__15);
	                this.state = 176;
	                this.functionArg();
	                this.state = 181;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 182;
	            this.match(JSONFormulaParser.T__12);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.match(JSONFormulaParser.NAME);
	            this.state = 185;
	            this.match(JSONFormulaParser.T__11);
	            this.state = 186;
	            this.match(JSONFormulaParser.T__12);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 187;
	            this.match(JSONFormulaParser.JSON_CONSTANT);
	            this.state = 188;
	            this.match(JSONFormulaParser.T__11);
	            this.state = 189;
	            this.match(JSONFormulaParser.T__12);
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
	}



	functionArg() {
	    let localctx = new FunctionArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JSONFormulaParser.RULE_functionArg);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JSONFormulaParser.T__2:
	        case JSONFormulaParser.T__7:
	        case JSONFormulaParser.T__10:
	        case JSONFormulaParser.T__11:
	        case JSONFormulaParser.T__14:
	        case JSONFormulaParser.T__17:
	        case JSONFormulaParser.T__20:
	        case JSONFormulaParser.T__21:
	        case JSONFormulaParser.T__22:
	        case JSONFormulaParser.RAW_STRING:
	        case JSONFormulaParser.JSON_CONSTANT:
	        case JSONFormulaParser.NAME:
	        case JSONFormulaParser.STRING:
	        case JSONFormulaParser.REAL_OR_EXPONENT_NUMBER:
	        case JSONFormulaParser.SIGNED_INT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.expression(0);
	            break;
	        case JSONFormulaParser.T__4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.expressionType();
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
	}



	currentNode() {
	    let localctx = new CurrentNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JSONFormulaParser.RULE_currentNode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(JSONFormulaParser.T__21);
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
	}



	expressionType() {
	    let localctx = new ExpressionTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JSONFormulaParser.RULE_expressionType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(JSONFormulaParser.T__4);
	        this.state = 199;
	        this.expression(0);
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
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JSONFormulaParser.RULE_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(JSONFormulaParser.T__22);
	        this.state = 202;
	        this.jsonValue();
	        this.state = 203;
	        this.match(JSONFormulaParser.T__22);
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
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JSONFormulaParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSONFormulaParser.JSON_CONSTANT) | (1 << JSONFormulaParser.NAME) | (1 << JSONFormulaParser.STRING))) !== 0))) {
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
	}



	jsonObject() {
	    let localctx = new JsonObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JSONFormulaParser.RULE_jsonObject);
	    var _la = 0; // Token type
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.match(JSONFormulaParser.T__17);
	            this.state = 208;
	            this.jsonObjectPair();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JSONFormulaParser.T__15) {
	                this.state = 209;
	                this.match(JSONFormulaParser.T__15);
	                this.state = 210;
	                this.jsonObjectPair();
	                this.state = 215;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 216;
	            this.match(JSONFormulaParser.T__18);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 218;
	            this.match(JSONFormulaParser.T__17);
	            this.state = 219;
	            this.match(JSONFormulaParser.T__18);
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
	}



	jsonObjectPair() {
	    let localctx = new JsonObjectPairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JSONFormulaParser.RULE_jsonObjectPair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(JSONFormulaParser.STRING);
	        this.state = 223;
	        this.match(JSONFormulaParser.T__19);
	        this.state = 224;
	        this.jsonValue();
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
	}



	jsonArray() {
	    let localctx = new JsonArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JSONFormulaParser.RULE_jsonArray);
	    var _la = 0; // Token type
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 226;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 227;
	            this.jsonValue();
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JSONFormulaParser.T__15) {
	                this.state = 228;
	                this.match(JSONFormulaParser.T__15);
	                this.state = 229;
	                this.jsonValue();
	                this.state = 234;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 235;
	            this.match(JSONFormulaParser.T__16);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(JSONFormulaParser.T__14);
	            this.state = 238;
	            this.match(JSONFormulaParser.T__16);
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
	}



	jsonValue() {
	    let localctx = new JsonValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JSONFormulaParser.RULE_jsonValue);
	    var _la = 0; // Token type
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JSONFormulaParser.STRING:
	            localctx = new JsonStringValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.match(JSONFormulaParser.STRING);
	            break;
	        case JSONFormulaParser.REAL_OR_EXPONENT_NUMBER:
	        case JSONFormulaParser.SIGNED_INT:
	            localctx = new JsonNumberValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 242;
	            _la = this._input.LA(1);
	            if(!(_la===JSONFormulaParser.REAL_OR_EXPONENT_NUMBER || _la===JSONFormulaParser.SIGNED_INT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case JSONFormulaParser.T__17:
	            localctx = new JsonObjectValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 243;
	            this.jsonObject();
	            break;
	        case JSONFormulaParser.T__14:
	            localctx = new JsonArrayValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 244;
	            this.jsonArray();
	            break;
	        case JSONFormulaParser.JSON_CONSTANT:
	            localctx = new JsonConstantValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 245;
	            this.match(JSONFormulaParser.JSON_CONSTANT);
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
	}


}

JSONFormulaParser.EOF = antlr4.Token.EOF;
JSONFormulaParser.T__0 = 1;
JSONFormulaParser.T__1 = 2;
JSONFormulaParser.T__2 = 3;
JSONFormulaParser.T__3 = 4;
JSONFormulaParser.T__4 = 5;
JSONFormulaParser.T__5 = 6;
JSONFormulaParser.T__6 = 7;
JSONFormulaParser.T__7 = 8;
JSONFormulaParser.T__8 = 9;
JSONFormulaParser.T__9 = 10;
JSONFormulaParser.T__10 = 11;
JSONFormulaParser.T__11 = 12;
JSONFormulaParser.T__12 = 13;
JSONFormulaParser.T__13 = 14;
JSONFormulaParser.T__14 = 15;
JSONFormulaParser.T__15 = 16;
JSONFormulaParser.T__16 = 17;
JSONFormulaParser.T__17 = 18;
JSONFormulaParser.T__18 = 19;
JSONFormulaParser.T__19 = 20;
JSONFormulaParser.T__20 = 21;
JSONFormulaParser.T__21 = 22;
JSONFormulaParser.T__22 = 23;
JSONFormulaParser.COMPARATOR = 24;
JSONFormulaParser.RAW_STRING = 25;
JSONFormulaParser.JSON_CONSTANT = 26;
JSONFormulaParser.NAME = 27;
JSONFormulaParser.STRING = 28;
JSONFormulaParser.REAL_OR_EXPONENT_NUMBER = 29;
JSONFormulaParser.SIGNED_INT = 30;
JSONFormulaParser.WS = 31;

JSONFormulaParser.RULE_formula = 0;
JSONFormulaParser.RULE_expression = 1;
JSONFormulaParser.RULE_chainedExpression = 2;
JSONFormulaParser.RULE_wildcard = 3;
JSONFormulaParser.RULE_multiSelectList = 4;
JSONFormulaParser.RULE_multiSelectHash = 5;
JSONFormulaParser.RULE_keyvalExpr = 6;
JSONFormulaParser.RULE_bracketSpecifier = 7;
JSONFormulaParser.RULE_chainedBracketSpecifier = 8;
JSONFormulaParser.RULE_slice = 9;
JSONFormulaParser.RULE_functionExpression = 10;
JSONFormulaParser.RULE_functionArg = 11;
JSONFormulaParser.RULE_currentNode = 12;
JSONFormulaParser.RULE_expressionType = 13;
JSONFormulaParser.RULE_literal = 14;
JSONFormulaParser.RULE_identifier = 15;
JSONFormulaParser.RULE_jsonObject = 16;
JSONFormulaParser.RULE_jsonObjectPair = 17;
JSONFormulaParser.RULE_jsonArray = 18;
JSONFormulaParser.RULE_jsonValue = 19;

class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_formula;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(JSONFormulaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PipeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterPipeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitPipeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitPipeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.PipeExpressionContext = PipeExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.IdentifierExpressionContext = IdentifierExpressionContext;

class MultDivExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterMultDivExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitMultDivExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitMultDivExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.MultDivExpressionContext = MultDivExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.NotExpressionContext = NotExpressionContext;

class RawStringExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RAW_STRING() {
	    return this.getToken(JSONFormulaParser.RAW_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterRawStringExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitRawStringExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitRawStringExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.RawStringExpressionContext = RawStringExpressionContext;

class ComparisonExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMPARATOR() {
	    return this.getToken(JSONFormulaParser.COMPARATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitComparisonExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitComparisonExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.ComparisonExpressionContext = ComparisonExpressionContext;

class ParenExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterParenExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitParenExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitParenExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.ParenExpressionContext = ParenExpressionContext;

class BracketExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bracketSpecifier() {
	    return this.getTypedRuleContext(BracketSpecifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.BracketExpressionContext = BracketExpressionContext;

class OrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.OrExpressionContext = OrExpressionContext;

class UnaryMinusExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitUnaryMinusExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitUnaryMinusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class CurrentNodeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	currentNode() {
	    return this.getTypedRuleContext(CurrentNodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterCurrentNodeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitCurrentNodeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitCurrentNodeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.CurrentNodeExpressionContext = CurrentNodeExpressionContext;

class PowerExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterPowerExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitPowerExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitPowerExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.PowerExpressionContext = PowerExpressionContext;

class ChainExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	chainedExpression() {
	    return this.getTypedRuleContext(ChainedExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterChainExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitChainExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitChainExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.ChainExpressionContext = ChainExpressionContext;

class AndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.AndExpressionContext = AndExpressionContext;

class MultiSelectHashExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiSelectHash() {
	    return this.getTypedRuleContext(MultiSelectHashContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterMultiSelectHashExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitMultiSelectHashExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitMultiSelectHashExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.MultiSelectHashExpressionContext = MultiSelectHashExpressionContext;

class WildcardExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterWildcardExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitWildcardExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitWildcardExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.WildcardExpressionContext = WildcardExpressionContext;

class FunctionCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionExpression() {
	    return this.getTypedRuleContext(FunctionExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterFunctionCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitFunctionCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitFunctionCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

class AddSubtractExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterAddSubtractExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitAddSubtractExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitAddSubtractExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.AddSubtractExpressionContext = AddSubtractExpressionContext;

class MultiSelectListExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiSelectList() {
	    return this.getTypedRuleContext(MultiSelectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterMultiSelectListExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitMultiSelectListExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitMultiSelectListExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.MultiSelectListExpressionContext = MultiSelectListExpressionContext;

class BracketedExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	chainedBracketSpecifier() {
	    return this.getTypedRuleContext(ChainedBracketSpecifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterBracketedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitBracketedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitBracketedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.BracketedExpressionContext = BracketedExpressionContext;

class LiteralExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.LiteralExpressionContext = LiteralExpressionContext;

class NumberLiteralContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REAL_OR_EXPONENT_NUMBER() {
	    return this.getToken(JSONFormulaParser.REAL_OR_EXPONENT_NUMBER, 0);
	};

	SIGNED_INT() {
	    return this.getToken(JSONFormulaParser.SIGNED_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterNumberLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitNumberLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitNumberLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.NumberLiteralContext = NumberLiteralContext;

class ChainedExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_chainedExpression;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	multiSelectList() {
	    return this.getTypedRuleContext(MultiSelectListContext,0);
	};

	multiSelectHash() {
	    return this.getTypedRuleContext(MultiSelectHashContext,0);
	};

	functionExpression() {
	    return this.getTypedRuleContext(FunctionExpressionContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterChainedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitChainedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitChainedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_wildcard;
    }


	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitWildcard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiSelectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_multiSelectList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterMultiSelectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitMultiSelectList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitMultiSelectList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiSelectHashContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_multiSelectHash;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NonEmptyHashContext extends MultiSelectHashContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	keyvalExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyvalExprContext);
	    } else {
	        return this.getTypedRuleContext(KeyvalExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterNonEmptyHash(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitNonEmptyHash(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitNonEmptyHash(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.NonEmptyHashContext = NonEmptyHashContext;

class EmptyHashContext extends MultiSelectHashContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterEmptyHash(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitEmptyHash(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitEmptyHash(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.EmptyHashContext = EmptyHashContext;

class KeyvalExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_keyvalExpr;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterKeyvalExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitKeyvalExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitKeyvalExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BracketSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_bracketSpecifier;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SelectContext extends BracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterSelect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitSelect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitSelect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.SelectContext = SelectContext;

class BracketFlattenContext extends BracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterBracketFlatten(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitBracketFlatten(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitBracketFlatten(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.BracketFlattenContext = BracketFlattenContext;

class BracketSliceContext extends BracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	slice() {
	    return this.getTypedRuleContext(SliceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterBracketSlice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitBracketSlice(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitBracketSlice(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.BracketSliceContext = BracketSliceContext;

class BracketIndexContext extends BracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SIGNED_INT() {
	    return this.getToken(JSONFormulaParser.SIGNED_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterBracketIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitBracketIndex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitBracketIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.BracketIndexContext = BracketIndexContext;

class BracketStarContext extends BracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterBracketStar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitBracketStar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitBracketStar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.BracketStarContext = BracketStarContext;

class ChainedBracketSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_chainedBracketSpecifier;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ChainedBracketContext extends ChainedBracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bracketSpecifier() {
	    return this.getTypedRuleContext(BracketSpecifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterChainedBracket(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitChainedBracket(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitChainedBracket(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.ChainedBracketContext = ChainedBracketContext;

class ChainedBracketIndexContext extends ChainedBracketSpecifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterChainedBracketIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitChainedBracketIndex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitChainedBracketIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.ChainedBracketIndexContext = ChainedBracketIndexContext;

class SliceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_slice;
        this.start = null; // ExpressionContext
        this.stop = null; // ExpressionContext
        this.step = null; // ExpressionContext
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterSlice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitSlice(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitSlice(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_functionExpression;
    }

	NAME() {
	    return this.getToken(JSONFormulaParser.NAME, 0);
	};

	functionArg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionArgContext);
	    } else {
	        return this.getTypedRuleContext(FunctionArgContext,i);
	    }
	};

	JSON_CONSTANT() {
	    return this.getToken(JSONFormulaParser.JSON_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_functionArg;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expressionType() {
	    return this.getTypedRuleContext(ExpressionTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterFunctionArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitFunctionArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitFunctionArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CurrentNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_currentNode;
    }


	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterCurrentNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitCurrentNode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitCurrentNode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_expressionType;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterExpressionType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitExpressionType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitExpressionType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_literal;
    }

	jsonValue() {
	    return this.getTypedRuleContext(JsonValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_identifier;
    }

	NAME() {
	    return this.getToken(JSONFormulaParser.NAME, 0);
	};

	STRING() {
	    return this.getToken(JSONFormulaParser.STRING, 0);
	};

	JSON_CONSTANT() {
	    return this.getToken(JSONFormulaParser.JSON_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JsonObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_jsonObject;
    }

	jsonObjectPair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JsonObjectPairContext);
	    } else {
	        return this.getTypedRuleContext(JsonObjectPairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JsonObjectPairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_jsonObjectPair;
    }

	STRING() {
	    return this.getToken(JSONFormulaParser.STRING, 0);
	};

	jsonValue() {
	    return this.getTypedRuleContext(JsonValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonObjectPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonObjectPair(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonObjectPair(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JsonArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_jsonArray;
    }

	jsonValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JsonValueContext);
	    } else {
	        return this.getTypedRuleContext(JsonValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JsonValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSONFormulaParser.RULE_jsonValue;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class JsonArrayValueContext extends JsonValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	jsonArray() {
	    return this.getTypedRuleContext(JsonArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonArrayValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonArrayValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonArrayValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.JsonArrayValueContext = JsonArrayValueContext;

class JsonStringValueContext extends JsonValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(JSONFormulaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonStringValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonStringValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonStringValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.JsonStringValueContext = JsonStringValueContext;

class JsonObjectValueContext extends JsonValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	jsonObject() {
	    return this.getTypedRuleContext(JsonObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonObjectValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonObjectValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonObjectValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.JsonObjectValueContext = JsonObjectValueContext;

class JsonConstantValueContext extends JsonValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	JSON_CONSTANT() {
	    return this.getToken(JSONFormulaParser.JSON_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonConstantValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonConstantValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonConstantValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.JsonConstantValueContext = JsonConstantValueContext;

class JsonNumberValueContext extends JsonValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REAL_OR_EXPONENT_NUMBER() {
	    return this.getToken(JSONFormulaParser.REAL_OR_EXPONENT_NUMBER, 0);
	};

	SIGNED_INT() {
	    return this.getToken(JSONFormulaParser.SIGNED_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.enterJsonNumberValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSONFormulaListener ) {
	        listener.exitJsonNumberValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSONFormulaVisitor ) {
	        return visitor.visitJsonNumberValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSONFormulaParser.JsonNumberValueContext = JsonNumberValueContext;


JSONFormulaParser.FormulaContext = FormulaContext; 
JSONFormulaParser.ExpressionContext = ExpressionContext; 
JSONFormulaParser.ChainedExpressionContext = ChainedExpressionContext; 
JSONFormulaParser.WildcardContext = WildcardContext; 
JSONFormulaParser.MultiSelectListContext = MultiSelectListContext; 
JSONFormulaParser.MultiSelectHashContext = MultiSelectHashContext; 
JSONFormulaParser.KeyvalExprContext = KeyvalExprContext; 
JSONFormulaParser.BracketSpecifierContext = BracketSpecifierContext; 
JSONFormulaParser.ChainedBracketSpecifierContext = ChainedBracketSpecifierContext; 
JSONFormulaParser.SliceContext = SliceContext; 
JSONFormulaParser.FunctionExpressionContext = FunctionExpressionContext; 
JSONFormulaParser.FunctionArgContext = FunctionArgContext; 
JSONFormulaParser.CurrentNodeContext = CurrentNodeContext; 
JSONFormulaParser.ExpressionTypeContext = ExpressionTypeContext; 
JSONFormulaParser.LiteralContext = LiteralContext; 
JSONFormulaParser.IdentifierContext = IdentifierContext; 
JSONFormulaParser.JsonObjectContext = JsonObjectContext; 
JSONFormulaParser.JsonObjectPairContext = JsonObjectPairContext; 
JSONFormulaParser.JsonArrayContext = JsonArrayContext; 
JSONFormulaParser.JsonValueContext = JsonValueContext; 
