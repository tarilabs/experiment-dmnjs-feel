"use strict";
exports.__esModule = true;
var EvalHelper = (function () {
    function EvalHelper() {
    }
    EvalHelper.normalizeVariableName = function (name) {
        var trimmed = name.trim();
        return trimmed.replace(this.regex, "");
    };
    EvalHelper.regex = new RegExp("[\\s\u00A0]+");
    return EvalHelper;
}());
exports.EvalHelper = EvalHelper;
//# sourceMappingURL=EvalHelper.js.map