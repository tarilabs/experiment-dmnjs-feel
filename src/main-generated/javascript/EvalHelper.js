"use strict";
exports.__esModule = true;
var EvalHelper = (function () {
    function EvalHelper() {
    }
    EvalHelper.normalizeVariableName = function (name) {
        var trimmed = name.trim();
        return trimmed.replace(this.regex, " ");
    };
    EvalHelper.unescapeString = function (text) {
        if (text == null) {
            throw Error("Illegal state.");
        }
        if (text.length >= 2 && (function (str, searchString, position) {
            if (position === void 0) { position = 0; }
            return str.substr(position, searchString.length) === searchString;
        })(text, "\"") && (function (str, searchString) { var pos = str.length - searchString.length; var lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(text, "\"")) {
            text = text.substring(1, text.length - 1);
        }
        if (text.indexOf('\\') >= 0) {
            var r = { str: "", toString: function () { return this.str; } };
            var _loop_1 = function (i) {
                {
                    var c_1 = text.charAt(i);
                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c_1) == '\\'.charCodeAt(0)) {
                        if (text.length > i + 1) {
                            i++;
                            var cn_1 = text.charAt(i);
                            switch ((cn_1).charCodeAt(0)) {
                                case 98:
                                    (function (sb) { sb.str = sb.str.concat('\b'); return sb; })(r);
                                    break;
                                case 116:
                                    (function (sb) { sb.str = sb.str.concat('\t'); return sb; })(r);
                                    break;
                                case 110:
                                    (function (sb) { sb.str = sb.str.concat('\n'); return sb; })(r);
                                    break;
                                case 102:
                                    (function (sb) { sb.str = sb.str.concat('\f'); return sb; })(r);
                                    break;
                                case 114:
                                    (function (sb) { sb.str = sb.str.concat('\r'); return sb; })(r);
                                    break;
                                case 34:
                                    (function (sb) { sb.str = sb.str.concat('\"'); return sb; })(r);
                                    break;
                                case 39:
                                    (function (sb) { sb.str = sb.str.concat('\''); return sb; })(r);
                                    break;
                                case 92:
                                    (function (sb) { sb.str = sb.str.concat('\\'); return sb; })(r);
                                    break;
                                case 117:
                                    if (text.length >= i + 5) {
                                        var hex_1 = text.substring(i + 1, i + 5);
                                        (function (sb) { sb.str = sb.str.concat(String.fromCharCode(parseInt(hex_1, 16))); return sb; })(r);
                                        i += 4;
                                    }
                                    else {
                                        (function (sb) { sb.str = sb.str.concat(cn_1); return sb; })((function (sb) { sb.str = sb.str.concat("\\"); return sb; })(r));
                                    }
                                    break;
                                case 85:
                                    if (text.length >= i + 7) {
                                        var hex_2 = text.substring(i + 1, i + 7);
                                        (function (sb) { sb.str = sb.str.concat(String.fromCharCode(parseInt(hex_2, 16))); return sb; })(r);
                                        i += 6;
                                    }
                                    else {
                                        (function (sb) { sb.str = sb.str.concat(cn_1); return sb; })((function (sb) { sb.str = sb.str.concat("\\"); return sb; })(r));
                                    }
                                    break;
                                default:
                                    (function (sb) { sb.str = sb.str.concat(cn_1); return sb; })((function (sb) { sb.str = sb.str.concat("\\"); return sb; })(r));
                            }
                        }
                        else {
                            (function (sb) { sb.str = sb.str.concat(c_1); return sb; })(r);
                        }
                    }
                    else {
                        (function (sb) { sb.str = sb.str.concat(c_1); return sb; })(r);
                    }
                }
                ;
                out_i_1 = i;
            };
            var out_i_1;
            for (var i = 0; i < text.length; i++) {
                _loop_1(i);
                i = out_i_1;
            }
            text = r.str;
        }
        return text;
    };
    EvalHelper.regex = new RegExp("[\\s\u00A0]+");
    return EvalHelper;
}());
exports.EvalHelper = EvalHelper;
//# sourceMappingURL=EvalHelper.js.map